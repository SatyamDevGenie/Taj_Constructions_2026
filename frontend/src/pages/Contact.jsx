import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { contactInfo } from "../data/navigation";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const contactCards = [
    { icon: FaMapMarkerAlt, title: "Our Address", content: contactInfo.address },
    { icon: FaPhone, title: "Phone Number", content: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
    { icon: FaEnvelope, title: "Email Address", content: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: FaClock, title: "Opening Hours", content: contactInfo.hours },
  ];

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get In Touch"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Contact Us" },
        ]}
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a93?w=1920&q=80"
      />

      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="container-tight">
          <SectionHeading
            subtitle="Contact Us"
            title="Let's Discuss Your Project"
            description="Have a question or ready to start your home improvement project? We'd love to hear from you. Fill out the form below or reach us directly."
            align="center"
            className="mx-auto mb-16"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-sm border border-gray-100 text-center hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-brand-gold/10 group-hover:bg-brand-gold transition-colors">
                  <card.icon className="text-xl text-brand-gold group-hover:text-brand-black transition-colors" />
                </div>
                <h3 className="font-display font-bold text-brand-black mb-2">{card.title}</h3>
                {card.href ? (
                  <a href={card.href} className="text-gray-600 hover:text-brand-gold font-body text-sm transition-colors">
                    {card.content}
                  </a>
                ) : (
                  <p className="text-gray-600 font-body text-sm">{card.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white p-8 sm:p-10 rounded-sm shadow-sm border border-gray-100"
            >
              <h3 className="font-display text-2xl font-bold text-brand-black mb-6">Send Us a Message</h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-sm font-body text-sm"
                >
                  Thank you! Your message has been sent. We&apos;ll get back to you shortly.
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm font-body text-sm focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm font-body text-sm focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm font-body text-sm focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="+44 7XXX XXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-2">Service Required</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm font-body text-sm focus:outline-none focus:border-brand-gold transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="new-build">New Home Build</option>
                    <option value="renovation">Home Renovation</option>
                    <option value="extension">House Extension</option>
                    <option value="kitchen">Kitchen Remodelling</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-body font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm font-body text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-black font-body font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-brand-gold-light transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-sm overflow-hidden min-h-[400px]"
            >
              <iframe
                title="Taaj Constructions Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0!2d-0.44!3d51.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI4JzQ4LjAiTiAwwrAyNicwMC4wIlc!5e0!3m2!1sen!2suk!4v1"
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
