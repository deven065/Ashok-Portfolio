import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft, BarChart3 } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-24 md:pt-28 flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10 via-transparent to-[#3B82F6]/5"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image Section */}
          <div className="hidden md:flex justify-center animate-fade-in-left">
            <div className="relative glass-card rounded-3xl shadow-premium w-[280px] xs:w-[320px] sm:w-[340px] md:w-[380px] lg:w-[400px] overflow-hidden ring-2 ring-[#3B82F6]/20 hover:shadow-premium-hover hover:ring-[#3B82F6]/40 transition-all duration-500 hover:scale-[1.02]">
              {/* Image */}
              <div className="relative w-full h-80 xs:h-[380px] sm:h-[420px] md:h-[440px]">
                <Image
                  src="/about.jpeg"
                  alt="Ashok Choudhary - Data Analyst"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Premium overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/60 via-transparent to-transparent"></div>
              </div>

              {/* PREMIUM STATS GRID */}
              <div className="grid grid-cols-2">
                <div className="glass-surface text-center py-4 sm:py-5 hover:bg-[#3B82F6]/20 transition-all duration-300 group">
                  <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#E2E8F0] group-hover:text-[#FACC15] transition-colors duration-300">10+</p>
                  <p className="text-xs sm:text-sm text-[#94A3B8] font-medium">Projects</p>
                </div>
                <div className="glass-surface text-center py-4 sm:py-5 hover:bg-[#3B82F6]/20 transition-all duration-300 group">
                  <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#E2E8F0] group-hover:text-[#FACC15] transition-colors duration-300">1+</p>
                  <p className="text-xs sm:text-sm text-[#94A3B8] font-medium">Years Experience</p>
                </div>
                <div className="glass-surface text-center py-4 sm:py-5 hover:bg-[#3B82F6]/20 transition-all duration-300 group">
                  <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#E2E8F0] group-hover:text-[#FACC15] transition-colors duration-300">100%</p>
                  <p className="text-xs sm:text-sm text-[#94A3B8] font-medium">Commitment</p>
                </div>
                <div className="glass-surface text-center py-4 sm:py-5 hover:bg-[#3B82F6]/20 transition-all duration-300 group">
                  <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#E2E8F0] group-hover:text-[#FACC15] transition-colors duration-300">5+</p>
                  <p className="text-xs sm:text-sm text-[#94A3B8] font-medium">Tools Mastered</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Content Section */}
          <div className="text-center md:text-left space-y-8">
            {/* Logo Badge */}
            <div className="inline-flex items-center gap-2 glass-surface text-[#3B82F6] px-6 py-3 rounded-full font-medium text-sm shadow-premium mb-8 border border-[#3B82F6]/30 animate-fade-in-up">
              <BarChart3 size={18} className="transition-transform duration-300" />
              <span>404 Error</span>
            </div>

            {/* Large 404 Number */}
            <div className="animate-fade-in-up delay-100">
              <h1 className="font-poppins text-[120px] md:text-[150px] lg:text-[180px] font-extrabold leading-none mb-4">
                <span className="text-gradient-premium">404</span>
              </h1>
            </div>

            {/* Error Message */}
            <div className="animate-fade-in-up delay-200 space-y-4 mb-8">
              <h2 className="font-poppins text-2xl md:text-4xl font-bold text-[#E2E8F0] mb-4">
                Page Not Found
              </h2>
              <p className="font-inter text-base md:text-lg text-[#94A3B8] max-w-xl mx-auto md:mx-0 leading-relaxed">
                The page you're looking for doesn't exist or has been moved. 
                Let's get you back on track.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in-up delay-300">
              <Link
                href="/"
                className="btn-premium font-semibold px-8 py-4 rounded-xl shadow-premium hover:shadow-premium-hover text-white text-center inline-flex items-center gap-3 transition-all duration-300 group"
              >
                <Home size={20} className="transition-transform duration-300 group-hover:scale-110" />
                <span>Go Home</span>
              </Link>
              <Link
                href="/#portfolio"
                className="btn-premium-outline font-semibold px-8 py-4 rounded-xl text-center inline-flex items-center gap-3 transition-all duration-300 group"
              >
                <ArrowLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1" />
                <span>View Portfolio</span>
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto md:mx-0 animate-fade-in-up delay-400">
              <div className="glass-surface rounded-xl p-4 text-center hover:bg-[#3B82F6]/20 transition-all duration-300 group">
                <p className="text-2xl font-bold text-[#E2E8F0] group-hover:text-[#FACC15] transition-colors duration-300">404</p>
                <p className="text-xs text-[#94A3B8] font-medium mt-1">Error Code</p>
              </div>
              <div className="glass-surface rounded-xl p-4 text-center hover:bg-[#3B82F6]/20 transition-all duration-300 group">
                <p className="text-2xl font-bold text-[#E2E8F0] group-hover:text-[#FACC15] transition-colors duration-300">!</p>
                <p className="text-xs text-[#94A3B8] font-medium mt-1">Oops</p>
              </div>
              <div className="glass-surface rounded-xl p-4 text-center hover:bg-[#3B82F6]/20 transition-all duration-300 group">
                <p className="text-2xl font-bold text-[#E2E8F0] group-hover:text-[#FACC15] transition-colors duration-300">?</p>
                <p className="text-xs text-[#94A3B8] font-medium mt-1">Help</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 animate-fade-in-up delay-500">
              <p className="text-sm text-[#94A3B8] mb-4 font-medium">Quick Links:</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <Link href="/#about" className="text-sm text-[#3B82F6] hover:text-[#60A5FA] hover:underline transition-colors duration-300">
                  About
                </Link>
                <Link href="/#experience" className="text-sm text-[#3B82F6] hover:text-[#60A5FA] hover:underline transition-colors duration-300">
                  Experience
                </Link>
                <Link href="/#portfolio" className="text-sm text-[#3B82F6] hover:text-[#60A5FA] hover:underline transition-colors duration-300">
                  Portfolio
                </Link>
                <Link href="/#skills" className="text-sm text-[#3B82F6] hover:text-[#60A5FA] hover:underline transition-colors duration-300">
                  Skills
                </Link>
                <Link href="/#contact" className="text-sm text-[#3B82F6] hover:text-[#60A5FA] hover:underline transition-colors duration-300">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
