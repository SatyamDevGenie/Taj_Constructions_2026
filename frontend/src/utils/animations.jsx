import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Premium animation variants for professional UK/London clients
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

// New advanced animation variants
const zoomIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
  },
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -15, scale: 0.9 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    scale: 1, 
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const slideDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const flipIn = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { 
    opacity: 1, 
    rotateY: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const bounceIn = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.68, -0.55, 0.265, 1.55] 
    }
  },
};

const expandWidth = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { 
    opacity: 1, 
    scaleX: 1, 
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

export { 
  fadeUp, 
  fadeIn, 
  scaleIn, 
  slideLeft, 
  slideRight, 
  staggerContainer,
  zoomIn,
  rotateIn,
  slideUp,
  slideDown,
  flipIn,
  bounceIn,
  expandWidth
};

export function AnimatedSection({ children, className = "", delay = 0, variant = "fadeUp" }) {
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants[variant]}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCounter({ end, suffix = "", duration = 2.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// Parallax scroll effect hook
export function useParallax(speed = 0.5) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return [ref, y];
}

// Magnetic cursor effect for premium feel
export function useMagneticEffect(strength = 0.3) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      setPosition({
        x: distanceX * strength,
        y: distanceY * strength,
      });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return [ref, position];
}

// Stagger children animation
export function AnimatedStagger({ children, className = "", staggerDelay = 0.1 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Shine effect for cards
export const shineEffect = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: [0, 1, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

// Pulse animation for CTAs
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

// Floating animation for elements
export const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Glow effect animation
export const glowAnimation = {
  boxShadow: [
    "0 0 20px rgba(201, 169, 98, 0.3)",
    "0 0 40px rgba(201, 169, 98, 0.6)",
    "0 0 20px rgba(201, 169, 98, 0.3)"
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};
