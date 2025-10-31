export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base vertical wash */}
      <div className="absolute inset-0 bg-linear-to-b from-[#f7fbff] via-white to-[#f7fbff]" />

      {/* Soft grid pattern with radial fade mask */}
  <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,rgba(15,36,84,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,36,84,0.06)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(1200px_600px_at_50%_20%,black,transparent_80%)]" />

      {/* Accent glow blobs */}
      <div className="absolute -top-24 -left-24 h-[380px] w-[380px] rounded-full bg-[#60a5fa]/30 blur-3xl" />
  <div className="absolute top-[22%] -right-28 h-80 w-80 rounded-full bg-[#f59e0b]/25 blur-3xl" />
      <div className="absolute -bottom-24 left-[60%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#6366f1]/20 blur-3xl" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 [background:radial-gradient(1200px_400px_at_50%_0%,rgba(255,255,255,0.85),transparent_70%),radial-gradient(1200px_500px_at_50%_100%,rgba(255,255,255,0.85),transparent_70%)]" />
    </div>
  );
}
