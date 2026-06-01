import { motion } from "motion/react";
import { STATS } from "../data/gymData";
import { Award, Target, Compass, Shield } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Scientific Precision",
      desc: "No guess-work. Every lift, meal, and session is driven by direct metabolic telemetry and postural biomechanics.",
    },
    {
      icon: Compass,
      title: "Hyper-Personalization",
      desc: "Our master coaches formulate a dedicated kinetic roadmap designed purely around your bodily structure and needs.",
    },
    {
      icon: Shield,
      title: "Atmosphere of Titans",
      desc: "Work out alongside elite driven performers, olympians, and visionary executives in absolute focus and privacy.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Light glow pattern */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#00FFFF]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Visual Storyteller */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-[#00FFFF]/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800"
                alt="Titan Fitness Interior"
                className="w-full object-cover h-[450px] brightness-75 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              
              {/* Premium Floating Quote */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-lg glass-panel-luxury border-[#00FFFF]/30">
                <span className="text-[#00FFFF] text-3xl font-serif">“</span>
                <p className="text-sm italic text-neutral-200 font-sans">
                  The human structure is the ultimate engineering masterpiece. We do not just build muscle; we construct resilient physical fortresses.
                </p>
                <div className="mt-2 text-[10px] font-mono tracking-widest text-[#00FFFF] uppercase">
                  — Marcus Rutherford, Director of Athletics
                </div>
              </div>
            </div>

            {/* Glowing gold back plate decoration */}
            <div className="absolute -inset-1 rounded-lg bg-[#00FFFF]/5 blur-lg -z-10" />
          </motion.div>

          {/* Right Narrative Copy */}
          <div className="flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-mono text-[#00FFFF] tracking-[0.3em] uppercase mb-3">
                THE STORY & MISSION
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white uppercase tracking-tight leading-tight mb-6">
                WHERE ATHLETIC SCIENCE <br />
                <span className="text-transparent text-outline-cyan inline-block mt-1">
                  MEETS PURE OPULENCE
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-300 space-y-4 text-base leading-relaxed"
            >
              <p>
                Titan Fitness was founded in 2014 with a singular objective: to eradicate the compromises of standard corporate gyms. We visualised a sanctuary where cutting-edge, evidence-based sports coaching is conducted in an environment of tailored luxury.
              </p>
              <p>
                In our halls, there are no generic workouts or crowded routines. Every client undergoes rigorous biomechanical diagnostic profiling. We monitor recovery indices, kinetic lines, and metabolic capacities. This hyper-scientific approach guarantees you bypass plateauing and unleash absolute strength.
              </p>
            </motion.div>

            {/* Core Pillars List */}
            <div className="mt-8 space-y-4">
              {values.map((v, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 p-4 rounded-lg bg-neutral-900/30 border border-neutral-800/50 hover:border-[#00FFFF]/25 transition-all duration-300"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded bg-[#00FFFF]/10 border border-[#00FFFF]/20 text-[#00FFFF]">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-semibold text-white uppercase tracking-wider">
                      {v.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Dynamic Numerical Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(0, 255, 255, 0.4)" }}
              className="p-6 sm:p-8 rounded-xl bg-[#0a0a0a] border border-white/5 text-center transition-luxury cursor-default relative overflow-hidden group"
            >
              {/* Subtle gold line hover indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00FFFF]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#ffffff] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-xs font-mono tracking-widest text-[#00FFFF] font-bold uppercase mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
