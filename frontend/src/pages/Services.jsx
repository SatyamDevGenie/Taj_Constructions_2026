import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import { services } from "../data/services";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="What We Offer"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Our Services" },
        ]}
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
      />

      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="container-tight">
          <SectionHeading
            subtitle="Our Services"
            title="Complete Home Construction & Renovation Solutions"
            description="We provide complete home construction and renovation solutions tailored to your needs — from building new homes to transforming existing spaces with quality craftsmanship and reliable service."
            align="center"
            className="mx-auto mb-16"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent" />
                  <span className="absolute top-4 left-4 font-display text-4xl font-bold text-brand-gold">
                    {service.number}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-brand-black mb-3 group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-brand-gold text-sm font-body font-semibold uppercase tracking-wider group/link"
                  >
                    View Details
                    <HiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16 p-10 bg-brand-black rounded-sm">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-white/60 font-body mb-6 max-w-xl mx-auto">
              Every home is unique. Contact us for a free consultation and personalized quote for your project.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
