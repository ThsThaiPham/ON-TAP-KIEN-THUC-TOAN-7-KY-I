import React, { useState } from 'react';
import { CHAPTERS_DATA } from '../data/bookAnalysisData';
import { Search, CheckCircle2, BookOpen, Clock, Lightbulb, ExternalLink } from 'lucide-react';
import { MathText } from './MathText';

export const ExerciseLookupTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedStrand, setSelectedStrand] = useState<string>('all');

  // Flatten all exercises with lesson and chapter context
  const allExercises = CHAPTERS_DATA.flatMap((ch) =>
    ch.lessons.flatMap((ls) =>
      ls.keyExercises.map((ex) => ({
        ...ex,
        chapterNumber: ch.number,
        chapterTitle: ch.title,
        lessonNumber: ls.number,
        lessonTitle: ls.title,
        strand: ch.strand,
      }))
    )
  );

  const filteredExercises = allExercises.filter((ex) => {
    const matchesStrand = selectedStrand === 'all' || ex.strand === selectedStrand;
    const matchesSearch =
      searchTerm.trim() === '' ||
      ex.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.answerOrHint.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.lessonTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.chapterTitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStrand && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Search Header */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
        <h2 className="text-lg font-bold text-slate-900 mb-1">
          Tra Cứu Nhanh Bài Tập, Tình Huống Thực Tiễn &amp; Hướng Dẫn Giải SGV
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-5">
          Tìm kiếm bài tập tiêu biểu, câu hỏi mở đầu hoặc lời giải sư phạm chi tiết trong toàn bộ hệ thống SGK &amp; SGV Toán 7.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Nhập mã bài (vd: 1.10, 2.6, 3.18, 4.24, 7.33) hoặc từ khoá (bánh chưng, khinh khí cầu, xúc xắc...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>

          <div>
            <select
              value={selectedStrand}
              onChange={(e) => setSelectedStrand(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
            >
              <option value="all">Tất cả mạch kiến thức</option>
              <option value="Số và Đại số">Số và Đại số</option>
              <option value="Hình học và Đo lường">Hình học và Đo lường</option>
              <option value="Thống kê và Xác suất">Thống kê và Xác suất</option>
              <option value="Hoạt động trải nghiệm">Hoạt động trải nghiệm</option>
            </select>
          </div>
        </div>
      </div>

      {/* Exercise Results List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredExercises.map((ex, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-blue-300 transition space-y-3"
          >
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">
                  Bài {ex.id}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Chương {ex.chapterNumber} • {ex.lessonNumber}
                </span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                {ex.strand}
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Đề bài trong SGK:
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                <MathText content={ex.prompt} />
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-emerald-50/80 border border-emerald-100 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Hướng dẫn giải &amp; Đáp án SGV:</span>
              </div>
              <p className="text-emerald-950 leading-relaxed font-mono text-xs">
                <MathText content={ex.answerOrHint} />
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredExercises.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200 text-slate-500 text-sm">
          Không tìm thấy bài tập nào khớp với từ khoá "{searchTerm}". Thử tìm theo số hiệu bài (1.1, 2.5, 3.8...)
        </div>
      )}
    </div>
  );
};
