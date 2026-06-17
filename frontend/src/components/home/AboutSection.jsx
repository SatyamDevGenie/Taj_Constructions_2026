import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { AnimatedCounter } from "../../utils/animations";
import Section3DWrapper from "../3d/Section3DWrapper";
import About3DScene from "../3d/About3DScene";

const stats = [
  { value: 98, suffix: "%", label: "Successful Projects" },
  { value: 95, suffix: "%", label: "Construction Excellence" },
];

export default function AboutSection() {
  const features = [
    "Experienced & Professional Team",
    "High-Quality Materials & Craftsmanship",
    "On-Time Project Completion",
  ];

  return (
    <section className="pt-40 sm:pt-48 pb-20 sm:pb-28 bg-brand-cream relative overflow-hidden">
      {/* Premium 3D Background */}
      <Section3DWrapper className="absolute inset-0 z-0 opacity-30">
        <About3DScene />
      </Section3DWrapper>

      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-32 h-32 border-4 border-brand-gold/10 rounded-full z-[1]"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-24 h-24 border-4 border-brand-gold/10 rounded-full z-[1]"
      />

      <div className="container-tight relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section with Advanced Animations */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden group">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction team at work"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
              
              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-brand-gold/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-brand-gold text-brand-black p-6 sm:p-8 rounded-sm shadow-xl cursor-pointer"
            >
              <motion.p 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                className="font-display text-4xl sm:text-5xl font-bold"
              >
                10+
              </motion.p>
              <p className="font-body text-sm font-semibold uppercase tracking-wider">Years Of Experience</p>
            </motion.div>

            {/* Decorative Corner Frame */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-gold/30 rounded-sm -z-10" 
            />
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-brand-gold/20 rounded-sm -z-10" 
            />
          </motion.div>

          {/* Content Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading
                subtitle="About Us"
                title="Trusted Construction Experts Delivering Quality Homes"
                description="With years of industry experience, Taaj Constructions Ltd specializes in building high-quality residential properties that combine durability, functionality, and modern design."
              />
            </motion.div>

            {/* Feature List with Stagger Animation */}
            <ul className="mt-8 space-y-4">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                  >
                    <FaCheckCircle className="text-brand-gold flex-shrink-0 group-hover:scale-125 transition-transform" />
                  </motion.div>
                  <span className="font-body text-gray-700 group-hover:text-brand-black transition-colors">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats Grid with Counter Animation */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  className="text-center p-4 bg-white rounded-sm shadow-sm border border-gray-100 cursor-pointer"
                >
                  <motion.p 
                    whileHover={{ scale: 1.1 }}
                    className="font-display text-3xl sm:text-4xl font-bold text-brand-gold"
                  >
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </motion.p>
                  <p className="text-sm text-gray-600 font-body mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-gray-600 font-body leading-relaxed text-sm sm:text-base"
            >
              From new home construction to renovations and extensions, our skilled team is committed to delivering projects on time, within budget, and to the highest standards.
            </motion.p>

            {/* CEO Section & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <motion.img
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80"
                  alt="CEO"
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold"
                />
                <div>
                  <motion.p 
                    whileHover={{ color: "#DAA520" }}
                    className="font-display font-bold text-brand-black"
                  >
                    John Doe
                  </motion.p>
                  <p className="text-sm text-gray-500 font-body">CEO</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button to="/about" variant="outlineDark" size="sm">
                  More About Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
