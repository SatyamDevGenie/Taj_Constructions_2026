import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../data/services";
import { staggerContainer, fadeUp } from "../../utils/animations";
import ServiceCard3D from "../3d/ServiceCard3D";

export default function ServicesSection() {
  const featured = services.slice(0, 6);
  const [hoveredCard, setHoveredCard] = useState(null);

  const getServiceType = (index) => {
    const types = ['residential', 'commercial', 'renovation'];
    return types[index % types.length];
  };

  return (
    <section className="py-20 sm:py-28 bg-brand-black relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl" 
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(218, 165, 32, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(218, 165, 32, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
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
          {featured.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              custom={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-brand-charcoal border border-white/5 rounded-sm overflow-hidden hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/10"
            >
              {/* 3D Background Canvas */}
              <div className="absolute inset-0 w-full h-full opacity-30">
                <ServiceCard3D 
                  type={getServiceType(index)} 
                  isHovered={hoveredCard === index} 
                />
              </div>

              {/* Service Number Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                className="absolute top-4 left-4 z-20 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center"
              >
                <span className="font-display text-lg font-bold text-brand-black">
                  {service.number}
                </span>
              </motion.div>

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.6 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 font-body text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-brand-gold text-sm font-body font-semibold uppercase tracking-wider group/link"
                  >
                    Learn More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <HiArrowRight className="group-hover/link:translate-x-2 transition-transform" />
                    </motion.span>
                  </Link>
                </motion.div>

                {/* Decorative Corner */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="absolute bottom-0 right-0 w-20 h-20 opacity-5"
                >
                  <div className="absolute bottom-0 right-0 w-full h-full border-b-4 border-r-4 border-brand-gold rounded-tl-full" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-gold text-brand-gold font-body font-semibold uppercase tracking-wider text-sm hover:bg-brand-gold hover:text-brand-black transition-all duration-300 rounded-sm group relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-brand-gold"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View All Services</span>
              <HiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
