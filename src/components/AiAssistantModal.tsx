import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, User, Loader2, BookOpen } from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose, initialQuery }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Xin chào quý Thầy Cô và các em học sinh! Tôi là Cố vấn Sư phạm Toán 7 của Thầy giáo Ths. Phạm Ngọc Thái (SGK & SGV Kết nối tri thức với cuộc sống). Em đang cần giải đáp câu hỏi ôn tập nào, muốn hiểu sâu bản chất hình học, hay cần bí quyết làm bài thi đạt điểm 9-10?',
    },
  ]);
  const [input, setInput] = useState(initialQuery || '');
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (initialQuery) {
      setInput(`Thầy Thái ơi, nhờ Thầy hướng dẫn chi tiết giúp em câu này: ${initialQuery}`);
    }
  }, [initialQuery]);

  const samplePrompts = [
    'Tại sao chương trình 2018 lại bỏ định lí Pythagore và hàm số y = ax ở lớp 7?',
    'Phân tích ý đồ sư phạm của bài toán chiếc bánh chưng mở đầu Bài 8 (Góc ở vị trí đặc biệt)?',
    'Học sinh thường mắc những sai lầm nào khi làm quen với Căn bậc hai số học và Số vô tỉ?',
    'Gợi ý cách tổ chức hoạt động hình thành kiến thức cho bài Biến cố và Xác suất (Bài 29, 30)?',
  ];

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: query }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: query }),
      });

      const data = await res.json();
      if (data.text) {
        setMessages([...newMessages, { role: 'assistant', content: data.text }]);
      } else {
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content: data.error || 'Xin lỗi, không thể kết nối tới máy chủ phân tích.',
          },
        ]);
      }
    } catch (err: any) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'Lỗi kết nối khi gửi yêu cầu. Vui lòng kiểm tra lại đường truyền.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl flex flex-col max-h-[90vh] overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-emerald-700 via-teal-700 to-amber-700 text-white flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="font-bold text-base">Cố Vấn Sư Phạm &amp; Phân Tích Sách Toán 7</h3>
              <p className="text-xs text-emerald-100">Dựa trên cơ sở dữ liệu SGK &amp; SGV Toán 7 Kết Nối Tri Thức</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs sm:text-sm">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-tr-none shadow-2xs'
                    : 'bg-slate-100 text-slate-800 rounded-tl-none whitespace-pre-wrap'
                }`}
              >
                {m.content}
              </div>
              {m.role === 'user' && (
                <div className="w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-slate-500 italic p-2">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
              <span>Đang phân tích căn cứ sư phạm và tổng hợp câu trả lời từ tài liệu...</span>
            </div>
          )}
        </div>

        {/* Starter Chips */}
        <div className="px-6 py-2 border-t border-slate-100 bg-slate-50 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
          <span className="text-slate-400 shrink-0 font-medium">Gợi ý hỏi:</span>
          {samplePrompts.map((p, i) => (
            <button
              key={i}
              onClick={() => handleSend(p)}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:border-emerald-300 hover:text-emerald-800 transition whitespace-nowrap cursor-pointer shrink-0"
            >
              {p.length > 40 ? p.substring(0, 40) + '...' : p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-slate-200 flex gap-2">
          <input
            type="text"
            placeholder="Đặt câu hỏi về bài học, định lí, giáo án hoặc bài tập Toán 7..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={isLoading}
            className="flex-1 px-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white rounded-xl disabled:opacity-50 transition cursor-pointer flex items-center gap-1.5 font-bold text-xs sm:text-sm shadow-xs"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Gửi</span>
          </button>
        </div>
      </div>
    </div>
  );
};
