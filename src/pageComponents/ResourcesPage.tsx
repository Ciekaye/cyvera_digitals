import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, FileText, Lightbulb, ArrowRight, Sparkles } from 'lucide-react';

export default function ResourcesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogPosts = [
    {
      title: "5 Signs Your Website Needs a Redesign",
      excerpt: "Is your website still driving results? Here are the telltale signs it's time for a refresh.",
      category: "Blog",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "The Power of Consistent Branding Online",
      excerpt: "How a unified brand identity across platforms builds trust and drives customer loyalty.",
      category: "Blog",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Why Mobile-First Design Matters in 2026",
      excerpt: "Over 60% of web traffic comes from mobile. Here's how to design for it effectively.",
      category: "Blog",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const guides = [
    {
      title: "Startup Website Launch Checklist",
      description: "A step-by-step guide to launching a professional website for your startup.",
      icon: FileText,
    },
    {
      title: "Brand Identity Essentials",
      description: "Everything you need to know about building a strong visual brand from scratch.",
      icon: BookOpen,
    },
    {
      title: "SEO Basics for Small Businesses",
      description: "Practical tips to improve your search engine visibility without a big budget.",
      icon: FileText,
    },
  ];

  const caseInsights = [
    {
      title: "How We Increased Conversions by 340%",
      client: "EcoMarket",
      description: "A deep dive into how a full redesign and UX overhaul transformed an e-commerce brand.",
      icon: Lightbulb,
    },
    {
      title: "Building a Scalable SaaS Platform",
      client: "TechFlow Solutions",
      description: "From legacy system to modern architecture — the decisions that made the difference.",
      icon: Lightbulb,
    },
    {
      title: "Rebranding for Growth",
      client: "HealthFirst",
      description: "How a strategic rebrand helped a healthcare company expand into new markets.",
      icon: Lightbulb,
    },
  ];

  return (
    <div className="bg-modern-primary min-h-screen">
      {/* Hero */}
      <section ref={ref} className="pt-36 pb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <Sparkles size={16} className="text-secondary-purple" />
              <span className="text-sm font-semibold text-secondary-purple">Learn & Grow</span>
            </div>
            <h1 className="text-display text-gray-900 mb-6">
              Resources & <span className="text-gradient-purple">Insights</span>
            </h1>
            <p className="text-subheading max-w-2xl mx-auto" style={{ color: '#535252' }}>
              Explore our blog, guides, and case insights to learn how to build
              a stronger digital presence for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-gray-900 mb-10"
          >
            Blog
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group card-modern overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-secondary-purple uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-secondary-purple font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-10"
          >
            Guides
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-7 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-5">
                  <guide.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{guide.description}</p>
                <span className="inline-flex items-center gap-1.5 text-secondary-purple font-semibold text-sm">
                  Download Guide <ArrowRight size={14} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Insights */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-10"
          >
            Case Insights
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {caseInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-7 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mb-5">
                  <insight.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-semibold text-secondary-purple uppercase tracking-wider">{insight.client}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{insight.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{insight.description}</p>
                <span className="inline-flex items-center gap-1.5 text-secondary-purple font-semibold text-sm">
                  Read Case Study <ArrowRight size={14} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
