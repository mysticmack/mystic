'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10%',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections except the first one
    const sections = document.querySelectorAll('section:not(:first-child)');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
} 