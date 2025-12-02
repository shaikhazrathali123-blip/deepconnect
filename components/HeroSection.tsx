import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScanFace, Sparkles, Heart,Brain } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [isMatchActive, setIsMatchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMatchActive(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" flex flex-col items-center justify-center px-6 relative pt-12 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-neon-pink/20 blur-[100px]" />
         <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-neon-blue/20 blur-[100px]" />
      </div>

      {/* --- SIMPLIFIED VISUALIZATION (ROW LAYOUT) --- */}
      <div className="relative w-full max-w-[340px] flex flex-row items-center justify-between mb-16 z-10 px-1 h-32">
        
        {/* Connection Line Background (Horizontal) */}
        <div className="absolute left-10 right-10 top-1/2 h-0.5 bg-white/5 -translate-y-[calc(50%+10px)] z-0" />
        
        {/* Animated Data Flow Line (Horizontal) */}
        <motion.div 
            className="absolute left-10 right-10 top-1/2 h-0.5 -translate-y-[calc(50%+10px)] bg-gradient-to-r from-transparent via-white to-transparent opacity-50 z-0"
            animate={{ 
                backgroundPosition: ["-100% 0%", "200% 0%"],
                opacity: [0, 1, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "50% 100%", backgroundRepeat: "no-repeat" }}
        />

        {/* LEFT NODE: YOU */}
        <div className="relative z-20 flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-[#0F131F] border border-neon-pink shadow-[0_0_20px_rgba(255,79,206,0.4)] flex items-center justify-center relative bg-black/50 backdrop-blur-md">
                <ScanFace className="text-neon-pink" size={24} />
                {/* Corner Accents */}
                <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-neon-pink" />
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t-2 border-r-2 border-neon-pink" />
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b-2 border-l-2 border-neon-pink" />
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-neon-pink" />
            </div>
            <span className="text-[10px] font-bold tracking-widest text-neon-pink uppercase">You</span>
        </div>

        {/* CENTER NODE: AI AGENT */}
        <div className="relative z-20 flex flex-col items-center justify-center -translate-y-2">
             <div className="w-20 h-20 flex items-center justify-center relative mb-2">
                {/* Rotating Outer Ring */}
                <motion.div 
                    className="absolute inset-0 border border-white/10 rounded-full border-t-white/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                 {/* Counter Rotating Inner Ring */}
                <motion.div 
                    className="absolute inset-2 border border-white/5 rounded-full border-b-neon-blue/50"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Core Icon */}
                <div className="w-10 h-10 bg-black rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <Brain className="text-white animate-pulse" size={16} />
                </div>
             </div>

             {/* Status Label (Below center node) */}
             <div className="absolute top-full -mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                <AnimatePresence mode="wait">
                    {isMatchActive ? (
                        <motion.div 
                            key="found"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-neon-blue text-[10px] font-bold tracking-wider">MATCH FOUND</span>
                            <span className="text-gray-500 text-[9px]">98% Compatible</span>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="scanning"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-gray-400 text-[10px] font-mono tracking-wider">SCANNING...</span>
                            <span className="text-gray-600 text-[9px]">Analyzing Vibe</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>

        {/* RIGHT NODE: THE MATCH */}
        <div className="relative z-20 flex flex-col items-center gap-3">
            <motion.div 
                className="w-16 h-16 rounded-2xl bg-[#0F131F] border border-neon-blue flex items-center justify-center relative overflow-hidden shadow-[0_0_20px_rgba(76,191,255,0.4)] bg-black/50 backdrop-blur-md"
                animate={{ 
                    borderColor: isMatchActive ? '#4CBFFF' : '#1F2937',
                    boxShadow: isMatchActive ? '0 0 20px rgba(76,191,255,0.4)' : 'none'
                }}
            >
                <AnimatePresence mode="wait">
                    {isMatchActive ? (
                        <motion.div 
                            key="match"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="flex items-center justify-center w-full h-full bg-neon-blue/10"
                        >
                            <Heart className="text-neon-blue fill-neon-blue" size={24} />
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="nomatch"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center w-full h-full"
                        >
                            <div className="w-6 h-0.5 bg-gray-700 rounded animate-pulse mb-1" />
                            <div className="w-4 h-0.5 bg-gray-700 rounded animate-pulse" />
                        </motion.div>
                    )}
                </AnimatePresence>
                
                {/* Corner Accents */}
                <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-neon-blue" />
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t-2 border-r-2 border-neon-blue" />
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b-2 border-l-2 border-neon-blue" />
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-neon-blue" />
            </motion.div>
            <span className="text-[10px] font-bold tracking-widest text-neon-blue uppercase">Match</span>
        </div>

      </div>

      {/* --- CONTENT --- */}
      <div className="w-full max-w-sm text-center z-10">
        <h1 className="text-4xl font-display font-bold text-white mb-3">
          Stop Swiping.
          <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">Start Connecting.</span>
        </h1>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Your personal AI agent learns about you and negotiates matches for you, filtering 99% of the noise.
        </p>
      </div>
    </section>
  );
};