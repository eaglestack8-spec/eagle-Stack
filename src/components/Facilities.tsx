import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FACILITIES } from "../data/gymData";
import { Check, ShieldAlert, Dumbbell, Sparkles, Heart } from "lucide-react";

export default function Facilities() {
  const [activeFacility, setActiveFacility] = useState(FACILITIES[0].id);

  const activeData = FACILITIES.find((f) => f.id === activeFacility) || FACILITIES[0];

  return (
    <section id="facilities" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Dynamic background light overlay */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[#00FFFF]/2 blur-[125px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-neutral-950 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00FFFF] tracking-[0.3em] uppercase">
            EXPLORE THE SANCTUARY
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white uppercase mt-3 tracking-tight">
            WORLD-CLASS CHANNELS FOR <br />
            <span className="text-transparent text-outline-cyan inline-block mt-1">
              ABSOLUTELY NO COMPROMISE
            </span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#00FFFF]/50 to-transparent mx-auto mt-6" />
        </div>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Quick Selectors (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {FACILITIES.map((facility) => {
              const isSelected = facility.id === activeFacility;
              return (
                <button
                  key={facility.id}
                  onClick={() => setActiveFacility(facility.id)}
                  className={`w-full text-left p-6 rounded-lg transition-luxury border cursor-pointer relative overflow-hidden group flex flex-col ${
                    isSelected
                      ? "bg-[#0a0a0a] border-[#00FFFF]/40 shadow-lg shadow-[#00FFFF]/3"
                      : "bg-[#050505]/40 border-white/5 hover:border-neutral-800 hover:bg-[#0a0a0a]/10"
                  }`}
                >
                  {/* Selected Indicator bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeFacilityIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00FFFF] to-[#008B8B]"
                    />
                  )}

                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-mono tracking-widest ${
                      isSelected ? "text-[#00FFFF]" : "text-neutral-500"
                    }`}>
                      {facility.id === "fac-1" ? "CHAMBER 01" : facility.id === "fac-2" ? "CHAMBER 02" : facility.id === "fac-3" ? "CHAMBER 03" : "CHAMBER 04"}
                    </span>
                  </div>

                  <span className={`text-base sm:text-lg font-display font-bold mt-2 uppercase tracking-wide group-hover:translate-x-1 transition-transform duration-300 ${
                    isSelected ? "text-white" : "text-neutral-400 group-hover:text-neutral-200"
                  }`}>
                    {facility.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Premium Active Detail Showcase (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFacility}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-neutral-950/60 rounded-xl border border-neutral-900 overflow-hidden shadow-2xl"
              >
                {/* Image display */}
                <div className="relative h-[320px] sm:h-[400px] overflow-hidden group">
                  <img
                    src={activeData.image}
                    alt={activeData.title}
                    className="w-full h-full object-cover brightness-75 scale-100 group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                  
                  {/* Decorative badge overlay */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-black/60 border border-white/10 rounded backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#00FFFF]" />
                    <span className="text-[9px] font-mono tracking-widest text-[#00FFFF] uppercase">
                      LUXURY CALIBRATED
                    </span>
                  </div>
                </div>

                {/* Content description & specifications matrix */}
                <div className="p-6 sm:p-10">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-wide">
                    {activeData.title}
                  </h3>
                  
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mt-4">
                    {activeData.description}
                  </p>

                  <div className="h-[1px] w-full bg-neutral-800/60 my-6" />

                  {/* Specifications checklist */}
                  <h4 className="text-xs font-mono text-[#00FFFF] tracking-widest uppercase mb-4">
                    TECHNICAL PARAMETERS & AMENITIES:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeData.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded bg-neutral-900/40 border border-neutral-900 hover:border-[#00FFFF]/15 hover:bg-neutral-900/60 transition-colors duration-200"
                      >
                        <div className="flex-shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#00FFFF]/10 border border-[#00FFFF]/20 text-[#00FFFF]">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-xs text-neutral-300 font-sans font-medium">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
