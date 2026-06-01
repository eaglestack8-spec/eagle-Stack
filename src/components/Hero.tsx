import { motion } from "motion/react";
import { ChevronRight, Dumbbell, ShieldAlert, Sparkles } from "lucide-react";

interface HeroProps {
  onJoinClick: () => void;
  onViewPlansClick: () => void;
}

export default function Hero({ onJoinClick, onViewPlansClick }: HeroProps) {
  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Cinematic Image overlayed with a custom rich radial dark gradient */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-[1.03]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(13, 13, 13, 0.4) 0%, rgba(13, 13, 13, 0.75) 60%, rgba(13, 13, 13, 1) 100%), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920')`,
        }}
      />

      {/* Decorative gradient light leakage (top-right and bottom-left) */}
      <div className="absolute top-1/4 right-[10%] w-[35rem] h-[35rem] rounded-full bg-[#00FFFF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[40rem] h-[40rem] rounded-full bg-neutral-900/40 blur-[150px] pointer-events-none" />

      {/* Hero Visual Contents */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center flex flex-col items-center">
        
        {/* Superior Label with micro-sparkle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/60 border border-[#00FFFF]/30 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00FFFF]" />
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#00FFFF] uppercase">
            Olympus Standards Reconstructed
          </span>
        </motion.div>

        {/* Est. 2008 & Powerful Display Headline */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#00FFFF] font-serif italic text-lg sm:text-xl md:text-2xl mb-4 block"
          >
            Est. 2008 — Luxury Strength & Wellness
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-display font-black leading-[0.85] text-white uppercase tracking-tighter mb-6 text-shadow-lg"
          >
            Ascend to<br/>
            <span className="text-transparent text-outline-white inline-block mt-2 relative">
              GLORY
              <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00FFFF]/50 to-transparent" />
            </span>
          </motion.h1>
        </div>

        {/* Short Premium Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed font-sans"
        >
          Enter a sanctuary where elite level sports science intersects with bespoke luxury. 
          Our master biochemists and custom biomechanical suites are calibrated to forge absolute power.
        </motion.p>

        {/* Buttons Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto"
        >
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto px-10 py-5 bg-[#00FFFF] text-black font-display font-bold text-xs tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_10px_20px_rgba(0, 255, 255,0.25)] rounded-sm"
          >
            JOIN THE ELITE
          </button>

          <button
            onClick={onViewPlansClick}
            className="w-full sm:w-auto px-8 py-5 bg-transparent border-b-2 border-white/20 hover:border-[#00FFFF] text-white hover:text-[#00FFFF] font-display font-bold text-xs tracking-widest transition-all duration-300 cursor-pointer uppercase rounded-sm"
          >
            VIEW PROGRAMS
          </button>
        </motion.div>

        {/* Floating Mini Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden sm:flex items-center gap-8 mt-20 text-neutral-500 text-xs font-mono tracking-widest border-t border-white/5 pt-6 w-full max-w-4xl justify-around"
        >
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="text-[#00FFFF]">01</span>
            <span>BIOMETRIC COACHING</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#00FFFF]">02</span>
            <span>VOLCANIC THERMAL SUITE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#00FFFF]">03</span>
            <span>OLYMPIC BARBELL LEVEL</span>
          </div>
        </motion.div>
      </div>

      {/* Elegant fading visual separator at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </div>
  );
}
