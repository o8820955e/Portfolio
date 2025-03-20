import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users } from 'lucide-react';

const marketingServices = [
  {
    title: "التسويق الرقمي",
    icon: <Target className="w-8 h-8" />,
    description: "استراتيجيات تسويقية متكاملة لتحقيق أهداف عملك",
    items: [
      "إدارة حملات إعلانية على منصات التواصل الاجتماعي",
      "تحسين محركات البحث (SEO)",
      "تحليل البيانات وتحسين معدل التحويل",
      "إنشاء محتوى تسويقي جذاب"
    ],
    color: "#10B981"
  },
  {
    title: "إدارة وسائل التواصل",
    icon: <Users className="w-8 h-8" />,
    description: "بناء وتعزيز تواجدك على منصات التواصل الاجتماعي",
    items: [
      "إدارة حسابات التواصل الاجتماعي",
      "تصميم المحتوى البصري",
      "زيادة التفاعل والمتابعين",
      "تحليل أداء المنصات"
    ],
    color: "#6366F1"
  }
];

const MarketingSection: React.FC = () => {
  return (
    <div className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
        >
          خدمات التسويق الرقمي
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {marketingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}20`, color: service.color }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: service.color }} />
                        <p className="text-gray-300">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingSection; 