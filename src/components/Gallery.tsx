import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../data/gymData";
import { Maximize2, X, ChevronLeft, ChevronRight, Filter, Sparkles } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Equipments", "Recovery", "Classes", "Lounge"];

  // Filter gallery items based on selected category
  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (id: string) => {
    // find index in the FILTERED list so navigation stays consistent within filtered item context
    const idx = filteredItems.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev as number) - 1));
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev as number) + 1));
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Light spots */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#00FFFF]/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00FFFF] tracking-[0.3em] uppercase">
            VISUAL PORTAL OF RIGOR
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white uppercase mt-3 tracking-tight">
            TITAN LUXURY GALLERY
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            A window into our elite biomechanical machinery, volcanic sauna recovery channels, and private lounge environments.
          </p>
        </div>

        {/* Categories Tab Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded text-xs font-mono font-bold tracking-widest uppercase transition-luxury cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#00FFFF] text-black font-black shadow"
                    : "bg-neutral-900/50 border border-neutral-800 text-neutral-400 hover:text-white"
                }`}
              >
                {cat === "All" && <Filter className="w-3.5 h-3.5" />}
                {cat.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                onClick={() => openLightbox(item.id)}
                className="group relative h-[300px] rounded-lg overflow-hidden border border-neutral-900 bg-neutral-950 cursor-pointer shadow-xl"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover brightness-[0.75] group-hover:scale-105 group-hover:brightness-[0.8] transition-all duration-500 ease-out"
                />

                {/* Dark shading gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                {/* Details caption */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div>
                    <span className="text-[10px] font-mono text-[#00FFFF] tracking-widest uppercase block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-base font-display font-bold text-white uppercase tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                  <div className="p-2 rounded bg-black/60 border border-white/10 text-[#00FFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#070707]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={closeLightbox}
            >
              
              {/* Top Controls Overlay */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#00FFFF]" />
                  <span className="text-xs font-mono tracking-widest text-[#00FFFF] uppercase">
                    TITAN VISION • PORTAL VIEW
                  </span>
                </div>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:text-[#00FFFF] hover:bg-neutral-800 cursor-pointer transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Picture view */}
              <div className="relative max-w-5xl max-h-[80vh] w-full flex flex-col justify-center items-center" onClick={(e) => e.stopPropagation()}>
                
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg border border-neutral-800 shadow-2xl"
                />

                 {/* Left navigation arrow inside the container */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 sm:-left-16 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-[#00FFFF] text-[#00FFFF] cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right navigation arrow inside the container */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 sm:-right-16 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-[#00FFFF] text-[#00FFFF] cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom caption overlay */}
                <div className="mt-4 text-center">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#00FFFF] uppercase block">
                    {filteredItems[lightboxIndex].category} CHAMBER
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-wider mt-1">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <span className="text-[11px] font-mono text-neutral-600 mt-1 block">
                    Item {lightboxIndex + 1} of {filteredItems.length} filtered entries
                  </span>
                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
