import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Youtube,
  Mail,
  Shield,
  Code,
  Smartphone,
  Target,
  Menu,
  X,
  BrainCircuit,
  Database,
  Layout,
  Terminal,
  Network,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ServiceCard from './components/ServiceCard';
import CertificateCard from './components/CertificateCard';
import SkillCard from './components/SkillCard';
import ContactForm from './components/ContactForm';
import LanguageSelector from './components/LanguageSelector';
import ParallaxBackground from './components/ParallaxBackground';
import FuturisticCard from './components/FuturisticCard';
import AnimatedText from './components/AnimatedText';
import GlowingButton from './components/GlowingButton';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ProjectFilters from './components/ProjectFilters';
import PhoneRepairSection from './components/PhoneRepairSection';
import MarketingSection from './components/MarketingSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import TechnicalSkillsSection from './components/TechnicalSkillsSection';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'ar' | 'en' | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSelect = (lang: 'ar' | 'en') => {
    setSelectedLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const skills = [
    { name: 'Front-End Development', level: 90, icon: <Layout /> },
    { name: 'Back-End Development', level: 85, icon: <Terminal /> },
    { name: 'Cybersecurity', level: 95, icon: <Shield /> },
    { name: 'Digital Marketing', level: 80, icon: <Target /> },
    { name: 'Mobile Development', level: 85, icon: <Smartphone /> },
    { name: 'Database Management', level: 80, icon: <Database /> },
    { name: 'Network Security', level: 90, icon: <Network /> },
    { name: 'AI & Machine Learning', level: 75, icon: <BrainCircuit /> },
  ];

  const projects = [
    {
      title: 'نظام حماية متقدم',
      description: 'نظام أمني متكامل لحماية البنية التحتية للشبكات',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
      technologies: ['Python', 'React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'تطبيق إدارة المشاريع',
      description: 'منصة متكاملة لإدارة المشاريع وتتبع المهام',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  // Get unique technologies from projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  // Filter projects based on selected technology
  const filteredProjects = selectedTech
    ? projects.filter(project => project.technologies.includes(selectedTech))
    : projects;

  return (
    <>
      <ParallaxBackground />
      <ScrollProgress />
      <ScrollToTop />
      
      <AnimatePresence>
        {!selectedLanguage && (
          <LanguageSelector onSelectLanguage={handleLanguageSelect} />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedLanguage ? 1 : 0 }}
        className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      >
        {/* Navbar */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/80 backdrop-blur-lg' : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-bold"
              >
                عمر الشديفات
              </motion.div>
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>

              {/* Desktop Menu */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex space-x-8"
              >
                <a href="#skills" className="hover:text-blue-400 transition-colors">المهارات</a>
                <a href="#services" className="hover:text-blue-400 transition-colors">خدماتي</a>
                <a href="#projects" className="hover:text-blue-400 transition-colors">المشاريع</a>
                <a href="#certificates" className="hover:text-blue-400 transition-colors">الشهادات</a>
                <a href="#booking" className="hover:text-blue-400 transition-colors">الحجز</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">تواصل معي</a>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-gray-900/95 backdrop-blur-lg"
              >
                <div className="px-4 py-4 space-y-4">
                  <a href="#skills" className="block hover:text-blue-400 transition-colors">المهارات</a>
                  <a href="#services" className="block hover:text-blue-400 transition-colors">خدماتي</a>
                  <a href="#projects" className="block hover:text-blue-400 transition-colors">المشاريع</a>
                  <a href="#certificates" className="block hover:text-blue-400 transition-colors">الشهادات</a>
                  <a href="#booking" className="block hover:text-blue-400 transition-colors">الحجز</a>
                  <a href="#contact" className="block hover:text-blue-400 transition-colors">تواصل معي</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section with enhanced animations */}
        <header className="min-h-screen relative overflow-hidden">
          <div className="container mx-auto px-4 h-screen flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedText
                  text="عمر الشديفات"
                  className="text-5xl md:text-7xl font-bold mb-6"
                />
                <AnimatedText
                  text="مطور برمجيات | خبير أمن سيبراني | مسوق رقمي"
                  className="text-xl text-gray-300 mb-4"
                  delay={0.5}
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-gray-400 mb-8 leading-relaxed"
                >
                  مطور برمجيات، باحث في الأمن السيبراني، وصانع محتوى على يوتيوب حاصل على درع اليوتيوب. أعمل في مجالات متعددة تشمل تطوير التطبيقات، تصميم الألعاب، التسويق الرقمي، واختبار الاختراق.
                </motion.p>
                <div className="flex gap-4">
                  <GlowingButton onClick={() => {}}>
                    تواصل معي
                  </GlowingButton>
                  <GlowingButton variant="secondary" onClick={() => {}}>
                    مشاريعي
                  </GlowingButton>
                </div>
              </div>

              {/* Profile Image with Effects */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex justify-center items-center relative"
              >
                {/* Futuristic background effects */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-96 h-96 rounded-full bg-blue-500/10 blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                
                {/* Glowing rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-80 h-80 border border-blue-400/20 rounded-full"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.div
                    className="absolute w-72 h-72 border border-blue-400/20 rounded-full"
                    animate={{
                      rotate: -360,
                      scale: [1, 1.15, 1]
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>

                {/* Main image container */}
                <div className="relative w-80 h-96 z-10">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                  
                  <motion.img
                    src="https://i.postimg.cc/XYZm9JxX/2064511567.png"
                    alt="Omar Al-Shdifat"
                    className="w-full h-full object-contain relative z-10"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut"
                    }}
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.2))"
                    }}
                  />

                  {/* Floating particles */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`
                        }}
                        animate={{
                          y: [-10, 10],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Glowing effect */}
                  <motion.div
                    className="absolute -inset-4 bg-blue-500/5 blur-2xl rounded-full"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Experience Section */}
        <ExperienceSection />

        {/* Technical Skills Section */}
        <section id="skills">
          <TechnicalSkillsSection />
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              خدماتي الاحترافية
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Service 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-800/40 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover-glow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">تطوير التطبيقات والمواقع</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  خدمات تطوير مواقع الويب وتطبيقات الهاتف المحمول بأحدث التقنيات وأفضل الممارسات.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-blue-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">تطوير تطبيقات الموبايل باستخدام Flutter</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-blue-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">إنشاء مواقع ويب تفاعلية باستخدام React.js</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-blue-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">تحسين أداء المواقع الإلكترونية وسرعة التحميل</span>
                  </li>
                </ul>
                <a href="#booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                  >
                    احجز الخدمة الآن
                  </motion.button>
                </a>
              </motion.div>
              
              {/* Service 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800/40 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover-glow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">الأمن السيبراني والهندسة العكسية</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  خدمات متخصصة في حماية البنية التحتية للشبكات واختبار الاختراق وتحليل البرمجيات.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">اختبار اختراق أخلاقي وتحديد الثغرات الأمنية</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">تطوير أدوات أمنية باستخدام Python</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">تحليل البرمجيات الخبيثة والهندسة العكسية</span>
                  </li>
                </ul>
                <a href="#booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300"
                  >
                    احجز الخدمة الآن
                  </motion.button>
                </a>
              </motion.div>
              
              {/* Service 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gray-800/40 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover-glow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">التسويق الرقمي وإدارة المواقع</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  خدمات إدارة الحملات التسويقية وتحسين محركات البحث وزيادة التفاعل مع المحتوى.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">إدارة الإعلانات على Facebook و Google</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">تحسين محركات البحث (SEO) وزيادة الزيارات</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">إدارة مواقع ووردبريس وتطوير إضافات مخصصة</span>
                  </li>
                </ul>
                <a href="#booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
                  >
                    احجز الخدمة الآن
                  </motion.button>
                </a>
              </motion.div>
              
              {/* Service 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gray-800/40 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover-glow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center mr-4">
                    <Layout className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">تصميم وتطوير الويب</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  خدمات تصميم وتطوير مواقع ويب متجاوبة باستخدام أحدث التقنيات والمعايير.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-yellow-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">تصميم واجهات مستخدم جذابة وسهلة الاستخدام</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-yellow-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">بناء مواقع احترافية متوافقة مع جميع الأجهزة</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-yellow-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">تطوير منصات إلكترونية متكاملة ولوحات تحكم</span>
                  </li>
                </ul>
                <a href="#booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
                  >
                    احجز الخدمة الآن
                  </motion.button>
                </a>
              </motion.div>
              
              {/* Service 5 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gray-800/40 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover-glow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mr-4">
                    <Smartphone className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">إصلاح الهواتف والبرمجيات</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  خدمات إصلاح مشاكل البرمجيات وصيانة الأجهزة وتحسين أدائها.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-red-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">إصلاح مشاكل البرمجيات والتحديثات</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-red-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">استعادة البيانات المفقودة من الأجهزة</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-red-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">تدريب على صيانة الأجهزة وإصلاحها</span>
                  </li>
                </ul>
                <a href="#booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300"
                  >
                    احجز الخدمة الآن
                  </motion.button>
                </a>
              </motion.div>
              
              {/* Service 6 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-gray-800/40 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover-glow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
                    <Network className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">خدمات الشبكات والسيرفرات</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  خدمات إدارة الشبكات وتأمينها وإعداد السيرفرات وتحسين أدائها.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-blue-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">إعداد وتأمين شبكات الشركات والمؤسسات</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-blue-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">إدارة السيرفرات وخدمات الاستضافة</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-blue-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-400">تكوين أنظمة حماية متقدمة للبنية التحتية</span>
                  </li>
                </ul>
                <a href="#booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                  >
                    احجز الخدمة الآن
                  </motion.button>
                </a>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-center mt-16"
            >
              <a href="#booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  احجز استشارة مجانية الآن
                </motion.button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              المشاريع
            </motion.h2>
            
            <ProjectsSection />
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              الشهادات
            </motion.h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover-glow"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400">شهادات البرمجة والتطوير</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="min-w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-400 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">Flutter Development Certificate</p>
                        <p className="text-sm text-gray-400">تطوير تطبيقات Flutter من الصفر إلى الاحتراف</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="min-w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-400 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">WordPress Development</p>
                        <p className="text-sm text-gray-400">تطوير وإدارة مواقع ووردبريس</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="min-w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-400 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">PHP, MySQL, JavaScript, React</p>
                        <p className="text-sm text-gray-400">تطوير مواقع ويب تفاعلية باستخدام تقنيات حديثة</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover-glow"
                >
                  <h3 className="text-xl font-bold mb-4 text-purple-400">شهادات الأمن السيبراني</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="min-w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-purple-400 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">Certified Ethical Hacker (CEH)</p>
                        <p className="text-sm text-gray-400">شهادة في اختبار الاختراق والأمن السيبراني</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="min-w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-purple-400 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">Cybersecurity Essentials - Cisco</p>
                        <p className="text-sm text-gray-400">مقدمة في الأمن السيبراني وأمان الشبكات</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="min-w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-purple-400 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">Reverse Engineering & Malware Analysis</p>
                        <p className="text-sm text-gray-400">تحليل التطبيقات وهندسة البرمجيات العكسية</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover-glow"
                >
                  <h3 className="text-xl font-bold mb-4 text-green-400">شهادات الشبكات والبنية التحتية</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="min-w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-400 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">CCNA (Cisco Certified Network Associate)</p>
                        <p className="text-sm text-gray-400">إدارة الشبكات والبنية التحتية</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="min-w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-400 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">Google IT Support Certificate</p>
                        <p className="text-sm text-gray-400">أساسيات تكنولوجيا المعلومات وإدارة الأنظمة</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover-glow"
                >
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">شهادات أخرى</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="min-w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">ICDL Advanced</p>
                        <p className="text-sm text-gray-400">المهارات المتقدمة في استخدام الكمبيوتر</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="min-w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">تصميم وتطوير الألعاب</p>
                        <p className="text-sm text-gray-400">شهادة في مجال تصميم وتطوير الألعاب</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Booking Section */}
        <section id="booking" className="py-16">
          <BookingSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-900/30 opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10"></div>
          
          <motion.div 
            className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 0],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div 
            className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -180, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              >
                تواصل معي
              </motion.h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                يمكنك التواصل معي عبر النموذج أدناه أو من خلال وسائل التواصل الاجتماعي
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="backdrop-blur-lg bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-xl border border-gray-700/50 shadow-xl"
                >
                  <h3 className="text-xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 text-right">
                    معلومات التواصل
                  </h3>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-center justify-end gap-4 group"
                      whileHover={{ x: -5 }}
                    >
                      <div className="flex-1">
                        <p className="text-gray-300 text-right">c7ybers7ecurity@gmail.com
                        </p>
                        <p className="text-gray-500 text-xs text-right">البريد الإلكتروني</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center
                                  group-hover:bg-blue-500/20 transition-all">
                        <Mail className="text-blue-400 w-5 h-5" />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center justify-end gap-4 group"
                      whileHover={{ x: -5 }}
                    >
                      <div className="flex-1">
                        <p className="text-gray-300 text-right">omar-alshdifate</p>
                        <p className="text-gray-500 text-xs text-right">GitHub</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gray-700/30 flex items-center justify-center
                                  group-hover:bg-gray-700/50 transition-all">
                        <Github className="text-gray-300 w-5 h-5" />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center justify-end gap-4 group"
                      whileHover={{ x: -5 }}
                    >
                      <div className="flex-1">
                        <p className="text-gray-300 text-right">omar-alshdifat</p>
                        <p className="text-gray-500 text-xs text-right">LinkedIn</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center
                                  group-hover:bg-blue-600/30 transition-all">
                        <Linkedin className="text-blue-400 w-5 h-5" />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center justify-end gap-4 group"
                      whileHover={{ x: -5 }}
                    >
                      <div className="flex-1">
                        <p className="text-gray-300 text-right">Cyberco</p>
                        <p className="text-gray-500 text-xs text-right">YouTube</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center
                                  group-hover:bg-red-500/30 transition-all">
                        <Youtube className="text-red-400 w-5 h-5" />
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="mt-12 p-4 border border-gray-700/50 rounded-lg bg-gray-800/30 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="text-sm text-gray-400 text-right">
                      يمكنك أيضًا متابعتي على منصات التواصل الاجتماعي للاطلاع على آخر المشاريع والأخبار
                    </p>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-400">
              <p>© {new Date().getFullYear()} عمر الشديفات. جميع الحقوق محفوظة</p>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
}

export default App;