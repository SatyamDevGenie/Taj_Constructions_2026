import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { AnimatedCounter } from "../../utils/animations";

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
    <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 bg-brand-cream">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction team at work"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-brand-gold text-brand-black p-6 sm:p-8 rounded-sm shadow-xl"
            >
              <p className="font-display text-4xl sm:text-5xl font-bold">10+</p>
              <p className="font-body text-sm font-semibold uppercase tracking-wider">Years Of Experience</p>
            </motion.div>

            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-gold/30 rounded-sm -z-10" />
          </motion.div>

          <div>
            <SectionHeading
              subtitle="About Us"
              title="Trusted Construction Experts Delivering Quality Homes"
              description="With years of industry experience, Taaj Constructions Ltd specializes in building high-quality residential properties that combine durability, functionality, and modern design."
            />

            <ul className="mt-8 space-y-4">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-brand-gold flex-shrink-0" />
                  <span className="font-body text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white rounded-sm shadow-sm border border-gray-100">
                  <p className="font-display text-3xl sm:text-4xl font-bold text-brand-gold">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-gray-600 font-body mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-600 font-body leading-relaxed text-sm sm:text-base">
              From new home construction to renovations and extensions, our skilled team is committed to delivering projects on time, within budget, and to the highest standards.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80"
                  alt="CEO"
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold"
                />
                <div>
                  <p className="font-display font-bold text-brand-black">John Doe</p>
                  <p className="text-sm text-gray-500 font-body">CEO</p>
                </div>
              </div>
              <Button to="/about" variant="outlineDark" size="sm">
                More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
