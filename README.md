# Ashok Choudhary - Professional Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-16.0.0-000000?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A modern, high-performance portfolio website showcasing professional data analytics expertise, built with Next.js 16 and React 19. Features comprehensive project portfolios, interactive dashboards, and seamless user experience across all devices.

## 🚀 Live Demo

**[View Live Portfolio →](https://ashok-portfolio-deven065.vercel.app)**

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Installation & Setup](#installation--setup)
- [Project Architecture](#project-architecture)
- [Development Guidelines](#development-guidelines)
- [Performance Optimization](#performance-optimization)
- [Deployment](#deployment)
- [Customization](#customization)
- [Contact Information](#contact-information)
- [License](#license)

## 📖 Overview

This portfolio website represents a professional showcase of data analytics expertise, featuring:

- **Comprehensive Project Portfolio**: Interactive showcase of data analytics projects including business intelligence dashboards, financial analytics, and data engineering solutions
- **Professional Experience Display**: Detailed career history highlighting expertise in e-commerce operations, data analysis, and business intelligence
- **Responsive Design**: Seamlessly optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional interface with smooth animations and intuitive navigation
- **Performance Optimized**: Built with Next.js for optimal loading speeds and SEO

## ✨ Key Features

### Core Functionality

- **Dynamic Portfolio Showcase**
  - Featured projects section with detailed metrics and highlights
  - Category-based filtering system
  - Comprehensive project descriptions with technology stacks
  - Interactive project cards with hover effects

- **Professional Sections**
  - Hero section with key statistics and call-to-action
  - About section with skills and expertise overview
  - Experience timeline with role descriptions
  - Skills showcase with visual icons
  - Contact section with multiple engagement options

- **User Experience Enhancements**
  - Smooth scroll-triggered animations
  - Responsive navigation with mobile menu
  - Intersection Observer for performance-optimized animations
  - Downloadable resume integration

### Technical Features

- **Server-Side Rendering (SSR)**: Improved SEO and initial load performance
- **TypeScript**: Full type safety for enhanced code reliability
- **Component Architecture**: Modular, reusable React components
- **Custom Hooks**: Optimized intersection observer for scroll animations
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based optimization

## 🛠 Technology Stack

### Frontend Framework & Libraries

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.0.0 | React framework with App Router for SSR and optimized performance |
| [React](https://reactjs.org/) | 19.2.0 | UI library with latest features and hooks |
| [TypeScript](https://www.typescriptlang.org/) | 5.6.3 | Type-safe JavaScript for enhanced code quality |

### Styling & Design

- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development
- **[Lucide React](https://lucide.dev/)**: Modern icon library with consistent design system
- **Custom CSS Animations**: Professional motion design with keyframe animations

### Development Tools

- **[ESLint](https://eslint.org/)**: Code linting and quality assurance
- **[PostCSS](https://postcss.org/)**: CSS processing and optimization
- **[Git](https://git-scm.com/)**: Version control and collaboration

## 🚀 Installation & Setup

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** 18.0 or higher
- **npm** 9.0+ or **yarn** 1.22+
- **Git** for version control

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/deven065/Ashok-Portfolio.git
   cd Ashok-Portfolio
   ```

2. **Install project dependencies**
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
   Navigate to `http://localhost:3000` to view the portfolio

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with hot-reload |
| `npm run build` | Creates an optimized production build |
| `npm start` | Starts the production server |
| `npm run lint` | Runs ESLint to check code quality |

## 📁 Project Architecture

```
ashok-portfolio/
├── app/                          # Next.js App Router directory
│   ├── components/              # Reusable React components
│   │   ├── Header.tsx          # Navigation header with responsive menu
│   │   ├── AboutSection.tsx    # About section component
│   │   ├── Background.tsx     # Layered background system
│   │   └── Footer.tsx          # Footer with links and contact info
│   ├── hooks/                  # Custom React hooks
│   │   └── useIntersectionObserver.ts  # Scroll animation hook
│   ├── portfolio/             # Portfolio page route
│   │   └── page.tsx          # Portfolio showcase with filtering
│   ├── globals.css           # Global styles, animations, and utilities
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage with all sections
├── public/                   # Static assets directory
│   ├── Ashok.jpg            # Profile image
│   ├── about.jpeg          # About section image
│   ├── Ashok_Choudhary_Resume.pdf  # Resume document
│   └── [project-images].png # Project dashboard images
├── types/                   # TypeScript type definitions
│   └── css.d.ts            # CSS module type declarations
├── package.json            # Project dependencies and scripts
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── eslint.config.mjs     # ESLint configuration
```

## 💻 Development Guidelines

### Code Standards

- **TypeScript**: All components and utilities use TypeScript for type safety
- **Component Structure**: Functional components with hooks
- **Naming Conventions**: PascalCase for components, camelCase for functions
- **File Organization**: Logical grouping by feature/functionality

### Best Practices

- Maintain responsive design principles across all components
- Use semantic HTML for accessibility
- Optimize images using Next.js Image component
- Implement proper error boundaries where needed
- Follow React best practices for hooks and state management

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚡ Performance Optimization

### Implementation Strategies

- **Static Generation**: Pre-rendered pages for optimal loading
- **Image Optimization**: Automatic WebP conversion and responsive sizing
- **Code Splitting**: Route-based and component-based code splitting
- **CSS Optimization**: Purged unused styles in production builds
- **Font Optimization**: Preloaded Google Fonts with display swap

### Performance Metrics

The portfolio is optimized for:

- **Largest Contentful Paint (LCP)**: < 1.2s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive**: Minimized through code splitting

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/deven065/Ashok-Portfolio)

Vercel provides seamless deployment with:

- Automatic builds on git push
- Preview deployments for pull requests
- Edge network optimization
- SSL certificates included

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Instructions

1. **Enable GitHub Pages** in your repository:
   - Go to Settings → Pages
   - Under "Build and deployment", select **GitHub Actions** as the source

2. **Push to main branch**:
   - The workflow will automatically trigger on push to `main`
   - Build artifacts will be deployed to GitHub Pages

3. **Access your site**:
   - Your portfolio will be available at: `https://[username].github.io/[repository-name]`
   - For this repository: `https://deven065.github.io/Ashok-Portfolio.github.io/`

The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles:
- Installing dependencies
- Building the Next.js static export
- Deploying to GitHub Pages automatically

### Alternative Deployment Options

#### Build for Production

```bash
npm run build
```

The static files will be generated in the `out/` directory.

#### Deploy to Different Platforms

- **Netlify**: Connect GitHub repository or drag-and-drop the `out` folder
- **AWS Amplify**: Connect repository for automatic deployments
- **DigitalOcean App Platform**: One-click deployment with GitHub integration
- **Custom Server**: Serve the `out/` folder with any static hosting service

### Environment Configuration

No environment variables are required for basic deployment. All configurations are handled through Next.js default settings.

## 🎨 Customization

### Updating Content

1. **Personal Information**
   - Update hero section in `app/page.tsx`
   - Modify about section in `app/components/AboutSection.tsx`
   - Edit experience data in `app/page.tsx`

2. **Portfolio Projects**
   - Update projects array in `app/portfolio/page.tsx`
   - Add project images to `public/` directory
   - Modify categories and filtering logic

3. **Contact Information**
   - Update email and LinkedIn URLs in `app/page.tsx`
   - Modify footer links in `app/components/Footer.tsx`
   - Add or remove social media links

4. **Resume**
   - Replace `public/Ashok_Choudhary_Resume.pdf` with your resume
   - Update resume download links throughout the site

### Styling Customization

1. **Color Scheme**: Modify CSS variables in `app/globals.css`
2. **Typography**: Update font families in `app/layout.tsx`
3. **Animations**: Customize keyframes in `app/globals.css`
4. **Components**: Adjust individual component styles in respective files

## 📞 Contact Information

**Ashok Choudhary**  
E-Commerce Executive & Data Analyst

- **Email**: [ashokchoudhary1085@gmail.com](mailto:ashokchoudhary1085@gmail.com)
- **LinkedIn**: [ashokchoudhary13](https://www.linkedin.com/in/ashokchoudhary13/)
- **GitHub**: [ashokchoudhary13](https://github.com/ashokchoudhary13)
- **Portfolio**: [Live Website](https://ashok-portfolio-deven065.vercel.app)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Principles**: Inspired by modern portfolio trends and data visualization best practices
- **Icon Library**: [Lucide React](https://lucide.dev/) for consistent, beautiful icons
- **Framework**: [Next.js](https://nextjs.org/) for the robust React framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS architecture

---

<div align="center">

**⭐ If you find this portfolio helpful, please consider giving it a star!**

[![GitHub stars](https://img.shields.io/github/stars/deven065/Ashok-Portfolio?style=social&label=Star)](https://github.com/deven065/Ashok-Portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/deven065/Ashok-Portfolio?style=social&label=Fork)](https://github.com/deven065/Ashok-Portfolio/network/members)

---

**Built with precision and attention to detail**  
*E-Commerce Executive & Data Analyst Portfolio*

</div>
