import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Zap, Shield } from 'lucide-react';

export default function Difference() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Users,
      title: "Built for Real Users",
      description: "Grounded in data, not trends. Every design decision backed by user research and analytics."
    },
    {
      icon: Zap,
      title: "No Slider Syndrome",
      description: "Clean, fast interfaces that load instantly. No bloated sliders or unnecessary animations."
    },
    {
      icon: Shield,
      title: "You Own Everything",
      description: "Complete transparency. Full code ownership. No vendor lock-in. Your investment, your asset."
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-modern-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-display font-bold text-center text-gray-900 mb-16"
        >
          The CYVERA Difference
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team collaboration and strategy meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-secondary-purple rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-gray-900">Engineers, designers, strategists</span> — all under one roof, working as your extended team.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-secondary-purple rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-gray-900">No outsourcing, no templates, no vanishing post-launch.</span> We build custom solutions that scale with your business.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-secondary-purple rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-gray-900">Focused on relationships, not projects.</span> Your success is our success, and we're here for the long haul.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 card-modern shadow-lg hover:shadow-2xl transition-all"
            >
              <feature.icon className="w-12 h-12 text-secondary-purple mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
