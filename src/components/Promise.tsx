import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MessageSquare, HeadphonesIcon, FolderOpen, Award, ArrowRight } from 'lucide-react';

export default function Promise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const promises = [
    {
      icon: Calendar,
      title: "Milestones & Timelines",
      description: "Clear roadmap with realistic deadlines. No surprises, no delays without communication."
    },
    {
      icon: MessageSquare,
      title: "Weekly Progress Updates",
      description: "Regular check-ins, demos, and reports. You're always in the loop on your project status."
    },
    {
      icon: HeadphonesIcon,
      title: "Post-Launch Support",
      description: "30 days of dedicated support included. We don't disappear after deployment."
    },
    {
      icon: FolderOpen,
      title: "Digital Handoff Kit",
      description: "Complete documentation, credentials, and training materials. Everything organized and explained."
    },
    {
      icon: Award,
      title: "100% Ownership",
      description: "All code, designs, and assets belong to you. No licensing fees, no lock-in, ever."
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-6 leading-tight"
        >
          We Don't Just Build —
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-center text-gradient-purple mb-16"
        >
          We Deliver Confidence
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <promise.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{promise.title}</h3>
              <p className="text-gray-600 leading-relaxed">{promise.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-primary animate-gradient"></div>
          <div className="relative z-10 p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Still wondering if we're the right fit?
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white text-primary-purple rounded-full text-lg font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              Book a Free 20-Min Strategy Session
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
