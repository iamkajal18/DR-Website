import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Play, Pause, Heart, Award } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 42,
      condition: "Chronic Migraine",
      rating: 5,
      text: "After suffering from migraines for over 10 years, homeopathic treatment at Ratna Clinic changed my life. The personalized approach and natural remedies provided relief I never thought possible.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      treatmentDuration: "6 months",
      location: "Mumbai"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      age: 58,
      condition: "Arthritis",
      rating: 5,
      text: "The holistic treatment for my arthritis has been remarkable. Not only did my joint pain reduce significantly, but my overall energy levels improved. Truly life-changing!",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
      treatmentDuration: "8 months",
      location: "Delhi"
    },
    {
      id: 3,
      name: "Anita Patel",
      age: 35,
      condition: "Skin Allergy",
      rating: 4,
      text: "I had tried everything for my skin allergies until I found Ratna Clinic. The natural approach without side effects worked wonders. My skin has never been better!",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      treatmentDuration: "4 months",
      location: "Bangalore"
    },
    {
      id: 4,
      name: "Suresh Menon",
      age: 67,
      condition: "Respiratory Issues",
      rating: 5,
      text: "The care and attention I received were exceptional. My breathing problems that persisted for years are now under control. Thank you for giving me my life back!",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      treatmentDuration: "1 year",
      location: "Chennai"
    },
    {
      id: 5,
      name: "Meera Desai",
      age: 29,
      condition: "PCOS",
      rating: 5,
      text: "Homeopathic treatment helped me manage my PCOS symptoms naturally. The doctors are incredibly supportive and the treatment plan was tailored perfectly for me.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600",
      treatmentDuration: "7 months",
      location: "Pune"
    }
  ];

  // Auto-play testimonials
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Star rating component
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: i * 0.1 + 0.5 }}
        className={i < rating ? "text-amber-400" : "text-gray-300"}
      >
        <Star size={14} fill={i < rating ? "currentColor" : "none"} />
      </motion.div>
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: ["easeOut"]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      rotateY: -180,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-6 bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50 relative overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-amber-200 to-orange-200 opacity-20"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-xs font-medium mb-4">
            <Heart size={14} className="mr-1" />
            Success Stories
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            What Our <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Patients Say</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover how homeopathic treatment has transformed lives and brought lasting wellness to our patients.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-2xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={currentTestimonial}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 items-center">
              {/* Image Section */}
              <div className="relative h-48 lg:h-40 overflow-hidden flex items-center">
                <motion.img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Patient Info Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 left-4 text-white"
                >
                  <h3 className="text-lg font-bold mb-1">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-amber-200 text-xs">{testimonials[currentTestimonial].age} years • {testimonials[currentTestimonial].location}</p>
                </motion.div>

                {/* Condition Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1"
                >
                  <span className="text-xs font-medium text-gray-800">{testimonials[currentTestimonial].condition}</span>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-4 lg:p-6 relative">
                {/* Quote Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-4 right-4 text-amber-100"
                >
                  <Quote size={32} />
                </motion.div>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-1 mb-3"
                >
                  {renderStars(testimonials[currentTestimonial].rating)}
                  <span className="text-xs text-gray-500 ml-2">
                    ({testimonials[currentTestimonial].rating}.0/5.0)
                  </span>
                </motion.div>

                {/* Testimonial Text */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm text-gray-700 leading-relaxed mb-3 italic"
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.blockquote>

                {/* Treatment Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-amber-50 rounded-xl p-3 mb-3"
                >
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-center">
                      <div className="text-amber-600 font-semibold">Duration</div>
                      <div className="text-gray-700">{testimonials[currentTestimonial].treatmentDuration}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-amber-600 font-semibold">Improvement</div>
                      <div className="text-gray-700">Significant</div>
                    </div>
                  </div>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex items-center gap-2 text-xs text-gray-500"
                >
                  <Award size={14} className="text-amber-500" />
                  <span>Verified Patient Story</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#f59e0b" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
            >
              <ArrowLeft size={16} className="text-gray-700" />
            </motion.button>

            {/* Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-amber-600 rounded-full shadow-lg flex items-center justify-center hover:bg-amber-700 transition-all"
            >
              {isPlaying ? (
                <Pause size={16} className="text-white" />
              ) : (
                <Play size={16} className="text-white" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#f59e0b" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
            >
              <ArrowRight size={16} className="text-gray-700" />
            </motion.button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-amber-600 w-6' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
        >
          {[
            { number: "10K+", label: "Patients Treated" },
            { number: "98%", label: "Success Rate" },
            { number: "15+", label: "Years Experience" },
            { number: "4.9", label: "Average Rating" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-xl font-bold text-amber-600 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;