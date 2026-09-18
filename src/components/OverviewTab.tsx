import React from 'react';
import { BOOK_METADATA, CURRICULUM_STRANDS } from '../data/bookAnalysisData';
import { BookMarked, Calendar, Users, Award, ShieldCheck, ArrowRight, Lightbulb, UserCheck } from 'lucide-react';

export const OverviewTab: React.FC<{ onNavigateToChapters: () => void }> = ({ onNavigateToChapters }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner / Key Document Identification */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-4">
            <BookMarked className="w-3.5 h-3.5" />
            Tài Liệu Căn Cứ Chương Trình GDPT 2018
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
            Báo Cáo Phân Tích Toàn Diện SGK &amp; SGV Toán 7 (KNTT)
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Phân tích chuyên sâu hai tài liệu do Bộ Giáo dục &amp; Đào tạo ban hành: <strong>Sách Giáo Khoa (SGK) Toán 7 Tập Một</strong> và <strong>Sách Giáo Viên (SGV) Toán 7 Trọn Bộ</strong> thuộc bộ sách <em>"Kết nối tri thức với cuộc sống"</em> của Nhà xuất bản Giáo dục Việt Nam.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-xs sm:text-sm">
            <div>
              <span className="text-slate-400 block">Tổng thời lượng</span>
              <span className="font-bold text-lg text-amber-300">140 tiết</span>
            </div>
            <div>
              <span className="text-slate-400 block">Số chương học</span>
              <span className="font-bold text-lg text-emerald-300">10 Chương + 2 TN</span>
            </div>
            <div>
              <span className="text-slate-400 block">Tổng Chủ biên</span>
              <span className="font-semibold text-slate-200">GS. Hà Huy Khoái</span>
            </div>
            <div>
              <span className="text-slate-400 block">Chủ biên</span>
              <span className="font-semibold text-slate-200">PGS. Nguyễn Huy Đoan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison of the 2 Documents (SGK vs SGV) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              SGK
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Sách Giáo Khoa (Tập 1 đính kèm)</h3>
              <p className="text-xs text-slate-500">Dành cho Học sinh (122 trang tài liệu)</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Biên soạn theo phương châm <em>"Thực tiễn → Trực quan → Trừu tượng"</em>. Mỗi bài học không áp đặt định nghĩa khô cứng mà bắt đầu bằng tình huống thực tế, dẫn dắt học sinh khám phá kiến thức qua hoạt động thực hành cắt ghép, đo đạc và tranh luận.
          </p>
          <ul className="text-xs text-slate-700 space-y-2 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
              <span><strong>5 Chương học ở Tập 1:</strong> Số hữu tỉ (14t), Số thực (10t), Góc &amp; song song (11t), Tam giác bằng nhau (14t), Thống kê dữ liệu (11t).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
              <span><strong>2 Hoạt động trải nghiệm:</strong> Vẽ hình với phần mềm GeoGebra Classic 5.0 và xử lí số liệu Dân số Việt Nam bằng Excel.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
              <span><strong>Hệ thống trợ giảng hoạt hình:</strong> Anh Pi thông thái, bạn Tròn và bạn Vuông đồng hành xuyên suốt.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              SGV
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Sách Giáo Viên (Trọn bộ 266 trang)</h3>
              <p className="text-xs text-slate-500">Cẩm nang sư phạm &amp; Thiết kế bài dạy cho Giáo viên</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Cung cấp căn cứ lí luận Chương trình 2018, kế hoạch bài dạy (giáo án) gợi ý cho <strong>toàn bộ 140 tiết cả năm</strong> (Chương I đến Chương X), phân tích những điểm học sinh hay hiểu sai và đáp án chi tiết từng bài tập SGK.
          </p>
          <ul className="text-xs text-slate-700 space-y-2 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
              <span><strong>Phần I - Những vấn đề chung:</strong> Đối chiếu điểm mới với SGK 2006, phương pháp phát triển 5 thành tố năng lực toán học và kĩ thuật kiểm tra đánh giá thường xuyên / định kì.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
              <span><strong>Phần II - Những vấn đề cụ thể:</strong> Kế hoạch dạy học chi tiết từng Đơn vị kiến thức (ĐVKT), thời lượng từng phút và giải pháp khắc phục vấn đề khó.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
              <span><strong>Hướng dẫn &amp; Đáp án:</strong> Toàn bộ lời giải bài tập SGK và bài tập ôn tập cuối chương, cuối năm.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3 Strands Breakdown */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Phân Phối 140 Tiết Theo 3 Mạch Kiến Thức (CT GDPT 2018)</h3>
            <p className="text-xs text-slate-500">Tỉ lệ cân đối giữa trang bị tri thức và rèn luyện năng lực tư duy, ứng dụng thực tiễn</p>
          </div>
          <button
            onClick={onNavigateToChapters}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
          >
            <span>Xem chi tiết từng chương</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CURRICULUM_STRANDS.map((strand, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:border-slate-300 transition">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Mạch {idx + 1}</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  {strand.percentage}%
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">{strand.name}</h4>
              <p className="text-2xl font-extrabold text-slate-800 mb-2">
                {strand.periods} <span className="text-sm font-normal text-slate-500">tiết</span>
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {strand.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Quỹ thời gian dự phòng &amp; Kiểm tra định kì:</strong> 14 tiết dành riêng cho ôn tập và kiểm tra đánh giá giữa kì, cuối kì (3 + 4 tiết mỗi học kì), đảm bảo đủ 140 tiết chuẩn quy định.
            </span>
          </div>
        </div>
      </div>

      {/* The Iconic Triad: Pi, Tròn, Vuông */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-600" />
          Bộ Ba Nhân Vật Sư Phạm Đồng Hành: Ý Đồ Sư Phạm Độc Đáo
        </h3>
        <p className="text-xs text-slate-600 mb-4">
          Khác với SGK truyền thống chỉ toàn chữ và công thức khô khan, SGK Toán 7 KNTT xây dựng hệ thống tương tác giữa 3 nhân vật tượng trưng cho 3 phong cách học tập và tư duy toán học:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BOOK_METADATA.characters.map((char, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <h4 className="font-bold text-sm text-slate-900">{char.name}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{char.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pedagogical Philosophy */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-3">
        <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-amber-600" />
          Nguyên Tắc Dạy Học Cốt Lõi Được Tác Giả SGV Nhấn Mạnh:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-white p-3.5 rounded-lg border border-slate-200">
            <strong className="block text-slate-900 font-semibold mb-1">1. Lấy người học làm trung tâm</strong>
            Học sinh phải là người tự tay đo đạc, cắt dán, tính toán để tìm ra quy luật, thay vì giáo viên đọc chép định nghĩa sẵn.
          </div>
          <div className="bg-white p-3.5 rounded-lg border border-slate-200">
            <strong className="block text-slate-900 font-semibold mb-1">2. Kết hợp trực quan và suy luận</strong>
            Giai đoạn lớp 7 là bản lề chuyển giao từ quan sát trực giác (lớp 6) sang lập luận logic hình học chặt chẽ (chứng minh hai tam giác bằng nhau).
          </div>
          <div className="bg-white p-3.5 rounded-lg border border-slate-200">
            <strong className="block text-slate-900 font-semibold mb-1">3. Tích hợp liên môn và thực tế</strong>
            Mỗi bài học luôn gắn với Vật lí (trọng tâm, vận tốc), Sinh học (dinh dưỡng, nhóm máu), Địa lí (dân số, độ cao) và Tài chính (Quy tắc 72).
          </div>
        </div>
      </div>
    </div>
  );
};
