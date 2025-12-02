import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Activity, Lock } from 'lucide-react';

export const ComingSoonSection: React.FC = () => {
    const features = [
        { label: "AI Icebreakers", icon: <MessageSquare size={16} /> },
        { label: "Date Planning", icon: <Calendar size={16} /> },
        { label: "Vibe Tracker", icon: <Activity size={16} /> },
        { label: "VIP Profile", icon: <Lock size={16} /> },
    ];

    return (
        <section className="py-16 px-6">
            <h2 className="text-xl font-display font-bold mb-6 text-gray-200">Coming Soon Features</h2>
            <div className="grid grid-cols-2 gap-4">
                {features.map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="bg-surface/50 border border-neon-pink/20 p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-center h-32 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="text-neon-pink mb-1">{item.icon}</div>
                        <span className="text-sm font-bold text-gray-300 relative z-10">{item.label}</span>
                    </motion.div>
                ))}
            </div>
            
      
        </section>
    );
};