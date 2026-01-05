
import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AIAssistant from './components/AIAssistant';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Account from './Account';
import Contact from './components/Contact';
import { ShoppingCart, Star, ChevronRight, ArrowRight, ChevronLeft, Play, Calendar, ArrowRightCircle, X, ShieldCheck, Video, Image as ImageIcon, Ticket } from 'lucide-react';
import "./style.css"
const SectionTitle = ({ title, subtitle, useBangers = false }: { title: string, subtitle?: string, useBangers?: boolean }) => (
  <div className="text-center mb-10 space-y-2">
    <h2 className={useBangers ? "custom-typography-header red-variant" : "text-3xl md:text-4xl font-black text-[#5d4037] uppercase italic tracking-tighter flex flex-col items-center justify-center gap-2"}>
       {title}
       {!useBangers && <div className="w-16 h-1 bg-primary-red rounded-full"></div>}
    </h2>
    {subtitle && <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">{subtitle}</p>}
  </div>
);

const ProductCard = ({ title, price, oldPrice, discount, rating, sold, onSelect }: any) => (
  <div 
    onClick={onSelect}
    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-3 relative group cursor-pointer flex-shrink-0 w-[240px] md:w-[280px]"
  >
    <div className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-sm z-10">Giảm {discount}%</div>
    <div className="aspect-square bg-gray-50 rounded-xl mb-3 overflow-hidden">
       <img src={`https://placehold.co/400x400/ffffff/cccccc?text=SP+${discount}%25`} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
    </div>
    <div className="space-y-1">
      <div className="flex"><span className="text-[9px] text-white font-bold bg-[#10b981] px-2 py-0.5 rounded-sm inline-block">Còn hàng</span></div>
      <h3 className="text-[12px] font-bold text-gray-800 line-clamp-2 leading-tight min-h-[2.5rem]">{title}</h3>
      <div className="flex items-center gap-1 text-[#f6d000]">{[...Array(5)].map((_, i) => <Star key={i} size={11} fill={i < rating ? "currentColor" : "none"} />)}<span className="text-[10px] text-gray-400">({sold})</span></div>
      <div className="flex items-baseline gap-2 pt-1"><span className="text-red-600 font-black text-sm">{price} đ</span><span className="text-gray-400 line-through text-[10px]">{oldPrice} đ</span></div>
    </div>
    <button className="w-full mt-3 bg-[#f6d000] hover:bg-yellow-400 text-gray-900 py-2 rounded-full flex items-center justify-center gap-2 text-[11px] font-black transition-colors shadow-sm border border-gray-100/50">
      <div className="bg-white p-1 rounded-full text-gray-400"><ShoppingCart size={14} /></div> Thêm vào giỏ hàng
    </button>
  </div>
);

const ProductCarousel = ({ title, items, onSelectProduct }: { title: string, items: any[], onSelectProduct: () => void }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => { if (scrollRef.current) { const amount = 300; scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' }); } };
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4">
        <SectionTitle title={title} useBangers={true} />
        <div className="relative group mt-6">
          <button onClick={() => scroll('left')} className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-400 hover:text-red-600 z-20 transition opacity-0 group-hover:opacity-100"><ChevronLeft size={28} /></button>
          <button onClick={() => scroll('right')} className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-400 hover:text-red-600 z-20 transition opacity-0 group-hover:opacity-100"><ChevronRight size={28} /></button>
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto no-scrollbar pb-6 px-2 scroll-smooth">
            {items.map((item, i) => (<ProductCard key={i} {...item} rating={5} sold="181" onSelect={onSelectProduct} />))}
          </div>
        </div>
        <div className="flex justify-center mt-6"><button className="flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-red-600 transition-colors uppercase tracking-widest">Xem thêm <ArrowRightCircle size={14} className="text-gray-400" /></button></div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'products' | 'product-detail' | 'dashboard' | 'contact'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dummyProducts = Array(8).fill({ title: "Yến Chưng Đường Kiêng BKNEST 1G Cao Cấp - Lốc 6 Hũ", price: "98.000", oldPrice: "130.000", discount: "10" });

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header setView={setView} currentView={view} isLoggedIn={isLoggedIn} onOpenLogin={() => setView('dashboard')} user={{ name: 'Phan Thanh Thế', phone: '0937204123' }} />
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero />
            <Features />
            
            {/* Mục: Mã khuyến mãi */}
            <section className="py-16 bg-[#fffaf0]">
              <div className="max-w-7xl mx-auto px-4">
                <SectionTitle title="MÃ KHUYẾN MÃI" useBangers={true} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white border-2 border-dashed border-red-200 rounded-2xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition group">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                           <Ticket size={24} />
                         </div>
                         <div>
                           <p className="font-black text-gray-800 text-sm italic">GIẢM 50K</p>
                           <p className="text-[10px] text-gray-500 font-bold uppercase">Cho đơn từ 500k</p>
                         </div>
                      </div>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider">LẤY MÃ</button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="max-w-[1400px] mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative flex justify-center"><div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center"><div className="absolute inset-0 rounded-full border-[1.2rem] border-red-600/5"></div><div className="relative w-[85%] h-[85%] rounded-full border-[0.4rem] border-red-600 p-8 flex items-center justify-center bg-white shadow-2xl"><img src="https://placehold.co/400x400/ffffff/ed1c24?text=LOGO+CHIM+YEN" className="w-3/4 opacity-80" /></div></div></div>
              <div className="space-y-6"><div className="space-y-1"><span className="text-red-600 font-bold uppercase tracking-[0.4em] text-[10px]">VỀ CHÚNG TÔI</span><h2 className="text-4xl font-black text-red-900 uppercase italic tracking-tighter leading-none">MINH ANH THÀNH PHÁT</h2></div><p className="text-gray-600 text-[13px] leading-relaxed font-medium">Công ty Minh Anh Thành Phát tự hào cung cấp các dòng sản phẩm Yến sào thượng hạng thương hiệu Minh Gia Bảo...</p><button className="group flex items-center gap-4 text-gray-800 hover:text-red-600 font-black text-xs uppercase tracking-widest pt-4"><div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white"><ArrowRight size={20} /></div><span>Tìm hiểu thêm</span></button></div>
            </section>

            {/* Mục: Chứng nhận an toàn */}
            <section className="py-16 bg-white border-y border-gray-50">
              <div className="max-w-7xl mx-auto px-4">
                <SectionTitle title="CHỨNG NHẬN AN TOÀN" useBangers={true} />
                <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://placehold.co/120x120/ffffff/cccccc?text=HACCP" className="h-20 object-contain" />
                  <img src="https://placehold.co/120x120/ffffff/cccccc?text=ISO+22000" className="h-20 object-contain" />
                  <img src="https://placehold.co/120x120/ffffff/cccccc?text=FDA" className="h-20 object-contain" />
                  <img src="https://placehold.co/120x120/ffffff/cccccc?text=HALAL" className="h-20 object-contain" />
                </div>
              </div>
            </section>

            <ProductCarousel title="HŨ YẾN SÀO" items={dummyProducts} onSelectProduct={() => setView('product-detail')} />
            <ProductCarousel title="YẾN SÀO XÁCH" items={dummyProducts} onSelectProduct={() => setView('product-detail')} />

            {/* Mục: Thư viện video */}
            <section className="py-20 bg-[#fffdf3]">
              <div className="max-w-7xl mx-auto px-4">
                <SectionTitle title="THƯ VIỆN VIDEO" useBangers={true} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[1, 2].map(i => (
                    <div key={i} className="relative group aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                      <img src={`https://placehold.co/1280x720/000000/ffffff?text=Video+Review+${i}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition">
                         <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl scale-90 group-hover:scale-100 transition animate-pulse">
                           <Play size={32} fill="currentColor" />
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Mục: Thư viện hình ảnh */}
            <section className="py-20 bg-white">
              <div className="custom-typography-header">
                <SectionTitle title="THƯ VIỆN HÌNH ẢNH" useBangers={true} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-sm group relative">
                      <img src={`https://placehold.co/600x600/fdf5e6/8b4513?text=Anh+${i}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                         <ImageIcon size={32} className="text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
        {view === 'products' && <ProductList onSelectProduct={() => setView('product-detail')} />}
        {view === 'product-detail' && <ProductDetail onSelectRelated={() => setView('product-detail')} />}
        {view === 'dashboard' && <Account isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setView={setView} />}
        {view === 'contact' && <Contact />}
      </main>
      <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 border-t-4 border-[#f6d000]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12"><div className="space-y-6"><div className="flex items-center gap-3" onClick={() => setView('home')}><div className="bg-white p-1 rounded-full w-12 h-12 flex items-center justify-center"><img src="https://placehold.co/100x100/ffffff/ed1c24?text=LOGO" className="w-8 h-8" /></div><h3 className="text-[#f6d000] font-black text-xl italic leading-none uppercase cursor-pointer">MINH ANH THÀNH PHÁT</h3></div><p className="text-[12px] text-gray-400">Trụ sở: Khối 7, Phường Vinh Lộc, Tỉnh Nghệ An, Việt Nam</p></div><div><h4 className="text-[#f6d000] font-bold uppercase text-sm mb-8 cursor-pointer">Về chúng tôi</h4></div><div><h4 className="text-[#f6d000] font-bold uppercase text-sm mb-8 cursor-pointer" onClick={() => setView('products')}>Sản phẩm</h4></div><div><h4 className="text-[#f6d000] font-bold uppercase text-sm mb-8 cursor-pointer" onClick={() => setView('contact')}>Liên hệ</h4></div></div>
      </footer>
      <AIAssistant />
    </div>
  );
};

export default App;