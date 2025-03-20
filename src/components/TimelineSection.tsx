import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative flex items-start gap-8 pb-12"
    >
      {/* Line */}
      <div className="absolute top-0 left-6 bottom-0 w-px bg-blue-500/20" />
      
      {/* Icon */}
      <div className="relative z-10">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"
        >
          {icon}
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="text-sm text-blue-400 mb-1">{year}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem; 