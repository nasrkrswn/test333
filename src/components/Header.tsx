import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من أنا', href: '#about' },
    { name: 'الخدمات', href: '#services' },
    { name: 'الأعمال', href: '#projects' },
    { name: 'تواصل', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-[78px]">
          <a href="#home" className="flex items-center gap-3 font-extrabold text-lg">
            <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-gold-500/20 to-white/5 border border-gold-500/30 text-gold-400">
              K
            </span>
            <span>Karim Portfolio</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-400 font-semibold hover:text-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-[78px] left-4 right-4 bg-[#121212] border border-white/10 rounded-2xl p-4 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 font-semibold hover:text-gold-400 transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
