// 定制流程数据
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "需求咨询",
    description: "与我们的专业团队沟通您的具体需求，包括产品类型、尺寸、材质和设计要求。",
    icon: "fa-comment-alt"
  },
  {
    id: 2,
    title: "设计方案",
    description: "我们的设计师将根据您的需求提供专业的设计方案和3D效果图，直至您满意。",
    icon: "fa-pencil-ruler"
  },
  {
    id: 3,
    title: "报价确认",
    description: "根据最终确认的设计方案，我们将提供详细的报价和生产周期。",
    icon: "fa-file-invoice-dollar"
  },
  {
    id: 4,
    title: "生产制作",
    description: "采用先进的生产设备和工艺，严格按照设计要求进行生产制作。",
    icon: "fa-industry"
  },
  {
    id: 5,
    title: "质量检验",
    description: "每件产品都经过严格的质量检验，确保符合我们的高标准要求。",
    icon: "fa-check-circle"
  },
  {
    id: 6,
    title: "包装发货",
    description: "采用专业的包装材料，确保产品安全送达您的指定地点。",
    icon: "fa-box"
  }
];