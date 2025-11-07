# 香港粤丰亚克力产品定制网站

## 项目简介
香港粤丰是一家专业的亚克力产品定制企业，本项目为其官方网站，采用苹果官网风格的极简设计，结合大量留白、高质量图片展示和简洁导航特点。

## 主要功能
- 产品展示：展示各类亚克力产品，支持分类浏览
- 定制流程：详细介绍从咨询到交付的完整定制流程
- 公司介绍：展示企业实力、优势和发展历程
- 联系我们：提供在线咨询表单和联系方式

## 技术栈
- React 18+
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion（动画效果）
- Sonner（通知组件）

## 快速开始

### 1. 安装依赖
```bash
# 使用npm
npm install

# 或使用pnpm（推荐）
pnpm install
```

### 2. 本地开发
```bash
npm run dev
# 或
pnpm dev
```
访问 http://localhost:3000 查看项目

### 3. 构建生产版本
```bash
npm run build
# 或
pnpm build
```

## 部署指南
请查看 [DEPLOYMENT.md](DEPLOYMENT.md) 获取详细的部署步骤指导。

## 项目结构
```
src/
├── components/      # React组件
│   ├── Navbar.tsx   # 导航栏组件
│   ├── Hero.tsx     # 首页英雄区
│   ├── Products.tsx # 产品展示
│   └── ...
├── mocks/           # 模拟数据
├── hooks/           # 自定义hooks
├── pages/           # 页面组件
├── lib/             # 工具函数
├── index.css        # 全局样式
├── App.tsx          # 应用入口
└── main.tsx         # 渲染入口
```

## 设计特点
- 极简设计风格，大量留白
- 高品质图片展示
- 简洁明了的导航结构
- 流畅的动画过渡效果
- 响应式设计，适配不同设备

## 注意事项
- 本项目使用模拟数据，实际部署时需要替换为真实数据
- 图片使用了生成服务，实际使用时建议替换为自有图片资源
- 表单提交目前为模拟功能，实际应用需要对接后端API