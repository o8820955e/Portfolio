import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFiltersProps {
  technologies: string[];
  selectedTech: string | null;
  onSelectTech: (tech: string | null) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  technologies,
  selectedTech,
  onSelectTech,
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelectTech(null)}
        className={`px-4 py-2 rounded-full ${
          !selectedTech
            ? 'bg-blue-500 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
      >
        الكل
      </motion.button>
      {technologies.map((tech) => (
        <motion.button
          key={tech}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectTech(tech)}
          className={`px-4 py-2 rounded-full ${
            selectedTech === tech
              ? 'bg-blue-500 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {tech}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilters; 