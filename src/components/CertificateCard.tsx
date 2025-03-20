import React from 'react';
import { motion } from 'framer-motion';

interface CertificateCardProps {
  title: string;
  description: string;
  image?: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ title, description, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass p-6 rounded-xl h-full"
    >
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img src={image} alt={title} className="w-full h-40 object-cover" />
        </div>
      )}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default CertificateCard; 