import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Zap } from 'lucide-react';

const repairServices = [
  {
    title: "إصلاح الأجهزة",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      "إصلاح شاشات الهواتف الذكية",
      "استبدال البطاريات",
      "إصلاح مشاكل البرمجيات",
      "صيانة اللوحة الأم"
    ],
    color: "#F59E0B"
  },
  {
    title: "خدمات البرمجة",
    icon: <Zap className="w-6 h-6" />,
    items: [
      "تحديث نظام التشغيل",
      "حل مشاكل البرامج",
      "تحسين أداء الجهاز",
      "نسخ واسترجاع البيانات"
    ],
    color: "#3B82F6"
  }
];

const PhoneRepairSection: React.FC = () => {
  return (
    <div className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">خدمات صيانة الهواتف الذكية</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            نقدم خدمات احترافية لإصلاح وصيانة الهواتف الذكية مع ضمان الجودة
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {repairServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <div style={{ color: service.color }}>{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>

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
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />
                    <p className="text-gray-300">{item}</p>
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

export default PhoneRepairSection; 