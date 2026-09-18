import { Question, QuizConfig, DifficultyLevel } from '../types';
import { QUESTION_BANK, CHAPTER_LIST_KY1, LESSON_MAP_KY1 } from '../data/questionBankData';

// Helper to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Xáo trộn ngẫu nhiên vị trí 4 đáp án (A, B, C, D) của một câu hỏi
 * và cập nhật lại chỉ số correctAnswer tương ứng với vị trí mới.
 * Đảm bảo đáp án đúng xuất hiện ngẫu nhiên, không bị cố định vào đáp án A.
 */
export function shuffleQuestionOptions(question: Question): Question {
  if (!question.options || question.options.length <= 1) {
    return { ...question };
  }

  const originalCorrectIndex = question.correctAnswer;
  // Gắn cờ đúng/sai theo chỉ số ban đầu
  const items = question.options.map((opt, idx) => ({
    text: opt,
    isCorrect: idx === originalCorrectIndex,
  }));

  // Trộn Fisher-Yates để đảm bảo phân phối đều 4 vị trí A, B, C, D
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }

  const newOptions = items.map((item) => item.text);
  const newCorrectIndex = items.findIndex((item) => item.isCorrect);

  return {
    ...question,
    options: newOptions,
    correctAnswer: newCorrectIndex >= 0 ? newCorrectIndex : 0,
  };
}

// Procedural generator for extra distinct questions when needed up to 50
function generateProceduralQuestion(
  chapterId: string,
  lessonId: string,
  difficulty: DifficultyLevel,
  seedIndex: number
): Question {
  const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Chapter 1 procedural questions
  if (chapterId === 'chuong-1' || chapterId === 'all') {
    if (difficulty === 'Nhận biết') {
      const nums = [-7, -5, -4, -3, -2, 2, 3, 4, 5, 7];
      const dens = [3, 5, 7, 9, 11];
      const a = nums[(seedIndex * 3) % nums.length];
      const b = dens[(seedIndex * 2) % dens.length];
      const oppA = -a;
      return {
        id: `proc-c1-nb-${seedIndex}`,
        chapterId: 'chuong-1',
        chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
        lessonId: lessonId !== 'all' ? lessonId : 'bai-1',
        lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
        difficulty: 'Nhận biết',
        content: `Số đối của số hữu tỉ ${a}/${b} là:`,
        options: [
          `${oppA}/${b}`,
          `${a}/-${b}`,
          `${b}/${a}`,
          `${-oppA}/${-b}`
        ],
        correctAnswer: 0,
        explanation: `Hai số đối nhau có tổng bằng 0. Số đối của ${a}/${b} là -(${a}/${b}) = ${oppA}/${b}.`,
        pedagogicalNote: 'Thầy Thái lưu ý: Luôn đổi dấu một trong hai (tử số hoặc mẫu số), không đổi dấu cả hai cùng lúc.'
      };
    } else if (difficulty === 'Thông hiểu') {
      const a = randomInt(1, 5);
      const b = randomInt(2, 6);
      const c = randomInt(1, 5);
      const d = randomInt(2, 6);
      const num = a * d + c * b;
      const den = b * d;
      return {
        id: `proc-c1-th-${seedIndex}`,
        chapterId: 'chuong-1',
        chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
        lessonId: lessonId !== 'all' ? lessonId : 'bai-2',
        lessonTitle: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
        difficulty: 'Thông hiểu',
        content: `Tính giá trị của phép cộng: (${a}/${b}) + (${c}/${d}) = ?`,
        options: [
          `${num}/${den}`,
          `${a + c}/${b + d}`,
          `${num + 1}/${den}`,
          `${num - 1}/${den}`
        ],
        correctAnswer: 0,
        explanation: `Quy đồng mẫu số: (${a}/${b}) + (${c}/${d}) = (${a * d}/${b * d}) + (${c * b}/${b * d}) = ${num}/${den}.`,
        pedagogicalNote: 'Thầy Thái lưu ý: Tuyệt đối không lấy tử cộng tử, mẫu cộng mẫu!'
      };
    } else {
      const m = randomInt(2, 4);
      const base = 2;
      const expStr = m === 2 ? '²' : m === 3 ? '³' : '⁴';
      const resVal = Math.pow(base, m + 1);
      return {
        id: `proc-c1-vd-${seedIndex}`,
        chapterId: 'chuong-1',
        chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
        lessonId: lessonId !== 'all' ? lessonId : 'bai-4',
        lessonTitle: 'Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế',
        difficulty: 'Vận dụng',
        content: `Tìm x biết: (x - 1/2) · ${base}${expStr} = ${resVal}`,
        options: [
          'x = 2,5',
          'x = 1,5',
          'x = 3',
          'x = 0,5'
        ],
        correctAnswer: 0,
        explanation: `Chia cả hai vế cho ${base}${expStr}: x - 1/2 = ${resVal} / ${Math.pow(base, m)} = ${base} => x = ${base} + 0,5 = 2,5.`,
        pedagogicalNote: 'Rút gọn lũy thừa trước khi chuyển vế để phép tính gọn nhất.'
      };
    }
  }

  // Chapter 2 procedural questions
  if (chapterId === 'chuong-2') {
    if (difficulty === 'Nhận biết') {
      const roots = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
      const val = roots[seedIndex % roots.length];
      const ans = Math.sqrt(val);
      return {
        id: `proc-c2-nb-${seedIndex}`,
        chapterId: 'chuong-2',
        chapterTitle: 'Chương II: Số thực',
        lessonId: lessonId !== 'all' ? lessonId : 'bai-6',
        lessonTitle: 'Bài 6: Số vô tỉ. Căn bậc hai số học',
        difficulty: 'Nhận biết',
        content: `Căn bậc hai số học của số ${val} là:`,
        options: [
          `${ans}`,
          `-${ans}`,
          `±${ans}`,
          `${val / 2}`
        ],
        correctAnswer: 0,
        explanation: `Vì ${ans} ≥ 0 và ${ans}² = ${val} nên √${val} = ${ans}.`,
        pedagogicalNote: 'Thầy Thái nhắc: Căn bậc hai số học không bao giờ nhận giá trị âm.'
      };
    } else if (difficulty === 'Thông hiểu') {
      const dec = (Math.PI + seedIndex * 0.12345).toFixed(5);
      return {
        id: `proc-c2-th-${seedIndex}`,
        chapterId: 'chuong-2',
        chapterTitle: 'Chương II: Số thực',
        lessonId: lessonId !== 'all' ? lessonId : 'bai-7',
        lessonTitle: 'Bài 7: Tập hợp các số thực',
        difficulty: 'Thông hiểu',
        content: `Làm tròn số ${dec} đến chữ số thập phân thứ hai:`,
        options: [
          `${Number(dec).toFixed(2)}`,
          `${Number(dec).toFixed(1)}`,
          `${Number(dec).toFixed(3)}`,
          `${Math.round(Number(dec))}`
        ],
        correctAnswer: 0,
        explanation: `Xét chữ số thập phân thứ ba: nếu ≥ 5 thì cộng 1 vào hàng thứ hai; nếu < 5 thì giữ nguyên. Kết quả là ${Number(dec).toFixed(2)}.`,
        pedagogicalNote: 'Nhìn vào chữ số liền kề bên phải chữ số hàng làm tròn.'
      };
    } else {
      const side = randomInt(5, 15);
      const area = side * side;
      return {
        id: `proc-c2-vd-${seedIndex}`,
        chapterId: 'chuong-2',
        chapterTitle: 'Chương II: Số thực',
        lessonId: lessonId !== 'all' ? lessonId : 'bai-6',
        lessonTitle: 'Bài 6: Số vô tỉ. Căn bậc hai số học',
        difficulty: 'Vận dụng',
        content: `Một khu vườn hình vuông có diện tích bằng ${area} m². Chu vi của khu vườn đó là:`,
        options: [
          `${4 * side} m`,
          `${2 * side} m`,
          `${side} m`,
          `${area / 2} m`
        ],
        correctAnswer: 0,
        explanation: `Cạnh khu vườn: a = √${area} = ${side} m. Chu vi: P = 4 · a = 4 · ${side} = ${4 * side} m.`,
        pedagogicalNote: 'Tính độ dài cạnh trước bằng căn bậc hai số học, sau đó tính chu vi.'
      };
    }
  }

  // Chapter 3 procedural questions
  if (chapterId === 'chuong-3') {
    if (difficulty === 'Nhận biết') {
      return {
        id: `proc-c3-nb-${seedIndex}`,
        chapterId: 'chuong-3',
        chapterTitle: 'Chương III: Góc và đường thẳng song song',
        lessonId: lessonId !== 'all' ? lessonId : 'bai-8',
        lessonTitle: 'Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc',
        difficulty: 'Nhận biết',
        content: 'Nếu tia Ot là tia phân giác của góc $\\widehat{xOy}$ thì:',
        options: [
          '$\\widehat{xOt} = \\widehat{yOt} = \\frac{\\widehat{xOy}}{2}$',
          '$\\widehat{xOt} + \\widehat{yOt} = 180^0$',
          '$\\widehat{xOt} = 2 \\cdot \\widehat{xOy}$',
          'Tia $Ot$ vuông góc với $Ox$ ($Ot \\perp Ox$)'
        ],
        correctAnswer: 0,
        explanation: 'Tia phân giác chia góc đã cho thành hai góc kề nhau có số đo bằng nhau và bằng một nửa số đo góc ban đầu: $\\widehat{xOt} = \\widehat{yOt} = \\frac{\\widehat{xOy}}{2}$.',
        pedagogicalNote: 'Tia phân giác luôn xuất phát từ đỉnh và nằm giữa hai cạnh của góc.'
      };
    } else if (difficulty === 'Thông hiểu') {
      const angle = randomInt(30, 80);
      const sup = 180 - angle;
      return {
        id: `proc-c3-th-${seedIndex}`,
        chapterId: 'chuong-3',
        chapterTitle: 'Chương III: Góc và đường thẳng song song',
        lessonId: lessonId !== 'all' ? lessonId : 'bai-8',
        lessonTitle: 'Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc',
        difficulty: 'Thông hiểu',
        content: `Hai góc $\\widehat{A}$ và $\\widehat{B}$ là hai góc kề bù. Biết $\\widehat{A} = ${angle}^0$. Số đo của $\\widehat{B}$ là:`,
        options: [
          `$${sup}^0$`,
          `$${90 - angle}^0$`,
          `$${angle}^0$`,
          `$${180 + angle}^0$`
        ],
        correctAnswer: 0,
        explanation: `Hai góc kề bù có tổng số đo bằng $180^0$. Do đó: $\\widehat{B} = 180^0 - \\widehat{A} = 180^0 - ${angle}^0 = ${sup}^0$.`,
        pedagogicalNote: 'Phân biệt kề bù (tổng $180^0$) và phụ nhau (tổng $90^0$).'
      };
    } else {
      const a1 = randomInt(40, 75);
      return {
        id: `proc-c3-vd-${seedIndex}`,
        chapterId: 'chuong-3',
        chapterTitle: 'Chương III: Góc và đường thẳng song song',
        lessonId: lessonId !== 'all' ? lessonId : 'bai-10',
        lessonTitle: 'Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song',
        difficulty: 'Vận dụng',
        content: `Cho a // b bị cắt bởi đường thẳng c. Biết một góc trong cùng phía bằng ${a1}°. Số đo góc trong cùng phía còn lại là:`,
        options: [
          `${180 - a1}°`,
          `${a1}°`,
          `${90 - a1}°`,
          `${360 - a1}°`
        ],
        correctAnswer: 0,
        explanation: `Khi hai đường thẳng song song bị cắt bởi một đường thẳng thứ ba thì hai góc trong cùng phía bù nhau (tổng bằng 180°). Vậy góc còn lại bằng 180° - ${a1}° = ${180 - a1}°.`,
        pedagogicalNote: 'Góc so le trong bằng nhau, góc đồng vị bằng nhau, góc trong cùng phía bù nhau.'
      };
    }
  }

  // Chapter 4 procedural questions
  if (chapterId === 'chuong-4') {
    if (difficulty === 'Nhận biết') {
      return {
        id: `proc-c4-nb-${seedIndex}`,
        chapterId: 'chuong-4',
        chapterTitle: 'Chương IV: Tam giác bằng nhau',
        lessonId: lessonId !== 'all' ? lessonId : 'bai-12',
        lessonTitle: 'Bài 12: Tổng các góc trong một tam giác',
        difficulty: 'Nhận biết',
        content: 'Trong một tam giác vuông, tổng hai góc nhọn bằng:',
        options: [
          '90°',
          '180°',
          '45°',
          '60°'
        ],
        correctAnswer: 0,
        explanation: 'Vì tam giác có một góc vuông (90°) và tổng ba góc bằng 180° nên hai góc nhọn phụ nhau, có tổng bằng 180° - 90° = 90°.',
        pedagogicalNote: 'Định lí: Trong tam giác vuông, hai góc nhọn phụ nhau.'
      };
    } else if (difficulty === 'Thông hiểu') {
      const g1 = randomInt(35, 65);
      const g2 = randomInt(40, 70);
      const g3 = 180 - (g1 + g2);
      return {
        id: `proc-c4-th-${seedIndex}`,
        chapterId: 'chuong-4',
        chapterTitle: 'Chương IV: Tam giác bằng nhau',
        lessonId: lessonId !== 'all' ? lessonId : 'bai-12',
        lessonTitle: 'Bài 12: Tổng các góc trong một tam giác',
        difficulty: 'Thông hiểu',
        content: `Tam giác $ABC$ có $\\widehat{A} = ${g1}^0$, $\\widehat{B} = ${g2}^0$. Số đo của góc $C$ ($\\widehat{C}$) là:`,
        options: [
          `$${g3}^0$`,
          `$${g3 + 10}^0$`,
          `$${g3 - 10}^0$`,
          `$${180 - g1}^0$`
        ],
        correctAnswer: 0,
        explanation: `Tổng 3 góc bằng $180^0$ $\\Rightarrow \\widehat{C} = 180^0 - (\\widehat{A} + \\widehat{B}) = 180^0 - (${g1}^0 + ${g2}^0) = ${g3}^0$.`,
        pedagogicalNote: 'Thầy Thái: Cộng hai góc đã biết lại trước, rồi lấy $180^0$ trừ đi.'
      };
    } else {
      const topAngle = [40, 50, 60, 70, 80, 100][seedIndex % 6];
      const baseAngle = (180 - topAngle) / 2;
      return {
        id: `proc-c4-vd-${seedIndex}`,
        chapterId: 'chuong-4',
        chapterTitle: 'Chương IV: Tam giác bằng nhau',
        lessonId: lessonId !== 'all' ? lessonId : 'bai-16',
        lessonTitle: 'Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng',
        difficulty: 'Vận dụng',
        content: `Tam giác $MNP$ cân tại $M$ có góc ở đỉnh $\\widehat{M} = ${topAngle}^0$. Số đo của góc ở đáy $\\widehat{N}$ là:`,
        options: [
          `$${baseAngle}^0$`,
          `$${topAngle}^0$`,
          `$${180 - topAngle}^0$`,
          `$${baseAngle / 2}^0$`
        ],
        correctAnswer: 0,
        explanation: `Tam giác cân tại $M$ có hai góc ở đáy $\\widehat{N}$ và $\\widehat{P}$ bằng nhau: $\\widehat{N} = \\frac{180^0 - \\widehat{M}}{2} = \\frac{180^0 - ${topAngle}^0}{2} = ${baseAngle}^0$.`,
        pedagogicalNote: 'Học sinh hay quên chia cho 2 khi tính góc ở đáy.'
      };
    }
  }

  // Chapter 5 procedural questions
  const pct = [10, 20, 25, 30, 40, 50][seedIndex % 6];
  const angleAtCenter = (360 * pct) / 100;
  return {
    id: `proc-c5-${difficulty}-${seedIndex}`,
    chapterId: 'chuong-5',
    chapterTitle: 'Chương V: Thu thập và biểu diễn dữ liệu',
    lessonId: lessonId !== 'all' ? lessonId : 'bai-18',
    lessonTitle: 'Bài 18: Biểu đồ hình quạt tròn',
    difficulty: difficulty,
    content: `Trong biểu đồ hình quạt tròn, phần dữ liệu chiếm ${pct}% tổng thể sẽ tương ứng với góc ở tâm là:`,
    options: [
      `${angleAtCenter}°`,
      `${pct * 2}°`,
      `${angleAtCenter + 15}°`,
      `${pct}°`
    ],
    correctAnswer: 0,
    explanation: `Cả hình tròn là 360° ứng với 100%. Góc ở tâm = 360° · (${pct} / 100) = ${angleAtCenter}°.`,
    pedagogicalNote: 'Thầy Thái: Luôn nhớ 100% ứng với 360°.'
  };
}

export function generateQuiz(config: QuizConfig): Question[] {
  const { chapterId, lessonId, difficulty, questionCount } = config;
  const count = Math.min(Math.max(questionCount, 1), 50); // clamp between 1 and 50

  // 1. Filter bank by criteria
  let filtered = QUESTION_BANK.filter((q) => {
    const matchChapter = chapterId === 'all' || q.chapterId === chapterId;
    const matchLesson = lessonId === 'all' || q.lessonId === lessonId;
    const matchDifficulty = difficulty === 'all' || q.difficulty === difficulty;
    return matchChapter && matchLesson && matchDifficulty;
  });

  // Randomize filtered bank order
  filtered = shuffleArray(filtered);

  let selectedQuestions: Question[] = [];

  // If filtered is enough
  if (filtered.length >= count) {
    // If 'all' difficulty was chosen, ensure balanced distribution if possible
    if (difficulty === 'all') {
      const nb = filtered.filter((q) => q.difficulty === 'Nhận biết');
      const th = filtered.filter((q) => q.difficulty === 'Thông hiểu');
      const vd = filtered.filter((q) => q.difficulty === 'Vận dụng');

      const targetNb = Math.round(count * 0.4);
      const targetTh = Math.round(count * 0.3);
      const targetVd = count - targetNb - targetTh;

      const balanced: Question[] = [
        ...nb.slice(0, targetNb),
        ...th.slice(0, targetTh),
        ...vd.slice(0, targetVd),
      ];

      if (balanced.length === count) {
        selectedQuestions = shuffleArray(balanced);
      } else {
        selectedQuestions = filtered.slice(0, count);
      }
    } else {
      selectedQuestions = filtered.slice(0, count);
    }
  } else {
    // If not enough in static bank, augment with procedural generator
    const result: Question[] = [...filtered];
    let seed = 1;
    const difficulties: DifficultyLevel[] =
      difficulty === 'all' ? ['Nhận biết', 'Thông hiểu', 'Vận dụng'] : [difficulty];

    const chapters =
      chapterId === 'all' ? ['chuong-1', 'chuong-2', 'chuong-3', 'chuong-4', 'chuong-5'] : [chapterId];

    while (result.length < count) {
      const curChapter = chapters[seed % chapters.length];
      const curDiff = difficulties[seed % difficulties.length];
      const procQ = generateProceduralQuestion(curChapter, lessonId, curDiff, seed);

      // Ensure no duplicate content
      if (!result.some((q) => q.content === procQ.content)) {
        result.push(procQ);
      }
      seed++;
      if (seed > 300) break; // safeguard
    }

    selectedQuestions = shuffleArray(result.slice(0, count));
  }

  // BỔ SUNG QUAN TRỌNG:
  // Xáo trộn ngẫu nhiên vị trí các đáp án (A, B, C, D) cho TẤT CẢ các câu hỏi được tạo ra
  // Đảm bảo đáp án đúng không bị cố định vào đáp án A mà xuất hiện ngẫu nhiên A, B, C, D
  return selectedQuestions.map((q) => shuffleQuestionOptions(q));
}

// Generate intelligent pedagogical feedback based on exam performance
export function evaluateStudentExam(
  score: number,
  studentName: string,
  byDifficulty: {
    'Nhận biết': { total: number; correct: number };
    'Thông hiểu': { total: number; correct: number };
    'Vận dụng': { total: number; correct: number };
  }
): string {
  const nbRate = byDifficulty['Nhận biết'].total > 0
    ? (byDifficulty['Nhận biết'].correct / byDifficulty['Nhận biết'].total) * 100
    : 100;
  const thRate = byDifficulty['Thông hiểu'].total > 0
    ? (byDifficulty['Thông hiểu'].correct / byDifficulty['Thông hiểu'].total) * 100
    : 100;
  const vdRate = byDifficulty['Vận dụng'].total > 0
    ? (byDifficulty['Vận dụng'].correct / byDifficulty['Vận dụng'].total) * 100
    : 100;

  let advice = '';
  if (score >= 9.0) {
    advice = `Thầy Thái nhiệt liệt biểu dương em ${studentName || 'học sinh'} đã đạt xếp loại Xuất sắc! Em nắm rất chắc toàn bộ kiến thức Kỳ I, tư duy logic và kĩ năng tính toán xuất sắc. Hãy tiếp tục phát huy ở các bài toán thực tiễn và hình học nâng cao!`;
  } else if (score >= 8.0) {
    advice = `Thầy Thái chúc mừng em ${studentName || 'học sinh'} đã đạt xếp loại Tốt! Em có nền tảng kiến thức rất vững vàng. `;
    if (vdRate < 70) {
      advice += `Em chỉ cần cẩn thận hơn ở phần Vận dụng (đọc kĩ đề bài toán thực tế và vẽ hình chính xác).`;
    } else {
      advice += `Hãy rà soát kĩ lại các phép tính phân số và làm tròn số để đạt điểm tuyệt đối nhé!`;
    }
  } else if (score >= 7.0) {
    advice = `Chào em ${studentName || 'học sinh'}, bài làm của em đạt xếp loại Khá. Phần Nhận biết định nghĩa em làm khá ổn (${Math.round(nbRate)}%). Tuy nhiên phần Thông hiểu và Vận dụng (${Math.round(thRate)}% - ${Math.round(vdRate)}%) cần rèn luyện thêm: chú ý quy tắc chuyển vế, tính chất góc so le trong và các trường hợp bằng nhau c.c.c, c.g.c, g.c.g.`;
  } else if (score >= 5.0) {
    advice = `Chào em ${studentName || 'học sinh'}, em đã đạt xếp loại Đạt (nắm được kiến thức cơ bản). Thầy Thái khuyên em nên đọc lại các ô tóm tắt kiến thức trong SGK Toán 7, ôn kĩ công thức lũy thừa, căn bậc hai số học và tính tổng 3 góc trong tam giác trước khi thi học kì.`;
  } else {
    advice = `Em ${studentName || 'học sinh'} xếp loại Chưa đạt, cần dành thêm thời gian ôn tập lại lý thuyết căn bản các Chương 1, 2, 3, 4 và 5. Đừng nản lòng! Em hãy vào mục "Ôn Tập Kiến Thức" trong ứng dụng để xem lại ví dụ và làm lại bài kiểm tra này nhé. Thầy tin em sẽ tiến bộ vượt bậc!`;
  }

  return advice;
}
