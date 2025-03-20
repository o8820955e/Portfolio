import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: number; // 0 to 100
  icon?: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass p-4 rounded-lg"
    >
      <div className="flex items-center gap-3 mb-2">
        {icon && <div className="text-blue-400">{icon}</div>}
        <h4 className="font-semibold">{name}</h4>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-blue-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default SkillCard; 