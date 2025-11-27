import React from 'react';
import { MessageCircle } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">جاهز لبدء رحلتك الرقمية؟</h2>
            <p className="text-slate-400 text-lg mb-10">
              لا تضيع المزيد من الوقت. تواصل معنا الآن واحصل على استشارة مجانية لمشروعك.
              نحن هنا لتحويل أفكارك إلى واقع ملموس.
            </p>

            {/* Direct Contact Block */}
            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl w-full max-w-md flex flex-col items-center gap-4 hover:border-orange-500 transition-colors duration-300">
                   <div className="flex items-center gap-2 mb-3">
                     <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center animate-pulse">
                       <MessageCircle size={24} />
                     </div>
                     <span className="text-green-500 font-bold text-lg">رد فوري ومباشر</span>
                   </div>
                   
                   <a 
                     href="https://wa.me/212785818406" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-full bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-green-500/20 transform hover:-translate-y-1 hover:scale-105" 
                   >
                     <MessageCircle size={28} />
                     <span>تواصل معنا عبر واتساب</span>
                   </a>
                   
                   <p className="text-slate-500 text-lg font-mono mt-3" dir="ltr">
                     +212 785 818 406
                   </p>
            </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} شركة مغرب أونلاين بريس. جميع الحقوق محفوظة.</p>
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