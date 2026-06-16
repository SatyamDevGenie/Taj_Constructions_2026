import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "right"
        ? "text-right ml-auto"
        : "text-left";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`max-w-3xl ${alignClass} ${className}`}
    >
      {subtitle && (
        <div className="flex items-center gap-3 mb-4 justify-start">
          {align === "center" && <span className="hidden sm:block flex-1 h-px bg-brand-gold/30" />}
          <span
            className={`text-xs sm:text-sm font-body font-semibold uppercase tracking-[0.2em] ${
              light ? "text-brand-gold" : "text-brand-gold"
            }`}
          >
            {subtitle}
          </span>
          <span className="w-12 h-px bg-brand-gold" />
          {align === "center" && <span className="hidden sm:block flex-1 h-px bg-brand-gold/30" />}
        </div>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-brand-black"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-body text-base sm:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
