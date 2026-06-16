import { motion } from "framer-motion";
import { FaCheckCircle, FaPoundSign, FaPalette, FaUsers } from "react-icons/fa";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import { AnimatedCounter } from "../utils/animations";
import { processSteps } from "../data/faqs";

const stats = [
  { value: 98, suffix: "%", label: "Successful Projects" },
  { value: 92, suffix: "%", label: "Design Implementation" },
  { value: 99, suffix: "%", label: "Happy Customers" },
];

const values = [
  {
    icon: FaPoundSign,
    title: "Reasonable Prices",
    description: "Quality construction delivering great value every time.",
  },
  {
    icon: FaPalette,
    title: "Exclusive Design",
    description: "Custom solutions perfectly tailored to your vision.",
  },
  {
    icon: FaUsers,
    title: "Professional Team",
    description: "Expert guidance throughout every project, start to finish.",
  },
];

export default function About() {
  const features = [
    "Personalized Planning: Understanding your needs to design homes that match your lifestyle.",
    "Quality Construction: Using premium materials and skilled craftsmanship for lasting results.",
    "Transparent Communication: Keeping you updated at every stage of construction.",
    "Timely Delivery: Completing projects on schedule without compromising quality.",
  ];

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="About Us"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "About Us" },
        ]}
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
      />

      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="About Us"
                title="Trusted Construction Experts Delivering Quality Homes"
                description="With years of industry experience, Taaj Constructions Ltd specializes in building high-quality residential properties that combine durability, functionality, and modern design."
              />
              <div className="mt-8 p-6 bg-white rounded-sm border border-gray-100">
                <h3 className="font-display text-xl font-bold text-brand-black mb-3">New Home Build</h3>
                <p className="text-gray-600 font-body leading-relaxed">
                  We design and construct high-quality homes from the ground up, ensuring durability, safety, and modern living standards tailored to your vision.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Modern home"
                className="w-full h-[400px] object-cover rounded-sm"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-gold p-6 rounded-sm shadow-xl">
                <p className="font-display text-3xl font-bold text-brand-black">10+</p>
                <p className="text-sm font-body font-semibold text-brand-black/80">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-brand-black">
        <div className="container-tight">
          <SectionHeading
            subtitle="Our Process"
            title="How We Work For Your Home"
            description="At Taaj Constructions, we follow a clear and client-focused process to ensure every project is smooth and successful."
            align="center"
            light
            className="mx-auto mb-16"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-brand-charcoal border border-white/5 rounded-sm"
              >
                <FaCheckCircle className="text-brand-gold flex-shrink-0 mt-1" />
                <p className="text-white/70 font-body text-sm leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-8 bg-brand-charcoal border border-brand-gold/20 rounded-sm">
                <p className="font-display text-4xl font-bold text-brand-gold">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white/60 font-body mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-white/60 font-body text-center max-w-3xl mx-auto leading-relaxed">
            Throughout the construction journey, we maintain open communication and regular updates, keeping you informed at every stage. Our dedicated project managers oversee timelines, budgets, and quality control.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="container-tight">
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8 bg-brand-cream rounded-sm group hover:bg-brand-black transition-colors duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors">
                  <value.icon className="text-2xl text-brand-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-black group-hover:text-white transition-colors mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/70 font-body text-sm transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-sand">
        <div className="container-tight">
          <h3 className="font-display text-2xl font-bold text-brand-black text-center mb-10">Our 5-Step Process</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 bg-white rounded-sm border border-gray-100 text-center"
              >
                <span className="font-display text-3xl font-bold text-brand-gold/30">{step.step}</span>
                <h4 className="font-display font-bold text-brand-black mt-2 mb-2">{step.title}</h4>
                <p className="text-gray-500 font-body text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
