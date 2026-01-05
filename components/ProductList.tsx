
import React from 'react';
import { Star, ShoppingCart, ChevronRight, ChevronLeft, Filter, X, ChevronDown } from 'lucide-react';

interface ProductListProps {
  onSelectProduct: () => void;
}

const ProductCard = ({ title, price, discount, rating, sold, onSelect }: any) => (
  <div 
    onClick={onSelect}
    className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all p-3 relative group overflow-hidden cursor-pointer"
  >
    <button className="absolute top-2 right-2 text-gray-400 hover:text-red-600 z-20">
      <X size={16} />
    </button>
    
    <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm z-10 shadow-sm">Giảm {discount}%</div>
    
    <div className="aspect-square bg-gray-50 rounded-md mb-3 overflow-hidden">
      <img src={`https://picsum.photos/seed/${title}/400/400`} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    
    <div className="space-y-1 text-center md:text-left">
      <span className="text-[10px] text-white font-bold bg-[#10b981] px-2 py-0.5 rounded-sm inline-block mb-1">Còn hàng</span>
      <h3 className="text-[13px] font-bold text-gray-800 line-clamp-2 leading-snug min-h-[2.5rem] hover:text-red-600 cursor-pointer">{title}</h3>
      <div className="flex items-center justify-center md:justify-start gap-1 text-[#f6d000]">
        {[...Array(5)].map((_, i) => <Star key={i} size={11} fill={i < rating ? "currentColor" : "none"} />)}
        <span className="text-[11px] text-gray-400 font-medium">({sold})</span>
      </div>
      <div className="flex flex-col items-center md:items-start pt-1">
        <span className="text-red-600 font-black text-base">{price}đ</span>
      </div>
    </div>
    
    <button className="w-full mt-4 bg-[#f6d000] hover:bg-yellow-500 text-red-900 py-2 rounded-md flex items-center justify-center gap-2 text-[12px] font-black transition-all shadow-sm hover:shadow-md">
      <ShoppingCart size={16} />
      Thêm vào giỏ hàng
    </button>
  </div>
);

const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
  const categories = ["Hũ yến", "Sét yến", "Set quà tặng", "Tổ yến nguyên chất"];
  const types = ["Yến 35%", "Yến 45%", "Yến 100%"];

  const products = Array(12).fill({
    title: "Yến Chưng Đường Kiêng BKNEST 1G Cao Cấp - Lốc 6 Hũ",
    price: "98.000",
    discount: "10",
    rating: 5,
    sold: "181"
  });

  return (
    <div className="min-h-screen bg-[#fffdf3]">
      <div className="w-full bg-[#fdf5e6] relative overflow-hidden py-16 border-b border-gold/10">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
             <path d="M0,200 Q250,50 500,200 T1000,200" fill="none" stroke="#d4af37" strokeWidth="2" />
             <path d="M0,250 Q250,100 500,250 T1000,250" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
           </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-black text-red-900 uppercase italic tracking-tighter mb-4">SẢN PHẨM</h1>
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <span className="hover:text-red-600 cursor-pointer">TRANG CHỦ</span>
            <span className="text-gray-300">/</span>
            <span className="text-red-600">SẢN PHẨM</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8 items-start">
        <aside className="w-full lg:w-64 shrink-0 space-y-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hidden lg:block">
          <div>
            <h3 className="text-base font-black text-gray-900 uppercase mb-4 border-l-4 border-red-600 pl-3">Loại sản phẩm</h3>
            <div className="space-y-3">
              {categories.map(cat => (
                <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input type="radio" name="category" className="appearance-none w-5 h-5 rounded-full border-2 border-gray-200 checked:border-red-600 transition" />
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-red-600 opacity-0 transition scale-0 peer-checked:opacity-100 peer-checked:scale-100"></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-red-600 transition">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-black text-gray-900 uppercase mb-4 border-l-4 border-red-600 pl-3">Phân loại sản phẩm</h3>
            <div className="space-y-3">
              {types.map(type => (
                <label key={type} className="flex items-center gap-3 group cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input type="radio" name="type" className="appearance-none w-5 h-5 rounded-full border-2 border-gray-200 checked:border-red-600 transition" />
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-red-600 opacity-0 transition scale-0 peer-checked:opacity-100 peer-checked:scale-100"></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-red-600 transition">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-grow">
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-red-700 transition lg:hidden">
                <Filter size={18} />
                Bộ lọc
              </button>
              <div className="relative group">
                <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold cursor-pointer hover:border-red-600 transition min-w-[150px]">
                  <span>Lọc theo: <span className="text-gray-900">Mới nhất</span></span>
                  <ChevronDown size={14} className="ml-auto opacity-50" />
                </div>
              </div>
              <button className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition">
                <X size={16} />
                Xoá bộ lọc
              </button>
            </div>
            <div className="text-sm font-bold text-gray-500">200 kết quả</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ProductCard key={i} {...p} onSelect={onSelectProduct} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-16">
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 text-gray-400 hover:bg-red-600 hover:text-white transition shadow-sm">
              <ChevronLeft size={20} />
            </button>
            {[1, 2, '...', 6].map((page, i) => (
              <button 
                key={i} 
                className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-bold shadow-sm transition
                ${page === 1 ? 'bg-red-600 text-white' : 'bg-white border border-gray-200 text-gray-500 hover:bg-red-50 hover:text-red-600'}`}
              >
                {page}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 text-gray-400 hover:bg-red-600 hover:text-white transition shadow-sm">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
