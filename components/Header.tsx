
import React from 'react';
import { Search, ShoppingBag, User, LayoutGrid, FileSearch, ChevronDown, LogOut } from 'lucide-react';

interface HeaderProps {
  setView: (view: 'home' | 'products' | 'product-detail' | 'dashboard' | 'contact') => void;
  currentView: string;
  isLoggedIn: boolean;
  onOpenLogin: () => void;
  user: any;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView, isLoggedIn, onOpenLogin, user }) => {
  return (
    <header className="w-full bg-[#ee1d23] text-white relative shadow-md z-40">
      {/* Top Address Line */}
      <div className="max-w-[1200px] mx-auto px-4 pt-2">
        <div className="text-[11px] opacity-80 border-b border-white/10 pb-2 font-medium">
          Địa chỉ: Khối 7, Phường Vinh Lộc, Tỉnh Nghệ An, Việt Nam
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center cursor-pointer group" onClick={() => setView('home')}>
          <div className="w-14 h-14 bg-[#f6d000] rounded-full flex items-center justify-center mb-1 shadow-lg group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#ee1d23]" fill="currentColor">
              <path d="M20,50 Q40,20 80,45 Q50,40 20,80 Q30,60 20,50" />
              <circle cx="65" cy="40" r="3" fill="white" />
            </svg>
          </div>
          <span className="text-[#f6d000] font-black text-[12px] tracking-tight leading-none uppercase">MINH GIA BẢO</span>
        </div>

        {/* Search & Category Section */}
        <div className="flex-grow flex items-center max-w-2xl w-full">
          <button className="bg-[#cc1a1f] h-10 px-4 rounded-l-md flex items-center gap-2 font-bold text-[12px] border-r border-red-700/30 whitespace-nowrap hover:bg-red-800 transition">
            <LayoutGrid size={16} />
            DANH MỤC
          </button>
          <div className="relative flex-grow h-10">
            <input 
              type="text" 
              placeholder="Tìm kiếm sản phẩm" 
              className="w-full h-full px-4 text-gray-800 focus:outline-none text-[13px] font-medium"
            />
            <button className="absolute right-0 top-0 h-full w-10 bg-[#cc1a1f] flex items-center justify-center rounded-r-md hover:bg-black transition-colors">
              <Search size={18} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-5 text-[12px] font-bold">
          <a href="#" className="flex items-center gap-2 hover:text-[#f6d000] transition group">
            <span className="hidden lg:inline opacity-90 group-hover:opacity-100">Kiểm tra đơn hàng</span>
            <FileSearch size={22} strokeWidth={1.5} />
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#f6d000] transition group">
            <span className="hidden lg:inline opacity-90 group-hover:opacity-100">Giỏ hàng</span>
            <div className="relative">
              <ShoppingBag size={22} strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 bg-[#f6d000] text-red-600 text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-red-600">0</span>
            </div>
          </a>
          
          {isLoggedIn ? (
            <div 
              onClick={() => setView('dashboard')}
              className="bg-[#cc1a1f] px-4 py-2 rounded-md flex items-center gap-3 font-bold hover:bg-red-800 transition-colors border border-white/10 cursor-pointer"
            >
              <div className="text-right hidden sm:block">
                <p className="text-[11px] leading-tight">{user.phone}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <User size={18} fill="currentColor" />
              </div>
              <LogOut size={16} className="opacity-50 hover:opacity-100" onClick={(e) => {
                e.stopPropagation();
                window.location.reload(); // Simple logout for demo
              }} />
            </div>
          ) : (
            <button 
              onClick={onOpenLogin}
              className="bg-[#cc1a1f] px-5 py-2.5 rounded-md flex items-center gap-3 font-bold hover:bg-red-800 transition-colors border border-white/10 shadow-sm"
            >
              Đăng nhập
              <User size={18} fill="currentColor" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation Row */}
      <nav className="border-t border-white/10 py-2.5 bg-[#ee1d23]">
        <div className="max-w-[1200px] mx-auto px-4">
          <ul className="flex flex-wrap items-center justify-center md:justify-start gap-8 text-[12px] font-black uppercase tracking-wider">
            <li>
              <button 
                onClick={() => setView('home')} 
                className={`transition-colors hover:text-[#f6d000] ${currentView === 'home' ? 'text-[#f6d000]' : 'text-white'}`}
              >
                TRANG CHỦ
              </button>
            </li>
            <li className="flex items-center gap-1 group cursor-pointer hover:text-[#f6d000] transition-colors">
              <span>VỀ CHÚNG TÔI</span>
              <ChevronDown size={14} />
            </li>
            <li>
              <button 
                onClick={() => setView('products')} 
                className={`flex items-center gap-1 transition-colors hover:text-[#f6d000] ${currentView === 'products' ? 'text-[#f6d000]' : 'text-white'}`}
              >
                <span>SẢN PHẨM</span>
                <ChevronDown size={14} />
              </button>
            </li>
            <li className="flex items-center gap-1 group cursor-pointer hover:text-[#f6d000] transition-colors">
              <span>TIN TỨC</span>
              <ChevronDown size={14} />
            </li>
            <li>
              <button 
                onClick={() => setView('contact')} 
                className={`flex items-center gap-1 transition-colors hover:text-[#f6d000] ${currentView === 'contact' ? 'text-[#f6d000]' : 'text-white'}`}
              >
                <span>LIÊN HỆ</span>
                <ChevronDown size={14} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
