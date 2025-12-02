import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';

// 🔥 Init Supabase
const supabase = createClient(
  'https://mkyzhcwtxfsrvocksfuc.supabase.co'!,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1reXpoY3d0eGZzcnZvY2tzZnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NDYzMTMsImV4cCI6MjA4MDIyMjMxM30.0FhPntfw3s1eSCTIzJDiGvKzED3WAr6cWxpEf3cPZaU'!
);

export const StickyCTA: React.FC = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!value.trim()) return;

    setLoading(true);

    const { error } = await supabase
      .from("waitlist")
      .insert([{ contact: value }]);

    setLoading(false);

    if (!error) {
      setSuccess(true);
    } else {
      console.error(error);
    }
  };

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-0 w-full max-w-[430px] p-4 z-50 pointer-events-none"
    >
      <div className="bg-black/80 backdrop-blur-xl border-t border-white/10 p-4 rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.8)] pointer-events-auto">

        {/* 🟣 BEFORE SUBMIT */}
        {!success && (
          <>
            <div className="flex gap-3">
              <input 
                type="text" 
                placeholder="Email / Phone number" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-surface border border-white/10 text-white rounded-lg px-4 py-3 w-full text-sm focus:outline-none focus:border-neon-pink transition-colors"
              />
              <button 
                onClick={handleSubmit}
                disabled={loading}
                className=" bg-white text-black font-bold whitespace-nowrap px-6 rounded-lg text-xs hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
{loading ? "..." : <>Join<br />early access</>}
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-500 mt-2">find your pair</p>
          </>
        )}

   {/* 🟢 AFTER SUBMIT */}
{success && (
  <div className="text-center text-white">
    <p className="text-sm font-semibold">You're in! 🎉</p>
    <p className="text-xs text-gray-400 mt-1">
      Share this link to get earlier access.
    </p>

    {/* Share Button */}
    <button
      onClick={async () => {
        const shareUrl = "https://yoursharelink.com";

        // Native mobile share sheet
        if (navigator.share) {
          try {
            await navigator.share({
              title: "Join this!",
              text: "Get early access with this link:",
              url: shareUrl,
            });
          } catch (err) {
            console.log("Share cancelled", err);
          }
        } else {
          // Fallback: copy to clipboard
          navigator.clipboard.writeText(shareUrl);
          alert("Link copied to clipboard!");
        }
      }}
      className="mt-3 bg-white text-black font-bold px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors w-full"
    >
      Share Link
    </button>

    <p className="text-[10px] text-gray-400 mt-1">
      Works on WhatsApp, Instagram, Messages & more
    </p>
  </div>
)}

      </div>
    </motion.div>
  );
};
