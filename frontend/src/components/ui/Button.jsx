import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm";

  const variants = {
    primary:
      "bg-brand-gold text-brand-black hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-brand-black",
    outlineDark:
      "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black",
    dark: "bg-brand-black text-white hover:bg-brand-charcoal hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-sm",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
