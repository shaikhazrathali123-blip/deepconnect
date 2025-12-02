import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';

// 🔥 Init Supabase
const supabase = createClient(
  'https://mkyzhcwtxfsrvocksfuc.supabase.co'!,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1reXpoY3d0eGZzcnZvY2tzZnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NDYzMTMsImV4cCI6MjA4MDIyMjMxM30.0FhPntfw3s1eSCTIzJDiGvKzED3WAr6cWxpEf3cPZaU'!
);


export const StickyCTA: React.FC = () => {
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ Email Validation
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ✅ Indian Phone Validation (10 digits, starts with 6–9)
  const isValidIndianPhone = (num: string) =>
    /^[6-9]\d{9}$/.test(num);

  const isFormValid =
    contact.trim() !== "" &&
    gender !== "" &&
    (isValidEmail(contact) || isValidIndianPhone(contact));

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setLoading(true);

    const { error } = await supabase.from("waitlist").insert([
      {
        contact,
        gender,
      },
    ]);

    setLoading(false);

    if (!error) setSuccess(true);
    else console.error(error);
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 w-full max-w-[430px] p-4 z-50 pointer-events-none"
    >
      <div className="bg-black/80 backdrop-blur-xl border-t border-white/10 p-4 rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.8)] pointer-events-auto">

        {/* BEFORE SUBMIT */}
        {!success && (
          <>
            {/* Contact Input */}
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="bg-surface border border-white/10 text-white rounded-lg px-4 py-3 w-full text-sm focus:outline-none focus:border-neon-pink transition-colors"
            />

            {/* Validation Message */}
            {contact && !isValidEmail(contact) && !isValidIndianPhone(contact) && (
              <p className="text-red-500 text-[11px] mt-1">
                Enter a valid email or 10-digit Indian phone number
              </p>
            )}

            {/* Gender Selection */}
            <div className="flex gap-2 mt-3">
              {["Male", "Female"].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`flex-1 py-2 rounded-lg text-sm border transition ${
                    gender === g
                      ? "bg-white text-black border-white"
                      : "border-white/20 text-white bg-white/5"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>

            {/* CTA Button at Bottom */}
            <button
              onClick={handleSubmit}
              disabled={!isFormValid || loading}
              className="w-full bg-white text-black font-bold py-3 rounded-lg text-sm mt-4 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "..." : "Join Early Access"}
            </button>

            <p className="text-[10px] text-center text-gray-500 mt-2">find your pair</p>
          </>
        )}

        {/* AFTER SUBMIT */}
        {success && (
          <div className="text-center text-white">
            <p className="text-sm font-semibold">You're in! 🎉</p>
            <p className="text-xs text-gray-400 mt-1">
              Share this link to get earlier access.
            </p>

            <button
              onClick={async () => {
                const shareUrl = "https://deepconnect-in.vercel.app/";

                if (navigator.share) {
                  try {
                    await navigator.share({
                      title: "the future of love is here ",
                      text: "Let Ai find your perfect match",
                      url: shareUrl,
                    });
                  } catch (err) {
                    console.log("cancelled");
                  }
                } else {
                  navigator.clipboard.writeText(shareUrl);
                  alert("Link copied!");
                }
              }}
              className="mt-3 bg-white text-black font-bold px-4 py-2 rounded-lg text-sm w-full"
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
