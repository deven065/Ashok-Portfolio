export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dark base background */}
      <div className="absolute inset-0 bg-[#111827]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(37,99,235,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.1)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(1200px_600px_at_50%_20%,black,transparent_80%)]" />

      {/* Accent glow blobs */}
      <div className="absolute -top-24 -left-24 h-[380px] w-[380px] rounded-full bg-[#2563EB]/10 blur-3xl" />
      <div className="absolute top-[22%] -right-28 h-80 w-80 rounded-full bg-[#2563EB]/8 blur-3xl" />
      <div className="absolute -bottom-24 left-[60%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#2563EB]/12 blur-3xl" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 [background:radial-gradient(1200px_400px_at_50%_0%,rgba(17,24,39,0.8),transparent_70%),radial-gradient(1200px_500px_at_50%_100%,rgba(17,24,39,0.8),transparent_70%)]" />
    </div>
  );
}
