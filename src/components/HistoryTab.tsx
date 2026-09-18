import React, { useState, useEffect, useMemo } from 'react';
import {
  FileSpreadsheet,
  Download,
  Trash2,
  Search,
  CheckCircle2,
  XCircle,
  Clock,
  User,
  GraduationCap,
  Calendar,
  Layers,
  BarChart3,
  Award,
  Eye,
  AlertTriangle,
  RefreshCw,
  PlusCircle,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { ExamResult } from '../types';
import {
  getExamHistory,
  deleteExamResult,
  clearExamHistory,
  exportHistoryToExcel,
  exportSingleExamToExcel,
  saveExamResult
} from '../utils/historyStorage';
import { MathText } from './MathText';

interface HistoryTabProps {
  onNavigateToQuiz?: () => void;
}

export const HistoryTab: React.FC<HistoryTabProps> = ({ onNavigateToQuiz }) => {
  const [history, setHistory] = useState<ExamResult[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterClassification, setFilterClassification] = useState<string>('all');
  const [filterMode, setFilterMode] = useState<string>('all');
  const [selectedExam, setSelectedExam] = useState<ExamResult | null>(null);

  const loadHistory = () => {
    setHistory(getExamHistory());
  };

  useEffect(() => {
    loadHistory();

    const handleUpdate = () => {
      loadHistory();
    };

    window.addEventListener('toan7_history_updated', handleUpdate);
    return () => {
      window.removeEventListener('toan7_history_updated', handleUpdate);
    };
  }, []);

  // Filtered records
  const filteredHistory = useMemo(() => {
    return history.filter((item) => {
      const matchSearch =
        !searchQuery ||
        item.student.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.student.className?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.student.schoolName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase());

      const matchClass =
        filterClassification === 'all' || item.classification === filterClassification;

      const matchMode =
        filterMode === 'all' ||
        (filterMode === 'exam' && item.config.mode === 'exam') ||
        (filterMode === 'practice' && item.config.mode === 'practice');

      return matchSearch && matchClass && matchMode;
    });
  }, [history, searchQuery, filterClassification, filterMode]);

  // Summary statistics
  const stats = useMemo(() => {
    if (history.length === 0) {
      return { total: 0, avgScore: 0, passCount: 0, excellentCount: 0 };
    }
    const total = history.length;
    const avgScore = Number((history.reduce((acc, cur) => acc + cur.score, 0) / total).toFixed(1));
    const passCount = history.filter((h) => h.score >= 5.0).length;
    const excellentCount = history.filter(
      (h) => h.classification === 'Xuất sắc' || h.classification === 'Tốt'
    ).length;

    return { total, avgScore, passCount, excellentCount };
  }, [history]);

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Bạn có chắc chắn muốn xoá kết quả bài làm của "${name || 'học sinh'}"?`)) {
      deleteExamResult(id);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('CẢNH BÁO: Thầy/Cô có chắc chắn muốn xoá TOÀN BỘ lịch sử bài làm? Hành động này không thể hoàn tác!')) {
      clearExamHistory();
    }
  };

  // Seed realistic sample data if history is empty
  const handleSeedSampleData = () => {
    const sampleResults: ExamResult[] = [
      {
        id: `exam-${Date.now() - 3600000 * 5}`,
        student: {
          fullName: 'Nguyễn Minh Quân',
          className: '7A1',
          schoolName: 'THCS Chu Văn An'
        },
        config: {
          chapterId: 'all',
          lessonId: 'all',
          questionCount: 20,
          difficulty: 'all',
          mode: 'exam',
          durationMinutes: 45
        },
        startTime: '08:00:15',
        finishTime: '08:34:20',
        timeSpentSeconds: 2045,
        totalQuestions: 20,
        correctCount: 19,
        score: 9.5,
        classification: 'Xuất sắc',
        byDifficulty: {
          'Nhận biết': { total: 8, correct: 8 },
          'Thông hiểu': { total: 8, correct: 8 },
          'Vận dụng': { total: 4, correct: 3 }
        },
        byChapter: {
          'chuong-1': { total: 4, correct: 4, title: 'Chương I: Số hữu tỉ' },
          'chuong-2': { total: 4, correct: 4, title: 'Chương II: Số thực' },
          'chuong-3': { total: 4, correct: 4, title: 'Chương III: Góc và đường thẳng song song' },
          'chuong-4': { total: 5, correct: 4, title: 'Chương IV: Tam giác bằng nhau' },
          'chuong-5': { total: 3, correct: 3, title: 'Chương V: Thu thập và biểu diễn dữ liệu' }
        },
        userAnswers: {},
        questions: [
          {
            id: 'c1-th-sample',
            chapterId: 'chuong-1',
            chapterTitle: 'Chương I: Số hữu tỉ',
            lessonId: 'bai-1',
            lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
            difficulty: 'Thông hiểu',
            content: 'Số đối của số hữu tỉ $-3/5$ là:',
            options: ['$3/5$', '$-5/3$', '$5/3$', '$-3/5$'],
            correctAnswer: 0,
            explanation: 'Hai số đối nhau có tổng bằng 0. Số đối của $-3/5$ là $3/5$.'
          }
        ],
        teacherFeedback: 'Thầy Thái chúc mừng em! Tư duy hình học và tính toán số hữu tỉ rất chắc chắn.'
      },
      {
        id: `exam-${Date.now() - 3600000 * 2}`,
        student: {
          fullName: 'Trần Thị Mai Phương',
          className: '7A2',
          schoolName: 'THCS Lê Quý Đôn'
        },
        config: {
          chapterId: 'all',
          lessonId: 'all',
          questionCount: 15,
          difficulty: 'all',
          mode: 'exam',
          durationMinutes: 30
        },
        startTime: '14:15:00',
        finishTime: '14:38:12',
        timeSpentSeconds: 1392,
        totalQuestions: 15,
        correctCount: 13,
        score: 8.7,
        classification: 'Tốt',
        byDifficulty: {
          'Nhận biết': { total: 6, correct: 6 },
          'Thông hiểu': { total: 6, correct: 5 },
          'Vận dụng': { total: 3, correct: 2 }
        },
        byChapter: {
          'chuong-1': { total: 3, correct: 3, title: 'Chương I: Số hữu tỉ' },
          'chuong-2': { total: 3, correct: 3, title: 'Chương II: Số thực' },
          'chuong-3': { total: 3, correct: 2, title: 'Chương III: Góc và đường thẳng song song' },
          'chuong-4': { total: 4, correct: 3, title: 'Chương IV: Tam giác bằng nhau' },
          'chuong-5': { total: 2, correct: 2, title: 'Chương V: Thu thập và biểu diễn dữ liệu' }
        },
        userAnswers: {},
        questions: [],
        teacherFeedback: 'Kết quả đạt loại Tốt. Em chú ý các trường hợp bằng nhau c.g.c của tam giác.'
      },
      {
        id: `exam-${Date.now() - 1800000}`,
        student: {
          fullName: 'Lê Hoàng Nam',
          className: '7B3',
          schoolName: 'THCS Chu Văn An'
        },
        config: {
          chapterId: 'chuong-3',
          lessonId: 'all',
          questionCount: 10,
          difficulty: 'all',
          mode: 'practice',
          durationMinutes: 15
        },
        startTime: '16:05:10',
        finishTime: '16:18:45',
        timeSpentSeconds: 815,
        totalQuestions: 10,
        correctCount: 7,
        score: 7.0,
        classification: 'Khá',
        byDifficulty: {
          'Nhận biết': { total: 4, correct: 4 },
          'Thông hiểu': { total: 4, correct: 2 },
          'Vận dụng': { total: 2, correct: 1 }
        },
        byChapter: {
          'chuong-3': { total: 10, correct: 7, title: 'Chương III: Góc và đường thẳng song song' }
        },
        userAnswers: {},
        questions: [],
        teacherFeedback: 'Đạt kết quả Khá. Cần rèn luyện thêm kĩ năng tính góc so le trong và kề bù.'
      }
    ];

    sampleResults.forEach((r) => saveExamResult(r));
    loadHistory();
  };

  const getBadgeColor = (classification: string) => {
    switch (classification) {
      case 'Xuất sắc':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Tốt':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'Khá':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'Đạt':
        return 'bg-teal-100 text-teal-900 border-teal-300';
      default:
        return 'bg-rose-100 text-rose-900 border-rose-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold text-emerald-100">
              <FileSpreadsheet className="w-3.5 h-3.5 text-amber-300" />
              <span>Dành Cho Thầy/Cô &amp; Phụ Huynh Theo Dõi Tiến Độ Học Sinh</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Lịch Sử Bài Làm &amp; Xuất File Excel
            </h2>
            <p className="text-sm text-emerald-100 leading-relaxed">
              Toàn bộ kết quả luyện tập và bài thi trắc nghiệm của học sinh đều được tự động lưu trữ trên trình duyệt. Thầy/Cô có thể tra cứu chi tiết và tải về file Excel (.XLSX) đầy đủ bảng tổng hợp lẫn chi tiết từng câu làm bài.
            </p>
          </div>

          {/* Quick Action: Export All */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => exportHistoryToExcel(filteredHistory)}
              disabled={filteredHistory.length === 0}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-amber-950 font-black text-sm shadow-md hover:from-amber-300 hover:to-yellow-300 transition flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              title="Tải toàn bộ kết quả bài làm về máy dưới dạng bảng tính Excel (.XLSX)"
            >
              <FileSpreadsheet className="w-5 h-5 text-amber-900" />
              <span>Tải File Excel (.XLSX)</span>
            </button>

            {history.length > 0 && (
              <button
                onClick={handleClearAll}
                className="px-3.5 py-3 rounded-2xl bg-white/10 hover:bg-rose-500/20 text-white hover:text-rose-200 border border-white/20 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                title="Xoá toàn bộ lịch sử"
              >
                <Trash2 className="w-4 h-4" />
                <span className="hidden sm:inline">Xoá Lịch Sử</span>
              </button>
            )}
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/15 text-white">
          <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-3 sm:p-4">
            <span className="text-xs text-emerald-200 font-medium block">Tổng lượt làm bài</span>
            <span className="text-xl sm:text-2xl font-black text-white">{stats.total} bài</span>
          </div>

          <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-3 sm:p-4">
            <span className="text-xs text-emerald-200 font-medium block">Điểm trung bình</span>
            <span className="text-xl sm:text-2xl font-black text-amber-300">
              {stats.total > 0 ? stats.avgScore : '--'}/10
            </span>
          </div>

          <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-3 sm:p-4">
            <span className="text-xs text-emerald-200 font-medium block">Tỉ lệ đạt chuẩn (≥ 5.0)</span>
            <span className="text-xl sm:text-2xl font-black text-teal-200">
              {stats.total > 0 ? `${Math.round((stats.passCount / stats.total) * 100)}%` : '--'}
            </span>
          </div>

          <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-3 sm:p-4">
            <span className="text-xs text-emerald-200 font-medium block">Học sinh Xuất sắc/Tốt</span>
            <span className="text-xl sm:text-2xl font-black text-yellow-300">
              {stats.excellentCount} lượt
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên học sinh, lớp, trường..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {/* Classification Filter */}
            <select
              value={filterClassification}
              onChange={(e) => setFilterClassification(e.target.value)}
              aria-label="Lọc theo xếp loại học lực"
              className="text-xs font-semibold px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">Tất cả xếp loại</option>
              <option value="Xuất sắc">Xuất sắc (≥ 90%)</option>
              <option value="Tốt">Tốt (≥ 80%)</option>
              <option value="Khá">Khá (≥ 70%)</option>
              <option value="Đạt">Đạt (≥ 50%)</option>
              <option value="Chưa đạt">Chưa đạt (&lt; 50%)</option>
            </select>

            {/* Mode Filter */}
            <select
              value={filterMode}
              onChange={(e) => setFilterMode(e.target.value)}
              aria-label="Lọc theo chế độ làm bài"
              className="text-xs font-semibold px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">Tất cả chế độ</option>
              <option value="exam">Thi kiểm tra (Có đếm giờ)</option>
              <option value="practice">Luyện tập (Xem lời giải ngay)</option>
            </select>

            {/* Button to export current filtered list */}
            <button
              onClick={() => exportHistoryToExcel(filteredHistory, 'Ket_Qua_Loc_Toan_7')}
              disabled={filteredHistory.length === 0}
              className="px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              title="Xuất các dòng đang hiển thị ra Excel"
            >
              <Download className="w-3.5 h-3.5 text-emerald-700" />
              <span>Xuất {filteredHistory.length} bài lọc</span>
            </button>
          </div>
        </div>
      </div>

      {/* History Records Table / Cards */}
      {filteredHistory.length > 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                  <th className="py-3 px-4 text-center w-12">STT</th>
                  <th className="py-3 px-4">Học Sinh &amp; Lớp</th>
                  <th className="py-3 px-4">Thời Gian Nộp</th>
                  <th className="py-3 px-4 text-center">Chế Độ</th>
                  <th className="py-3 px-4 text-center">Kết Quả</th>
                  <th className="py-3 px-4 text-center">Điểm Số</th>
                  <th className="py-3 px-4 text-center">Xếp Loại</th>
                  <th className="py-3 px-4 text-right">Thao Tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {filteredHistory.map((item, idx) => {
                  const percentage = Math.round((item.correctCount / item.totalQuestions) * 100);
                  const timeMins = Math.floor(item.timeSpentSeconds / 60);
                  const timeSecs = item.timeSpentSeconds % 60;
                  const durationStr = `${timeMins}p ${timeSecs}s`;

                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-emerald-50/40 transition group"
                    >
                      <td className="py-3.5 px-4 text-center font-bold text-slate-400">
                        {idx + 1}
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-extrabold text-slate-900">
                          {item.student.fullName || 'Học sinh chưa nhập tên'}
                        </div>
                        <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                          {item.student.className && (
                            <span className="px-1.5 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                              Lớp {item.student.className}
                            </span>
                          )}
                          {item.student.schoolName && (
                            <span>• {item.student.schoolName}</span>
                          )}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-xs text-slate-600">
                        <div className="flex items-center gap-1 font-semibold text-slate-700">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.finishTime || 'Vừa xong'}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          <span>Thời lượng: {durationStr}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-center">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${
                            item.config.mode === 'exam'
                              ? 'bg-purple-100 text-purple-900 border border-purple-200'
                              : 'bg-teal-100 text-teal-900 border border-teal-200'
                          }`}
                        >
                          {item.config.mode === 'exam' ? 'Thi kiểm tra' : 'Luyện tập'}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-center font-bold text-slate-700">
                        <span className="text-emerald-700">{item.correctCount}</span> / {item.totalQuestions}
                        <span className="text-xs text-slate-400 block font-normal">
                          ({percentage}%)
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-center">
                        <span className="text-base sm:text-lg font-black text-emerald-800 font-mono">
                          {item.score}
                        </span>
                        <span className="text-[10px] text-slate-400 block">/ 10</span>
                      </td>

                      <td className="py-3.5 px-4 text-center">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${getBadgeColor(
                            item.classification
                          )}`}
                        >
                          <Award className="w-3 h-3" />
                          <span>{item.classification}</span>
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => exportSingleExamToExcel(item)}
                            className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition cursor-pointer"
                            title="Tải riêng file Excel cho bài làm của học sinh này"
                          >
                            <FileSpreadsheet className="w-4 h-4 text-emerald-700" />
                          </button>

                          <button
                            onClick={() => setSelectedExam(item)}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                            title="Xem chi tiết các câu hỏi và nhận xét sư phạm"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() =>
                              handleDelete(item.id, item.student.fullName)
                            }
                            className="p-1.5 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition cursor-pointer"
                            title="Xoá bài làm này"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-4 shadow-2xs">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 mx-auto flex items-center justify-center">
            <FileSpreadsheet className="w-8 h-8" />
          </div>

          <div className="space-y-1.5">
            <h3 className="text-lg font-black text-slate-900">
              {searchQuery || filterClassification !== 'all' || filterMode !== 'all'
                ? 'Không tìm thấy kết quả phù hợp với bộ lọc'
                : 'Chưa có lịch sử làm bài tập nào được lưu'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              Khi học sinh nhấn <strong>"Nộp Bài &amp; Xem Kết Quả"</strong> ở mục Luyện Tập &amp; Kiểm Tra, toàn bộ kết quả, điểm số và chi tiết các câu đúng/sai sẽ tự động được ghi nhận tại đây.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {onNavigateToQuiz && (
              <button
                onClick={onNavigateToQuiz}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-xs font-bold shadow-xs hover:from-emerald-700 hover:to-teal-800 transition cursor-pointer flex items-center gap-1.5"
              >
                <span>Vào Làm Bài Luyện Tập Ngay</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={handleSeedSampleData}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
              title="Thêm 3 bài kiểm tra mẫu để thử nghiệm tính năng tải Excel"
            >
              <PlusCircle className="w-4 h-4 text-emerald-700" />
              <span>Nạp 3 bài thi mẫu thử nghiệm</span>
            </button>
          </div>
        </div>
      )}

      {/* Detail Modal for Selected Exam */}
      {selectedExam && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs p-4 sm:p-6 flex items-center justify-center overflow-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 to-emerald-950 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-300 block uppercase tracking-wider">
                  Chi Tiết Bài Làm Của Học Sinh
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
                  {selectedExam.student.fullName || 'Học sinh chưa điền tên'}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Lớp: {selectedExam.student.className || 'Chưa ghi'} • Trường: {selectedExam.student.schoolName || 'Chưa ghi'} • Nộp lúc: {selectedExam.finishTime}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => exportSingleExamToExcel(selectedExam)}
                  className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 text-amber-950 text-xs font-black transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>Tải Excel</span>
                </button>
                <button
                  onClick={() => setSelectedExam(null)}
                  className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-slate-800">
              {/* Score Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 text-center">
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold block">Điểm số</span>
                  <span className="text-2xl font-black text-emerald-800 font-mono">
                    {selectedExam.score}/10
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold block">Số câu đúng</span>
                  <span className="text-2xl font-black text-slate-800">
                    {selectedExam.correctCount}/{selectedExam.totalQuestions}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold block">Xếp loại</span>
                  <span className="text-sm font-extrabold text-amber-900 block mt-1">
                    {selectedExam.classification}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold block">Thời lượng</span>
                  <span className="text-sm font-bold text-slate-700 block mt-1">
                    {Math.floor(selectedExam.timeSpentSeconds / 60)}p {selectedExam.timeSpentSeconds % 60}s
                  </span>
                </div>
              </div>

              {/* Pedagogical Feedback */}
              {selectedExam.teacherFeedback && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-950">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>Nhận xét sư phạm của Thầy giáo Ths. Phạm Ngọc Thái:</span>
                  </div>
                  <p className="text-slate-800 leading-relaxed italic">
                    "{selectedExam.teacherFeedback}"
                  </p>
                </div>
              )}

              {/* Questions review */}
              <div className="space-y-3">
                <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-700" />
                  <span>Danh sách câu hỏi trong đề ({selectedExam.questions.length} câu)</span>
                </h4>

                <div className="space-y-3">
                  {selectedExam.questions.map((q, idx) => {
                    const chosenIdx = selectedExam.userAnswers[q.id];
                    const isAnswered = chosenIdx !== undefined && chosenIdx !== -1;
                    const isCorrect = isAnswered && chosenIdx === q.correctAnswer;

                    return (
                      <div
                        key={q.id}
                        className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2 ${
                          isCorrect
                            ? 'bg-emerald-50/40 border-emerald-200'
                            : 'bg-rose-50/30 border-rose-200'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-slate-900">
                            Câu {idx + 1} ({q.difficulty}):
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-md font-extrabold text-xs flex items-center gap-1 ${
                              isCorrect
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {isCorrect ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Đúng</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="w-3.5 h-3.5" />
                                <span>Sai</span>
                              </>
                            )}
                          </span>
                        </div>

                        <div className="font-semibold text-slate-800">
                          <MathText content={q.content} />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                          {q.options.map((opt, oIdx) => {
                            const isChosen = chosenIdx === oIdx;
                            const isRight = q.correctAnswer === oIdx;
                            const letter = ['A', 'B', 'C', 'D'][oIdx];

                            let optStyle = 'bg-white border-slate-200 text-slate-700';
                            if (isRight) {
                              optStyle = 'bg-emerald-100/70 border-emerald-300 text-emerald-900 font-bold';
                            } else if (isChosen && !isRight) {
                              optStyle = 'bg-rose-100/70 border-rose-300 text-rose-900 line-through';
                            }

                            return (
                              <div
                                key={oIdx}
                                className={`p-2 rounded-lg border flex items-center gap-1.5 ${optStyle}`}
                              >
                                <span className="font-bold">{letter}.</span>
                                <span>
                                  <MathText content={opt} />
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        <div className="text-xs text-slate-600 bg-white/70 p-2.5 rounded-lg border border-slate-200/80">
                          <strong className="text-emerald-700">Hướng dẫn:</strong>{' '}
                          <MathText content={q.explanation} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">Mã bài làm: {selectedExam.id}</span>
              <button
                onClick={() => setSelectedExam(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryTab;
