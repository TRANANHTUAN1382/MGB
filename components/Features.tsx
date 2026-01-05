
import React from 'react';
import { Truck, Headset, CreditCard, Gift } from 'lucide-react';

const FeatureItem: React.FC<{ icon: React.ReactNode, title: string, subtitle: string }> = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-3 px-6 py-2 flex-1 min-w-[200px] justify-center lg:justify-start">
    <div className="text-red-600 shrink-0">
      {icon}
    </div>
    <div className="flex flex-col">
      <h4 className="font-bold text-red-900 text-[13px] leading-tight">{title}</h4>
      <p className="text-[11px] text-gray-500 font-medium">{subtitle}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="bg-white py-4 md:py-6">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="bg-[#fffaf0] rounded-[30px] flex flex-wrap items-center justify-between py-4 shadow-sm border border-orange-100/50">
          <FeatureItem 
            icon={<img src="https://cdn-icons-png.flaticon.com/512/709/709790.png" className="w-8 h-8 object-contain" alt="truck" />} 
            title="Giao hàng siêu tốc" 
            subtitle="Giao ngay trong 24h" 
          />
          <div className="hidden lg:block w-px h-8 bg-orange-200/50"></div>
          <FeatureItem 
            icon={<img src="https://cdn-icons-png.flaticon.com/512/1067/1067562.png" className="w-8 h-8 object-contain" alt="support" />} 
            title="Tư vấn miễn phí" 
            subtitle="Đội ngũ tư vấn nhiệt tình" 
          />
          <div className="hidden lg:block w-px h-8 bg-orange-200/50"></div>
          <FeatureItem 
            icon={<img src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png" className="w-8 h-8 object-contain" alt="payment" />} 
            title="Thanh toán" 
            subtitle="Thanh toán khi nhận hàng" 
          />
          <div className="hidden lg:block w-px h-8 bg-orange-200/50"></div>
          <FeatureItem 
            icon={<img src="https://cdn-icons-png.flaticon.com/512/1140/1140033.png" className="w-8 h-8 object-contain" alt="gift" />} 
            title="Giải pháp quà tặng" 
            subtitle="Dành cho doanh nghiệp" 
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
