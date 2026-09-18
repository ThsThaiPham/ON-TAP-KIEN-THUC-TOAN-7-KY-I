import React, { useRef, useState } from 'react';
import { ExamResult } from '../types';
import {
  Award,
  Printer,
  Maximize2,
  Minimize2,
  CheckCircle2,
  Sparkles,
  Star,
  Check,
  Share2,
  ShieldCheck
} from 'lucide-react';

interface Certificate16x9Props {
  examResult: ExamResult;
  onPrint?: () => void;
}

export const Certificate16x9: React.FC<Certificate16x9Props> = ({
  examResult,
  onPrint
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  const { student, score, classification, correctCount, totalQuestions } = examResult;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  // Generate certificate code from ID or timestamp
  const certCode = `MAT7-K1-${examResult.id.replace(/[^a-zA-Z0-9]/g, '').slice(-6).toUpperCase() || '2024VN'}`;
  const issueDate = new Date().toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  // Color config based on classification
  const getBadgeStyle = () => {
    switch (classification) {
      case 'Xuất sắc':
        return {
          ribbon: 'from-amber-500 via-orange-500 to-amber-600',
          text: 'text-amber-950',
          badgeBg: 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400',
          border: 'border-amber-500',
          sealColor: 'text-amber-600',
          subLabel: 'Danh hiệu Thủ khoa ôn tập xuất sắc'
        };
      case 'Tốt':
        return {
          ribbon: 'from-orange-500 via-amber-500 to-yellow-600',
          text: 'text-amber-950',
          badgeBg: 'bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-300',
          border: 'border-orange-400',
          sealColor: 'text-orange-600',
          subLabel: 'Thành tích học tập vững vàng'
        };
      case 'Khá':
        return {
          ribbon: 'from-amber-500 to-emerald-600',
          text: 'text-emerald-950',
          badgeBg: 'bg-gradient-to-r from-amber-200 to-emerald-200',
          border: 'border-emerald-400',
          sealColor: 'text-emerald-600',
          subLabel: 'Đạt kết quả khá & tiến bộ'
        };
      case 'Đạt':
        return {
          ribbon: 'from-amber-600 to-teal-600',
          text: 'text-teal-950',
          badgeBg: 'bg-gradient-to-r from-amber-100 to-teal-100',
          border: 'border-teal-400',
          sealColor: 'text-teal-600',
          subLabel: 'Đạt chuẩn kiến thức cơ bản'
        };
      default:
        return {
          ribbon: 'from-slate-600 to-amber-700',
          text: 'text-slate-900',
          badgeBg: 'bg-gradient-to-r from-slate-200 to-amber-100',
          border: 'border-slate-400',
          sealColor: 'text-amber-700',
          subLabel: 'Cần tiếp tục rèn luyện ôn tập thêm'
        };
    }
  };

  const style = getBadgeStyle();

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`Chứng nhận Toán 7 Kỳ I - Mã số: ${certCode} - Học sinh: ${student.fullName || 'Học sinh'} - Điểm: ${score}/10 (${percentage}%) - Xếp loại: ${classification}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handlePrintCertificateOnly = () => {
    if (onPrint) {
      onPrint();
    } else {
      window.print();
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Action Bar for Certificate */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100/70 p-4 rounded-2xl border border-amber-200/80 shadow-2xs print:hidden">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-xs">
            <Award className="w-5 h-5 text-yellow-100" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-amber-950 flex items-center gap-1.5">
              <span>Chứng Nhận Hoàn Thành Ôn Tập Toán 7</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 border border-amber-300">
                Chuẩn 16:9 Tươi Sáng
              </span>
            </h3>
            <p className="text-xs text-amber-800/80">
              Định dạng chuẩn tỉ lệ 16:9 sắc nét, tông màu vàng cam trang trọng, sẵn sàng in hoặc lưu trữ.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyCode}
            className="px-3 py-1.5 rounded-xl bg-white hover:bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
            title="Sao chép thông tin chứng nhận"
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-amber-600" />}
            <span>{isCopied ? 'Đã chép' : 'Sao chép mã'}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="px-3 py-1.5 rounded-xl bg-white hover:bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
            title={isFullscreen ? 'Thu nhỏ' : 'Xem toàn màn hình 16:9'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span>{isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}</span>
          </button>

          <button
            type="button"
            onClick={handlePrintCertificateOnly}
            className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-extrabold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Printer className="w-3.5 h-3.5 text-yellow-200" />
            <span>In Chứng Nhận</span>
          </button>
        </div>
      </div>

      {/* Main Certificate Outer Frame */}
      <div
        className={`transition-all duration-300 ${
          isFullscreen
            ? 'fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center overflow-auto'
            : 'w-full'
        }`}
      >
        <div
          ref={certRef}
          className={`w-full max-w-5xl mx-auto aspect-[16/9] relative rounded-2xl overflow-hidden shadow-xl border-4 border-amber-400 bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF3DE] text-slate-800 select-none print:shadow-none print:border-amber-500 print:w-full print:aspect-[16/9] ${
            isFullscreen ? 'max-h-[95vh] w-auto aspect-[16/9]' : ''
          }`}
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 10%, rgba(251, 191, 36, 0.12) 0%, transparent 40%),
              radial-gradient(circle at 90% 90%, rgba(249, 115, 22, 0.12) 0%, transparent 45%),
              radial-gradient(circle at 50% 50%, rgba(254, 240, 138, 0.08) 0%, transparent 60%)
            `
          }}
        >
          {/* Close button if in fullscreen */}
          {isFullscreen && (
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-3 right-3 z-30 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition print:hidden"
              title="Đóng toàn màn hình"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          )}

          {/* Ornamental Outer Guilloché / Golden Border with Corner Accents */}
          <div className="absolute inset-2 sm:inset-3 border-2 border-amber-300/80 rounded-xl pointer-events-none" />
          <div className="absolute inset-3 sm:inset-4 border border-dashed border-orange-300/60 rounded-lg pointer-events-none" />

          {/* 4 Corner Traditional Royal Flourishes in Amber-Orange */}
          <div className="absolute top-3.5 left-3.5 w-6 h-6 sm:w-10 sm:h-10 border-t-4 border-l-4 border-amber-500 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-3.5 right-3.5 w-6 h-6 sm:w-10 sm:h-10 border-t-4 border-r-4 border-amber-500 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-3.5 left-3.5 w-6 h-6 sm:w-10 sm:h-10 border-b-4 border-l-4 border-amber-500 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-3.5 right-3.5 w-6 h-6 sm:w-10 sm:h-10 border-b-4 border-r-4 border-amber-500 rounded-br-lg pointer-events-none" />

          {/* Background Watermark / Compass & Math Symbols */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
            <svg viewBox="0 0 500 500" className="w-[65%] h-[65%] text-orange-950" fill="currentColor">
              <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="6" fill="none" />
              <circle cx="250" cy="250" r="190" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" fill="none" />
              <path d="M250 40 L270 200 L430 200 L290 280 L350 440 L250 330 L150 440 L210 280 L70 200 L230 200 Z" />
            </svg>
          </div>

          {/* Inner Content Area - Designed to fit strictly within 16:9 proportional canvas */}
          <div className="relative z-10 w-full h-full p-4 sm:p-7 md:p-8 flex flex-col justify-between">
            {/* Header: National Header & Motto */}
            <div className="text-center space-y-0.5 sm:space-y-1">
              <div className="text-[9px] sm:text-[11px] md:text-xs font-black tracking-[0.2em] text-slate-800 uppercase">
                CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
              </div>
              <div className="text-[8px] sm:text-[10px] md:text-[11px] font-bold text-slate-600 italic tracking-wider">
                Độc lập – Tự do – Hạnh phúc
              </div>
              <div className="flex items-center justify-center gap-2 text-amber-500 my-0.5 sm:my-1">
                <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-amber-400" />
                <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-500" />
                <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-amber-400" />
              </div>

              {/* Main Certificate Title */}
              <div className="pt-0.5 sm:pt-1">
                <span className="text-[10px] sm:text-xs md:text-sm font-black text-amber-700 uppercase tracking-widest block drop-shadow-2xs">
                  BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG • CHƯƠNG TRÌNH GDPT 2018
                </span>
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 uppercase font-sans drop-shadow-xs whitespace-nowrap">
                  <span className="inline-block tracking-[-0.04em]">GIẤY</span>{' '}
                  <span className="inline-block tracking-normal">CHỨNG NHẬN</span>
                </h1>
                <div className="text-[10px] sm:text-xs md:text-sm font-extrabold text-slate-800 tracking-wide">
                  HOÀN THÀNH CHƯƠNG TRÌNH ÔN TẬP TOÁN 7 – HỌC KỲ I
                </div>
              </div>
            </div>

            {/* Recipient Section */}
            <div className="text-center space-y-1 sm:space-y-1.5 my-auto py-1">
              <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 italic">
                Trân trọng trao tặng chứng nhận cho học sinh:
              </p>
              <div className="text-base sm:text-2xl md:text-3xl font-black text-orange-950 font-serif tracking-wide drop-shadow-xs">
                {student.fullName || 'HỌC SINH TOÁN 7'}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs md:text-sm text-slate-700 font-medium">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100/90 border border-amber-300 font-bold text-amber-900">
                  Lớp: {student.className || '7'}
                </span>
                <span>•</span>
                <span className="px-2.5 py-0.5 rounded-full bg-orange-100/90 border border-orange-300 font-bold text-orange-900">
                  Trường: {student.schoolName || 'Trường THCS'}
                </span>
              </div>

              <p className="text-[9px] sm:text-xs md:text-sm text-slate-700 max-w-2xl mx-auto leading-tight pt-1">
                Đã hoàn thành xuất sắc bài kiểm tra và ôn tập toàn diện kiến thức 5 Chương Toán 7 Kỳ I:
                <span className="font-semibold text-amber-950"> Số hữu tỉ, Số thực, Góc &amp; Hai đường thẳng song song, Tam giác bằng nhau, Thu thập &amp; Biểu diễn dữ liệu</span>.
              </p>
            </div>

            {/* Results & Honours Block */}
            <div className="bg-gradient-to-r from-amber-100/70 via-orange-100/50 to-amber-100/70 border border-amber-300/80 rounded-xl p-2 sm:p-3 max-w-3xl w-full mx-auto shadow-2xs">
              <div className="grid grid-cols-3 divide-x divide-amber-300/70 text-center">
                {/* Score */}
                <div className="px-1 sm:px-3">
                  <div className="text-[9px] sm:text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                    Điểm Số
                  </div>
                  <div className="text-sm sm:text-xl md:text-2xl font-black text-amber-900 flex items-baseline justify-center gap-0.5">
                    <span>{score}</span>
                    <span className="text-[10px] sm:text-xs font-semibold text-amber-700">/ 10</span>
                  </div>
                </div>

                {/* Accuracy */}
                <div className="px-1 sm:px-3">
                  <div className="text-[9px] sm:text-[11px] font-bold text-orange-800 uppercase tracking-wider">
                    Độ Chính Xác
                  </div>
                  <div className="text-sm sm:text-xl md:text-2xl font-black text-orange-900">
                    {percentage}%
                  </div>
                  <div className="text-[8px] sm:text-[10px] text-orange-700 font-medium hidden sm:block">
                    {correctCount}/{totalQuestions} câu đúng
                  </div>
                </div>

                {/* Classification - Highlighted */}
                <div className="px-1 sm:px-3 flex flex-col items-center justify-center">
                  <div className="text-[9px] sm:text-[11px] font-bold text-amber-900 uppercase tracking-wider">
                    Xếp Loại Đạt Được
                  </div>
                  <div className="inline-flex items-center gap-1 sm:gap-1.5 mt-0.5">
                    <span
                      className={`px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-lg text-xs sm:text-base md:text-lg font-black uppercase tracking-wide border shadow-2xs ${style.badgeBg} ${style.text} ${style.border}`}
                    >
                      {classification}
                    </span>
                  </div>
                </div>
              </div>

              {/* Classification Threshold Legend */}
              <div className="mt-1.5 pt-1.5 border-t border-amber-200/80 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-[8px] sm:text-[10px] text-amber-900 font-semibold">
                <span className="text-amber-800 font-bold">Thang xếp loại:</span>
                <span className={percentage >= 90 ? 'text-amber-950 font-black underline' : 'opacity-80'}>
                  ≥ 90%: Xuất sắc
                </span>
                <span>•</span>
                <span className={percentage >= 80 && percentage < 90 ? 'text-amber-950 font-black underline' : 'opacity-80'}>
                  ≥ 80%: Tốt
                </span>
                <span>•</span>
                <span className={percentage >= 70 && percentage < 80 ? 'text-amber-950 font-black underline' : 'opacity-80'}>
                  ≥ 70%: Khá
                </span>
                <span>•</span>
                <span className={percentage >= 50 && percentage < 70 ? 'text-amber-950 font-black underline' : 'opacity-80'}>
                  ≥ 50%: Đạt
                </span>
                <span>•</span>
                <span className={percentage < 50 ? 'text-amber-950 font-black underline' : 'opacity-80'}>
                  &lt; 50%: Chưa đạt
                </span>
              </div>
            </div>

            {/* Footer: Identification & Signature / Seal */}
            <div className="grid grid-cols-2 items-end pt-2 px-2 sm:px-4 text-[9px] sm:text-xs">
              {/* Left: Certificate ID, Date, Stamp of authenticity */}
              <div className="space-y-0.5 sm:space-y-1">
                <div className="flex items-center gap-1 text-emerald-800 font-bold text-[8px] sm:text-[10px]">
                  <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>XÁC THỰC HỆ THỐNG TRỰC TUYẾN</span>
                </div>
                <div className="text-[8px] sm:text-[10px] text-slate-600">
                  Mã chứng nhận: <strong className="text-slate-900 font-mono">{certCode}</strong>
                </div>
                <div className="text-[8px] sm:text-[10px] text-slate-600">
                  Ngày cấp: <strong>{issueDate}</strong>
                </div>
                <div className="text-[7px] sm:text-[9px] text-slate-500 hidden sm:block">
                  Hệ thống Khảo thí &amp; Đánh giá năng lực học sinh Toán THCS
                </div>
              </div>

              {/* Right: Teacher Signature & Official Seal */}
              <div className="text-center flex flex-col items-center ml-auto">
                <div className="text-[8px] sm:text-[10px] text-slate-600 italic">
                  Việt Nam, ngày {issueDate}
                </div>
                <div className="text-[8px] sm:text-[10px] md:text-xs font-black text-slate-900 uppercase tracking-wider mt-0.5">
                  TÁC GIẢ HỌC LIỆU &amp; GIÁO VIÊN CHUYÊN MÔN
                </div>

                {/* Artistic Teacher Signature & Red Seal */}
                <div className="relative my-0.5 sm:my-1 w-28 sm:w-36 h-10 sm:h-14 flex items-center justify-center">
                  {/* Circular Red Educational Seal */}
                  <div className="absolute -left-2 sm:left-1 w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-red-600/90 flex flex-col items-center justify-center text-[5px] sm:text-[7px] font-black text-red-600 uppercase tracking-tighter opacity-85 rotate-[-12deg] pointer-events-none bg-red-50/20 shadow-2xs">
                    <span className="text-[4px] sm:text-[5px]">★ ★ ★</span>
                    <span className="text-[5px] sm:text-[6.5px] leading-tight">TOÁN 7 KNTT</span>
                    <span className="text-[4px] sm:text-[5.5px]">THS. PHẠM NGỌC THÁI</span>
                    <span className="text-[4px] sm:text-[5px]">ĐÃ THẨM ĐỊNH</span>
                  </div>

                  {/* Stylized Signature Script */}
                  <div className="font-serif italic font-bold text-sm sm:text-lg md:text-xl text-blue-900 tracking-wide select-none drop-shadow-2xs rotate-[-3deg] relative z-10">
                    Phạm Ngọc Thái
                  </div>
                </div>

                <div className="text-[9px] sm:text-xs md:text-sm font-extrabold text-slate-900 font-serif">
                  ThS. PHẠM NGỌC THÁI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
