import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../data/services";
import { staggerContainer, fadeUp } from "../../utils/animations";

export default function ServicesSection() {
  const featured = services.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl" />
      </div>

      <div className="container-tight relative z-10">
        <SectionHeading
          subtitle="Our Services"
          title="Our Flawless Services"
          description="We provide complete home construction and renovation solutions tailored to your needs — from building new homes to transforming existing spaces with quality craftsmanship and reliable service."
          align="center"
          light
          className="mx-auto mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className="group relative bg-brand-charcoal border border-white/5 rounded-sm overflow-hidden hover:border-brand-gold/30 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
                <span className="absolute top-4 left-4 font-display text-3xl font-bold text-brand-gold/80">
                  {service.number}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-brand-gold text-sm font-body font-semibold uppercase tracking-wider group/link"
                >
                  Learn More
                  <HiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-gold text-brand-gold font-body font-semibold uppercase tracking-wider text-sm hover:bg-brand-gold hover:text-brand-black transition-all duration-300 rounded-sm"
          >
            View All Services
            <HiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
