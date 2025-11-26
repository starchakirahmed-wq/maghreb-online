import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'أعمالنا', href: '#portfolio' },
    { name: 'الأسعار', href: '#pricing' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-orange-500">شركة</span> مغرب أونلاين
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-200 hover:text-orange-500 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/212785818406"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold transition-transform hover:scale-105 flex items-center gap-2"
          >
            <Phone size={18} />
            تواصل معنا
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-200 hover:text-orange-500 font-medium py-2 border-b border-slate-800 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/212785818406"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)} 
            className="bg-orange-500 text-center text-white px-5 py-3 rounded-lg font-bold"
          >
            تواصل معنا عبر واتساب
          </a>
        </div>
      )}
    </nav>
  );
};