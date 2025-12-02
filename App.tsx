import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { CompatibilitySection } from './components/CompatibilitySection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ComingSoonSection } from './components/ComingSoonSection';
import { StickyCTA } from './components/StickyCTA';
import { Footer } from './components/Footer';
import { BackgroundParticles } from './components/ui/BackgroundParticles';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full flex justify-center bg-black">
      {/* 
        Constrain width to mobile size even on desktop to adhere to "No desktop layout" 
        and "Mobile-only" feel.
      */}
      <div className="w-full max-w-[430px] bg-background relative overflow-hidden shadow-2xl shadow-neon-blue/20 min-h-screen">
        
        {/* Global Background Effects */}
        <BackgroundParticles />
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-neon-pink/10 via-transparent to-transparent pointer-events-none z-0" />
        
        <main className="relative z-10 pb-32">
          <HeroSection />
          <CompatibilitySection />
          <FeaturesSection />
          <HowItWorksSection />
          <ComingSoonSection />
          <Footer />
        </main>

        <StickyCTA />
      </div>
    </div>
  );
}