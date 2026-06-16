import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import { faqs } from "../data/faqs";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageHero
        title="FAQs"
        subtitle="Common Questions"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "FAQs" },
        ]}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
      />

      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="container-tight max-w-3xl">
          <SectionHeading
            subtitle="FAQs"
            title="Frequently Asked Questions"
            description="Find answers to the most common questions about our services, process, and what to expect when working with Taaj Constructions."
            align="center"
            className="mx-auto mb-16"
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-cream/50 transition-colors"
                >
                  <span className="font-display font-bold text-brand-black pr-4">{faq.question}</span>
                  <HiChevronDown
                    className={`text-brand-gold flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 font-body leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-brand-black rounded-sm">
            <h3 className="font-display text-xl font-bold text-white mb-3">Still Have Questions?</h3>
            <p className="text-white/60 font-body mb-6">Our team is happy to help. Get in touch for personalized answers.</p>
            <Button to="/contact" variant="primary" size="md">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
