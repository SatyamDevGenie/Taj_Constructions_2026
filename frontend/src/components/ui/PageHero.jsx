import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, breadcrumb, image }) {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          }
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/80 to-brand-black/60" />
      </div>

      <div className="container-tight relative z-10 py-20 sm:py-28">
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-white/60 mb-6 font-body"
          >
            {breadcrumb.map((item, i) => (
              <span key={item.label} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {item.path ? (
                  <Link to={item.path} className="hover:text-brand-gold transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-brand-gold">{item.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-brand-gold text-sm font-body font-semibold uppercase tracking-[0.2em] mb-3"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl"
        >
          {title}
        </motion.h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient" />
    </section>
  );
}
