import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Bot, HeartHandshake, Zap } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
    const steps = [
        { icon: <UserPlus />, title: "Create Profile", desc: "Simple, mobile-friendly setup." },
        { icon: <Bot />, title: "AI Learns Vibe", desc: "Captures humor & texting tone." },
        { icon: <Zap />, title: "Date Finder AI", desc: "Runs deep compatibility check." },
        { icon: <HeartHandshake />, title: "High-Qual Match", desc: "If aligned, you connect." },
    ];

    return (
        <section className="py-16 px-6 bg-gradient-to-b from-transparent to-surface/50">
            <h2 className="text-2xl font-display font-bold text-center mb-10">System Workflow</h2>
            
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-pink via-neon-blue to-transparent opacity-30" />

                <div className="space-y-8">
                    {steps.map((step, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="flex items-center gap-6 relative"
                        >
                            <div className="relative z-10 w-14 h-14 rounded-full bg-background border border-white/20 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                <div className="text-neon-blue">
                                    {step.icon}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-bold text-lg">{step.title}</h3>
                                <p className="text-sm text-gray-500">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};