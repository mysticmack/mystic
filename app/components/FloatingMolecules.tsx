'use client';

import React, { useEffect, useRef } from 'react';

interface Molecule {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

export default function FloatingMolecules() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const moleculesRef = useRef<Molecule[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initMolecules();
    };

    const initMolecules = () => {
      moleculesRef.current = [];
      const moleculeCount = Math.min(Math.floor(window.innerWidth / 50), 15); // Responsive molecule count

      for (let i = 0; i < moleculeCount; i++) {
        moleculesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 20 + 10,
          speedX: Math.random() * 0.2 - 0.1,
          speedY: Math.random() * 0.2 - 0.1,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const drawMolecule = (molecule: Molecule) => {
      ctx.save();
      ctx.translate(molecule.x, molecule.y);
      ctx.rotate(molecule.rotation);
      ctx.globalAlpha = molecule.opacity;

      // Draw molecule structure
      ctx.beginPath();
      ctx.arc(0, 0, molecule.size / 2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw bonds
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(
          Math.cos(angle) * molecule.size,
          Math.sin(angle) * molecule.size
        );
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw electron pairs
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3;
        ctx.beginPath();
        ctx.arc(
          Math.cos(angle) * molecule.size,
          Math.sin(angle) * molecule.size,
          2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = 'rgba(139, 92, 246, 0.4)';
        ctx.fill();
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      moleculesRef.current.forEach((molecule) => {
        // Update position
        molecule.x += molecule.speedX;
        molecule.y += molecule.speedY;
        molecule.rotation += molecule.rotationSpeed;

        // Wrap around edges
        if (molecule.x < -molecule.size) molecule.x = canvas.width + molecule.size;
        if (molecule.x > canvas.width + molecule.size) molecule.x = -molecule.size;
        if (molecule.y < -molecule.size) molecule.y = canvas.height + molecule.size;
        if (molecule.y > canvas.height + molecule.size) molecule.y = -molecule.size;

        drawMolecule(molecule);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
} 