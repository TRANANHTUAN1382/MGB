
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1660px] mx-auto">
        {/* Tấm ảnh to như hình mô tả - Tỉ lệ 1660:720 */}
        <div className="relative w-full aspect-[1660/720] shadow-sm">
          <img 
            src="https://placehold.co/1660x720/fdf5e6/8b4513?text=BANNER+YEN+SAO+MINH+ANH+THANH+PHAT+1660x720" 
            alt="Hero Banner" 
            className="w-full h-full object-cover"
          />
          {/* Overlay mờ hoặc hiệu ứng nếu cần, nhưng người dùng yêu cầu là một tấm ảnh to */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
