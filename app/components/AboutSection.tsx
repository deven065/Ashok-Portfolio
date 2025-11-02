"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to prevent hydration mismatches
    setIsMounted(true);
  }, []);
  const bullets = [
    "Elite expertise in SQL, Python, R, and advanced statistical modeling",
    "Premium proficiency with Tableau, Power BI, and enterprise visualization",
    "Certified in business analytics, machine learning, and strategic planning",
    "Proven track record of 50+ high-impact data transformation projects",
  ];

  return (
    <section id="about" className="py-16 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
        {/* Left: Premium Image card */}
        <div className={`relative ${isMounted && isVisible ? 'animate-fade-in-left' : ''}`}>
          <div className="absolute -inset-16 -z-10 rounded-[48px] bg-gradient-to-br from-[#3B82F6]/30 via-[#1E3A8A]/15 to-[#FACC15]/8 blur-3xl opacity-80" />
          <div className="relative glass-card rounded-[48px] overflow-hidden shadow-premium ring-2 ring-[#3B82F6]/30 hover:shadow-premium-hover hover:ring-[#3B82F6]/50 transition-all duration-500 hover:scale-[1.02]">
            <div className="relative w-full max-w-2xl mx-auto" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/Ashok.jpg"
                alt="Ashok Choudhary - Premium Data Analyst"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/50 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Right: Premium Content */}
        <div className={`${isMounted && isVisible ? 'animate-fade-in-right delay-200' : ''}`}>
          <div className={`${isMounted && isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#E2E8F0]">
              About <span className="text-gradient-premium">Me</span>
            </h2>
            <div className="mt-4 h-2 w-20 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#1E3A8A] to-[#FACC15]">
              <div className={`h-full w-10 rounded-full bg-[#FACC15] transition-all duration-1000 ${isMounted && isVisible ? 'animate-fade-in delay-300' : ''}`} />
            </div>
          </div>

          <div className={`mt-6 sm:mt-8 space-y-5 sm:space-y-6 font-inter text-base sm:text-lg md:text-xl leading-7 sm:leading-8 md:leading-9 text-[#94A3B8] ${isMounted && isVisible ? 'animate-fade-in-up delay-200' : ''}`}>
            <p className="font-medium">
              With 8+ years of elite experience in strategic data analysis and business intelligence,
              I partner with premium organizations to unlock transformational insights from their
              most complex datasets. My approach combines cutting-edge methodologies with
              executive-level strategic thinking.
            </p>
            <p className="font-medium">
              I specialize in predictive analytics, advanced statistical modeling, and creating
              premium dashboard experiences that empower C-suite executives to make confident,
              data-driven decisions. Every engagement delivers measurable ROI and sustainable
              competitive advantage.
            </p>
          </div>

          <ul className={`mt-10 space-y-5 ${isMounted && isVisible ? 'animate-fade-in-up delay-400' : ''}`}>
            {bullets.map((text, index) => (
              <li key={text} className={`flex items-start gap-4 text-base sm:text-lg text-[#E2E8F0] leading-7 sm:leading-8 ${isMounted && isVisible ? 'animate-fade-in-left' : ''}`} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <span className="mt-1 inline-grid place-items-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] p-1">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </span>
                <span className="font-inter font-medium text-[#94A3B8]">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
