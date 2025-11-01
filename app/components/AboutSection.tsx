"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver();
  const bullets = [
    "Expert in SQL, Python, R, and statistical modeling",
    "Advanced proficiency with Tableau, Power BI, and visualization",
    "Certified in business analytics and machine learning",
    "Track record of 50+ successful data projects",
  ];

  return (
    <section id="about" className="py-12 md:py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
        {/* Left: Image card with soft glow */}
        <div className={`relative ${isVisible ? 'animate-fade-in-left' : ''}`}>
          <div className="absolute -inset-6 -z-10 rounded-[28px] bg-[#2563EB]/20 blur-2xl" />
          <div className="relative rounded-[28px] overflow-hidden bg-[#1F2937] shadow-xl ring-1 ring-gray-600/30 hover:shadow-2xl hover:ring-[#2563EB]/50 transition-all duration-500 hover:scale-105">
            <div className="relative aspect-4/3">
              <Image
                src="/about.jpeg"
                alt="Reviewing analytics charts on laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className={`${isVisible ? 'animate-fade-in-right delay-200' : ''}`}>
          <div className={`${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-[42px] lg:text-5xl font-extrabold tracking-tight text-[#F9FAFB]">
              About Me
            </h2>
            <div className="mt-3 h-1.5 w-16 rounded-full bg-[#374151]">
              <div className={`h-full w-8 rounded-full bg-[#2563EB] transition-all duration-1000 ${isVisible ? 'animate-fade-in delay-300' : ''}`} />
            </div>
          </div>

          <div className={`mt-4 sm:mt-6 space-y-4 sm:space-y-5 text-sm sm:text-base md:text-[17px] leading-6 sm:leading-7 md:leading-8 text-[#D1D5DB] ${isVisible ? 'animate-fade-in-up delay-200' : ''}`}>
            <p>
              With 8+ years of experience in data analysis and business intelligence,
              I&apos;ve helped organizations across industries unlock the true value of their
              data. My passion is solving complex problems through data-driven methodologies
              and creating visualizations that tell compelling stories.
            </p>
            <p>
              I specialize in predictive modeling, statistical analysis, and building
              dashboards that empower teams to make confident, informed decisions.
              Every project I undertake is driven by a commitment to accuracy, clarity,
              and measurable business impact.
            </p>
          </div>

          <ul className={`mt-8 space-y-4 ${isVisible ? 'animate-fade-in-up delay-400' : ''}`}>
            {bullets.map((text, index) => (
              <li key={text} className={`flex items-start gap-3 text-sm sm:text-base text-[#F9FAFB] leading-6 sm:leading-7 ${isVisible ? 'animate-fade-in-left' : ''}`} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <span className="mt-1 inline-grid place-items-center rounded-full text-[#2563EB]">
                  <CheckCircle2 className="h-5 w-5 text-[#2563EB]" />
                </span>
                <span className="text-[#D1D5DB]">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
