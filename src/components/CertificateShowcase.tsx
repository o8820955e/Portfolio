import React from 'react';
import { motion } from 'framer-motion';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  color: string;
}

const CertificateCard: React.FC<Certificate> = ({ title, issuer, date, icon, color }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative p-6 rounded-xl overflow-hidden"
    >
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          background: `linear-gradient(135deg, ${color}, transparent)` 
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{issuer}</p>
        <p className="text-blue-400 text-sm">{date}</p>
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

const certificates = [
  {
    title: "Flutter Development Certificate",
    issuer: "Google",
    date: "2023",
    icon: "✅",
    color: "#60A5FA"
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
    icon: "✅",
    color: "#F87171"
  }
  // ... المزيد من الشهادات
];

const CertificateShowcase: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((cert, index) => (
        <CertificateCard key={index} {...cert} />
      ))}
    </div>
  );
};

export default CertificateShowcase; 