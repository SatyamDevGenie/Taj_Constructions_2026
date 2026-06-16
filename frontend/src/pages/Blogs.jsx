import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { blogs } from "../data/blogs";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Blogs() {
  return (
    <>
      <PageHero
        title="Our Blog"
        subtitle="Insights & Inspiration"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Blogs" },
        ]}
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />

      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="container-tight">
          <SectionHeading
            subtitle="Our Blogs"
            title="Insights, Tips & Inspiration for Your Home Projects"
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
            {blogs.map((blog) => (
              <motion.article
                key={blog.id}
                variants={fadeUp}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
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
        </div>
      </section>
    </>
  );
}
