import React from 'react';
import { motion } from 'framer-motion';

interface SkillItemProps {
  icon: React.ReactNode;
  name: string;
  level: number;
  color: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, name, level, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500/5 rounded-xl" />
      
      <div className="relative z-10">
        <div className="text-2xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillsGrid: React.FC = () => {
  const skills = [
    {
      icon: "💻",
      name: "Front-End Development",
      level: 95,
      color: "#60A5FA",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: "⚙️",
      name: "Back-End Development",
      level: 90,
      color: "#34D399",
      technologies: ["Node.js", "PHP", "MySQL"]
    },
    {
      icon: "🔒",
      name: "Cybersecurity",
      level: 95,
      color: "#F87171",
      technologies: ["Penetration Testing", "Network Security", "Malware Analysis"]
    }
    // ... المزيد من المهارات
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  );
};

export default SkillsGrid; 