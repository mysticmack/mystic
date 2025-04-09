'use client';

import React, { useEffect, useState } from 'react';

interface AnimatedHeroTextProps {
  title: string;
  subtitle: string;
}

export default function AnimatedHeroText({ title, subtitle }: AnimatedHeroTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLetterIndex, setHoveredLetterIndex] = useState<number | null>(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Highlight keywords in subtitle
  const highlightWords = (text: string) => {
    const keywords = ['psychedelic medicine', 'consciousness expansion', 'seed', 'pre-seed'];
    let highlightedText = text;
    
    keywords.forEach(keyword => {
      highlightedText = highlightedText.replace(
        new RegExp(`(${keyword})`, 'gi'),
        '<span class="text-glow font-semibold text-purple-200">$1</span>'
      );
    });
    
    return <p 
      className={`text-xl md:text-2xl mb-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: '0.5s' }}
      dangerouslySetInnerHTML={{ __html: highlightedText }}
    />;
  };

  return (
    <div className="text-center">
      <h1 
        className={`text-4xl md:text-6xl font-bold mb-6 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {title.split('').map((char, index) => (
          <span 
            key={index} 
            className={`inline-block transition-all duration-300 hover:text-purple-300 ${
              hoveredLetterIndex === index ? 'text-purple-300 transform scale-110' : ''
            }`}
            style={{
              animation: `float-text 3s ease-in-out infinite`,
              animationDelay: `${index * 0.05}s`,
              textShadow: hoveredLetterIndex === index 
                ? '0 0 15px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)' 
                : 'none'
            }}
            onMouseEnter={() => setHoveredLetterIndex(index)}
            onMouseLeave={() => setHoveredLetterIndex(null)}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
      
      {highlightWords(subtitle)}
    </div>
  );
} 