import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { name: '首页', href: '/' },
    { name: '产品展示', href: '#products' },
    { name: '定制流程', href: '#process' },
    { name: '公司介绍', href: '#about' },
    { name: '联系我们', href: '#contact' },
  ];
  
  const productCategories = [
    { name: '展示系列', href: '#' },
    { name: '家居系列', href: '#' },
    { name: '标识系列', href: '#' },
    { name: '礼品系列', href: '#' },
    { name: '其他定制', href: '#' },
  ];
  
  const companyInfo = [
    { name: '关于我们', href: '#about' },
    { name: '新闻中心', href: '#' },
    { name: '加入我们', href: '#' },
    { name: '隐私政策', href: '#' },
    { name: '服务条款', href: '#' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">香港粤丰</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              专业的亚克力产品定制专家，为您提供高品质、个性化的亚克力解决方案
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <i className="fab fa-weixin text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <i className="fab fa-weibo text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">快速链接</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">产品分类</h3>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <a 
                    href={category.href} 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">公司信息</h3>
            <ul className="space-y-2">
              {companyInfo.map((info) => (
                <li key={info.name}>
                  <a 
                    href={info.href} 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {info.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} 香港粤丰亚克力制品有限公司. 保留所有权利.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                隐私政策
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                使用条款
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                Cookie政策
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}