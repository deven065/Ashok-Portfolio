export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} <span className="font-medium text-gray-900">Ashok</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#portfolio" className="hover:text-[#2563EB] transition-colors duration-300">Portfolio</a>
          <a href="#skills" className="hover:text-[#2563EB] transition-colors duration-300">Skills</a>
          <a href="#contact" className="hover:text-[#2563EB] transition-colors duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}
