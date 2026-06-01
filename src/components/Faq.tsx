import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data/gymData";
import { ChevronDown, HelpCircle, ShieldQuestion } from "lucide-react";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Light spots */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#00FFFF]/2 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00FFFF] tracking-[0.3em] uppercase">
            CLEARING INTERROGATIVES
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white uppercase mt-3 tracking-tight">
            FREQUENTLY ASKED COORDS
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            Everything you need to know about admissions, medical Reciprocity tiers, and biomechanical structures.
          </p>
        </div>

        {/* Faqs Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`rounded border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#0a0a0a] border-[#00FFFF]/30 shadow-lg shadow-[#00FFFF]/2"
                    : "bg-[#0a0a0a] border-white/5 hover:border-[#00FFFF]/20"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isOpen ? "text-[#00FFFF]" : "text-neutral-500"}`} />
                    <span className="text-sm sm:text-base font-display font-bold text-white uppercase tracking-wide leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full bg-neutral-900/60 border border-neutral-850 text-neutral-400 group-hover:text-white transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#00FFFF] border-[#00FFFF]/20" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated accordion body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 sm:p-7 pt-0 border-t border-neutral-900/60 text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

        {/* Executive concierge contact quote block */}
        <div className="mt-12 p-6 rounded bg-[#0a0a0a] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldQuestion className="w-8 h-8 text-[#00FFFF] flex-shrink-0" />
            <div>
              <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                Still need custom diagnostics coordinates?
              </h4>
              <p className="text-xs text-neutral-500 font-sans mt-0.5">
                Our executive membership liaison desk responds within 60 minutes.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-[#00FFFF] hover:text-[#aeffff] border border-neutral-800 rounded font-mono text-xs font-bold tracking-widest uppercase transition-colors"
          >
            PING DESK NOW
          </a>
        </div>

      </div>
    </section>
  );
}
