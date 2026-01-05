
import React, { useState } from 'react';
import { 
  LayoutDashboard, UserCircle, Package, MapPin, Heart, Bell, LogOut, 
  ChevronRight, Clock, Wallet, Star, Ticket, ChevronLeft, Camera, Edit2, 
  X, PlusSquare, ShoppingCart, ShieldCheck, CheckCheck, Trash2, Plus, 
  Truck, CheckCircle2, AlertCircle, Trash
} from 'lucide-react';

// --- Sub-components ---

const StatCard = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) => (
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

const SidebarItem = ({ icon: Icon, label, active = false, badge = 0, onClick }: { icon: any, label: string, active?: boolean, badge?: number, onClick: () => void }) => (
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

const Overview = ({ setTab }: { setTab: (t: string) => void }) => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  <td className="px-8 py-5"><span className={`px-3 py-1 rounded-md text-[11px] font-bold ${order.statusColor}`}>{order.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const ProfileInfo = () => (
  <div className="space-y-6 animate-in fade-in duration-300">
    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-black text-gray-800 mb-1">Hồ sơ của tôi</h2>
          <p className="text-sm text-gray-500 font-medium">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
        </div>
        <button className="bg-[#f6d000] text-gray-900 px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 hover:bg-yellow-500 transition shadow-sm"><Edit2 size={14} /> Cập nhật</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6 border-t border-gray-50">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-3 items-center gap-4"><label className="text-[13px] font-bold text-gray-600">Tên đăng nhập</label><div className="col-span-2 text-[14px] font-bold text-blue-600">phanthe2025</div></div>
          <div className="grid grid-cols-3 items-center gap-4"><label className="text-[13px] font-bold text-gray-600">Họ và tên</label><div className="col-span-2"><input type="text" defaultValue="Phan Thanh Thế" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none" /></div></div>
          <div className="grid grid-cols-3 items-center gap-4"><label className="text-[13px] font-bold text-gray-600">Email</label><div className="col-span-2 flex items-center gap-3"><input type="email" defaultValue="phanthe2025@gmail.com" className="flex-grow bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none" /><button className="text-[11px] font-bold text-blue-600 underline">Thay đổi</button></div></div>
          <div className="grid grid-cols-3 items-center gap-4"><label className="text-[13px] font-bold text-gray-600">Số điện thoại</label><div className="col-span-2 flex items-center gap-3"><input type="text" defaultValue="********77" className="flex-grow bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none" /><button className="text-[11px] font-bold text-blue-600 underline">Cập nhật</button></div></div>
          <div className="grid grid-cols-3 items-center gap-4"><label className="text-[13px] font-bold text-gray-600">Giới tính</label><div className="col-span-2 flex gap-6">{['Nam', 'Nữ', 'Khác'].map((g, i) => (<label key={g} className="flex items-center gap-2 cursor-pointer"><input type="radio" name="gender" defaultChecked={i === 0} className="w-4 h-4 text-red-600" /><span className="text-sm font-medium text-gray-700">{g}</span></label>))}</div></div>
          <div className="pt-4"><button className="bg-[#f6d000] text-gray-900 px-10 py-3 rounded-xl font-black uppercase text-xs shadow-lg shadow-yellow-100">Lưu thay đổi</button></div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 lg:border-l border-gray-50">
          <div className="w-40 h-40 bg-[#fffdf3] rounded-full flex items-center justify-center border border-yellow-100 relative group overflow-hidden"><UserCircle size={80} className="text-gray-300" /><div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"><Camera className="text-white" size={32} /></div></div>
          <button className="px-6 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-600">Chọn ảnh</button>
        </div>
      </div>
    </div>
  </div>
);

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState('Tất cả');
  const orders = Array(5).fill({ id: '#DH-25120028', date: '25/12/2025', address: 'Số 18, ngõ 68, Kim Liên, Thành Vinh...', total: '1.250.000đ', status: 'Đang giao', color: 'bg-blue-100 text-blue-500' });
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-black text-gray-800 mb-1">Đơn hàng của tôi</h2>
        <div className="flex items-center gap-6 border-b border-gray-50 mt-8 mb-4">{['Tất cả', 'Chờ xác nhận', 'Đang giao', 'Hoàn thành', 'Đã huỷ'].map(tab => (<button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 text-[13px] font-bold relative ${activeTab === tab ? 'text-red-600' : 'text-gray-400'}`}>{tab}{activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded-full"></div>}</button>))}</div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#fffdf3]"><tr className="text-[11px] font-black text-gray-400 uppercase tracking-widest"><th className="px-6 py-4">Mã đơn hàng</th><th className="px-6 py-4">Ngày đặt</th><th className="px-6 py-4">Địa chỉ giao hàng</th><th className="px-6 py-4">Tổng tiền</th><th className="px-6 py-4 text-center">Trạng thái</th></tr></thead>
            <tbody className="divide-y divide-gray-50">{orders.map((order, i) => (<tr key={i} className="hover:bg-gray-50/50 transition-colors"><td className="px-6 py-5 text-[13px] font-bold text-blue-600">{order.id}</td><td className="px-6 py-5 text-[13px] font-medium text-gray-500">{order.date}</td><td className="px-6 py-5 text-[13px] font-medium text-gray-500 max-w-xs truncate">{order.address}</td><td className="px-6 py-5 text-[13px] font-black text-gray-800">{order.total}</td><td className="px-6 py-5 text-center"><span className={`px-3 py-1 rounded-md text-[11px] font-bold ${order.color}`}>{order.status}</span></td></tr>))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const AddressList = () => {
  const addresses = [
    { name: "Phan Thanh Thế", phone: "0937204123", detail: "Số 18, ngõ 68, Kim Liên, Thành Vinh, Nghệ An", isDefault: true },
    { name: "Phan Thanh Thế", phone: "0937204123", detail: "Số 120, Đường Lê Lợi, TP Vinh, Nghệ An", isDefault: false },
  ];
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <div><h2 className="text-2xl font-black text-gray-800 mb-1">Số địa chỉ</h2><p className="text-sm text-gray-500 font-medium">Quản lý địa chỉ nhận hàng của bạn</p></div>
          <button className="bg-[#f6d000] text-gray-900 px-5 py-2.5 rounded-xl font-black text-xs flex items-center gap-2 hover:bg-yellow-500 transition shadow-lg shadow-yellow-100"><Plus size={16} /> Thêm địa chỉ mới</button>
        </div>
        <div className="space-y-4">
          {addresses.map((addr, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl p-6 flex justify-between items-start hover:border-red-100 transition">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-black text-gray-800 text-[15px]">{addr.name}</span>
                  <div className="w-px h-4 bg-gray-200"></div>
                  <span className="text-gray-500 font-bold text-sm">{addr.phone}</span>
                  {addr.isDefault && <span className="text-[10px] font-black text-red-600 bg-red-50 px-2 py-0.5 rounded uppercase border border-red-100">Mặc định</span>}
                </div>
                <p className="text-gray-500 text-sm font-medium">{addr.detail}</p>
              </div>
              <div className="flex items-center gap-4">
                 <button className="text-blue-500 font-bold text-sm hover:underline">Sửa</button>
                 {!addr.isDefault && <button className="text-red-500 font-bold text-sm hover:underline">Xoá</button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FavoriteProducts = () => {
  const favorites = Array(4).fill({ title: "Yến Chưng Đường Kiêng BKNEST 1G Cao Cấp - Lốc 6 Hũ", price: "100.000", image: "https://picsum.photos/seed/y1/400/400", isOutOfStock: false });
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm"><h2 className="text-2xl font-black text-gray-800 mb-1">Sản phẩm yêu thích</h2><p className="text-sm text-gray-500 font-medium italic">Bạn đang có 4 sản phẩm yêu thích</p></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm relative group hover:shadow-md transition-shadow">
            <button className="absolute top-2 right-2 w-6 h-6 bg-black/40 text-white rounded-full flex items-center justify-center z-20 hover:bg-red-600 transition-colors"><X size={14} /></button>
            <div className="aspect-square bg-gray-50 rounded-xl mb-3 overflow-hidden"><img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform" /></div>
            <h3 className="text-[12px] font-bold text-gray-800 line-clamp-2 leading-tight min-h-[2.5rem]">{item.title}</h3>
            <div className="pt-1"><span className="text-red-600 font-black text-sm">{item.price}đ</span></div>
            <button className="w-full mt-3 bg-[#f6d000] py-2 rounded-full flex items-center justify-center gap-2 text-[11px] font-black hover:bg-yellow-500 transition-colors"><ShoppingCart size={14} /> Thêm vào giỏ hàng</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('Tất cả');
  const items = Array(5).fill({
    title: "Đơn hàng #DH-25120028 đang được giao",
    content: "Đơn hàng của bạn đã được giao cho đơn vị vận chuyển. Dự kiến giao hàng ngày 26/12/2025.",
    time: "Hôm qua, 09:30",
    isUnread: true
  });
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black text-gray-800">Thông báo</h2>
          <button className="flex items-center gap-2 text-[11px] font-black text-gray-400 hover:text-red-600 uppercase tracking-widest transition-colors">
            <CheckCheck size={16} /> Đánh dấu đã đọc tất cả
          </button>
        </div>
        <div className="flex items-center gap-6 border-b border-gray-50 mb-8">{['Tất cả', 'Chờ xác nhận', 'Đang giao', 'Hoàn thành', 'Đã huỷ'].map(tab => (<button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 text-[13px] font-bold relative ${activeTab === tab ? 'text-red-600' : 'text-gray-400'}`}>{tab}{activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded-full"></div>}</button>))}</div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-3xl border border-gray-50 bg-white hover:bg-gray-50 transition relative group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100"><Truck size={24} className="text-gray-800" /></div>
              <div className="space-y-1">
                <h4 className="font-black text-gray-800 text-[15px]">{item.title}</h4>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.content}</p>
                <p className="text-gray-400 text-[11px] font-bold">{item.time}</p>
              </div>
              {item.isUnread && <div className="absolute top-6 right-6 w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10"><button className="px-8 py-2.5 border border-gray-200 rounded-xl text-xs font-black text-gray-500 hover:bg-gray-50 transition uppercase tracking-widest">Xem thêm thông báo cũ</button></div>
      </div>
    </div>
  );
};

// --- Main Account Component ---

interface AccountProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (v: boolean) => void;
  setView: (view: any) => void;
}

const Account: React.FC<AccountProps> = ({ isLoggedIn, setIsLoggedIn, setView }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showLogin, setShowLogin] = useState(!isLoggedIn);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === '123456') {
      setIsLoggedIn(true);
      setShowLogin(false);
      setError('');
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
  };

  if (showLogin) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-white w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
          <div className="bg-[#ee1d23] p-8 text-white text-center relative">
            <button onClick={() => setView('home')} className="absolute top-4 right-4 hover:rotate-90 transition-transform"><X /></button>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30"><ShieldCheck size={32} /></div>
            <h3 className="text-xl font-black uppercase italic tracking-tighter">Đăng nhập tài khoản</h3>
            <p className="text-[11px] opacity-80 mt-1 uppercase font-bold tracking-widest">Chào mừng bạn quay trở lại</p>
          </div>
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            {error && <div className="p-3 bg-red-50 text-red-600 text-xs font-bold rounded-lg border border-red-100">{error}</div>}
            <div className="space-y-4">
              <div className="space-y-1.5"><label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Tên đăng nhập</label><input type="text" value={loginData.username} onChange={e => setLoginData({...loginData, username: e.target.value})} placeholder="admin" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 outline-none" /></div>
              <div className="space-y-1.5"><label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Mật khẩu</label><input type="password" value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})} placeholder="123456" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 outline-none" /></div>
            </div>
            <button type="submit" className="w-full bg-[#ee1d23] text-white font-black uppercase py-4 rounded-xl shadow-lg shadow-red-200 hover:bg-red-700 transition">Đăng nhập ngay</button>
            <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">Quên mật khẩu? <span className="text-red-600 cursor-pointer">Lấy lại ngay</span></p>
          </form>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <Overview setTab={setActiveTab} />;
      case 'profile': return <ProfileInfo />;
      case 'orders': return <MyOrders />;
      case 'address': return <AddressList />;
      case 'favorites': return <FavoriteProducts />;
      case 'notif': return <Notifications />;
      default: return <Overview setTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-[280px] shrink-0 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="relative"><img src="https://placehold.co/100x100/f8f8f8/cccccc?text=U" className="w-14 h-14 rounded-full border-2 border-orange-100" alt="Avatar" /><div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div></div>
            <div><p className="text-[10px] text-gray-400 font-bold uppercase">Xin chào,</p><h3 className="text-[15px] font-black text-gray-800 leading-tight">Phan Thanh Thế</h3><p className="text-[10px] text-orange-400 font-black uppercase mt-0.5 tracking-wider">THÀNH VIÊN VÀNG</p></div>
          </div>
          <div className="bg-white p-3 rounded-3xl border border-gray-100 shadow-sm space-y-1">
            <SidebarItem icon={LayoutDashboard} label="Tổng quan" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
            <SidebarItem icon={UserCircle} label="Thông tin tài khoản" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
            <SidebarItem icon={Package} label="Đơn hàng của tôi" active={activeTab === 'orders'} onClick={() => setActiveTab('orders')} />
            <SidebarItem icon={MapPin} label="Số địa chỉ" active={activeTab === 'address'} onClick={() => setActiveTab('address')} />
            <SidebarItem icon={Heart} label="Sản phẩm yêu thích" active={activeTab === 'favorites'} onClick={() => setActiveTab('favorites')} />
            <SidebarItem icon={Bell} label="Thông báo" badge={3} active={activeTab === 'notif'} onClick={() => setActiveTab('notif')} />
            <div className="pt-4 mt-4 border-t border-gray-100"><button onClick={() => {setIsLoggedIn(false); setView('home');}} className="flex items-center gap-3 p-3.5 w-full text-red-600 hover:bg-red-50 rounded-xl font-black text-[13px] uppercase tracking-wider"><LogOut size={20} /> Đăng xuất</button></div>
          </div>
        </aside>
        <div className="flex-grow min-w-0">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Account;
