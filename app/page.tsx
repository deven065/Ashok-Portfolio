import Image from "next/image";
import Link from "next/link";
import { BarChart3, PieChart, Database, Brain, Mail, Linkedin } from "lucide-react";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 md:pt-28 bg-[#111827] text-[#F9FAFB]">
      {/* HERO */}
      <section id="home" className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2563EB]/20 text-[#2563EB] px-5 py-2 rounded-full font-medium text-sm shadow-sm animate-fade-in-up border border-[#2563EB]/30">
              <span>✨</span>
              <span>Data-Driven Excellence</span>
            </div>

            {/* Heading (matches provided visual) */}
            <h1 className="text-[32px] xs:text-[40px] sm:text-[52px] md:text-[64px] lg:text-[68px] leading-tight md:leading-[1.08] font-extrabold tracking-tight text-[#F9FAFB]">
              <span className="block animate-fade-in-up delay-100">Transforming</span>
              <span className="block animate-fade-in-up delay-200">Data Into</span>
              <span className="block bg-[linear-gradient(90deg,#2563EB_0%,#3B82F6_50%,#60A5FA_100%)] bg-clip-text text-transparent animate-fade-in-up delay-300">
                Powerful Insights
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-[#D1D5DB] max-w-xl leading-relaxed animate-fade-in-up delay-400">
              I&apos;m a Data Analyst specializing in turning complex datasets into
              clear, actionable business intelligence. With expertise in advanced
              analytics, visualization, and statistical modeling, I help
              organizations make smarter decisions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 pt-2 animate-fade-in-up delay-500">
              <Link
                href="#portfolio"
                className="btn-primary-gradient btn-animated text-white font-semibold px-6 sm:px-7 py-3 rounded-md hover:scale-105 hover:-translate-y-1 shadow-lg text-center xs:text-left text-sm sm:text-base"
              >
                View My Work →
              </Link>
              <Link
                href="#contact"
                className="btn-secondary-gradient btn-get-in-touch-enhanced text-[#0f2454] font-semibold px-6 sm:px-7 py-3 rounded-md hover:text-white shadow-md group relative transition-all duration-300 text-center xs:text-left text-sm sm:text-base"
              >
                <span className="relative z-10 transition-colors duration-300">Get In Touch</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE CARD */}
          <div className="flex justify-center md:justify-end animate-fade-in-right delay-300">
            <div className="relative bg-[#1F2937] rounded-2xl sm:rounded-3xl shadow-xl w-[280px] xs:w-[320px] sm:w-[340px] md:w-[380px] lg:w-[400px] overflow-hidden ring-1 ring-[#2563EB]/20 hover:shadow-2xl hover:ring-[#2563EB]/40 transition-all duration-500 hover:scale-105">
              {/* Image */}
              <div className="relative w-full h-80 xs:h-[380px] sm:h-[420px] md:h-[440px]">
                <Image
                  src="/Ashok.jpg"
                  alt="Ashok — Data Analyst portrait"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>

              {/* STATS GRID */}
              <div className="grid grid-cols-2">
                <div className="bg-[#374151] text-center py-3 sm:py-4 md:py-5 hover:bg-[#2563EB] transition-colors duration-300">
                  <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#F9FAFB]">50+</p>
                  <p className="text-xs sm:text-sm text-[#D1D5DB]">Projects</p>
                </div>
                <div className="bg-[#374151] text-center py-3 sm:py-4 md:py-5 hover:bg-[#2563EB] transition-colors duration-300">
                  <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#F9FAFB]">8+</p>
                  <p className="text-xs sm:text-sm text-[#D1D5DB]">Years</p>
                </div>
                <div className="bg-[#374151] text-center py-3 sm:py-4 md:py-5 hover:bg-[#2563EB] transition-colors duration-300">
                  <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#F9FAFB]">100%</p>
                  <p className="text-xs sm:text-sm text-[#D1D5DB]">Client Sat.</p>
                </div>
                <div className="bg-[#374151] text-center py-3 sm:py-4 md:py-5 hover:bg-[#2563EB] transition-colors duration-300">
                  <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#F9FAFB]">$2M+</p>
                  <p className="text-xs sm:text-sm text-[#D1D5DB]">Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT (exact-match layout) */}
      <AboutSection />

      {/* EXPERTISE / SKILLS */}
      <section id="skills" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#F9FAFB] animate-fade-in-up">Expertise</h2>
          <p className="text-sm text-[#D1D5DB] mt-2 animate-fade-in-up delay-100">What I do best</p>
          <div className="mt-6 sm:mt-8 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Analytics & BI",
                desc: "KPIs, cohort analysis, retention, forecasting.",
                Icon: BarChart3,
              },
              {
                title: "Data Visualization",
                desc: "Power BI/Tableau dashboards with clarity.",
                Icon: PieChart,
              },
              { title: "SQL & Pipelines", desc: "ETL, modeling, optimization.", Icon: Database },
              { title: "ML & Experiments", desc: "Segmentation, A/B tests, uplift.", Icon: Brain },
            ].map(({ title, desc, Icon }, index) => (
              <div
                key={title}
                className={`rounded-xl border border-gray-600/30 bg-[#1F2937] p-5 shadow-sm hover:shadow-xl hover:scale-105 hover:border-[#2563EB]/50 transition-all duration-500 animate-fade-in-up`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="h-10 w-10 grid place-items-center rounded-lg bg-[#2563EB]/20 text-[#2563EB] transition-all duration-300 hover:scale-110 hover:bg-[#2563EB] hover:text-white">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-semibold text-[#F9FAFB]">{title}</h3>
                <p className="mt-1.5 text-sm text-[#D1D5DB]">{desc}</p>
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

      {/* CONTACT */}
      <section id="contact" className="py-12 md:py-16 bg-gradient-to-r from-[#2563EB]/10 to-[#3b82f6]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-start lg:items-center">
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9FAFB] animate-fade-in-up">Let&apos;s collaborate</h2>
            <p className="text-sm sm:text-base text-[#D1D5DB] mt-2 animate-fade-in-up delay-100">
              Have a project in mind or want to explore how data can drive your business forward? I&apos;d love to chat.
            </p>
            <div className="mt-6 flex flex-col xs:flex-row flex-wrap gap-3 animate-fade-in-up delay-200">
              <a
                href="mailto:ashokchoudhary1085@gmail.com"
                className="inline-flex items-center justify-center xs:justify-start gap-2 bg-[#2563EB] text-white px-5 py-3 rounded-md hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg group text-sm sm:text-base"
              >
                <Mail size={18} className="transition-transform duration-300 group-hover:rotate-12" /> 
                <span>Email me</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ashokchoudhary13/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center xs:justify-start gap-2 bg-[#1F2937] text-[#2563EB] border-2 border-[#2563EB] px-5 py-3 rounded-md hover:bg-[#2563EB] hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg group text-sm sm:text-base"
              >
                <Linkedin size={18} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" /> 
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-1 animate-fade-in-right delay-300">
            <div className="rounded-2xl border border-gray-600/30 bg-[#1F2937] p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#2563EB]/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1">
              <h3 className="font-semibold text-[#F9FAFB] text-base sm:text-lg">Availability</h3>
              <p className="text-sm text-[#D1D5DB] mt-2">Open to freelance and full-time roles.</p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3 text-center">
                <div className="rounded-lg bg-[#374151] py-2 sm:py-3 hover:bg-[#2563EB] transition-all duration-300 hover:scale-105 group">
                  <p className="text-xs text-[#D1D5DB] group-hover:text-white transition-colors duration-300">Response time</p>
                  <p className="font-semibold text-[#F9FAFB] text-sm group-hover:text-white transition-colors duration-300">~24 hrs</p>
                </div>
                <div className="rounded-lg bg-[#374151] py-2 sm:py-3 hover:bg-[#2563EB]/20 transition-all duration-300 hover:scale-105">
                  <p className="text-xs text-[#D1D5DB]">Timezone</p>
                  <p className="font-semibold text-[#F9FAFB] text-sm">IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
