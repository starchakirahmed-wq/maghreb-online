import React, { useState } from 'react';
import { MessageCircle, X, Bot, Sparkles, ExternalLink } from 'lucide-react';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-slate-900 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center border-2 border-orange-500 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="المساعد الذكي"
      >
        <Sparkles size={28} className="text-orange-500 animate-pulse absolute" />
        <Bot size={28} className="relative z-10" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[320px] md:w-[350px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-1.5 rounded-lg">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold">خدمة العملاء</h3>
                <p className="text-xs text-slate-400">رد فوري ومباشر</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-6 bg-slate-50 flex flex-col gap-6 items-center text-center">
            
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500 mb-2">
                <Bot size={32} />
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-slate-700 leading-relaxed text-sm">
              <p className="font-bold mb-2 text-slate-900">مرحباً بك في شركة مغرب أونلاين! 👋</p>
              <p>
                لخدمتك بشكل أسرع وأفضل، ومناقشة تفاصيل مشروعك بدقة، يسعدنا تواصلك معنا مباشرة عبر الواتساب.
              </p>
            </div>

            {/* Direct WhatsApp Action */}
            <a 
              href="https://wa.me/212785818406"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-3 transform hover:-translate-y-1 group"
            >
              <MessageCircle size={24} className="group-hover:animate-bounce" />
              <span>تواصل معنا عبر واتساب</span>
              <ExternalLink size={16} className="opacity-70" />
            </a>

            <p className="text-xs text-slate-400 mt-2">
              متاحون للرد على استفساراتكم
            </p>
          </div>
        </div>
      )}
    </>
  );
};