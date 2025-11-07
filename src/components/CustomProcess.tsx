import { useEffect, useState } from 'react';
import { processSteps, ProcessStep } from '../mocks/process';

export default function CustomProcess() {
  // 简化动画逻辑，直接显示所有步骤，提高稳定性
  const [visibleSteps] = useState<ProcessStep[]>(processSteps);
  const [visible] = useState(true);

  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">定制流程</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            简单六步，打造专属于您的亚克力产品
          </p>
        </div>
        
        <div className="relative">
          {/* 连接线 - 桌面版 */}
          <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-0.5 bg-blue-100 dark:bg-blue-900 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {visibleSteps.map((step, index) => (
              <div 
                key={step.id} 
                 className={`flex flex-col ${
                   index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                 } items-center md:items-start opacity-0 fade-in`}
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
              >
                {/* 内容区域 */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">
                        <i className={`fas ${step.icon}`}></i>
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* 中间图标 */}
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md z-10 my-4 md:my-0">
                  <span className="font-bold">{step.id}</span>
                </div>
                
                {/* 空白区域 */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover-scale"
          >
            开始您的定制
          </a>
        </div>
      </div>
    </section>
  );
}