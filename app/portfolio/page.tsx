"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Github, BarChart3, TrendingUp, Users, Calendar, Eye } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const projects = [
  {
    id: 1,
    title: "E-commerce Sales Analytics Dashboard",
    category: "Business Intelligence",
    description: "Comprehensive dashboard analyzing $2.3M in sales data with predictive forecasting, customer segmentation, and revenue optimization insights.",
    image: "/window.svg",
    technologies: ["Power BI", "SQL Server", "Python", "DAX"],
    metrics: {
      impact: "$340K revenue increase",
      timeframe: "3 months",
      accuracy: "94% forecast accuracy",
      users: "15 stakeholders"
    },
    highlights: [
      "Reduced reporting time by 75%",
      "Identified top 20% customers driving 60% revenue",
      "Automated daily KPI monitoring",
      "Built predictive models for inventory planning"
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Customer Churn Prevention Model",
    category: "Machine Learning",
    description: "ML-powered churn prediction system with 87% accuracy, helping retain high-value customers through targeted intervention strategies.",
    image: "/globe.svg",
    technologies: ["Python", "Scikit-learn", "Tableau", "PostgreSQL"],
    metrics: {
        impact: "23% churn reduction",
        timeframe: "4 months",
        accuracy: "87% prediction accuracy",
        users: "Customer Success Team"
    },
    highlights: [
      "Identified key churn indicators",
      "Automated risk scoring system",
      "Real-time customer health dashboard",
      "A/B tested retention strategies"
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Supply Chain Optimization Analysis",
    category: "Operations Analytics",
    description: "End-to-end supply chain analysis optimizing inventory levels, reducing costs, and improving delivery performance across 50+ locations.",
    image: "/file.svg",
    technologies: ["Excel", "Tableau", "R", "MySQL"],
    metrics: {
      impact: "$180K cost savings",
      timeframe: "2 months",
      accuracy: "91% demand forecast",
      users: "Operations Team"
    },
    highlights: [
      "Optimized inventory across 50+ locations",
      "Reduced stockouts by 35%",
      "Improved delivery time by 22%",
      "Built automated reorder alerts"
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Marketing Campaign ROI Tracker",
    category: "Marketing Analytics",
    description: "Multi-channel marketing performance dashboard tracking $500K+ ad spend with attribution modeling and campaign optimization.",
    image: "/next.svg",
    technologies: ["Google Analytics", "Power BI", "Python", "BigQuery"],
    metrics: {
      impact: "156% ROI improvement",
      timeframe: "6 months",
      accuracy: "Campaign attribution",
      users: "Marketing Team"
    },
    highlights: [
      "Unified multi-channel tracking",
      "Attribution modeling across touchpoints",
      "Automated campaign performance alerts",
      "Budget optimization recommendations"
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Financial Risk Assessment Model",
    category: "Financial Analytics",
    description: "Predictive risk modeling system analyzing credit applications with advanced statistical methods and regulatory compliance.",
    image: "/vercel.svg",
    technologies: ["R", "SAS", "Tableau", "Oracle"],
    metrics: {
      impact: "31% risk reduction",
      timeframe: "5 months",
      accuracy: "89% risk prediction",
      users: "Risk Management"
    },
    highlights: [
      "Automated risk scoring pipeline",
      "Regulatory compliance reporting",
      "Early warning risk indicators",
      "Portfolio performance monitoring"
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "Healthcare Patient Analytics",
    category: "Healthcare Analytics",
    description: "Patient flow optimization and outcome prediction system improving hospital efficiency and patient care quality.",
    image: "/window.svg",
    technologies: ["Python", "Tableau", "SQL Server", "Power BI"],
    metrics: {
      impact: "28% efficiency gain",
      timeframe: "4 months",
      accuracy: "92% outcome prediction",
      users: "Healthcare Providers"
    },
    highlights: [
      "Optimized patient scheduling",
      "Reduced wait times by 40%",
      "Predictive readmission modeling",
      "Real-time capacity monitoring"
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

const categories = ["All", "Business Intelligence", "Machine Learning", "Operations Analytics", "Marketing Analytics", "Financial Analytics", "Healthcare Analytics"];

export default function PortfolioPage() {
  const [ref, isVisible] = useIntersectionObserver();
  const [selectedCategory, setSelectedCategory] = useState("All");

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
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10 via-transparent to-[#3B82F6]/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-12 animate-fade-in-up text-center">Elite Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group glass-card rounded-3xl shadow-premium hover:shadow-premium-hover ring-2 ring-[#3B82F6]/20 hover:ring-[#3B82F6]/40 overflow-hidden transition-all duration-500 hover:scale-[1.02] animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 bg-[#374151] overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill 
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110 filter brightness-0 invert opacity-70 group-hover:opacity-100" 
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
          <h2 className={`text-2xl font-bold text-[#F9FAFB] mb-8 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            All Projects
          </h2>
          
          {/* Category Filter */}
          <div className={`flex flex-wrap gap-3 mb-8 ${isVisible ? 'animate-fade-in-up delay-100' : ''}`}>
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
                className={`group bg-[#1F2937] rounded-xl shadow-sm border border-gray-600/30 overflow-hidden hover:shadow-lg hover:border-[#2563EB]/50 transition-all duration-500 hover:scale-105 ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="relative h-40 bg-[#374151] overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill 
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-110 filter brightness-0 invert opacity-70 group-hover:opacity-100" 
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
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#2563EB]/10 to-[#3b82f6]/10">
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