import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShieldAlert, ChevronRight } from "lucide-react";

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Facilities", href: "#facilities" },
    { name: "Classes", href: "#classes" },
    { name: "Plans", href: "#plans" },
    { name: "Trainers", href: "#trainers" },
    { name: "Results", href: "#results" },
    { name: "Gallery", href: "#gallery" },
    { name: "Calculator", href: "#calculator" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-900 border border-[#00FFFF]/30 group-hover:border-[#00FFFF] transition-colors duration-300 overflow-hidden">
                <img
                  src="https://i.ibb.co/tpP123PR/Chat-GPT-Image-Jun-1-2026-09-22-41-AM.png"
                  alt="Titan Fitness Logo"
                  className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -inset-1 rounded-lg bg-[#00FFFF]/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold tracking-widest text-white group-hover:text-[#00FFFF] transition-colors duration-300">
                  TITAN
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] text-[#00FFFF]">
                  FITNESS CO.
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className="px-3 py-2 text-sm font-medium text-neutral-400 hover:text-[#00FFFF] transition-colors duration-200 cursor-pointer text-shadow-sm font-display"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Join Button */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={onJoinClick}
                className="relative overflow-hidden group px-6 py-2.5 rounded-md bg-neutral-900 text-white font-display text-sm font-semibold tracking-wider border border-[#00FFFF]/40 hover:border-[#00FFFF] cursor-pointer transition-all duration-300"
              >
                <span className="absolute inset-0 bg-[#00FFFF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-1.5">
                  JOIN ELITE
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-400 hover:text-white focus:outline-none p-2 cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-[#00FFFF]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-neutral-950/95 backdrop-blur-xl border-t border-white/5 lg:hidden flex flex-col justify-between py-10 px-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className="w-full text-left py-3 text-lg font-display font-medium text-neutral-300 border-b border-neutral-800/50 hover:text-[#00FFFF] transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-col space-y-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onJoinClick();
                }}
                className="w-full text-center py-4 rounded-lg bg-cyan-gradient text-neutral-950 font-display font-bold tracking-widest hover:brightness-110 active:scale-[0.98] transition-all duration-200"
              >
                JOIN THE CLUB NOW
              </button>
              <p className="text-center text-xs font-mono text-neutral-600">
                TITAN FITNESS CO. • METRICS OF THE CHAMPIONS
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
