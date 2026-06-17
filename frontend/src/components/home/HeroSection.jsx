import { motion } from "framer-motion";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import Hero3D from "../3d/Hero3D";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    const handleScroll = () => {
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Hero3D mousePosition={mousePosition} scrollProgress={scrollProgress} />
      </div>

      {/* Animated Background with Parallax */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe621c853?w=1920&q=80"
            alt="Modern home interior"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </motion.div>

        {/* Animated Overlay Gradients */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-radial from-transparent via-brand-black/60 to-brand-black/90"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent"
        />

        {/* Floating Particles Effect */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [-20, -100],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
            className="absolute bottom-0 w-1 h-1 bg-brand-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container-tight relative z-10 py-20 pb-32 lg:py-32 lg:pb-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Animated Tag Line */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex items-center gap-3 mb-6 group cursor-pointer"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-12 h-px bg-brand-gold origin-left"
              />
              <span className="text-brand-gold text-sm font-body font-semibold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300">
                Complete Home Solutions
              </span>
            </motion.div>

            {/* Main Heading with Character Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Homes Designed for{" "}
              <motion.span
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-brand-gold italic inline-block"
              >
                Modern Living
              </motion.span>
            </motion.h1>

            {/* Description with Stagger */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-white/75 font-body text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Taaj Constructions Ltd provides expert home building and renovation services, from new homes to kitchen, bathroom, and garage upgrades — delivered with quality workmanship and reliable timelines.
            </motion.p>

            {/* CTA Buttons with Hover Animations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button to="/about" variant="outline" size="md">
                  <span className="flex items-center gap-2">
                    Learn More
                    <FaArrowRight className="text-xs" />
                  </span>
                </Button>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 group"
              >
                <motion.span
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(218, 165, 32, 0.4)",
                      "0 0 0 15px rgba(218, 165, 32, 0)",
                      "0 0 0 0 rgba(218, 165, 32, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold/20 transition-all duration-300"
                >
                  <FaPlay className="text-white text-sm ml-1 group-hover:text-brand-gold transition-colors" />
                </motion.span>
                <span className="text-white font-body font-medium group-hover:text-brand-gold transition-colors">
                  Watch Video
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Trust Card */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4 sm:px-6 lg:px-8 mt-8"
      >
        <TrustCard />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-brand-gold rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}


function TrustCard() {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl rounded-sm shadow-2xl shadow-black/20 border border-white/50 p-6 sm:p-8 mt-16 sm:mt-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
        <div className="flex items-center gap-5">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <motion.img
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1 + i * 0.1, type: "spring", stiffness: 200 }}
                src={src}
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover hover:scale-110 hover:z-10 transition-transform cursor-pointer"
              />
            ))}
          </div> 
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.p
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6, type: "spring" }}
              className="font-display text-xl sm:text-2xl font-bold text-brand-black"
            >
              50K+
            </motion.p>
            <p className="text-xs sm:text-sm text-gray-500 font-body uppercase tracking-wider">Happy Customers</p>
            <div className="flex gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 + i * 0.05 }}
                  className="text-brand-gold text-sm"
                >
                  ★
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="hidden md:block w-px h-16 bg-gray-200  mt-4"
        />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6 }}
          className="text-center md:text-left mt-4"
        >
          <h3 className="font-display text-lg sm:text-xl font-bold text-brand-black mb-2">
            Many Have Trusted Our Services
          </h3>
          <div className="flex gap-4 justify-center md:justify-start">
            {["🏗️", "🏠", "📐", "✨"].map((icon, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.8 + i * 0.1, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.3, rotate: 10 }}
                className="text-2xl cursor-pointer"
              >
                {icon}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
