import { useState } from "react";
import { ChevronUp, Instagram, Twitter, Linkedin, Facebook, Youtube, Send, Check } from "lucide-react";

export default function Footer() {
  const [emailValue, setEmailValue] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubscribe = () => {
    if (emailValue.trim()) {
      setIsSubscribed(true);
      setEmailValue("");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-neutral-400 border-t border-neutral-900 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background visual spotlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] rounded-full bg-radial from-[#00FFFF]/1 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid mapping links and details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-900">
          
          {/* Logo Brand Segment (5 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={handleBackToTop}>
              <div className="relative flex items-center justify-center w-10 h-10 rounded bg-[#0a0a0a] border border-[#00FFFF]/30 overflow-hidden">
                <img
                  src="https://i.ibb.co/tpP123PR/Chat-GPT-Image-Jun-1-2026-09-22-41-AM.png"
                  alt="Titan Fitness Logo"
                  className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xl font-display font-black tracking-widest text-white">
                  TITAN
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] text-[#00FFFF] block">
                  FITNESS CO.
                </span>
              </div>
            </div>
            
            <p className="text-xs text-neutral-500 font-sans leading-relaxed max-w-xs">
              Calibrated athlete sanctuaries conducting biomechanics assessment frameworks alongside volcanic thermal suites in absolute luxury since 2014.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 rounded bg-neutral-950 border border-neutral-900 hover:text-[#00FFFF] hover:border-[#00FFFF]/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded bg-neutral-950 border border-neutral-900 hover:text-[#00FFFF] hover:border-[#00FFFF]/30 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded bg-neutral-950 border border-neutral-900 hover:text-[#00FFFF] hover:border-[#00FFFF]/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded bg-neutral-950 border border-neutral-900 hover:text-[#00FFFF] hover:border-[#00FFFF]/30 transition-all duration-300"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Sitemap Links (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-mono tracking-[0.15em] text-white font-bold uppercase mb-4">
                EXPLORE CORE
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#about" className="hover:text-[#00FFFF] transition-colors">
                    About Story
                  </a>
                </li>
                <li>
                  <a href="#facilities" className="hover:text-[#00FFFF] transition-colors">
                    Chambers Grid
                  </a>
                </li>
                <li>
                  <a href="#classes" className="hover:text-[#00FFFF] transition-colors">
                    Master Timetable
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-[#00FFFF] transition-colors">
                    Admissions Tiers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono tracking-[0.15em] text-white font-bold uppercase mb-4">
                INTELLIGENCE
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#trainers" className="hover:text-[#00FFFF] transition-colors">
                    Master Coaches
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-[#00FFFF] transition-colors">
                    Biometric Panel
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#00FFFF] transition-colors">
                    Faq Coords
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#00FFFF] transition-colors">
                    Portal signal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter / Contact mini overview (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono tracking-[0.15em] text-white font-bold uppercase">
              TITAN BRIEFING BROADCASTS
            </h4>
            <p className="text-xs text-neutral-500 font-sans leading-relaxed">
              Register your terminal email coordinates below to receive elite metabolic recipes, performance checklists, and schedule releases.
            </p>
            {isSubscribed ? (
              <div className="flex items-center gap-2 p-3 rounded bg-[#00FFFF]/10 border border-[#00FFFF]/20 text-xs text-[#00FFFF] font-mono">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>TERMINAL BRIEFING STREAM REGISTERED</span>
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="Secure email..."
                  className="w-full px-3.5 py-2.5 bg-[#0a0a0a] border border-white/5 rounded focus:border-[#00FFFF]/50 text-xs text-white font-sans focus:outline-none"
                />
                <button
                  onClick={handleSubscribe}
                  className="p-2.5 bg-[#00FFFF] rounded text-black hover:brightness-110 cursor-pointer active:scale-95 transition-all flex items-center justify-center flex-shrink-0"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom copyright declaration & Back to Top action */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider text-center sm:text-left">
            © {currentYear} Titan Fitness Co. • Standard of Olympus. All architectural rights reserved. Designed for absolute physical power.
          </p>

          <button
            onClick={handleBackToTop}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-850 hover:border-[#00FFFF] text-neutral-500 hover:text-[#00FFFF] text-[10px] font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer"
          >
            BACK TO TOP
            <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
