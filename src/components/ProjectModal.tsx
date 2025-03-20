import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Github, Share2 } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    images: string[];
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                     md:w-4/5 md:max-w-4xl md:h-auto max-h-[90vh] bg-gray-900 rounded-2xl z-50 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="h-full overflow-y-auto p-6">
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              
              {/* Image Gallery */}
              <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                <motion.div
                  className="flex"
                  drag="x"
                  dragConstraints={{ right: 0, left: -((project.images.length - 1) * 100) }}
                >
                  {project.images.map((image, index) => (
                    <motion.img
                      key={index}
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-64 object-cover shrink-0"
                      whileHover={{ scale: 1.05 }}
                    />
                  ))}
                </motion.div>
              </div>

              <p className="text-gray-300 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    <Globe className="w-5 h-5" />
                    معاينة المشروع
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                  >
                    <Github className="w-5 h-5" />
                    شيفرة المشروع
                  </a>
                )}
                <button
                  onClick={() => {
                    navigator.share({
                      title: project.title,
                      text: project.description,
                      url: project.liveUrl,
                    }).catch(console.error);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                >
                  <Share2 className="w-5 h-5" />
                  مشاركة
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal; 