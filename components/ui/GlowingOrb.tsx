import React from 'react';
import { motion } from 'framer-motion';

interface GlowingOrbProps {
  color?: 'pink' | 'blue' | 'mixed';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  children?: React.ReactNode;
}

export const GlowingOrb: React.FC<GlowingOrbProps> = ({ 
  color = 'mixed', 
  size = 'md',
  animated = true,
  children
}) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  const gradientClass = {
    pink: 'from-neon-pink/40 to-transparent',
    blue: 'from-neon-blue/40 to-transparent',
    mixed: 'from-neon-pink/30 via-neon-blue/20 to-transparent'
  };

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses[size]}`}>
      {/* Outer Glow */}
      <motion.div 
        className={`absolute inset-0 rounded-full bg-gradient-to-tr ${gradientClass[color]} blur-2xl`}
        animate={animated ? {
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Core Sphere */}
      <div className="relative z-10 w-full h-full rounded-full border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center">
        {/* Animated Lines inside Orb */}
        <motion.div 
          className="absolute inset-[-50%] bg-[conic-gradient(transparent,rgba(255,79,206,0.3),transparent)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-[2px] bg-background rounded-full m-1" />
        <div className={`absolute inset-0 bg-radial-gradient ${gradientClass[color]} opacity-50`} />
        
        {/* Content Container */}
        <div className="relative z-20">
          {children}
        </div>
      </div>
    </div>
  );
};