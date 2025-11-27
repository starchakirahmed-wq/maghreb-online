import React from 'react';
import { PACKAGES } from '../constants';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            باقات وعروض تناسب الجميع
          </h2>
          <p className="text-slate-600">
            اختر الباقة المناسبة لميزانيتك واحتياجاتك، وابدأ رحلتك الرقمية الآن.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {PACKAGES.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 border overflow-hidden ${
                pkg.isPopular 
                  ? 'border-orange-500 shadow-2xl scale-105 z-10' 
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              {/* Discount Badge */}
              <div className="absolute top-0 left-0 bg-red-600 text-white px-4 py-2 rounded-br-2xl z-20 font-black text-sm shadow-md">
                تخفيض 100%
              </div>

              {pkg.isPopular && (
                <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  الأكثر طلباً
                </div>
              )}
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 mt-2">{pkg.name}</h3>
              
              <div className="mb-6">
                 {pkg.originalPrice && (
                     <div className="text-slate-400 text-lg line-through font-medium mb-1 relative inline-block">
                         {pkg.originalPrice}
                         <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-500 rotate-[-10deg]"></div>
                     </div>
                 )}
                 <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-slate-900">{pkg.price}</span>
                    <span className="text-slate-500 mr-2 text-sm">/ مشروع</span>
                 </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`block w-full text-center py-3 rounded-lg font-bold transition-colors ${
                  pkg.isPopular 
                    ? 'bg-orange-500 text-white hover:bg-orange-600' 
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                {pkg.ctaText}
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
            <p className="text-orange-600 font-semibold animate-pulse text-lg">
                🔥 اطلب الآن واحصل على استشارة مجانية – العرض سينتهي قريباً!
            </p>
        </div>
      </div>
    </section>
  );
};