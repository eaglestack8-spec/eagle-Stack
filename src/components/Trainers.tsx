import { motion } from "motion/react";
import { TRAINERS } from "../data/gymData";
import { Linkedin, Twitter, Instagram, Award, Sparkles, ChevronRight } from "lucide-react";

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Golden gradient background leakages */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00FFFF]/2 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] rounded-full bg-neutral-950 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00FFFF] tracking-[0.3em] uppercase">
            THE CHRONICLERS OF FORM
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white uppercase mt-3 tracking-tight">
            MEET THE MASTER COACHES
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            Our trainers aren&apos;t just influencers. They are biomechanics, biochemists, and dedicated athletic coaches designed to re-engineer human movement.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {TRAINERS.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-[#0a0a0a] border border-white/5 overflow-hidden relative group shadow-2xl transition-all duration-300 rounded-sm"
            >
              {/* Image box with continuous hover zoom and deep overlay */}
              <div className="relative h-[360px] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top brightness-[0.8] hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Visual shade overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute inset-0 bg-neutral-950/5 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Floating Experience Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-black/70 border border-[#00FFFF]/30 rounded backdrop-blur-md">
                  <Award className="w-3.5 h-3.5 text-[#00FFFF]" />
                  <span className="text-[10px] font-mono tracking-widest text-[#00FFFF] uppercase">
                    {trainer.experience} EXP
                  </span>
                </div>
              </div>

              {/* Information Area */}
              <div className="p-6 relative">
                <div className="absolute -top-12 left-6 right-6">
                  {/* Gold thin border decoration under image */}
                  <div className="h-[2px] w-12 bg-gradient-to-r from-[#00FFFF] to-[#008B8B]" />
                </div>

                <span className="text-xs font-mono tracking-widest text-[#00FFFF] uppercase">
                  {trainer.role.toUpperCase()}
                </span>
                
                <h3 className="text-xl sm:text-2xl font-display font-medium text-white uppercase tracking-wide mt-1">
                  {trainer.name}
                </h3>

                <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed min-h-[72px]">
                  {trainer.bio}
                </p>

                {/* Specialties Chips */}
                <div className="mt-4 pt-4 border-t border-neutral-900">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-2">
                    CORE DISCIPLINE METRICS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300 font-medium tracking-wide"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social media connections row */}
                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider text-neutral-600">
                    TITAN BIOMETRIC CREDS
                  </span>
                  
                  <div className="flex items-center gap-3">
                    {trainer.socials.instagram && (
                      <a
                        href={`https://instagram.com/${trainer.socials.instagram}`}
                        className="p-1.5 rounded-full bg-neutral-900/60 text-neutral-400 hover:text-[#00FFFF] hover:bg-[#00FFFF]/5 transition-all duration-200"
                        title="Follow on Instagram"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {trainer.socials.twitter && (
                      <a
                        href={`https://twitter.com/${trainer.socials.twitter}`}
                        className="p-1.5 rounded-full bg-neutral-900/60 text-neutral-400 hover:text-[#00FFFF] hover:bg-[#00FFFF]/5 transition-all duration-200"
                        title="Follow on Twitter"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {trainer.socials.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${trainer.socials.linkedin}`}
                        className="p-1.5 rounded-full bg-neutral-900/60 text-neutral-400 hover:text-[#00FFFF] hover:bg-[#00FFFF]/5 transition-all duration-200"
                        title="Connect on LinkedIn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic Join Call to action banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-neutral-500 font-sans">
            Need hyper-specialized advice for injury rehabilitation? Our trainers are medical-board certified physical biomechanics.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-xs font-mono font-bold tracking-widest text-[#00FFFF] hover:text-[#aeffff] uppercase mt-3 hover:underline"
          >
            BOOK CONSULTATION COORDS
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
