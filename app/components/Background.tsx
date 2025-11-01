export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Premium deep navy base */}
      <div className="absolute inset-0 bg-[#0F172A]" />

      {/* Data-themed grid pattern with premium feel */}
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(1400px_700px_at_50%_25%,black,transparent_85%)]" />

      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/20 via-transparent to-[#3B82F6]/10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#0F172A] to-[#1E293B]/30" />

      {/* Sophisticated accent glows */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/8 blur-3xl animate-pulse" />
      <div className="absolute top-[30%] -right-40 h-96 w-96 rounded-full bg-[#1E3A8A]/15 blur-3xl" />
      <div className="absolute -bottom-32 left-[55%] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#3B82F6]/10 blur-3xl" />
      
      {/* Golden accent hint */}
      <div className="absolute top-[60%] right-[15%] h-32 w-32 rounded-full bg-[#FACC15]/5 blur-2xl" />

      {/* Professional vignette */}
      <div className="absolute inset-0 [background:radial-gradient(1400px_500px_at_50%_0%,rgba(15,23,42,0.85),transparent_75%),radial-gradient(1400px_600px_at_50%_100%,rgba(15,23,42,0.85),transparent_75%)]" />
    </div>
  );
}
