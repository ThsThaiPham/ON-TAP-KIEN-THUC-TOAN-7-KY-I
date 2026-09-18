export interface ChapterInfo {
  id: string;
  volume: 1 | 2;
  number: string;
  title: string;
  periods: number;
  strand: 'Số và Đại số' | 'Hình học và Đo lường' | 'Thống kê và Xác suất' | 'Hoạt động trải nghiệm';
  summary: string;
  keyObjectives: string[];
  lessons: LessonInfo[];
  innovations: string[];
  commonMistakes: {
    mistake: string;
    reason: string;
    solution: string;
  }[];
  pedagogicalTips: string[];
}

export type DifficultyLevel = 'Nhận biết' | 'Thông hiểu' | 'Vận dụng';

export interface Question {
  id: string;
  chapterId: string;
  chapterTitle: string;
  lessonId: string;
  lessonTitle: string;
  difficulty: DifficultyLevel;
  content: string;
  options: string[];
  correctAnswer: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanation: string;
  pedagogicalNote?: string;
}

export interface StudentInfo {
  fullName: string;
  className: string;
  schoolName: string;
}

export interface QuizConfig {
  chapterId: string; // 'all' or chapter id
  lessonId: string;  // 'all' or lesson id
  questionCount: number; // max 50
  difficulty: 'all' | 'Nhận biết' | 'Thông hiểu' | 'Vận dụng';
  mode: 'exam' | 'practice'; // exam has timer & submit, practice reveals answer immediately
  durationMinutes: number; // 15, 30, 45, 60
}

export interface ExamResult {
  id: string;
  student: StudentInfo;
  config: QuizConfig;
  startTime: string;
  finishTime: string;
  timeSpentSeconds: number;
  totalQuestions: number;
  correctCount: number;
  score: number; // on a scale of 10
  classification: 'Xuất sắc' | 'Tốt' | 'Khá' | 'Đạt' | 'Chưa đạt' | 'Giỏi' | 'Cần cố gắng';
  byDifficulty: {
    'Nhận biết': { total: number; correct: number };
    'Thông hiểu': { total: number; correct: number };
    'Vận dụng': { total: number; correct: number };
  };
  byChapter: Record<string, { total: number; correct: number; title: string }>;
  userAnswers: Record<string, number>; // questionId -> chosen index (0..3)
  questions: Question[];
  teacherFeedback: string;
}

export interface LessonInfo {
  number: string;
  title: string;
  periods: number;
  terms: string[];
  coreKnowledge: string[];
  openingProblem: string;
  activities: {
    type: 'Khám phá' | 'Đọc hiểu' | 'Luyện tập' | 'Thực hành' | 'Vận dụng' | 'Tranh luận' | 'Thử thách nhỏ';
    description: string;
    teacherGuide: string;
  }[];
  keyExercises: {
    id: string;
    prompt: string;
    answerOrHint: string;
  }[];
}

export interface CurriculumComparisonItem {
  topic: string;
  strand: string;
  sgk2006: string;
  sgk2018: string;
  pedagogicalRationale: string;
  changeType: 'Giảm tải' | 'Chuyển lên lớp trên' | 'Chuyển xuống lớp dưới' | 'Đổi mới phương pháp' | 'Nội dung mới';
}

export interface MathCompetency {
  code: string;
  name: string;
  description: string;
  manifestationInGrade7: string;
  assessmentTools: string[];
}
