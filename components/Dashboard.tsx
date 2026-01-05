import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  UserCircle, 
  Package, 
  MapPin, 
  Heart, 
  Bell, 
  LogOut, 
  ChevronRight,
  Clock,
  Wallet,
  Star,
  Ticket,
  ChevronLeft,
  Camera,
  Edit2,
  X,
  PlusSquare,
  ShoppingCart
} from 'lucide-react';

// Added React.FC type for components to handle React-specific props like 'key' correctly
const StatCard: React.FC<{ icon: any, label: string, value: string, color: string }> = ({ icon: Icon, label, value, color }) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 flex-1 min-w-[200px]">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${color}`}>
      <Icon size={24} />
    </div>
    <div className="space-y-0.5">
      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">{label}</p>
      <p className="text-lg font-black text-gray-800">{value}</p>
    </div>
  </div>
);

// Added React.FC type for components to handle React-specific props like 'key' correctly
const SidebarItem: React.FC<{ icon: any, label: string, active?: boolean, badge?: number, onClick: () => void }> = ({ icon: Icon, label, active = false, badge = 0, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all ${active ? 'bg-[#fffdf3] border-l-4 border-red-600 shadow-sm' : 'hover:bg-gray-50 text-gray-500'}`}
  >
    <div className="flex items-center gap-3">
      <Icon size={20} className={active ? 'text-red-600' : 'text-gray-400'} />
      <span className={`text-[13px] font-bold ${active ? 'text-gray-900' : ''}`}>{label}</span>
    </div>
    {badge > 0 && (
      <span className="w-5 h-5 bg-red-600 text-white text-[10px] font-black rounded-full flex items-center justify-center">
        {badge}
      </span>
    )}
  </div>
);

// Added React.FC type for components to handle React-specific props like 'key' correctly
const Overview: React.FC<{ setTab: (t: string) => void }> = ({ setTab }) => {
  const recentOrders = [
    { id: '#DH-25120028', date: '25/12/2025', address: 'Số 18, ngõ 68, Kim Liên, Thành Vinh...', total: '1.250.000đ', status: 'Đang giao', statusColor: 'bg-blue-100 text-blue-500' },
    { id: '#DH-25120015', date: '20/12/2025', address: 'Số 18, ngõ 68, Kim Liên, Thành Vinh...', total: '4.250.000đ', status: 'Hoàn thành', statusColor: 'bg-green-100 text-green-500' },
    { id: '#DH-25120009', date: '15/12/2025', address: 'Số 18, ngõ 68, Kim Liên, Thành Vinh...', total: '7.250.000đ', status: 'Hoàn thành', statusColor: 'bg-green-100 text-green-500' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-black text-gray-800 mb-1">Hồ sơ của tôi</h2>
        <p className="text-sm text-gray-500 font-medium">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Clock} label="Đơn hàng chờ xử lý" value="1" color="bg-[#0f172a]" />
        <StatCard icon={Wallet} label="Số tiền đã chi tiêu" value="10.000.000đ" color="bg-[#0ea5e9]" />
        <StatCard icon={Star} label="Điểm tích luỹ" value="2.048" color="bg-[#1e293b]" />
        <StatCard icon={Ticket} label="Mã khuyến mãi hiện có" value="3" color="bg-[#0f172a]" />
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 pb-4 flex items-center justify-between">
          <h3 className="text-xl font-black text-gray-800">Đơn hàng gần đây</h3>
          <button onClick={() => setTab('orders')} className="text-yellow-500 font-bold text-sm hover:underline">Xem tất cả</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#fffdf3]">
              <tr className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                <th className="px-8 py-4">Mã đơn hàng</th>
                <th className="px-8 py-4">Ngày đặt</th>
                <th className="px-8 py-4">Địa chỉ giao hàng</th>
                <th className="px-8 py-4">Tổng tiền</th>
                <th className="px-8 py-4">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentOrders.map((order, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-5 text-[13px] font-bold text-blue-600">{order.id}</td>
                  <td className="px-8 py-5 text-[13px] font-medium text-gray-500">{order.date}</td>
                  <td className="px-8 py-5 text-[13px] font-medium text-gray-500 max-w-xs truncate">{order.address}</td>
                  <td className="px-8 py-5 text-[13px] font-black text-gray-800">{order.total}</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-md text-[11px] font-bold ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const ProfileInfo = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-black text-gray-800 mb-1">Hồ sơ của tôi</h2>
            <p className="text-sm text-gray-500 font-medium">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
          </div>
          <button className="bg-[#f6d000] text-gray-900 px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 hover:bg-yellow-500 transition shadow-sm">
            <Edit2 size={14} /> Cập nhật
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6 border-t border-gray-50">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-[13px] font-bold text-gray-600">Tên đăng nhập</label>
              <div className="col-span-2 text-[14px] font-bold text-blue-600">phanthe2025</div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-[13px] font-bold text-gray-600">Họ và tên</label>
              <div className="col-span-2">
                <input type="text" defaultValue="Phan Thanh Thế" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-red-500 outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-[13px] font-bold text-gray-600">Email</label>
              <div className="col-span-2 flex items-center gap-3">
                <input type="email" defaultValue="phanthe2025@gmail.com" className="flex-grow bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none" />
                <button className="text-[11px] font-bold text-blue-600 underline">Thay đổi</button>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-[13px] font-bold text-gray-600">Số điện thoại</label>
              <div className="col-span-2 flex items-center gap-3">
                <input type="text" defaultValue="********77" className="flex-grow bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none" />
                <button className="text-[11px] font-bold text-blue-600 underline">Cập nhật</button>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-[13px] font-bold text-gray-600">Giới tính</label>
              <div className="col-span-2 flex gap-6">
                {['Nam', 'Nữ', 'Khác'].map((g, i) => (
                  <label key={g} className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="gender" defaultChecked={i === 0} className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500" />
                    <span className="text-sm font-medium text-gray-700">{g}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-[13px] font-bold text-gray-600">Ngày sinh</label>
              <div className="col-span-2 grid grid-cols-3 gap-3">
                <select className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-sm outline-none">
                  <option>Ngày 08</option>
                </select>
                <select className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-sm outline-none">
                  <option>Tháng 3</option>
                </select>
                <select className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-sm outline-none">
                  <option>1996</option>
                </select>
              </div>
            </div>
            <div className="pt-4">
              <button className="bg-[#f6d000] text-gray-900 px-10 py-3 rounded-xl font-black uppercase text-xs shadow-lg shadow-yellow-100 hover:scale-[1.02] transition">
                Lưu thay đổi
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6 lg:border-l border-gray-50">
            <div className="w-40 h-40 bg-[#fffdf3] rounded-full flex items-center justify-center border border-yellow-100 relative group overflow-hidden">
               <UserCircle size={80} className="text-gray-300" />
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Camera className="text-white" size={32} />
               </div>
            </div>
            <button className="px-6 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50 transition">
              Chọn ảnh
            </button>
            <div className="text-center text-[11px] text-gray-400 space-y-1 font-medium">
              <p>Dung lượng file tối đa 2 MB</p>
              <p>Định dạng: JPEG, PNG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyOrders = () => {
  const tabs = ['Tất cả', 'Chờ xác nhận', 'Đang giao', 'Hoàn thành', 'Đã huỷ'];
  const [activeTab, setActiveTab] = useState('Tất cả');

  const orders = [
    { id: '#DH-25120028', date: '25/12/2025', address: 'Số 18, ngõ 68, Kim Liên, Thành Vinh...', total: '1.250.000đ', status: 'Đang giao', color: 'bg-blue-100 text-blue-500' },
    ...Array(9).fill({ id: '#DH-25120015', date: '20/12/2025', address: 'Số 18, ngõ 68, Kim Liên, Thành Vinh...', total: '4.250.000đ', status: 'Hoàn thành', color: 'bg-green-100 text-green-500' })
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-black text-gray-800 mb-1">Đơn hàng của tôi</h2>
        <p className="text-sm text-gray-500 font-medium">Theo dõi và kiểm tra trạng thái các đơn hàng của bạn</p>

        <div className="flex items-center gap-6 border-b border-gray-50 mt-8 mb-4">
           {tabs.map(tab => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`pb-4 text-[13px] font-bold transition-all relative ${activeTab === tab ? 'text-red-600' : 'text-gray-400 hover:text-gray-600'}`}
             >
               {tab}
               {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded-full"></div>}
             </button>
           ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#fffdf3]">
              <tr className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                <th className="px-6 py-4">Mã đơn hàng</th>
                <th className="px-6 py-4">Ngày đặt</th>
                <th className="px-6 py-4">Địa chỉ giao hàng</th>
                <th className="px-6 py-4">Tổng tiền</th>
                <th className="px-6 py-4 text-center">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 text-[13px] font-bold text-blue-600">{order.id}</td>
                  <td className="px-6 py-5 text-[13px] font-medium text-gray-500">{order.date}</td>
                  <td className="px-6 py-5 text-[13px] font-medium text-gray-500 max-w-xs truncate">{order.address}</td>
                  <td className="px-6 py-5 text-[13px] font-black text-gray-800">{order.total}</td>
                  <td className="px-6 py-5 text-center">
                    <span className={`px-3 py-1 rounded-md text-[11px] font-bold ${order.color}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-50 text-[12px]">
           <p className="text-gray-400 font-medium">Hiển thị <span className="text-gray-800 font-black">1</span> đến <span className="text-gray-800 font-black">10</span> trong số <span className="text-gray-800 font-black">60</span> đơn hàng</p>
           <div className="flex items-center gap-1">
             <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50"><ChevronLeft size={16} /></button>
             <button className="w-8 h-8 rounded bg-[#f6d000] text-gray-900 font-bold">1</button>
             <button className="w-8 h-8 rounded hover:bg-gray-50 text-gray-600">2</button>
             <span className="px-2">...</span>
             <button className="w-8 h-8 rounded hover:bg-gray-50 text-gray-600">6</button>
             <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50"><ChevronRight size={16} /></button>
           </div>
        </div>
      </div>
    </div>
  );
};

// Added React.FC type for components to handle React-specific props like 'key' correctly
const FavoriteProductCard: React.FC<{ item: any }> = ({ item }) => (
  <div className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm hover:shadow-md transition-all relative group overflow-hidden">
    <button className="absolute top-2 right-2 w-6 h-6 bg-black/40 hover:bg-red-600 text-white rounded-full flex items-center justify-center z-20 transition-colors">
      <X size={14} />
    </button>
    
    {item.discount && (
      <div className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-sm z-10">Giảm {item.discount}</div>
    )}
    
    <div className="aspect-square bg-gray-50 rounded-xl mb-3 overflow-hidden relative">
      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute bottom-2 left-2">
        <span className={`text-[9px] text-white font-bold px-2 py-0.5 rounded-sm ${item.isOutOfStock ? 'bg-red-600' : 'bg-[#10b981]'}`}>
          {item.isOutOfStock ? 'Hết hàng' : 'Còn hàng'}
        </span>
      </div>
    </div>

    <div className="space-y-1">
      <h3 className="text-[12px] font-bold text-gray-800 line-clamp-2 leading-tight min-h-[2.5rem]">{item.title}</h3>
      <div className="flex items-center gap-1 text-[#f6d000]">
        {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
        <span className="text-[10px] text-gray-400">(181)</span>
      </div>
      <div className="pt-1">
        <span className="text-red-600 font-black text-sm">{item.price}đ</span>
      </div>
    </div>

    <button 
      disabled={item.isOutOfStock}
      className={`w-full mt-3 py-2 rounded-full flex items-center justify-center gap-2 text-[11px] font-black transition-colors shadow-sm
        ${item.isOutOfStock 
          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
          : 'bg-[#f6d000] hover:bg-yellow-400 text-gray-900 border border-gray-100/50'}`}
    >
      <div className={`${item.isOutOfStock ? 'bg-gray-300' : 'bg-white'} p-1 rounded-full text-gray-400 shrink-0`}>
        {item.isOutOfStock ? <PlusSquare size={14} /> : <ShoppingCart size={14} />}
      </div>
      {item.isOutOfStock ? 'Tạm hết hàng' : 'Thêm vào giỏ hàng'}
    </button>
  </div>
);

const FavoriteProducts = () => {
  const favorites = [
    { title: "Yến Chưng Đường Kiêng BKNEST 1G Cao Cấp - Lốc 6 Hũ", price: "100.000", image: "https://picsum.photos/seed/y1/400/400", isOutOfStock: false },
    { title: "Yến Chưng Đường Kiêng BKNEST 1G Cao Cấp - Lốc 6 Hũ", price: "98.000", image: "https://picsum.photos/seed/y2/400/400", discount: "10%", isOutOfStock: false },
    { title: "Yến Chưng Đường Kiêng BKNEST 1G Cao Cấp - Lốc 6 Hũ", price: "115.000", image: "https://picsum.photos/seed/y3/400/400", isOutOfStock: true },
    { title: "Yến Chưng Đường Kiêng BKNEST 1G Cao Cấp - Lốc 6 Hũ", price: "100.000", image: "https://picsum.photos/seed/y4/400/400", isOutOfStock: false },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-black text-gray-800 mb-1">Sản phẩm yêu thích</h2>
        <p className="text-sm text-gray-500 font-medium italic">Bạn đang có {favorites.length} sản phẩm yêu thích</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((item, i) => (
          <FavoriteProductCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <Overview setTab={setActiveTab} />;
      case 'profile': return <ProfileInfo />;
      case 'orders': return <MyOrders />;
      case 'favorites': return <FavoriteProducts />;
      default: return <Overview setTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-[280px] space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="relative">
              <img src="https://placehold.co/100x100/f8f8f8/cccccc?text=U" className="w-14 h-14 rounded-full border-2 border-orange-100" alt="Avatar" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase">Xin chào,</p>
              <h3 className="text-[15px] font-black text-gray-800 leading-tight">Phan Thanh Thế</h3>
              <p className="text-[10px] text-orange-400 font-black uppercase mt-0.5 tracking-wider">THÀNH VIÊN VÀNG</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-3xl border border-gray-100 shadow-sm space-y-1">
            <SidebarItem icon={LayoutDashboard} label="Tổng quan" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
            <SidebarItem icon={UserCircle} label="Thông tin tài khoản" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
            <SidebarItem icon={Package} label="Đơn hàng của tôi" active={activeTab === 'orders'} onClick={() => setActiveTab('orders')} />
            <SidebarItem icon={MapPin} label="Số địa chỉ" active={activeTab === 'address'} onClick={() => setActiveTab('address')} />
            <SidebarItem icon={Heart} label="Sản phẩm yêu thích" active={activeTab === 'favorites'} onClick={() => setActiveTab('favorites')} />
            <SidebarItem icon={Bell} label="Thông báo" badge={3} active={activeTab === 'notif'} onClick={() => setActiveTab('notif')} />
            
            <div className="pt-4 mt-4 border-t border-gray-100">
               <button 
                 onClick={() => window.location.reload()}
                 className="flex items-center gap-3 p-3.5 w-full text-red-600 hover:bg-red-50 rounded-xl transition-colors font-black text-[13px] uppercase tracking-wider"
               >
                 <LogOut size={20} />
                 Đăng xuất
               </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-grow">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;