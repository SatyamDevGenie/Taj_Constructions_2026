import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/projects";

export default function ProjectsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-brand-cream">
      <div className="container-tight">
        <SectionHeading
          subtitle="Our Projects"
          title="Turning Visions Into Reality"
          description="At Taaj Constructions Ltd, we take pride in every project we deliver. From building brand-new homes to transforming existing spaces, each project reflects our commitment to quality, design, and client satisfaction."
          align="center"
          className="mx-auto mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={projects[active].image}
                alt={projects[active].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-brand-gold text-brand-black text-xs font-body font-semibold uppercase tracking-wider rounded-sm mb-2">
                {projects[active].category}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {projects[active].title}
              </h3>
            </div>
          </div>

          <div className="space-y-3">
            {projects.slice(0, 4).map((project, i) => (
              <motion.button
                key={project.id}
                onClick={() => setActive(i)}
                whileHover={{ x: 5 }}
                className={`w-full text-left p-5 rounded-sm border transition-all duration-300 ${
                  active === i
                    ? "bg-brand-black border-brand-gold shadow-lg"
                    : "bg-white border-gray-200 hover:border-brand-gold/50"
                }`}
              >
                <span
                  className={`text-xs font-body font-semibold uppercase tracking-wider ${
                    active === i ? "text-brand-gold" : "text-gray-400"
                  }`}
                >
                  {project.category}
                </span>
                <h4
                  className={`font-display text-lg font-bold mt-1 ${
                    active === i ? "text-white" : "text-brand-black"
                  }`}
                >
                  {project.title}
                </h4>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
