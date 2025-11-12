import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Image, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 🖼️ Lightbox Modal for Images
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
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
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
            className="w-full h-auto max-h-screen object-contain rounded-xl shadow-2xl"
          />
          <p className="text-center text-white mt-4 text-lg font-medium">{alt}</p>

          {/* ❌ Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* ⬅️➡️ Prev/Next */}
          {hasPrev && (
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition"
            >
              <ChevronLeft className="h-7 w-7 text-white" />
            </button>
          )}
          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition"
            >
              <ChevronRight className="h-7 w-7 text-white" />
            </button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; index: number } | null>(null);

  // 🖼️ All images for Lightbox
  const allImages = [
    { src: "/images/Ratna1.jpeg", alt: "Clinic Reception & Waiting Area" },
    { src: "/images/Ratna2.jpeg", alt: "Consultation Room – Dr. Shyam Ji" },
    { src: "/images/Ratna3.jpeg", alt: "Medicine Dispensary & Pharmacy" },
    { src: "/images/Ratna4.jpeg", alt: "Patient Recovery & Follow-up Area" },
 
  ];

  // 🎥 Video list
  const videos = [
    {
      src: "https://www.youtube.com/embed/J3O1HqyxA70",
      title: "Clinic Introduction",
    },
    {
      src: "https://www.youtube.com/embed/Bey4XXJAqS8",
      title: "Doctor Consultation Process",
    },
    {
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Patient Testimonials",
    },
  ];

  // Lightbox Functions
  const openLightbox = (src: string, alt: string, index: number) => {
    setLightbox({ src, alt, index });
  };
  const closeLightbox = () => setLightbox(null);
  const goPrev = () => {
    if (lightbox && lightbox.index > 0) {
      const prev = allImages[lightbox.index - 1];
      setLightbox({ ...prev, index: lightbox.index - 1 });
    }
  };
  const goNext = () => {
    if (lightbox && lightbox.index < allImages.length - 1) {
      const next = allImages[lightbox.index + 1];
      setLightbox({ ...next, index: lightbox.index + 1 });
    }
  };

  // 🖼️ Image Grid
  const ImageGrid = ({ images }: { images: typeof allImages }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="group cursor-pointer"
          onClick={() => openLightbox(img.src, img.alt, i)}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-64 sm:h-72">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
              <div>
                <p className="text-white font-semibold text-lg">{img.alt}</p>
                <p className="text-amber-200 text-sm mt-1">Click to zoom</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // 🎥 Video Grid
  const VideoGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((vid, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
        >
          <div className="aspect-video">
            <iframe
              src={vid.src}
              title={vid.title}
              allowFullScreen
              className="w-full h-full rounded-2xl"
            ></iframe>
          </div>
          <p className="text-center text-gray-800 font-medium py-3">🎥 {vid.title}</p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <>
      <section className="py-10 lg:py-10 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Our Healing Space
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A serene, patient-centric environment designed for comfort, privacy, and natural recovery.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="bg-white/80 backdrop-blur-md border border-amber-200 rounded-full flex shadow-sm overflow-hidden">
              <button
                className={`px-6 py-2 flex items-center gap-2 font-medium transition ${
                  activeTab === "images"
                    ? "bg-amber-500 text-white"
                    : "text-gray-700 hover:bg-amber-100"
                }`}
                onClick={() => setActiveTab("images")}
              >
                <Image className="w-4 h-4" /> Images
              </button>
              <button
                className={`px-6 py-2 flex items-center gap-2 font-medium transition ${
                  activeTab === "videos"
                    ? "bg-amber-500 text-white"
                    : "text-gray-700 hover:bg-amber-100"
                }`}
                onClick={() => setActiveTab("videos")}
              >
                <Video className="w-4 h-4" /> Videos
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "images" ? (
              <motion.div
                key="images"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <ImageGrid images={allImages} />
              </motion.div>
            ) : (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <VideoGrid />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={lightbox.index > 0}
          hasNext={lightbox.index < allImages.length - 1}
        />
      )}
    </>
  );
}
