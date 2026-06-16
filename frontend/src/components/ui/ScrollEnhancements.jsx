import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-brand-gold origin-left z-50"
      style={{ scaleX }}
    />
  );
}

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-brand-gold text-brand-black rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center group"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaArrowUp className="text-xl" />
          </motion.div>
          
          {/* Pulse ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-brand-gold"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated corner decorations */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-32 h-32 border-2 border-brand-gold/10 rounded-full"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-40 h-40 border-2 border-brand-gold/10 rounded-full"
      />
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand-gold/20 rounded-full"
          animate={{
            y: [0, -1000],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: 0
          }}
        />
      ))}
    </div>
  );
}

export function SectionRevealWrapper({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
