import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-[#3B82F6]/20 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/50 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-poppins text-xl font-bold text-[#E2E8F0]">Ashok Choudhary</h3>
            <p className="font-inter text-sm text-[#94A3B8] leading-relaxed">
              Data Analyst passionate about transforming data into actionable insights through analytics and visualization.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-poppins text-base font-semibold text-[#E2E8F0]">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link href="#home" className="font-inter text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300 w-fit">
                Home
              </Link>
              <Link href="#about" className="font-inter text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300 w-fit">
                About
              </Link>
              <Link href="#portfolio" className="font-inter text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300 w-fit">
                Portfolio
              </Link>
              <Link href="#skills" className="font-inter text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300 w-fit">
                Skills
              </Link>
              <Link href="#contact" className="font-inter text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300 w-fit">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="font-poppins text-base font-semibold text-[#E2E8F0]">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ashokchoudhary1085@gmail.com"
                className="inline-flex items-center gap-3 font-inter text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300 group w-fit"
              >
                <Mail size={18} className="transition-transform duration-300 group-hover:rotate-12" />
                <span>ashokchoudhary1085@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ashokchoudhary13/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-inter text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300 group w-fit"
              >
                <Linkedin size={18} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/ashokchoudhary13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-inter text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300 group w-fit"
              >
                <Github size={18} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3B82F6]/20 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-sm text-[#94A3B8]">
            © {currentYear} <span className="font-medium text-[#E2E8F0]">Ashok Choudhary</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#portfolio" className="font-inter text-xs text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300">
              Portfolio
            </Link>
            <Link href="/portfolio" className="font-inter text-xs text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300">
              Full Portfolio
            </Link>
            <a
              href="/Ashok_Choudhary_Resume.pdf"
              download="Ashok_Choudhary_Resume.pdf"
              className="font-inter text-xs text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
