import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ChevronRight,
  Calculator,
  Compass,
  Triangle,
  BarChart2,
  Hash
} from 'lucide-react';

export const TheorySummaryTab: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<'c1' | 'c2' | 'c3' | 'c4' | 'c5'>('c1');

  return (
    <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto">
      {/* Intro Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
              Cẩm Nang Ôn Tập Kỳ I
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Tác giả: Thầy giáo Ths. Phạm Ngọc Thái
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Hệ Thống Kiến Thức Cốt Lõi 5 Chương Toán 7 Kỳ I
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-3xl leading-relaxed">
            Tổng hợp đầy đủ công thức, định nghĩa trọng tâm và <strong>những cạm bẫy dễ mất điểm</strong> học sinh lớp 7 thường gặp trong các kì thi giữa kì và cuối kì I.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs max-w-xs">
            <div className="flex items-center gap-1.5 font-bold mb-1">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Lời khuyên của Thầy Thái:</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              "Hãy nắm chắc điều kiện và thứ tự thực hiện phép tính trước khi làm bài vận dụng cao!"
            </p>
          </div>
        </div>
      </div>

      {/* Chapter Tab Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        <button
          onClick={() => setActiveChapterId('c1')}
          className={`p-3.5 rounded-xl border text-left transition cursor-pointer flex items-center gap-2.5 ${
            activeChapterId === 'c1'
              ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-bold'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Hash className="w-5 h-5 shrink-0" />
          <div>
            <div className="text-xs font-extrabold uppercase">Chương I</div>
            <div className="text-[11px] opacity-90 truncate">Số Hữu Tỉ</div>
          </div>
        </button>

        <button
          onClick={() => setActiveChapterId('c2')}
          className={`p-3.5 rounded-xl border text-left transition cursor-pointer flex items-center gap-2.5 ${
            activeChapterId === 'c2'
              ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-bold'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Calculator className="w-5 h-5 shrink-0" />
          <div>
            <div className="text-xs font-extrabold uppercase">Chương II</div>
            <div className="text-[11px] opacity-90 truncate">Số Thực &amp; Căn Bậc Hai</div>
          </div>
        </button>

        <button
          onClick={() => setActiveChapterId('c3')}
          className={`p-3.5 rounded-xl border text-left transition cursor-pointer flex items-center gap-2.5 ${
            activeChapterId === 'c3'
              ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-bold'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Compass className="w-5 h-5 shrink-0" />
          <div>
            <div className="text-xs font-extrabold uppercase">Chương III</div>
            <div className="text-[11px] opacity-90 truncate">Góc &amp; Đường Song Song</div>
          </div>
        </button>

        <button
          onClick={() => setActiveChapterId('c4')}
          className={`p-3.5 rounded-xl border text-left transition cursor-pointer flex items-center gap-2.5 ${
            activeChapterId === 'c4'
              ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-bold'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Triangle className="w-5 h-5 shrink-0" />
          <div>
            <div className="text-xs font-extrabold uppercase">Chương IV</div>
            <div className="text-[11px] opacity-90 truncate">Tam Giác Bằng Nhau</div>
          </div>
        </button>

        <button
          onClick={() => setActiveChapterId('c5')}
          className={`p-3.5 rounded-xl border text-left transition cursor-pointer flex items-center gap-2.5 col-span-2 sm:col-span-1 ${
            activeChapterId === 'c5'
              ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-bold'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <BarChart2 className="w-5 h-5 shrink-0" />
          <div>
            <div className="text-xs font-extrabold uppercase">Chương V</div>
            <div className="text-[11px] opacity-90 truncate">Thu Thập Dữ Liệu</div>
          </div>
        </button>
      </div>

      {/* Chapter Content Details */}
      {activeChapterId === 'c1' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Chương I: Tập Hợp Các Số Hữu Tỉ
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">1. Định nghĩa &amp; Biểu diễn số hữu tỉ</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Số hữu tỉ là số viết được dưới dạng phân số <code>a/b</code> với <code>a, b ∈ Z, b ≠ 0</code>.
                    Kí hiệu: <strong>Q</strong>. Ta có: <code>N ⊂ Z ⊂ Q</code>.
                  </p>
                  <p className="text-xs text-slate-700 mt-2">
                    • Số đối của số hữu tỉ <code>x</code> kí hiệu là <code>-x</code>. Ta có <code>x + (-x) = 0</code>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">2. Các phép tính trong Q</h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>Cộng, trừ: Quy đồng mẫu số dương trước khi cộng/trừ tử số.</li>
                    <li>Nhân: <code>(a/b) . (c/d) = (a.c) / (b.d)</code> (Rút gọn chéo trước khi nhân).</li>
                    <li>Chia: Nhân với phân số nghịch đảo: <code>(a/b) : (c/d) = (a/b) . (d/c)</code> (với c ≠ 0).</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">3. Luỹ thừa với số mũ tự nhiên</h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-mono">
                    <li>• x^m . x^n = x^(m + n)</li>
                    <li>• x^m : x^n = x^(m - n) (x ≠ 0, m ≥ n)</li>
                    <li>• (x^m)^n = x^(m . n)</li>
                    <li>• (x . y)^n = x^n . y^n</li>
                    <li>• (x / y)^n = x^n / y^n (y ≠ 0)</li>
                    <li>• Quy ước: x^0 = 1 (x ≠ 0); x^1 = x</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">4. Quy tắc dấu ngoặc &amp; Chuyển vế</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    • <strong>Dấu ngoặc:</strong> Đằng trước có dấu "-", khi bỏ ngoặc phải đổi dấu tất cả số hạng bên trong (+ thành -, - thành +). Đằng trước có dấu "+", giữ nguyên.
                  </p>
                  <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">
                    • <strong>Chuyển vế:</strong> Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta <em>phải đổi dấu</em> số hạng đó: <code>x + a = b =&gt; x = b - a</code>.
                  </p>
                </div>
              </div>
            </div>

            {/* Teacher's Pitfall Warning */}
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="text-xs text-red-950">
                <strong className="block font-bold text-sm mb-0.5">Bẫy Thường Gặp Khi Thi Chương I (Thầy Thái lưu ý):</strong>
                1. Nhầm giữa <code>(-1/2)^2 = 1/4</code> và <code>-(1/2)^2 = -1/4</code>.<br />
                2. Chuyển vế nhưng quên đổi dấu số hạng.<br />
                3. Lấy tử cộng tử, mẫu cộng mẫu khi cộng hai phân số khác mẫu.
              </div>
            </div>
          </div>
        </div>
      )}

      {activeChapterId === 'c2' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Chương II: Số Thực &amp; Căn Bậc Hai Số Học
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">1. Số thập phân vô hạn tuần hoàn &amp; Chu kì</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Mỗi số hữu tỉ đều được biểu diễn bởi một số thập phân hữu hạn hoặc vô hạn tuần hoàn.
                    Phần lặp lại vô hạn được đặt trong dấu ngoặc tròn gọi là <strong>chu kì</strong>. Ví dụ: <code>1/3 = 0,(3)</code>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">2. Số vô tỉ &amp; Căn bậc hai số học</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    • Số vô tỉ là số viết được dưới dạng số thập phân vô hạn không tuần hoàn. Tập hợp số vô tỉ kí hiệu là <strong>I</strong>. (Ví dụ: √2, √3, π = 3,14159...).
                  </p>
                  <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                    • <strong>Căn bậc hai số học</strong> của số a không âm là số x không âm thoả mãn <code>x^2 = a</code>, kí hiệu là <code>√a</code>.
                    <br />
                    <em>Lưu ý cốt lõi:</em> √a ≥ 0 với mọi a ≥ 0.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">3. Tập hợp số thực R &amp; Trục số</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Tập hợp số thực R gồm toàn bộ số hữu tỉ và số vô tỉ: <code>R = Q ∪ I</code>.
                    Mỗi điểm trên trục số biểu diễn duy nhất một số thực, và ngược lại. Trục số được lấp đầy bởi các số thực.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">4. Làm tròn số theo độ chính xác d (Điểm mới 2018)</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Quy tắc: Khi làm tròn số với độ chính xác d, ta làm tròn đến hàng lớn hơn hàng của d một bậc.
                    <br />
                    • Nếu d = 50 (hàng chục) =&gt; làm tròn đến hàng trăm.<br />
                    • Nếu d = 0,05 (hàng phần trăm) =&gt; làm tròn đến hàng phần mười (chữ số thập phân thứ nhất).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="text-xs text-red-950">
                <strong className="block font-bold text-sm mb-0.5">Bẫy Thường Gặp Khi Thi Chương II (Thầy Thái lưu ý):</strong>
                1. Ghi <code>√64 = ±8</code> là SAI HOÀN TOÀN! Căn bậc hai số học luôn không âm: <code>√64 = 8</code>.<br />
                2. Quên xác định chữ số liền sau chữ số hàng làm tròn để quyết định giữ nguyên hay tăng 1.
              </div>
            </div>
          </div>
        </div>
      )}

      {activeChapterId === 'c3' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Chương III: Góc Và Đường Thẳng Song Song
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">1. Góc ở vị trí đặc biệt</h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                    <li><strong>Hai góc kề bù:</strong> Có một cạnh chung, hai cạnh còn lại là hai tia đối nhau. Tổng số đo bằng 180°.</li>
                    <li><strong>Hai góc đối đỉnh:</strong> Mỗi cạnh của góc này là tia đối của một cạnh góc kia. Hai góc đối đỉnh thì BẰNG NHAU.</li>
                    <li><strong>Tia phân giác:</strong> Nằm giữa hai cạnh và chia góc thành 2 phần bằng nhau: <code>xOt = yOt = xOy / 2</code>.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">2. Dấu hiệu nhận biết hai đường thẳng song song</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Nếu đường thẳng c cắt hai đường thẳng a và b tạo thành:
                    <br />• Một cặp góc so le trong bằng nhau, HOẶC
                    <br />• Một cặp góc đồng vị bằng nhau, HOẶC
                    <br />• Một cặp góc trong cùng phía bù nhau (tổng = 180°)
                    <br />thì <code>a // b</code>.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">3. Tiên đề Euclid &amp; Tính chất đường song song</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    • <strong>Tiên đề Euclid:</strong> Qua một điểm ở ngoài một đường thẳng, chỉ có MỘT đường thẳng song song với đường thẳng đó.
                  </p>
                  <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                    • <strong>Tính chất:</strong> Nếu một đường thẳng cắt hai đường thẳng song song thì:
                    hai góc so le trong bằng nhau, hai góc đồng vị bằng nhau, hai góc trong cùng phía bù nhau.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">4. Định lí &amp; Chứng minh định lí</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    • Phát biểu dạng "Nếu A thì B" =&gt; A là Giả thiết (GT), B là Kết luận (KL).
                    <br />• Chứng minh định lí là dùng suy luận logic từ các khẳng định đúng đã biết để khẳng định kết luận là đúng.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="text-xs text-red-950">
                <strong className="block font-bold text-sm mb-0.5">Bẫy Thường Gặp Khi Thi Chương III (Thầy Thái lưu ý):</strong>
                Hai góc bằng nhau chưa chắc đã đối đỉnh! Cần kiểm tra kĩ điều kiện: các cạnh của chúng phải là các tia đối nhau tương ứng.
              </div>
            </div>
          </div>
        </div>
      )}

      {activeChapterId === 'c4' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Chương IV: Tam Giác Bằng Nhau
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">1. Tổng các góc trong một tam giác</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    • Tổng ba góc của một tam giác luôn bằng <strong>180°</strong>: <code>A + B + C = 180°</code>.
                    <br />• Trong tam giác vuông, hai góc nhọn phụ nhau: <code>B + C = 90°</code>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">2. Ba trường hợp bằng nhau của tam giác thường</h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                    <li><strong>c.c.c (Cạnh - Cạnh - Cạnh):</strong> Ba cạnh tương ứng bằng nhau.</li>
                    <li><strong>c.g.c (Cạnh - Góc - Cạnh):</strong> Hai cạnh và <em>góc xen giữa</em> bằng nhau.</li>
                    <li><strong>g.c.g (Góc - Cạnh - Góc):</strong> Một cạnh và <em>hai góc kề</em> cạnh đó bằng nhau.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">3. Các trường hợp bằng nhau của tam giác vuông</h4>
                  <ul className="text-xs text-slate-700 space-y-1 list-disc pl-4">
                    <li>Hai cạnh góc vuông</li>
                    <li>Cạnh góc vuông - góc nhọn kề</li>
                    <li>Cạnh huyền - góc nhọn</li>
                    <li>Cạnh huyền - cạnh góc vuông</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">4. Tam giác cân &amp; Đường trung trực</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    • Tam giác cân có hai cạnh bên bằng nhau và hai góc ở đáy bằng nhau.
                    <br />• <code>Góc đáy = (180° - Góc đỉnh) / 2</code>; <code>Góc đỉnh = 180° - 2 . Góc đáy</code>.
                    <br />• <strong>Đường trung trực:</strong> Vuông góc với đoạn thẳng tại trung điểm. Điểm nằm trên đường trung trực thì cách đều hai mút: <code>MA = MB</code>.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="text-xs text-red-950">
                <strong className="block font-bold text-sm mb-0.5">Bẫy Thường Gặp Khi Thi Chương IV (Thầy Thái lưu ý):</strong>
                1. Trường hợp c.g.c: Góc bằng nhau PHẢI XEN GIỮA hai cạnh. Nếu góc không xen giữa thì KHÔNG suy ra tam giác bằng nhau!<br />
                2. Viết kí hiệu hai tam giác bằng nhau phải đúng thứ tự các đỉnh tương ứng: ΔABC = ΔDEF (A ứng với D, B ứng với E, C ứng với F).
              </div>
            </div>
          </div>
        </div>
      )}

      {activeChapterId === 'c5' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Chương V: Thu Thập Và Biểu Diễn Dữ Liệu
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">1. Phân loại dữ liệu</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    • <strong>Dữ liệu là số (số liệu / định lượng):</strong> Chiều cao, cân nặng, điểm số, nhiệt độ, dân số...
                    <br />• <strong>Dữ liệu không phải là số (định tính):</strong> Tên, giới tính, nơi sinh, sở thích, xếp loại (Tốt, Khá, Đạt)...
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">2. Biểu đồ hình quạt tròn</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    • Dùng để so sánh các phần so với toàn thể (tỉ lệ phần trăm).
                    <br />• Toàn bộ hình tròn tương ứng với <strong>100%</strong> và góc ở tâm là <strong>360°</strong>.
                    <br />• <code>Góc ở tâm = 360° . (Tỉ lệ % / 100)</code>. (Ví dụ: 25% ứng với 90°; 50% ứng với 180°).
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">3. Biểu đồ đoạn thẳng</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    • Thích hợp nhất để biểu diễn <strong>sự thay đổi của một đại lượng theo thời gian</strong> (xu hướng tăng, giảm, duy trì).
                    <br />• Trục hoành biểu diễn các mốc thời gian; trục tung biểu diễn số liệu của đại lượng quan tâm.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-blue-900 mb-1">4. Tính hợp lí của dữ liệu</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Cần kiểm tra: Số liệu có nằm trong khoảng thực tế khả thi không? (Ví dụ: số ngày trong tháng 2 không thể quá 29; điểm kiểm tra không thể âm hoặc lớn hơn 10; tổng các phần trăm trong quạt tròn phải đúng bằng 100%).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="text-xs text-red-950">
                <strong className="block font-bold text-sm mb-0.5">Bẫy Thường Gặp Khi Thi Chương V (Thầy Thái lưu ý):</strong>
                Khi tính tỉ lệ tăng trưởng giữa hai mốc thời gian, hãy luôn chia cho giá trị của mốc thời gian trước đó, KHÔNG chia cho giá trị thời gian sau!
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
