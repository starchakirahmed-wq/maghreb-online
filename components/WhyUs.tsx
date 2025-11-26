import React from 'react';
import { STATS, WORKFLOW_STEPS } from '../constants';
import { Check } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              لماذا تختار <span className="text-orange-500">شركة مغرب أونلاين</span>؟
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              نحن لا نقدم مجرد كود، نحن نقدم حلولاً تجارية. نفهم السوق المغربي والعربي، ونعرف كيف نجعل علامتك التجارية تبرز وسط المنافسين.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-500/20 p-1 rounded-full text-green-500">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">خبرة في السوق المغربي</h4>
                  <p className="text-sm text-slate-400">نفهم سلوك العميل المحلي.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-500/20 p-1 rounded-full text-green-500">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">تصميمات فريدة</h4>
                  <p className="text-sm text-slate-400">لا نستخدم قوالب مكررة.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-500/20 p-1 rounded-full text-green-500">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">سرعة أداء عالية</h4>
                  <p className="text-sm text-slate-400">مواقع تحميلها كالبرق.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-500/20 p-1 rounded-full text-green-500">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">دعم ما بعد البيع</h4>
                  <p className="text-sm text-slate-400">نحن معك دائماً.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              تواصل معنا اليوم
            </a>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, idx) => (
                <div key={idx} className="bg-slate-800 p-6 rounded-2xl text-center hover:bg-slate-700 transition-colors border border-slate-700">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-slate-900 rounded-full text-orange-500">
                    <stat.icon size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-slate-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workflow Strip */}
        <div className="mt-20 pt-10 border-t border-slate-800">
           <h3 className="text-center text-2xl font-bold mb-10 text-white">كيف نعمل؟</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {WORKFLOW_STEPS.map((step, idx) => (
               <div key={idx} className="text-center relative">
                 <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                   {idx + 1}
                 </div>
                 {idx < WORKFLOW_STEPS.length - 1 && (
                   <div className="hidden md:block absolute top-6 right-1/2 w-full h-0.5 bg-slate-700 -z-0"></div>
                 )}
                 <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                 <p className="text-sm text-slate-400">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};