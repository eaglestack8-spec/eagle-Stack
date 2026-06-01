import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Award, ShieldAlert, KeyRound, ArrowRight } from "lucide-react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedPlan?: string;
}

export default function JoinModal({ isOpen, onClose, preSelectedPlan = "Titan Signature" }: JoinModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: preSelectedPlan,
    consent: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    consent: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preSelectedPlan) {
      setFormData((prev) => ({ ...prev, plan: preSelectedPlan }));
    }
  }, [preSelectedPlan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      setErrors((prev) => ({ ...prev, consent: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof typeof errors]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", phone: "", consent: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Biometric legal name is required.";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Digital credential coordinates are required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please input a valid email coordinate address.";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Secure telephone coordinate number is required.";
      valid = false;
    }

    if (!formData.consent) {
      newErrors.consent = "You must accept our Olympus code of biomechanical conduct.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleTrigger = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1200);
    }
  };

  const handleResetAndClose = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      plan: "Titan Signature",
      consent: false,
    });
    setErrors({ name: "", email: "", phone: "", consent: "" });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={handleResetAndClose}
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-[#0a0a0a] rounded-xl border border-white/5 p-6 sm:p-10 w-full max-w-lg z-10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Visual shine accents */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent" />

            {/* Close Button tag */}
            <button
              onClick={handleResetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-[#00FFFF] hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close portal window"
            >
              <X className="w-4 h-4" />
            </button>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Title details */}
                  <div className="text-center sm:text-left">
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <KeyRound className="w-5 h-5 text-[#00FFFF]" />
                      <span className="text-[10px] font-mono tracking-widest text-[#00FFFF] uppercase">
                        TITAN ADMISSION REGISTRATION
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-medium text-white uppercase tracking-tight mt-1.5">
                      REQUEST BIOMETRIC KEY
                    </h3>
                  </div>

                  <form onSubmit={handleTrigger} className="space-y-4">
                    
                    {/* Choose Admission Tier */}
                    <div>
                      <label className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase block mb-1.5">
                        Selected Admission Tier
                      </label>
                      <select
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full px-3 py-3 rounded bg-[#050505] border border-white/5 text-neutral-200 font-sans text-sm focus:border-[#00FFFF] focus:outline-none"
                      >
                        <option value="Standard Elite">Standard Elite — $89/mo</option>
                        <option value="Titan Signature">Titan Signature — $149/mo</option>
                        <option value="Olympus Private">Olympus Private — $299/mo</option>
                      </select>
                    </div>

                    {/* Full Name */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Legal Full Name"
                        className={`w-full px-3.5 py-3 rounded bg-[#050505] border text-white text-sm focus:outline-none focus:border-[#00FFFF] ${
                          errors.name ? "border-red-500/50" : "border-white/5"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[10px] text-red-400 font-mono mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email coordinate */}
                    <div>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Communication Coordinate"
                        className={`w-full px-3.5 py-3 rounded bg-[#050505] border text-white text-sm focus:outline-none focus:border-[#00FFFF] ${
                          errors.email ? "border-red-500/50" : "border-white/5"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-400 font-mono mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone Coordinate */}
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Telephone Coordinate Number"
                        className={`w-full px-3.5 py-3 rounded bg-[#050505] border text-white text-sm focus:outline-none focus:border-[#00FFFF] ${
                          errors.phone ? "border-red-500/50" : "border-white/5"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[10px] text-red-400 font-mono mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Compliance Rules Acceptance */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 text-xs text-neutral-400 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="mt-0.5 rounded bg-[#050505] border-white/5 text-[#00FFFF] focus:ring-0"
                        />
                        <span className="leading-snug select-none">
                          I agree to complete the 65-point musculoskeletal assessment and adhere strictly to the Olympus code of athletic biomechanical conduct.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-[10px] text-red-400 font-mono mt-1">{errors.consent}</p>
                      )}
                    </div>

                    {/* Submit Registration */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded bg-[#00FFFF] text-black font-display font-black text-xs tracking-widest uppercase hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? "TRANSMITTING TELEMETRY SPECIFICATIONS..." : "REQUEST SECURE KEY ADMISSION"}
                        <ArrowRight className="w-4 h-4 text-black" />
                      </button>
                    </div>

                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6 text-center py-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00FFFF]/15 border border-[#00FFFF] flex items-center justify-center text-[#00FFFF] mx-auto shadow animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 justify-center">
                      <Award className="w-4 h-4 text-[#00FFFF]" />
                      <span className="text-[10px] font-mono text-[#00FFFF] tracking-[0.2em] uppercase">
                        ADMISSION COORDINATES SECURED
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-wider">
                      WELCOME TO ELITE STANDARDS
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed font-sans">
                    Your request for the <span className="text-[#00FFFF] font-semibold">{formData.plan}</span> tier has been registered in our database. 
                    A Titan Fitness Executive Concierge Officer is assigning your musculoskeletal liaison officer right now and will call you via your communication terminal shortly.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleResetAndClose}
                      className="px-8 py-3.5 rounded bg-neutral-900 border border-neutral-805/40 hover:border-[#00FFFF] text-[#00FFFF] text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer"
                    >
                      RETURN TO PORTAL
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
