import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import FuturisticCard from './FuturisticCard';

// Import icons from Lucide React
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Muhammad Abdullah",
    role: "مدير تقني",
    company: "شركة تقنية المستقبل",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "أحد أفضل المطورين الذين تعاملت معهم، ساعدني في بناء موقع إلكتروني متكامل وآمن لشركتنا. أنصح بالتعامل معه بشدة.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Al-Ahmad",
    role: "صاحبة متجر إلكتروني",
    company: "متجر الأناقة",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFhB1DwNxRIZg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728712998418?e=2147483647&v=beta&t=0-KzxJf1Q6MzeMie6D1RORDzapbPbCbm2y4qqA3GiAs",
    content: "قام بتطوير متجري الإلكتروني وإضافة ميزات متقدمة ساهمت في زيادة المبيعات بشكل ملحوظ. سرعة في الإنجاز ودقة في العمل.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ahmed Mahmoud",
    role: "مؤسس شركة ناشئة",
    company: "تطبيق روّاد",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    content: "ساعدنا في بناء تطبيق الموبايل الخاص بشركتنا الناشئة بمهارة عالية، كما قدم استشارات قيمة في جانب الأمن السيبراني.",
    rating: 4,
  },
  {
    id: 4,
    name: "Nora Al Salem",
    role: "مديرة تسويق",
    company: "شركة الإبداع الرقمي",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQHSp7i9v31lIg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516876025556?e=2147483647&v=beta&t=ScI7UOmnbjsr6vgEbuo3MDhqdpfxMw6-824R-CttNWw",
    content: "تعاونا معه في حملة تسويقية ناجحة، وقدم خدمات متميزة في تحسين محركات البحث وإدارة وسائل التواصل الاجتماعي.",
    rating: 5,
  },
  {
    id: 5,
    name: "فيصل العتيبي",
    role: "مدير أمن معلومات",
    company: "بنك الاستثمار",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "نفذ لنا اختبار اختراق شامل للأنظمة وقدم تقريراً مفصلاً عن الثغرات وكيفية معالجتها. احترافية عالية وخبرة واضحة.",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          آراء العملاء
        </motion.h2>
        
        <div className="max-w-md mx-auto">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="p-2">
                <FuturisticCard 
                  glowColor={testimonial.rating === 5 ? "purple" : "blue"}
                  className="p-0"
                >
                  <div className="bg-gradient-to-b from-gray-800/70 to-gray-900/70 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="relative mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/30"
                        />
                        <div className="absolute -top-1 -right-1 bg-gray-900 rounded-full p-1">
                          <Quote className="w-3 h-3 text-blue-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        <p className="text-gray-500 text-xs">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`} 
                          fill={i < testimonial.rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                </FuturisticCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default TestimonialsSection; 