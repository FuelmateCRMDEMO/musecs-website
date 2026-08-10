'use client';

import { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion/react';

interface ServiceCardProps {
  service: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    num: string;
  };
  index: number;
}

export function MagneticServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const centerOffsetX = useMotionValue(0);
  const centerOffsetY = useMotionValue(0);

  // Smooth out the movement
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const smoothCenterOffsetX = useSpring(centerOffsetX, springConfig);
  const smoothCenterOffsetY = useSpring(centerOffsetY, springConfig);

  // Scale down the offset for different layers to create a parallax effect
  const iconX = useTransform(smoothCenterOffsetX, (v) => v * 0.15);
  const iconY = useTransform(smoothCenterOffsetY, (v) => v * 0.15);
  
  const contentX = useTransform(smoothCenterOffsetX, (v) => v * 0.05);
  const contentY = useTransform(smoothCenterOffsetY, (v) => v * 0.05);

  const backgroundX = useTransform(smoothCenterOffsetX, (v) => v * 0.05);
  const backgroundY = useTransform(smoothCenterOffsetY, (v) => v * 0.05);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x);
    mouseY.set(y);
    centerOffsetX.set(x - rect.width / 2);
    centerOffsetY.set(y - rect.height / 2);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    centerOffsetX.set(0);
    centerOffsetY.set(0);
  };

  const background = useMotionTemplate`radial-gradient(circle 250px at ${mouseX}px ${mouseY}px, rgba(0, 210, 255, 0.15), transparent 80%)`;

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group p-10 border-b border-gray-800 lg:border-r lg:[&:nth-child(3n)]:border-r-0 flex flex-col justify-between h-[280px] bg-transparent transition-colors relative overflow-hidden cursor-default"
    >
      {/* Background glow that follows cursor */}
      <motion.div 
         className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 z-0"
         style={{ background }}
      />
      
      {/* Magnetic background shift effect */}
      <motion.div
        className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          x: backgroundX,
          y: backgroundY,
          scale: 1.05
        }}
      />
      
      <div className="flex justify-between items-start relative z-10">
        <span className="text-[10px] font-bold text-accent uppercase letter-spacing-widest">{service.num}{' // Service'}</span>
        <motion.div 
          className="text-gray-600 transition-colors duration-300"
          animate={{
            color: isHovered ? '#00D2FF' : '#4B5563',
            filter: isHovered ? 'drop-shadow(0 0 12px rgba(0, 210, 255, 0.8))' : 'drop-shadow(0 0 0px rgba(0, 210, 255, 0))',
          }}
          style={{
            x: iconX,
            y: iconY,
          }}
        >
          {service.icon}
        </motion.div>
      </div>
      <motion.div 
        className="relative z-10"
        style={{
          x: contentX,
          y: contentY,
        }}
      >
        <h3 className="text-lg font-bold mb-3 text-white transition-colors duration-300">{service.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed font-light">{service.desc}</p>
      </motion.div>
    </motion.div>
  );
}
