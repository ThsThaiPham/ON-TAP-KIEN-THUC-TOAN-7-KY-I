import { ChapterInfo, CurriculumComparisonItem, MathCompetency } from '../types';

export const BOOK_METADATA = {
  titleSGK: "Toán 7 (Tập Một & Tập Hai)",
  titleSGV: "Toán 7 - Sách Giáo Viên",
  series: "Kết nối tri thức với cuộc sống",
  publisher: "Nhà xuất bản Giáo dục Việt Nam",
  authors: {
    chiefEditor: "GS. TSKH. Hà Huy Khoái (Tổng Chủ biên)",
    managingEditor: "PGS. TS. Nguyễn Huy Đoan (Chủ biên)",
    coAuthors: [
      "Cung Thế Anh",
      "Nguyễn Cao Cường",
      "Trần Mạnh Cường",
      "Doãn Minh Cường",
      "Trần Phương Dung",
      "Sĩ Đức Quang",
      "Lưu Bá Thắng",
      "Đặng Hùng Thắng"
    ]
  },
  curriculum: "Chương trình Giáo dục Phổ thông 2018 (Ban hành kèm Thông tư 32/2018/TT-BGDĐT)",
  totalPeriods: 140,
  term1Periods: 70,
  term2Periods: 70,
  edition: "Tái bản lần thứ tư (2022 - hiện hành)",
  characters: [
    { name: "Anh Pi 'thông thái'", role: "Nhắc nhớ kiến thức quan trọng, tổng kết quy tắc, gợi ý mở rộng bản chất toán học." },
    { name: "Bạn Tròn", role: "Đưa ra các ý tưởng trực quan, câu hỏi tò mò, thảo luận góc nhìn đa chiều." },
    { name: "Bạn Vuông", role: "Đưa ra các lập luận chặt chẽ, kiểm tra tính đúng đắn, phản biện logic." }
  ]
};

export const CURRICULUM_STRANDS = [
  {
    name: "Số và Đại số",
    chapters: 4,
    periods: 59,
    percentage: 42.1,
    color: "amber",
    description: "Số hữu tỉ, Số thực, Tỉ lệ thức & Đại lượng tỉ lệ, Biểu thức đại số & Đa thức một biến."
  },
  {
    name: "Hình học và Đo lường",
    chapters: 4,
    periods: 52,
    percentage: 37.1,
    color: "emerald",
    description: "Góc & Đường thẳng song song, Tam giác bằng nhau, Quan hệ các yếu tố tam giác, Hình khối thực tiễn."
  },
  {
    name: "Thống kê và Xác suất",
    chapters: 2,
    periods: 19,
    percentage: 13.6,
    color: "blue",
    description: "Thu thập & Biểu diễn dữ liệu (Biểu đồ quạt, đoạn thẳng), Làm quen biến cố & Xác suất thực nghiệm."
  },
  {
    name: "Hoạt động thực hành trải nghiệm",
    chapters: 2,
    periods: 10,
    percentage: 7.2,
    color: "indigo",
    description: "Phần mềm GeoGebra, Phân tích dân số bằng Excel, Dự án tài chính cá nhân & Vòng quay may mắn."
  }
];

export const CURRICULUM_COMPARISONS: CurriculumComparisonItem[] = [
  {
    topic: "Cộng, trừ, nhân, chia số thập phân",
    strand: "Số và Đại số",
    sgk2006: "Dạy trọng tâm ở lớp 7 trong phần Số hữu tỉ.",
    sgk2018: "Đã đưa toàn bộ 4 phép tính về số thập phân xuống lớp 6.",
    pedagogicalRationale: "Học sinh lớp 7 chỉ cần ôn tập và vận dụng tính toán số hữu tỉ dưới dạng phân số và số thập phân, không học lại quy tắc cộng trừ nhân chia số thập phân cơ bản.",
    changeType: "Chuyển xuống lớp dưới"
  },
  {
    topic: "Giá trị tuyệt đối của một số",
    strand: "Số và Đại số",
    sgk2006: "Định nghĩa và rèn luyện dày đặc ngay trong chương Số hữu tỉ.",
    sgk2018: "Không đề cập ở chương Số hữu tỉ; chuyển sang chương Số thực (Bài 7).",
    pedagogicalRationale: "Gắn liền giá trị tuyệt đối với khoảng cách hình học trên trục số thực (|a| là khoảng cách từ điểm a đến gốc 0), giúp học sinh hiểu bản chất trực quan hơn.",
    changeType: "Đổi mới phương pháp"
  },
  {
    topic: "Căn bậc hai",
    strand: "Số và Đại số",
    sgk2006: "Quy ước số dương có hai căn bậc hai đối nhau ngay từ lớp 7.",
    sgk2018: "Chỉ đề cập 'Căn bậc hai số học' của một số không âm (√a ≥ 0). Khái niệm căn bậc hai đại số tổng quát chuyển lên lớp 9.",
    pedagogicalRationale: "Tránh gây quá tải và nhầm lẫn cho học sinh lớp 7 giữa căn bậc hai số học (mang dấu không âm) và hai nghiệm của phương trình x² = a.",
    changeType: "Giảm tải"
  },
  {
    topic: "Hàm số và đồ thị y = ax",
    strand: "Số và Đại số",
    sgk2006: "Khái niệm hàm số, mặt phẳng tọa độ Oxy và đồ thị hàm số y = ax dạy ở Học kì I lớp 7.",
    sgk2018: "Chuyển toàn bộ mạch Hàm số và đồ thị lên Lớp 8.",
    pedagogicalRationale: "Nội dung hàm số quá trừu tượng đối với học sinh đầu cấp 2; chuyển sang lớp 8 khi học sinh đã có tư duy hàm số và đại số vững vàng hơn.",
    changeType: "Chuyển lên lớp trên"
  },
  {
    topic: "Đa thức và các phép toán",
    strand: "Số và Đại số",
    sgk2006: "Dạy đa thức nhiều biến (đơn thức đồng dạng, cộng trừ đa thức nhiều biến), sau đó mới học đa thức một biến.",
    sgk2018: "Chỉ tập trung vào ĐA THỨC MỘT BIẾN (cộng, trừ, nhân, chia đa thức một biến). Đa thức nhiều biến chuyển lên lớp 8.",
    pedagogicalRationale: "Đi thẳng vào đa thức một biến giúp học sinh rèn luyện kĩ năng đặt tính và thực hiện cả 4 phép tính (kể cả nhân và chia đa thức - trước đây ở lớp 8).",
    changeType: "Đổi mới phương pháp"
  },
  {
    topic: "Tia phân giác & Hai góc kề bù",
    strand: "Hình học",
    sgk2006: "Dạy ở cuối lớp 6 trong phần Hình học trực quan.",
    sgk2018: "Chuyển lên đầu lớp 7 (Bài 8: Góc ở vị trí đặc biệt, tia phân giác của một góc).",
    pedagogicalRationale: "Lớp 6 tập trung vào trực quan; lớp 7 bắt đầu bước vào hình học suy luận logic nên việc gắn tia phân giác và góc kề bù với lập luận chứng minh là phù hợp tâm sinh lí.",
    changeType: "Chuyển lên lớp trên"
  },
  {
    topic: "Nửa mặt phẳng & Góc trong cùng phía",
    strand: "Hình học",
    sgk2006: "Dạy hệ tiên đề nửa mặt phẳng; định nghĩa hai góc trong cùng phía bù nhau.",
    sgk2018: "Bỏ hoàn toàn khái niệm 'nửa mặt phẳng'; không đưa 'hai góc trong cùng phía' thành định nghĩa chính thức mà chỉ xem như nhận xét/bài tập.",
    pedagogicalRationale: "Tinh giản tính tiên đề hình thức khô cứng của Hilbert, tập trung vào trực quan và dấu hiệu so le trong, đồng vị.",
    changeType: "Giảm tải"
  },
  {
    topic: "Định lí Pythagore",
    strand: "Hình học",
    sgk2006: "Dạy ở chương Tam giác của lớp 7.",
    sgk2018: "Chuyển hoàn toàn Định lí Pythagore lên Lớp 8.",
    pedagogicalRationale: "Lớp 7 chỉ dừng ở nhận biết căn bậc hai số học và các trường hợp bằng nhau của tam giác vuông; Pythagore sẽ phát huy tối đa khi kết hợp tam giác đồng dạng ở lớp 8.",
    changeType: "Chuyển lên lớp trên"
  },
  {
    topic: "Đường xiên và hình chiếu",
    strand: "Hình học",
    sgk2006: "Dạy khái niệm hình chiếu của đường xiên và định lí quan hệ giữa đường xiên và hình chiếu.",
    sgk2018: "Bỏ khái niệm hình chiếu. So sánh đường vuông góc và đường xiên trực tiếp qua góc đối diện trong tam giác vuông.",
    pedagogicalRationale: "Cách tiếp cận tự nhiên, trực tiếp hơn: cạnh huyền trong tam giác vuông luôn là cạnh lớn nhất, từ đó đường vuông góc luôn ngắn hơn đường xiên.",
    changeType: "Giảm tải"
  },
  {
    topic: "Xác suất thực nghiệm và biến cố",
    strand: "Thống kê và Xác suất",
    sgk2006: "Toàn bộ chương trình lớp 7 KHÔNG CÓ xác suất (chỉ có thống kê đơn giản).",
    sgk2018: "Đưa nội dung 'Làm quen với biến cố và xác suất của biến cố' vào lớp 7 (Chương VIII).",
    pedagogicalRationale: "Thực hiện theo định hướng quốc tế: trang bị tư duy xác suất sớm thông qua các trải nghiệm tung xúc xắc, quay số, rút thẻ, phân biệt biến cố chắc chắn / không thể / ngẫu nhiên.",
    changeType: "Nội dung mới"
  },
  {
    topic: "Hình lăng trụ đứng trong thực tiễn",
    strand: "Hình học và Đo lường",
    sgk2006: "Dạy ở cuối lớp 8 trong phần Hình học không gian.",
    sgk2018: "Đưa 'Hình lăng trụ đứng tam giác, hình lăng trụ đứng tứ giác' vào lớp 7 theo hướng trực quan thực hành.",
    pedagogicalRationale: "Học sinh gấp giấy, cắt dán, tính diện tích xung quanh và thể tích từ các mô hình quen thuộc như lịch để bàn, lều trại, hộp quà.",
    changeType: "Đổi mới phương pháp"
  }
];

export const MATH_COMPETENCIES: MathCompetency[] = [
  {
    code: "NL1",
    name: "Năng lực tư duy và lập luận toán học",
    description: "Thực hiện các thao tác tư duy (so sánh, phân tích, tổng hợp, trừu tượng hoá), nêu và trả lời câu hỏi lập luận, suy luận logic có căn cứ.",
    manifestationInGrade7: "Chuyển các nhận định thực nghiệm sang chứng minh định lí (tiên đề Euclid, hai tam giác bằng nhau, quan hệ góc và cạnh đối diện). Tham gia phần Tranh luận để phản biện ý kiến của bạn Tròn và Vuông.",
    assessmentTools: ["Bài tập chứng minh hình học", "Câu hỏi Tranh luận tại lớp", "Bài toán tìm phản ví dụ để bác bỏ một khẳng định sai."]
  },
  {
    code: "NL2",
    name: "Năng lực mô hình hoá toán học",
    description: "Sử dụng các công cụ toán học (công thức, phương trình, bảng biểu, sơ đồ) để mô tả và giải quyết tình huống xuất hiện trong thực tiễn.",
    manifestationInGrade7: "Mô hình hoá bài toán làm bánh chưng, tính khối lượng thịt (Chương I); tính chỉ số WHtR đo nguy cơ béo phì; bài toán hai đại lượng tỉ lệ thuận/nghịch trong đời sống; tính thể tích bể bơi, thùng hàng hình lăng trụ.",
    assessmentTools: ["Phần Mở đầu và Vận dụng của mỗi bài học", "Dự án tài chính (Quy tắc 72)", "Bài toán đo đạt chiều cao thực tế bằng compa và êke."]
  },
  {
    code: "NL3",
    name: "Năng lực giải quyết vấn đề toán học",
    description: "Nhận dạng tình huống vấn đề, thu thập thông tin, đề xuất giả thuyết và giải pháp, thực hiện kế hoạch giải quyết và đánh giá giải pháp.",
    manifestationInGrade7: "Giải quyết các tình huống đa bước: tìm số hữu tỉ x qua quy tắc chuyển vế; tính số tiền mua sách, chia tỉ lệ lợi nhuận trong công ty; phân tích dự báo dịch bệnh qua mẫu khảo sát đại diện.",
    assessmentTools: ["Bài tập cuối chương", "Mục Thử thách nhỏ", "Nhiệm vụ thảo luận nhóm phân tích số liệu."]
  },
  {
    code: "NL4",
    name: "Năng lực giao tiếp toán học",
    description: "Nghe, đọc, ghi chép, diễn đạt, trình bày và thảo luận các ý tưởng, lập luận toán học bằng ngôn ngữ nói, viết và kí hiệu toán học chuẩn xác.",
    manifestationInGrade7: "Đọc hiểu bảng số liệu, biểu đồ hình quạt tròn, biểu đồ đoạn thẳng; viết Giả thiết (GT) - Kết luận (KL) bằng kí hiệu toán học thay vì văn xuôi; trình bày lời giải mẫu theo chuẩn mực.",
    assessmentTools: ["Bảng ghi GT/KL trong hình học", "Thuyết trình kết quả hoạt động trải nghiệm", "Trình bày các bước rút gọn đa thức trên bảng."]
  },
  {
    code: "NL5",
    name: "Năng lực sử dụng công cụ, phương tiện học toán",
    description: "Biết nhận diện, sử dụng đúng cách, an toàn và hiệu quả các dụng cụ đo vẽ (thước thẳng, compa, êke, thước đo góc), máy tính cầm tay (MTCT) và phần mềm toán học.",
    manifestationInGrade7: "Sử dụng thước đo góc và compa vẽ tia phân giác, đường trung trực; sử dụng MTCT Casio để tính căn bậc hai số học, làm tròn số; sử dụng phần mềm GeoGebra và Microsoft Excel để xử lí số liệu.",
    assessmentTools: ["Tiết thực hành GeoGebra (2 tiết)", "Thực hành Excel phân tích dân số (3 tiết)", "Bài kiểm tra kĩ năng bấm MTCT (Chương II)."]
  }
];

export const CHAPTERS_DATA: ChapterInfo[] = [
  {
    id: "chuong-1",
    volume: 1,
    number: "I",
    title: "Số hữu tỉ",
    periods: 14,
    strand: "Số và Đại số",
    summary: "Xây dựng tập hợp các số hữu tỉ Q, biểu diễn số hữu tỉ trên trục số, thứ tự trong Q, các phép toán cộng, trừ, nhân, chia, luỹ thừa với số mũ tự nhiên và quy tắc chuyển vế.",
    keyObjectives: [
      "Nhận biết số hữu tỉ, tập hợp Q, số đối của số hữu tỉ.",
      "Biểu diễn số hữu tỉ trên trục số và so sánh hai số hữu tỉ.",
      "Thực hiện thành thạo các phép tính cộng, trừ, nhân, chia số hữu tỉ.",
      "Vận dụng tính chất giao hoán, kết hợp, phân phối và quy tắc dấu ngoặc, quy tắc chuyển vế để tính nhẩm, tính nhanh hợp lí.",
      "Nắm vững luỹ thừa của số hữu tỉ, nhân chia hai luỹ thừa cùng cơ số, luỹ thừa của luỹ thừa, luỹ thừa của một tích và một thương."
    ],
    lessons: [
      {
        number: "Bài 1",
        title: "Tập hợp các số hữu tỉ",
        periods: 2,
        terms: ["Số hữu tỉ", "Tập hợp Q", "Số đối"],
        coreKnowledge: ["Số hữu tỉ là số viết được dưới dạng phân số a/b với a, b ∈ Z, b ≠ 0.", "Mỗi số hữu tỉ có duy nhất một số đối."],
        openingProblem: "Tính chỉ số WHtR (Waist to Height Ratio - Tỉ số vòng bụng trên chiều cao) của ông An (180cm, bụng 108cm) và ông Chung (160cm, bụng 70cm) để đánh giá nguy cơ sức khoẻ.",
        activities: [
          { type: "Khám phá", description: "HĐ1: Tính chỉ số WHtR. HĐ2: Viết các số 1,5; -2,5; 2 3/4 dưới dạng phân số bằng nhau.", teacherGuide: "Rút ra định nghĩa số hữu tỉ từ các phân số bằng nhau." },
          { type: "Luyện tập", description: "Giải thích vì sao các số 8; -3,3; 3 2/3 là số hữu tỉ và tìm số đối.", teacherGuide: "Nhấn mạnh số nguyên, hỗn số, số thập phân đều là số hữu tỉ." },
          { type: "Vận dụng", description: "Quay lại bài toán mở đầu so sánh chỉ số sức khoẻ ông An và ông Chung.", teacherGuide: "Chỉ số WHtR ông An = 0,6 > 0,52 (thừa cân); ông Chung = 0,4375 (tốt)." }
        ],
        keyExercises: [
          { id: "1.1", prompt: "Xác định tính đúng sai: 0,25 ∈ Q; -6/7 ∈ Q; -235 ∉ Q.", answerOrHint: "a) Đúng; b) Đúng; c) Sai vì -235 = -235/1 ∈ Q." },
          { id: "1.4", prompt: "Những phân số nào biểu diễn số hữu tỉ -0,625 trong các phân số: 5/-8, 10/16, 20/-32, -10/16, -25/40, 35/-48?", answerOrHint: "-0,625 = -5/8 = 20/-32 = -10/16 = -25/40." }
        ]
      },
      {
        number: "Bài 2",
        title: "Cộng, trừ, nhân, chia số hữu tỉ",
        periods: 2,
        terms: ["Quy tắc dấu ngoặc", "Tính chất giao hoán, kết hợp"],
        coreKnowledge: ["Viết các số hữu tỉ về cùng dạng phân số hoặc số thập phân rồi thực hiện phép tính.", "Quy tắc dấu ngoặc: đằng trước dấu trừ phải đổi dấu tất cả các số hạng."],
        openingProblem: "Khinh khí cầu bay lên thẳng đứng với vận tốc 0,8 m/s trong 50s, sau đó giảm độ cao với vận tốc 5/9 m/s trong 27s. Hỏi cách mặt đất bao nhiêu mét?",
        activities: [
          { type: "Khám phá", description: "HĐ1, HĐ2: Nhắc lại cộng trừ phân số và viết hỗn số về phân số.", teacherGuide: "Dẫn dắt học sinh quy phép cộng trừ số hữu tỉ về phép tính trên phân số." },
          { type: "Luyện tập", description: "Tính nhanh biểu thức có nhiều phân số bằng cách nhóm các mẫu số chung.", teacherGuide: "Khuyến khích sử dụng tính chất kết hợp một cách hợp lí." },
          { type: "Vận dụng", description: "Bài toán tính khối lượng các chất còn lại trong 100g khoai tây khô.", teacherGuide: "Áp dụng trừ số thập phân: 100 - (11 + 6,6 + 0,3 + 75,1) = 7g." }
        ],
        keyExercises: [
          { id: "1.10", prompt: "Tính hợp lí: 0,65 · 78 + 2 1/5 · 2020 + 0,35 · 78 - 2,2 · 2020", answerOrHint: "(0,65 + 0,35) · 78 + (2,2 - 2,2) · 2020 = 78." },
          { id: "1.11", prompt: "Ngăn sách dài 120cm, mỗi cuốn dày 2,4cm. Xếp được tối đa bao nhiêu cuốn?", answerOrHint: "120 : 2,4 = 50 cuốn sách." }
        ]
      },
      {
        number: "Bài 3",
        title: "Luỹ thừa với số mũ tự nhiên của một số hữu tỉ",
        periods: 3,
        terms: ["Luỹ thừa", "Cơ số", "Số mũ", "Luỹ thừa của luỹ thừa"],
        coreKnowledge: ["xⁿ = x · x · ... · x (n thừa số x); x⁰ = 1 (x ≠ 0).", "xᵐ · xⁿ = xᵐ⁺ⁿ; xᵐ : xⁿ = xᵐ⁻ⁿ; (xᵐ)ⁿ = xᵐⁿ; (x · y)ⁿ = xⁿ · yⁿ."],
        openingProblem: "Trái Đất có 71% diện tích là nước. Nếu gom hết vào bể lập phương thì cạnh dài 1 111,34 km. Tính thể tích dưới dạng luỹ thừa.",
        activities: [
          { type: "Khám phá", description: "HĐ1-HĐ5: Từ luỹ thừa số tự nhiên mở rộng sang luỹ thừa số hữu tỉ âm, phân số.", teacherGuide: "Nhấn mạnh luỹ thừa bậc chẵn của số âm là số dương, bậc lẻ là số âm." },
          { type: "Thử thách nhỏ", description: "Điền luỹ thừa của 2 vào bảng ma phương để tích các hàng, cột, chéo bằng nhau.", teacherGuide: "Tích 3 số trên đường chéo là 2¹². Áp dụng cộng số mũ để tìm các ô trống." }
        ],
        keyExercises: [
          { id: "1.20", prompt: "Dãy luỹ thừa của 3: 3⁰, 3¹, ?, ?, ?, ?, ?", answerOrHint: "Quy luật số sau bằng tích hai số liền trước: 3⁰, 3¹, 3¹, 3², 3³, 3⁵, 3⁸." },
          { id: "1.24", prompt: "Khoảng cách Trái Đất - Mặt Trời 1,5 · 10⁸ km, Mộc tinh - Mặt Trời 7,78 · 10⁸ km. Hỏi Mộc tinh xa gấp bao nhiêu lần?", answerOrHint: "7,78 · 10⁸ : (1,5 · 10⁸) = 389/75 ≈ 5,19 lần." }
        ]
      },
      {
        number: "Bài 4",
        title: "Thứ tự thực hiện các phép tính. Quy tắc chuyển vế",
        periods: 2,
        terms: ["Đẳng thức", "Vế trái", "Vế phải", "Quy tắc chuyển vế"],
        coreKnowledge: ["Thứ tự: Luỹ thừa → Nhân, chia → Cộng, trừ; Ngoặc: () → [] → {}.", "Khi chuyển một số hạng từ vế này sang vế kia của đẳng thức, phải đổi dấu: '+' thành '-' và '-' thành '+'."],
        openingProblem: "Biết cân thăng bằng: một bên là quả bưởi + 5,1 kg, bên kia là quả cân 7 kg. Hỏi quả bưởi nặng bao nhiêu kg?",
        activities: [
          { type: "Khám phá", description: "Thiết lập đẳng thức x + 5,1 = 7 và thực hiện phép trừ hai vế.", teacherGuide: "Hình thành quy tắc chuyển vế tự nhiên từ bài toán thực tế chiếc cân." },
          { type: "Luyện tập", description: "Tìm x trong các đẳng thức chứa phân số và hỗn số.", teacherGuide: "Lưu ý học sinh quy đồng mẫu số trước khi cộng trừ." }
        ],
        keyExercises: [
          { id: "1.26", prompt: "Tìm x: a) x + 0,25 = 1/2; b) x - (-5/7) = 9/14.", answerOrHint: "a) x = 1/2 - 0,25 = 0,25; b) x = 9/14 - 5/7 = -1/14." },
          { id: "1.30", prompt: "Để làm bánh cần 2 3/4 cốc bột. Lan có 1 1/2 cốc. Cần thêm bao nhiêu?", answerOrHint: "x = 11/4 - 3/2 = 5/4 = 1 1/4 cốc bột." }
        ]
      }
    ],
    innovations: [
      "Đưa các phép tính số thập phân cơ bản xuống lớp 6 để tập trung rèn kĩ năng tính nhẩm, tính nhanh số hữu tỉ.",
      "Tích hợp các bài toán thực tiễn phong phú (chỉ số sức khoẻ WHtR, bay khinh khí cầu, đóng gói bánh chưng, thiên văn học).",
      "Giới thiệu mục 'Em có biết' về luỹ thừa với số mũ âm (10⁻² = 1/100, micromét 10⁻⁶, yocto giây 10⁻²⁴) tạo cầu nối liên môn với Vật lí và Hoá học."
    ],
    commonMistakes: [
      {
        mistake: "Quên đổi dấu khi áp dụng quy tắc chuyển vế hoặc khi phá ngoặc có dấu trừ đằng trước.",
        reason: "Thói quen máy móc bê nguyên xi số hạng mà không chú ý đến dấu phép toán.",
        solution: "Yêu cầu học sinh gạch chân số hạng cần chuyển và viết lại dấu đối diện ngay phía dưới trước khi tính toán."
      },
      {
        mistake: "Nhầm lẫn (-3)² với -3² hoặc (-1/3)³ với -(1/3³).",
        reason: "Chưa phân biệt được cơ số có bao gồm dấu trừ hay không.",
        solution: "Cho học sinh viết tường minh thành tích các thừa số: (-3)² = (-3)·(-3) = 9, còn -3² = -(3·3) = -9."
      }
    ],
    pedagogicalTips: [
      "Tận dụng máy tính cầm tay (MTCT) để học sinh tự kiểm tra lại kết quả tính nhẩm, rèn thói quen tự đánh giá.",
      "Tổ chức làm việc nhóm với phần Tranh luận để học sinh diễn đạt bằng ngôn ngữ toán học."
    ]
  },
  {
    id: "chuong-2",
    volume: 1,
    number: "II",
    title: "Số thực",
    periods: 10,
    strand: "Số và Đại số",
    summary: "Làm quen số thập phân vô hạn tuần hoàn, số vô tỉ, căn bậc hai số học, tập hợp số thực R, trục số thực, thứ tự trong R, giá trị tuyệt đối và làm tròn theo độ chính xác cho trước.",
    keyObjectives: [
      "Nhận biết số thập phân hữu hạn và vô hạn tuần hoàn, chu kì tuần hoàn.",
      "Nhận biết số vô tỉ, khái niệm căn bậc hai số học của số không âm.",
      "Tính căn bậc hai số học chính xác hoặc gần đúng bằng máy tính cầm tay.",
      "Nhận biết tập số thực R, trục số thực lấp đầy bởi các điểm biểu diễn số thực.",
      "Hiểu khái niệm giá trị tuyệt đối |a| là khoảng cách từ điểm a đến gốc 0 trên trục số.",
      "Thực hiện ước lượng và làm tròn số căn cứ vào độ chính xác cho trước (50, 5, 0.5, 0.05...)."
    ],
    lessons: [
      {
        number: "Bài 5",
        title: "Làm quen với số thập phân vô hạn tuần hoàn",
        periods: 2,
        terms: ["Số thập phân hữu hạn", "Số thập phân vô hạn tuần hoàn", "Chu kì", "Độ chính xác"],
        coreKnowledge: ["Nếu phân số tối giản có mẫu không chứa ước nguyên tố khác 2 và 5 thì viết được thành số thập phân hữu hạn; ngược lại viết thành vô hạn tuần hoàn.", "Làm tròn đến hàng nào thì kết quả có độ chính xác bằng một nửa đơn vị hàng đó."],
        openingProblem: "Vuông chia 4 cho 5 được 0,8 (hữu hạn). Tròn chia 5 cho 18 chia mãi không dứt được 0,2777... Hỏi tại sao lại có sự khác nhau này?",
        activities: [
          { type: "Khám phá", description: "Thực hiện phép chia 5:18 và 17:11 để quan sát hiện tượng lặp lại chữ số dư.", teacherGuide: "Dẫn dắt đến khái niệm chu kì và kí hiệu trong ngoặc đơn, ví dụ 0,2(7); -1,(54)." },
          { type: "Luyện tập", description: "Làm tròn số căn cứ vào độ chính xác: d = 50 (hàng trăm), d = 0,05 (hàng phần mười).", teacherGuide: "Nhấn mạnh bảng đối chiếu: độ chính xác d = 0,5 ứng với hàng đơn vị, d = 0,05 ứng với hàng phần mười." }
        ],
        keyExercises: [
          { id: "2.1", prompt: "Phân loại các số: 0,1; -1,(23); 11,2(3); -6,725.", answerOrHint: "Hữu hạn: 0,1; -6,725. Vô hạn tuần hoàn: -1,(23); 11,2(3)." },
          { id: "2.5", prompt: "Làm tròn số π ≈ 3,14159... đến chữ số thập phân thứ ba và với độ chính xác 0,5.", answerOrHint: "a) 3,142; b) Đến hàng đơn vị: 3." }
        ]
      },
      {
        number: "Bài 6",
        title: "Số vô tỉ. Căn bậc hai số học",
        periods: 2,
        terms: ["Số vô tỉ", "Căn bậc hai số học", "Tập hợp I", "Số thập phân vô hạn không tuần hoàn"],
        coreKnowledge: ["Số vô tỉ là số viết được dưới dạng số thập phân vô hạn không tuần hoàn, kí hiệu tập I.", "Căn bậc hai số học của số a không âm là số x không âm sao cho x² = a, kí hiệu √a."],
        openingProblem: "Ghép 4 tam giác vuông bằng nhau thành hình vuông có diện tích 2 dm². Độ dài cạnh hình vuông đó biểu thị bằng số nào?",
        activities: [
          { type: "Khám phá", description: "Thực hành cắt ghép giấy chứng minh diện tích bằng 2 dm². Độ dài cạnh thoả mãn x² = 2.", teacherGuide: "Chứng minh x = 1,4142135... không thể là số hữu tỉ, giới thiệu số vô tỉ và kí hiệu √2." },
          { type: "Luyện tập", description: "Tính căn bậc hai số học: √16, √81, √2021² và bấm máy tính √15, √2,56.", teacherGuide: "Hướng dẫn thao tác bấm phím căn bậc hai trên máy tính Casio." },
          { type: "Vận dụng", description: "Tính độ dài cạnh đáy kim tự tháp Kheops biết diện tích đáy là 52 198,16 m².", teacherGuide: "Cạnh bằng √52198,16 ≈ 228,5 m." }
        ],
        keyExercises: [
          { id: "2.6", prompt: "Cho biết 153² = 23 409. Tính √23 409.", answerOrHint: "√23 409 = 153." },
          { id: "2.11", prompt: "Hình chữ nhật có chiều dài 8 dm, rộng 5 dm. Tính đường chéo biết bình phương đường chéo bằng tổng bình phương hai cạnh.", answerOrHint: "Đường chéo = √(8² + 5²) = √89 ≈ 9,4 dm." }
        ]
      },
      {
        number: "Bài 7",
        title: "Tập hợp các số thực",
        periods: 3,
        terms: ["Số thực", "Tập hợp R", "Trục số thực", "Giá trị tuyệt đối"],
        coreKnowledge: ["Số hữu tỉ và số vô tỉ gọi chung là số thực (R).", "Mỗi số thực được biểu diễn bởi một điểm trên trục số và ngược lại (trục số thực lấp đầy).", "|a| = a nếu a ≥ 0 và |a| = -a nếu a < 0."],
        openingProblem: "Đã có số tự nhiên, số nguyên, số hữu tỉ, số vô tỉ... tại sao lại cần thêm khái niệm số thực?",
        activities: [
          { type: "Khám phá", description: "Dựng điểm √2 trên trục số bằng compa dựa vào nửa đường chéo hình vuông cạnh 2.", teacherGuide: "Minh hoạ tính liên tục của trục số: số vô tỉ cũng có vị trí chính xác trên trục số." },
          { type: "Luyện tập", description: "Tính giá trị tuyệt đối của các số: |-2,3|; |4/7|; |-111|; |-√8|.", teacherGuide: "Nhấn mạnh giá trị tuyệt đối luôn không âm, hai số đối nhau có giá trị tuyệt đối bằng nhau." }
        ],
        keyExercises: [
          { id: "2.13", prompt: "Phân loại các số vào tập B (số hữu tỉ) và C (số vô tỉ): 7,1; -2,(61); 0; 5,14; 4/7; √15; -√81.", answerOrHint: "B = {7,1; -2,(61); 0; 5,14; 4/7; -√81 (vì -√81 = -9)}. C = {√15}." },
          { id: "2.18", prompt: "Tìm tất cả các số thực x thoả mãn |x| = 2,5.", answerOrHint: "x = 2,5 hoặc x = -2,5." }
        ]
      }
    ],
    innovations: [
      "Chỉ định nghĩa 'Căn bậc hai số học' (không âm) để tránh nhầm lẫn với hai căn bậc hai của số dương trong đại số.",
      "Đưa khái niệm độ chính xác d gắn với quy tắc làm tròn (làm tròn đến hàng có độ chính xác d/2) - chuẩn quốc tế.",
      "Trực quan hoá định lí hình học: lấy compa quay cung tròn bán kính bằng nửa đường chéo hình vuông để xác định điểm √2 trên trục số."
    ],
    commonMistakes: [
      {
        mistake: "Học sinh ngộ nhận mọi số thập phân vô hạn đều là số vô tỉ.",
        reason: "Không phân biệt được giữa vô hạn tuần hoàn (số hữu tỉ) và vô hạn không tuần hoàn (số vô tỉ).",
        solution: "Cho học sinh phân tích sự tồn tại của chu kì lặp lại (ví dụ 0,333... = 1/3 là số hữu tỉ; còn 0,1010010001... không có chu kì nên là số vô tỉ)."
      },
      {
        mistake: "Cho rằng |-x| luôn là số dương với mọi x, hoặc |-2,5| = -2,5.",
        reason: "Hiểu lầm dấu trừ bên trong giá trị tuyệt đối.",
        solution: "Nhấn mạnh ý nghĩa hình học: giá trị tuyệt đối là khoảng cách từ điểm đến số 0 trên trục số, khoảng cách không bao giờ âm."
      }
    ],
    pedagogicalTips: [
      "Sử dụng thước dây, giấy kẻ ô li để học sinh tự kiểm nghiệm căn bậc hai số học.",
      "Tận dụng sơ đồ tư duy phân loại số thực (Hộp kiến thức trang 66 SGV) để học sinh tổng kết toàn bộ hệ thống số từ N → Z → Q → R."
    ]
  },
  {
    id: "chuong-3",
    volume: 1,
    number: "III",
    title: "Góc và đường thẳng song song",
    periods: 11,
    strand: "Hình học và Đo lường",
    summary: "Khái niệm góc kề bù, góc đối đỉnh, tia phân giác của một góc, hai đường thẳng song song và dấu hiệu nhận biết, tiên đề Euclid, định lí và chứng minh định lí.",
    keyObjectives: [
      "Nhận biết và tính toán số đo hai góc kề bù, hai góc đối đỉnh.",
      "Nhận biết tia phân giác của một góc và cách vẽ bằng thước đo góc, thước thẳng và compa.",
      "Nhận biết các cặp góc so le trong, đồng vị tạo bởi một đường thẳng cắt hai đường thẳng.",
      "Nắm vững dấu hiệu nhận biết hai đường thẳng song song và tiên đề Euclid.",
      "Hiểu cấu trúc của một định lí (Giả thiết - Kết luận) và bước đầu tập dượt lập luận chứng minh định lí."
    ],
    lessons: [
      {
        number: "Bài 8",
        title: "Góc ở vị trí đặc biệt. Tia phân giác của một góc",
        periods: 2,
        terms: ["Hai góc kề bù", "Hai góc đối đỉnh", "Tia phân giác"],
        coreKnowledge: ["Hai góc kề bù có tổng số đo bằng 180°.", "Hai góc đối đỉnh thì bằng nhau.", "Tia phân giác chia một góc thành hai góc bằng nhau."],
        openingProblem: "Khi đặt các dây lạt để cắt bánh chưng, các dây lạt tạo ra trên mặt bánh chưng những cặp góc đặc biệt như thế nào?",
        activities: [
          { type: "Khám phá", description: "HĐ1, HĐ2: Quan sát hình bánh chưng và hình hai tia đối nhau Ox, Oy để nhận xét về cạnh chung và tổng số đo góc.", teacherGuide: "Dẫn dắt đến định nghĩa: có một cạnh chung, hai cạnh còn lại là hai tia đối nhau." },
          { type: "Thực hành", description: "Gấp giấy để tạo tia phân giác của một góc xOy; vẽ tia phân giác 34° bằng thước đo góc.", teacherGuide: "Giúp học sinh trải nghiệm cả hai phương pháp: gấp giấy trực quan và dùng dụng cụ đo vẽ chính xác." }
        ],
        keyExercises: [
          { id: "3.1", prompt: "Kể tên các cặp góc kề bù trong hình 3.13.", answerOrHint: "Góc mOx và góc xOn; góc AMB và góc BMC." },
          { id: "3.5", prompt: "Cho hai đường thẳng cắt nhau, góc xBm = 36°. Tính các góc còn lại.", answerOrHint: "Góc đối đỉnh yBn = 36°; hai góc kề bù mBy = nBx = 180° - 36° = 144°." }
        ]
      },
      {
        number: "Bài 9",
        title: "Hai đường thẳng song song và dấu hiệu nhận biết",
        periods: 2,
        terms: ["Góc so le trong", "Góc đồng vị", "Dấu hiệu song song"],
        coreKnowledge: ["Nếu đường thẳng c cắt a và b tạo ra một cặp góc so le trong bằng nhau (hoặc đồng vị bằng nhau) thì a // b.", "Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì song song."],
        openingProblem: "Để kiểm tra các thanh ngang trên mái nhà đã song song với nhau chưa, người thợ chỉ cần kiểm tra xem chúng có cùng vuông góc với một thanh dọc hay không. Vì sao?",
        activities: [
          { type: "Khám phá", description: "Đánh số 1, 2, 3, 4 tại hai đỉnh A và B bị cắt bởi đường thẳng c để nhận biết vị trí 'so le trong' và 'đồng vị'.", teacherGuide: "Dạy học sinh mẹo trực quan: chữ Z cho góc so le trong, chữ F cho góc đồng vị." },
          { type: "Thực hành", description: "Dùng góc nhọn 60° của êke để vẽ đường thẳng b song song với a đi qua điểm A cho trước.", teacherGuide: "Thực hiện 4 bước tịnh tiến thước êke dọc theo mép thước thẳng." }
        ],
        keyExercises: [
          { id: "3.7", prompt: "Quan sát hình 3.25, biết MEF = 40°, EMN = 40°. Giải thích tại sao EF // NM.", answerOrHint: "Hai góc MEF và EMN ở vị trí so le trong và bằng nhau (= 40°) nên EF // NM." },
          { id: "3.8", prompt: "Giải thích tại sao AB // DC nếu cả AB và DC đều vuông góc với AD.", answerOrHint: "Hai đường thẳng phân biệt cùng vuông góc với đường thẳng AD nên chúng song song với nhau." }
        ]
      },
      {
        number: "Bài 10",
        title: "Tiên đề Euclid. Tính chất của hai đường thẳng song song",
        periods: 2,
        terms: ["Tiên đề Euclid", "Tính chất hai đường thẳng song song"],
        coreKnowledge: ["Qua một điểm ở ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó.", "Nếu một đường thẳng cắt hai đường thẳng song song thì: hai góc so le trong bằng nhau, hai góc đồng vị bằng nhau."],
        openingProblem: "Qua điểm M nằm ngoài đường thẳng a, có thể vẽ được bao nhiêu đường thẳng song song với a?",
        activities: [
          { type: "Khám phá", description: "Vẽ đường thẳng b đi qua M // a, vẽ tiếp c đi qua M // a. Nhận xét vị trí b và c.", teacherGuide: "Khẳng định tính duy nhất của đường thẳng song song (tiên đề Euclid)." },
          { type: "Luyện tập", description: "Áp dụng tiên đề Euclid chứng minh: Nếu c cắt a thì c cũng cắt b (khi a // b).", teacherGuide: "Dùng phương pháp phản chứng đơn giản: nếu c không cắt b thì c // b, khi đó qua giao điểm có 2 đường song song với b (vô lí)." }
        ],
        keyExercises: [
          { id: "3.18", prompt: "Cho hình 3.40 có góc B = 70°, A = 70°. Giải thích tại sao Am // By và tính CDm.", answerOrHint: "a) Hai góc so le trong bằng nhau (= 70°) nên Am // By. b) CDm = tCy = 120° (hai góc đồng vị)." }
        ]
      },
      {
        number: "Bài 11",
        title: "Định lí và chứng minh định lí",
        periods: 1,
        terms: ["Định lí", "Giả thiết (GT)", "Kết luận (KL)", "Chứng minh định lí"],
        coreKnowledge: ["Định lí là một khẳng định suy ra từ những khẳng định đúng đã biết, dạng: 'Nếu ... thì ...'", "Phần giữa 'Nếu' và 'thì' là Giả thiết; phần sau 'thì' là Kết luận.", "Chứng minh định lí là dùng lập luận từ GT và các khẳng định đúng để suy ra KL."],
        openingProblem: "Đo đạc chỉ cho kết quả gần đúng trong một trường hợp cụ thể. Làm cách nào để chắc chắn tính chất luôn đúng trong mọi trường hợp?",
        activities: [
          { type: "Đọc hiểu", description: "Phân tích cấu trúc GT và KL của định lí 'Hai góc đối đỉnh thì bằng nhau'.", teacherGuide: "Hướng dẫn học sinh đóng khung và viết tóm tắt GT, KL bằng kí hiệu toán học." },
          { type: "Luyện tập", description: "Tập suy luận chứng minh định lí hai góc đối đỉnh bằng cách mượn góc kề bù trung gian.", teacherGuide: "O₁ + O₃ = 180° và O₂ + O₃ = 180° ⇒ O₁ = O₂." }
        ],
        keyExercises: [
          { id: "3.24", prompt: "Có thể coi định lí 'Hai đường thẳng cùng vuông góc với đường thẳng thứ ba thì song song' suy ra trực tiếp từ dấu hiệu nhận biết không?", answerOrHint: "Có, vì khi cắt đường thẳng thứ ba, chúng tạo ra các góc vuông đồng vị (90° = 90°)." },
          { id: "3.26", prompt: "Đánh giá khẳng định: (1) Nếu Ot là phân giác của xOy thì xOt = tOy. (2) Nếu xOt = tOy thì Ot là phân giác.", answerOrHint: "(1) Đúng. (2) Không đúng nếu không có điều kiện Ot nằm giữa hai tia Ox, Oy (ví dụ: tia đối của tia phân giác)." }
        ]
      }
    ],
    innovations: [
      "Bỏ tiên đề 'nửa mặt phẳng', tiếp cận góc và đường thẳng song song hoàn toàn bằng trực quan và dụng cụ thực hành (êke, giấy gấp).",
      "Đưa phần 'Định lí và chứng minh định lí' thành một bài học độc lập, giúp học sinh lần đầu làm quen với phương pháp lập luận toán học có cấu trúc GT - KL bài bản.",
      "Giới thiệu câu chuyện lịch sử toán học về nhà bác học Euclid và câu nói bất hủ với vua Ptolemy: 'Trong Hình học không có con đường dành riêng cho vua chúa'."
    ],
    commonMistakes: [
      {
        mistake: "Nhầm lẫn giữa 'Dấu hiệu nhận biết hai đường thẳng song song' và 'Tính chất của hai đường thẳng song song'.",
        reason: "Học sinh dùng lẫn lộn chiều suy luận: từ song song suy ra góc bằng nhau hay từ góc bằng nhau suy ra song song.",
        solution: "Vẽ sơ đồ mũi tên 2 chiều: Dấu hiệu (Góc bằng nhau → a // b) và Tính chất (a // b → Góc bằng nhau)."
      },
      {
        mistake: "Viết giả thiết - kết luận bằng cả một đoạn văn xuôi dài thay vì kí hiệu toán học.",
        reason: "Chưa quen với ngôn ngữ hình học rút gọn.",
        solution: "Cho học sinh kẻ bảng mẫu 2 cột: Cột trái GT (kí hiệu toán), Cột phải KL kèm hình vẽ tương ứng."
      }
    ],
    pedagogicalTips: [
      "Cho học sinh thực hành vẽ hình song song bằng êke nhiều lần trên bảng và trong vở.",
      "Sử dụng phản ví dụ (như câu hỏi của bạn Tròn ở mục Tranh luận trang 42) để học sinh tự phát hiện lỗ hổng suy luận."
    ]
  },
  {
    id: "chuong-4",
    volume: 1,
    number: "IV",
    title: "Tam giác bằng nhau",
    periods: 14,
    strand: "Hình học và Đo lường",
    summary: "Định lí tổng các góc trong một tam giác (180°), định nghĩa hai tam giác bằng nhau, ba trường hợp bằng nhau cơ bản (c-c-c, c-g-c, g-c-g), các trường hợp bằng nhau của tam giác vuông, tam giác cân và đường trung trực của đoạn thẳng.",
    keyObjectives: [
      "Chứng minh và vận dụng định lí tổng ba góc của tam giác bằng 180°.",
      "Nhận biết góc ngoài của tam giác và tính chất bằng tổng hai góc trong không kề với nó.",
      "Nắm vững định nghĩa và kí hiệu hai tam giác bằng nhau tương ứng các đỉnh.",
      "Thành thạo 3 trường hợp bằng nhau: cạnh - cạnh - cạnh (c.c.c), cạnh - góc - cạnh (c.g.c), góc - cạnh - góc (g.c.g).",
      "Nắm vững các trường hợp bằng nhau của tam giác vuông (2 cạnh góc vuông, cạnh góc vuông - góc nhọn, cạnh huyền - góc nhọn, cạnh huyền - cạnh góc vuông).",
      "Hiểu định nghĩa và tính chất của tam giác cân, tam giác đều; định nghĩa và tính chất đường trung trực của đoạn thẳng."
    ],
    lessons: [
      {
        number: "Bài 12",
        title: "Tổng các góc trong một tam giác",
        periods: 1,
        terms: ["Tam giác nhọn", "Tam giác tù", "Tam giác vuông", "Cạnh huyền", "Cạnh góc vuông", "Hai góc phụ nhau"],
        coreKnowledge: ["Tổng ba góc trong một tam giác bằng 180°.", "Trong tam giác vuông, hai góc nhọn phụ nhau (tổng bằng 90°).", "Góc ngoài của tam giác bằng tổng hai góc trong không kề."],
        openingProblem: "Người ta lát các viên gạch tam giác giống hệt nhau kín sàn nhà. Nhận xét về ba góc tại mỗi đỉnh chung để suy ra 3 điểm A, B, C thẳng hàng.",
        activities: [
          { type: "Khám phá", description: "Cắt 3 góc của một tam giác giấy và ghép lại trên một đường thẳng để tạo thành góc bẹt 180°.", teacherGuide: "Từ thực nghiệm trực quan ghép giấy, hướng dẫn chứng minh chặt chẽ bằng cách kẻ đường thẳng xy // BC qua đỉnh A." }
        ],
        keyExercises: [
          { id: "4.1", prompt: "Tính các góc x, y, z trong hình 4.6 (tam giác có góc 120° và 35°; tam giác vuông có góc 55°).", answerOrHint: "x = 180° - 120° - 35° = 25°; góc tam giác vuông y = 90° - 55° = 35°." }
        ]
      },
      {
        number: "Bài 13",
        title: "Hai tam giác bằng nhau. Trường hợp thứ nhất: Cạnh - Cạnh - Cạnh (c.c.c)",
        periods: 2,
        terms: ["Hai tam giác bằng nhau", "Đỉnh tương ứng", "Cạnh tương ứng", "Trường hợp c.c.c"],
        coreKnowledge: ["Hai tam giác bằng nhau khi có các cạnh tương ứng bằng nhau và các góc tương ứng bằng nhau.", "Trường hợp c.c.c: Nếu 3 cạnh của tam giác này bằng 3 cạnh của tam giác kia thì hai tam giác đó bằng nhau."],
        openingProblem: "Làm thế nào kiểm tra hai tam giác có bằng nhau không mà không cần đo đủ cả 3 cạnh và 3 góc?",
        activities: [
          { type: "Khám phá", description: "Dùng thước và compa dựng tam giác ABC có AB=5cm, AC=4cm, BC=6cm. So sánh với tam giác của bạn khác.", teacherGuide: "Khẳng định: chỉ cần 3 cạnh bằng nhau thì các góc tự động bằng nhau." }
        ],
        keyExercises: [
          { id: "4.6", prompt: "Cho hình 4.20 có AB = CB, AD = CD, góc DAB = 90°, BDC = 30°. a) Chứng minh ΔABD = ΔCBD. b) Tính góc ABC.", answerOrHint: "a) ΔABD = ΔCBD (c.c.c) vì có BD chung. b) Góc ABC = 120°." }
        ]
      },
      {
        number: "Bài 14",
        title: "Trường hợp bằng nhau thứ hai (c.g.c) và thứ ba (g.c.g)",
        periods: 2,
        terms: ["Góc xen giữa", "Cạnh kề", "Trường hợp c.g.c", "Trường hợp g.c.g"],
        coreKnowledge: ["c.g.c: Hai cạnh và góc XEN GIỮA của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia.", "g.c.g: Một cạnh và hai góc KỀ của tam giác này bằng một cạnh và hai góc kề của tam giác kia."],
        openingProblem: "Nếu góc không xen giữa hai cạnh thì hai tam giác có bằng nhau không?",
        activities: [
          { type: "Thử thách nhỏ", description: "Phản biện ý kiến của bạn Lan: 'Nếu tam giác có một cạnh cùng một góc kề và một góc đối diện bằng nhau thì bằng nhau?'.", teacherGuide: "Bạn Lan nói ĐÚNG vì tổng 3 góc bằng 180°, biết 2 góc thì góc thứ ba cũng bằng nhau, đưa về trường hợp g.c.g." }
        ],
        keyExercises: [
          { id: "4.13", prompt: "Cho hai đoạn thẳng AC và BD cắt nhau tại trung điểm O. Chứng minh: a) Các cặp tam giác bằng nhau; b) ΔDAB = ΔBCD.", answerOrHint: "a) ΔOAB = ΔOCD (c.g.c); ΔOAD = ΔOCB (c.g.c). b) Suy ra AB = CD, AD = BC ⇒ ΔDAB = ΔBCD (c.c.c)." }
        ]
      },
      {
        number: "Bài 15",
        title: "Các trường hợp bằng nhau của tam giác vuông",
        periods: 2,
        terms: ["Cạnh huyền - góc nhọn", "Cạnh huyền - cạnh góc vuông", "Hai cạnh góc vuông"],
        coreKnowledge: ["Tam giác vuông đã có sẵn góc vuông bằng nhau, nên chỉ cần 2 yếu tố.", "Đặc biệt: Cạnh huyền - cạnh góc vuông (trường hợp đặc biệt chỉ đúng cho tam giác vuông)."],
        openingProblem: "Hai chiếc cột dựng thẳng đứng cạnh nhau, chiều cao bằng nhau. Vào buổi chiều, bóng của hai cột có bằng nhau không?",
        activities: [
          { type: "Vận dụng", description: "Giải thích bóng hai cột bằng nhau dựa vào trường hợp tam giác vuông có 1 cạnh góc vuông và 1 góc nhọn kề bằng nhau.", teacherGuide: "Chiếc cột và bóng tạo thành 2 cạnh góc vuông của tam giác vuông." }
        ],
        keyExercises: [
          { id: "4.21", prompt: "Cho hình 4.56, biết AB = CD, góc BAC = BDC = 90°. Chứng minh ΔABE = ΔDCE.", answerOrHint: "Chứng minh góc AEB = DEC (đối đỉnh) ⇒ góc ABE = DCE, cạnh góc vuông - góc nhọn kề." }
        ]
      },
      {
        number: "Bài 16",
        title: "Tam giác cân. Đường trung trực của đoạn thẳng",
        periods: 2,
        terms: ["Tam giác cân", "Cạnh bên", "Cạnh đáy", "Góc ở đáy", "Góc ở đỉnh", "Đường trung trực", "Trục đối xứng"],
        coreKnowledge: ["Tam giác cân có hai cạnh bằng nhau và hai góc ở đáy bằng nhau.", "Tam giác đều có 3 cạnh bằng nhau, 3 góc bằng 60°.", "Đường thẳng vuông góc với đoạn thẳng tại trung điểm là đường trung trực. Mọi điểm trên đường trung trực cách đều hai mút."],
        openingProblem: "Kiến trúc sư thiết kế mái nhà tam giác cân tỉ lệ 1:100. Làm thế nào để xác định chính xác đỉnh C của mái nhà?",
        activities: [
          { type: "Khám phá", description: "Gấp tờ giấy A4 sao cho hai điểm A và B trùng nhau, nếp gấp d chính là đường trung trực của AB.", teacherGuide: "Minh hoạ trực quan tính chất đối xứng và khoảng cách MA = MB." }
        ],
        keyExercises: [
          { id: "4.24", prompt: "Cho tam giác ABC cân tại A, M là trung điểm BC. Chứng minh AM vuông góc với BC và AM là phân giác góc BAC.", answerOrHint: "ΔABM = ΔACM (c.c.c) ⇒ góc BAM = CAM (phân giác) và góc AMB = AMC = 90° (vuông góc)." }
        ]
      }
    ],
    innovations: [
      "Tách 'Các trường hợp bằng nhau của tam giác vuông' thành một bài riêng (Bài 15) giúp học sinh có đủ thời gian rèn luyện, không bị ngộp kiến thức.",
      "Tích hợp đường trung trực vào cùng bài tam giác cân vì đường cao đồng thời là trung trực, gắn kết chặt chẽ tính chất cách đều hai mút.",
      "Không yêu cầu chứng minh định lí trường hợp Cạnh huyền - Cạnh góc vuông bằng đại số phức tạp, mà thông qua thực nghiệm dựng hình compa cắt cung tròn."
    ],
    commonMistakes: [
      {
        mistake: "Áp dụng trường hợp c.g.c nhưng góc không xen giữa hai cạnh đã cho.",
        reason: "Chỉ thấy có 2 cạnh và 1 góc bằng nhau là vội vàng kết luận bằng nhau.",
        solution: "Bắt buộc học sinh phải kiểm tra: đỉnh của góc bằng nhau có phải là điểm chung của hai cạnh bằng nhau hay không."
      },
      {
        mistake: "Viết sai thứ tự tương ứng các đỉnh khi viết kí hiệu tam giác bằng nhau (ví dụ: ΔABC = ΔDFE thay vì ΔDEF).",
        reason: "Thiếu cẩn thận khi đối chiếu góc và cạnh tương ứng.",
        solution: "Quy tắc: đối diện với cạnh dài nhất phải là góc lớn nhất; đỉnh tương ứng với đỉnh nào thì viết cùng vị trí 1, 2, 3."
      }
    ],
    pedagogicalTips: [
      "Cho học sinh thực hành gấp giấy cắt dán tam giác để trực quan hoá hai tam giác 'chồng khít lên nhau'.",
      "Khuyến khích học sinh giải các bài toán đo khoảng cách thực tế không tới được (như đo chiều rộng khúc sông bằng tam giác bằng nhau)."
    ]
  },
  {
    id: "chuong-5",
    volume: 1,
    number: "V",
    title: "Thu thập và biểu diễn dữ liệu",
    periods: 11,
    strand: "Thống kê và Xác suất",
    summary: "Phương pháp thu thập và phân loại dữ liệu (dữ liệu là số / không là số, có thể sắp thứ tự / không thể sắp thứ tự), tính đại diện của dữ liệu, biểu đồ hình quạt tròn và biểu đồ đoạn thẳng.",
    keyObjectives: [
      "Thực hiện và lí giải việc thu thập, phân loại dữ liệu theo các tiêu chí cho trước.",
      "Giải thích được tính hợp lí và tính đại diện của dữ liệu (tránh mẫu thiên vị).",
      "Đọc và mô tả thành thạo dữ liệu từ biểu đồ hình quạt tròn (pie chart) và biểu đồ đoạn thẳng (line graph).",
      "Biểu diễn dữ liệu vào biểu đồ quạt tròn (cho sẵn hình quạt) và biểu đồ đoạn thẳng.",
      "Phân tích dữ liệu, nhận ra vấn đề hoặc quy luật đơn giản từ biểu đồ để đưa ra dự đoán thực tế."
    ],
    lessons: [
      {
        number: "Bài 17",
        title: "Thu thập và phân loại dữ liệu",
        periods: 2,
        terms: ["Dữ liệu là số (định lượng)", "Dữ liệu không là số (định tính)", "Tính đại diện của dữ liệu"],
        coreKnowledge: ["Dữ liệu số có thể sắp thứ tự tăng/giảm.", "Dữ liệu không là số chia làm 2 loại: có thể sắp thứ tự (xếp loại Giỏi, Khá, TB) và không thể sắp thứ tự (tên tỉnh thành, màu sắc).", "Mẫu khảo sát phải có tính đại diện cho toàn bộ tổng thể, không được chọn thiên lệch."],
        openingProblem: "Đài truyền hình muốn nâng cao chất lượng chương trình cho thanh thiếu niên, làm thế nào để biết đánh giá và sở thích của khán giả?",
        activities: [
          { type: "Khám phá", description: "Lập bảng hỏi phỏng vấn các bạn trong tổ về thời gian xem tivi và mức độ hấp dẫn.", teacherGuide: "Dẫn dắt học sinh phân loại các câu trả lời thành 3 nhóm dữ liệu." },
          { type: "Tranh luận", description: "Bạn An ghi tuyến xe buýt: 01, 02, 12, 15. Vuông bảo là dãy số liệu, Tròn bảo không phải số liệu. Bạn ủng hộ ai?", teacherGuide: "Ủng hộ TRÒN. Vì số 01, 02 chỉ là TÊN GỌI của tuyến xe buýt, không có ý nghĩa về độ lớn số lượng hay tính toán cộng trừ." },
          { type: "Khám phá", description: "Vuông phát phiếu cho các bạn lên thư viện; Tròn chọn ngẫu nhiên mỗi lớp 10 bạn để phát phiếu. Cách nào đại diện?", teacherGuide: "Cách của TRÒN có tính đại diện vì khảo sát toàn trường mà chỉ hỏi người lên thư viện thì dữ liệu bị thiên lệch." }
        ],
        keyExercises: [
          { id: "5.1", prompt: "Xác định loại dữ liệu: a) Bạn có cho rằng đọc sách là thói quen tốt? b) Ca sĩ Việt Nam nào bạn thích nhất?", answerOrHint: "a) Dữ liệu không là số, có thể sắp thứ tự (Rất đồng ý > Đồng ý > Không đồng ý). b) Dữ liệu không là số, không thể sắp thứ tự." },
          { id: "5.4", prompt: "Khu dân cư 5000 hộ, phỏng vấn các hộ số 1, 11, 21, ..., 4991. Dữ liệu có tính đại diện không?", answerOrHint: "Có tính đại diện vì các hộ được chọn cách đều, ngẫu nhiên trên toàn bộ danh sách 5000 hộ." }
        ]
      },
      {
        number: "Bài 18",
        title: "Biểu đồ hình quạt tròn",
        periods: 3,
        terms: ["Biểu đồ hình quạt tròn", "Hình quạt", "Tỉ lệ phần trăm"],
        coreKnowledge: ["Biểu đồ quạt tròn dùng để so sánh các phần trong toàn bộ dữ liệu (tổng ứng với 100%).", "Hình quạt càng lớn biểu diễn số liệu càng lớn; 1/2 hình tròn ứng với 50%, 1/4 ứng với 25%."],
        openingProblem: "Báo cáo tổng hợp phòng chống tai nạn thương tích ở trẻ em: Đuối nước 48%, Tai nạn giao thông 28%, Ngã 20%, Ngộ độc 2%, Khác 2%. Biểu diễn biểu đồ nào trực quan nhất?",
        activities: [
          { type: "Khám phá", description: "Đọc biểu đồ quạt tròn về tỉ lệ các loại kem bán trong một ngày (Đậu xanh 16,7%, Ốc quế 25%, Sôcôla 33,3%, Sữa dừa 25%).", teacherGuide: "Nhận biết các thành phần: Tiêu đề, Hình tròn chia quạt màu, Chú giải tỉ lệ." },
          { type: "Luyện tập", description: "Tô màu các hình quạt đã chia sẵn theo tỉ lệ dự đoán đội vô địch khối 7: 7A (15%), 7B (30%), 7C (20%), 7D (35%).", teacherGuide: "Mỗi nan quạt nhỏ ứng với 5%, học sinh đếm số nan để tô màu." }
        ],
        keyExercises: [
          { id: "5.8", prompt: "Đội hiến máu gồm 200 tình nguyện viên. Tỉ lệ nhóm máu: A 20%, B 30%, AB 10%, O 40%. Tính số người mỗi nhóm máu.", answerOrHint: "Máu A: 200 · 20% = 40 người; Máu B: 60 người; Máu AB: 20 người; Máu O: 80 người." }
        ]
      },
      {
        number: "Bài 19",
        title: "Biểu đồ đoạn thẳng",
        periods: 3,
        terms: ["Biểu đồ đoạn thẳng", "Trục ngang", "Trục đứng", "Xu thế thay đổi"],
        coreKnowledge: ["Biểu đồ đoạn thẳng dùng để biểu diễn sự thay đổi của một đại lượng theo thời gian.", "Độ dốc của đoạn thẳng cho biết tốc độ tăng/giảm của đại lượng."],
        openingProblem: "Sự thay đổi dân số Việt Nam qua 5 lần tổng điều tra từ 1979 đến 2019 biểu diễn bằng biểu đồ đoạn thẳng.",
        activities: [
          { type: "Khám phá", description: "Quan sát biểu đồ dân số VN: 1979 (54,7 tr) → 1989 (64,4 tr) → 1999 (76,3 tr) → 2009 (85,8 tr) → 2019 (96,2 tr).", teacherGuide: "Nhận xét xu thế: Dân số nước ta liên tục tăng qua các mốc thời gian." },
          { type: "Thực hành", description: "Các bước vẽ biểu đồ đoạn thẳng: Vẽ trục ngang (thời gian), trục đứng (đại lượng), chấm điểm toạ độ và nối các điểm.", teacherGuide: "Lưu ý gốc trục đứng có thể không bắt đầu từ 0 nếu số liệu ban đầu rất lớn (như tuổi thọ từ 65 đến 77 tuổi)." }
        ],
        keyExercises: [
          { id: "5.10", prompt: "Kỉ lục chạy cự li 100m từ 1912 đến 2009. Kỉ lục năm 1991 là bao nhiêu? Từ 1912 đến 2009 giảm bao nhiêu giây?", answerOrHint: "Năm 1991 là 9,86 giây. Giảm được: 10,6 - 9,58 = 1,02 giây." }
        ]
      }
    ],
    innovations: [
      "Đưa khái niệm 'tính đại diện của mẫu khảo sát' - đây là nội dung cốt lõi của thống kê hiện đại nhằm rèn luyện tư duy phê phán các số liệu giật gân, quảng cáo sai sự thật.",
      "Phân biệt rõ ràng giữa 'dãy số' và 'dãy số liệu' (ví dụ số hiệu xe buýt, số nhà, số CCCD không phải là số liệu toán học).",
      "Có tiết thực hành trên máy tính với Microsoft Excel để vẽ biểu đồ quạt tròn và biểu đồ đoạn thẳng."
    ],
    commonMistakes: [
      {
        mistake: "Vẽ biểu đồ đoạn thẳng có các mốc thời gian không cách đều nhau nhưng chia khoảng cách trên trục hoành bằng nhau.",
        reason: "Cứ mỗi số liệu lại chia 1 vạch cách đều trên trục hoành.",
        solution: "Nhắc nhở học sinh: nếu khoảng cách năm không đều (ví dụ 1980 đến 1990 là 10 năm, nhưng 1990 đến 1995 là 5 năm) thì tỉ lệ khoảng cách trên trục hoành phải tương ứng."
      }
    ],
    pedagogicalTips: [
      "Cho học sinh tự thực hiện dự án nhỏ: khảo sát môn thể thao yêu thích hoặc thời gian dùng mạng internet của lớp, tự thu thập, lập bảng và vẽ biểu đồ.",
      "Hướng dẫn học sinh nhận định xu thế qua độ dốc của đoạn thẳng."
    ]
  },
  {
    id: "chuong-6",
    volume: 2,
    number: "VI",
    title: "Tỉ lệ thức và đại lượng tỉ lệ",
    periods: 12,
    strand: "Số và Đại số",
    summary: "Tỉ lệ thức, tính chất của dãy tỉ số bằng nhau, đại lượng tỉ lệ thuận và đại lượng tỉ lệ nghịch, các bài toán thực tiễn giải bằng tỉ lệ thức.",
    keyObjectives: [
      "Nhận biết tỉ lệ thức và các tính chất cơ bản (ad = bc; tính chất hoán vị).",
      "Vận dụng tính chất của dãy tỉ số bằng nhau: a/b = c/d = (a ± c)/(b ± d).",
      "Nhận biết hai đại lượng tỉ lệ thuận (y = ax, a ≠ 0) và tỉ lệ nghịch (y = a/x).",
      "Giải quyết các bài toán chia phần tỉ lệ trong kinh doanh, pha trộn hoá chất, năng suất lao động."
    ],
    lessons: [
      {
        number: "Bài 20",
        title: "Tỉ lệ thức",
        periods: 2,
        terms: ["Tỉ lệ thức", "Ngoại tỉ", "Trung tỉ"],
        coreKnowledge: ["Tỉ lệ thức là đẳng thức của hai tỉ số: a/b = c/d.", "Nếu a/b = c/d thì ad = bc."],
        openingProblem: "Lá cờ Tổ quốc trên đỉnh Lũng Cú rộng 6m, dài 9m. Lá cờ ở sân trường rộng 0,8m, dài 1,2m. Kích thước hai lá cờ có cùng tỉ lệ không?",
        activities: [
          { type: "Khám phá", description: "Tính tỉ số 6/9 = 2/3 và 0,8/1,2 = 2/3. Kết luận hai tỉ số bằng nhau.", teacherGuide: "Khái quát hoá thành tỉ lệ thức a/b = c/d." }
        ],
        keyExercises: [
          { id: "6.1", prompt: "Từ các tỉ số đã cho, kiểm tra có lập được tỉ lệ thức hay không: 4:20 và 0,5:1,25.", answerOrHint: "4/20 = 1/5 = 0,2; 0,5/1,25 = 2/5 = 0,4. Không lập được tỉ lệ thức." }
        ]
      },
      {
        number: "Bài 21",
        title: "Tính chất của dãy tỉ số bằng nhau",
        periods: 1,
        terms: ["Dãy tỉ số bằng nhau"],
        coreKnowledge: ["a/b = c/d = e/f = (a + c + e)/(b + d + f) = (a - c + e)/(b - d + f)."],
        openingProblem: "Ba nhà đầu tư góp vốn theo tỉ lệ 2 : 3 : 4. Cuối năm công ty chia lãi 72 triệu đồng. Mỗi nhà đầu tư nhận bao nhiêu?",
        activities: [
          { type: "Vận dụng", description: "Gọi số tiền lãi là x, y, z. Thiết lập x/2 = y/3 = z/4 và x + y + z = 72.", teacherGuide: "Áp dụng dãy tỉ số bằng nhau: (x+y+z)/(2+3+4) = 72/9 = 8 triệu. Lần lượt được 16, 24, 32 triệu đồng." }
        ],
        keyExercises: [
          { id: "6.7", prompt: "Tìm x và y biết x/9 = y/11 và x + y = 40.", answerOrHint: "x/9 = y/11 = 40/20 = 2 ⇒ x = 18; y = 22." }
        ]
      },
      {
        number: "Bài 22 & 23",
        title: "Đại lượng tỉ lệ thuận và tỉ lệ nghịch",
        periods: 4,
        terms: ["Hệ số tỉ lệ", "Tỉ lệ thuận (y = ax)", "Tỉ lệ nghịch (y = a/x)"],
        coreKnowledge: ["Tỉ lệ thuận: tỉ số hai giá trị tương ứng không đổi y₁/x₁ = y₂/x₂ = a.", "Tỉ lệ nghịch: tích hai giá trị tương ứng không đổi x₁y₁ = x₂y₂ = a."],
        openingProblem: "Bác thợ xây xây tường: số thợ tăng lên thì số ngày hoàn thành tăng hay giảm?",
        activities: [
          { type: "Khám phá", description: "Phân biệt tỉ lệ thuận (quãng đường và thời gian khi vận tốc không đổi) và tỉ lệ nghịch (thời gian và vận tốc trên cùng quãng đường).", teacherGuide: "Nhấn mạnh bản chất: một đại lượng tăng k lần thì đại lượng kia tăng k lần (thuận) hoặc giảm k lần (nghịch)." }
        ],
        keyExercises: [
          { id: "6.15", prompt: "Đội công nhân 45 người dự kiến làm 10 ngày. Muốn xong trong 5 ngày cần bổ sung bao nhiêu người?", answerOrHint: "Tỉ lệ nghịch: x · 5 = 45 · 10 ⇒ x = 90 người. Cần bổ sung thêm: 90 - 45 = 45 người." }
        ]
      }
    ],
    innovations: [
      "Giảm tải yêu cầu học thuộc lòng câu chữ định lí tính chất tỉ lệ thuận/nghịch; chỉ cần hiểu công thức và biết vận dụng vào bài toán thực tế.",
      "Đưa vào nhiều bài toán sản xuất, năng suất lao động, tài chính và chia phần kế hoạch kinh doanh gắn liền với thực tiễn."
    ],
    commonMistakes: [
      {
        mistake: "Nhầm lẫn giữa bài toán tỉ lệ thuận và tỉ lệ nghịch trong việc lập tỉ số.",
        reason: "Học sinh quen tay viết x₁/x₂ = y₁/y₂ ngay cả khi bài toán là tỉ lệ nghịch.",
        solution: "Dạy học sinh luôn đặt câu hỏi tư duy định tính trước: 'Đại lượng này tăng thì đại lượng kia TĂNG hay GIẢM?'."
      }
    ],
    pedagogicalTips: [
      "Cho học sinh làm việc nhóm giải quyết bài toán chia tiền lãi đầu tư thực tế.",
      "Sử dụng bảng giá trị đối ứng để học sinh nhận xét tích hay thương là hằng số."
    ]
  },
  {
    id: "chuong-7",
    volume: 2,
    number: "VII",
    title: "Biểu thức đại số và đa thức một biến",
    periods: 16,
    strand: "Số và Đại số",
    summary: "Biểu thức số, biểu thức đại số, đa thức một biến, thu gọn và sắp xếp đa thức, bậc và hệ số, nghiệm của đa thức, cộng trừ nhân chia đa thức một biến.",
    keyObjectives: [
      "Nhận biết biểu thức đại số, biến số, giá trị của biểu thức đại số.",
      "Hiểu khái niệm đơn thức một biến, đa thức một biến, nghiệm của đa thức một biến.",
      "Thu gọn và sắp xếp đa thức theo luỹ thừa giảm dần (hoặc tăng dần) của biến.",
      "Xác định bậc, hệ số cao nhất, hệ số tự do của đa thức một biến.",
      "Thực hiện thành thạo cả 4 phép tính: cộng, trừ, nhân, chia đa thức một biến (kể cả chia có dư)."
    ],
    lessons: [
      {
        number: "Bài 24",
        title: "Biểu thức đại số",
        periods: 1,
        terms: ["Biểu thức số", "Biểu thức đại số", "Biến số", "Giá trị của biểu thức"],
        coreKnowledge: ["Biểu thức đại số là biểu thức chứa chữ và số nối với nhau bởi các phép tính.", "Tính giá trị bằng cách thay số vào chữ rồi tính."],
        openingProblem: "Ô tô đi với vận tốc 50 km/h. Viết công thức quãng đường theo thời gian t (s = 50t).",
        activities: [
          { type: "Khám phá", description: "Viết biểu thức chu vi hình chữ nhật chiều rộng x, dài hơn rộng 3cm (C = 2(x + x + 3)).", teacherGuide: "Giới thiệu chữ thay cho số để giải quyết bài toán tổng quát." }
        ],
        keyExercises: [
          { id: "7.3", prompt: "Tính giá trị biểu thức: a) 4x + 3 tại x = 5,8; b) y² - 2y + 1 tại y = 2.", answerOrHint: "a) 4 · 5,8 + 3 = 26,2; b) 2² - 2·2 + 1 = 1." }
        ]
      },
      {
        number: "Bài 25",
        title: "Đa thức một biến",
        periods: 3,
        terms: ["Đơn thức một biến", "Đa thức một biến", "Bậc", "Hệ số cao nhất", "Hệ số tự do", "Nghiệm"],
        coreKnowledge: ["Đa thức một biến là tổng của các đơn thức cùng một biến.", "Bậc là số mũ cao nhất của biến trong đa thức thu gọn.", "x = a là nghiệm của P(x) nếu P(a) = 0."],
        openingProblem: "Độ cao của vật ném lên: H(t) = -5t² + 20t. Khi nào vật chạm đất (H(t) = 0)?",
        activities: [
          { type: "Đọc hiểu", description: "Tìm hiểu đa thức P(x) = 6x³ - 5x² - 4x³ + 7. Thu gọn và tìm bậc.", teacherGuide: "Thu gọn thành 2x³ - 5x² + 7. Bậc là 3, hệ số cao nhất là 2, hệ số tự do là 7." },
          { type: "Luyện tập", description: "Kiểm tra x = 1, x = -1 có phải là nghiệm của P(x) = x² - 1 không.", teacherGuide: "Thay vào: P(1) = 0, P(-1) = 0 nên cả 1 và -1 đều là nghiệm." }
        ],
        keyExercises: [
          { id: "7.6", prompt: "Thu gọn và tìm bậc, hệ số: A(x) = -7x⁴ + x³ - 4x² + 2x + 9.", answerOrHint: "Bậc 4, hệ số cao nhất là -7, hệ số tự do là 9." },
          { id: "7.10", prompt: "Chứng minh x = -1/8 là nghiệm của P(x) = 8x + 1.", answerOrHint: "P(-1/8) = 8(-1/8) + 1 = -1 + 1 = 0. Vậy là nghiệm." }
        ]
      },
      {
        number: "Bài 26, 27, 28",
        title: "Cộng, trừ, nhân, chia đa thức một biến",
        periods: 7,
        terms: ["Đặt tính cộng/trừ", "Nhân đa thức", "Chia đa thức có dư", "A = B · Q + R"],
        coreKnowledge: ["Có hai cách cộng/trừ: Nhóm các đơn thức cùng bậc hoặc Đặt tính dọc.", "Phép chia: A = B · Q + R (bậc của R nhỏ hơn bậc của B, nếu R = 0 là chia hết)."],
        openingProblem: "Trò chơi đoán tuổi: Thực hiện chuỗi phép tính nhân chia với ngày sinh để Pi đoán đúng số tuổi.",
        activities: [
          { type: "Thực hành", description: "Đặt tính chia đa thức: (6x³ - 4x² - 12x - 7) : (2x² - 7).", teacherGuide: "Hướng dẫn chia từng bước: chia hạng tử bậc cao nhất, nhân ngược lại rồi trừ; để khoảng trống ở bậc khuyết." }
        ],
        keyExercises: [
          { id: "7.33", prompt: "Thực hiện phép chia: a) (2x⁴ + 12,8x² - 8x) : x; b) (2x³ + 12,8x) : x.", answerOrHint: "a) 2x³ + 12,8x - 8; b) 2x² + 12,8." }
        ]
      }
    ],
    innovations: [
      "Đi thẳng vào đa thức một biến ngay từ đầu, loại bỏ hoàn toàn phần đa thức nhiều biến gây quá tải ở lớp 7.",
      "Đưa phép nhân và phép chia đa thức một biến (kể cả chia có dư) từ lớp 8 xuống lớp 7, tạo sự trọn vẹn của 4 phép tính đại số.",
      "Rèn luyện kĩ năng đặt tính theo cột dọc giống như số tự nhiên ở Tiểu học, giúp học sinh tiếp cận cực kì trực quan và dễ hiểu."
    ],
    commonMistakes: [
      {
        mistake: "Quên đổi dấu các hạng tử khi thực hiện phép trừ đa thức theo hàng ngang: A - B = A - (b₁ + b₂ + ...).",
        reason: "Phá ngoặc mà không đổi dấu các số hạng bên trong.",
        solution: "Khuyến khích học sinh dùng phương pháp đặt tính cột dọc và kiểm tra lại từng cột."
      },
      {
        mistake: "Khi đặt tính chia bị lệch cột do bỏ quên bậc bị khuyết (ví dụ đa thức thiếu x²).",
        reason: "Viết liền các hạng tử mà không chừa khoảng trống cho bậc khuyết.",
        solution: "Quy tắc: luôn chừa khoảng trống hoặc viết thêm + 0x² vào vị trí khuyết."
      }
    ],
    pedagogicalTips: [
      "Dùng PowerPoint hoặc máy chiếu hiển thị từng bước đổi dấu và hạ bậc khi dạy phép chia đa thức.",
      "Liên hệ nghiệm của đa thức với bài toán thực tế chuyển động hoặc tìm thời điểm chạm đất của vật thể."
    ]
  },
  {
    id: "chuong-8",
    volume: 2,
    number: "VIII",
    title: "Làm quen với biến cố và xác suất của biến cố",
    periods: 6,
    strand: "Thống kê và Xác suất",
    summary: "Khái niệm biến cố, phân loại biến cố chắc chắn, biến cố không thể, biến cố ngẫu nhiên; làm quen với xác suất của biến cố trong các trò chơi đơn giản (tung đồng xu, gieo xúc xắc, bốc bóng).",
    keyObjectives: [
      "Nhận biết được các biến cố chắc chắn, biến cố không thể, biến cố ngẫu nhiên.",
      "Nhận biết được xác suất của biến cố chắc chắn bằng 1, biến cố không thể bằng 0.",
      "Tính xác suất của biến cố trong các mô hình đồng khả năng (gieo xúc xắc cân đối, tung đồng xu).",
      "Vận dụng dự đoán xác suất thực nghiệm trong trò chơi may mắn và cuộc sống."
    ],
    lessons: [
      {
        number: "Bài 29",
        title: "Làm quen với biến cố",
        periods: 2,
        terms: ["Biến cố chắc chắn", "Biến cố không thể", "Biến cố ngẫu nhiên"],
        coreKnowledge: ["Biến cố chắc chắn luôn xảy ra.", "Biến cố không thể không bao giờ xảy ra.", "Biến cố ngẫu nhiên có thể xảy ra hoặc không xảy ra tuỳ thuộc kết quả thí nghiệm."],
        openingProblem: "Dự báo mưa bão và hiện tượng sạt lở núi ở Nam Trà My (Quảng Nam). Liệu có thể biết chắc chắn ngày mai có mưa hay không?",
        activities: [
          { type: "Khám phá", description: "Gieo 2 con xúc xắc: Tổng số chấm lớn hơn 1 (chắc chắn); Tổng số chấm bằng 13 (không thể); Tổng bằng 7 (ngẫu nhiên).", teacherGuide: "Dẫn dắt học sinh tự lấy ví dụ về các biến cố trong đời sống hàng ngày." }
        ],
        keyExercises: [
          { id: "8.1", prompt: "Xác định loại biến cố khi bốc thẻ từ hộp chứa thẻ 1 đến 10.", answerOrHint: "Rút được số chẵn: ngẫu nhiên; chia hết cho 3: ngẫu nhiên; chia hết cho 10: ngẫu nhiên; chia hết cho 11: không thể." }
        ]
      },
      {
        number: "Bài 30",
        title: "Làm quen với xác suất của biến cố",
        periods: 2,
        terms: ["Xác suất của biến cố", "Biến cố đồng khả năng"],
        coreKnowledge: ["Xác suất là một con số từ 0 đến 1 đo lường khả năng xảy ra của biến cố.", "Xác suất biến cố chắc chắn = 1; biến cố không thể = 0.", "Nếu có n kết quả đồng khả năng và k kết quả thuận lợi thì xác suất là k/n."],
        openingProblem: "Dự báo thời tiết: Khả năng có mưa hôm nay là 40%. Con số 40% có ý nghĩa gì?",
        activities: [
          { type: "Luyện tập", description: "Gieo một con xúc xắc 6 mặt cân đối. Tính xác suất xuất hiện mặt 2 chấm.", teacherGuide: "Mỗi mặt có khả năng xuất hiện như nhau (đồng khả năng) nên xác suất là 1/6." }
        ],
        keyExercises: [
          { id: "8.7", prompt: "Tính xác suất: a) Con xúc xắc xuất hiện mặt có số chấm < 7; b) Mặt có 7 chấm; c) Mặt có số chấm lẻ.", answerOrHint: "a) Biến cố chắc chắn nên P = 1; b) Biến cố không thể nên P = 0; c) Ba mặt lẻ (1,3,5) trong 6 mặt nên P = 3/6 = 1/2." }
        ]
      }
    ],
    innovations: [
      "Lần đầu tiên nội dung Xác suất được đưa vào lớp 7 theo chuẩn giáo dục hiện đại.",
      "Phương pháp tiếp cận hoàn toàn thông qua trò chơi thực nghiệm (xúc xắc, đồng xu, vòng quay may mắn), tuyệt đối không dùng công thức giải tích tổ hợp phức tạp."
    ],
    commonMistakes: [
      {
        mistake: "Cho rằng xác suất 50% nghĩa là cứ làm 2 lần thì chắc chắn xảy ra 1 lần.",
        reason: "Nhầm lẫn giữa tần số lý thuyết trong vô hạn phép thử với một vài phép thử hữu hạn.",
        solution: "Cho học sinh tung đồng xu 10 lần thực tế để thấy có thể ra 7 ngửa 3 sấp, giải thích tính ngẫu nhiên của từng lần thử."
      }
    ],
    pedagogicalTips: [
      "Chuẩn bị sẵn xúc xắc, túi bóng màu hoặc đồng xu để cả lớp cùng thực hành ngay tại bàn.",
      "Tổ chức trò chơi Vòng quay may mắn (Hoạt động trải nghiệm) để học sinh tự tính toán tỉ lệ trúng thưởng."
    ]
  },
  {
    id: "chuong-9",
    volume: 2,
    number: "IX",
    title: "Quan hệ giữa các yếu tố trong một tam giác",
    periods: 13,
    strand: "Hình học và Đo lường",
    summary: "Quan hệ giữa góc và cạnh đối diện, đường vuông góc và đường xiên, bất đẳng thức tam giác, sự đồng quy của ba đường trung tuyến, ba đường phân giác, ba đường trung trực và ba đường cao trong tam giác.",
    keyObjectives: [
      "Nhận biết và vận dụng: Trong một tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn và ngược lại.",
      "Hiểu tính chất: Đường vuông góc là đoạn ngắn nhất trong các đoạn nối từ một điểm đến đường thẳng.",
      "Nắm vững bất đẳng thức tam giác: Trong một tam giác, độ dài một cạnh luôn bé hơn tổng và lớn hơn hiệu hai cạnh còn lại (|b - c| < a < b + c).",
      "Nhận biết và xác định 4 điểm đồng quy: Trọng tâm (3 trung tuyến), Điểm cách đều 3 cạnh (3 phân giác), Điểm cách đều 3 đỉnh (3 trung trực), Trực tâm (3 đường cao)."
    ],
    lessons: [
      {
        number: "Bài 31 & 32",
        title: "Quan hệ góc - cạnh đối diện & Đường vuông góc - đường xiên",
        periods: 3,
        terms: ["Góc đối diện cạnh", "Cạnh đối diện góc", "Đường vuông góc", "Đường xiên", "Khoảng cách"],
        coreKnowledge: ["Trong tam giác, cạnh đối diện góc tù (hoặc góc vuông) là cạnh lớn nhất.", "Trong các đường xiên và đường vuông góc kẻ từ 1 điểm đến đường thẳng, đường vuông góc ngắn nhất."],
        openingProblem: "Cầu thủ bóng đá ở các vị trí khác nhau chuyền bóng tới khung thành. Ai ở vị trí gần bóng nhất?",
        activities: [
          { type: "Khám phá", description: "Dùng compa vẽ đường tròn tâm A bán kính AB để so sánh trực quan độ dài đường vuông góc AH và đường xiên AM.", teacherGuide: "Dẫn dắt từ góc vuông trong tam giác AHM sang cạnh huyền AM > AH." }
        ],
        keyExercises: [
          { id: "9.1", prompt: "Tam giác ABC có góc A = 105°. Tam giác này là tam giác gì? Cạnh nào dài nhất?", answerOrHint: "Góc A > 90° nên là tam giác tù. Cạnh đối diện góc A là BC nên BC dài nhất." }
        ]
      },
      {
        number: "Bài 33",
        title: "Quan hệ giữa ba cạnh của một tam giác",
        periods: 1,
        terms: ["Bất đẳng thức tam giác"],
        coreKnowledge: ["Trong tam giác ABC: |b - c| < a < b + c.", "Điều kiện để 3 đoạn thẳng a, b, c tạo thành tam giác: a < b + c (với a là cạnh dài nhất)."],
        openingProblem: "Cho ba que tính dài 2cm, 3cm, 5cm. Có ghép được thành một tam giác không?",
        activities: [
          { type: "Khám phá", description: "Học sinh dùng compa thử vẽ tam giác với các cạnh 2, 4, 5 (được) và 2, 3, 5 (không được vì 2 + 3 = 5).", teacherGuide: "Rút ra định lí: tổng hai cạnh phải lớn hơn cạnh thứ ba." }
        ],
        keyExercises: [
          { id: "9.10", prompt: "Bộ ba độ dài nào lập thành tam giác: a) 2, 3, 5; b) 3, 4, 6; c) 2, 4, 5.", answerOrHint: "a) Không (2+3=5); b) Có (6 < 3+4); c) Có (5 < 2+4)." }
        ]
      },
      {
        number: "Bài 34 & 35",
        title: "Sự đồng quy của các đường trong tam giác",
        periods: 4,
        terms: ["Đường trung tuyến", "Trọng tâm G (tỉ lệ 2/3)", "Đường phân giác", "Đường trung trực", "Đường cao", "Trực tâm H"],
        coreKnowledge: ["3 trung tuyến đồng quy tại Trọng tâm G (GA = 2/3 AM).", "3 phân giác đồng quy tại điểm cách đều 3 cạnh.", "3 trung trực đồng quy tại điểm cách đều 3 đỉnh (tâm đường tròn ngoại tiếp).", "3 đường cao đồng quy tại Trực tâm H."],
        openingProblem: "Tìm điểm cân bằng (đặt trên đầu ngón tay không rơi) của một miếng bìa hình tam giác.",
        activities: [
          { type: "Thực hành", description: "Gấp giấy tìm giao điểm của 3 đường trung tuyến và thực hành đặt miếng bìa tam giác lên giá nhọn tại trọng tâm G.", teacherGuide: "Gắn kết kiến thức hình học với Vật lí (trọng tâm vật thể)." }
        ],
        keyExercises: [
          { id: "9.20", prompt: "Biết AM là trung tuyến, G là trọng tâm. Tính tỉ số GA/AM và GA/GM.", answerOrHint: "GA/AM = 2/3; GA/GM = 2." }
        ]
      }
    ],
    innovations: [
      "Bỏ khái niệm 'hình chiếu của đường xiên' để học sinh không bị rối rắm, chứng minh đường vuông góc ngắn nhất trực tiếp qua tam giác vuông.",
      "Gom 4 đường đồng quy thành một mạch logic liên hoàn, kết hợp giữa gấp giấy trực quan và phần mềm GeoGebra quan sát điểm đồng quy khi tam giác thay đổi dạng (nhọn, vuông, tù)."
    ],
    commonMistakes: [
      {
        mistake: "Nhầm lẫn giữa trực tâm (giao 3 đường cao) và trọng tâm (giao 3 đường trung tuyến).",
        reason: "Tên gọi chữ 'T' giống nhau.",
        solution: "Khắc sâu: 'Trung tuyến - Trọng tâm' (chữ T-T), 'Cao - Trực tâm' (như chiều cao trực tiếp)."
      }
    ],
    pedagogicalTips: [
      "Cho học sinh sử dụng phần mềm GeoGebra kéo rê các đỉnh của tam giác để thấy trực tâm H chạy ra ngoài tam giác khi tam giác tù.",
      "Tổ chức hoạt động thực hành cắt dán miếng bìa tam giác để tìm trọng tâm vật lí."
    ]
  },
  {
    id: "chuong-10",
    volume: 2,
    number: "X",
    title: "Một số hình khối trong thực tiễn",
    periods: 9,
    strand: "Hình học và Đo lường",
    summary: "Hình hộp chữ nhật, hình lập phương, hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác; các yếu tố đỉnh, cạnh, mặt đáy, mặt bên; công thức tính diện tích xung quanh và thể tích.",
    keyObjectives: [
      "Mô tả được các yếu tố: đỉnh, cạnh, mặt đáy, mặt bên, đường chéo của hình hộp chữ nhật, lập phương, lăng trụ đứng.",
      "Tạo lập được hình hộp chữ nhật, lập phương, lăng trụ đứng bằng cách gấp tấm bìa trải phẳng.",
      "Tính được diện tích xung quanh và thể tích của hình lăng trụ đứng tam giác, lăng trụ đứng tứ giác: Sxq = Cđáy · h; V = Sđáy · h.",
      "Giải quyết các bài toán thực tiễn: tính tiền sơn tường, tính lượng nước trong bể bơi, làm lều cắm trại, tính thể tích thùng hàng."
    ],
    lessons: [
      {
        number: "Bài 36",
        title: "Hình hộp chữ nhật và hình lập phương",
        periods: 3,
        terms: ["Hình hộp chữ nhật", "Hình lập phương", "Mặt đối diện", "Đường chéo"],
        coreKnowledge: ["Có 8 đỉnh, 12 cạnh, 6 mặt, 4 đường chéo.", "Sxq = 2(a + b) · c; V = a · b · c; Lập phương: V = a³."],
        openingProblem: "Quan sát hai chiếc cột và thùng hàng. Làm sao tính được diện tích vật liệu cần dùng để đóng một chiếc hộp?",
        activities: [
          { type: "Thực hành", description: "Cắt bìa gấp thành hình hộp chữ nhật có kích thước 3cm x 4cm x 5cm.", teacherGuide: "Nhận biết các mặt đáy và mặt bên trên hình khai triển phẳng." }
        ],
        keyExercises: [
          { id: "10.4", prompt: "Thùng xe tải dài 5,6m, rộng 2m, cao 2m. Tính thể tích chở hàng.", answerOrHint: "V = 5,6 · 2 · 2 = 22,4 m³." },
          { id: "10.10", prompt: "Thả 25 viên gạch vào thùng nước kích thước đáy 7dm x 7dm. Hỏi nước dâng thêm bao nhiêu dm?", answerOrHint: "Thể tích 25 viên gạch là 25 dm³. Chiều cao nước dâng: h = 25 : (7 · 7) ≈ 0,51 dm." }
        ]
      },
      {
        number: "Bài 37",
        title: "Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác",
        periods: 3,
        terms: ["Lăng trụ đứng tam giác", "Lăng trụ đứng tứ giác", "Mặt bên (hình chữ nhật)", "Hai đáy song song"],
        coreKnowledge: ["Hai mặt đáy là hai đa giác bằng nhau và song song; các mặt bên là các hình chữ nhật.", "Diện tích xung quanh: Sxq = Chu vi đáy · Chiều cao; Thể tích: V = Diện tích đáy · Chiều cao."],
        openingProblem: "Hình dạng của chiếc lều cắm trại hoặc khối lăng kính: đáy là hình tam giác, các mặt bên dựng đứng.",
        activities: [
          { type: "Thực hành", description: "Gấp giấy làm chân đế lịch để bàn hoặc hộp quà hình lăng trụ đứng tam giác.", teacherGuide: "Hướng dẫn xác định đáy là tam giác và chiều cao lăng trụ là độ dài cạnh bên." }
        ],
        keyExercises: [
          { id: "10.13", prompt: "Hình lăng trụ đứng tam giác có đáy là tam giác vuông hai cạnh 6cm và 8cm, chiều cao 15cm. Tính Sxq và V.", answerOrHint: "Cạnh huyền đáy = 10cm. Chu vi đáy = 24cm ⇒ Sxq = 24 · 15 = 360 cm². Sđáy = (6·8)/2 = 24 cm² ⇒ V = 24 · 15 = 360 cm³." }
        ]
      }
    ],
    innovations: [
      "Đưa lăng trụ đứng tam giác và tứ giác vào lớp 7 theo phương thức trực quan sinh động (cắt, dán, gấp hình), không đòi hỏi chứng minh hình học không gian trừu tượng.",
      "Gắn liền với các hoạt động trải nghiệm STEM: tự làm hộp quà, làm lịch để bàn, tính chi phí sơn nhà, lợp bạt lều trại."
    ],
    commonMistakes: [
      {
        mistake: "Nhầm lẫn giữa chiều cao của tam giác đáy với chiều cao của hình lăng trụ đứng.",
        reason: "Cả hai đều có từ 'chiều cao' nên học sinh thay nhầm vào công thức V = Sđáy · h.",
        solution: "Vẽ hình tách rời: Một bên vẽ riêng đáy tam giác và chiều cao tam giác (h_tam_giác), một bên vẽ hình lăng trụ và chiều cao lăng trụ (h_lăng_trụ)."
      }
    ],
    pedagogicalTips: [
      "Cho học sinh mang các vỏ hộp bánh, lịch chữ A, lều đồ chơi vào lớp để trực quan hoá.",
      "Khuyến khích học sinh dùng công thức Sxq = Cđáy · h để tính nhanh diện tích 4 bức tường khi sơn phòng học."
    ]
  },
  {
    id: "hoat-dong-trai-nghiem",
    volume: 1,
    number: "TN",
    title: "Hoạt động thực hành trải nghiệm",
    periods: 10,
    strand: "Hoạt động trải nghiệm",
    summary: "Gồm 5 chủ đề thực hành trải nghiệm xuyên suốt năm học: Vẽ hình với GeoGebra (Tập 1), Dân số và cơ cấu dân số VN (Tập 1), Đại lượng tỉ lệ trong đời sống (Tập 2), Vòng quay may mắn (Tập 2), Làm hộp quà và chân đế lịch để bàn (Tập 2).",
    keyObjectives: [
      "Ứng dụng công nghệ thông tin (phần mềm GeoGebra Classic 5.0) vẽ đường song song, tia phân giác, tam giác.",
      "Ứng dụng Microsoft Excel nhập số liệu và tự động vẽ biểu đồ quạt tròn, biểu đồ đoạn thẳng phân tích dân số.",
      "Vận dụng toán tài chính cá nhân: quy đổi đơn vị đo lường Anh-Mỹ (inch, foot, mile, pound), tính tiền gửi tiết kiệm theo Quy tắc 72.",
      "Thiết kế trò chơi xác suất thực nghiệm (Vòng quay may mắn) và sản phẩm thủ công hình học (hộp quà, lịch bàn)."
    ],
    lessons: [
      {
        number: "Chủ đề 1",
        title: "Vẽ hình đơn giản với phần mềm GeoGebra",
        periods: 2,
        terms: ["GeoGebra", "Đường thẳng song song", "Phân giác", "Trung trực"],
        coreKnowledge: ["Sử dụng thanh công cụ dựng hình: Đường thẳng qua 2 điểm, Đường song song, Đường phân giác, Đường trung trực, Đường tròn tâm và bán kính."],
        openingProblem: "Vẽ đường thẳng song song bằng bút và thước rất dễ lệch. Làm sao vẽ tuyệt đối chính xác trên máy tính?",
        activities: [
          { type: "Thực hành", description: "Thực hành vẽ tam giác biết 3 cạnh bằng cách giao hai đường tròn trong GeoGebra.", teacherGuide: "Dạy học sinh cách ẩn các đường tròn phụ sau khi đã xác định được đỉnh C." }
        ],
        keyExercises: [
          { id: "TN.1", prompt: "Vẽ tam giác vuông có hai cạnh góc vuông 4cm và 3cm trong GeoGebra, đo độ dài cạnh huyền BC.", answerOrHint: "Dùng công cụ đo khoảng cách: BC = 5 cm (nghiệm số Pythagore)." }
        ]
      },
      {
        number: "Chủ đề 2",
        title: "Dân số và cơ cấu dân số Việt Nam",
        periods: 3,
        terms: ["Cục Thống kê", "Dân số thành thị - nông thôn", "Excel biểu đồ"],
        coreKnowledge: ["Dữ liệu dân số Việt Nam 2020: 97,58 triệu người (Nam 49,8%, Nữ 50,2%; Thành thị 36,8%, Nông thôn 63,2%).", "Các bước tạo Pie Chart và Line Chart trong Excel."],
        openingProblem: "Thu thập số liệu dân số Việt Nam 2011 - 2020 từ cổng thông tin Tổng cục Thống kê và vẽ biểu đồ phân tích.",
        activities: [
          { type: "Thực hành", description: "Mở Microsoft Excel, nhập bảng tỉ phần thị trường điện thoại (Samsung 31%, Oppo 18,6%...), chọn Insert → Pie Chart.", teacherGuide: "Hướng dẫn định dạng nhãn dữ liệu (Data Labels - Best Fit) hiển thị phần trăm rõ ràng." }
        ],
        keyExercises: [
          { id: "TN.2", prompt: "Tính số dân Việt Nam sống ở thành thị năm 2020 biết dân số là 97,58 triệu và tỉ lệ thành thị là 36,8%.", answerOrHint: "Số dân thành thị: 97,58 · 36,8% ≈ 35,91 triệu người." }
        ]
      },
      {
        number: "Chủ đề 3",
        title: "Đại lượng tỉ lệ trong đời sống & Tài chính",
        periods: 2,
        terms: ["Quy tắc 72", "Hệ đo lường Mỹ (inch, foot, pound)", "Lãi suất kép"],
        coreKnowledge: ["Chuyển đổi: 1 inch = 2,54 cm; 1 foot = 12 in = 30,48 cm; 1 pound (lb) ≈ 0,4536 kg.", "Quy tắc 72: Thời gian để số vốn đầu tư tăng gấp đôi xấp xỉ t ≈ 72 / r (r là lãi suất % mỗi năm)."],
        openingProblem: "Tượng Nữ thần Tự do cao 151 ft 1 in, nặng 450 000 lb. Chiều cao và khối lượng theo đơn vị mét và tấn là bao nhiêu?",
        activities: [
          { type: "Vận dụng", description: "Bác Hà gửi tiết kiệm 120 triệu với lãi suất 5,6%/năm. Áp dụng quy tắc 72 tính thời gian tiền tăng gấp đôi.", teacherGuide: "t ≈ 72 / 5,6 ≈ 12,9 năm. Vậy sau khoảng 13 năm số tiền của bác Hà sẽ tăng gấp đôi." }
        ],
        keyExercises: [
          { id: "TN.3", prompt: "Tính chiều dài máy bay Boieng 777 dài 206 ft 1 in ra mét.", answerOrHint: "206 ft 1 in = 206·12 + 1 = 2 473 in = 2 473 · 2,54 = 6 281,42 cm ≈ 63 m." }
        ]
      },
      {
        number: "Chủ đề 4 & 5",
        title: "Vòng quay may mắn & Làm hộp quà thủ công",
        periods: 3,
        terms: ["Xác suất thực nghiệm", "Tạo lập hình khối", "Sản phẩm STEM"],
        coreKnowledge: ["Tự chế tạo vòng quay may mắn 6 ô màu, thực hiện 30 lần quay và ghi lại tần số xuất hiện.", "Thiết kế và dán hộp quà hình lăng trụ đứng."],
        openingProblem: "Làm thế nào để tạo ra một chiếc hộp quà xinh xắn hình lăng trụ tam giác từ một tấm bìa màu cứng?",
        activities: [
          { type: "Thực hành", description: "Vẽ hình trải phẳng gồm 2 đáy tam giác và 3 mặt chữ nhật, chừa mép dán 1cm rồi gấp thành phẩm.", teacherGuide: "Đánh giá sản phẩm học tập theo tiêu chí: độ chắc chắn, tính thẩm mĩ và độ chuẩn xác về kích thước hình học." }
        ],
        keyExercises: [
          { id: "TN.4", prompt: "Tính diện tích bìa cần dùng làm chiếc hộp quà hình lăng trụ tam giác có đáy là tam giác vuông 6cm, 8cm và chiều cao hộp 3cm.", answerOrHint: "S_toàn_phần = Sxq + 2·Sđáy = (6+8+10)·3 + 2·(6·8/2) = 72 + 48 = 120 cm²." }
        ]
      }
    ],
    innovations: [
      "Đưa các ứng dụng toán tài chính hiện đại (quy tắc 72 trong đầu tư và tiết kiệm) vào nhà trường phổ thông.",
      "Kết hợp giữa công nghệ cao (GeoGebra, Excel) và thủ công truyền thống (cắt dán, gấp giấy, làm hộp quà).",
      "Rèn luyện kĩ năng chuyển đổi hệ thống đo lường quốc tế (Imperial vs Metric SI) hỗ trợ hội nhập toàn cầu."
    ],
    commonMistakes: [
      {
        mistake: "Áp dụng quy tắc 72 lấy số 72 chia cho lãi suất dạng số thập phân (72 / 0,056) thay vì lấy số phần trăm (72 / 5,6).",
        reason: "Chưa nắm rõ công thức kinh nghiệm: r trong quy tắc 72 được tính bằng phần trăm nguyên.",
        solution: "Nhấn mạnh: r = 6% thì chia cho 6, r = 8% thì chia cho 8 (ví dụ 72/6 = 12 năm)."
      }
    ],
    pedagogicalTips: [
      "Cho học sinh chụp ảnh hoặc trưng bày sản phẩm hộp quà và biểu đồ Excel tại lớp.",
      "Tạo cơ hội để học sinh liên hệ thực tế ngân hàng và các chính sách giảm giá khuyến mãi."
    ]
  }
];
