import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { HERO_SLOGANS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/3/1920/1080" 
          alt="Digital Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/60"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white mt-16">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-1 mb-6 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-slate-300">متاحون الآن لاستلام مشروعك الجديد</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          {HERO_SLOGANS.excellence}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          نحن شريكك الشامل في العالم الرقمي. نقدم حلولاً متكاملة من تصميم المواقع الاحترافية 
          إلى تسويقها وضمان ظهورها في الصدارة على محركات البحث.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="https://wa.me/212785818406"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
          >
            اطلب عرض سعر
            <ArrowLeft size={20} />
          </a>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all"
          >
            شاهد أعمالنا
          </a>
        </div>

        {/* Quick Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-green-500" />
            <span>تصميم متجاوب 100%</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-green-500" />
            <span>SEO مهيّأ للظهور</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-green-500" />
            <span>دعم فني مستمر</span>
          </div>
        </div>
      </div>
    </section>
  );
};