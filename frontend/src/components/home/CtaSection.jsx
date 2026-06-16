import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { blogs } from "../../data/blogs";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function CtaSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/85" />
      </div>

      <div className="container-tight relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-gold text-sm font-body font-semibold uppercase tracking-[0.2em] mb-4"
        >
          Renovate with Experts
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto"
        >
          Bring Your Dream Home to Life
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/70 font-body text-lg max-w-2xl mx-auto mb-10"
        >
          Whether it&apos;s a new build, renovation, or extension, our expert team delivers quality, style, and hassle-free construction. Let&apos;s create spaces you&apos;ll love.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button to="/contact" variant="primary" size="lg">
            Book Appointment
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export function BlogSection() {
  const featured = blogs.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container-tight">
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
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featured.map((blog) => (
            <motion.article
              key={blog.id}
              variants={fadeUp}
              className="group bg-brand-cream rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-brand-gold text-brand-black text-xs font-body font-semibold uppercase">
                  {blog.category}
                </span>
              </div>
              <div className="p-6">
                <time className="text-xs text-gray-400 font-body uppercase tracking-wider">
                  {blog.date}
                </time>
                <h3 className="font-display text-lg font-bold text-brand-black mt-2 mb-3 group-hover:text-brand-gold transition-colors line-clamp-2">
                  <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-brand-gold text-sm font-body font-semibold uppercase tracking-wider group/link"
                >
                  Read More
                  <HiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button to="/blogs" variant="outlineDark" size="md">
            View All Blogs
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ContentSection() {
  return (
    <section className="py-20 sm:py-28 bg-brand-sand">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mb-8">
            Built Around the Way You Live
          </h2>
          <div className="space-y-6 text-gray-600 font-body leading-relaxed text-base sm:text-lg">
            <p>
              Your home should work better for your family, not the other way around. As a home improvement company in London, homeowners trust we take on everything from practical upgrades to full-scale renovations with a straightforward, hands-on approach.
            </p>
            <p>
              We also create durable outdoor surfaces, including driveway installation in Cranford and custom driveways in Twickenham, designed to add both function and curb appeal. We provide trustworthy home improvement construction services that offer you sound advice, clean workmanship, and consistency.
            </p>
            <p>
              Taaj Constructions Ltd. has made a name for itself in remodeling old buildings to new and tastefully done homes through its expertise in communication and professionalism.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
