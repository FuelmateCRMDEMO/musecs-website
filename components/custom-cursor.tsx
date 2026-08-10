'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse coordinates motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring with organic lag
  const springConfigRing = { damping: 25, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfigRing);
  const ringY = useSpring(mouseY, springConfigRing);

  // Tighter springs for inner dot
  const springConfigDot = { damping: 35, stiffness: 400, mass: 0.1 };
  const dotX = useSpring(mouseX, springConfigDot);
  const dotY = useSpring(mouseY, springConfigDot);

  useEffect(() => {
    // Check for touch primary input
    if (window.matchMedia('(pointer: coarse)').matches) {
      setTimeout(() => setIsTouchDevice(true), 0);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Outer expanding ring */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-accent/60 mix-blend-screen"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 56 : 32,
          height: isHovered ? 56 : 32,
          scale: isClicking ? 0.85 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovered ? 'rgba(0, 210, 255, 0.08)' : 'rgba(0, 210, 255, 0)',
          borderColor: isHovered ? 'rgba(0, 210, 255, 0.9)' : 'rgba(0, 210, 255, 0.4)',
          boxShadow: isHovered
            ? '0 0 20px rgba(0, 210, 255, 0.5), inset 0 0 10px rgba(0, 210, 255, 0.2)'
            : '0 0 8px rgba(0, 210, 255, 0.2)',
        }}
        transition={{
          width: { duration: 0.2, ease: 'easeOut' },
          height: { duration: 0.2, ease: 'easeOut' },
          scale: { duration: 0.15 },
          opacity: { duration: 0.2 },
          backgroundColor: { duration: 0.2 },
          borderColor: { duration: 0.2 },
          boxShadow: { duration: 0.2 },
        }}
      />

      {/* Inner sharp precision dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-accent"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 8px #00D2FF',
        }}
        animate={{
          scale: isHovered ? 0.5 : isClicking ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
