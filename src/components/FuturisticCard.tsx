import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

interface FuturisticCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

const defaultTiltOptions = {
  max: 15,
  scale: 1.05,
  speed: 1000,
  glare: true,
  "max-glare": 0.3,
};

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  title, 
  children, 
  className = '', 
  glowColor = 'blue',
  onClick 
}) => {
  const glowMap = {
    blue: 'from-blue-500/20 to-transparent',
    purple: 'from-purple-500/20 to-transparent',
    green: 'from-green-500/20 to-transparent',
    cyan: 'from-cyan-500/20 to-transparent',
    yellow: 'from-yellow-500/20 to-transparent',
    red: 'from-red-500/20 to-transparent',
  };

  const glow = glowMap[glowColor as keyof typeof glowMap] || glowMap.blue;

  return (
    <Tilt options={defaultTiltOptions} className="w-full h-full preserve-3d">
      <motion.div
        className={`relative p-6 backdrop-blur-sm bg-gray-900/60 border border-gray-800/80 rounded-xl overflow-hidden ${className}`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ 
          boxShadow: `0 0 25px 2px rgba(59, 130, 246, 0.3)`,
          borderColor: 'rgba(59, 130, 246, 0.5)' 
        }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
      >
        {/* Glow Effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${glow} blur-xl opacity-50 -z-10 group-hover:opacity-75 transition duration-300`}></div>
        
        {/* Card Content */}
        {title && (
          <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {title}
          </h3>
        )}
        {children}
        
        {/* Highlight effects */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-blue-500/10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 blur-2xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-500/10 blur-2xl rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      </motion.div>
    </Tilt>
  );
};

export default FuturisticCard; 