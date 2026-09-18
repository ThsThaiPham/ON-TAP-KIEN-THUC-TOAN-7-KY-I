import React, { useState } from 'react';
import { CHAPTERS_DATA } from '../data/bookAnalysisData';
import { ChapterInfo, LessonInfo } from '../types';
import {
  Layers,
  Clock,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  BookOpen,
  Sparkles,
  ChevronRight,
  Flame,
  Lightbulb
} from 'lucide-react';

export const ChaptersDetailTab: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>('chuong-1');
  const [selectedLessonIdx, setSelectedLessonIdx] = useState<number>(0);

  const currentChapter = CHAPTERS_DATA.find((c) => c.id === selectedChapterId) || CHAPTERS_DATA[0];
  const currentLesson: LessonInfo | undefined = currentChapter.lessons[selectedLessonIdx] || currentChapter.lessons[0];

  const handleSelectChapter = (id: string) => {
    setSelectedChapterId(id);
    setSelectedLessonIdx(0);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Chapter Selection Pills */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
          Chọn chương phân tích (Tập 1 &amp; Tập 2 - KNTT)
        </div>
        <div className="flex flex-wrap gap-2">
          {CHAPTERS_DATA.map((ch) => (
            <button
              key={ch.id}
              onClick={() => handleSelectChapter(ch.id)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                selectedChapterId === ch.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span className="opacity-75">Ch.{ch.number}:</span>
              <span>{ch.title}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedChapterId === ch.id ? 'bg-blue-700 text-blue-100' : 'bg-slate-200 text-slate-600'
              }`}>
                {ch.periods}t
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Chapter Detail Main Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Chapter Header */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-slate-950">
                Chương {currentChapter.number} (Tập {currentChapter.volume})
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-slate-200 border border-white/20">
                {currentChapter.strand}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-amber-300">
              <Clock className="w-3.5 h-3.5" />
              <span>Thời lượng phân phối: {currentChapter.periods} tiết</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {currentChapter.title}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
            {currentChapter.summary}
          </p>
        </div>

        {/* Sub-Tabs / Lesson Selection within chapter */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Các bài học trong chương:
          </div>
          <div className="flex flex-wrap gap-2">
            {currentChapter.lessons.map((lesson, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedLessonIdx(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
                  selectedLessonIdx === idx
                    ? 'bg-white text-blue-700 shadow-xs border border-blue-300 font-semibold'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{lesson.number}: {lesson.title}</span>
                <span className="text-[10px] text-slate-400">({lesson.periods}t)</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Lesson Content */}
        {currentLesson && (
          <div className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Nội dung chi tiết bài học
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {currentLesson.number}: {currentLesson.title}
                </h3>
              </div>
              <div className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100 self-start sm:self-auto">
                Thời lượng: {currentLesson.periods} tiết ({currentLesson.periods * 45} phút)
              </div>
            </div>

            {/* Terms and Core Knowledge */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  Khái niệm &amp; Thuật ngữ cốt lõi
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {currentLesson.terms.map((term, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-800 border border-slate-200"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                  Kiến thức &amp; Kĩ năng trọng tâm
                </h4>
                <ul className="text-xs text-slate-700 space-y-1.5">
                  {currentLesson.coreKnowledge.map((item, kIdx) => (
                    <li key={kIdx} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Opening Problem */}
            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200">
              <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                Tình huống thực tiễn mở đầu bài học (Tạo động cơ)
              </h4>
              <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                "{currentLesson.openingProblem}"
              </p>
              <p className="text-[11px] text-amber-800 mt-1 italic">
                * Lưu ý SGV: Học sinh chưa cần trả lời ngay khi mới vào bài, mà câu trả lời sẽ được sáng tỏ tự nhiên sau khi hoàn thành kiến thức mới.
              </p>
            </div>

            {/* Learning Activities Breakdown */}
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                Chuỗi hoạt động học tập (Theo cấu phần SGK &amp; hướng dẫn SGV)
              </h4>
              <div className="space-y-3">
                {currentLesson.activities.map((act, aIdx) => (
                  <div key={aIdx} className="p-3.5 rounded-lg border border-slate-200 bg-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                        act.type === 'Khám phá'
                          ? 'bg-blue-100 text-blue-800'
                          : act.type === 'Thực hành'
                          ? 'bg-emerald-100 text-emerald-800'
                          : act.type === 'Vận dụng'
                          ? 'bg-amber-100 text-amber-800'
                          : act.type === 'Tranh luận'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-slate-100 text-slate-800'
                      }`}>
                        {act.type}
                      </span>
                      <span className="text-xs font-bold text-slate-800">{act.description}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-2 border-l-2 border-slate-300">
                      <strong>Gợi ý giáo viên (SGV):</strong> {act.teacherGuide}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Exercises in this lesson */}
            {currentLesson.keyExercises.length > 0 && (
              <div className="pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  Bài tập tiêu biểu &amp; Hướng dẫn giải (SGV)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentLesson.keyExercises.map((ex, eIdx) => (
                    <div key={eIdx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                      <div className="font-bold text-blue-700 mb-1">Bài {ex.id}</div>
                      <p className="text-slate-800 mb-2 font-medium">{ex.prompt}</p>
                      <div className="text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-100">
                        <strong>Đáp án SGV:</strong> {ex.answerOrHint}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Common Student Misconceptions & Pedagogical Solutions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-slate-900 text-base">
              Vấn Đề Học Sinh Hay Mắc Lỗi &amp; Giải Pháp Sư Phạm Của Tác Giả (SGV)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentChapter.commonMistakes.map((item, mIdx) => (
              <div key={mIdx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-start gap-2 text-xs font-bold text-red-700">
                  <Flame className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                  <span>Sai lầm thường gặp: {item.mistake}</span>
                </div>
                <p className="text-xs text-slate-600">
                  <strong>Nguyên nhân:</strong> {item.reason}
                </p>
                <div className="p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-100 text-xs text-emerald-900">
                  <strong>Giải pháp sư phạm:</strong> {item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pedagogical Tips for Teachers */}
        <div className="p-6 bg-white border-t border-slate-200 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            Gợi ý tổ chức hoạt động dạy học của tác giả SGV:
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-600">
            {currentChapter.pedagogicalTips.map((tip, tIdx) => (
              <li key={tIdx} className="flex items-start gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
