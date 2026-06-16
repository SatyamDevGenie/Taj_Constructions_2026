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
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                custom={index}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 hover:border-brand-gold/30 relative"
              >
                {/* Number Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  className="absolute top-4 left-4 z-20 w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="font-display text-xl font-bold text-brand-black">
                    {service.number}
                  </span>
                </motion.div>

                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.2, rotate: 3 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent" />
                  
                  {/* Shine Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.7 }}
                  />
                </div>
                
                <div className="p-6 relative">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="font-display text-xl font-bold text-brand-black mb-3 group-hover:text-brand-gold transition-colors"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-gray-600 font-body text-sm leading-relaxed mb-4"
                  >
                    {service.description}
                  </motion.p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-brand-gold text-sm font-body font-semibold uppercase tracking-wider group/link"
                  >
                    View Details
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <HiArrowRight className="group-hover/link:translate-x-2 transition-transform" />
                    </motion.span>
                  </Link>

                  {/* Corner Decoration */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="absolute bottom-0 right-0 w-16 h-16 opacity-5"
                  >
                    <div className="absolute bottom-0 right-0 w-full h-full border-b-4 border-r-4 border-brand-gold rounded-tl-full" />
                  </motion.div>
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
