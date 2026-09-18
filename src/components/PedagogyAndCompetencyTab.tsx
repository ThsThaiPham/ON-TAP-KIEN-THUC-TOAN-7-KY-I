import React, { useState } from 'react';
import { MATH_COMPETENCIES } from '../data/bookAnalysisData';
import { GraduationCap, CheckCircle2, Award, Brain, Calculator, MessageSquare, Wrench, ShieldAlert } from 'lucide-react';

export const PedagogyAndCompetencyTab: React.FC = () => {
  const [activeComp, setActiveComp] = useState<string>('NL1');

  const getCompIcon = (code: string) => {
    switch (code) {
      case 'NL1': return <Brain className="w-5 h-5 text-blue-600" />;
      case 'NL2': return <Calculator className="w-5 h-5 text-emerald-600" />;
      case 'NL3': return <Award className="w-5 h-5 text-amber-600" />;
      case 'NL4': return <MessageSquare className="w-5 h-5 text-indigo-600" />;
      case 'NL5': return <Wrench className="w-5 h-5 text-rose-600" />;
      default: return <GraduationCap className="w-5 h-5" />;
    }
  };

  const selectedCompetency = MATH_COMPETENCIES.find(c => c.code === activeComp) || MATH_COMPETENCIES[0];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 4-Phase Lesson Architecture */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-bold text-slate-900">
            Cấu Trúc Vi Mô Của Bài Học Toán 7 (Mô Hình 4 Cấu Phần Cốt Lõi)
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          Theo định hướng của tác giả SGV (trang 19 - 25), mỗi bài học Toán 7 là một chuỗi hoạt động có mục đích, không còn dạy theo lối "thầy đọc - trò chép" mà tổ chức cho học sinh tự chiếm lĩnh tri thức theo quy trình sư phạm 4 bước khép kín:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 mb-2 inline-block">
              Cấu phần 1
            </span>
            <h3 className="font-bold text-slate-900 text-sm mb-1.5">Phần Định Hướng</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nằm ngay sau tên bài, gồm 2 ô màu: Ô liệt kê <strong>thuật ngữ, khái niệm mới</strong> và Ô chỉ ra <strong>kiến thức, kĩ năng cần nhớ</strong>. Giúp giáo viên và học sinh định vị trọng tâm bài học ngay từ phút đầu tiên.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 mb-2 inline-block">
              Cấu phần 2
            </span>
            <h3 className="font-bold text-amber-950 text-sm mb-1.5">Phần Mở Đầu (Tình huống)</h3>
            <p className="text-xs text-amber-900 leading-relaxed">
              Đặt ra bài toán thực tế chứa đựng mâu thuẫn nhận thức (ví dụ: chỉ số WHtR, cắt bánh chưng, khinh khí cầu, cân đĩa...). Học sinh <strong>chưa cần giải ngay</strong> mà tạo tâm lí tò mò, khám phá.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 mb-2 inline-block">
              Cấu phần 3
            </span>
            <h3 className="font-bold text-emerald-950 text-sm mb-1.5">Nội Dung Bài Học (ĐVKT)</h3>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Mỗi Đơn vị kiến thức trải qua: <em>Nêu vấn đề → Hình thành kiến thức (Khám phá hoặc Đọc hiểu) → Luyện tập &amp; củng cố (Ví dụ, Luyện tập, Thực hành) → Vận dụng (Tranh luận, Thử thách nhỏ)</em>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200">
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-900 mb-2 inline-block">
              Cấu phần 4
            </span>
            <h3 className="font-bold text-indigo-950 text-sm mb-1.5">Bài Tập Sau Bài Học</h3>
            <p className="text-xs text-indigo-900 leading-relaxed">
              Các bài tập chọn lọc vừa sức: nhóm bài tập cơ bản làm ngay tại lớp để củng cố kiến thức tức thời, và các bài toán thực tiễn nâng cao giao về nhà hoặc xử lí trong tiết Luyện tập chung.
            </p>
          </div>
        </div>
      </div>

      {/* 5 Math Competencies */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
        <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-600" />
          5 Thành Tố Năng Lực Toán Học (Quy Định Chuẩn Đầu Ra CT 2018)
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          Sách Giáo Viên Toán 7 quy định chi tiết biểu hiện của 5 năng lực thành phần và công cụ đánh giá tương ứng trong từng tiết dạy:
        </p>

        {/* Competency Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {MATH_COMPETENCIES.map((comp) => (
            <button
              key={comp.code}
              onClick={() => setActiveComp(comp.code)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition cursor-pointer ${
                activeComp === comp.code
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{comp.code}:</span>
              <span>{comp.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Competency Detail */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center">
              {getCompIcon(selectedCompetency.code)}
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Mã năng lực: {selectedCompetency.code}
              </span>
              <h3 className="font-bold text-slate-900 text-base">{selectedCompetency.name}</h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
            {selectedCompetency.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 bg-white rounded-lg border border-slate-200">
              <strong className="block text-slate-900 font-semibold mb-1 text-blue-700">
                Biểu hiện cụ thể trong môn Toán 7:
              </strong>
              <p className="text-slate-600 leading-relaxed">
                {selectedCompetency.manifestationInGrade7}
              </p>
            </div>

            <div className="p-3.5 bg-white rounded-lg border border-slate-200">
              <strong className="block text-slate-900 font-semibold mb-1 text-emerald-700">
                Phương pháp và công cụ kiểm tra đánh giá:
              </strong>
              <ul className="text-slate-600 space-y-1">
                {selectedCompetency.assessmentTools.map((tool, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Matrix Guidelines */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
        <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-indigo-600" />
          Định Hướng Kiểm Tra Đánh Giá Học Sinh Theo SGV Toán 7
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Đánh Giá Quá Trình (Thường Xuyên)</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-2">
              Diễn ra liên tục trong từng tiết học thông qua quan sát, ghi chép hành vi học tập, vấn đáp gợi mở và đánh giá chéo giữa các học sinh.
            </p>
            <ul className="text-xs text-slate-600 space-y-1 pl-3 list-disc">
              <li>Đánh giá qua phần thảo luận Tranh luận của Tròn và Vuông.</li>
              <li>Đánh giá sản phẩm thực hành cắt gấp giấy, dựng hình GeoGebra.</li>
              <li>Kiểm tra bài tập nhanh 5 - 10 phút đầu hoặc cuối giờ.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Đánh Giá Định Kì (Giữa Kì &amp; Cuối Kì)</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-2">
              Dành 14 tiết phân bổ cả năm. Đề thi được khuyến nghị kết hợp hài hoà giữa Trắc nghiệm khách quan và Tự luận theo tỉ lệ khoa học:
            </p>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs space-y-1">
              <div className="flex justify-between font-semibold text-slate-800">
                <span>Trắc nghiệm (30%):</span>
                <span>Kiểm tra nhận biết khái niệm, thông hiểu công thức mới</span>
              </div>
              <div className="flex justify-between font-semibold text-blue-700">
                <span>Tự luận (70%):</span>
                <span>Bài toán vận dụng thực tiễn, lập luận chứng minh hình học</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
