import { useState } from "react";
import { motion } from "motion/react";
import { MEMBERSHIP_PLANS } from "../data/gymData";
import { Check, X, Flame, Shield, Compass, HelpCircle, ArrowRight } from "lucide-react";

interface MembershipProps {
  onPlanSelect: (planName: string) => void;
}

export default function Membership({ onPlanSelect }: MembershipProps) {
  // Feature comparison columns
  const featuresMatrix = [
    { name: "Full Strength & Cardio access", basic: true, pro: true, elite: true },
    { name: "Siberian Cold Plunge & Volcanic Sauna", basic: false, pro: true, elite: true },
    { name: "Signature Group Athletic Classes", basic: "2 classes/mo", pro: "Unlimited", elite: "Unlimited" },
    { name: "1-on-1 private coaching sessions", basic: "Assessment only", pro: "2 reviews/mo", elite: "4 sessions/mo" },
    { name: "Organic peptide nutrition shake bar", basic: false, pro: "20% Discount", elite: "Complimentary" },
    { name: "Bespoke laundry & dedicated private lockers", basic: false, pro: false, elite: true },
    { name: "Full biometric mapping & blood analysis", basic: false, pro: false, elite: true },
    { name: "Partner luxury club international reciprocity", basic: false, pro: false, elite: true },
  ];

  return (
    <section id="plans" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Light gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#00FFFF]/2 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[40rem] h-[40rem] rounded-full bg-neutral-950 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00FFFF] tracking-[0.3em] uppercase">
            CHOOSE YOUR ADMISSION
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white uppercase mt-3 tracking-tight">
            BESPOKE MEMBERSHIP TIERS
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            Flexible elite tiers engineered for individual athletic goals. No sign-up files, completely transparent cancel-anytime structure.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
          {MEMBERSHIP_PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: plan.id === "plan-basic" ? 0 : plan.id === "plan-pro" ? 0.15 : 0.3 }}
              whileHover={{ y: -8 }}
              className={`rounded-xl p-8 bg-gradient-to-b ${plan.colorClass} border cursor-default flex flex-col justify-between relative overflow-hidden transition-all duration-300`}
            >
              {/* Highlight Popular Badge */}
              {plan.popular && (
                <div className="absolute top-6 right-6 flex items-center gap-1 px-3 py-1 bg-[#00FFFF] text-black rounded text-[10px] font-mono font-black tracking-widest uppercase shadow">
                  <Flame className="w-3 h-3 fill-black animate-pulse" />
                  MOST POPULAR
                </div>
              )}

              <div>
                <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase block">
                  {plan.id === "plan-basic" ? "01 STANDARD PERFORMANCE" : plan.id === "plan-pro" ? "02 HIGH TARGET" : "03 ABSOLUTE ASCENSION"}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-1 uppercase tracking-wide">
                  {plan.name}
                </h3>

                <p className="text-xs text-neutral-400 mt-3 font-sans h-10 overflow-hidden leading-relaxed">
                  {plan.description}
                </p>

                {/* Pricing Area */}
                <div className="my-8 flex items-baseline">
                  <span className="text-sm font-sans font-medium text-neutral-500">$</span>
                  <span className="text-5xl sm:text-6xl font-display font-black text-white tracking-tighter">
                    {plan.price}
                  </span>
                  <span className="text-sm font-sans font-medium text-neutral-500 ml-2">
                    / {plan.billingPeriod}
                  </span>
                </div>

                <div className="h-[1px] bg-neutral-800/60 my-6" />

                {/* Features Checklist inside Card */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <div className="flex-shrink-0 mt-0.5 w-[14px] h-[14px] rounded-full bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF]">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-sans leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-10">
                <button
                  onClick={() => onPlanSelect(plan.name)}
                  className={`w-full py-4 rounded font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                    plan.popular
                      ? "bg-[#00FFFF] text-black font-black shadow-[0_10px_20px_rgba(0, 255, 255,0.25)] hover:brightness-110"
                      : "bg-[#111111] border-b-2 border-white/10 text-neutral-300 hover:text-white hover:border-[#00FFFF]"
                  }`}
                >
                  ACQUIRE {plan.name.toUpperCase()}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Matrix Grid / Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-24 p-6 sm:p-10 rounded-xl bg-[#0a0a0a] border border-white/5 overflow-hidden shadow-2xl"
        >
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-wide">
              RECONSTRUCTED LEVEL COMPARISON
            </h3>
            <p className="text-xs text-neutral-500 font-mono tracking-widest uppercase mt-1">
              Complete diagnostic check across parameters of access
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-4 text-xs font-mono font-bold tracking-widest text-[#00FFFF] uppercase w-1/2">
                    FEATURE / AMENITY LEVEL
                  </th>
                  <th className="py-4 text-xs font-mono font-bold tracking-widest text-[#00FFFF] uppercase text-center">
                    STANDARD ELITE
                  </th>
                  <th className="py-4 text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase text-center">
                    TITAN SIGNATURE
                  </th>
                  <th className="py-4 text-xs font-mono font-bold tracking-widest text-neutral-200 uppercase text-center">
                    OLYMPUS PRIVATE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {featuresMatrix.map((feat, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/10 transition-colors">
                    {/* Feature Name */}
                    <td className="py-4 text-sm font-sans font-medium text-neutral-300 pr-4">
                      {feat.name}
                    </td>

                    {/* Standard Elite Value */}
                    <td className="py-4 text-center">
                      {typeof feat.basic === "boolean" ? (
                        feat.basic ? (
                          <Check className="w-4 h-4 text-[#00FFFF]/70 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-neutral-800 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-mono text-neutral-500">{feat.basic}</span>
                      )}
                    </td>

                    {/* Titan Signature Value */}
                    <td className="py-4 text-center font-semibold">
                      {typeof feat.pro === "boolean" ? (
                        feat.pro ? (
                          <Check className="w-4 h-4 text-[#00FFFF] mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-neutral-800 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-mono text-[#aeffff]">{feat.pro}</span>
                      )}
                    </td>

                    {/* Olympus Private Value */}
                    <td className="py-4 text-center font-bold">
                      {typeof feat.elite === "boolean" ? (
                        feat.elite ? (
                          <Check className="w-4 h-4 text-white mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-neutral-800 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-mono text-white">{feat.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-neutral-900 text-xs text-neutral-500 font-sans">
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-neutral-600" />
              Do you have corporate requirements? Contact our executive liaison team directly.
            </span>
            <a href="#contact" className="text-[#00FFFF] hover:underline font-mono tracking-widest uppercase flex items-center gap-1">
              REQUEST COORDS
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
