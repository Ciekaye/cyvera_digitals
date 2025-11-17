import { motion } from 'framer-motion';
import logo from '../assets/logo/logo.png';

export default function LogoLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white h-screen w-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <motion.img
          src={logo}
          alt="Cyvera Digitals logo"
          className="h-24 w-auto"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
        <motion.div
          className="h-1 w-32 rounded-full bg-gray-200 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full w-1/2 bg-gradient-to-r from-purple-600 to-purple-400"
            animate={{ x: ['-50%', '150%'] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
