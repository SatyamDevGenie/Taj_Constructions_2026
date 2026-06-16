import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <PageHero
        title="Testimonials"
        subtitle="Client Reviews"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Testimonials" },
        ]}
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
      />

      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="container-tight">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from homeowners across London who have trusted Taaj Constructions with their dream projects."
            align="center"
            className="mx-auto mb-16"
          />

          <div className="max-w-4xl mx-auto relative">
            <FaQuoteLeft className="absolute -top-4 left-0 text-6xl text-brand-gold/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 sm:p-12 rounded-sm shadow-lg border border-gray-100 text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <FaStar key={i} className="text-brand-gold" />
                  ))}
                </div>

                <p className="text-gray-700 font-body text-lg sm:text-xl leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[active].text}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[active].image}
                    alt={testimonials[active].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold"
                  />
                  <div className="text-left">
                    <p className="font-display font-bold text-brand-black">{testimonials[active].name}</p>
                    <p className="text-sm text-gray-500 font-body">{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 font-body font-bold"
              >
                ←
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === active ? "bg-brand-gold w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 font-body font-bold"
              >
                →
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActive(i)}
                className={`p-6 rounded-sm cursor-pointer transition-all duration-300 ${
                  i === active
                    ? "bg-brand-black text-white shadow-xl"
                    : "bg-white border border-gray-100 hover:border-brand-gold/30 hover:shadow-md"
                }`}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <FaStar key={j} className={`text-sm ${i === active ? "text-brand-gold" : "text-brand-gold"}`} />
                  ))}
                </div>
                <p className={`font-body text-sm leading-relaxed line-clamp-3 ${i === active ? "text-white/80" : "text-gray-600"}`}>
                  {t.text}
                </p>
                <p className={`font-display font-bold mt-4 text-sm ${i === active ? "text-brand-gold" : "text-brand-black"}`}>
                  {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
