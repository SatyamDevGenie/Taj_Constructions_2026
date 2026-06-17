import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { quickLinks, footerServices, contactInfo, socialLinks } from "../../data/navigation";
import Section3DWrapper from "../3d/Section3DWrapper";
import Footer3DScene from "../3d/Footer3DScene";

const iconMap = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  youtube: FaYoutube,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
};

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white relative overflow-hidden">
      {/* Premium 3D Footer Scene */}
      <Section3DWrapper className="absolute inset-0 z-0 opacity-15">
        <Footer3DScene />
      </Section3DWrapper>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-64 h-64 border-2 border-brand-gold rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-80 h-80 border-2 border-brand-gold rounded-full"
        />
      </div>

      <div className="border-t border-brand-gold/20 relative z-10">
        <div className="container-tight py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Company Info */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <Link to="/" className="inline-block mb-6 group">
                <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
                  <span className="font-display text-2xl font-bold text-white group-hover:text-brand-gold transition-colors">TAAJ</span>
                  <span className="block text-xs text-brand-gold font-body font-semibold tracking-[0.25em] uppercase">
                    Constructions Ltd
                  </span>
                </motion.div>
              </Link>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-white/60 font-body text-sm leading-relaxed mb-6"
              >
                At Taaj Constructions, we build homes and spaces with quality, care, and precision. Our experienced team delivers custom designs, timely completion, and complete client satisfaction on every project.
              </motion.p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        backgroundColor: "#DAA520",
                        color: "#1a1a1a",
                        borderColor: "#DAA520"
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 transition-all duration-300"
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-display text-lg font-bold mb-6 text-brand-gold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-brand-gold transition-colors font-body text-sm flex items-center gap-2 group"
                    >
                      <motion.span 
                        className="w-0 group-hover:w-3 h-px bg-brand-gold transition-all duration-300"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                      />
                      <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-display text-lg font-bold mb-6 text-brand-gold">Our Services</h4>
              <ul className="space-y-3">
                {footerServices.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-brand-gold transition-colors font-body text-sm flex items-center gap-2 group"
                    >
                      <motion.span 
                        className="w-0 group-hover:w-3 h-px bg-brand-gold transition-all duration-300"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                      />
                      <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-display text-lg font-bold mb-6 text-brand-gold">Contact Information</h4>
              <ul className="space-y-4">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-3 text-sm text-white/60 font-body group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaMapMarkerAlt className="text-brand-gold mt-1 flex-shrink-0 group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="group-hover:text-white transition-colors">{contactInfo.address}</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="flex gap-3 text-sm text-white/60 hover:text-brand-gold transition-colors font-body group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaPhone className="text-brand-gold mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                    </motion.div>
                    {contactInfo.phone}
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex gap-3 text-sm text-white/60 hover:text-brand-gold transition-colors font-body break-all group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaEnvelope className="text-brand-gold mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                    </motion.div>
                    {contactInfo.email}
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="border-t border-white/10 relative"
      >
        {/* Animated Top Border Glow */}
        <motion.div
          animate={{ 
            x: ["-100%", "100%"],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent"
        />
        
        <div className="container-tight py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-white/40 text-sm font-body text-center sm:text-left"
          >
            Copyright &copy; {new Date().getFullYear()} Taaj Constructions Ltd. All Rights Reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/privacy-policy" className="text-white/40 hover:text-brand-gold text-sm font-body transition-colors relative group">
              Privacy Policy
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
