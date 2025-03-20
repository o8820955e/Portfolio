import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, Layout, Shield, Code, Smartphone, Map, Book, Coffee, Cloud } from 'lucide-react';

// المشروع الرئيسي
const mainProject = {
  title: "دليل رحاب - تطبيق Flutter",
  description: "تطبيق شامل يوفر دليلًا سياحيًا وخدمات محلية لسكان مدينة رحاب في الأردن.",
  image: "https://i.postimg.cc/kgZ1VtRs/63017022142.png",
  technologies: ["Flutter", "Firebase", "REST API", "Google Maps API"],
  liveUrl: "#",
  githubUrl: "#",
  color: "#54C5F8",
  features: [
    "خرائط تفاعلية لعرض المواقع السياحية والخدمات",
    "تصنيفات للأماكن تشمل المواقع التاريخية، المساجد، الأسواق، والمطاعم",
    "أخبار محلية لتحديث المستخدمين بأهم الأحداث في المدينة",
    "متجر إلكتروني لدعم التجار المحليين",
    "دمج الذكاء الاصطناعي لاقتراح الوجهات بناءً على اهتمامات المستخدمين"
  ]
};

// المشاريع الأخرى 
const otherProjects = [
  {
    title: "تطبيق إدارة التسجيل الجامعي",
    description: "يساعد الطلاب على حجز مقاعد في المواد الدراسية مع إشعارات فورية عند توفر أماكن شاغرة.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Flutter", "Firebase", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    color: "#4CAF50",
    category: "تطوير التطبيقات"
  },
  {
    title: "تطبيق طلب القهوة",
    description: "يتيح للمستخدمين اختيار عدد الأكواب مع حد أقصى وتنفيذ الطلب بسهولة.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Flutter", "Firebase", "Dart"],
    liveUrl: "#",
    githubUrl: "#",
    color: "#795548",
    category: "تطوير التطبيقات"
  },
  {
    title: "تطبيق الطقس الذكي",
    description: "يجلب بيانات الطقس باستخدام OpenWeather API ويعرضها بواجهة جذابة مع دعم للوضع الداكن.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Flutter", "OpenWeather API", "Dart"],
    liveUrl: "#",
    githubUrl: "#",
    color: "#2196F3",
    category: "تطوير التطبيقات"
  },
  {
    title: "نظام حماية متقدم",
    description: "نظام أمني متكامل لحماية البنية التحتية للشبكات من الهجمات الإلكترونية",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Python", "React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/user/security-system",
    color: "#F43F5E",
    category: "الأمن السيبراني"
  },
  {
    title: "تطبيق إدارة المشاريع",
    description: "منصة متكاملة لإدارة المشاريع وتتبع المهام وتنظيم فرق العمل",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    technologies: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/user/project-management",
    color: "#2DD4BF",
    category: "تطوير التطبيقات"
  },
  {
    title: "شرح جميع أجزاء Vulnerable Web Application",
    description: "مقطع على يوتيوب يشرح جميع أجزاء تطبيق ويب ضعيف الأمان.",
    image: "https://img.youtube.com/vi/9sT5G6lkVog/0.jpg",
    technologies: ["YouTube", "Cybersecurity"],
    liveUrl: "https://youtu.be/9sT5G6lkVog?si=FIc4vrW_0qfF1SVo",
    githubUrl: "#",
    color: "#FF0000",
    category: "الأمن السيبراني"
  },
];

const categories = [
  { id: "all", name: "جميع المشاريع", icon: <Code className="w-5 h-5" /> },
  { id: "الأمن السيبراني", name: "الأمن السيبراني", icon: <Shield className="w-5 h-5" /> },
  { id: "تطوير المواقع", name: "تطوير المواقع", icon: <Layout className="w-5 h-5" /> },
  { id: "تطوير التطبيقات", name: "تطوير التطبيقات", icon: <Smartphone className="w-5 h-5" /> }
];

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? otherProjects 
    : otherProjects.filter(project => project.category === selectedCategory);

  return (
    <motion.div 
      className="relative section-transition py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Project Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">المشاريع</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-10"></div>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-20 bg-gray-800/50 rounded-2xl overflow-hidden hover-glow animated-border"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3 text-blue-400">{mainProject.title}</h3>
              <p className="text-gray-300 mb-6">{mainProject.description}</p>
              
              <div className="space-y-3 mb-6">
                {mainProject.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2 rtl:space-x-reverse">
                    <div className="flex-shrink-0 mt-1">
                      <span className="block w-2 h-2 rounded-full bg-blue-500"></span>
                    </div>
                    <p className="text-gray-400 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {mainProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={mainProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>عرض المشروع</span>
                </a>
                <a 
                  href={mainProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>عرض الكود</span>
                </a>
              </div>
            </div>
            
            <div className="overflow-hidden">
              <img 
                src={mainProject.image} 
                alt={mainProject.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Other Projects Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">🚀 مشاريع أخرى</h3>
          
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-md transition-all ${
                  selectedCategory === category.id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  bounce: 0.3
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative hover-glow animated-border bg-gray-800/50 rounded-xl overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ 
                          backgroundColor: `${project.color}20`,
                          color: project.color 
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-2">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-blue-400 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">معاينة</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">عرض الكود</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection; 