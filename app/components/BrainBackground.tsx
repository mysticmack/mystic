import React from 'react';
import Image from 'next/image';

export default function BrainBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute inset-0 bg-[#0B0B0F]" />
      <div className="relative w-full h-full">
        <Image
          src="/brain-pathways.jpg"
          alt="Neural pathways visualization"
          fill
          className="object-cover opacity-40 mix-blend-screen"
          priority
          quality={100}
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-[#0B0B0F]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F] via-transparent to-[#0B0B0F]" />
      </div>
    </div>
  );
} 