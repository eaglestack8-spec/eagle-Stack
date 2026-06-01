import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Schedule from "./components/Schedule";
import Membership from "./components/Membership";
import Trainers from "./components/Trainers";
import Transformations from "./components/Transformations";
import Gallery from "./components/Gallery";
import BmiCalculator from "./components/BmiCalculator";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JoinModal from "./components/JoinModal";
import { ArrowUp, Award, Sparkles } from "lucide-react";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [preSelectedPlan, setPreSelectedPlan] = useState("Titan Signature");
  const [showProgressScroll, setShowProgressScroll] = useState(false);

  useEffect(() => {
    const checkScrollProgress = () => {
      if (window.scrollY > 400) {
        setShowProgressScroll(true);
      } else {
        setShowProgressScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollProgress);
    return () => window.removeEventListener("scroll", checkScrollProgress);
  }, []);

  const handleJoinClick = () => {
    setPreSelectedPlan("Titan Signature");
    setModalOpen(true);
  };

  const handleViewPlansClick = () => {
    const element = document.querySelector("#plans");
    if (element) {
      const offset = 80;
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

  const handlePlanSelect = (planName: string) => {
    setPreSelectedPlan(planName);
    setModalOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-[#050505] min-h-screen text-neutral-200 selection:bg-[#00FFFF]/30 selection:text-white">
      {/* Dynamic glow decoration behind pages */}
      <div className="absolute top-[80vh] right-0 w-[50rem] h-[50rem] bg-gradient-to-br from-[#00FFFF]/2 to-transparent rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute top-[250vh] left-0 w-[45rem] h-[45rem] bg-gradient-to-br from-[#00FFFF]/1 to-transparent rounded-full blur-[200px] pointer-events-none -z-10" />

      {/* Sticky frosted glass header navbar */}
      <Navbar onJoinClick={handleJoinClick} />

      {/* 1. Full screen Hero section */}
      <Hero
        onJoinClick={handleJoinClick}
        onViewPlansClick={handleViewPlansClick}
      />

      {/* 2. About section with storytelling & statistics */}
      <About />

      {/* 6. High-end Facilities showcase */}
      <Facilities />

      {/* 5. Interactive schedule timetable */}
      <Schedule />

      {/* 3. Membership plans configuration & checklist matrix */}
      <Membership onPlanSelect={handlePlanSelect} />

      {/* 4. Elite Personal Trainers profiles section */}
      <Trainers />

      {/* 7. Transformation Chronicles slider list */}
      <Transformations />

      {/* 8. Masonry category Gallery with interactive lightbox modal */}
      <Gallery />

      {/* 9. Biometric instant BMI calculator tool */}
      <BmiCalculator />

      {/* 10. Frequently Asked Questions Accordion layout */}
      <Faq />

      {/* 11. Concierge message contacting validation form */}
      <Contact />

      {/* 12. Sitemap links, social icons & terms Footer */}
      <Footer />

      {/* Backdrop Admission Registration Popup dialogue */}
      <JoinModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preSelectedPlan={preSelectedPlan}
      />

      {/* Quick response Back to top button */}
      {showProgressScroll && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#121212]/90 backdrop-blur-md border border-neutral-800 text-[#00FFFF] shadow-2xl hover:text-white hover:border-[#00FFFF] hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
