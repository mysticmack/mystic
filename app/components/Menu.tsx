'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-menu]')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative z-50" data-menu>
      {/* Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-white flex items-center gap-2 group"
        aria-expanded={isOpen}
        aria-controls="navigation-menu"
      >
        <span className="text-sm tracking-widest">MENU</span>
        <div className={`w-8 h-8 border border-white/30 rotate-45 transition-transform duration-500 ${isOpen ? 'rotate-[225deg]' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <div 
        id="navigation-menu"
        className={`absolute top-full right-0 mt-4 w-64 bg-[#0B0B0F]/95 backdrop-blur-lg border border-white/10 transform transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="py-4">
          <ul className="space-y-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/team', label: 'Team' },
              { href: '/contact', label: 'Contact' },
              { href: '/invest', label: 'Invest' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-6 py-3 text-lg font-light tracking-wide transition-colors ${
                    pathname === link.href
                      ? 'text-white bg-white/5'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
} 