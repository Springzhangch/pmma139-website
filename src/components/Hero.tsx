import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      const width = window.innerWidth;
      const heroElement = heroRef.current;
      if (heroElement) {
        if (width < 768) {
          heroElement.style.minHeight = '80vh';
        } else {
          heroElement.style.minHeight = '90vh';
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={heroRef} className="relative flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Acrylic%20product%20manufacturing%20process%20with%20modern%20machinery%20and%20high%20quality%20materials&sign=11250a7651a91ce54f84692f5a996bf9" 
          alt="亚克力产品制造工艺" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: isVisible ? 0 : 30 
          }}
          transition={{ 
            duration: 0.8,
            delay: 0.2
          }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            亚克力产品<br />
            <span className="text-blue-600 dark:text-blue-400">定制专家</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            香港粤丰专注于高品质亚克力产品定制，为您提供从设计到生产的一站式服务
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#products" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover-scale"
            >
              查看产品
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-full transition-all duration-300 hover:shadow-md hover-scale"
            >
              联系我们
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 0.7 : 0 }}
          transition={{ 
            duration: 2,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#products" className="text-gray-500 dark:text-gray-400">
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </motion.div>
      </div>
    </div>
  );
}