import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import { getBlogBySlug, blogs } from "../data/blogs";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-brand-cream">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-brand-black mb-4">Blog Not Found</h1>
          <Button to="/blogs" variant="primary">Back to Blogs</Button>
        </div>
      </div>
    );
  }

  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={blog.title}
        subtitle={blog.category}
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Blogs", path: "/blogs" },
          { label: blog.title },
        ]}
        image={blog.image}
      />

      <article className="py-20 sm:py-28 bg-brand-cream">
        <div className="container-tight max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <time className="text-sm text-brand-gold font-body font-semibold uppercase tracking-wider">
                {blog.date}
              </time>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="text-sm text-gray-500 font-body">{blog.category}</span>
            </div>

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 sm:h-96 object-cover rounded-sm mb-10"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 font-body leading-relaxed mb-6 font-medium">
                {blog.excerpt}
              </p>

              <div className="space-y-6 text-gray-600 font-body leading-relaxed">
                <p>
                  When planning a home improvement project in London, understanding the process, timelines, and costs involved is essential for making informed decisions. At Taaj Constructions, we believe in transparency and helping homeowners navigate every step of their renovation journey.
                </p>
                <p>
                  London&apos;s diverse housing stock — from Victorian terraces to modern apartments — presents unique challenges and opportunities. Our experienced team has worked across every borough, delivering projects that respect the character of each property while introducing modern comforts and efficiencies.
                </p>
                <h2 className="font-display text-2xl font-bold text-brand-black mt-10 mb-4">
                  Key Considerations for Your Project
                </h2>
                <p>
                  Before embarking on any home improvement project, consider your budget, timeline, and the impact on your daily life. A well-planned project with clear communication between you and your builder will save time, money, and stress in the long run.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Obtain multiple detailed quotes from reputable builders</li>
                  <li>Check references and view completed projects</li>
                  <li>Understand planning permission requirements</li>
                  <li>Plan for contingencies in your budget (typically 10-15%)</li>
                  <li>Establish clear communication channels from day one</li>
                </ul>
                <p>
                  Whether you&apos;re considering a kitchen renovation, house extension, or full property refurbishment, the team at Taaj Constructions is here to guide you through every stage. Contact us for a free, no-obligation consultation.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-brand-black rounded-sm text-center">
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/60 font-body mb-6">
                Get expert advice and a free quote from our experienced team.
              </p>
              <Button to="/contact" variant="primary" size="md">
                Contact Us Today
              </Button>
            </div>
          </motion.div>
        </div>
      </article>

      <section className="py-16 bg-white">
        <div className="container-tight">
          <h3 className="font-display text-2xl font-bold text-brand-black mb-8">Related Articles</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((b) => (
              <Link
                key={b.slug}
                to={`/blogs/${b.slug}`}
                className="group p-6 bg-brand-cream rounded-sm hover:shadow-lg transition-shadow"
              >
                <time className="text-xs text-gray-400 font-body">{b.date}</time>
                <h4 className="font-display font-bold text-brand-black mt-2 group-hover:text-brand-gold transition-colors line-clamp-2">
                  {b.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
