import { motion } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import { processSteps } from "../data/faqs";

export default function Process() {
  return (
    <>
      <PageHero
        title="Our Process"
        subtitle="How We Work"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Our Process" },
        ]}
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
      />

      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="container-tight">
          <SectionHeading
            subtitle="Our Process"
            title="How We Work For Your Home"
            description="At Taaj Constructions, we follow a clear and client-focused process to ensure every project is smooth and successful — from initial consultation to final handover."
            align="center"
            className="mx-auto mb-16"
          />

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-gold/30 -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`lg:flex items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`p-8 bg-white rounded-sm shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 ${i % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}>
                      <span className="font-display text-5xl font-bold text-brand-gold/20">{step.step}</span>
                      <h3 className="font-display text-2xl font-bold text-brand-black mt-2 mb-3">{step.title}</h3>
                      <p className="text-gray-600 font-body leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-brand-gold items-center justify-center flex-shrink-0 relative z-10">
                    <span className="font-display font-bold text-brand-black text-sm">{step.step}</span>
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>

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
