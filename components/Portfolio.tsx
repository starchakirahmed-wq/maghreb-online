import React from 'react';
import { PORTFOLIO } from '../constants';
import { ExternalLink } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-wider uppercase">أعمالنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            بعض من مشاريعنا المميزة
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            تصفح أحدث المواقع والمتاجر التي قمنا بتصميمها لشركائنا في النجاح.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-400 font-medium text-sm mb-2">{item.category}</span>
                <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                <div className="flex items-center text-white gap-2 font-medium">
                  <span>مشاهدة المشروع</span>
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-slate-900 font-bold border-b-2 border-orange-500 pb-1 hover:text-orange-500 transition-colors">
            شاهد المزيد من الأعمال
          </button>
        </div>
      </div>
    </section>
  );
};