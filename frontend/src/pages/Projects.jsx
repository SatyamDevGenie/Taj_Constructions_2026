import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Portfolio"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Projects" },
        ]}
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
      />

      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="container-tight">
          <SectionHeading
            subtitle="Our Projects"
            title="Turning Visions Into Reality"
            description="At Taaj Constructions Ltd, we take pride in every project we deliver. Each project reflects our commitment to quality, design, and client satisfaction."
            align="center"
            className="mx-auto mb-12"
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-sm font-body font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                  filter === cat
                    ? "bg-brand-gold text-brand-black"
                    : "bg-white text-gray-600 hover:bg-brand-black hover:text-white border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-shadow duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-brand-gold text-brand-black text-xs font-body font-semibold uppercase tracking-wider rounded-sm mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-white/70 font-body text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="text-center mt-16">
            <Button to="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
