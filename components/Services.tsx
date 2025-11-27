import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 relative inline-block">
            حلول رقمية متكاملة
            <span className="absolute bottom-2 right-0 w-full h-3 bg-orange-500/20 -z-10 rounded-full"></span>
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed">
            نقدم لك كل ما تحتاجه للنجاح في السوق الرقمي، من التصميم المتقن إلى التسويق الذكي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="glass-card bg-white/80 p-8 rounded-3xl border border-white/50 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full -mr-10 -mt-10 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-18 h-18 inline-flex items-center justify-center bg-white rounded-2xl shadow-lg mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 group-hover:rotate-6 p-4">
                  <service.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};