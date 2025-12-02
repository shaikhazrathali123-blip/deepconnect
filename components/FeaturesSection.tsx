import React from 'react';
import { motion } from 'framer-motion';
import { ScanFace, UserCheck, Sparkles } from 'lucide-react';
import { FeatureCardProps } from '../types';

const features: FeatureCardProps[] = [
    {
        title: "Deep Compatibility",
        description: "AI learns your real vibe, not just what you put on your profile.",
        icon: <ScanFace className="text-neon-pink" size={24} />,
        delay: 0.1
    },
    {
        title: "No Random Swiping",
        description: "We filter the noise. You only see people matched by the Core.",
        icon: <UserCheck className="text-neon-blue" size={24} />,
        delay: 0.2
    },
    {
        title: "Future of Dating",
        description: "Detailed AI compatibility reports make connections feel magical.",
        icon: <Sparkles className="text-purple-400" size={24} />,
        delay: 0.3
    }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 px-6">
        <div className="text-left mb-8">
            <h2 className="text-3xl font-display font-bold text-white leading-tight">Why DeepConnect<br/><span className="text-gray-500">works better.</span></h2>
        </div>
        
        <div className="space-y-4">
            {features.map((feature, idx) => (
                <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: feature.delay, duration: 0.5 }}
                    className="group bg-surface border border-white/5 hover:border-neon-pink/30 p-6 rounded-2xl transition-all duration-300 shadow-lg"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-neon-pink transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  );
};