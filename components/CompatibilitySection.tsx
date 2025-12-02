import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GlowingOrb } from './ui/GlowingOrb';
import { Cpu, CheckCircle2, ScanFace, MessageSquareText } from 'lucide-react';

export const CompatibilitySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const beamHeight = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);
  const chipOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const chipScale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);
  const bottomCardOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0.2, 1]);

  return (
    <section ref={containerRef} className="py-20 px-6 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-display font-bold text-white mb-2">How Date Finder AI Works</h2>
        <p className="text-sm text-gray-400">Your AI & Their AI analyze vibe & values.</p>
      </div>

      <div className="flex flex-col items-center relative">
        
        {/* Card 1: Your AI */}
        <div className="relative z-10 bg-surface/80 backdrop-blur-md border border-neon-pink/30 rounded-3xl p-6 w-full max-w-xs flex flex-col items-center text-center shadow-[0_0_15px_rgba(255,79,206,0.1)]">
          <div className="mb-4">
            <GlowingOrb color="pink" size="sm">
                <ScanFace className="text-white/80" size={32} strokeWidth={1.5} />
            </GlowingOrb>
          </div>
          <h3 className="text-white font-bold text-lg">Your AI clone</h3>
          <p className="text-xs text-gray-400 mt-1">Learns your vibe, humor, and values.</p>
        </div>

        {/* Connecting Beam */}
        <div className="w-1 h-32 relative my-2 overflow-hidden bg-white/5 rounded-full">
            <motion.div 
                style={{ height: beamHeight }}
                className="w-full bg-gradient-to-b from-neon-pink via-white to-neon-blue absolute top-0 left-0 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
            {/* Data particles falling */}
            <motion.div 
                className="absolute inset-0 w-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50"
                animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>

        {/* Result Chip (Appears in middle) */}
        <motion.div 
            style={{ opacity: chipOpacity, scale: chipScale }}
            className="absolute top-[45%] z-20"
        >
             <div className="bg-black/90 border border-white/20 backdrop-blur-xl rounded-xl p-4 shadow-2xl flex flex-col gap-2 w-48 border-t-neon-blue/50 border-b-neon-pink/50">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-1">
                    <span className="text-xs font-mono text-gray-400 flex items-center gap-1"><Cpu size={10}/> MATCH CORE</span>
                    <span className="text-neon-blue font-bold text-sm">92%</span>
                </div>
                <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Vibe</span>
                        <span className="text-green-400">High</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Values</span>
                        <span className="text-white">Synced</span>
                    </div>
                </div>
             </div>
        </motion.div>

        {/* Card 2: Their AI */}
        <motion.div 
            style={{ opacity: bottomCardOpacity }}
            className="relative z-10 bg-surface/80 backdrop-blur-md border border-neon-blue/30 rounded-3xl p-6 w-full max-w-xs flex flex-col items-center text-center shadow-[0_0_15px_rgba(76,191,255,0.1)] mt-2"
        >
          <div className="mb-4">
            <GlowingOrb color="blue" size="sm">
                <MessageSquareText className="text-white/80" size={32} strokeWidth={1.5} />
            </GlowingOrb>
          </div>
          <h3 className="text-white font-bold text-lg">Their AI</h3>
          <p className="text-xs text-gray-400 mt-1">Understands their communication style.</p>
        </motion.div>
      </div>

    </section>
  );
};