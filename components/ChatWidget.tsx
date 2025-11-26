import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PACKAGES, SERVICES, FAQS } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'مرحباً بك في شركة مغرب أونلاين! 👋 أنا مساعدك الذكي، كيف يمكنني مساعدتك اليوم بخصوص خدماتنا أو أسعارنا؟' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Construct system instruction based on website data
      const systemInstruction = `
        أنت المساعد الذكي لشركة "مغرب أونلاين" (Maghreb Online).
        دورك هو مساعدة العملاء والإجابة على استفساراتهم بخصوص خدمات تصميم المواقع، المتاجر الإلكترونية، التسويق الرقمي، و SEO.
        
        استخدم المعلومات التالية للإجابة:
        
        معلومات التواصل:
        - واتساب: 212785818406 (يفضل توجيههم لهذا الرقم عند طلب خدمات)
        
        خدماتنا:
        ${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}
        
        الباقات والأسعار:
        ${PACKAGES.map(p => `- ${p.name} (${p.price}): ${p.features.join(', ')}`).join('\n')}
        
        الأسئلة الشائعة وإجاباتها:
        ${FAQS.map(f => `س: ${f.question} ج: ${f.answer}`).join('\n')}
        
        إرشادات:
        - تحدث باللغة العربية بلهجة ودودة ومهنية.
        - كن موجزاً ومباشراً.
        - إذا سألك العميل عن شيء خارج نطاق خدماتنا، اعتذر بلطف وأخبره أننا متخصصون في الحلول الرقمية.
        - شجع العميل دائماً على التواصل عبر الواتساب لطلب عرض سعر نهائي.
        - اسم الشركة الجديد هو "شركة مغرب أونلاين".
      `;

      // Use Gemini 3 Pro Preview as requested
      const model = "gemini-3-pro-preview";
      
      const response = await ai.models.generateContent({
        model: model,
        contents: [
          ...messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const responseText = response.text || "عذراً، حدث خطأ في المعالجة. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.";
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);

    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "عذراً، أواجه مشكلة في الاتصال حالياً. يمكنك التواصل معنا مباشرة عبر واتساب: 212785818406" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
        <div className="fixed bottom-6 right-6 z-50 w-[350px] md:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-1.5 rounded-lg">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold">المساعد الذكي</h3>
                <p className="text-xs text-slate-400">مدعوم بـ Gemini 3 Pro</p>
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
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-orange-500 text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-orange-500" />
                  <span className="text-xs text-slate-500">جاري الكتابة...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-slate-100 bg-white">
            <div className="flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2 border border-slate-200 focus-within:border-orange-500 transition-colors">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="اكتب استفسارك هنا..."
                className="flex-1 bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400"
                disabled={isLoading}
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="text-orange-500 hover:text-orange-600 disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-1">
              <span className="text-[10px] text-slate-400">
                قد يرتكب الذكاء الاصطناعي أخطاء. يرجى التحقق من المعلومات المهمة.
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
