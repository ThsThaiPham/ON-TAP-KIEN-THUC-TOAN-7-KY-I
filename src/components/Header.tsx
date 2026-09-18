import React from 'react';
import {
  BookOpen,
  Sparkles,
  GraduationCap,
  Compass,
  Layers,
  CheckCircle2,
  FileCheck,
  Award,
  UserCheck,
  FileSpreadsheet
} from 'lucide-react';
import { BOOK_METADATA } from '../data/bookAnalysisData';

export type ActiveTabType = 'quiz' | 'history' | 'theory' | 'exercises' | 'chapters' | 'comparison' | 'pedagogy' | 'overview';

interface HeaderProps {
  activeTab: ActiveTabType;
  setActiveTab: (tab: ActiveTabType) => void;
  onOpenAiModal: () => void;
  studentName?: string;
  studentClass?: string;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenAiModal,
  studentName,
  studentClass
}) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      {/* Top bar with official metadata */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-3 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-sm font-black text-lg shrink-0">
              T7
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  ÔN TẬP KIẾN THỨC TOÁN 7 KỲ I
                </h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-950 border border-amber-300">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  Tác giả: Thầy giáo Ths. Phạm Ngọc Thái
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Chương trình GDPT 2018 • Bộ sách Kết Nối Tri Thức Với Cuộc Sống (NXB Giáo Dục Việt Nam)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            {studentName && (
              <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs font-semibold text-slate-700">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span>Học sinh: <strong>{studentName}</strong> {studentClass ? `(${studentClass})` : ''}</span>
              </div>
            )}

            <button
              onClick={onOpenAiModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 text-white shadow-xs hover:from-emerald-700 hover:to-amber-700 transition cursor-pointer"
              title="Đặt câu hỏi sư phạm với AI của Thầy Thái về kiến thức Toán 7"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Cố Vấn Sư Phạm AI</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex space-x-1 sm:space-x-3 overflow-x-auto no-scrollbar border-t border-slate-100 pt-1.5 pb-2">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xs'
                : 'text-slate-700 hover:text-emerald-950 hover:bg-emerald-50/70'
            }`}
          >
            <FileCheck className="w-4 h-4" />
            <span>Luyện Tập &amp; Kiểm Tra Kỳ I (Tối đa 50 câu)</span>
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'history'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xs'
                : 'text-slate-700 hover:text-amber-950 hover:bg-amber-50/70 border border-dashed border-amber-300/70'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-900" />
            <span>Lịch Sử Bài Làm &amp; Xuất Excel</span>
          </button>

          <button
            onClick={() => setActiveTab('theory')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'theory'
                ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-300 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Tóm Tắt Lý Thuyết 5 Chương</span>
          </button>

          <button
            onClick={() => setActiveTab('exercises')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'exercises'
                ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-300 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Tra Cứu Bài Tập &amp; Lời Giải SGV</span>
          </button>

          <button
            onClick={() => setActiveTab('chapters')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'chapters'
                ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-300 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Phân Tích 10 Chương &amp; 140 Tiết</span>
          </button>

          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'comparison'
                ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-300 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Điểm Mới So Với 2006</span>
          </button>

          <button
            onClick={() => setActiveTab('pedagogy')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'pedagogy'
                ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-300 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Mô Hình Sư Phạm &amp; 5 Năng Lực</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
