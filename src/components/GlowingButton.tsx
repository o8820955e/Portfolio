import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface GlowingButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Base button styles
  let buttonClasses = 'relative font-medium rounded-full transition-all duration-300 flex items-center justify-center ';
  
  // Size variations
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };
  
  // Glow color based on variant
  let glowColor = 'rgba(59, 130, 246, 0.5)'; // Default blue glow
  
  // Variant styles
  switch (variant) {
    case 'primary':
      buttonClasses += 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg';
      glowColor = 'rgba(59, 130, 246, 0.5)'; // Blue glow
      break;
    case 'secondary':
      buttonClasses += 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg';
      glowColor = 'rgba(139, 92, 246, 0.5)'; // Purple glow
      break;
    case 'outline':
      buttonClasses += 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10';
      glowColor = 'rgba(59, 130, 246, 0.3)'; // Subtle blue glow
      break;
    case 'gradient':
      buttonClasses += 'bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white hover:brightness-110 shadow-lg';
      glowColor = 'rgba(139, 92, 246, 0.5)'; // Purple glow
      break;
    case 'glass':
      buttonClasses += 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20';
      glowColor = 'rgba(255, 255, 255, 0.3)'; // White glow
      break;
  }
  
  return (
    <motion.button
      className={`${buttonClasses} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.97 }}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 0 20px ${glowColor}`,
      }}
      initial={{ boxShadow: '0 0 0px rgba(59, 130, 246, 0)' }}
    >
      {/* Glow effect */}
      <motion.span
        className="absolute inset-0 rounded-full opacity-50"
        animate={{
          boxShadow: isHovered ? `0 0 20px ${glowColor}` : '0 0 0px rgba(59, 130, 246, 0)',
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center space-x-2 rtl:space-x-reverse">
        {icon && <span className="mr-2 rtl:ml-2 rtl:mr-0">{icon}</span>}
        {children}
      </span>
      
      {/* Sparkle effect for primary and gradient variants */}
      {(variant === 'primary' || variant === 'gradient') && isHovered && (
        <motion.span 
          className="absolute inset-0 overflow-hidden rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="absolute top-0 left-0 w-2 h-2 rounded-full bg-white animate-sparkle-1"></span>
          <span className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-white animate-sparkle-2"></span>
          <span className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-white animate-sparkle-3"></span>
        </motion.span>
      )}
    </motion.button>
  );
};

export default GlowingButton; 