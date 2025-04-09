'use client';

import React from 'react';

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Purple blob */}
      <div className="absolute opacity-10 animate-float-slow" 
        style={{
          top: '10%',
          left: '5%',
          width: '30vw',
          height: '30vw',
          maxWidth: '500px',
          maxHeight: '500px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(139,92,246,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
        }}
      />
      
      {/* Indigo blob */}
      <div className="absolute opacity-10 animate-float-slow-reverse" 
        style={{
          top: '50%',
          right: '5%',
          width: '25vw',
          height: '25vw',
          maxWidth: '400px',
          maxHeight: '400px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(99,102,241,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
        }}
      />
      
      {/* Blue blob */}
      <div className="absolute opacity-10 animate-float-medium" 
        style={{
          bottom: '10%',
          left: '20%',
          width: '20vw',
          height: '20vw',
          maxWidth: '350px',
          maxHeight: '350px',
          background: 'radial-gradient(circle, rgba(79,70,229,0.6) 0%, rgba(79,70,229,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />

      {/* Additional animated elements for hero section */}
      <div className="absolute opacity-15 animate-pulse-slow" 
        style={{
          top: '20%',
          left: '40%',
          width: '20vw',
          height: '20vw',
          maxWidth: '300px',
          maxHeight: '300px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(139,92,246,0) 70%)',
          borderRadius: '40%',
          filter: 'blur(30px)',
          transformOrigin: 'center center',
        }}
      />

      <div className="absolute opacity-15 animate-float-quick" 
        style={{
          top: '25%',
          right: '30%',
          width: '15vw',
          height: '15vw',
          maxWidth: '250px',
          maxHeight: '250px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(79,70,229,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(25px)',
        }}
      />
    </div>
  );
} 