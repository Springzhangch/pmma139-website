import { useEffect, useState } from 'react';

export default function AboutUs() {
  // 直接设置为可见，简化动画逻辑，提高稳定性
  const [visible] = useState(true);

  const companyStats = [
    { label: '成立年份', value: '2005' },
    { label: '年生产量', value: '500,000+' },
    { label: '客户满意度', value: '98%' },
    { label: '专业团队', value: '50+' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">关于我们</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            香港粤丰是一家专业的亚克力产品定制企业，拥有丰富的行业经验和先进的生产设备
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 opacity-0 fade-in" style={{ animationDelay: '0.2s', animationFillMode: visible ? 'forwards' : 'none' }}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20acrylic%20manufacturing%20factory%20with%20advanced%20machinery%20and%20skilled%20workers&sign=7433ac0cb626b73540c5c4b01c9ce554" 
                  alt="香港粤丰工厂" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-sm font-medium">20+ 年行业经验</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 opacity-0 fade-in" style={{ animationDelay: '0.4s', animationFillMode: visible ? 'forwards' : 'none' }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">公司简介</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              香港粤丰成立于2005年，是一家专注于高品质亚克力产品定制的企业。我们拥有先进的生产设备和专业的设计团队，能够为客户提供从设计到生产的一站式服务。
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              多年来，我们一直秉承"质量第一、客户至上"的经营理念，为众多国内外客户提供了优质的亚克力产品和服务。我们的产品广泛应用于零售展示、家居装饰、商业标识、礼品收藏等领域。
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {companyStats.map((stat, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">我们的优势</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-blue-600 dark:text-blue-400">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">先进的生产设备</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">采用进口CNC雕刻机、激光切割机等先进设备，确保产品精度和质量。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-blue-600 dark:text-blue-400">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">专业的设计团队</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">拥有经验丰富的设计团队，能够根据客户需求提供专业的设计方案。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-blue-600 dark:text-blue-400">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">严格的质量控制</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">从原材料采购到成品出厂，每一个环节都经过严格的质量检验。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}