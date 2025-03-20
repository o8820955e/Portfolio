import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Lock, Smartphone, Layout, Terminal, BrainCircuit, Network } from 'lucide-react';

const TechnicalSkillsSection: React.FC = () => {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'React.js', level: 92 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'SASS/SCSS', level: 85 },
        { name: 'Bootstrap', level: 90 },
        { name: 'Responsive Design', level: 95 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6 text-green-400" />,
      skills: [
        { name: 'PHP', level: 90 },
        { name: 'MySQL', level: 88 },
        { name: 'Node.js', level: 85 },
        { name: 'API Integration', level: 92 },
        { name: 'Laravel', level: 80 },
        { name: 'WordPress', level: 94 },
      ]
    },
    {
      title: 'Cybersecurity',
      icon: <Lock className="w-6 h-6 text-purple-400" />,
      skills: [
        { name: 'Penetration Testing', level: 95 },
        { name: 'Network Security', level: 90 },
        { name: 'Python', level: 92 },
        { name: 'Reverse Engineering', level: 85 },
        { name: 'Security Analysis', level: 88 },
        { name: 'Hardware Security', level: 80 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      skills: [
        { name: 'Flutter/Dart', level: 90 },
        { name: 'React Native', level: 85 },
        { name: 'Mobile UI/UX', level: 88 },
        { name: 'Mobile Security', level: 92 },
      ]
    },
    {
      title: 'Digital Marketing',
      icon: <Network className="w-6 h-6 text-yellow-400" />,
      skills: [
        { name: 'Facebook Ads', level: 95 },
        { name: 'Google Ads', level: 90 },
        { name: 'SEO', level: 90 },
        { name: 'Analytics', level: 85 },
        { name: 'Content Marketing', level: 88 },
      ]
    },
    {
      title: 'Game Development',
      icon: <BrainCircuit className="w-6 h-6 text-red-400" />,
      skills: [
        { name: 'Unity', level: 85 },
        { name: 'Game Design', level: 80 },
        { name: '3D Modeling', level: 75 },
        { name: 'Game UI/UX', level: 82 },
      ]
    },
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          المهارات التقنية
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gray-800/40 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all hover-glow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-900/80 rounded-xl flex items-center justify-center mr-4 border border-gray-700">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          duration: 0.8,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkillsSection; 