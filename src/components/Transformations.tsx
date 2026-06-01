import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data/gymData";
import { ChevronLeft, ChevronRight, Quote, Flame, TrendingUp } from "lucide-react";

export default function Transformations() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeStory = TESTIMONIALS[activeIndex];

  return (
    <section id="results" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Light spots */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#00FFFF]/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-neutral-950 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00FFFF] tracking-[0.3em] uppercase">
            EMPIRICAL METRICS OF CHAMPIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white uppercase mt-3 tracking-tight">
            TRANSFORMATION CHRONICLES
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            Real biometric logs. These are not filtered lighting tricks—these are structured timelines of physical reconstruction, documented by master trainers.
          </p>
        </div>

        {/* Testimonials Slider Area */}
        <div className="relative max-w-6xl mx-auto">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center bg-[#0a0a0a] p-6 sm:p-12 rounded-xl border border-white/5 shadow-2xl"
            >
              
              {/* Left Column: Testimonial Metrics & Quotes (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#00FFFF]/10 border border-[#00FFFF]/20 rounded text-[10px] font-mono tracking-widest text-[#00FFFF] uppercase flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    ACHIEVEMENT RATED
                  </span>
                  <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    TIMEFRAME: {activeStory.timeframe}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#00FFFF] uppercase tracking-wide">
                  {activeStory.achievement}
                </h3>

                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-10 h-10 text-neutral-800/60 -z-10" />
                  <p className="text-sm sm:text-base text-neutral-300 font-sans italic leading-relaxed pt-2">
                    &quot;{activeStory.quote}&quot;
                  </p>
                </div>

                <div className="h-[1px] bg-neutral-800/60 w-full my-6" />

                {/* Metrics Breakdown cards */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 sm:p-4 rounded bg-neutral-900 border border-white/5">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">BEFORE WEIGHT</span>
                    <span className="text-base sm:text-lg font-display font-bold text-neutral-400 block mt-1">{activeStory.beforeWeight}</span>
                  </div>
                  <div className="p-3 sm:p-4 rounded bg-[#00FFFF]/5 border border-[#00FFFF]/15">
                    <span className="text-[10px] font-mono text-[#00FFFF] uppercase block">AFTER WEIGHT</span>
                    <span className="text-base sm:text-lg font-display font-extrabold text-[#00FFFF] block mt-1">{activeStory.afterWeight}</span>
                  </div>
                  <div className="p-3 sm:p-4 rounded bg-neutral-900 border border-white/5">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">SUBJECT</span>
                    <span className="text-sm sm:text-base font-display font-bold text-neutral-200 block mt-1 truncate">{activeStory.name}, {activeStory.age}</span>
                  </div>
                </div>

              </div>

              {/* Right Column: High-End Before / After Visualizations (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                
                <div className="grid grid-cols-2 gap-4 relative">
                  
                  {/* Before card */}
                  <div className="group/item relative rounded-lg overflow-hidden border border-neutral-900 h-[260px] sm:h-[300px]">
                    <img
                      src={activeStory.beforeImage}
                      alt={`${activeStory.name} Before`}
                      className="w-full h-full object-cover brightness-[0.7] grayscale scale-100 group-hover/item:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-black/80 rounded border border-neutral-800 text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                      BEFORE STAGE
                    </div>
                  </div>

                  {/* After Card */}
                  <div className="group/item relative rounded-lg overflow-hidden border border-[#00FFFF]/30 h-[260px] sm:h-[300px] shadow-lg shadow-[#00FFFF]/5">
                    <img
                       src={activeStory.afterImage}
                      alt={`${activeStory.name} After`}
                      className="w-full h-full object-cover brightness-[0.9] scale-100 group-hover/item:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 px-2.5 py-0.5 bg-[#00FFFF] rounded text-[10px] font-mono font-black tracking-widest text-black uppercase shadow">
                      TITAN AFTER
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controllers */}
          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white cursor-pointer active:scale-95 transition-all"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 text-[#00FFFF]" />
            </button>
            
            <div className="text-xs font-mono text-neutral-500">
              <span className="text-[#00FFFF] font-bold">{activeIndex + 1}</span> / {TESTIMONIALS.length}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white cursor-pointer active:scale-95 transition-all"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5 text-[#00FFFF]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
