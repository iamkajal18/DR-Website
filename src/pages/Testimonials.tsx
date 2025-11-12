import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Play, Pause, Heart, Award } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sectionRef = useRef(null);

  // Focused Testimonials: Kidney, Surgery, Gynecology
  const testimonials = [
    {
      id: 1,
      name: "Vikram Singh",
      age: 52,
      condition: "Kidney Stones",
      rating: 5,
      text: "I was suffering from recurrent kidney stones for 5 years. Allopathic medicines gave temporary relief. After 4 months of homeopathic treatment at Ratna Clinic, I passed stones naturally without surgery. No recurrence in 2 years!",
      treatmentDuration: "4 months",
      location: "Lucknow"
    },
    {
      id: 2,
      name: "Sunita Verma",
      age: 38,
      condition: "Post-Surgery Recovery",
      rating: 5,
      text: "After my gallbladder surgery, I had severe weakness and indigestion. Homeopathy helped me recover faster, improved digestion, and boosted immunity. I feel stronger than before the surgery!",
      treatmentDuration: "3 months",
      location: "Jaipur"
    },
    {
      id: 3,
      name: "Neha Gupta",
      age: 32,
      condition: "PCOS & Irregular Periods",
      rating: 5,
      text: "I had irregular periods and weight gain due to PCOS. Within 6 months of treatment, my cycles became regular, acne reduced, and I lost 8 kg naturally. No hormones, no side effects!",
      treatmentDuration: "6 months",
      location: "Delhi"
    },
    {
      id: 4,
      name: "Rohit Malhotra",
      age: 45,
      condition: "Post-Hernia Surgery Pain",
      rating: 4,
      text: "Even after hernia surgery, I had chronic pain and discomfort. Homeopathic remedies reduced inflammation and pain completely in 2 months. Now I can lift weights again!",
      treatmentDuration: "2 months",
      location: "Mumbai"
    },
    {
      id: 5,
      name: "Pooja Sharma",
      age: 29,
      condition: "Infertility (Gynecology)",
      rating: 5,
      text: "We were trying for a baby for 3 years. After 9 months of homeopathic treatment, my ovulation improved and I conceived naturally. Our little angel is now 6 months old!",
      treatmentDuration: "9 months",
      location: "Pune"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        fill={i < rating ? "#f59e0b" : "none"}
        className={i < rating ? "text-amber-500" : "text-gray-300"}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="py-12 bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50 overflow-hidden">
      {/* Floating Background */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-amber-200 to-orange-200 opacity-20"
            style={{
              width: Math.random() * 60 + 30,
              height: Math.random() * 60 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-xs font-medium mb-3">
            <Heart size={14} /> Success Stories
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Real Results in <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Kidney, Surgery & Gynecology</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            See how homeopathy helped patients avoid surgery, recover faster, and regain hormonal balance.
          </p>
        </motion.div>

        {/* Compact Testimonial Card */}
        <div className="relative">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-5 lg:p-6 max-w-2xl mx-auto"
          >
            {/* Patient Info */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">{testimonials[currentTestimonial].name}</h3>
              <p className="text-xs text-amber-600">
                {testimonials[currentTestimonial].age} yrs • {testimonials[currentTestimonial].location}
              </p>
              <span className="inline-block mt-2 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                {testimonials[currentTestimonial].condition}
              </span>
            </div>

            {/* Quote */}
            <div className="flex justify-center mb-3 text-amber-100">
              <Quote size={28} />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-3">
              {renderStars(testimonials[currentTestimonial].rating)}
              <span className="text-xs text-gray-500 ml-1">({testimonials[currentTestimonial].rating}.0)</span>
            </div>

            {/* Text */}
            <blockquote className="text-center text-gray-700 text-sm leading-relaxed italic mb-4 px-2">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Duration */}
            <div className="bg-amber-50 rounded-lg p-3 text-center">
              <p className="text-xs">
                <span className="font-semibold text-amber-700">Treatment Duration:</span>{' '}
                <span className="text-gray-700">{testimonials[currentTestimonial].treatmentDuration}</span>
              </p>
            </div>

            {/* Verified */}
            <div className="flex justify-center items-center gap-1 mt-3 text-xs text-gray-500">
              <Award size={13} className="text-amber-500" />
              <span>Verified Patient</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:shadow-md transition"
            >
              <ArrowLeft size={15} className="text-gray-600" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-9 h-9 bg-amber-600 rounded-full shadow flex items-center justify-center hover:bg-amber-700 transition"
            >
              {isPlaying ? <Pause size={15} className="text-white" /> : <Play size={15} className="text-white" />}
            </button>

            <button
              onClick={nextTestimonial}
              className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:shadow-md transition"
            >
              <ArrowRight size={15} className="text-gray-600" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentTestimonial ? 'bg-amber-600 w-6' : 'bg-gray-300 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
          {[
            { num: "500+", label: "Kidney Cases" },
            { num: "300+", label: "Surgery Recovery" },
            { num: "700+", label: "Gynecology" },
            { num: "4.9", label: "Avg Rating" }
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-lg p-3 text-center shadow-sm"
            >
              <div className="text-lg font-bold text-amber-600">{s.num}</div>
              <div className="text-xs text-gray-600">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;