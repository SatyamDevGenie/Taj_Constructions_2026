import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1600210492486-724fe621c853?w=1920&q=80"
          alt="Modern home interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
      </div>

      <div className="container-tight relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-px bg-brand-gold" />
              <span className="text-brand-gold text-sm font-body font-semibold uppercase tracking-[0.2em]">
                Complete Home Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Homes Designed for{" "}
              <span className="text-brand-gold italic">Modern Living</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/75 font-body text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Taaj Constructions Ltd provides expert home building and renovation services, from new homes to kitchen, bathroom, and garage upgrades — delivered with quality workmanship and reliable timelines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <Button to="/about" variant="outline" size="md">
                Learn More
              </Button>
              <button className="flex items-center gap-3 group">
                <span className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-all duration-300 animate-pulse-gold">
                  <FaPlay className="text-white text-sm ml-1 group-hover:text-brand-gold transition-colors" />
                </span>
                <span className="text-white font-body font-medium group-hover:text-brand-gold transition-colors">
                  Watch Video
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4 sm:px-6 lg:px-8"
      >
        <TrustCard />
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
    <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl rounded-sm shadow-2xl shadow-black/20 border border-white/50 p-6 sm:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <motion.img
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                src={src}
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <div>
            <p className="font-display text-xl sm:text-2xl font-bold text-brand-black">50K+</p>
            <p className="text-xs sm:text-sm text-gray-500 font-body uppercase tracking-wider">Happy Customers</p>
            <div className="flex gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-brand-gold text-sm">★</span>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block w-px h-16 bg-gray-200" />

        <div className="text-center md:text-left">
          <h3 className="font-display text-lg sm:text-xl font-bold text-brand-black mb-2">
            Many Have Trusted Our Services
          </h3>
          <div className="flex gap-4 justify-center md:justify-start">
            {["🏗️", "🏠", "📐", "✨"].map((icon, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="text-2xl"
              >
                {icon}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
