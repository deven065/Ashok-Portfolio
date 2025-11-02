"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Github, BarChart3, TrendingUp, Users, Calendar, Eye } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const projects = [
  {
    id: 0,
    title: "Coffee Shop Sales Dashboard",
    category: "Business Intelligence",
    description: "Comprehensive sales analytics dashboard tracking daily transactions, product performance, customer patterns, and revenue insights for coffee shop operations.",
    image: "/coffee shop sales image.png",
    technologies: ["Power BI", "Excel", "SQL", "DAX"],
    metrics: {
      impact: "25% revenue increase",
      timeframe: "2 months",
      accuracy: "Real-time tracking",
      users: "Management Team"
    },
    highlights: [
      "Real-time sales monitoring",
      "Product performance analysis",
      "Peak hours identification",
      "Customer behavior insights"
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 1,
    title: "Vrinda Store E-commerce Analytics Dashboard",
    category: "Business Intelligence",
    description: "Comprehensive e-commerce analytics dashboard for Vrinda Store tracking sales performance, customer behavior, and business insights with data-driven decision making.",
    image: "/vrinda-store -image.png",
    technologies: ["Power BI", "SQL Server", "Python", "DAX"],
    metrics: {
      impact: "$340K revenue increase",
      timeframe: "3 months",
      accuracy: "94% forecast accuracy",
      users: "15 stakeholders"
    },
    highlights: [
      "Real-time sales tracking and monitoring",
      "Customer behavior analysis and segmentation",
      "Automated daily KPI monitoring",
      "Multi-channel performance insights"
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Credit Card Transaction Analytics Report",
    category: "Financial Analytics",
    description: "Comprehensive credit card transaction analysis dashboard providing insights into spending patterns, fraud detection, and financial behavior trends.",
    image: "/Credit-card-report.png",
    technologies: ["Power BI", "Excel", "SQL", "DAX"],
    metrics: {
        impact: "31% fraud detection improvement",
        timeframe: "3 months",
        accuracy: "92% pattern recognition",
        users: "Risk Management Team"
    },
    highlights: [
      "Transaction pattern analysis",
      "Fraud detection and monitoring",
      "Spending behavior insights",
      "Financial trend visualization"
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Diwali Sales Analysis Dashboard",
    category: "Business Intelligence",
    description: "Comprehensive sales analysis dashboard built with Python using data visualization libraries (NumPy and Pandas) for Diwali season tracking festive sales performance, product trends, and customer buying patterns during the peak shopping period.",
    image: "/diwali-sales-analysis.png",
    technologies: ["Python", "NumPy", "Pandas", "Data Visualization"],
    metrics: {
      impact: "$250K sales revenue",
      timeframe: "Diwali Season",
      accuracy: "Real-time tracking",
      users: "Sales & Marketing Team"
    },
    highlights: [
      "Built with Python data visualization libraries",
      "NumPy and Pandas for data processing",
      "Customer buying pattern analysis",
      "Revenue optimization insights"
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "SQL Database Analysis & Query Optimization",
    category: "Data Engineering",
    description: "Advanced SQL database analysis project involving complex queries, data optimization, and database performance tuning for efficient data retrieval and reporting.",
    image: "/SQL.png",
    technologies: ["SQL", "MySQL", "PostgreSQL", "Database Optimization"],
    metrics: {
      impact: "65% query performance improvement",
      timeframe: "2 months",
      accuracy: "Optimized data retrieval",
      users: "Database Administrators"
    },
    highlights: [
      "Complex SQL query development",
      "Database performance optimization",
      "Data retrieval and analysis",
      "Efficient query structuring"
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Car Sales Data Analysis Dashboard",
    category: "Business Intelligence",
    description: "Comprehensive car sales data analysis dashboard built with Tableau analyzing selling prices, fuel types, transmission types, ownership patterns, and dealer insights for automotive market trends.",
    image: "/Tableau Dashboard.png",
    technologies: ["Tableau", "Data Visualization", "SQL", "Excel"],
    metrics: {
      impact: "Market trend insights",
      timeframe: "3 months",
      accuracy: "Comprehensive analysis",
      users: "Sales & Analytics Team"
    },
    highlights: [
      "Selling price analysis by year and dealer type",
      "Fuel type performance comparison",
      "Transmission type impact on pricing",
      "Ownership pattern visualization"
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
];

const categories = ["All", "Business Intelligence", "Machine Learning", "Operations Analytics", "Marketing Analytics", "Financial Analytics", "Healthcare Analytics"];

export default function PortfolioPage() {
  const [ref, isVisible] = useIntersectionObserver();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state to prevent hydration mismatches
  // This pattern is necessary for SSR hydration safety
  if (typeof window !== 'undefined' && !isMounted) {
    // Only set state on client side during render
    setIsMounted(true);
  }

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <main className="min-h-screen pt-24 md:pt-28">
      {/* Premium Header */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#3B82F6] hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all duration-300 mb-10 group font-medium"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span>Return to Portfolio</span>
          </Link>
          
          <div className="animate-fade-in-up text-center">
            <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#E2E8F0] mb-6">
              Premium <span className="text-gradient-premium">Portfolio</span>
            </h1>
            <p className="font-inter text-lg md:text-xl text-[#94A3B8] max-w-4xl mx-auto leading-relaxed font-medium">
              Discover my elite collection of data analytics transformations, from strategic business intelligence
              to advanced machine learning solutions, each delivering exceptional ROI and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Featured Projects */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-linear-to-br from-[#1E3A8A]/10 via-transparent to-[#3B82F6]/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-12 animate-fade-in-up text-center">Elite Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group glass-card rounded-3xl shadow-premium hover:shadow-premium-hover ring-2 ring-[#3B82F6]/20 hover:ring-[#3B82F6]/40 overflow-hidden transition-all duration-500 hover:scale-[1.02] animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative bg-[#374151] overflow-hidden ${project.image.endsWith('.png') ? 'h-56' : 'h-48'}`}>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill 
                    className={`transition-transform duration-500 group-hover:scale-110 ${
                      project.image.endsWith('.png') 
                        ? 'object-cover object-top opacity-100' 
                        : 'object-contain p-8 filter brightness-0 invert opacity-70 group-hover:opacity-100'
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#2563EB] text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#F9FAFB] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#D1D5DB] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={16} className="text-[#2563EB]" />
                      <span className="text-sm font-medium text-[#2563EB]">{project.metrics.impact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#D1D5DB]" />
                      <span className="text-sm text-[#D1D5DB]">{project.metrics.timeframe}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 size={16} className="text-[#D1D5DB]" />
                      <span className="text-sm text-[#D1D5DB]">{project.metrics.accuracy}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-[#D1D5DB]" />
                      <span className="text-sm text-[#D1D5DB]">{project.metrics.users}</span>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#374151] text-[#D1D5DB] rounded border border-gray-600/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-3">
                    <a 
                      href={project.demoUrl}
                      className="inline-flex items-center gap-2 bg-[#2563EB] text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                    >
                      <Eye size={16} />
                      View Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 border border-gray-600/30 text-[#D1D5DB] text-sm px-4 py-2 rounded-md hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-8 md:py-12" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-2xl font-bold text-[#F9FAFB] mb-8 ${isMounted && isVisible ? 'animate-fade-in-up' : ''}`}>
            All Projects
          </h2>
          
          {/* Category Filter */}
          <div className={`flex flex-wrap gap-3 mb-8 ${isMounted && isVisible ? 'animate-fade-in-up delay-100' : ''}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#2563EB] text-white shadow-md'
                    : 'bg-[#374151] text-[#D1D5DB] hover:bg-[#2563EB] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group bg-[#1F2937] rounded-xl shadow-sm border border-gray-600/30 overflow-hidden hover:shadow-lg hover:border-[#2563EB]/50 transition-all duration-500 hover:scale-105 ${isMounted && isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className={`relative bg-[#374151] overflow-hidden ${project.image.endsWith('.png') ? 'h-52' : 'h-40'}`}>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill 
                    className={`transition-transform duration-500 group-hover:scale-110 ${
                      project.image.endsWith('.png') 
                        ? 'object-cover object-top opacity-100' 
                        : 'object-contain p-6 filter brightness-0 invert opacity-70 group-hover:opacity-100'
                    }`}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#2563EB] text-white text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#F9FAFB] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#D1D5DB] text-sm mb-3">
                    {project.description.slice(0, 120)}...
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-[#2563EB] font-medium mb-3">
                    <TrendingUp size={14} />
                    {project.metrics.impact}
                  </div>
                  
                  <div className="flex gap-2">
                    <a 
                      href={project.demoUrl}
                      className="flex-1 text-center bg-[#2563EB] text-white text-sm px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                      View Details
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="p-2 border border-gray-600/30 text-[#D1D5DB] rounded-md hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-linear-to-r from-[#2563EB]/10 to-[#3b82f6]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#F9FAFB] mb-4 animate-fade-in-up">
            Ready to Transform Your Data?
          </h2>
          <p className="text-[#D1D5DB] mb-8 animate-fade-in-up delay-100">
            Let&apos;s discuss how data analytics can drive your business forward. 
            I&apos;d love to hear about your challenges and explore solutions together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
            <Link 
              href="/#contact"
              className="bg-[#2563EB] text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-600 hover:scale-105 hover:-translate-y-1 shadow-lg transition-all duration-300"
            >
              Start a Project
            </Link>
            <Link 
              href="/#about"
              className="border border-[#2563EB] text-[#2563EB] font-semibold px-8 py-3 rounded-md hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white transition-all duration-300 hover:scale-105"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}