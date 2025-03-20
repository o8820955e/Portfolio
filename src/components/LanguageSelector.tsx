import React from 'react';
import { motion } from 'framer-motion';

interface LanguageSelectorProps {
  onSelectLanguage: (lang: 'ar' | 'en') => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelectLanguage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),rgba(14,165,233,0)_50%)]" />
        </motion.div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white text-center"
        >
          اختر لغتك المفضلة
          <br />
          <span className="text-blue-400">Choose Your Language</span>
        </motion.h1>

        <div className="flex gap-8">
          {/* Arabic Option */}
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)"
            }}
            onClick={() => onSelectLanguage('ar')}
            className="group relative w-64 h-64 bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-blue-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:opacity-75 transition-opacity" />
            <motion.div
              className="relative h-full flex flex-col items-center justify-center gap-4"
              whileHover={{ y: -5 }}
            >
              <span className="text-6xl">🌙</span>
              <h2 className="text-3xl font-bold text-white">العربية</h2>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>

          {/* English Option */}
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)"
            }}
            onClick={() => onSelectLanguage('en')}
            className="group relative w-64 h-64 bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-blue-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:opacity-75 transition-opacity" />
            <motion.div
              className="relative h-full flex flex-col items-center justify-center gap-4"
              whileHover={{ y: -5 }}
            >
              <span className="text-6xl">🌟</span>
              <h2 className="text-3xl font-bold text-white">English</h2>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LanguageSelector; 