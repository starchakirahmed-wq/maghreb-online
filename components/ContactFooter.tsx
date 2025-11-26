import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* CTA & Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">جاهز لبدء رحلتك الرقمية؟</h2>
            <p className="text-slate-400 text-lg mb-8">
              لا تضيع المزيد من الوقت. تواصل معنا الآن واحصل على استشارة مجانية لمشروعك.
              نحن هنا لتحويل أفكارك إلى واقع ملموس.
            </p>

            <div className="space-y-6 mb-8">
              
              {/* QR Code and Direct Contact Block */}
              <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6">
                <div className="bg-white p-2 rounded-xl shrink-0">
                  {/* Generating QR Code for the specific WhatsApp link */}
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://wa.me/212785818406" 
                    alt="WhatsApp QR Code" 
                    className="w-28 h-28"
                  />
                </div>
                <div className="text-center sm:text-right flex flex-col items-center sm:items-start w-full">
                   <div className="flex items-center gap-2 mb-3">
                     <div className="w-8 h-8 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                       <MessageCircle size={18} />
                     </div>
                     <span className="text-green-500 font-bold text-sm">رد فوري ومباشر</span>
                   </div>
                   
                   <h3 className="text-xl font-bold mb-4">امسح الرمز أو اضغط الزر أدناه</h3>
                   
                   <a 
                     href="https://wa.me/212785818406" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 transform hover:-translate-y-1" 
                   >
                     <MessageCircle size={24} />
                     <span>تواصل معنا عبر واتساب</span>
                   </a>
                   
                   <p className="text-slate-500 text-sm mt-3" dir="ltr">
                     +212 785 818 406
                   </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h3>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              window.open('https://wa.me/212785818406', '_blank');
            }}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">الاسم الكامل</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors bg-slate-50"
                  placeholder="محمد أحمد"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">رقم الهاتف</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors bg-slate-50"
                  placeholder="06XXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">الخدمة المطلوبة</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors bg-slate-50">
                  <option>تصميم موقع إلكتروني</option>
                  <option>متجر إلكتروني</option>
                  <option>تسويق رقمي</option>
                  <option>أخرى</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">تفاصيل المشروع</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors bg-slate-50"
                  placeholder="أخبرنا المزيد عن فكرتك..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
              >
                <span>إرسال الطلب</span>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} شركة مغرب أونلاين. جميع الحقوق محفوظة.</p>
        </div>
      </div>

      {/* WhatsApp Sticky Button */}
      <a 
        href="https://wa.me/212785818406" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </footer>
  );
};