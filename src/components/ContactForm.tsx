import React, { useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Send, Sparkles } from 'lucide-react';

const tiltOptions = {
  max: 10,
  scale: 1.03,
  speed: 1000,
  glare: true,
  "max-glare": 0.2,
  perspective: 1000,
  reverse: true,
};

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(formRef, { once: false, amount: 0.3 });
  const submitProgress = useMotionValue(0);
  const submitOpacity = useTransform(submitProgress, [0, 1], [1, 0]);
  const successOpacity = useTransform(submitProgress, [0, 1], [0, 1]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with animation
    for (let i = 0; i < 100; i++) {
      await new Promise(resolve => setTimeout(resolve, 10));
      submitProgress.set(i / 100);
    }
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    submitProgress.set(1);
    
    // Reset after showing success
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
      submitProgress.set(0);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    focus: { scale: 1.01, boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' },
  };

  return (
    <Tilt options={tiltOptions} className="perspective-1000">
      <motion.form
        ref={formRef}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="relative backdrop-blur-lg bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-xl border border-gray-700/50 shadow-xl overflow-hidden"
      >
        {/* Animated background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-0 -right-2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-0 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Form Content */}
        <div className="relative space-y-6 z-10">
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              ارسل رسالتك
            </h3>
            <p className="text-gray-400 text-sm mt-1">سأرد عليك في أقرب وقت ممكن</p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            variants={inputVariants}
          >
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
              الاسم
            </label>
            <motion.input
              whileFocus="focus"
              variants={inputVariants}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting || isSubmitted}
              className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700/70 rounded-lg 
                        focus:outline-none focus:border-blue-500 transition-all 
                        placeholder-gray-500 disabled:opacity-70 backdrop-blur-sm"
              placeholder="أدخل اسمك"
            />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            variants={inputVariants}
          >
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
              البريد الإلكتروني
            </label>
            <motion.input
              whileFocus="focus"
              variants={inputVariants}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting || isSubmitted}
              className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700/70 rounded-lg 
                        focus:outline-none focus:border-blue-500 transition-all
                        placeholder-gray-500 disabled:opacity-70 backdrop-blur-sm"
              placeholder="أدخل بريدك الإلكتروني"
            />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            variants={inputVariants}
          >
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
              الرسالة
            </label>
            <motion.textarea
              whileFocus="focus"
              variants={inputVariants}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting || isSubmitted}
              rows={4}
              className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700/70 rounded-lg 
                        focus:outline-none focus:border-blue-500 transition-all resize-none
                        placeholder-gray-500 disabled:opacity-70 backdrop-blur-sm"
              placeholder="اكتب رسالتك هنا"
            />
          </motion.div>

          <div className="relative h-12">
            {/* Submit Button */}
            <motion.button
              style={{ opacity: submitOpacity }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="absolute inset-0 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 
                      text-white rounded-lg transition-all flex items-center justify-center
                      disabled:opacity-70 font-medium"
            >
              <motion.span
                animate={{ x: isSubmitting ? [0, -5, 0] : 0 }}
                transition={{ repeat: isSubmitting ? Infinity : 0, duration: 0.3 }}
                className="flex items-center"
              >
                <span className="mr-2">إرسال الرسالة</span>
                <Send size={16} />
              </motion.span>
            </motion.button>

            {/* Success Message */}
            <motion.div
              style={{ opacity: successOpacity }}
              className="absolute inset-0 w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600
                      text-white rounded-lg flex items-center justify-center"
            >
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <span className="mr-2">تم الإرسال بنجاح</span>
                <Sparkles size={16} />
              </motion.span>
            </motion.div>
          </div>
        </div>
      </motion.form>
    </Tilt>
  );
};

export default ContactForm; 