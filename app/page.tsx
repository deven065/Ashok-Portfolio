import Image from "next/image";
import Link from "next/link";
import { BarChart3, PieChart, Database, Brain, Mail, Linkedin } from "lucide-react";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 md:pt-28">
      {/* HERO */}
      <section id="home" className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-surface text-[#3B82F6] px-6 py-3 rounded-full font-medium text-sm shadow-premium animate-fade-in-up border border-[#3B82F6]/30">
              <span>✨</span>
              <span>Hi, I'm Ashok Choudhary</span>
            </div>

            {/* Heading */}
            <h1 className="font-poppins text-[32px] xs:text-[40px] sm:text-[52px] md:text-[64px] lg:text-[68px] leading-tight md:leading-[1.08] font-extrabold tracking-tight">
              <span className="block text-[#E2E8F0] animate-fade-in-up delay-100">Transforming</span>
              <span className="block text-[#E2E8F0] animate-fade-in-up delay-200">Data Into</span>
              <span className="block text-gradient-premium animate-fade-in-up delay-300">
                Strategic Insights
              </span>
            </h1>

            {/* Paragraph */}
            <p className="font-inter text-sm sm:text-base md:text-lg text-[#94A3B8] max-w-xl leading-relaxed animate-fade-in-up delay-400 font-medium">
              Elite Data Analyst specializing in transforming complex datasets into
              strategic business intelligence. With expertise in advanced analytics,
              premium visualizations, and statistical modeling, I deliver insights
              that drive exceptional business growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-4 sm:gap-5 pt-4 animate-fade-in-up delay-500">
              <Link
                href="#portfolio"
                className="btn-premium font-semibold px-8 sm:px-10 py-4 rounded-xl shadow-premium hover:shadow-premium-hover text-white text-center xs:text-left text-sm sm:text-base transition-all duration-300"
              >
                View Premium Work →
              </Link>
              <Link
                href="#contact"
                className="btn-premium-outline font-semibold px-8 sm:px-10 py-4 rounded-xl text-center xs:text-left text-sm sm:text-base transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE CARD */}
          <div className="flex justify-center md:justify-end animate-fade-in-right delay-300">
            <div className="relative glass-card rounded-3xl shadow-premium w-[280px] xs:w-[320px] sm:w-[340px] md:w-[380px] lg:w-[400px] overflow-hidden ring-2 ring-[#3B82F6]/20 hover:shadow-premium-hover hover:ring-[#3B82F6]/40 transition-all duration-500 hover:scale-[1.02]">
              {/* Image */}
              <div className="relative w-full h-80 xs:h-[380px] sm:h-[420px] md:h-[440px]">
                <Image
                  src="/Ashok.jpg"
                  alt="Ashok — Premium Data Analyst"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                {/* Premium overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/60 via-transparent to-transparent"></div>
              </div>

              {/* PREMIUM STATS GRID */}
              <div className="grid grid-cols-2">
                <div className="glass-surface text-center py-4 sm:py-5 hover:bg-[#3B82F6]/20 transition-all duration-300 group">
                  <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#E2E8F0] group-hover:text-[#FACC15] transition-colors duration-300">50+</p>
                  <p className="text-xs sm:text-sm text-[#94A3B8] font-medium">Elite Projects</p>
                </div>
                <div className="glass-surface text-center py-4 sm:py-5 hover:bg-[#3B82F6]/20 transition-all duration-300 group">
                  <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#E2E8F0] group-hover:text-[#FACC15] transition-colors duration-300">8+</p>
                  <p className="text-xs sm:text-sm text-[#94A3B8] font-medium">Years Excellence</p>
                </div>
                <div className="glass-surface text-center py-4 sm:py-5 hover:bg-[#3B82F6]/20 transition-all duration-300 group">
                  <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#E2E8F0] group-hover:text-[#FACC15] transition-colors duration-300">100%</p>
                  <p className="text-xs sm:text-sm text-[#94A3B8] font-medium">Client Success</p>
                </div>
                <div className="glass-surface text-center py-4 sm:py-5 hover:bg-[#3B82F6]/20 transition-all duration-300 group">
                  <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#E2E8F0] group-hover:text-[#FACC15] transition-colors duration-300">$2M+</p>
                  <p className="text-xs sm:text-sm text-[#94A3B8] font-medium">ROI Generated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT (exact-match layout) */}
      <AboutSection />

      {/* PREMIUM EXPERTISE */}
      <section id="skills" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-[#E2E8F0] animate-fade-in-up">Premium Expertise</h2>
            <p className="font-inter text-base text-[#94A3B8] mt-4 animate-fade-in-up delay-100 max-w-2xl mx-auto">Delivering exceptional results through cutting-edge analytics and strategic insights</p>
          </div>
          <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Strategic Analytics",
                desc: "Advanced KPIs, cohort analysis, predictive forecasting.",
                Icon: BarChart3,
              },
              {
                title: "Premium Visualization",
                desc: "Executive dashboards with crystal-clear insights.",
                Icon: PieChart,
              },
              { title: "Data Engineering", desc: "Enterprise ETL, optimization, architecture.", Icon: Database },
              { title: "AI & Experimentation", desc: "ML models, A/B testing, statistical analysis.", Icon: Brain },
            ].map(({ title, desc, Icon }, index) => (
              <div
                key={title}
                className={`glass-card rounded-2xl p-6 shadow-premium hover:shadow-premium-hover hover:scale-[1.02] transition-all duration-500 animate-fade-in-up group`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-poppins font-bold text-[#E2E8F0] text-lg group-hover:text-[#3B82F6] transition-colors duration-300">{title}</h3>
                <p className="mt-2 font-inter text-sm text-[#94A3B8] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section id="portfolio" className="py-12 md:py-16 bg-[#1F2937]/30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F9FAFB]">Featured Projects</h2>
              <p className="text-sm text-[#D1D5DB] mt-2">A snapshot of recent work</p>
            </div>
            <Link href="#contact" className="text-sm font-medium text-[#2563EB] hover:text-[#60A5FA] hover:underline whitespace-nowrap transition-colors duration-300">
              Start a project →
            </Link>
          </div>
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Sales Performance Dashboard", img: "/window.svg" },
              { title: "Customer Segmentation", img: "/globe.svg" },
              { title: "Supply Chain Insights", img: "/file.svg" },
            ].map((p, index) => (
              <div
                key={p.title}
                className={`group rounded-xl border border-gray-600/30 bg-[#1F2937] overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 hover:border-[#2563EB]/50 transition-all duration-500 animate-fade-in-up`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="relative h-40 bg-[#374151] overflow-hidden">
                  <Image src={p.img} alt="project cover" fill className="object-contain p-6 transition-transform duration-500 group-hover:scale-110 filter brightness-0 invert opacity-70 group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#F9FAFB] group-hover:text-[#2563EB] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#D1D5DB]">Interactive visuals, clear KPIs, actionable insights.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/portfolio" className="text-sm font-medium text-[#2563EB] hover:text-[#60A5FA] hover:underline transition-colors duration-300">
              View full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#F9FAFB]">Experience</h2>
          <p className="text-sm text-[#D1D5DB] mt-2">Highlights from my journey</p>
          <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                role: "Senior Data Analyst",
                org: "Acme Corp",
                time: "2021 — Present",
                text: "Led analytics initiatives improving conversion by 12% via funnel optimization and experimentation.",
              },
              {
                role: "Data Analyst",
                org: "Globex",
                time: "2018 — 2021",
                text: "Built BI dashboards for ops and finance; reduced reporting time by 70%.",
              },
            ].map((e, index) => (
              <div key={e.role} className={`rounded-xl border border-gray-600/30 bg-[#1F2937] p-5 shadow-sm hover:shadow-lg hover:scale-105 hover:border-[#2563EB]/50 transition-all duration-500 animate-fade-in-up`} style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-[#F9FAFB]">{e.role}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-[#374151] text-[#D1D5DB] border border-gray-600/30 transition-colors duration-300 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB]">
                    {e.time}
                  </span>
                </div>
                <p className="text-sm text-[#D1D5DB] mt-1">{e.org}</p>
                <p className="text-sm text-[#D1D5DB] mt-3 leading-relaxed">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM CONTACT */}
      <section id="contact" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10 via-transparent to-[#3B82F6]/5"></div>
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 items-start lg:items-center">
          <div className="lg:col-span-2">
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#E2E8F0] animate-fade-in-up">Ready to Transform Your Data?</h2>
            <p className="font-inter text-base sm:text-lg text-[#94A3B8] mt-4 animate-fade-in-up delay-100 leading-relaxed">
              Partner with me to unlock strategic insights and drive exceptional business growth through premium data analytics solutions.
            </p>
            <div className="mt-8 flex flex-col xs:flex-row flex-wrap gap-4 animate-fade-in-up delay-200">
              <a
                href="mailto:ashokchoudhary1085@gmail.com"
                className="btn-premium inline-flex items-center justify-center xs:justify-start gap-3 px-8 py-4 rounded-xl shadow-premium hover:shadow-premium-hover text-white font-semibold group text-sm sm:text-base"
              >
                <Mail size={20} className="transition-transform duration-300 group-hover:rotate-12" /> 
                <span>Start Premium Project</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ashokchoudhary13/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-outline inline-flex items-center justify-center xs:justify-start gap-3 px-8 py-4 rounded-xl font-semibold group text-sm sm:text-base"
              >
                <Linkedin size={20} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" /> 
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-1 animate-fade-in-right delay-300">
            <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:scale-[1.02]">
              <h3 className="font-poppins font-bold text-[#E2E8F0] text-lg sm:text-xl">Premium Availability</h3>
              <p className="font-inter text-sm text-[#94A3B8] mt-3 leading-relaxed">Accepting select high-impact projects and strategic partnerships.</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 text-center">
                <div className="glass-surface rounded-xl py-4 hover:bg-[#3B82F6]/10 transition-all duration-300 hover:scale-105 group">
                  <p className="text-xs text-[#94A3B8] group-hover:text-[#3B82F6] transition-colors duration-300 font-medium">Response Time</p>
                  <p className="font-bold text-[#E2E8F0] text-lg mt-1 group-hover:text-[#FACC15] transition-colors duration-300">≤ 12 hrs</p>
                </div>
                <div className="glass-surface rounded-xl py-4 hover:bg-[#FACC15]/10 transition-all duration-300 hover:scale-105 group">
                  <p className="text-xs text-[#94A3B8] group-hover:text-[#FACC15] transition-colors duration-300 font-medium">Timezone</p>
                  <p className="font-bold text-[#E2E8F0] text-lg mt-1 group-hover:text-[#FACC15] transition-colors duration-300">IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
