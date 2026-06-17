import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight, HiPhone } from "react-icons/hi";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { blogs } from "../../data/blogs";
import { fadeUp, staggerContainer } from "../../utils/animations";
import Section3DWrapper from "../3d/Section3DWrapper";
import CTA3DScene from "../3d/CTA3DScene";

export default function CtaSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Premium 3D CTA Scene */}
      <Section3DWrapper className="absolute inset-0 z-0 opacity-30">
        <CTA3DScene />
      </Section3DWrapper>

      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-[1]"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        <div className="absolute inset-0 bg-brand-black/90" />
      </motion.div>

      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-brand-gold/30 rounded-full z-[2]"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: 0,
          }}
        />
      ))}

      <div className="container-tight relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-brand-gold text-sm font-body font-semibold uppercase tracking-[0.2em] mb-4"
        >
          Renovate with Experts
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto"
        >
          Bring Your{" "}
          <motion.span
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-brand-gold italic inline-block"
          >
            Dream Home
          </motion.span>{" "}
          to Life
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-white/70 font-body text-lg max-w-2xl mx-auto mb-10"
        >
          Whether it&apos;s a new build, renovation, or extension, our expert team delivers quality, style, and hassle-free construction. Let&apos;s create spaces you&apos;ll love.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button to="/contact" variant="primary" size="lg">
              <span className="flex items-center gap-2">
                <HiPhone className="text-lg" />
                Book Appointment
              </span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button to="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm font-body"
        >
          {["10+ Years Experience", "500+ Projects", "100% Satisfaction", "Licensed & Insured"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + i * 0.1 }}
              whileHover={{ scale: 1.1, color: "#DAA520" }}
              className="flex items-center gap-2"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="w-2 h-2 bg-brand-gold rounded-full"
              />
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function BlogSection() {
  const featured = blogs.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 -right-20 w-64 h-64 border-4 border-brand-gold/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 -left-20 w-80 h-80 border-4 border-brand-gold/5 rounded-full"
      />

      <div className="container-tight relative z-10">
        <SectionHeading
          subtitle="Our Blogs"
          title="Insights, Tips & Inspiration"
          description="Discover expert tips, latest trends, and design ideas for your home. From renovations to new builds, our blog guides you in creating spaces you'll love."
          align="center"
          className="mx-auto mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featured.map((blog, index) => (
            <motion.article
              key={blog.id}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-brand-cream rounded-sm overflow-hidden hover:shadow-2xl"
            >
              <div className="relative h-52 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.6 }}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <motion.span
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute top-4 left-4 px-3 py-1 bg-brand-gold text-brand-black text-xs font-body font-semibold uppercase"
                >
                  {blog.category}
                </motion.span>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              
              <div className="p-6">
                <motion.time
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="text-xs text-gray-400 font-body uppercase tracking-wider"
                >
                  {blog.date}
                </motion.time>
                
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="font-display text-lg font-bold text-brand-black mt-2 mb-3 group-hover:text-brand-gold transition-colors line-clamp-2"
                >
                  <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  className="text-gray-600 font-body text-sm leading-relaxed line-clamp-3 mb-4"
                >
                  {blog.excerpt}
                </motion.p>
                
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-brand-gold text-sm font-body font-semibold uppercase tracking-wider group/link"
                >
                  Read More
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <HiArrowRight className="group-hover/link:translate-x-2 transition-transform" />
                  </motion.span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button to="/blogs" variant="outlineDark" size="md">
              View All Blogs
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function ContentSection() {
  return (
    <section className="py-20 sm:py-28 bg-brand-sand relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(45deg, #DAA520 25%, transparent 25%, transparent 75%, #DAA520 75%, #DAA520), linear-gradient(45deg, #DAA520 25%, transparent 25%, transparent 75%, #DAA520 75%, #DAA520)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px',
        }}
      />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl sm:text-4xl font-bold text-brand-black mb-8"
          >
            Built Around the Way{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-brand-gold"
            >
              You Live
            </motion.span>
          </motion.h2>
          
          <div className="space-y-6 text-gray-600 font-body leading-relaxed text-base sm:text-lg">
            {[
              "Your home should work better for your family, not the other way around. As a home improvement company in London, homeowners trust we take on everything from practical upgrades to full-scale renovations with a straightforward, hands-on approach.",
              "We also create durable outdoor surfaces, including driveway installation in Cranford and custom driveways in Twickenham, designed to add both function and curb appeal. We provide trustworthy home improvement construction services that offer you sound advice, clean workmanship, and consistency.",
              "Taaj Constructions Ltd. has made a name for itself in remodeling old buildings to new and tastefully done homes through its expertise in communication and professionalism."
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Decorative Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 w-24 h-1 bg-brand-gold mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
