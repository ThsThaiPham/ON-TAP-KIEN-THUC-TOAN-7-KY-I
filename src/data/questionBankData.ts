import { Question } from '../types';

export const QUESTION_BANK: Question[] = [
  // ==========================================
  // CHƯƠNG I: TẬP HỢP CÁC SỐ HỮU TỈ
  // ==========================================
  // Nhận biết
  {
    id: 'c1-nb-01',
    chapterId: 'chuong-1',
    chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
    lessonId: 'bai-1',
    lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    difficulty: 'Nhận biết',
    content: 'Số hữu tỉ là số có thể viết được dưới dạng nào sau đây?',
    options: [
      'Dạng a/b với a, b ∈ ℕ và b ≠ 0',
      'Dạng a/b với a, b ∈ ℤ và b ≠ 0',
      'Dạng a/b với a, b ∈ ℤ tuỳ ý',
      'Dạng số thập phân vô hạn không tuần hoàn'
    ],
    correctAnswer: 1,
    explanation: 'Theo định nghĩa trong SGK Toán 7 (trang 6): Số hữu tỉ là số viết được dưới dạng phân số a/b với a, b ∈ ℤ, b ≠ 0. Tập hợp các số hữu tỉ được kí hiệu là ℚ.',
    pedagogicalNote: 'Thầy Thái nhắc nhở: Điều kiện mẫu số b phải khác 0 và cả tử lẫn mẫu đều phải là số nguyên (a, b ∈ ℤ).'
  },
  {
    id: 'c1-nb-02',
    chapterId: 'chuong-1',
    chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
    lessonId: 'bai-1',
    lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    difficulty: 'Nhận biết',
    content: 'Khẳng định nào sau đây là ĐÚNG về quan hệ giữa các tập hợp số ℕ, ℤ, ℚ?',
    options: [
      'ℚ ⊂ ℤ ⊂ ℕ',
      'ℤ ⊂ ℕ ⊂ ℚ',
      'ℕ ⊂ ℤ ⊂ ℚ',
      'ℕ ⊂ ℚ ⊂ ℤ'
    ],
    correctAnswer: 2,
    explanation: 'Mọi số tự nhiên đều là số nguyên (ℕ ⊂ ℤ). Mọi số nguyên a đều viết được dưới dạng a/1 nên là số hữu tỉ (ℤ ⊂ ℚ). Do đó ℕ ⊂ ℤ ⊂ ℚ.',
    pedagogicalNote: 'Thầy Thái khuyên: Học sinh vẽ sơ đồ Ven đồng tâm để nhớ: Tập ℕ nhỏ nhất nằm trong ℤ, tập ℤ nằm trọn trong tập ℚ.'
  },
  {
    id: 'c1-nb-03',
    chapterId: 'chuong-1',
    chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
    lessonId: 'bai-1',
    lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    difficulty: 'Nhận biết',
    content: 'Số đối của số hữu tỉ -3/5 là:',
    options: [
      '-5/3',
      '5/3',
      '-3/-5',
      '3/5'
    ],
    correctAnswer: 3,
    explanation: 'Hai số đối nhau có tổng bằng 0 và nằm về hai phía đối diện của gốc 0 trên trục số, cách đều gốc 0. Số đối của -3/5 là -(-3/5) = 3/5.',
    pedagogicalNote: 'Chú ý: -3/-5 = 3/5 nhưng không phải là cách biểu diễn chuẩn khi hỏi số đối của -3/5.'
  },
  {
    id: 'c1-nb-04',
    chapterId: 'chuong-1',
    chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
    lessonId: 'bai-3',
    lessonTitle: 'Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ',
    difficulty: 'Nhận biết',
    content: 'Với x ∈ ℚ, m, n ∈ ℕ, công thức nhân hai lũy thừa cùng cơ số là:',
    options: [
      'xᵐ · xⁿ = xᵐ⁺ⁿ',
      'xᵐ · xⁿ = xᵐ·ⁿ',
      'xᵐ · xⁿ = (x · x)ᵐ⁺ⁿ',
      'xᵐ · xⁿ = xᵐ⁻ⁿ'
    ],
    correctAnswer: 0,
    explanation: 'Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ: xᵐ · xⁿ = xᵐ⁺ⁿ.',
    pedagogicalNote: 'Thầy Thái nhắc: Rất nhiều bạn nhầm lẫn giữa nhân cùng cơ số xᵐ⁺ⁿ với lũy thừa của lũy thừa (xᵐ)ⁿ = xᵐ·ⁿ.'
  },
  {
    id: 'c1-nb-05',
    chapterId: 'chuong-1',
    chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
    lessonId: 'bai-4',
    lessonTitle: 'Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế',
    difficulty: 'Nhận biết',
    content: 'Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải làm gì?',
    options: [
      'Giữ nguyên dấu số hạng đó',
      'Đổi dấu số hạng đó',
      'Đổi số hạng đó thành số nghịch đảo',
      'Nhân số hạng đó với -1 ở cả hai vế'
    ],
    correctAnswer: 1,
    explanation: 'Quy tắc chuyển vế trong SGK Toán 7: Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó: dấu "+" đổi thành "-" và dấu "-" đổi thành "+".',
    pedagogicalNote: 'Quy tắc vàng: "Chuyển vế thì phải đổi dấu".'
  },

  // Thông hiểu
  {
    id: 'c1-th-01',
    chapterId: 'chuong-1',
    chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
    lessonId: 'bai-2',
    lessonTitle: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    difficulty: 'Thông hiểu',
    content: 'Kết quả của phép tính (-2/3) + 5/6 là:',
    options: [
      '-1/6',
      '3/6 = 1/2',
      '1/6',
      '7/6'
    ],
    correctAnswer: 2,
    explanation: 'Quy đồng mẫu số chung là 6: (-2/3) + 5/6 = (-4/6) + 5/6 = (-4 + 5)/6 = 1/6.',
    pedagogicalNote: 'Thầy Thái hướng dẫn: Tìm mẫu chung nhỏ nhất trước (ở đây là 6), sau đó nhân tử phụ tương ứng.'
  },
  {
    id: 'c1-th-02',
    chapterId: 'chuong-1',
    chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
    lessonId: 'bai-2',
    lessonTitle: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    difficulty: 'Thông hiểu',
    content: 'Giá trị của phép nhân (-3/4) · (-8/9) là:',
    options: [
      '-2/3',
      '4/3',
      '-24/36',
      '2/3'
    ],
    correctAnswer: 3,
    explanation: 'Âm nhân âm ra dương: (-3/4) · (-8/9) = (3 · 8)/(4 · 9) = 24/36 = 2/3 (sau khi rút gọn cho 12).',
    pedagogicalNote: 'Hãy luôn rút gọn chéo trước khi nhân: 3 rút gọn cho 9 còn 3 ở mẫu, 8 rút gọn cho 4 còn 2 ở tử.'
  },
  {
    id: 'c1-th-03',
    chapterId: 'chuong-1',
    chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
    lessonId: 'bai-3',
    lessonTitle: 'Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ',
    difficulty: 'Thông hiểu',
    content: 'Tính giá trị của biểu thức [(-1/2)²]³:',
    options: [
      '1/64',
      '-1/64',
      '1/32',
      '1/16'
    ],
    correctAnswer: 0,
    explanation: 'Áp dụng công thức (xᵐ)ⁿ = xᵐ·ⁿ: [(-1/2)²]³ = (-1/2)⁶. Vì số mũ 6 là số chẵn nên (-1/2)⁶ = 1/(2⁶) = 1/64.',
    pedagogicalNote: 'Số âm với số mũ chẵn luôn cho kết quả dương.'
  },
  {
    id: 'c1-th-04',
    chapterId: 'chuong-1',
    chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
    lessonId: 'bai-4',
    lessonTitle: 'Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế',
    difficulty: 'Thông hiểu',
    content: 'Tìm x biết: x - 1/3 = -2/5',
    options: [
      'x = 1/15',
      'x = -1/15',
      'x = -11/15',
      'x = 11/15'
    ],
    correctAnswer: 1,
    explanation: 'Áp dụng quy tắc chuyển vế: x = -2/5 + 1/3 = -6/15 + 5/15 = -1/15.',
    pedagogicalNote: 'Chuyển -1/3 từ vế trái sang vế phải thành +1/3.'
  },

  // Vận dụng
  {
    id: 'c1-vd-01',
    chapterId: 'chuong-1',
    chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
    lessonId: 'bai-4',
    lessonTitle: 'Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế',
    difficulty: 'Vận dụng',
    content: 'Tính giá trị biểu thức hợp lí nhất: A = (3/7) · (-2/5) + (3/7) · (-3/5)',
    options: [
      '3/7',
      '-1',
      '-3/7',
      '-6/35'
    ],
    correctAnswer: 2,
    explanation: 'Đặt 3/7 làm thừa số chung: A = 3/7 · [(-2/5) + (-3/5)] = 3/7 · (-5/5) = 3/7 · (-1) = -3/7.',
    pedagogicalNote: 'Thầy Thái lưu ý: Vận dụng tính chất phân phối a · b + a · c = a · (b + c) giúp tính nhanh và không bị nhầm lẫn tính toán.'
  },
  {
    id: 'c1-vd-02',
    chapterId: 'chuong-1',
    chapterTitle: 'Chương I: Tập hợp các số hữu tỉ',
    lessonId: 'bai-2',
    lessonTitle: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    difficulty: 'Vận dụng',
    content: 'Một khinh khí cầu đang ở độ cao 350,5 m so với mực nước biển. Sau 5 phút, nó hạ xuống với tốc độ trung bình 12,3 m/phút. Độ cao mới của khinh khí cầu là:',
    options: [
      '299 m',
      '312,2 m',
      '276,5 m',
      '289 m'
    ],
    correctAnswer: 3,
    explanation: 'Quãng đường hạ xuống: 5 · 12,3 = 61,5 m. Độ cao mới: 350,5 - 61,5 = 289 m.',
    pedagogicalNote: 'Bài toán gắn với tình huống thực tế của Bài 2 SGK trang 13.'
  },

  // ==========================================
  // CHƯƠNG II: SỐ THỰC
  // ==========================================
  // Nhận biết
  {
    id: 'c2-nb-01',
    chapterId: 'chuong-2',
    chapterTitle: 'Chương II: Số thực',
    lessonId: 'bai-5',
    lessonTitle: 'Bài 5: Làm quen với số thập phân vô hạn tuần hoàn',
    difficulty: 'Nhận biết',
    content: 'Số 0,333... viết gọn dưới dạng chu kì là:',
    options: [
      '0,(3)',
      '0,3',
      '(0,3)',
      '0,(33)'
    ],
    correctAnswer: 0,
    explanation: 'Chữ số 3 được lặp lại vô hạn lần nên chu kì là 3, viết gọn trong dấu ngoặc đơn là 0,(3).',
    pedagogicalNote: 'Theo chuẩn SGK KNTT, phần lặp lại vô hạn được đặt trong dấu ngoặc tròn.'
  },
  {
    id: 'c2-nb-02',
    chapterId: 'chuong-2',
    chapterTitle: 'Chương II: Số thực',
    lessonId: 'bai-6',
    lessonTitle: 'Bài 6: Số vô tỉ. Căn bậc hai số học',
    difficulty: 'Nhận biết',
    content: 'Căn bậc hai số học của một số a không âm (a ≥ 0) là:',
    options: [
      'Số x bất kì sao cho x² = a',
      'Số x không âm (x ≥ 0) sao cho x² = a',
      'Số x âm sao cho x² = a',
      'Số bằng hai lần a (2a)'
    ],
    correctAnswer: 1,
    explanation: 'SGK Toán 7 định nghĩa: Căn bậc hai số học của số a không âm là số x không âm thoả mãn x² = a, kí hiệu là √a.',
    pedagogicalNote: 'Lưu ý cốt lõi: √a luôn luôn KHÔNG ÂM (√a ≥ 0).'
  },
  {
    id: 'c2-nb-03',
    chapterId: 'chuong-2',
    chapterTitle: 'Chương II: Số thực',
    lessonId: 'bai-7',
    lessonTitle: 'Bài 7: Tập hợp các số thực',
    difficulty: 'Nhận biết',
    content: 'Tập hợp các số thực ℝ bao gồm:',
    options: [
      'Chỉ các số nguyên và phân số',
      'Chỉ các số tự nhiên và số vô tỉ',
      'Số hữu tỉ và số vô tỉ (ℚ ∪ 𝕀)',
      'Chỉ các số thập phân hữu hạn'
    ],
    correctAnswer: 2,
    explanation: 'Tập hợp số thực ℝ gồm toàn bộ số hữu tỉ (ℚ) và số vô tỉ (𝕀): ℝ = ℚ ∪ 𝕀.',
    pedagogicalNote: 'Mỗi điểm trên trục số đều biểu diễn duy nhất một số thực, và ngược lại.'
  },

  // Thông hiểu
  {
    id: 'c2-th-01',
    chapterId: 'chuong-2',
    chapterTitle: 'Chương II: Số thực',
    lessonId: 'bai-6',
    lessonTitle: 'Bài 6: Số vô tỉ. Căn bậc hai số học',
    difficulty: 'Thông hiểu',
    content: 'Tính giá trị của căn bậc hai số học √81:',
    options: [
      '-9',
      '±9',
      '81',
      '9'
    ],
    correctAnswer: 3,
    explanation: 'Vì 9 ≥ 0 và 9² = 81 nên √81 = 9.',
    pedagogicalNote: 'Thầy Thái cảnh báo sai lầm: Nhiều học sinh ghi √81 = ±9 là SAI, vì căn bậc hai số học luôn mang giá trị không âm!'
  },
  {
    id: 'c2-th-02',
    chapterId: 'chuong-2',
    chapterTitle: 'Chương II: Số thực',
    lessonId: 'bai-7',
    lessonTitle: 'Bài 7: Tập hợp các số thực',
    difficulty: 'Thông hiểu',
    content: 'Làm tròn số 3,14159 đến chữ số thập phân thứ hai (hàng phần trăm) ta được kết quả:',
    options: [
      '3,14',
      '3,15',
      '3,10',
      '3,142'
    ],
    correctAnswer: 0,
    explanation: 'Chữ số thập phân thứ hai là 4. Chữ số ngay sau nó là 1 (< 5), theo quy tắc làm tròn ta giữ nguyên chữ số 4 và bỏ các chữ số phía sau. Kết quả là 3,14.',
    pedagogicalNote: 'Nếu chữ số liền sau ≥ 5 thì cộng thêm 1 vào chữ số hàng làm tròn; nếu < 5 thì giữ nguyên.'
  },
  {
    id: 'c2-th-03',
    chapterId: 'chuong-2',
    chapterTitle: 'Chương II: Số thực',
    lessonId: 'bai-7',
    lessonTitle: 'Bài 7: Tập hợp các số thực',
    difficulty: 'Thông hiểu',
    content: 'Giá trị tuyệt đối của số thực x = -√5 là:',
    options: [
      '-√5',
      '√5',
      '5',
      '-5'
    ],
    correctAnswer: 1,
    explanation: 'Giá trị tuyệt đối của một số âm là số đối của nó: |-√5| = -(-√5) = √5.',
    pedagogicalNote: 'Khoảng cách từ điểm -√5 đến gốc 0 trên trục số là √5 đơn vị.'
  },

  // Vận dụng
  {
    id: 'c2-vd-01',
    chapterId: 'chuong-2',
    chapterTitle: 'Chương II: Số thực',
    lessonId: 'bai-6',
    lessonTitle: 'Bài 6: Số vô tỉ. Căn bậc hai số học',
    difficulty: 'Vận dụng',
    content: 'Một mảnh đất hình vuông có diện tích là 144 m². Độ dài chu vi của mảnh đất đó là:',
    options: [
      '24 m',
      '36 m',
      '48 m',
      '12 m'
    ],
    correctAnswer: 2,
    explanation: 'Gọi độ dài cạnh hình vuông là a (m, a > 0). Diện tích S = a² = 144 => a = √144 = 12 m. Chu vi hình vuông: C = 4 · a = 4 · 12 = 48 m.',
    pedagogicalNote: 'Học sinh hay nhầm tính ra cạnh 12 m rồi dừng lại quên nhân 4 để tính chu vi.'
  },
  {
    id: 'c2-vd-02',
    chapterId: 'chuong-2',
    chapterTitle: 'Chương II: Số thực',
    lessonId: 'bai-7',
    lessonTitle: 'Bài 7: Tập hợp các số thực',
    difficulty: 'Vận dụng',
    content: 'Làm tròn số 12 756 (đường kính Trái Đất theo km) với độ chính xác d = 50:',
    options: [
      '12 760',
      '13 000',
      '12 700',
      '12 800'
    ],
    correctAnswer: 3,
    explanation: 'Độ chính xác d = 50 (hàng chục) nên ta làm tròn đến hàng trăm (hàng cao hơn hàng chục một bậc). Số 12 756 có chữ số hàng chục là 5 (≥ 5) nên làm tròn thành 12 800.',
    pedagogicalNote: 'Thầy Thái nhấn mạnh: Đây là kiến thức mới của CT 2018: Độ chính xác d ở hàng nào thì làm tròn đến hàng liền trước nó.'
  },

  // ==========================================
  // CHƯƠNG III: GÓC VÀ ĐƯỜNG THẲNG SONG SONG
  // ==========================================
  // Nhận biết
  {
    id: 'c3-nb-01',
    chapterId: 'chuong-3',
    chapterTitle: 'Chương III: Góc và đường thẳng song song',
    lessonId: 'bai-8',
    lessonTitle: 'Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc',
    difficulty: 'Nhận biết',
    content: 'Hai góc đối đỉnh có tính chất nào sau đây?',
    options: [
      'Bằng nhau',
      'Có tổng số đo bằng 180°',
      'Có tổng số đo bằng 90°',
      'Có cạnh đối nhau và bù nhau'
    ],
    correctAnswer: 0,
    explanation: 'Định lí SGK Toán 7 trang 42: Hai góc đối đỉnh thì bằng nhau.',
    pedagogicalNote: 'Hai góc đối đỉnh là hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia.'
  },
  {
    id: 'c3-nb-02',
    chapterId: 'chuong-3',
    chapterTitle: 'Chương III: Góc và đường thẳng song song',
    lessonId: 'bai-8',
    lessonTitle: 'Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc',
    difficulty: 'Nhận biết',
    content: 'Hai góc kề bù là hai góc:',
    options: [
      'Vừa kề nhau vừa phụ nhau (có tổng số đo bằng 90°)',
      'Vừa kề nhau vừa bù nhau (có tổng số đo bằng 180°)',
      'Có chung một cạnh và bằng nhau',
      'Là hai góc đối đỉnh'
    ],
    correctAnswer: 1,
    explanation: 'Hai góc kề bù là hai góc vừa có một cạnh chung (kề nhau) và hai cạnh còn lại là hai tia đối nhau (tổng số đo bằng 180°).',
    pedagogicalNote: 'Tình huống mở đầu chiếc bánh chưng cắt chéo tạo ra các cặp góc kề bù.'
  },
  {
    id: 'c3-nb-03',
    chapterId: 'chuong-3',
    chapterTitle: 'Chương III: Góc và đường thẳng song song',
    lessonId: 'bai-10',
    lessonTitle: 'Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song',
    difficulty: 'Nhận biết',
    content: 'Nội dung tiên đề Euclid về đường thẳng song song là:',
    options: [
      'Qua một điểm ở ngoài một đường thẳng, có vô số đường thẳng song song với đường thẳng đó',
      'Có ít nhất hai đường thẳng song song cùng đi qua một điểm',
      'Qua một điểm ở ngoài một đường thẳng, chỉ có duy nhất một đường thẳng song song với đường thẳng đó',
      'Nếu hai đường thẳng song song thì chúng không bao giờ cắt nhau'
    ],
    correctAnswer: 2,
    explanation: 'Tiên đề Euclid: Qua một điểm ở ngoài một đường thẳng, chỉ có DUY NHẤT MỘT đường thẳng song song với đường thẳng đó.',
    pedagogicalNote: 'Tiên đề là khẳng định được công nhận đúng mà không cần chứng minh.'
  },
  {
    id: 'c3-nb-04',
    chapterId: 'chuong-3',
    chapterTitle: 'Chương III: Góc và đường thẳng song song',
    lessonId: 'bai-11',
    lessonTitle: 'Bài 11: Định lí và chứng minh định lí',
    difficulty: 'Nhận biết',
    content: 'Trong một định lí phát biểu dưới dạng "Nếu... thì...", phần nằm giữa từ "Nếu" và từ "thì" là:',
    options: [
      'Kết luận (KL)',
      'Chứng minh định lí',
      'Tiên đề Euclid',
      'Giả thiết (GT)'
    ],
    correctAnswer: 3,
    explanation: 'Cấu trúc định lí: Phần sau từ "Nếu" là Giả thiết (điều đã cho); phần sau từ "thì" là Kết luận (điều cần suy ra).',
    pedagogicalNote: 'Viết GT/KL là bước đầu tiên khi giải bài toán chứng minh hình học.'
  },

  // Thông hiểu
  {
    id: 'c3-th-01',
    chapterId: 'chuong-3',
    chapterTitle: 'Chương III: Góc và đường thẳng song song',
    lessonId: 'bai-8',
    lessonTitle: 'Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc',
    difficulty: 'Thông hiểu',
    content: 'Biết hai góc $\\widehat{xOy}$ và $\\widehat{yOz}$ là hai góc kề bù, trong đó $\\widehat{xOy} = 70^0$. Số đo của $\\widehat{yOz}$ là:',
    options: [
      '$110^0$',
      '$20^0$',
      '$70^0$',
      '$180^0$'
    ],
    correctAnswer: 0,
    explanation: 'Vì hai góc kề bù nên $\\widehat{xOy} + \\widehat{yOz} = 180^0 \\Rightarrow \\widehat{yOz} = 180^0 - 70^0 = 110^0$.',
    pedagogicalNote: 'Nhớ phân biệt: Kề bù có tổng $= 180^0$, còn Phụ nhau có tổng $= 90^0$.'
  },
  {
    id: 'c3-th-02',
    chapterId: 'chuong-3',
    chapterTitle: 'Chương III: Góc và đường thẳng song song',
    lessonId: 'bai-8',
    lessonTitle: 'Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc',
    difficulty: 'Thông hiểu',
    content: 'Cho tia $Oz$ là tia phân giác của góc $\\widehat{xOy}$ có số đo bằng $80^0$. Số đo của góc $\\widehat{xOz}$ là:',
    options: [
      '$80^0$',
      '$40^0$',
      '$160^0$',
      '$50^0$'
    ],
    correctAnswer: 1,
    explanation: 'Tia phân giác chia một góc thành hai góc bằng nhau: $\\widehat{xOz} = \\widehat{yOz} = \\frac{\\widehat{xOy}}{2} = \\frac{80^0}{2} = 40^0$.',
    pedagogicalNote: 'Tia phân giác nằm giữa hai cạnh của góc và chia góc đó thành 2 góc có số đo bằng nhau.'
  },
  {
    id: 'c3-th-03',
    chapterId: 'chuong-3',
    chapterTitle: 'Chương III: Góc và đường thẳng song song',
    lessonId: 'bai-9',
    lessonTitle: 'Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết',
    difficulty: 'Thông hiểu',
    content: 'Một đường thẳng c cắt hai đường thẳng song song a và b (a // b). Nếu có một góc so le trong bằng 55° thì góc so le trong còn lại có số đo là:',
    options: [
      '125°',
      '35°',
      '55°',
      '180°'
    ],
    correctAnswer: 2,
    explanation: 'Tính chất hai đường thẳng song song: Nếu hai đường thẳng song song bị cắt bởi một đường thẳng thứ ba thì hai góc so le trong BẰNG NHAU. Do đó góc so le trong còn lại cũng bằng 55°.',
    pedagogicalNote: 'Cặp góc đồng vị cũng bằng nhau (= 55°), còn cặp góc trong cùng phía có tổng bằng 180°.'
  },

  // Vận dụng
  {
    id: 'c3-vd-01',
    chapterId: 'chuong-3',
    chapterTitle: 'Chương III: Góc và đường thẳng song song',
    lessonId: 'bai-10',
    lessonTitle: 'Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song',
    difficulty: 'Vận dụng',
    content: 'Cho hai đường thẳng a // b. Đường thẳng c cắt a tại A và cắt b tại B tạo thành góc A₁ = 130°. Góc đồng vị với A₁ tại đỉnh B có số đo là:',
    options: [
      '50°',
      '65°',
      '180°',
      '130°'
    ],
    correctAnswer: 3,
    explanation: 'Vì a // b nên hai góc đồng vị bằng nhau. Góc tại đỉnh B đồng vị với A₁ nên cũng có số đo bằng 130°.',
    pedagogicalNote: 'Vẽ hình minh hoạ: Góc tù đồng vị với góc tù, góc nhọn đồng vị với góc nhọn.'
  },
  {
    id: 'c3-vd-02',
    chapterId: 'chuong-3',
    chapterTitle: 'Chương III: Góc và đường thẳng song song',
    lessonId: 'bai-11',
    lessonTitle: 'Bài 11: Định lí và chứng minh định lí',
    difficulty: 'Vận dụng',
    content: 'Cho định lí: "Nếu hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau". Giả thiết (GT) của định lí là:',
    options: [
      'a ⊥ c, b ⊥ c, a và b phân biệt',
      'a // b',
      'a ⊥ b và b ⊥ c',
      'c ⊥ a và c cắt b'
    ],
    correctAnswer: 0,
    explanation: 'Giả thiết là điều kiện đã cho: hai đường thẳng phân biệt a, b cùng vuông góc với đường thẳng thứ ba c (tức a ⊥ c và b ⊥ c). Kết luận là a // b.',
    pedagogicalNote: 'Thầy Thái lưu ý: Phải ghi rõ a, b phân biệt để tránh trường hợp hai đường thẳng trùng nhau.'
  },

  // ==========================================
  // CHƯƠNG IV: TAM GIÁC BẰNG NHAU
  // ==========================================
  // Nhận biết
  {
    id: 'c4-nb-01',
    chapterId: 'chuong-4',
    chapterTitle: 'Chương IV: Tam giác bằng nhau',
    lessonId: 'bai-12',
    lessonTitle: 'Bài 12: Tổng các góc trong một tam giác',
    difficulty: 'Nhận biết',
    content: 'Tổng ba góc trong một tam giác bất kì luôn bằng:',
    options: [
      '360°',
      '180°',
      '90°',
      '270°'
    ],
    correctAnswer: 1,
    explanation: 'Định lí SGK Toán 7 trang 61: Tổng các góc trong một tam giác luôn bằng 180°.',
    pedagogicalNote: 'Hoạt động cắt 3 góc tam giác ghép lại trên một đường thẳng cho góc bẹt 180°.'
  },
  {
    id: 'c4-nb-02',
    chapterId: 'chuong-4',
    chapterTitle: 'Chương IV: Tam giác bằng nhau',
    lessonId: 'bai-13',
    lessonTitle: 'Bài 13: Hai tam giác bằng nhau. Trường hợp bằng nhau c.c.c',
    difficulty: 'Nhận biết',
    content: 'Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau theo trường hợp nào?',
    options: [
      'Cạnh - góc - cạnh (c.g.c)',
      'Góc - cạnh - góc (g.c.g)',
      'Cạnh - cạnh - cạnh (c.c.c)',
      'Cạnh huyền - góc nhọn'
    ],
    correctAnswer: 2,
    explanation: 'Trường hợp bằng nhau thứ nhất của tam giác: Cạnh - cạnh - cạnh (c.c.c).',
    pedagogicalNote: 'Viết kí hiệu hai tam giác bằng nhau phải đúng thứ tự các đỉnh tương ứng!'
  },
  {
    id: 'c4-nb-03',
    chapterId: 'chuong-4',
    chapterTitle: 'Chương IV: Tam giác bằng nhau',
    lessonId: 'bai-16',
    lessonTitle: 'Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng',
    difficulty: 'Nhận biết',
    content: 'Tam giác cân là tam giác có:',
    options: [
      'Ba cạnh bằng nhau',
      'Một góc vuông',
      'Ba góc bằng nhau',
      'Hai cạnh bằng nhau'
    ],
    correctAnswer: 3,
    explanation: 'Định nghĩa: Tam giác có hai cạnh bằng nhau là tam giác cân. Hai cạnh bằng nhau gọi là cạnh bên, cạnh còn lại là cạnh đáy.',
    pedagogicalNote: 'Trong tam giác cân, hai góc ở đáy luôn bằng nhau.'
  },

  // Thông hiểu
  {
    id: 'c4-th-01',
    chapterId: 'chuong-4',
    chapterTitle: 'Chương IV: Tam giác bằng nhau',
    lessonId: 'bai-12',
    lessonTitle: 'Bài 12: Tổng các góc trong một tam giác',
    difficulty: 'Thông hiểu',
    content: 'Cho tam giác $ABC$ có $\\widehat{A} = 60^0$, $\\widehat{B} = 75^0$. Số đo của góc $C$ ($\\widehat{C}$) là:',
    options: [
      '$45^0$',
      '$55^0$',
      '$35^0$',
      '$135^0$'
    ],
    correctAnswer: 0,
    explanation: 'Tổng ba góc trong tam giác: $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^0 \\Rightarrow \\widehat{C} = 180^0 - (60^0 + 75^0) = 45^0$.',
    pedagogicalNote: 'Tam giác có ba góc nhọn là tam giác nhọn ($45^0, 60^0, 75^0$).'
  },
  {
    id: 'c4-th-02',
    chapterId: 'chuong-4',
    chapterTitle: 'Chương IV: Tam giác bằng nhau',
    lessonId: 'bai-14',
    lessonTitle: 'Bài 14: Trường hợp bằng nhau c.g.c và g.c.g',
    difficulty: 'Thông hiểu',
    content: 'Để hai tam giác $ABC$ và $DEF$ bằng nhau theo trường hợp cạnh - góc - cạnh (c.g.c), biết $AB = DE$ và $AC = DF$, cần thêm điều kiện nào?',
    options: [
      '$\\widehat{B} = \\widehat{E}$',
      '$\\widehat{A} = \\widehat{D}$ (góc xen giữa hai cạnh)',
      '$\\widehat{C} = \\widehat{F}$',
      '$BC = EF$'
    ],
    correctAnswer: 1,
    explanation: 'Trường hợp c.g.c yêu cầu góc bằng nhau PHẢI LÀ GÓC XEN GIỮA hai cạnh tương ứng bằng nhau. Giữa $AB$ và $AC$ là góc $A$; giữa $DE$ và $DF$ là góc $D$.',
    pedagogicalNote: 'Bẫy thường gặp: Học sinh chọn góc không xen giữa (như $\\widehat{B} = \\widehat{E}$) sẽ không suy ra được hai tam giác bằng nhau!'
  },
  {
    id: 'c4-th-03',
    chapterId: 'chuong-4',
    chapterTitle: 'Chương IV: Tam giác bằng nhau',
    lessonId: 'bai-16',
    lessonTitle: 'Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng',
    difficulty: 'Thông hiểu',
    content: 'Tam giác $ABC$ cân tại $A$ có góc ở đỉnh $\\widehat{A} = 40^0$. Số đo của mỗi góc ở đáy ($\\widehat{B}$ và $\\widehat{C}$) là:',
    options: [
      '$140^0$',
      '$60^0$',
      '$70^0$',
      '$50^0$'
    ],
    correctAnswer: 2,
    explanation: 'Tam giác cân tại $A$ có $\\widehat{B} = \\widehat{C} = \\frac{180^0 - \\widehat{A}}{2} = \\frac{180^0 - 40^0}{2} = 70^0$.',
    pedagogicalNote: 'Công thức tính góc ở đáy của tam giác cân: $\\frac{180^0 - \\text{góc đỉnh}}{2}$.'
  },

  // Vận dụng
  {
    id: 'c4-vd-01',
    chapterId: 'chuong-4',
    chapterTitle: 'Chương IV: Tam giác bằng nhau',
    lessonId: 'bai-16',
    lessonTitle: 'Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng',
    difficulty: 'Vận dụng',
    content: 'Đường thẳng $d$ là đường trung trực của đoạn thẳng $AB$. Lấy điểm $M$ thuộc $d$ ($M \\in d$). Khẳng định nào sau đây luôn ĐÚNG?',
    options: [
      'Tam giác $MAB$ là tam giác đều',
      '$M$ là trung điểm của $AB$',
      '$\\widehat{AMB} = 90^0$',
      '$MA = MB$'
    ],
    correctAnswer: 3,
    explanation: 'Tính chất đường trung trực: Điểm nằm trên đường trung trực của một đoạn thẳng thì cách đều hai đầu mút của đoạn thẳng đó, do đó $MA = MB$.',
    pedagogicalNote: 'Khi $MA = MB$, tam giác $MAB$ luôn là tam giác cân tại $M$.'
  },
  {
    id: 'c4-vd-02',
    chapterId: 'chuong-4',
    chapterTitle: 'Chương IV: Tam giác bằng nhau',
    lessonId: 'bai-15',
    lessonTitle: 'Bài 15: Các trường hợp bằng nhau của tam giác vuông',
    difficulty: 'Vận dụng',
    content: 'Cho tam giác $ABC$ vuông tại $A$ có $\\widehat{B} = 60^0$. Tia phân giác của góc $B$ cắt $AC$ tại $D$. Kẻ $DE$ vuông góc với $BC$ ($DE \\perp BC$, $E \\in BC$). Số đo của góc $CDE$ ($\\widehat{CDE}$) là:',
    options: [
      '$60^0$',
      '$30^0$',
      '$45^0$',
      '$90^0$'
    ],
    correctAnswer: 0,
    explanation: 'Tam giác $ABC$ vuông tại $A$ có $\\widehat{C} = 90^0 - 60^0 = 30^0$. Tam giác $DEC$ vuông tại $E$ có $\\widehat{C} = 30^0 \\Rightarrow \\widehat{CDE} = 90^0 - 30^0 = 60^0$.',
    pedagogicalNote: 'Vận dụng: Hai góc nhọn của tam giác vuông luôn phụ nhau (tổng bằng $90^0$).'
  },

  // ==========================================
  // CHƯƠNG V: THU THẬP VÀ BIỂU DIỄN DỮ LIỆU
  // ==========================================
  // Nhận biết
  {
    id: 'c5-nb-01',
    chapterId: 'chuong-5',
    chapterTitle: 'Chương V: Thu thập và biểu diễn dữ liệu',
    lessonId: 'bai-17',
    lessonTitle: 'Bài 17: Thu thập và phân loại dữ liệu',
    difficulty: 'Nhận biết',
    content: 'Dữ liệu nào sau đây là dữ liệu số (số liệu)?',
    options: [
      'Tên các môn thể thao yêu thích của học sinh',
      'Chiều cao của các bạn trong lớp (tính bằng cm)',
      'Xếp loại học lực (Tốt, Khá, Đạt, Chưa đạt)',
      'Nơi sinh của các thành viên trong tổ'
    ],
    correctAnswer: 1,
    explanation: 'Dữ liệu số (số liệu hay dữ liệu định lượng) là dữ liệu nhận giá trị là các số thực, chẳng hạn như chiều cao (cm), cân nặng, điểm số...',
    pedagogicalNote: 'Tên môn học, nơi sinh, xếp loại là dữ liệu không phải là số (dữ liệu định tính).'
  },
  {
    id: 'c5-nb-02',
    chapterId: 'chuong-5',
    chapterTitle: 'Chương V: Thu thập và biểu diễn dữ liệu',
    lessonId: 'bai-18',
    lessonTitle: 'Bài 18: Biểu đồ hình quạt tròn',
    difficulty: 'Nhận biết',
    content: 'Biểu đồ hình quạt tròn thường được dùng để:',
    options: [
      'Biểu diễn sự thay đổi của một đại lượng theo thời gian',
      'So sánh số lượng tuyệt đối giữa các đối tượng độc lập',
      'So sánh các phần so với toàn thể (tỉ lệ phần trăm %)',
      'Tìm quy luật phân bố của biến ngẫu nhiên liên tục'
    ],
    correctAnswer: 2,
    explanation: 'Biểu đồ hình quạt tròn dùng để biểu thị tỉ lệ phần trăm của từng phần so với toàn thể (tổng thể luôn là 100%).',
    pedagogicalNote: 'Để biểu diễn xu hướng theo thời gian, người ta dùng Biểu đồ đoạn thẳng.'
  },
  {
    id: 'c5-nb-03',
    chapterId: 'chuong-5',
    chapterTitle: 'Chương V: Thu thập và biểu diễn dữ liệu',
    lessonId: 'bai-19',
    lessonTitle: 'Bài 19: Biểu đồ đoạn thẳng',
    difficulty: 'Nhận biết',
    content: 'Biểu đồ đoạn thẳng thích hợp nhất để biểu diễn dữ liệu nào sau đây?',
    options: [
      'Tỉ lệ phần trăm xếp loại học lực của khối 7',
      'Cơ cấu chi tiêu trong tháng của một gia đình',
      'Số lượng huy chương vàng của 5 quốc gia tại SEA Games',
      'Nhiệt độ trung bình các tháng trong năm tại Hà Nội'
    ],
    correctAnswer: 3,
    explanation: 'Nhiệt độ thay đổi liên tục theo thời gian (các tháng), biểu đồ đoạn thẳng giúp quan sát rõ xu hướng tăng hoặc giảm.',
    pedagogicalNote: 'Đặc trưng của biểu đồ đoạn thẳng: trục ngang biểu diễn mốc thời gian, trục dọc biểu diễn đại lượng theo dõi.'
  },

  // Thông hiểu
  {
    id: 'c5-th-01',
    chapterId: 'chuong-5',
    chapterTitle: 'Chương V: Thu thập và biểu diễn dữ liệu',
    lessonId: 'bai-18',
    lessonTitle: 'Bài 18: Biểu đồ hình quạt tròn',
    difficulty: 'Thông hiểu',
    content: 'Trong biểu đồ hình quạt tròn, một hình quạt biểu diễn tỉ lệ 25% thì góc ở tâm của hình quạt đó có số đo là:',
    options: [
      '90°',
      '45°',
      '180°',
      '25°'
    ],
    correctAnswer: 0,
    explanation: 'Cả hình tròn tương ứng với 100% và góc ở tâm là 360°. Tỉ lệ 25% tương ứng với góc: 360° · 25% = 360° · (1/4) = 90°.',
    pedagogicalNote: 'Công thức chuyển đổi: Số đo góc ở tâm = 360° · (Tỉ lệ % / 100).'
  },
  {
    id: 'c5-th-02',
    chapterId: 'chuong-5',
    chapterTitle: 'Chương V: Thu thập và biểu diễn dữ liệu',
    lessonId: 'bai-17',
    lessonTitle: 'Bài 17: Thu thập và phân loại dữ liệu',
    difficulty: 'Thông hiểu',
    content: 'Một bạn học sinh ghi lại số ngày trong các tháng năm 2024 như sau: Tháng 1 có 31 ngày; Tháng 2 có 32 ngày; Tháng 3 có 31 ngày. Dữ liệu nào là KHÔNG hợp lí?',
    options: [
      'Tháng 1 có 31 ngày',
      'Tháng 2 có 32 ngày',
      'Tháng 3 có 31 ngày',
      'Cả ba dữ liệu đều hợp lí'
    ],
    correctAnswer: 1,
    explanation: 'Tháng 2 chỉ có tối đa 29 ngày (vào năm nhuận) hoặc 28 ngày (năm thường). Dữ liệu tháng 2 có 32 ngày là không hợp lí.',
    pedagogicalNote: 'Đây là dạng bài kiểm tra tính hợp lí của dữ liệu thực tế (quy định trong SGK Toán 7 trang 92).'
  },

  // Vận dụng
  {
    id: 'c5-vd-01',
    chapterId: 'chuong-5',
    chapterTitle: 'Chương V: Thu thập và biểu diễn dữ liệu',
    lessonId: 'bai-18',
    lessonTitle: 'Bài 18: Biểu đồ hình quạt tròn',
    difficulty: 'Vận dụng',
    content: 'Một lớp học có 40 học sinh. Biểu đồ hình quạt tròn biểu diễn kết quả học tập cho thấy có 45% học sinh xếp loại Tốt, 35% xếp loại Khá, còn lại là loại Đạt. Số học sinh xếp loại Đạt của lớp là:',
    options: [
      '10 học sinh',
      '12 học sinh',
      '8 học sinh',
      '6 học sinh'
    ],
    correctAnswer: 2,
    explanation: 'Tỉ lệ học sinh loại Đạt là: 100% - (45% + 35%) = 20%. Số học sinh loại Đạt là: 40 · 20% = 40 · 0,2 = 8 học sinh.',
    pedagogicalNote: 'Vận dụng tính tỉ lệ % còn lại rồi nhân với tổng số đối tượng.'
  },
  {
    id: 'c5-vd-02',
    chapterId: 'chuong-5',
    chapterTitle: 'Chương V: Thu thập và biểu diễn dữ liệu',
    lessonId: 'bai-19',
    lessonTitle: 'Bài 19: Biểu đồ đoạn thẳng',
    difficulty: 'Vận dụng',
    content: 'Doanh thu một cửa hàng trong 4 tháng đầu năm lần lượt là: Tháng 1: 50 triệu đồng; Tháng 2: 60 triệu đồng; Tháng 3: 55 triệu đồng; Tháng 4: 75 triệu đồng. Tỉ lệ tăng trưởng doanh thu từ Tháng 3 đến Tháng 4 là:',
    options: [
      'Tăng 20 triệu đồng',
      'Tăng 15 triệu đồng',
      'Tăng khoảng 25,0%',
      'Tăng khoảng 36,4%'
    ],
    correctAnswer: 3,
    explanation: 'Số tiền tăng từ Tháng 3 sang Tháng 4 là: 75 - 55 = 20 triệu đồng. Tỉ lệ tăng trưởng: (20 / 55) · 100% ≈ 36,36% ≈ 36,4%.',
    pedagogicalNote: 'Tỉ lệ tăng trưởng tính trên mốc xuất phát của tháng liền trước (ở đây là 55 triệu đồng).'
  }
];

export const CHAPTER_LIST_KY1 = [
  { id: 'chuong-1', number: '1', title: 'Chương I: Tập hợp các số hữu tỉ' },
  { id: 'chuong-2', number: '2', title: 'Chương II: Số thực' },
  { id: 'chuong-3', number: '3', title: 'Chương III: Góc và đường thẳng song song' },
  { id: 'chuong-4', number: '4', title: 'Chương IV: Tam giác bằng nhau' },
  { id: 'chuong-5', number: '5', title: 'Chương V: Thu thập và biểu diễn dữ liệu' },
];

export const LESSON_MAP_KY1: Record<string, { id: string; title: string }[]> = {
  'chuong-1': [
    { id: 'bai-1', title: 'Bài 1: Tập hợp các số hữu tỉ' },
    { id: 'bai-2', title: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ' },
    { id: 'bai-3', title: 'Bài 3: Luỹ thừa với số mũ tự nhiên của một số hữu tỉ' },
    { id: 'bai-4', title: 'Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế' },
  ],
  'chuong-2': [
    { id: 'bai-5', title: 'Bài 5: Làm quen với số thập phân vô hạn tuần hoàn' },
    { id: 'bai-6', title: 'Bài 6: Số vô tỉ. Căn bậc hai số học' },
    { id: 'bai-7', title: 'Bài 7: Tập hợp các số thực' },
  ],
  'chuong-3': [
    { id: 'bai-8', title: 'Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc' },
    { id: 'bai-9', title: 'Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết' },
    { id: 'bai-10', title: 'Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song' },
    { id: 'bai-11', title: 'Bài 11: Định lí và chứng minh định lí' },
  ],
  'chuong-4': [
    { id: 'bai-12', title: 'Bài 12: Tổng các góc trong một tam giác' },
    { id: 'bai-13', title: 'Bài 13: Hai tam giác bằng nhau. Trường hợp bằng nhau c.c.c' },
    { id: 'bai-14', title: 'Bài 14: Trường hợp bằng nhau c.g.c và g.c.g' },
    { id: 'bai-15', title: 'Bài 15: Các trường hợp bằng nhau của tam giác vuông' },
    { id: 'bai-16', title: 'Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng' },
  ],
  'chuong-5': [
    { id: 'bai-17', title: 'Bài 17: Thu thập và phân loại dữ liệu' },
    { id: 'bai-18', title: 'Bài 18: Biểu đồ hình quạt tròn' },
    { id: 'bai-19', title: 'Bài 19: Biểu đồ đoạn thẳng' },
  ],
};
