import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, Dumbbell, Sparkles, Scale, Info, Check } from "lucide-react";

export default function BmiCalculator() {
  const [unitSystem, setUnitSystem] = useState<"Imperial" | "Metric">("Imperial");
  
  // Imperial values
  const [weightLbs, setWeightLbs] = useState("175");
  const [heightFt, setHeightFt] = useState("5");
  const [heightIn, setHeightIn] = useState("10");

  // Metric values
  const [weightKg, setWeightKg] = useState("80");
  const [heightCm, setHeightCm] = useState("180");

  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [advice, setAdvice] = useState<string>("");

  const calculateBmi = () => {
    let bmiValue = 0;

    if (unitSystem === "Imperial") {
      const weight = parseFloat(weightLbs);
      const feet = parseFloat(heightFt);
      const inches = parseFloat(heightIn);
      
      if (!isNaN(weight) && !isNaN(feet) && !isNaN(inches) && weight > 0 && (feet > 0 || inches > 0)) {
        const totalHeightInches = (feet * 12) + inches;
        bmiValue = (703 * weight) / (totalHeightInches * totalHeightInches);
      }
    } else {
      const weight = parseFloat(weightKg);
      const height = parseFloat(heightCm);
      
      if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
        const heightMeters = height / 100;
        bmiValue = weight / (heightMeters * heightMeters);
      }
    }

    if (bmiValue > 0) {
      const roundedBmi = parseFloat(bmiValue.toFixed(1));
      setBmiResult(roundedBmi);
      evaluateBmiCategory(roundedBmi);
    } else {
      setBmiResult(null);
      setCategory("");
      setAdvice("");
    }
  };

  const evaluateBmiCategory = (score: number) => {
    if (score < 18.5) {
      setCategory("Underweight");
      setAdvice("We recommend the 'Olympus Mass Gainer Protocol'. Focus on high calorie density and progressive heavy resistance. Supplements: Peptide shaker shakes (2x daily).");
    } else if (score >= 18.5 && score < 25) {
      setCategory("Healthy / Athletic");
      setAdvice("Excellent state. We advise implementing our 'Titan Signature Hypertrophy program' and high-altitude cardio observatories to solidify relative power output.");
    } else if (score >= 25 && score < 30) {
      setCategory("Overweight / Solid Build");
      setAdvice("Perfect foundation. Recommended: 'Metabolic Catalyst protocol' along with high-intensity barbell circuits to target visceral fat reserves while reserving lean mass.");
    } else {
      setCategory("Obese / High Load");
      setAdvice("We recommend prioritizing 'Joint Bulletproofing' and low-impact biomechanics conditioning. Start with Finnish volcanic saunas to increase cardiovascular flow, then ease into kinetic restoration classes.");
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Underweight":
        return "text-blue-400";
      case "Healthy / Athletic":
        return "text-green-400";
      case "Overweight / Solid Build":
        return "text-[#00FFFF]";
      case "Obese / High Load":
        return "text-red-500";
      default:
        return "text-neutral-400";
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Visual background spot */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-[#00FFFF]/2 blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00FFFF] tracking-[0.3em] uppercase">
            BIOMETRIC ASSESSMENT PANEL
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white uppercase mt-3 tracking-tight">
            TITAN METRICS CALCULATOR
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            Acquire your diagnostic Body Mass Index immediately. Instantly matching your bodily ratios with targeted muscle blueprints and recovery timelines.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Block: Inputs Form (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 rounded-xl bg-[#0a0a0a] border border-white/5 flex flex-col justify-between">
            
            <div>
              {/* Unit System Selector Tab */}
              <div className="flex gap-2 p-1 bg-neutral-900 border border-neutral-800 rounded-md mb-8">
                <button
                  onClick={() => {
                    setUnitSystem("Imperial");
                    setBmiResult(null);
                  }}
                  className={`flex-1 py-2 text-xs font-mono font-bold tracking-wider uppercase rounded transition-colors cursor-pointer ${
                    unitSystem === "Imperial"
                      ? "bg-[#00FFFF] text-black"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  IMPERIAL CRITERIA
                </button>
                <button
                  onClick={() => {
                    setUnitSystem("Metric");
                    setBmiResult(null);
                  }}
                  className={`flex-1 py-2 text-xs font-mono font-bold tracking-wider uppercase rounded transition-colors cursor-pointer ${
                    unitSystem === "Metric"
                      ? "bg-[#00FFFF] text-black"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  METRIC CRITERIA
                </button>
              </div>

              {/* Dynamic Inputs selection */}
              <div className="space-y-6">
                
                {unitSystem === "Imperial" ? (
                  <>
                    {/* Imperial Height Inputs */}
                    <div>
                      <label className="text-xs font-mono text-neutral-400 tracking-wider uppercase block mb-2">
                        Height Specifications
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                           <input
                            type="number"
                            value={heightFt}
                            onChange={(e) => setHeightFt(e.target.value)}
                            className="w-full px-4 py-3 rounded bg-[#050505] border border-white/5 focus:border-[#00FFFF]/60 text-white font-mono text-sm focus:outline-none"
                            placeholder="Feet"
                            min="1"
                            max="9"
                          />
                          <span className="text-xs font-mono text-neutral-500">FT</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            value={heightIn}
                            onChange={(e) => setHeightIn(e.target.value)}
                            className="w-full px-4 py-3 rounded bg-[#050505] border border-white/5 focus:border-[#00FFFF]/60 text-white font-mono text-sm focus:outline-none"
                            placeholder="Inches"
                            min="0"
                            max="11"
                          />
                          <span className="text-xs font-mono text-neutral-500">IN</span>
                        </div>
                      </div>
                    </div>

                    {/* Imperial Weight Input */}
                    <div>
                      <label className="text-xs font-mono text-neutral-400 tracking-wider uppercase block mb-2">
                        Current Weight Mass
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={weightLbs}
                          onChange={(e) => setWeightLbs(e.target.value)}
                          className="w-full px-4 py-3 rounded bg-[#050505] border border-white/5 focus:border-[#00FFFF]/60 text-white font-mono text-sm focus:outline-none"
                          placeholder="Pounds (lbs)"
                          min="30"
                          max="800"
                        />
                        <span className="text-xs font-mono text-neutral-500">LBS</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Metric Height Input */}
                    <div>
                      <label className="text-xs font-mono text-neutral-400 tracking-wider uppercase block mb-2">
                        Height Dimension
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={heightCm}
                          onChange={(e) => setHeightCm(e.target.value)}
                          className="w-full px-4 py-3 rounded bg-[#050505] border border-white/5 focus:border-[#00FFFF]/60 text-white font-mono text-sm focus:outline-none"
                          placeholder="Centimeters (cm)"
                          min="50"
                          max="280"
                        />
                        <span className="text-xs font-mono text-neutral-500">CM</span>
                      </div>
                    </div>

                    {/* Metric Weight Input */}
                    <div>
                      <label className="text-xs font-mono text-neutral-400 tracking-wider uppercase block mb-2">
                        Current Weight Mass
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={weightKg}
                          onChange={(e) => setWeightKg(e.target.value)}
                          className="w-full px-4 py-3 rounded bg-[#050505] border border-white/5 focus:border-[#00FFFF]/60 text-white font-mono text-sm focus:outline-none"
                          placeholder="Kilograms (kg)"
                          min="10"
                          max="400"
                        />
                        <span className="text-xs font-mono text-neutral-500">KG</span>
                      </div>
                    </div>
                  </>
                )}

              </div>
            </div>

            {/* Calculate Button */}
            <div className="mt-8">
              <button
                onClick={calculateBmi}
                className="w-full py-4 rounded bg-[#00FFFF] text-black font-display font-black text-xs tracking-widest uppercase hover:brightness-110 cursor-pointer shadow-[0_10px_20px_rgba(0, 255, 255,0.25)] flex items-center justify-center gap-2"
              >
                <Scale className="w-4 h-4 text-black" />
                EXECUTE SCAN
              </button>
            </div>

          </div>

          {/* Right Block: Real-Time calculated details Panel (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 rounded-xl bg-[#0a0a0a] border border-white/5 flex flex-col justify-between relative overflow-hidden">
            
            {/* Background design accents */}
            <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full border border-white/5 opacity-40 pointer-events-none" />

            <AnimatePresence mode="wait">
              {bmiResult !== null ? (
                <motion.div
                  key="results-view"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 flex flex-col h-full justify-between"
                >
                  <div>
                    {/* Decorative state header */}
                    <div className="flex items-center gap-2 mb-6">
                      <Activity className="w-5 h-5 text-[#00FFFF]" />
                      <span className="text-xs font-mono tracking-widest text-[#00FFFF] uppercase">
                        DIAGNOSTIC RESOLUTION SUMMARY
                      </span>
                    </div>

                    {/* Circular BMI display */}
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#00FFFF]/40 flex flex-col items-center justify-center bg-neutral-900/30">
                        <span className="text-xs text-neutral-500 font-mono">YOUR BMI</span>
                        <span className="text-3xl font-display font-black text-white">{bmiResult}</span>
                      </div>

                      <div>
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                          DEDUCTION RATING
                        </span>
                        <h4 className={`text-xl sm:text-2xl font-display font-bold uppercase tracking-wide ${getCategoryColor(category)}`}>
                          {category}
                        </h4>
                      </div>
                    </div>

                    <div className="h-[1px] bg-neutral-900 w-full my-6" />

                    {/* Advice card */}
                    <div className="p-4 rounded bg-[#050505] border border-white/5">
                      <span className="text-[10px] font-mono text-[#00FFFF] tracking-widest block uppercase mb-1">
                        BIOMETRIC SPORTS ADVICE:
                      </span>
                      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                        {advice}
                      </p>
                    </div>
                  </div>

                  {/* Standard BMI reference range visual */}
                  <div className="pt-6 border-t border-neutral-900">
                    <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase block mb-3">
                      STANDARD REFERENCE MARGINS:
                    </span>
                    <div className="grid grid-cols-4 gap-1 text-[9px] font-mono text-center">
                      <div className="p-1 rounded bg-neutral-900 border border-white/5 text-blue-400">
                        <span>&lt; 18.5</span>
                        <span className="block text-[8px] text-neutral-600">UNDER</span>
                      </div>
                      <div className="p-1 rounded bg-neutral-900 border border-white/5 text-green-400">
                        <span>18.5 - 24.9</span>
                        <span className="block text-[8px] text-neutral-600">HEALTHY</span>
                      </div>
                      <div className="p-1 rounded bg-neutral-900 border border-white/5 text-[#00FFFF]">
                        <span>25.0 - 29.9</span>
                        <span className="block text-[8px] text-neutral-600">OVER</span>
                      </div>
                      <div className="p-1 rounded bg-neutral-900 border border-white/5 text-red-500">
                        <span>30.0+</span>
                        <span className="block text-[8px] text-neutral-600">OBESE</span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              ) : (
                <motion.div
                  key="empty-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16 h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-[#00FFFF] mb-4">
                    <Info className="w-6 h-6 text-neutral-500" />
                  </div>
                  <h4 className="text-base font-display font-bold text-white uppercase tracking-wider">
                    AWAITING TELEMETRY SPECIFICATIONS
                  </h4>
                  <p className="text-xs text-neutral-500 max-w-sm mt-2 leading-relaxed">
                    Set your matching variables in the performance panel on the left and trigger the execute scan parameter.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
