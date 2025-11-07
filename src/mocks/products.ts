// 亚克力产品数据
export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "亚克力展示架",
    description: "高端透明亚克力材质，为您的产品提供清晰展示效果，适用于各类零售场所和展览活动。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Acrylic%20display%20stand%20with%20high%20transparency%20showcasing%20luxury%20products%20in%20a%20retail%20environment&sign=702f7e7b3fa7fcc7e7461eeab0b88ac7",
    category: "展示系列",
    features: ["高透明度", "坚固耐用", "定制尺寸", "易于清洁"]
  },
  {
    id: 2,
    title: "亚克力家居装饰",
    description: "现代简约风格的亚克力家居装饰，为您的居家环境增添时尚与艺术气息。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20acrylic%20home%20decorations%20in%20a%20minimalist%20living%20room%20setting&sign=fab8e102977478c1d0de0571328e3cea",
    category: "家居系列",
    features: ["现代设计", "多种颜色", "安全环保", "轻量化"]
  },
  {
    id: 3,
    title: "亚克力标识牌",
    description: "专业定制的亚克力标识牌，为您的企业或店铺提供清晰、持久的品牌展示。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Acrylic%20signage%20with%20company%20logo%20mounted%20on%20a%20modern%20office%20wall&sign=90f545085ea66df055cdb9a42b30dd2d",
    category: "标识系列",
    features: ["清晰印刷", "防水防刮", "多种形状", "安装简便"]
  },
  {
    id: 4,
    title: "亚克力展示盒",
    description: "精致的亚克力展示盒，为您的珍贵物品提供完美的保护与展示解决方案。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Clear%20acrylic%20display%20case%20showcasing%20collectibles%20in%20a%20modern%20setting&sign=f839df72062b0a3a84100d9ab75da88b",
    category: "展示系列",
    features: ["防尘防潮", "UV防护", "滑动开启", "定制内部隔层"]
  }
];