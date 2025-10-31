# 📊 Ashok's Data Analytics Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

> A modern, responsive portfolio website showcasing data analytics expertise with professional animations and interactive features.

## 🌟 Live Demo

**[View Live Portfolio →](https://ashok-portfolio-deven065.vercel.app)**

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Responsive Design](#-responsive-design)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [License](#-license)

## ✨ Features

### 🎯 **Core Features**
- **Modern Design**: Clean, professional UI with gradient accents
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Professional Animations**: Smooth transitions and scroll-triggered animations
- **Interactive Portfolio**: Comprehensive project showcase with filtering
- **Contact Integration**: Direct email and LinkedIn connectivity

### 🔧 **Technical Features**
- **Performance Optimized**: Fast loading with Next.js optimization
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Type Safety**: Full TypeScript implementation
- **Modern CSS**: Tailwind CSS v4 with custom utilities

### 📱 **Responsive Breakpoints**
- **Mobile**: 320px+ (iPhone SE and up)
- **Mobile Large**: 475px+ (iPhone 12 Pro and up)
- **Tablet**: 640px+ (iPad and up)
- **Laptop**: 1024px+ (Standard laptops)
- **Desktop**: 1280px+ (Large screens)

## 🛠 Tech Stack

### **Frontend Framework**
- **[Next.js 16.0.0](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://reactjs.org/)** - UI library with latest features
- **[TypeScript 5.6.3](https://www.typescriptlang.org/)** - Type-safe JavaScript

### **Styling & UI**
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful, customizable icons
- **Custom CSS Animations** - Professional motion design

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Git](https://git-scm.com/)** - Version control

## 🚀 Getting Started

### Prerequisites

- **Node.js 18.0+** 
- **npm 9.0+** or **yarn 1.22+**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deven065/Ashok-Portfolio.git
   cd Ashok-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Code linting
npm run lint
```

## 📁 Project Structure

```
ashok-portfolio/
├── app/                          # Next.js App Router
│   ├── components/              # Reusable UI components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── AboutSection.tsx    # About section component
│   │   ├── Background.tsx      # Layered background system
│   │   └── Footer.tsx          # Footer component
│   ├── hooks/                  # Custom React hooks
│   │   └── useIntersectionObserver.ts
│   ├── portfolio/              # Portfolio page
│   │   └── page.tsx           # Portfolio showcase
│   ├── globals.css            # Global styles & animations
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Homepage
├── public/                     # Static assets
│   ├── Ashok.jpg              # Profile image
│   ├── about.jpeg             # About section image
│   └── *.svg                  # Icon assets
├── package.json               # Dependencies & scripts
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 📱 Responsive Design

### **Mobile-First Approach**
The portfolio is built with a mobile-first methodology, ensuring optimal performance on all devices:

- **Typography**: Scalable text sizes from mobile to desktop
- **Layout**: Flexible grid systems that adapt to screen size
- **Images**: Responsive images with proper aspect ratios
- **Navigation**: Collapsible mobile menu with smooth animations
- **Touch-Friendly**: Proper touch targets and hover states

### **Performance Optimizations**
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Purged unused styles in production
- **Bundle Analysis**: Optimized JavaScript bundles

## ⚡ Performance

### **Core Web Vitals**
- **LCP (Largest Contentful Paint)**: < 1.2s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### **Optimization Techniques**
- **Static Generation**: Pre-rendered pages for faster loading
- **Image Optimization**: WebP format with responsive sizing
- **Font Optimization**: Preloaded Google Fonts
- **CSS Minification**: Compressed stylesheets
- **JavaScript Optimization**: Tree shaking and minification

## 🌐 Deployment

### **Vercel (Recommended)**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/deven065/Ashok-Portfolio)

### **Manual Deployment**
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**
   - **Vercel**: Connect GitHub repository
   - **Netlify**: Drag and drop `out` folder
   - **AWS S3**: Upload static files
   - **Digital Ocean**: Use App Platform

### **Environment Variables**
No environment variables required for basic setup.

## 🎨 Customization

### **Colors & Branding**
Edit the color scheme in `app/globals.css`:
```css
:root {
  --primary-blue: #0b3a7a;
  --secondary-blue: #1e3a8a;
  --accent-yellow: #f1c40f;
}
```

### **Content Updates**
- **Personal Info**: Update content in `app/page.tsx`
- **Projects**: Modify projects array in `app/portfolio/page.tsx`
- **Contact Details**: Update email and LinkedIn URLs
- **Images**: Replace images in `public/` directory

### **Styling Modifications**
- **Animations**: Customize keyframes in `app/globals.css`
- **Layout**: Adjust responsive breakpoints
- **Components**: Modify individual component styles

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Maintain responsive design principles
- Add appropriate comments for complex logic
- Test on multiple devices and browsers

## 📞 Contact

**Ashok Choudhary** - Data Analyst

- **Email**: [ashokchoudhary1085@gmail.com](mailto:ashokchoudhary1085@gmail.com)
- **LinkedIn**: [ashokchoudhary13](https://www.linkedin.com/in/ashokchoudhary13/)
- **Portfolio**: [Live Demo](https://ashok-portfolio-deven065.vercel.app)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio trends and data visualization principles
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful, consistent icons
- **Framework**: [Next.js](https://nextjs.org/) for the robust React framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

---

<div align="center">

**⭐ If you found this portfolio helpful, please consider giving it a star!**

[![GitHub stars](https://img.shields.io/github/stars/deven065/Ashok-Portfolio?style=social)](https://github.com/deven065/Ashok-Portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/deven065/Ashok-Portfolio?style=social)](https://github.com/deven065/Ashok-Portfolio/network/members)

</div>

---

> Built with ❤️ by [Ashok Choudhary](https://github.com/deven065) | Data Analyst & Business Intelligence Specialist
