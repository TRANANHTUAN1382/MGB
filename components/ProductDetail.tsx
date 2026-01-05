
import React, { useState } from 'react';
import { Star, ShoppingCart, Plus, Minus, Facebook, Twitter, Mail, Linkedin, ChevronLeft, ChevronRight, Send } from 'lucide-react';

interface ProductDetailProps {
  onSelectRelated: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onSelectRelated }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('desc');
  const [mainImage, setMainImage] = useState('https://picsum.photos/seed/yenchung/800/800');

  const relatedProducts = Array(4).fill({
    title: "Yến Chưng Đường Kiêng BKNEST 1G Cao Cấp - Lốc 6 Hũ",
    price: "98.000",
    oldPrice: "130.000",
    discount: "10",
    rating: 5,
    sold: "181"
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Banner */}
      <div className="w-full bg-[#fdf5e6] relative overflow-hidden py-12 border-b border-gold/10">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
             <path d="M0,200 Q250,50 500,200 T1000,200" fill="none" stroke="#d4af37" strokeWidth="2" />
           </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-black text-red-900 uppercase italic tracking-tighter mb-3">YẾN CHƯNG</h1>
          <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            <span className="hover:text-red-600 cursor-pointer">TRANG CHỦ</span>
            <span>/</span>
            <span className="hover:text-red-600 cursor-pointer">SẢN PHẨM</span>
            <span>/</span>
            <span className="text-red-600">YẾN CHƯNG</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Images Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
              <img src={mainImage} alt="Main" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div 
                  key={i} 
                  onClick={() => setMainImage(`https://picsum.photos/seed/yenchung${i}/800/800`)}
                  className="aspect-square rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:border-red-600 transition"
                >
                  <img src={`https://picsum.photos/seed/yenchung${i}/200/200`} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Data */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              Yến Chưng Đường Kiêng BKNEST 1G Cao Cấp - Lốc 6 Hũ
            </h1>
            
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-black text-red-600">500.000 đ</span>
              <span className="text-lg text-gray-400 line-through">700.000 đ</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed italic">
              Yến sào giàu dinh dưỡng, chứa đến 18 loại axit amin và 31 khoáng chất thiết yếu giúp cơ thể tái tạo năng lượng và duy trì sức khỏe tổng thể. Ngoài ra, trong tổ yến còn chứa collagen, các vitamin thiết yếu, nhiều protein quý giá mà cơ thể không thể tự tổng hợp được.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-6">
                <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Số lượng:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition text-gray-500"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-bold text-red-600">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition text-gray-500"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex-1 min-w-[200px] bg-red-600 text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-red-700 transition shadow-lg shadow-red-200">
                  <ShoppingCart size={20} />
                  Thêm vào giỏ hàng
                </button>
                <button className="flex-1 min-w-[150px] border-2 border-red-600 text-red-600 font-bold py-4 rounded-full hover:bg-red-50 transition">
                  Mua ngay
                </button>
                <button className="px-6 border-2 border-red-600 text-red-600 font-bold py-4 rounded-full hover:bg-red-50 transition flex items-center justify-center gap-2">
                   <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" className="w-5 h-5" alt="phone" />
                   Liên hệ
                </button>
              </div>
            </div>

            <div className="space-y-2 pt-6 border-t border-gray-100 text-xs text-gray-500 font-medium">
              <p>Danh mục: <span className="text-gray-900 font-bold">Yến chưng hũ</span></p>
              <p>Thẻ: <span className="text-gray-900 font-bold">Đường kiêng</span></p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Share:</span>
              <div className="flex gap-4 text-gray-600">
                <Facebook size={18} className="cursor-pointer hover:text-blue-600 transition" />
                <Twitter size={18} className="cursor-pointer hover:text-blue-400 transition" />
                <Linkedin size={18} className="cursor-pointer hover:text-blue-800 transition" />
                <Mail size={18} className="cursor-pointer hover:text-red-500 transition" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Detail Section */}
        <div className="mb-20">
          <div className="flex gap-8 border-b border-gray-100 mb-8">
            <button 
              onClick={() => setActiveTab('desc')}
              className={`pb-4 text-sm font-black uppercase tracking-widest transition-all relative
              ${activeTab === 'desc' ? 'text-red-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Mô tả sản phẩm
              {activeTab === 'desc' && <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded-full"></div>}
            </button>
            <button 
              onClick={() => setActiveTab('policy')}
              className={`pb-4 text-sm font-black uppercase tracking-widest transition-all relative
              ${activeTab === 'policy' ? 'text-red-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Chính sách giao hàng
              {activeTab === 'policy' && <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded-full"></div>}
            </button>
          </div>

          <div className="bg-[#f8f8f8] p-8 rounded-3xl text-sm text-gray-700 leading-relaxed space-y-4">
            {activeTab === 'desc' ? (
              <>
                <p>Yến sào giàu dinh dưỡng, chứa đến 18 loại axit amin và 31 khoáng chất thiết yếu giúp cơ thể tái tạo năng lượng và duy trì sức khỏe tổng thể. Ngoài ra, trong tổ yến còn chứa collagen, các vitamin thiết yếu, nhiều protein quý giá mà cơ thể không thể tự tổng hợp được.</p>
                <p>Yến chưng đường ăn kiêng đúng với tên gọi đây là một sản phẩm dành cho người kiêng đường, người bị tiểu đường, người trong chế độ ăn kiêng, giảm cân. Bởi đường ăn kiêng không chứa calo và không gây ảnh hưởng đến lượng đường huyết có trong máu. Yến chưng đường ăn kiêng có các công dụng nổi bật như:</p>
                <ul className="list-decimal pl-6 space-y-2">
                  <li>Bồi bổ sức khỏe, tăng cường hệ miễn dịch cho người tiểu đường.</li>
                  <li>Ổn định lượng đường huyết trong máu, phù hợp với người bị tiểu đường, người ăn kiêng, giảm cân.</li>
                  <li>Tăng cường sức khỏe tim mạch, ngăn ngừa các bệnh tim mạch.</li>
                  <li>Tăng cường sức khỏe xương khớp, ngăn ngừa loãng xương.</li>
                  <li>Không gây sâu răng.</li>
                  <li>Tóc khỏe - Da đẹp - Cân bằng nội tiết tố.</li>
                  <li>An thần, cải thiện giấc ngủ sâu hơn và ngủ ngon hơn.</li>
                </ul>
                <p>Ngoài ra, mỗi sản phẩm được tung ra thị trường đều được dán tem truy xuất nguồn gốc rõ ràng, tem chống hàng giả do Bộ Công An cấp và Bản tự công bố sản phẩm thể hiện rõ các tiêu chí chất lượng và thành phần hoàn toàn lành tính, an toàn 100%.</p>
              </>
            ) : (
              <p>Chính sách giao hàng của chúng tôi cam kết vận chuyển an toàn, nhanh chóng trong vòng 24-48h...</p>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-[#fffdf3] p-10 rounded-[3rem] border border-gold/10 mb-20">
          <h2 className="text-2xl font-black text-center text-red-900 uppercase italic mb-10">ĐÁNH GIÁ SẢN PHẨM</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border border-gold/20 p-8 rounded-2xl bg-white mb-10">
            <div className="text-center space-y-2">
               <div className="text-5xl font-black text-gray-800">0/5</div>
               <div className="flex justify-center gap-1 text-[#f6d000]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="none" strokeWidth={1} />)}
               </div>
               <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">0 đánh giá và nhận xét</p>
            </div>
            
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map(star => (
                <div key={star} className="flex items-center gap-4">
                  <span className="w-4 text-[#f6d000]"><Star size={14} fill="currentColor" /></span>
                  <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#f6d000] w-0"></div>
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold w-12 text-right">0 đánh giá</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mb-16">
            <button className="bg-red-600 text-white px-10 py-3 rounded-full font-black text-sm uppercase shadow-lg shadow-red-200 hover:bg-red-700 transition">
              Đánh giá sản phẩm
            </button>
          </div>

          <h2 className="text-2xl font-black text-center text-red-900 uppercase italic mb-10">HỎI VÀ ĐÁP</h2>
          <div className="bg-white rounded-2xl border border-gold/20 p-4 space-y-4">
            <textarea 
              placeholder="Xin mời để lại câu hỏi, Minh Anh Thành Phát sẽ trả lời lại trong 2 giờ, các câu hỏi sau 21 giờ - 8 giờ sẽ được trả lời vào sáng hôm sau"
              className="w-full h-32 p-4 text-sm bg-transparent border-none focus:outline-none resize-none"
            />
            <div className="flex justify-end">
               <button className="bg-red-600 text-white px-8 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-red-700 transition">
                 <Send size={16} /> Gửi
               </button>
            </div>
          </div>
        </div>

        {/* Related Products Slider */}
        <div>
          <h2 className="text-2xl font-black text-center text-red-900 uppercase italic mb-12 flex items-center justify-center gap-4">
             <div className="w-12 h-0.5 bg-gold opacity-50"></div>
             SẢN PHẨM LIÊN QUAN
             <div className="w-12 h-0.5 bg-gold opacity-50"></div>
          </h2>
          
          <div className="relative group">
            <button className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-red-600 z-10 border border-gray-100 opacity-0 group-hover:opacity-100 transition">
              <ChevronLeft size={24} />
            </button>
            <button className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-red-600 z-10 border border-gray-100 opacity-0 group-hover:opacity-100 transition">
              <ChevronRight size={24} />
            </button>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p, i) => (
                <div 
                  key={i} 
                  onClick={onSelectRelated}
                  className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm hover:shadow-md transition group/card cursor-pointer"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded z-10">GIẢM {p.discount}%</div>
                    <img src={`https://picsum.photos/seed/related${i}/400/400`} alt="rel" className="w-full h-full object-cover group-hover/card:scale-105 transition" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] text-white bg-green-500 px-2 py-0.5 rounded">Còn hàng</span>
                    <h4 className="text-[12px] font-bold text-gray-800 line-clamp-2 leading-tight h-[2.5rem]">{p.title}</h4>
                    <div className="flex items-center gap-1 text-[#f6d000]">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                      <span className="text-[10px] text-gray-400">({p.sold})</span>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-red-600 font-black text-sm">{p.price} đ</span>
                       <span className="text-[10px] text-gray-400 line-through">{p.oldPrice} đ</span>
                    </div>
                    <button className="w-full mt-2 bg-[#f6d000] text-red-900 py-2 rounded-full flex items-center justify-center gap-2 text-[10px] font-black hover:bg-yellow-500 transition shadow-sm">
                      <ShoppingCart size={14} /> Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
             {[...Array(5)].map((_, i) => <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-red-600' : 'bg-gray-200'}`}></div>)}
          </div>
          <p className="text-center text-[10px] font-bold text-gray-400 mt-4 cursor-pointer hover:text-red-600 transition uppercase tracking-widest">Xem thêm</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
