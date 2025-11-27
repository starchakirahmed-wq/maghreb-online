import React from 'react';
import { STATS, WORKFLOW_STEPS } from '../constants';
import { Check } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl"></div>
            <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-3xl"></div>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-orange-400 font-bold text-sm mb-6 border border-orange-500/20">
                لماذا نحن؟
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              نحن لا نقدم مجرد كود، <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">نحن نبني مستقبلك الرقمي.</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              نفهم السوق المغربي والعربي، ونعرف كيف نجعل علامتك التجارية تبرز وسط المنافسين من خلال حلول تقنية متطورة وتصاميم عصرية.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
              {['خبرة في السوق المغربي', 'تصميمات فريدة وعصرية', 'سرعة أداء خيالية', 'دعم فني متواصل 24/7'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <Check size={18} />
                  </div>
                  <h4 className="font-bold text-lg text-slate-200 group-hover:text-white transition-colors">{item}</h4>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-block bg-white text-slate-900 font-bold py-4 px-10 rounded-xl hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl hover:shadow-white/20">
              تواصل معنا اليوم
            </a>
          </div>

          {/* Right Stats Grid - Floating Glass Cards */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`glass-dark p-8 rounded-3xl text-center transition-all duration-500 hover:bg-slate-800/80 border border-white/5 ${
                    idx % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-slate-800 rounded-2xl text-orange-500 shadow-lg border border-slate-700">
                    <stat.icon size={32} />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
                  <p className="text-slate-400 font-medium text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workflow Strip - Modern Look */}
        <div className="mt-28 pt-16 border-t border-slate-800/50">
           <h3 className="text-center text-3xl font-bold mb-16 text-white">رحلة نجاح مشروعك</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
             {/* Connection Line */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-orange-500/50 to-slate-800 -z-0"></div>
             
             {WORKFLOW_STEPS.map((step, idx) => (
               <div key={idx} className="text-center relative group">
                 <div className="w-24 h-24 bg-slate-900 border-4 border-slate-800 group-hover:border-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 transition-all duration-300 group-hover:scale-110 shadow-xl">
                   <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-inner">
                     {idx + 1}
                   </div>
                 </div>
                 <h4 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{step.title}</h4>
                 <p className="text-slate-400">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};