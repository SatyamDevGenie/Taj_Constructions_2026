import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/projects";
import { Link } from "react-router-dom";
import Section3DWrapper from "../3d/Section3DWrapper";
import Projects3DScene from "../3d/Projects3DScene";

export default function ProjectsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-brand-cream relative overflow-hidden">
      {/* Premium 3D Gallery Scene */}
      <Section3DWrapper className="absolute inset-0 z-0 opacity-25">
        <Projects3DScene />
      </Section3DWrapper>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(218, 165, 32, 0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container-tight relative z-10">
        <SectionHeading
          subtitle="Our Projects"
          title="Turning Visions Into Reality"
          description="At Taaj Constructions Ltd, we take pride in every project we deliver. From building brand-new homes to transforming existing spaces, each project reflects our commitment to quality, design, and client satisfaction."
          align="center"
          className="mx-auto mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Main Project Display */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-sm overflow-hidden group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: -2 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                <img
                  src={projects[active].image}
                  alt={projects[active].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/30 to-transparent" />
            
            {/* Hover Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%", y: "-100%" }}
              whileHover={{ x: "100%", y: "100%" }}
              transition={{ duration: 0.8 }}
            />

            {/* Project Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 left-6 right-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-3 py-1 bg-brand-gold text-brand-black text-xs font-body font-semibold uppercase tracking-wider rounded-sm mb-2"
                  >
                    {projects[active].category}
                  </motion.span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                    {projects[active].title}
                  </h3>
                  <p className="text-white/80 font-body text-sm line-clamp-2">
                    {projects[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Counter Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="absolute top-6 right-6 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center font-display font-bold text-brand-black"
            >
              {active + 1}
            </motion.div>
          </motion.div>

          {/* Project List */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {projects.slice(0, 4).map((project, i) => (
              <motion.button
                key={project.id}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-5 rounded-sm border transition-all duration-300 relative overflow-hidden group ${
                  active === i
                    ? "bg-brand-black border-brand-gold shadow-lg"
                    : "bg-white border-gray-200 hover:border-brand-gold/50 hover:shadow-md"
                }`}
              >
                {/* Active Indicator Bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: active === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold origin-left"
                />

                {/* Hover Background Effect */}
                {active !== i && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <div className="relative z-10">
                  <motion.span
                    animate={{ 
                      color: active === i ? "#DAA520" : "#9CA3AF",
                    }}
                    className="text-xs font-body font-semibold uppercase tracking-wider"
                  >
                    {project.category}
                  </motion.span>
                  <motion.h4
                    animate={{ 
                      color: active === i ? "#FFFFFF" : "#1a1a1a",
                    }}
                    className="font-display text-lg font-bold mt-1 flex items-center justify-between"
                  >
                    {project.title}
                    <motion.span
                      animate={{ 
                        x: active === i ? [0, 5, 0] : 0,
                        opacity: active === i ? 1 : 0.5,
                      }}
                      transition={{ 
                        x: { duration: 1.5, repeat: Infinity },
                        opacity: { duration: 0.3 }
                      }}
                    >
                      <FaArrowRight className={active === i ? "text-brand-gold" : "text-gray-400"} />
                    </motion.span>
                  </motion.h4>
                </div>

                {/* Number Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    active === i ? "bg-brand-gold text-brand-black" : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {i + 1}
                </motion.div>
              </motion.button>
            ))}

            {/* View All Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/projects"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-gold text-brand-black font-body font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-brand-gold-light transition-all duration-300 group"
                >
                  View All Projects
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
