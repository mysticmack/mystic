'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from './Menu';
import BrainBackground from './BrainBackground';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when scrolling up or at top, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    
    // Add some throttling to prevent too many updates
    const throttledControlNavbar = () => {
      window.requestAnimationFrame(controlNavbar);
    };

    window.addEventListener('scroll', throttledControlNavbar);
    
    return () => {
      window.removeEventListener('scroll', throttledControlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-[#0B0B0F] relative overflow-hidden">
      <BrainBackground />
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#0B0B0F]/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Link href="/" className="relative w-48 h-12">
          <Image
            src="/mystic-logo.png"
            alt="Mystic Ventures"
            fill
            className="object-contain brightness-200 hover:brightness-150 transition-all duration-300"
            priority
          />
        </Link>
        <Menu />
      </nav>

      {/* Main Content */}
      <main className="relative min-h-screen pt-32 pb-16">
        {children}
      </main>
    </div>
  );
} 