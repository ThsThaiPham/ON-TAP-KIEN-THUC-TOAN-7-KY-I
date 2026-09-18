import React, { useState, useEffect, useRef } from 'react';
import {
  StudentInfo,
  QuizConfig,
  Question,
  ExamResult,
  DifficultyLevel
} from '../types';
import { CHAPTER_LIST_KY1, LESSON_MAP_KY1 } from '../data/questionBankData';
import { generateQuiz, evaluateStudentExam } from '../utils/quizGenerator';
import { Certificate16x9 } from './Certificate16x9';
import { MathText } from './MathText';
import {
  playApplauseAndCheer,
  playEncouragementMusic,
  triggerGrandCelebration,
  setSoundMuted,
  getIsSoundMuted
} from '../utils/audioAndCelebration';
import {
  User,
  School,
  GraduationCap,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Play,
  RotateCcw,
  Printer,
  Flag,
  ArrowRight,
  ArrowLeft,
  Award,
  Sparkles,
  BarChart3,
  Lightbulb,
  Check,
  ChevronRight,
  Sliders,
  HelpCircle,
  BookOpen,
  Volume2,
  VolumeX,
  Smile,
  Heart,
  Lock,
  FileSpreadsheet
} from 'lucide-react';
import { saveExamResult, exportSingleExamToExcel } from '../utils/historyStorage';

interface QuizViewProps {
  student: StudentInfo;
  setStudent: React.Dispatch<React.SetStateAction<StudentInfo>>;
  onOpenAiHelp?: (questionContext: string) => void;
  onNavigateToHistory?: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  student,
  setStudent,
  onOpenAiHelp,
  onNavigateToHistory
}) => {
  // Screen state: 'config' | 'exam' | 'result'
  const [screen, setScreen] = useState<'config' | 'exam' | 'result'>('config');

  // Sound state
  const [isMuted, setIsMuted] = useState<boolean>(getIsSoundMuted());
  const [answerNotification, setAnswerNotification] = useState<{
    type: 'correct' | 'incorrect';
    message: string;
    key: number;
  } | null>(null);

  // Quiz configuration
  const [config, setConfig] = useState<QuizConfig>({
    chapterId: 'all',
    lessonId: 'all',
    questionCount: 20,
    difficulty: 'all',
    mode: 'exam',
    durationMinutes: 45
  });

  // Active exam state
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [flaggedIds, setFlaggedIds] = useState<Set<string>>(new Set());
  const [remainingSeconds, setRemainingSeconds] = useState<number>(45 * 60);
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [isSubmitConfirmOpen, setIsSubmitConfirmOpen] = useState<boolean>(false);
  const [revealedPracticeAnswers, setRevealedPracticeAnswers] = useState<Set<string>>(new Set());

  // Result state
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [resultFilter, setResultFilter] = useState<'all' | 'correct' | 'incorrect'>('all');
  const [resultTab, setResultTab] = useState<'all' | 'certificate' | 'scorecard'>('all');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Available lessons based on chapter
  const availableLessons = config.chapterId !== 'all' ? LESSON_MAP_KY1[config.chapterId] || [] : [];

  // Load student info from localStorage if available
  useEffect(() => {
    const savedName = localStorage.getItem('toan7_student_name');
    const savedClass = localStorage.getItem('toan7_student_class');
    const savedSchool = localStorage.getItem('toan7_student_school');
    if (savedName || savedClass || savedSchool) {
      setStudent({
        fullName: savedName || '',
        className: savedClass || '',
        schoolName: savedSchool || ''
      });
    }
  }, [setStudent]);

  // Persist student info
  const handleStudentChange = (field: keyof StudentInfo, value: string) => {
    setStudent((prev) => {
      const updated = { ...prev, [field]: value };
      localStorage.setItem(`toan7_student_${field === 'fullName' ? 'name' : field === 'className' ? 'class' : 'school'}`, value);
      return updated;
    });
  };

  // Timer countdown
  useEffect(() => {
    if (screen === 'exam' && config.mode === 'exam' && config.durationMinutes > 0) {
      timerRef.current = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current as NodeJS.Timeout);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [screen, config.mode, config.durationMinutes]);

  // Start exam handler
  const handleStartExam = () => {
    if (!student.fullName.trim()) {
      alert('Vui lòng nhập Họ và tên của em trước khi bắt đầu ôn tập.');
      return;
    }

    const generated = generateQuiz(config);
    if (generated.length === 0) {
      alert('Không tìm thấy câu hỏi phù hợp với bộ lọc. Vui lòng chọn lại.');
      return;
    }

    setQuestions(generated);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedIds(new Set());
    setRevealedPracticeAnswers(new Set());
    setRemainingSeconds(config.durationMinutes * 60);
    setStartTime(new Date());
    setScreen('exam');
  };

  // Select an answer
  const handleSelectOption = (optionIndex: number) => {
    const q = questions[currentIndex];
    // Khóa đáp án: Nếu câu hỏi này đã được chọn đáp án thì hệ thống khóa lại, không cho thay đổi
    if (userAnswers[q.id] !== undefined) {
      return;
    }

    setUserAnswers((prev) => ({
      ...prev,
      [q.id]: optionIndex
    }));

    if (config.mode === 'practice') {
      setRevealedPracticeAnswers((prev) => new Set([...prev, q.id]));

      const isCorrect = optionIndex === q.correctAnswer;
      if (isCorrect) {
        // Trả lời đúng: Tiếng vỗ tay chúc mừng & tung hoa hoành tráng
        playApplauseAndCheer();
        triggerGrandCelebration();
        setAnswerNotification({
          type: 'correct',
          message: 'XUẤT SẮC! 🎉 Em đã trả lời hoàn toàn chính xác! Hãy tiếp tục phát huy nhé!',
          key: Date.now()
        });
      } else {
        // Trả lời sai: Đệm một đoạn nhạc du dương để khích lệ học sinh cố gắng hơn
        playEncouragementMusic();
        setAnswerNotification({
          type: 'incorrect',
          message: 'CỐ LÊN NHÉ EM! 💪 Chưa chính xác, cùng Thầy Thái xem kĩ hướng dẫn giải và mẹo tránh cạm bẫy bên dưới!',
          key: Date.now()
        });
      }
    }
  };

  // Toggle flag on current question
  const toggleFlag = () => {
    const q = questions[currentIndex];
    setFlaggedIds((prev) => {
      const next = new Set(prev);
      if (next.has(q.id)) next.delete(q.id);
      else next.add(q.id);
      return next;
    });
  };

  // Submit and grade the exam
  const handleSubmitExam = () => {
    setIsSubmitConfirmOpen(false);
    if (timerRef.current) clearInterval(timerRef.current);

    const finishDate = new Date();
    const timeSpent = Math.max(1, Math.round((finishDate.getTime() - startTime.getTime()) / 1000));

    let correct = 0;
    const byDifficulty: Record<DifficultyLevel, { total: number; correct: number }> = {
      'Nhận biết': { total: 0, correct: 0 },
      'Thông hiểu': { total: 0, correct: 0 },
      'Vận dụng': { total: 0, correct: 0 }
    };

    const byChapter: Record<string, { total: number; correct: number; title: string }> = {};

    questions.forEach((q) => {
      const userChoice = userAnswers[q.id];
      const isRight = userChoice === q.correctAnswer;
      if (isRight) correct++;

      // Difficulty stats
      byDifficulty[q.difficulty].total++;
      if (isRight) byDifficulty[q.difficulty].correct++;

      // Chapter stats
      if (!byChapter[q.chapterId]) {
        byChapter[q.chapterId] = { total: 0, correct: 0, title: q.chapterTitle };
      }
      byChapter[q.chapterId].total++;
      if (isRight) byChapter[q.chapterId].correct++;
    });

    const percentage = Math.round((correct / questions.length) * 100);
    const score = Number(((correct / questions.length) * 10).toFixed(1));

    // Xếp loại học tập theo yêu cầu:
    // >= 90%: "Xuất sắc", >= 80%: "Tốt", >= 70%: "Khá", >= 50%: "Đạt", còn lại: "Chưa đạt"
    let classification: ExamResult['classification'] = 'Chưa đạt';
    if (percentage >= 90) classification = 'Xuất sắc';
    else if (percentage >= 80) classification = 'Tốt';
    else if (percentage >= 70) classification = 'Khá';
    else if (percentage >= 50) classification = 'Đạt';

    const feedback = evaluateStudentExam(score, student.fullName, byDifficulty);

    const result: ExamResult = {
      id: `exam-${Date.now()}`,
      student: { ...student },
      config: { ...config },
      startTime: startTime.toLocaleTimeString('vi-VN'),
      finishTime: finishDate.toLocaleTimeString('vi-VN'),
      timeSpentSeconds: timeSpent,
      totalQuestions: questions.length,
      correctCount: correct,
      score,
      classification,
      byDifficulty,
      byChapter,
      userAnswers,
      questions,
      teacherFeedback: feedback
    };

    setExamResult(result);
    saveExamResult(result);
    setScreen('result');

    // Hiệu ứng âm thanh và tung hoa khi hoàn thành bài thi
    if (percentage >= 70) {
      playApplauseAndCheer();
      triggerGrandCelebration();
    } else {
      playEncouragementMusic();
    }
  };

  // Formatting time mm:ss
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Print scorecard
  const handlePrint = () => {
    window.print();
  };

  // Retake same questions
  const handleRetake = () => {
    setUserAnswers({});
    setFlaggedIds(new Set());
    setRevealedPracticeAnswers(new Set());
    setCurrentIndex(0);
    setRemainingSeconds(config.durationMinutes * 60);
    setStartTime(new Date());
    setScreen('exam');
  };

  // ==========================================
  // VIEW 1: CONFIGURATION & STUDENT INFO
  // ==========================================
  if (screen === 'config') {
    return (
      <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
        {/* Welcome banner & Author attribution */}
        <div className="bg-gradient-to-br from-emerald-850 via-teal-900 to-amber-900 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden bg-emerald-900">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 -top-10 w-64 h-64 bg-emerald-400/15 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-400 to-amber-300 text-amber-950 flex items-center gap-1.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 fill-current text-amber-900" />
                Ôn Tập Kiến Thức Toán 7 Kỳ I
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20 backdrop-blur-xs">
                Tác giả: Thầy giáo Ths. Phạm Ngọc Thái
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                SGK Kết Nối Tri Thức Với Cuộc Sống
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2 drop-shadow-xs">
              Hệ Thống Luyện Tập &amp; Kiểm Tra Toán 7 Kỳ I Chuẩn Kiến Thức
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed max-w-3xl">
              Học sinh nhập thông tin cá nhân, tuỳ chọn cấu hình theo từng <strong>Chương</strong>, từng <strong>Bài học</strong> hoặc <strong>toàn bộ Kỳ I</strong> với 3 mức độ nhận thức: <strong>Nhận biết - Thông hiểu - Vận dụng</strong> (tối đa 50 câu). Có âm thanh vỗ tay chúc mừng, tung hoa rực rỡ và đệm nhạc khích lệ từ Thầy Thái.
            </p>
          </div>
        </div>

        {/* Form: Student Information */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-100/80 shadow-xs">
          <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Thông Tin Học Sinh Làm Bài</h3>
              <p className="text-xs text-slate-500">Thông tin sẽ hiển thị trên bài kiểm tra và phiếu báo điểm của Thầy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Họ và tên học sinh <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-emerald-600 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Ví dụ: Nguyễn Văn An"
                  value={student.fullName}
                  onChange={(e) => handleStudentChange('fullName', e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Lớp học <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <GraduationCap className="w-4 h-4 text-emerald-600 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Ví dụ: 7A1, 7A2, 7B..."
                  value={student.className}
                  onChange={(e) => handleStudentChange('className', e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Trường THCS <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <School className="w-4 h-4 text-emerald-600 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Ví dụ: THCS Chu Văn An"
                  value={student.schoolName}
                  onChange={(e) => handleStudentChange('schoolName', e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Configuration: Quiz Parameters */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-100/80 shadow-xs space-y-6">
          <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Thiết Lập Bộ Đề Ôn Tập Kỳ I</h3>
              <p className="text-xs text-slate-500">Tùy biến phạm vi kiến thức, số câu hỏi và ma trận độ khó</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chapter Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Chọn Chương Kiến Thức (Kỳ I)
              </label>
              <select
                value={config.chapterId}
                onChange={(e) => {
                  setConfig({ ...config, chapterId: e.target.value, lessonId: 'all' });
                }}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition cursor-pointer font-medium text-slate-800"
              >
                <option value="all">★ TẤT CẢ CÁC CHƯƠNG KỲ I (Tổng hợp toàn diện Chương I - V)</option>
                {CHAPTER_LIST_KY1.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Lesson Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2. Chọn Bài Học Cụ Thể
              </label>
              <select
                value={config.lessonId}
                disabled={config.chapterId === 'all'}
                onChange={(e) => setConfig({ ...config, lessonId: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition cursor-pointer font-medium text-slate-800 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <option value="all">Tất cả các bài trong chương</option>
                {availableLessons.map((ls) => (
                  <option key={ls.id} value={ls.id}>
                    {ls.title}
                  </option>
                ))}
              </select>
              {config.chapterId === 'all' && (
                <p className="text-[11px] text-slate-400 mt-1 italic">
                  * Khi chọn tất cả các chương, hệ thống tự động tổng hợp câu hỏi từ tất cả bài học Kỳ I.
                </p>
              )}
            </div>

            {/* Question Count (Max 50) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  3. Số Lượng Câu Hỏi (Tối đa 50 câu)
                </label>
                <span className="text-sm font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                  {config.questionCount} câu
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {[10, 15, 20, 25, 30, 40, 50].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setConfig({ ...config, questionCount: num })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      config.questionCount === num
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {num} câu
                  </button>
                ))}
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={config.questionCount}
                onChange={(e) => setConfig({ ...config, questionCount: Number(e.target.value) })}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>Tối thiểu: 5 câu</span>
                <span>Khuyến nghị kiểm tra: 20-30 câu</span>
                <span>Tối đa: 50 câu</span>
              </div>
            </div>

            {/* Difficulty Level & Matrix */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                4. Mức Độ Nhận Thức
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setConfig({ ...config, difficulty: 'all' })}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    config.difficulty === 'all'
                      ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 shadow-2xs font-semibold'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-1 text-emerald-900">
                    <span>Tổng hợp 3 mức độ</span>
                    {config.difficulty === 'all' && <Check className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <p className="text-[11px] text-slate-500 font-normal">
                    Ma trận chuẩn: 40% Nhận biết, 30% Thông hiểu, 30% Vận dụng
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setConfig({ ...config, difficulty: 'Nhận biết' })}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    config.difficulty === 'Nhận biết'
                      ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 shadow-2xs font-semibold'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-1 text-emerald-800">
                    <span>Nhận biết</span>
                    {config.difficulty === 'Nhận biết' && <Check className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <p className="text-[11px] text-slate-500 font-normal">
                    Khái niệm, định nghĩa, tính chất, kí hiệu toán học
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setConfig({ ...config, difficulty: 'Thông hiểu' })}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    config.difficulty === 'Thông hiểu'
                      ? 'border-amber-600 bg-amber-50/80 text-amber-950 shadow-2xs font-semibold'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-1 text-amber-800">
                    <span>Thông hiểu</span>
                    {config.difficulty === 'Thông hiểu' && <Check className="w-4 h-4 text-amber-600" />}
                  </div>
                  <p className="text-[11px] text-slate-500 font-normal">
                    Áp dụng quy tắc, tính toán số hữu tỉ, tính số đo góc
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setConfig({ ...config, difficulty: 'Vận dụng' })}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    config.difficulty === 'Vận dụng'
                      ? 'border-orange-500 bg-orange-50/80 text-orange-950 shadow-2xs font-semibold'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-1 text-orange-800">
                    <span>Vận dụng</span>
                    {config.difficulty === 'Vận dụng' && <Check className="w-4 h-4 text-orange-600" />}
                  </div>
                  <p className="text-[11px] text-slate-500 font-normal">
                    Bài toán thực tế, tìm x nâng cao, lập luận hình học
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Mode & Time Selection */}
          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                5. Chế Độ Làm Bài
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setConfig({ ...config, mode: 'exam' })}
                  className={`p-3 rounded-xl border text-center transition cursor-pointer text-xs font-bold ${
                    config.mode === 'exam'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Kiểm Tra Tính Giờ
                  <span className="block text-[10px] font-normal opacity-90 mt-0.5">
                    Nộp bài chấm điểm &amp; xếp loại
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setConfig({ ...config, mode: 'practice' })}
                  className={`p-3 rounded-xl border text-center transition cursor-pointer text-xs font-bold ${
                    config.mode === 'practice'
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Luyện Tập Tự Do
                  <span className="block text-[10px] font-normal opacity-90 mt-0.5">
                    Vỗ tay, tung hoa &amp; xem mẹo Thầy Thái
                  </span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                6. Thời Gian Làm Bài (Phút)
              </label>
              <div className="flex flex-wrap gap-2">
                {[15, 30, 45, 60, 90].map((m) => (
                  <button
                    key={m}
                    type="button"
                    disabled={config.mode === 'practice'}
                    onClick={() => setConfig({ ...config, durationMinutes: m })}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                      config.durationMinutes === m && config.mode === 'exam'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-40'
                    }`}
                  >
                    {m} phút
                  </button>
                ))}
              </div>
              {config.mode === 'practice' && (
                <p className="text-[11px] text-slate-400 mt-1 italic">
                  * Ở chế độ luyện tập tự do, học sinh không bị giới hạn thời gian.
                </p>
              )}
            </div>
          </div>

          {/* Action Launch Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              {student.fullName ? (
                <span>
                  Học sinh: <strong>{student.fullName}</strong> • Lớp:{' '}
                  <strong>{student.className || 'Chưa nhập'}</strong> • Trường:{' '}
                  <strong>{student.schoolName || 'Chưa nhập'}</strong>
                </span>
              ) : (
                <span className="text-amber-600 font-medium">
                  Vui lòng điền họ tên học sinh ở trên để bắt đầu bài thi.
                </span>
              )}
            </div>

            <button
              onClick={handleStartExam}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-600 via-emerald-700 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white rounded-xl font-black text-sm sm:text-base shadow-md hover:shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>BẮT ĐẦU LÀM BÀI ({config.questionCount} CÂU)</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: ACTIVE EXAM & PRACTICE INTERFACE
  // ==========================================
  if (screen === 'exam') {
    const currentQ = questions[currentIndex];
    const answeredCount = Object.keys(userAnswers).length;
    const progressPercent = Math.round((answeredCount / questions.length) * 100);
    const isAnswered = currentQ ? userAnswers[currentQ.id] !== undefined : false;
    const isFlagged = currentQ ? flaggedIds.has(currentQ.id) : false;
    const isRevealedInPractice = currentQ ? revealedPracticeAnswers.has(currentQ.id) : false;

    return (
      <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto">
        {/* Top Floating Status Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-100/80 shadow-xs flex flex-wrap items-center justify-between gap-4 sticky top-16 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center font-black text-sm shadow-xs">
              {currentIndex + 1}/{questions.length}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-slate-900">{student.fullName || 'Học sinh'}</span>
                <span className="text-xs text-slate-500 font-medium">
                  ({student.className || 'Toán 7'} - {student.schoolName || 'THCS'})
                </span>
              </div>
              <div className="text-xs text-slate-500">
                Đã làm: <strong className="text-emerald-700">{answeredCount}</strong>/{questions.length} câu ({progressPercent}%)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Sound Mute/Unmute Toggle */}
            <button
              type="button"
              onClick={() => {
                const nextMute = !isMuted;
                setIsMuted(nextMute);
                setSoundMuted(nextMute);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                isMuted
                  ? 'bg-slate-100 text-slate-500 border-slate-200'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-300'
              }`}
              title={isMuted ? 'Đang tắt âm thanh. Bấm để bật' : 'Đang bật âm thanh chúc mừng & khích lệ'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-emerald-600 animate-pulse" />
              )}
              <span className="hidden sm:inline">{isMuted ? 'Âm thanh: Tắt' : 'Âm thanh: Bật'}</span>
            </button>

            {/* Countdown timer */}
            {config.mode === 'exam' && (
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono font-bold text-sm ${
                  remainingSeconds < 300
                    ? 'bg-red-50 text-red-700 border border-red-200 animate-pulse'
                    : 'bg-amber-50 text-amber-900 border border-amber-200'
                }`}
              >
                <Clock className="w-4 h-4 text-amber-700" />
                <span>{formatTime(remainingSeconds)}</span>
              </div>
            )}

            {/* AI Hint button */}
            {onOpenAiHelp && (
              <button
                type="button"
                onClick={() => onOpenAiHelp(`Câu hỏi: ${currentQ.content} (Chương: ${currentQ.chapterTitle})`)}
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition cursor-pointer"
                title="Hỏi ý kiến sư phạm của Thầy Thái về câu này"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Hỏi Thầy Thái AI</span>
              </button>
            )}

            {/* Submit button */}
            <button
              onClick={() => setIsSubmitConfirmOpen(true)}
              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Nộp Bài</span>
            </button>
          </div>
        </div>

        {/* Question Palette (Numbers Grid) */}
        <div className="bg-white rounded-xl p-4 border border-emerald-100/80 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Danh Sách Câu Hỏi ({questions.length} câu)
            </span>
            <div className="flex items-center gap-3 text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600 inline-block" /> Đã làm
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-amber-500 inline-block" /> Đang gắn cờ
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-200 inline-block" /> Chưa làm
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1">
            {questions.map((q, idx) => {
              const answered = userAnswers[q.id] !== undefined;
              const flagged = flaggedIds.has(q.id);
              const isCurrent = idx === currentIndex;

              let btnStyle = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
              if (isCurrent) {
                btnStyle = 'ring-2 ring-amber-500 bg-amber-50 text-amber-950 font-bold';
              } else if (flagged) {
                btnStyle = 'bg-amber-100 text-amber-950 border border-amber-300 font-semibold';
              } else if (answered) {
                btnStyle = 'bg-emerald-600 text-white font-medium shadow-2xs';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-8 h-8 rounded-lg text-xs transition cursor-pointer flex items-center justify-center relative ${btnStyle}`}
                >
                  {idx + 1}
                  {flagged && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Question Main Card */}
        {currentQ && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100/80 shadow-xs space-y-6">
            {/* Metadata Tags */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black px-2.5 py-1 rounded-md bg-emerald-800 text-white">
                  Câu {currentIndex + 1}
                </span>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                    currentQ.difficulty === 'Nhận biết'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : currentQ.difficulty === 'Thông hiểu'
                      ? 'bg-amber-50 text-amber-900 border-amber-200'
                      : 'bg-orange-50 text-orange-900 border-orange-200'
                  }`}
                >
                  Mức độ: {currentQ.difficulty}
                </span>
                <span className="text-xs font-medium text-slate-500 hidden sm:inline">
                  {currentQ.chapterTitle} • {currentQ.lessonTitle}
                </span>
              </div>

              <button
                onClick={toggleFlag}
                className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                  isFlagged
                    ? 'bg-amber-50 text-amber-800 border-amber-300 font-semibold'
                    : 'text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>{isFlagged ? 'Đã gắn cờ xem lại' : 'Gắn cờ câu này'}</span>
              </button>
            </div>

            {/* Question Content */}
            <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              <MathText content={currentQ.content} />
            </div>

            {/* 4 Options */}
            <div className="grid grid-cols-1 gap-3">
              {currentQ.options.map((opt, optIdx) => {
                const isAnswered = userAnswers[currentQ.id] !== undefined;
                const isSelected = userAnswers[currentQ.id] === optIdx;
                const letter = ['A', 'B', 'C', 'D'][optIdx];

                let optionStyle =
                  'border-slate-200 bg-white hover:bg-emerald-50/40 text-slate-800';

                // Practice mode instant feedback
                if (config.mode === 'practice' && isRevealedInPractice) {
                  if (optIdx === currentQ.correctAnswer) {
                    optionStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-400';
                  } else if (isSelected && optIdx !== currentQ.correctAnswer) {
                    optionStyle = 'border-amber-400 bg-amber-50/80 text-amber-950 ring-1 ring-amber-300';
                  } else {
                    optionStyle = 'border-slate-200 bg-slate-50/60 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-emerald-600 bg-emerald-50/90 text-emerald-950 font-semibold shadow-2xs ring-2 ring-emerald-500/30';
                } else if (isAnswered) {
                  optionStyle = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-55 cursor-not-allowed';
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`p-4 rounded-xl border text-left transition flex items-start justify-between gap-3 ${
                      isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'
                    } ${optionStyle}`}
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span
                        className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : isAnswered
                            ? 'bg-slate-200 text-slate-400'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {letter}
                      </span>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <MathText content={opt} />
                      </span>
                    </div>

                    {isSelected && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1 shrink-0 mt-0.5">
                        <Lock className="w-3 h-3 text-emerald-700" />
                        <span>Đã khóa</span>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Locked Notice */}
            {userAnswers[currentQ.id] !== undefined && (
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-900 bg-emerald-50/80 border border-emerald-200/80 px-3.5 py-2.5 rounded-xl">
                <Lock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  Em đã lựa chọn đáp án cho câu hỏi này. Hệ thống đã <strong>khóa toàn bộ các đáp án</strong>, không cho phép thay đổi để đảm bảo tính khách quan và trung thực.
                </span>
              </div>
            )}

            {/* Celebratory / Encouragement Banner in Practice mode */}
            {config.mode === 'practice' && isRevealedInPractice && (
              <div className="space-y-3 pt-2">
                {userAnswers[currentQ.id] === currentQ.correctAnswer ? (
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 text-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 text-amber-300 text-xl">
                        🎉
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-black tracking-tight">
                          XUẤT SẮC! ĐÁP ÁN HOÀN TOÀN CHÍNH XÁC!
                        </h4>
                        <p className="text-xs text-emerald-100">
                          Tiếng vỗ tay chúc mừng &amp; những chùm hoa rực rỡ dành tặng em!
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        playApplauseAndCheer();
                        triggerGrandCelebration();
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-white text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition cursor-pointer shadow-xs self-start sm:self-auto shrink-0 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Vỗ tay lại &amp; Tung hoa</span>
                    </button>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 text-white text-xl">
                        💪
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-black tracking-tight">
                          ĐỪNG BUỒN, CỐ LÊN NHÉ EM!
                        </h4>
                        <p className="text-xs text-amber-100">
                          Đoạn nhạc du dương khích lệ em tiếp tục cố gắng! Cùng xem kĩ hướng dẫn giải bên dưới nhé.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => playEncouragementMusic()}
                      className="px-3.5 py-1.5 rounded-xl bg-white text-orange-900 font-bold text-xs hover:bg-amber-50 transition cursor-pointer shadow-xs self-start sm:self-auto shrink-0 flex items-center gap-1.5"
                    >
                      <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                      <span>Nghe lại nhạc khích lệ</span>
                    </button>
                  </div>
                )}

                {/* Pedagogical Explanation Box */}
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>
                      Đáp án đúng:{' '}
                      {['A', 'B', 'C', 'D'][currentQ.correctAnswer]}.{' '}
                      <MathText content={currentQ.options[currentQ.correctAnswer]} />
                    </span>
                  </div>
                  <p className="text-slate-800 leading-relaxed">
                    <strong>Hướng dẫn giải:</strong> <MathText content={currentQ.explanation} />
                  </p>
                  {currentQ.pedagogicalNote && (
                    <p className="text-amber-900 font-medium pt-1.5 border-t border-emerald-200/60 flex items-start gap-1.5">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><MathText content={currentQ.pedagogicalNote} /></span>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Prev / Next Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Câu Trước</span>
              </button>

              <span className="text-xs text-slate-400">
                Nhấn phím mũi tên hoặc bấm số câu ở trên
              </span>

              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <span>Câu Sau</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setIsSubmitConfirmOpen(true)}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Hoàn Thành &amp; Nộp Bài</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        {isSubmitConfirmOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white max-w-md w-full rounded-2xl p-6 shadow-xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900">Xác Nhận Nộp Bài Kiểm Tra?</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Em đã hoàn thành <strong>{answeredCount}</strong> / {questions.length} câu hỏi.
                  {answeredCount < questions.length && (
                    <span className="block text-amber-600 font-semibold mt-1">
                      Còn {questions.length - answeredCount} câu chưa chọn đáp án!
                    </span>
                  )}
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setIsSubmitConfirmOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition cursor-pointer"
                >
                  Làm Tiếp
                </button>
                <button
                  onClick={handleSubmitExam}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-xs sm:text-sm shadow-xs transition cursor-pointer"
                >
                  Nộp Bài Ngay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ==========================================
  // VIEW 3: SCORECARD & DETAILED EXAM RESULT
  // ==========================================
  if (screen === 'result' && examResult) {
    const { score, classification, correctCount, totalQuestions, byDifficulty, teacherFeedback } = examResult;

    // Filter questions review
    const filteredQuestions = examResult.questions.filter((q) => {
      const isRight = examResult.userAnswers[q.id] === q.correctAnswer;
      if (resultFilter === 'correct') return isRight;
      if (resultFilter === 'incorrect') return !isRight;
      return true;
    });

    return (
      <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto print:m-0 print:p-0">
        {/* View Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider pl-1">Chế độ xem:</span>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs">
              <button
                type="button"
                onClick={() => setResultTab('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  resultTab === 'all'
                    ? 'bg-white shadow-xs text-amber-900 border border-amber-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Toàn bộ kết quả</span>
              </button>

              <button
                type="button"
                onClick={() => setResultTab('certificate')}
                className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  resultTab === 'certificate'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Giấy Chứng Nhận 16:9 (Vàng Cam)</span>
              </button>

              <button
                type="button"
                onClick={() => setResultTab('scorecard')}
                className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  resultTab === 'scorecard'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Phiếu Điểm &amp; Lời Giải</span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              onClick={() => exportSingleExamToExcel(examResult)}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
              title="Tải bảng tính Excel kết quả bài thi này (.xlsx)"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-amber-300" />
              <span>Tải File Excel</span>
            </button>

            {onNavigateToHistory && (
              <button
                onClick={onNavigateToHistory}
                className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 font-bold transition cursor-pointer flex items-center gap-1"
                title="Xem danh sách lịch sử toàn bộ các lần làm bài của học sinh"
              >
                <span>Xem Lịch Sử</span>
              </button>
            )}

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In kết quả / PDF</span>
            </button>
            <button
              onClick={handleRetake}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 font-bold transition cursor-pointer flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Làm lại đề</span>
            </button>
            <button
              onClick={() => setScreen('config')}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold transition cursor-pointer shadow-xs"
            >
              Tạo đề mới
            </button>
          </div>
        </div>

        {/* 16:9 Certificate Component */}
        {(resultTab === 'all' || resultTab === 'certificate') && (
          <Certificate16x9
            examResult={examResult}
            onPrint={handlePrint}
          />
        )}

        {/* Printable Scorecard Container */}
        {(resultTab === 'all' || resultTab === 'scorecard') && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100/80 shadow-md space-y-6">
          {/* Header of Scorecard */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-black text-emerald-700 uppercase tracking-wider block mb-1">
                PHIẾU KẾT QUẢ ÔN TẬP TOÁN 7 KỲ I
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                {student.fullName || 'Học sinh'} • Lớp {student.className || '7'}
              </h2>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                Trường: <strong>{student.schoolName || 'THCS'}</strong> • Ngày làm bài:{' '}
                {new Date().toLocaleDateString('vi-VN')} ({examResult.startTime} - {examResult.finishTime})
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto print:hidden">
              <button
                onClick={handlePrint}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>In Phiếu Điểm / PDF</span>
              </button>

              <button
                onClick={() => {
                  playApplauseAndCheer();
                  triggerGrandCelebration();
                }}
                className="px-3.5 py-2 rounded-xl bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-300 text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
                title="Bắn pháo hoa & vỗ tay chúc mừng"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Tung Hoa &amp; Vỗ Tay</span>
              </button>

              <button
                onClick={handleRetake}
                className="px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Làm Lại Đề Này</span>
              </button>

              <button
                onClick={() => setScreen('config')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white text-xs font-bold transition cursor-pointer shadow-xs"
              >
                Tạo Đề Mới
              </button>
            </div>
          </div>

          {/* Primary Score Banner */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 bg-gradient-to-br from-emerald-900 via-teal-950 to-amber-950 text-white p-6 rounded-2xl flex items-center justify-between shadow-xs relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                  Điểm số đạt được
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-5xl font-black text-amber-300 drop-shadow-xs">{score}</span>
                  <span className="text-lg text-emerald-100/70">/ 10.0</span>
                </div>
                <p className="text-xs text-emerald-100/90 mt-2">
                  Đúng <strong>{correctCount}</strong> trên tổng số <strong>{totalQuestions}</strong> câu ({Math.round((correctCount / totalQuestions) * 100)}%)
                </p>
              </div>

              <div className="text-right relative z-10">
                <span className="text-xs text-slate-300 block mb-1">Xếp loại học lực</span>
                <span
                  className={`inline-block px-3 py-1.5 rounded-xl text-sm font-extrabold shadow-xs ${
                    classification === 'Xuất sắc'
                      ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300'
                      : classification === 'Tốt'
                      ? 'bg-orange-400 text-slate-950 ring-2 ring-orange-300'
                      : classification === 'Khá'
                      ? 'bg-emerald-400 text-emerald-950 ring-1 ring-emerald-300'
                      : classification === 'Đạt'
                      ? 'bg-teal-400 text-teal-950'
                      : 'bg-rose-400 text-white'
                  }`}
                >
                  {classification}
                </span>
                <span className="block text-[10px] text-slate-300 mt-1">
                  {Math.round((correctCount / totalQuestions) * 100) >= 90
                    ? '≥ 90% (Xuất sắc)'
                    : Math.round((correctCount / totalQuestions) * 100) >= 80
                    ? '≥ 80% (Tốt)'
                    : Math.round((correctCount / totalQuestions) * 100) >= 70
                    ? '≥ 70% (Khá)'
                    : Math.round((correctCount / totalQuestions) * 100) >= 50
                    ? '≥ 50% (Đạt)'
                    : '< 50% (Chưa đạt)'}
                </span>
              </div>
            </div>

            <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-200/70 flex flex-col justify-center">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                Thời gian làm bài
              </span>
              <span className="text-2xl font-bold text-slate-900">
                {Math.floor(examResult.timeSpentSeconds / 60)} phút {examResult.timeSpentSeconds % 60} giây
              </span>
              <span className="text-[11px] text-slate-500 mt-1">
                Tốc độ: ~{Math.round(examResult.timeSpentSeconds / totalQuestions)} giây/câu
              </span>
            </div>

            <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200/70 flex flex-col justify-center">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Tác giả học liệu
              </span>
              <span className="text-sm font-bold text-slate-900">Ths. Phạm Ngọc Thái</span>
              <span className="text-[11px] text-slate-500 mt-1">
                Toán 7 - Kết Nối Tri Thức (Kỳ I)
              </span>
            </div>
          </div>

          {/* Breakdown by 3 cognitive levels */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-600" />
              Đánh Giá Năng Lực Theo 3 Mức Độ Nhận Thức
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(['Nhận biết', 'Thông hiểu', 'Vận dụng'] as DifficultyLevel[]).map((lvl) => {
                const stat = byDifficulty[lvl];
                const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;

                return (
                  <div key={lvl} className="bg-white p-4 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-slate-800">{lvl}</span>
                      <span className="text-xs font-bold text-emerald-700">
                        {stat.correct}/{stat.total} câu ({pct}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-2.5 rounded-full transition-all duration-500 ${
                          pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-orange-500'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pedagogical Feedback from Thầy Thái */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/40 border border-amber-300 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
              <Award className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Nhận Xét Sư Phạm Của Thầy Giáo Ths. Phạm Ngọc Thái:</span>
            </div>
            <p className="text-amber-950 leading-relaxed italic pl-7 font-serif text-sm sm:text-base">
              "{teacherFeedback}"
            </p>
          </div>

          {/* Detailed Question Review Section */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                Chi Tiết Từng Câu Hỏi &amp; Lời Giải Sư Phạm
              </h3>

              {/* Filter pills */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs print:hidden">
                <button
                  onClick={() => setResultFilter('all')}
                  className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
                    resultFilter === 'all' ? 'bg-white shadow-xs font-bold text-slate-900' : 'text-slate-600'
                  }`}
                >
                  Tất cả ({totalQuestions})
                </button>
                <button
                  onClick={() => setResultFilter('correct')}
                  className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
                    resultFilter === 'correct' ? 'bg-emerald-600 text-white font-bold shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Câu đúng ({correctCount})
                </button>
                <button
                  onClick={() => setResultFilter('incorrect')}
                  className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
                    resultFilter === 'incorrect' ? 'bg-amber-600 text-white font-bold shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Câu sai ({totalQuestions - correctCount})
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {filteredQuestions.map((q, idx) => {
                const userChoice = examResult.userAnswers[q.id];
                const isCorrect = userChoice === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border transition ${
                      isCorrect
                        ? 'border-emerald-300 bg-emerald-50/40'
                        : 'border-amber-300 bg-amber-50/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-850 text-white bg-slate-900">
                          Câu {idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-600">
                          {q.chapterTitle} • Mức độ: {q.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {isCorrect ? (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> Đúng (+{(10 / totalQuestions).toFixed(2)}đ)
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                            <XCircle className="w-3.5 h-3.5 text-amber-700" /> Chưa đúng (0đ)
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-sm sm:text-base font-semibold text-slate-900 mb-3">
                      <MathText content={q.content} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm mb-3">
                      {q.options.map((opt, optIdx) => {
                        const letter = ['A', 'B', 'C', 'D'][optIdx];
                        const isUserSelected = userChoice === optIdx;
                        const isRightAnswer = q.correctAnswer === optIdx;

                        let optClass = 'bg-white border-slate-200 text-slate-700';
                        if (isRightAnswer) {
                          optClass = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                        } else if (isUserSelected && !isRightAnswer) {
                          optClass = 'bg-amber-100 border-amber-300 text-amber-950 line-through';
                        }

                        return (
                          <div
                            key={optIdx}
                            className={`p-2.5 rounded-lg border flex items-start gap-2 ${optClass}`}
                          >
                            <span className="font-bold shrink-0">{letter}.</span>
                            <span className="flex-1"><MathText content={opt} /></span>
                            {isRightAnswer && (
                              <Check className="w-4 h-4 text-emerald-700 ml-auto shrink-0" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs space-y-1.5">
                      <p className="text-slate-800 leading-relaxed">
                        <strong className="text-emerald-700">Hướng dẫn giải:</strong> <MathText content={q.explanation} />
                      </p>
                      {q.pedagogicalNote && (
                        <p className="text-amber-900 font-medium pt-1.5 border-t border-slate-100 flex items-start gap-1">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span><MathText content={q.pedagogicalNote} /></span>
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        )}
      </div>
    );
  }

  return null;
};
