import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, breadcrumb, image }) {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center overflow-hidden">
      {/* Animated Background with Parallax */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full h-full"
        >
          <img
            src={
              image ||
              "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            }
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Animated Gradient Overlays */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/80 to-brand-black/60" 
        />
        
        {/* Animated Scan Line Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/5 to-transparent"
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              y: [-20, -120],
              x: [0, Math.random() * 80 - 40]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut"
            }}
            className="absolute bottom-0 w-1 h-1 bg-brand-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container-tight relative z-10 py-20 sm:py-28">
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0, y: 30, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center gap-2 text-sm text-white/60 mb-6 font-body"
          >
            {breadcrumb.map((item, i) => (
              <motion.span 
                key={item.label} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                className="flex items-center gap-2"
              >
                {i > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.4 }}
                  >
                    /
                  </motion.span>
                )}
                {item.path ? (
                  <Link to={item.path} className="hover:text-brand-gold transition-colors relative group">
                    {item.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                ) : (
                  <span className="text-brand-gold">{item.label}</span>
                )}
              </motion.span>
            ))}
          </motion.nav>
        )}

        {subtitle && (
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex items-center gap-3 mb-4 group cursor-pointer"
          >
            <motion.span 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-12 h-px bg-brand-gold origin-left" 
            />
            <p className="text-brand-gold text-sm font-body font-semibold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300">
              {subtitle}
            </p>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl"
        >
          {title.split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Decorative Element */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 w-24 h-1 bg-brand-gold origin-left"
        />
      </div>

      {/* Animated Bottom Border */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold origin-left" 
      />
      
      {/* Pulsing Glow on Bottom Border */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scaleY: [1, 1.5, 1]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold blur-sm"
      />
    </section>
  );
}
