import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, BrainCircuit, Network, Terminal } from 'lucide-react';

const experiences = [
  {
    category: "تطوير التطبيقات والمواقع",
    icon: <Code className="w-6 h-6" />,
    items: [
      "تطوير تطبيقات الموبايل باستخدام Flutter",
      "إنشاء وتطوير مواقع ويب تفاعلية باستخدام React.js, PHP, MySQL",
      "تحسين أداء المواقع الإلكترونية وزيادة سرعة التحميل",
      "بناء صفحات هبوط احترافية لزيادة تفاعل المستخدمين",
      "تقديم دعم فني وتدريب للعملاء على إدارة مواقعهم"
    ]
  },
  {
    category: "الأمن السيبراني واختبار الاختراق",
    icon: <Shield className="w-6 h-6" />,
    items: [
      "مختبر اختراق معتمد، وأقدم دورات تدريبية في الأمن السيبراني",
      "خبير في تطوير أدوات أمنية باستخدام Python",
      "خبرة واسعة في الهندسة العكسية وتحليل البرمجيات",
      "تصميم أجهزة وأدوات هاردوير للأمن السيبراني",
      "خبرة في إدارة RDP والسيرفرات"
    ]
  },
  {
    category: "تصميم وتطوير الألعاب",
    icon: <BrainCircuit className="w-6 h-6" />,
    items: [
      "أطور الألعاب على أكثر من محرك ألعاب",
      "حاصل على شهادات في مجال تصميم وتطوير الألعاب",
      "خبرة في تصميم واجهات المستخدم والتجربة التفاعلية",
      "تطوير ألعاب ثلاثية الأبعاد وألعاب الموبايل"
    ]
  },
  {
    category: "التسويق الرقمي وإدارة المواقع",
    icon: <Network className="w-6 h-6" />,
    items: [
      "إدارة الإعلانات الممولة على Facebook, Google, Instagram, TikTok",
      "تحسين محركات البحث (SEO) وزيادة التفاعل مع المحتوى الرقمي",
      "إدارة مواقع ووردبريس وتطوير إضافات مخصصة لها",
      "تحليل البيانات وإنشاء تقارير أداء للحملات التسويقية"
    ]
  },
  {
    category: "إصلاح الهواتف والبرمجيات",
    icon: <Terminal className="w-6 h-6" />,
    items: [
      "فني محترف في السوفت وير وحاصل على شهادات تقنية معتمدة",
      "مدرب معتمد في إصلاح الهواتف وصيانة السوفت وير",
      "إصلاح مشاكل البرمجيات المعقدة وتحسين أداء الأجهزة",
      "استعادة البيانات وإعادة تهيئة الأجهزة"
    ]
  }
];

// Timeline data for professional journey
const timelineData = [
  {
    year: "2025 - الآن",
    title: " باحث في الأمن السيبراني ومستقل في عدة مجالات تقنية",
    description: "تقديم خدمات أمن المعلومات واختبار الاختراق العمل الحر في تطوير تطبيقات Flutter، تصميم UI/UX، تطوير الويب، وإنشاء المحتوى التقنيت"
  },

  {
    year: "2024 - 2024",
    title: "مطور تطبيقات موبايل",
    description: "تطوير تطبيقات Flutter وخدمات الواجهة الخلفية للعملاء"
  },
  {
    year: "2021 - 2022",
    title: "صانع محتوى تقني ومسوق رقمي",
    description: "إدارة حملات إعلانية ومشاريع تسويقية للشركات المحلية والإقليمية"
  },
  {
    year: "2021 - 2020",
    title: "دراست الامن السيبراني وتطوير المهارات التقنيه",
    description: "درست أمان الحاسوب والشبكات، وشاركت في مسابقات لاختبار الاختراق"
  },
  {
    year: "2020 - 2019",
    title: "إصلاح الهواتف المحمولة وحب التكنولوجيا",
    description: "تقديم خدمات إصلاح الهواتف وتطوير البرمجيات مع شغف بالتكنولوجيا والتقنيات الحديثة"
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            الخبرات والمشاريع
          </motion.h2>

          {/* Professional Timeline */}
          <div className="mb-24">
            <h3 className="text-2xl font-bold mb-8 text-center">المسار المهني</h3>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {timelineData.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative flex items-center"
                  >
                    <div className={`w-1/2 pr-8 text-right ${index % 2 === 1 ? 'order-1' : 'order-2'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.2 }}
                        className="bg-gray-800/70 hover-glow rounded-xl p-4 border border-gray-700"
                      >
                        <h4 className="text-xl font-bold text-blue-400">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.year}</p>
                        <p className="mt-2">{item.description}</p>
                      </motion.div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.1 }}
                        className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center z-10"
                      >
                        <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
                      </motion.div>
                    </div>
                    
                    <div className={`w-1/2 pl-8 ${index % 2 === 1 ? 'order-2' : 'order-1'}`}></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection; 