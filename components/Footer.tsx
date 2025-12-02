import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-black text-center pb-32">
        <h3 className="font-display font-bold text-lg text-white mb-4">DeepConnect</h3>
        <div className="flex justify-center gap-6 text-xs text-gray-500 mb-6">
            <a href="#" className="hover:text-neon-pink">Privacy</a>
            <a href="#" className="hover:text-neon-pink">Terms</a>
<a href="mailto:hazrath543@gmail.com" className="hover:text-neon-pink">
  Contact
</a>        </div>
        <div className="w-12 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto rounded-full opacity-50" />
        <p className="text-[10px] text-gray-700 mt-4">Made for mobile. © 2025 deepconnect.</p>
    </footer>
  );
};