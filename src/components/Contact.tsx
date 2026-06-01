import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Phone, Mail, Clock, ShieldCheck, Sparkles, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Biometric identification name is required.";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Digital communication coordinates (email) are required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please input a valid digital communication coordinate address.";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please detail your transmission message parameters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate submission
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        // Auto reset success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neutral-950 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-[#00FFFF]/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00FFFF] tracking-[0.3em] uppercase">
            TRANSMIT PORTAL SIGNALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white uppercase mt-3 tracking-tight">
            CONNECT WITH LIAISON CONCIERGE
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            Begin your athletic reconstruction. Schedule an on-premises physical tour, seek personalized biometric quotes, or initiate custom telemetry programs.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Block: Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6 text-neutral-300">
              
              <div className="p-6 rounded-lg bg-[#0a0a0a] border border-white/5 group hover:border-[#00FFFF]/20 transition-colors">
                <h4 className="text-sm font-display font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FFFF]" />
                  SANCTUARY LOCATION
                </h4>
                <div className="flex items-start gap-3 mt-3">
                  <MapPin className="w-5 h-5 text-[#00FFFF]" />
                  <div className="text-sm">
                    <p className="font-semibold text-white">888 Olympus Springs Blvd</p>
                    <p className="text-neutral-400 text-xs mt-0.5">Olympic Heights district, Ste 440</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-[#0a0a0a] border border-white/5 group hover:border-[#00FFFF]/20 transition-colors">
                <h4 className="text-sm font-display font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FFFF]" />
                  CONCIERGE COMMUNICATIONS
                </h4>
                <div className="space-y-3 mt-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#00FFFF]" />
                    <span className="text-sm text-neutral-300 font-mono">+1 (800) TITAN-LINE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#00FFFF]" />
                    <span className="text-sm text-neutral-300 font-mono">desk@titanfitness.co</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-[#0a0a0a] border border-white/5 group hover:border-[#00FFFF]/20 transition-colors">
                <h4 className="text-sm font-display font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FFFF]" />
                  TEMPORAL BRACKETS
                </h4>
                <div className="flex items-start gap-3 mt-3">
                  <Clock className="w-5 h-5 text-[#00FFFF]" />
                  <div className="text-xs space-y-1 text-neutral-400">
                    <p className="flex justify-between gap-6">
                      <span className="font-semibold text-neutral-300">MON - FRI:</span>
                      <span>05:00 AM - 11:00 PM</span>
                    </p>
                    <p className="flex justify-between gap-6">
                      <span className="font-semibold text-neutral-300">SAT - SUN:</span>
                      <span>07:00 AM - 08:00 PM</span>
                    </p>
                    <p className="text-[10px] italic text-[#00FFFF] mt-1">
                      Note: Thermal recovery suites close 30 minutes prior.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="p-4 rounded bg-[#00FFFF]/5 border border-[#00FFFF]/15 text-[11px] text-neutral-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00FFFF] flex-shrink-0" />
              <span>Security encryption: Information transmitted stays strictly physical and private.</span>
            </div>

          </div>

          {/* Right Block: Message Form Fields (7 cols) */}
          <div className="lg:col-span-7 bg-[#0a0a0a] p-6 sm:p-10 rounded-xl border border-white/5 flex flex-col justify-between shadow-2xl relative">
            
            {/* Form layout */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div className="relative">
                <label className="text-xs font-mono text-neutral-400 tracking-wider uppercase block mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded bg-[#050505] border text-white font-sans text-sm focus:outline-none transition-luxury ${
                    errors.name
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/5 focus:border-[#00FFFF]"
                  }`}
                  placeholder="e.g., Arthur Pendelton"
                />
                {errors.name && (
                  <p className="text-[11px] text-red-400 font-mono mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="text-xs font-mono text-neutral-400 tracking-wider uppercase block mb-1.5">
                  Digital coordinate (email address)
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded bg-[#050505] border text-white font-sans text-sm focus:outline-none transition-luxury ${
                    errors.email
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/5 focus:border-[#00FFFF]"
                  }`}
                  placeholder="e.g., arthur@titan.com"
                />
                {errors.email && (
                  <p className="text-[11px] text-red-400 font-mono mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Input */}
              <div className="relative">
                <label className="text-xs font-mono text-neutral-400 tracking-wider uppercase block mb-1.5">
                  Message parameters
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded bg-[#050505] border text-white font-sans text-sm focus:outline-none transition-luxury resize-none ${
                    errors.message
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/5 focus:border-[#00FFFF]"
                  }`}
                  placeholder="Describe your athletic background and matching targets..."
                />
                {errors.message && (
                  <p className="text-[11px] text-red-400 font-mono mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit trigger button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded bg-[#00FFFF] text-black font-display font-black text-xs tracking-widest uppercase hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer shadow-[0_10px_20px_rgba(0, 255, 255,0.25)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-black" />
                  {isSubmitting ? "TRANSMITTING TELEMETRY..." : "TRANSMIT COORDINATES"}
                </button>
              </div>

            </form>

            {/* Glowing Success Alert drawer */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="absolute inset-4 sm:inset-6 bg-[#050505]/98 backdrop-blur rounded-xl border border-[#00FFFF]/50 p-6 flex flex-col justify-center items-center text-center z-10 shadow-2xl"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00FFFF]/20 border border-[#00FFFF] flex items-center justify-center text-[#00FFFF] mb-4 shadow animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-[#00FFFF]" />
                    <span className="text-xs font-mono text-[#00FFFF] tracking-widest uppercase">
                      TRANSMISSION SUCCESSFUL
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-wider mt-2">
                    COORDINATES REGISTERED
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mt-3 leading-relaxed font-sans">
                    Your form parameters are stored safely. A Titan private executive coaching liaison will contact you via your digital terminal within sixty minutes.
                  </p>

                  <button
                    onClick={() => setShowSuccess(false)}
                    className="mt-6 px-6 py-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-[#00FFFF] text-xs font-mono tracking-widest uppercase cursor-pointer"
                  >
                    CLOSE WINDOW
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
