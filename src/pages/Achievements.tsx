import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ⭐ Lightbox Component
const Lightbox = ({
  src,
  alt,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  src: string;
  alt?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="relative max-w-5xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={src}
            alt={alt}
            className="w-full max-h-screen object-contain rounded-xl shadow-2xl"
          />

          <p className="text-center text-white mt-4 text-xl font-semibold">
            {alt}
          </p>

          {/* ❌ Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition"
          >
            <X className="h-7 w-7 text-white" />
          </button>

          {/* ⬅️ Prev */}
          {hasPrev && (
            <button
              onClick={onPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 w-14 h-14 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition"
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </button>
          )}

          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 w-14 h-14 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition"
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Achievements() {
  const [lightbox, setLightbox] = useState<{ src: string; alt?: string; index: number } | null>(null);

  // ⭐ Achievement Images
  const images = [
    { src: "/A1.png", alt: "Ayushman Bharat Certified" },
    { src: "/A2.png", alt: "NABH Accredited" },
    { src: "/A3.png", alt: "ISO Certified Hospital" },
    { src: "/A4.png", alt: "4.9 Google Rating" },
    { src: "/A5.png", alt: "Healthcare Excellence Award" },
    { src: "/A6.png", alt: "Patient Satisfaction Award" },
    { src: "/A7.png", alt: "Quality Care Recognition" },
    { src: "/A8.png", alt: "Medical Trust Achievement" },
  ];

  // Lightbox Functions
  const open = (src: string, alt?: string, index: number) => setLightbox({ src, alt, index });
  const close = () => setLightbox(null);
  const prev = () => {
    if (!lightbox || lightbox.index <= 0) return;
    const img = images[lightbox.index - 1];
    setLightbox({ ...img, index: lightbox.index - 1 });
  };
  const next = () => {
    if (!lightbox || lightbox.index >= images.length - 1) return;
    const img = images[lightbox.index + 1];
    setLightbox({ ...img, index: lightbox.index + 1 });
  };
  return (
    <>
      <section className="py-20 lg:py-28 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Milestones & Achievements
            </h2>
            <p className="text-xl text-gray-700 mt-6 max-w-3xl mx-auto">
              Trusted, Awarded, Recognised. A legacy of excellence in care.
            </p>
          </motion.div>

          {/* ⭐ Bigger Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="cursor-pointer group"
                onClick={() => open(img.src, img.alt, i)}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white p-6 h-72 sm:h-60 flex items-center justify-center">
                  
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end justify-center p-5">
                    <p className="text-white text-lg text-center font-semibold">
                      {img.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          hasPrev={lightbox.index > 0}
          hasNext={lightbox.index < images.length - 1}
          onPrev={prev}
          onNext={next}
          onClose={close}
        />
      )}
    </>
  );
}
