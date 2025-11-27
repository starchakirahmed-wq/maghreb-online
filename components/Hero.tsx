import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, Clock, Globe, Code, Cpu, Smartphone } from 'lucide-react';
import { HERO_SLOGANS } from '../constants';

export const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(6 * 60 * 60); // 6 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/3/1920/1080" 
          alt="خلفية تقنية رقمية" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
        
        {/* Floating Animated Orbs/Blobs */}
        <div className="absolute top-0 left-0 -ml-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 -mr-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Icons (Decorative) */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        <div className="absolute top-[20%] left-[10%] text-slate-600 animate-float opacity-30">
            <Globe size={64} />
        </div>
        <div className="absolute bottom-[20%] right-[10%] text-orange-500 animate-float-delayed opacity-20">
            <Code size={56} />
        </div>
        <div className="absolute top-[30%] right-[15%] text-blue-400 animate-float opacity-20">
            <Cpu size={48} />
        </div>
        <div className="absolute bottom-[15%] left-[20%] text-purple-400 animate-float-delayed opacity-20">
            <Smartphone size={60} />
        </div>
      </div>

      <div className="container mx-auto px-4 z-20 text-center text-white mt-16 flex flex-col items-center relative">
        
        {/* Countdown Timer - Glass Effect */}
        <div className="glass-dark px-6 py-3 rounded-2xl flex flex-col sm:flex-row items-center gap-4 mb-6 border border-slate-700/50 shadow-2xl backdrop-blur-md transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-sm shadow-red-500/20 shadow-lg animate-pulse">
                <Clock size={16} />
                <span>عرض محدود</span>
            </div>
            <div className="font-mono text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-widest">
                {formatTime(timeLeft)}
            </div>
        </div>

        <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-wide drop-shadow-2xl">
          أنشئ موقعك الإلكتروني <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">الآن</span>
        </h2>

        <div className="inline-flex items-center gap-3 bg-slate-800/60 backdrop-blur-md border border-slate-600 rounded-full px-5 py-2 mb-8 animate-fade-in-up hover:bg-slate-800 transition-colors cursor-default">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm md:text-base text-slate-200 font-medium">متاحون الآن لاستلام مشروعك الجديد</span>
        </div>

        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-8 leading-relaxed max-w-5xl mx-auto text-slate-100">
          {HERO_SLOGANS.excellence}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
          نحن شريكك الشامل في العالم الرقمي. نقدم حلولاً متكاملة من تصميم المواقع الاحترافية 
          إلى تسويقها وضمان ظهورها في الصدارة.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 w-full">
          <a 
            href="https://wa.me/212785818406"
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 text-white text-xl font-bold px-10 py-5 rounded-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] flex items-center justify-center gap-3"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10">اطلب عرض سعر</span>
            <ArrowLeft size={24} className="relative z-10 group-hover:-translate-x-2 transition-transform" />
          </a>
        </div>

        {/* Quick Trust Indicators - Floating Glass Cards */}
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <div className="glass-dark px-4 py-2 rounded-xl flex items-center gap-2 text-slate-200 border border-slate-700">
            <CheckCircle size={18} className="text-green-400" />
            <span>تصميم متجاوب 100%</span>
          </div>
          <div className="glass-dark px-4 py-2 rounded-xl flex items-center gap-2 text-slate-200 border border-slate-700">
            <CheckCircle size={18} className="text-green-400" />
            <span>SEO مهيّأ للظهور</span>
          </div>
          <div className="glass-dark px-4 py-2 rounded-xl flex items-center gap-2 text-slate-200 border border-slate-700">
            <CheckCircle size={18} className="text-green-400" />
            <span>دعم فني مستمر</span>
          </div>
        </div>
      </div>
    </section>
  );
};