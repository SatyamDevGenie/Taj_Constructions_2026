import { motion } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import ProjectsSection from "../components/home/ProjectsSection";
import CtaSection, { BlogSection, ContentSection } from "../components/home/CtaSection";
import { ScrollProgressBar, BackToTopButton, FloatingElements } from "../components/ui/ScrollEnhancements";

export default function Home() {
  return (
    <>
      {/* Premium scroll progress bar */}
      <ScrollProgressBar />
      
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Back to top button */}
      <BackToTopButton />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <HeroSection />
        </motion.div>

        {/* Section Divider Animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"
          style={{ width: "80%" }}
        />

        {/* About with scroll reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <AboutSection />
        </motion.div>

        {/* Section Divider with dots */}
        <motion.div 
          className="flex justify-center items-center gap-2 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.5 }}
              className="w-2 h-2 rounded-full bg-brand-gold cursor-pointer"
            />
          ))}
        </motion.div>

        {/* Services with entrance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <ServicesSection />
        </motion.div>

        {/* Animated Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"
          style={{ width: "80%" }}
        />

        {/* Projects with slide-in */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <ProjectsSection />
        </motion.div>

        {/* Decorative dots divider */}
        <motion.div 
          className="flex justify-center items-center gap-2 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.5, rotate: 180 }}
              className="w-2 h-2 rounded-full bg-brand-gold cursor-pointer"
            />
          ))}
        </motion.div>

        {/* CTA with scale entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <CtaSection />
        </motion.div>

        {/* Animated line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"
          style={{ width: "80%" }}
        />

        {/* Blog with fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <BlogSection />
        </motion.div>

        {/* Final dots */}
        <motion.div 
          className="flex justify-center items-center gap-2 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.5 }}
              className="w-2 h-2 rounded-full bg-brand-gold cursor-pointer"
            />
          ))}
        </motion.div>

        {/* Content with final reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <ContentSection />
        </motion.div>
      </motion.div>
    </>
  );
}
