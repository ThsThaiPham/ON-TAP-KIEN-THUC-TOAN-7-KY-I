import React, { useState } from 'react';
import { CURRICULUM_COMPARISONS } from '../data/bookAnalysisData';
import { Compass, Filter, ArrowUpRight, ArrowDownLeft, Sparkles, Check, Info } from 'lucide-react';
import { CurriculumComparisonItem } from '../types';

export const CurriculumComparisonTab: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const filterOptions = [
    { id: 'all', label: 'Tất cả điều chỉnh' },
    { id: 'Giảm tải', label: 'Giảm tải' },
    { id: 'Chuyển lên lớp trên', label: 'Chuyển lên lớp 8/9' },
    { id: 'Chuyển xuống lớp dưới', label: 'Chuyển xuống lớp 6' },
    { id: 'Đổi mới phương pháp', label: 'Đổi mới phương pháp' },
    { id: 'Nội dung mới', label: 'Nội dung mới hoàn toàn' }
  ];

  const filteredItems = CURRICULUM_COMPARISONS.filter((item) => {
    const matchesFilter = filterType === 'all' || item.changeType === filterType;
    const matchesSearch =
      searchKeyword.trim() === '' ||
      item.topic.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.sgk2006.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.sgk2018.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.pedagogicalRationale.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getBadgeStyle = (type: CurriculumComparisonItem['changeType']) => {
    switch (type) {
      case 'Giảm tải':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Chuyển lên lớp trên':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Chuyển xuống lớp dưới':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Nội dung mới':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Overview intro */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Compass className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-bold text-slate-900">
            Phân Tích Những Điểm Đổi Mới Cốt Lõi: Chương Trình 2018 So Với 2006
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Theo văn bản Sách Giáo Viên (trang 7 - 16), chương trình Toán 7 mới được thiết kế theo mô hình <strong>"phát triển phẩm chất và năng lực"</strong> thay vì truyền thụ hàn lâm. Nhiều kiến thức trừu tượng hoặc nặng về chứng minh hình thức đã được tinh gọn, chuyển lớp hợp lí hoặc đổi mới cách tiếp cận trực quan.
        </p>

        {/* Filter & Search Toolbar */}
        <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilterType(opt.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                  filterType === opt.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Tìm kiếm chủ đề, định lí..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="space-y-4">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  {item.strand}
                </span>
                <h3 className="font-bold text-slate-900 text-base">{item.topic}</h3>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getBadgeStyle(item.changeType)}`}>
                {item.changeType}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-lg bg-red-50/50 border border-red-100">
                <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <span>SGK 2006 (Chương trình cũ)</span>
                </div>
                <p className="text-slate-700 leading-relaxed">{item.sgk2006}</p>
              </div>

              <div className="p-3.5 rounded-lg bg-emerald-50/50 border border-emerald-100">
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>SGK 2018 (Toán 7 KNTT mới)</span>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">{item.sgk2018}</p>
              </div>
            </div>

            <div className="mt-3 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 font-semibold">Căn cứ sư phạm của Ban biên soạn:</strong>{' '}
                {item.pedagogicalRationale}
              </div>
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 text-slate-500 text-sm">
            Không tìm thấy nội dung phù hợp với từ khoá hoặc bộ lọc đã chọn.
          </div>
        )}
      </div>

      {/* Summary Matrix of Main Shifts */}
      <div className="bg-slate-900 text-white rounded-xl p-6 shadow-xs">
        <h3 className="font-bold text-base text-amber-300 mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Tóm Tắt Chiến Lược Tinh Giản Chương Trình Toán 7
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
            <h4 className="font-bold text-white mb-1.5 text-sm text-emerald-400">1. Giảm tải lý thuyết hình thức</h4>
            <p className="leading-relaxed">
              Bỏ hệ tiên đề nửa mặt phẳng, bỏ góc trong cùng phía và hình chiếu của đường xiên. Học sinh tiếp cận hình học qua trực quan, gấp giấy và đo vẽ thực nghiệm.
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
            <h4 className="font-bold text-white mb-1.5 text-sm text-purple-400">2. Điều chuyển lớp tối ưu</h4>
            <p className="leading-relaxed">
              Chuyển <strong>Hàm số &amp; Đồ thị y = ax</strong> và <strong>Định lí Pythagore</strong> lên lớp 8; chuyển <strong>Đa thức nhiều biến</strong> lên lớp 8 để tập trung vững chắc cho Đa thức một biến ở lớp 7.
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
            <h4 className="font-bold text-white mb-1.5 text-sm text-amber-400">3. Đưa vào nội dung hiện đại</h4>
            <p className="leading-relaxed">
              Đưa <strong>Xác suất thực nghiệm</strong> và <strong>Hình lăng trụ đứng</strong> vào lớp 7; bổ sung tính đại diện của dữ liệu, gắn kết thực hành với phần mềm GeoGebra và Microsoft Excel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
