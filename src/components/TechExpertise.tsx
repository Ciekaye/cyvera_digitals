import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Smartphone, Cloud, Database, Zap } from 'lucide-react';

export default function TechExpertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });



  const techCategories = [
    { 
      category: 'Frontend Development', 
      technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      icon: Code,
      color: 'from-blue-500 to-purple-600'
    },
    { 
      category: 'Backend Development', 
      technologies: ['Node.js', 'Laravel', 'Python', 'Express', 'FastAPI'],
      icon: Database,
      color: 'from-green-500 to-teal-600'
    },
    { 
      category: 'Mobile Development', 
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
      icon: Smartphone,
      color: 'from-pink-500 to-rose-600'
    },
    { 
      category: 'Design & UX', 
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Framer'],
      icon: Palette,
      color: 'from-orange-500 to-red-600'
    },
    { 
      category: 'Cloud & DevOps', 
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600'
    },
    { 
      category: 'Performance', 
      technologies: ['Redis', 'CDN', 'Optimization', 'Caching', 'Monitoring'],
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-display font-bold text-center text-white mb-6"
        >
          The Tools We Master
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-center text-white/80 mb-16"
        >
          So You Don't Have To
        </motion.p>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {/* Icon with Gradient Background */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 mb-6 transform hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-full h-full text-white" />
              </div>
              
              {/* Category Title */}
              <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
              
              {/* Animated Technology List */}
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.6 + index * 0.1 + techIndex * 0.05 
                    }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-white transition-colors duration-200"></div>
                    <span className="text-white/80 group-hover:text-white transition-colors duration-200 font-medium">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
