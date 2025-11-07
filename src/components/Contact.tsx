import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  // 直接设置为可见，简化动画逻辑，提高稳定性
  const [visible] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟表单提交
    toast('感谢您的咨询，我们会尽快回复您！');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      title: '电话',
      value: '+852 1234 5678',
      icon: 'fa-phone-alt'
    },
    {
      title: '邮箱',
      value: 'info@yuefeng.com.hk',
      icon: 'fa-envelope'
    },
    {
      title: '地址',
      value: '香港新界葵涌工业村国瑞路88号',
      icon: 'fa-map-marker-alt'
    },
    {
      title: '营业时间',
      value: '周一至周五: 9:00 - 18:00',
      icon: 'fa-clock'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">联系我们</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            如有任何问题或需求，请随时与我们联系，我们将竭诚为您服务
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 opacity-0 fade-in" style={{ animationDelay: '0.2s', animationFillMode: visible ? 'forwards' : 'none' }}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">发送询价</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    电话
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    留言
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover-scale"
                >
                  发送信息
                </button>
              </div>
            </form>
          </div>
          
          <div className="w-full lg:w-1/2 opacity-0 fade-in" style={{ animationDelay: '0.4s', animationFillMode: visible ? 'forwards' : 'none' }}>
            <div className="h-full bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">联系方式</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-4 text-blue-600 dark:text-blue-400 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                      <i className={`fas ${info.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{info.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">关注我们</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 bg-gray-50 dark:bg-gray-800 rounded-full">
                    <i className="fab fa-weixin text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 bg-gray-50 dark:bg-gray-800 rounded-full">
                    <i className="fab fa-weibo text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 bg-gray-50 dark:bg-gray-800 rounded-full">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                </div>
                
                <div className="mt-8 rounded-xl overflow-hidden h-48 bg-gray-100 dark:bg-gray-800">
                  {/* 这里可以放一个地图，这里使用占位图 */}
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Office%20building%20exterior%20with%20company%20sign%20in%20Hong%20Kong&sign=109b27a71d80c2f6c7b4f568009bf30f" 
                    alt="公司位置" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}