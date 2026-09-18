import * as XLSX from 'xlsx';
import { ExamResult } from '../types';

const STORAGE_KEY = 'toan7_quiz_history_v1';

/**
 * Get all saved exam results from localStorage (newest first).
 */
export function getExamHistory(): ExamResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch (err) {
    console.error('Error reading exam history from localStorage:', err);
    return [];
  }
}

/**
 * Save a new exam result to localStorage.
 */
export function saveExamResult(result: ExamResult): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getExamHistory();
    // Prepend new result, avoiding duplicates
    const updated = [result, ...current.filter((item) => item.id !== result.id)];
    // Cap at 250 items to avoid storage quotas
    const capped = updated.slice(0, 250);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(capped));

    // Dispatch event so all tabs/components update reactively
    window.dispatchEvent(new CustomEvent('toan7_history_updated'));
  } catch (err) {
    console.error('Error saving exam result to localStorage:', err);
  }
}

/**
 * Delete a single exam result by ID.
 */
export function deleteExamResult(id: string): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getExamHistory();
    const updated = current.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('toan7_history_updated'));
  } catch (err) {
    console.error('Error deleting exam result:', err);
  }
}

/**
 * Clear all exam history.
 */
export function clearExamHistory(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('toan7_history_updated'));
  } catch (err) {
    console.error('Error clearing exam history:', err);
  }
}

/**
 * Clean plain text for Excel cells (removes latex markers like $ for readability in cells)
 */
function cleanMathForExcel(text: string): string {
  if (!text) return '';
  return text
    .replace(/\$\$(.*?)\$\$/g, '$1')
    .replace(/\$(.*?)\$/g, '$1')
    .replace(/\\widehat\{([A-Za-z0-9_]+)\}/g, '∠$1')
    .replace(/\^0/g, '°')
    .replace(/\\cdot/g, '·')
    .replace(/\\perp/g, '⊥')
    .replace(/\\sqrt\{([A-Za-z0-9_]+)\}/g, '√$1')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/$2')
    .replace(/\\Rightarrow/g, '=>')
    .replace(/\\Delta/g, 'Δ');
}

/**
 * Export history list to an Excel (.xlsx) file with multi-sheet formatting.
 */
export function exportHistoryToExcel(
  records: ExamResult[],
  filenamePrefix: string = 'Lich_Su_Bai_Lam_Toan_7_Ky_I'
): void {
  if (!records || records.length === 0) {
    alert('Chưa có dữ liệu bài làm nào để xuất file Excel.');
    return;
  }

  const wb = XLSX.utils.book_new();
  const dateStr = new Date().toLocaleDateString('vi-VN');
  const timeStr = new Date().toLocaleTimeString('vi-VN');

  // ==========================================
  // SHEET 1: BẢNG TỔNG HỢP KẾT QUẢ HỌC SINH
  // ==========================================
  const summaryHeaders = [
    'STT',
    'Mã Bài Làm',
    'Họ và Tên Học Sinh',
    'Lớp',
    'Trường',
    'Ngày Nộp Bài',
    'Giờ Bắt Đầu',
    'Giờ Hoàn Thành',
    'Thời Gian Làm (phút:giây)',
    'Số Câu Đúng',
    'Tổng Số Câu',
    'Tỉ Lệ Đúng (%)',
    'Điểm Số (Thang 10)',
    'Xếp Loại',
    'Chế Độ',
    'Phạm Vi Ôn Tập',
    'Mức Độ',
    'Nhận Biết (Đúng/Tổng)',
    'Thông Hiểu (Đúng/Tổng)',
    'Vận Dụng (Đúng/Tổng)',
    'Nhận Xét Của Thầy Thái'
  ];

  const summaryRows: (string | number)[][] = [
    ['BẢNG TỔNG HỢP KẾT QUẢ LÀM BÀI TẬP & KIỂM TRA TOÁN 7 KỲ I'],
    ['BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG - CHƯƠNG TRÌNH GDPT 2018'],
    [`Tác giả ứng dụng: Thầy giáo Ths. Phạm Ngọc Thái • Ngày xuất: ${dateStr} lúc ${timeStr} • Tổng số bài: ${records.length}`],
    [], // empty row
    summaryHeaders
  ];

  let totalScoreSum = 0;
  let totalCorrectSum = 0;
  let totalQuestionsSum = 0;

  records.forEach((rec, index) => {
    const timeMins = Math.floor(rec.timeSpentSeconds / 60);
    const timeSecs = rec.timeSpentSeconds % 60;
    const formattedDuration = `${timeMins.toString().padStart(2, '0')}:${timeSecs.toString().padStart(2, '0')}`;
    const percentage = Math.round((rec.correctCount / rec.totalQuestions) * 100);

    totalScoreSum += rec.score;
    totalCorrectSum += rec.correctCount;
    totalQuestionsSum += rec.totalQuestions;

    const nb = rec.byDifficulty?.['Nhận biết']
      ? `${rec.byDifficulty['Nhận biết'].correct}/${rec.byDifficulty['Nhận biết'].total}`
      : '0/0';
    const th = rec.byDifficulty?.['Thông hiểu']
      ? `${rec.byDifficulty['Thông hiểu'].correct}/${rec.byDifficulty['Thông hiểu'].total}`
      : '0/0';
    const vd = rec.byDifficulty?.['Vận dụng']
      ? `${rec.byDifficulty['Vận dụng'].correct}/${rec.byDifficulty['Vận dụng'].total}`
      : '0/0';

    summaryRows.push([
      index + 1,
      rec.id,
      rec.student.fullName || 'Chưa điền tên',
      rec.student.className || '',
      rec.student.schoolName || '',
      dateStr,
      rec.startTime || '',
      rec.finishTime || '',
      formattedDuration,
      rec.correctCount,
      rec.totalQuestions,
      `${percentage}%`,
      rec.score,
      rec.classification,
      rec.config.mode === 'exam' ? 'Thi kiểm tra' : 'Luyện tập',
      rec.config.chapterId === 'all' ? 'Toàn bộ 5 Chương Kỳ I' : rec.config.chapterId,
      rec.config.difficulty === 'all' ? 'Tất cả mức độ' : rec.config.difficulty,
      nb,
      th,
      vd,
      rec.teacherFeedback || ''
    ]);
  });

  // Average summary row
  const avgScore = (totalScoreSum / records.length).toFixed(2);
  const avgPercent = Math.round((totalCorrectSum / (totalQuestionsSum || 1)) * 100);
  summaryRows.push([]);
  summaryRows.push([
    'TỔNG KẾT',
    `Số bài thi: ${records.length}`,
    '',
    '',
    '',
    '',
    '',
    '',
    'Trung bình:',
    totalCorrectSum,
    totalQuestionsSum,
    `${avgPercent}%`,
    Number(avgScore),
    'ĐIỂM TRUNG BÌNH',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]);

  const wsSummary = XLSX.utils.aoa_to_sheet(summaryRows);

  // Set column widths
  wsSummary['!cols'] = [
    { wch: 6 },  // STT
    { wch: 18 }, // Mã
    { wch: 24 }, // Họ tên
    { wch: 10 }, // Lớp
    { wch: 22 }, // Trường
    { wch: 14 }, // Ngày
    { wch: 12 }, // Bắt đầu
    { wch: 14 }, // Hoàn thành
    { wch: 16 }, // Thời gian
    { wch: 12 }, // Số câu đúng
    { wch: 12 }, // Tổng câu
    { wch: 14 }, // Tỉ lệ
    { wch: 16 }, // Điểm
    { wch: 14 }, // Xếp loại
    { wch: 14 }, // Chế độ
    { wch: 26 }, // Phạm vi
    { wch: 16 }, // Mức độ
    { wch: 20 }, // Nhận biết
    { wch: 20 }, // Thông hiểu
    { wch: 20 }, // Vận dụng
    { wch: 45 }  // Nhận xét
  ];

  XLSX.utils.book_append_sheet(wb, wsSummary, 'Tổng Hợp Kết Quả');

  // ==========================================
  // SHEET 2: CHI TIẾT TỪNG CÂU HỎI & BÀI LÀM
  // ==========================================
  const detailHeaders = [
    'STT',
    'Mã Bài Thi',
    'Học Sinh',
    'Lớp',
    'Câu Số',
    'Chương',
    'Bài Học',
    'Mức Độ',
    'Nội Dung Câu Hỏi',
    'Đáp Án Học Sinh Chọn',
    'Đáp Án Đúng',
    'Kết Quả',
    'Hướng Dẫn Giải'
  ];

  const detailRows: (string | number)[][] = [
    ['CHI TIẾT BÀI LÀM TỪNG CÂU HỎI CỦA HỌC SINH'],
    [`Ngày xuất: ${dateStr} ${timeStr}`],
    [],
    detailHeaders
  ];

  let qStt = 1;
  records.forEach((rec) => {
    rec.questions.forEach((q, qIndex) => {
      const chosenIdx = rec.userAnswers[q.id];
      const isAnswered = chosenIdx !== undefined && chosenIdx !== -1;
      const isCorrect = isAnswered && chosenIdx === q.correctAnswer;
      const chosenLetter = isAnswered ? ['A', 'B', 'C', 'D'][chosenIdx] : 'Chưa chọn';
      const chosenText = isAnswered ? q.options[chosenIdx] : 'Bỏ trống';
      const correctLetter = ['A', 'B', 'C', 'D'][q.correctAnswer];
      const correctText = q.options[q.correctAnswer];

      detailRows.push([
        qStt++,
        rec.id,
        rec.student.fullName || 'Chưa điền tên',
        rec.student.className || '',
        `Câu ${qIndex + 1}`,
        q.chapterTitle || '',
        q.lessonTitle || '',
        q.difficulty || '',
        cleanMathForExcel(q.content),
        `${chosenLetter}. ${cleanMathForExcel(chosenText)}`,
        `${correctLetter}. ${cleanMathForExcel(correctText)}`,
        isCorrect ? 'ĐÚNG' : 'SAI',
        cleanMathForExcel(q.explanation)
      ]);
    });
  });

  const wsDetail = XLSX.utils.aoa_to_sheet(detailRows);
  wsDetail['!cols'] = [
    { wch: 6 },  // STT
    { wch: 18 }, // Mã
    { wch: 22 }, // Họ tên
    { wch: 10 }, // Lớp
    { wch: 10 }, // Câu
    { wch: 28 }, // Chương
    { wch: 32 }, // Bài học
    { wch: 14 }, // Mức độ
    { wch: 45 }, // Nội dung
    { wch: 28 }, // ĐA chọn
    { wch: 28 }, // ĐA đúng
    { wch: 12 }, // Kết quả
    { wch: 45 }  // Hướng dẫn
  ];

  XLSX.utils.book_append_sheet(wb, wsDetail, 'Chi Tiết Bài Làm');

  // Trigger file download
  const dateFormatted = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const finalFileName = `${filenamePrefix}_${dateFormatted}.xlsx`;
  XLSX.writeFile(wb, finalFileName);
}

/**
 * Export a single exam result to an Excel (.xlsx) file.
 */
export function exportSingleExamToExcel(result: ExamResult): void {
  const safeName = (result.student.fullName || 'HocSinh')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '_');
  const safeClass = (result.student.className || 'Lop7')
    .replace(/[^a-zA-Z0-9]/g, '_');
  const prefix = `Ket_Qua_${safeName}_${safeClass}`;
  exportHistoryToExcel([result], prefix);
}
