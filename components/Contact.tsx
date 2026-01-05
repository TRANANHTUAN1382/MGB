
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const ContactItem = ({ label, address }: { label: string, address: string }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 bg-[#ee1d23] rounded-full flex items-center justify-center shrink-0 shadow-lg">
      {label === "Điện thoại" ? <Phone size={20} className="text-white fill-white" /> : <MapPin size={20} className="text-white fill-white" />}
    </div>
    <div className="space-y-0.5">
      <h4 className="font-black text-[#ee1d23] text-sm">{label}</h4>
      <p className="text-gray-800 text-[13px] font-bold leading-tight max-w-[300px]">{address}</p>
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Banner Section */}
      <div className="w-full bg-[#fdf5e6] relative overflow-hidden py-24 border-b border-gold/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <path d="M0,200 Q250,50 500,200 T1000,200" fill="none" stroke="#d4af37" strokeWidth="2" />
            <path d="M100,100 Q400,0 700,100 T1300,100" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.3" />
          </svg>
          <div className="absolute top-10 right-20 opacity-20 transform rotate-12">
             <img src="https://placehold.co/400x400/ffffff/ed1c24?text=BIRD+PATTERN" className="w-96" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 pl-10 lg:pl-40">
          <h1 className="text-5xl font-black text-gray-800 uppercase italic tracking-tighter mb-4">
            LIÊN HỆ TƯ VẤN & HỢP TÁC
          </h1>
          <div className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-widest">
            <span className="hover:text-red-600 cursor-pointer">TRANG CHỦ</span>
            <span className="text-gray-300">/</span>
            <span className="text-red-600">LIÊN HỆ</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-[#fffdf3] rounded-[2.5rem] p-10 lg:p-20 shadow-2xl border border-gold/10 flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Left: Input Form */}
          <div className="flex-grow space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Họ và tên" 
                className="w-full bg-white border border-gray-200 rounded-lg px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-red-500 outline-none transition shadow-sm"
              />
              <input 
                type="text" 
                placeholder="Số điện thoại" 
                className="w-full bg-white border border-gray-200 rounded-lg px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-red-500 outline-none transition shadow-sm"
              />
            </div>
            <textarea 
              placeholder="Ghi chú cho chúng tôi"
              className="w-full h-48 bg-white border border-gray-200 rounded-lg px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-red-500 outline-none transition shadow-sm resize-none"
            />
            <div className="pt-2">
               <button className="bg-red-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-red-700 transition shadow-lg shadow-red-100">
                  Gửi thông tin
               </button>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="lg:w-[400px] shrink-0 space-y-8">
            <ContactItem label="Trụ sở" address="Khối 7, Phường Vinh Lộc, Tỉnh Nghệ An, Việt Nam" />
            <ContactItem label="Showroom 1" address="Khối 7, Phường Vinh Lộc, Tỉnh Nghệ An, Việt Nam" />
            <ContactItem label="Showroom 2" address="Khối 7, Phường Vinh Lộc, Tỉnh Nghệ An, Việt Nam" />
            <ContactItem label="Điện thoại" address="0974678587" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
