import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CLASS_SCHEDULE } from "../data/gymData";
import { Calendar, Clock, MapPin, User, Gauge } from "lucide-react";

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const activeDayData = CLASS_SCHEDULE.find((d) => d.day === selectedDay) || CLASS_SCHEDULE[0];

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const getIntensityStyles = (intensity: "High" | "Medium" | "Low") => {
    switch (intensity) {
      case "High":
        return {
          bg: "bg-red-500/10 border-red-500/20 text-red-400",
          dot: "bg-red-500 shadow-red-500/50",
        };
      case "Medium":
        return {
          bg: "bg-[#00FFFF]/10 border-[#00FFFF]/20 text-[#e0ffff]",
          dot: "bg-[#00FFFF] shadow-[#00FFFF]/50",
        };
      case "Low":
        return {
          bg: "bg-zinc-500/10 border-zinc-500/20 text-zinc-300",
          dot: "bg-zinc-300 shadow-zinc-300/50",
        };
    }
  };

  return (
    <section id="classes" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative vector meshes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-[#00FFFF]/2 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00FFFF] tracking-[0.3em] uppercase">
            CHRONOLOGY OF POWER
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white uppercase mt-3 tracking-tight">
            TITAN MASTERCLASS SCHEDULE
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            Choose your physical test. Staggered slots customized for busy professionals, corporate elite, and rigorous athletic conditioning.
          </p>
        </div>

        {/* Days of the Week Selectors Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-white/5">
          {daysOfWeek.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-3 rounded-md text-xs sm:text-sm font-display font-bold tracking-widest uppercase transition-luxury cursor-pointer ${
                  isSelected
                    ? "bg-cyan-gradient text-neutral-950 font-black shadow-lg"
                    : "bg-[#121212] text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800/60"
                }`}
              >
                {day.substring(0, 3)}
              </button>
            );
          })}
        </div>

        {/* Class Timetable Box */}
        <div className="bg-[#0a0a0a] rounded-xl border border-white/5 overflow-hidden shadow-2xl p-4 sm:p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#050505]">
            <Calendar className="w-5 h-5 text-[#00FFFF]" />
            <h3 className="text-lg font-display font-bold uppercase tracking-wider text-white">
              CLASSES IN SESSION ON <span className="text-[#00FFFF]">{selectedDay.toUpperCase()}</span>
            </h3>
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDay}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {activeDayData.classes.length === 0 ? (
                  <div className="text-center py-12 text-neutral-500 font-sans text-sm">
                    No classes planned today.
                  </div>
                ) : (
                  activeDayData.classes.map((cls, idx) => {
                    const intensity = getIntensityStyles(cls.intensity);
                    return (
                      <motion.div
                        key={cls.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                         className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-5 sm:p-6 rounded-lg bg-[#050505] border border-white/5 hover:border-[#00FFFF]/30 transition-all duration-300 relative group overflow-hidden"
                      >
                        {/* Hidden border hover indicator */}
                        <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-[#00FFFF] scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                        {/* Col 1: Time Bracket (3 cols) */}
                        <div className="md:col-span-3 flex items-center gap-3">
                          <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded bg-[#00FFFF]/5 border border-[#00FFFF]/15 text-[#00FFFF]">
                            <Clock className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs text-neutral-500 font-mono tracking-wider">TIMELY INTERVAL</span>
                            <div className="text-sm sm:text-base font-display font-bold text-white tracking-wide">
                              {cls.time}
                            </div>
                          </div>
                        </div>

                        {/* Col 2: Course details (4 cols) */}
                        <div className="md:col-span-4 justify-start">
                          <span className="text-xs text-[#00FFFF] font-mono tracking-wider uppercase">PROGRAM SPECIFIC</span>
                          <h4 className="text-base sm:text-lg font-display font-extrabold text-white tracking-wide group-hover:text-[#00FFFF] transition-all">
                            {cls.className}
                          </h4>
                        </div>

                        {/* Col 3: Instructor & Location (3 cols) */}
                        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-2">
                          <div className="flex items-center gap-2 text-neutral-400 text-xs font-sans">
                            <User className="w-3.5 h-3.5 text-[#00FFFF]/70 flex-shrink-0" />
                            <span className="truncate">{cls.trainer}</span>
                          </div>
                          <div className="flex items-center gap-2 text-neutral-400 text-xs font-sans">
                            <MapPin className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
                            <span className="truncate">{cls.room}</span>
                          </div>
                        </div>

                        {/* Col 4: Metrics details & intensity (2 cols) */}
                        <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-neutral-900">
                          <span className="text-xs text-neutral-500 font-mono">{cls.duration}</span>
                          <div className={`px-2.5 py-1 rounded-full border flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold tracking-wider ${intensity.bg}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${intensity.dot} animate-pulse`} />
                            {cls.intensity}
                          </div>
                        </div>

                      </motion.div>
                    );
                  })
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Class Disclaimer Quote */}
        <div className="mt-8 p-4 rounded-lg bg-[#0a0a0a] border border-white/5 text-center text-xs text-neutral-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <span className="text-[#00FFFF] font-mono tracking-widest font-bold">BIOMETRIC RECOMMENDATION:</span>
          <span>We strongly advise hydrating 45-mins before high-intensity protocols.</span>
        </div>

      </div>
    </section>
  );
}
