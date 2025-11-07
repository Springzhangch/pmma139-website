# 香港粤丰亚克力产品定制网站 - 部署指南

## 目录
- [1. 获取源代码](#1-获取源代码)
- [2. 选择托管平台](#2-选择托管平台)
- [3. 本地环境准备](#3-本地环境准备)
- [4. 构建静态版本](#4-构建静态版本)
- [5. 部署方式](#5-部署方式)
  - [5.1 使用 Cloudflare Pages 基础版部署](#51-使用-cloudflare-pages-基础版部署)
  - [5.2 使用 Vercel 部署](#52-使用-vercel-部署)
  - [5.3 使用 Netlify 部署](#53-使用-netlify-部署)
  - [5.4 传统服务器部署](#54-传统服务器部署)
- [6. 配置域名](#6-配置域名)
- [7. 部署后检查清单](#7-部署后检查清单)
- [8. 常见问题排查](#8-常见问题排查)

## 1. 获取源代码

要获取香港粤丰亚克力产品定制网站的源代码，请按照以下步骤操作：

1. 如果您有代码仓库访问权限：
   ```bash
   git clone [仓库URL]
   cd [项目目录]
   ```

2. 如果您只有项目文件（非Git仓库）：
   - 确保您拥有所有项目文件的完整副本
   - 将文件解压到本地计算机上的新文件夹中

## 2. 选择托管平台

根据您的需求和预算，您可以选择以下几种流行的托管平台：

### 推荐平台（无需Wrangler的静态部署）
- **Cloudflare Pages 基础版**: 简单易用的静态网站托管，提供全球CDN加速，无需配置Wrangler
- **Vercel**: 适合React项目，提供免费层级，自动部署
- **Netlify**: 专注于静态网站托管，简单易用

### 传统服务器解决方案
- **阿里云**: 国内知名云服务提供商
- **腾讯云**: 国内领先的云服务平台
- **AWS**: 全球领先的云服务提供商
- **DigitalOcean**: 简单易用的云服务平台

## 3. 本地环境准备

在部署前，建议在本地进行测试：

1. 安装必要的依赖：
   ```bash
   # 使用npm
   npm install
   
   # 或使用pnpm（本项目推荐）
   pnpm install
   ```

2. 本地启动开发服务器：
   ```bash
   npm run dev
   # 或
   pnpm dev
   ```

3. 访问 http://localhost:3000 确认网站正常运行

4. 构建完成后，可以通过预览模式查看生产版本：
   ```bash
   npm run preview
   # 或
   pnpm preview
   ```

## 4. 构建静态版本

本网站已优化为纯静态HTML/CSS/JS格式，无需Wrangler配置文件即可部署。执行以下命令构建生产版本：

```bash
# 使用npm
npm run build

# 或使用pnpm
pnpm build
```

构建完成后，项目根目录下会生成一个 `dist` 文件夹，包含所有需要部署的静态文件。这个 `dist` 文件夹中的内容就是您需要上传到托管平台的所有文件。

## 5. 部署方式

### 5.1 使用 Cloudflare Pages 基础版部署

Cloudflare Pages 基础版适合静态网站和单页应用的简单部署，无需配置Wrangler。

1. **准备工作**：
   - 确保项目中已有 `_redirects` 文件（项目已包含此文件，用于处理SPA路由）
   - 注册并登录 [Cloudflare 账户](https://dash.cloudflare.com/)

2. **方法一：直接上传文件部署（推荐）**
   - 在Cloudflare控制面板中，点击左侧菜单的 "Pages"
   - 点击 "Create a project" 按钮
   - 选择 "Direct Upload" 选项
   - 输入项目名称，然后点击 "Upload assets"
   - 上传构建好的 `dist` 文件夹中的所有文件
   - 点击 "Deploy site" 开始部署过程
   - 部署完成后，Cloudflare会提供一个临时域名（如 `your-project.pages.dev`）

3. **方法二：通过Git仓库自动部署**
   - 在Cloudflare控制面板中，点击左侧菜单的 "Pages"
   - 点击 "Create a project" 按钮
   - 选择 "Connect to Git"，授权Cloudflare访问您的代码仓库
   - 选择您的项目仓库
   - 在 "Set up builds and deployments" 页面配置：
     - Framework preset: 选择 `Create React App` 或 `Vite`
     - Build command: `pnpm build` (或 `npm run build`)
     - Build output directory: `dist`
     - Root directory: 保持为空（使用默认）
   - 点击 "Save and Deploy" 开始部署过程
   - 部署完成后，Cloudflare会提供一个临时域名

4. **重要注意事项**：
   - 确保不使用Wrangler配置方式部署，只使用基础的静态文件上传或Git自动构建
   - 项目中已包含的 `_redirects` 文件会自动处理SPA应用的路由问题

### 5.2 使用 Vercel 部署

1. 访问 [Vercel 官网](https://vercel.com/) 并注册账号
2. 点击 "New Project"，选择 "Import Git Repository"
3. 授权 Vercel 访问您的代码仓库
4. 选择项目仓库并点击 "Import"
5. 在配置页面，保持默认设置（Vercel会自动识别Vite项目），点击 "Deploy"
6. 部署完成后，Vercel 会提供一个临时域名

### 5.3 使用 Netlify 部署

1. 访问 [Netlify 官网](https://www.netlify.com/) 并注册账号
2. 点击 "New site from Git"
3. 选择您的代码仓库托管平台并授权
4. 选择项目仓库
5. 在构建设置中：
   - Build command: `npm run build` 或 `pnpm build`
   - Publish directory: `dist`
6. 点击 "Deploy site"

### 5.4 传统服务器部署

1. 将构建好的 `dist` 文件夹上传到您的服务器：
   ```bash
   # 使用scp命令
   scp -r dist/* user@your-server-ip:/path/to/your/website
   
   # 或使用FTP客户端如FileZilla
   ```

2. 配置Web服务器（以Nginx为例）：
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       root /path/to/your/website;
       index index.html;
       
       # 配置单页应用路由
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       # 静态文件缓存设置
       location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
           expires 30d;
           add_header Cache-Control "public, max-age=2592000";
       }
   }
   ```

3. 重启Nginx服务器：
   ```bash
   sudo systemctl restart nginx
   ```

## 6. 配置域名

### Cloudflare域名配置

1. **将域名转移到Cloudflare**（推荐）：
   - 在Cloudflare控制面板中，点击 "Add a site"
   - 输入您的域名，然后点击 "Add site"
   - 选择一个计划（免费计划已足够使用）
   - 按照提示更新您的域名DNS服务器到Cloudflare提供的服务器
   - 等待DNS propagation完成（通常需要24-48小时）

2. **在Cloudflare Pages中添加自定义域**：
   - 在您的Pages项目设置中，点击 "Custom domains"
   - 点击 "Add custom domain"
   - 输入您的域名，然后点击 "Continue"
   - 按照提示完成DNS配置
   - 启用 "Always use HTTPS" 选项确保安全访问

3. **SSL/TLS设置**：
   - 在Cloudflare控制面板中，点击 "SSL/TLS"
   - 将SSL/TLS加密模式设置为 "Full" 或 "Full (strict)"
   - 确保 "Always Use HTTPS" 选项已启用

## 7. 部署后检查清单

部署完成后，请检查以下项目：

- [ ] 网站是否可以通过域名正常访问
- [ ] 页面加载速度是否正常
- [ ] 所有链接和按钮是否正常工作
- [ ] 响应式布局在不同设备上是否正常显示
- [ ] 表单提交功能是否正常
- [ ] 网站是否使用HTTPS协议
- [ ] 图片和资源是否正确加载
- [ ] `/index` 路径是否可以正常访问

## 8. 常见问题排查

### 8.1 页面显示空白或404错误

- **SPA路由问题**：确保`_redirects`文件包含`/* /index.html 200`规则
- **文件路径**：确保index.html文件存在且路径正确
- **浏览器控制台**：查看是否有资源加载错误
- **Cloudflare Pages**：检查"Build & deploy"设置，确保构建输出目录正确设置为`dist`

### 8.2 资源加载失败

- **路径问题**：检查资源文件路径是否正确
- **文件权限**：确认服务器文件权限设置正确
- **Cloudflare缓存**：使用Cloudflare的"Purge Cache"功能清除所有缓存
- **安全规则**：检查是否有安全规则阻止了资源加载

### 8.3 Cloudflare Pages特定问题

- **构建失败**：检查构建日志，确保所有依赖项正确安装
- **DNS传播延迟**：新配置的域名可能需要24-48小时才能完全传播
- **缓存问题**：使用Cloudflare的"Purge Cache"功能清除所有缓存
- **SSL问题**：如果遇到SSL错误，尝试调整SSL/TLS加密模式

### 8.4 `/index`路径访问问题

网站已配置以下措施确保`/index`路径可正常访问：
- `_redirects`文件中包含`/index /index.html 200`规则
- React路由配置中添加了`/index`和`/index.html`的路由处理
- 网站已优化为纯静态格式，无需服务器端额外配置

如果您在部署过程中遇到任何问题，请查阅相关托管平台的官方文档或联系其技术支持。