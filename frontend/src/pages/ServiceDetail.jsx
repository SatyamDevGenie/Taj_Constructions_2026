import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import { getServiceBySlug, services } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-brand-cream">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-brand-black mb-4">Service Not Found</h1>
          <Button to="/services" variant="primary">Back to Services</Button>
        </div>
      </div>
    );
  }

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.shortTitle}
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: service.title },
        ]}
        image={service.image}
      />

      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-display text-6xl font-bold text-brand-gold/20">{service.number}</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mt-2 mb-6">
                {service.title}
              </h2>
              <p className="text-gray-600 font-body text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <h3 className="font-display text-xl font-bold text-brand-black mb-4">What We Offer</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <FaCheckCircle className="text-brand-gold flex-shrink-0" />
                    <span className="font-body text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" variant="primary" size="md">
                  Get A Quote
                </Button>
                <Button to="/contact" variant="outlineDark" size="md">
                  Book Consultation
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover rounded-sm shadow-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-brand-black text-center rounded-sm">
                  <p className="font-display text-3xl font-bold text-brand-gold">10+</p>
                  <p className="text-white/60 font-body text-sm mt-1">Years Experience</p>
                </div>
                <div className="p-6 bg-brand-gold text-center rounded-sm">
                  <p className="font-display text-3xl font-bold text-brand-black">500+</p>
                  <p className="text-brand-black/70 font-body text-sm mt-1">Projects Done</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-tight">
          <h3 className="font-display text-2xl font-bold text-brand-black mb-8 text-center">Related Services</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group p-6 bg-brand-cream rounded-sm hover:bg-brand-black transition-colors duration-300"
              >
                <h4 className="font-display font-bold text-brand-black group-hover:text-brand-gold transition-colors">
                  {s.title}
                </h4>
                <p className="text-gray-500 group-hover:text-white/60 font-body text-sm mt-2 line-clamp-2 transition-colors">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
