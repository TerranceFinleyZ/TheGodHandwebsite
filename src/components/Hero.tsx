export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/tghback.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 z-10 pointer-events-none" />
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-5 z-20"
        style={{
          backgroundImage:
            "linear-gradient(#dc2626 1px, transparent 1px), linear-gradient(90deg, #dc2626 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Large faint text */}
      <span className="absolute select-none text-[18vw] font-black text-[#dc2626]/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap uppercase tracking-widest pointer-events-none z-30">
        TGH
      </span>
      {/* Content */}
      <div className="relative z-40 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#dc2626]/10 border border-[#dc2626]/30 text-[#dc2626] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#dc2626] rounded-full animate-pulse" />
          Men&apos;s Health &amp; Brotherhood
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#f5f0eb] leading-tight mb-6">
          The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc2626] to-[#ef4444]">
            God Hand
          </span>
        </h1>

        <p className="text-[#f5f0eb]/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join me in building our own Dream Con. Come stream with me as we play mind‑stimulating games for our viewers. Let’s grow like RDC — and maybe, just maybe, we can change the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.youtube.com/@TGH-m8u"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#dc2626] hover:bg-[#b91c1c] text-[#0d0d0d] font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#dc2626]/20 hover:shadow-[#dc2626]/40 hover:scale-105"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Watch on YouTube
          </a>
          <a
            href="/contact"
            className="flex items-center gap-2 border border-[#dc2626]/40 hover:border-[#dc2626] text-[#f5f0eb] hover:text-[#dc2626] font-semibold text-base px-8 py-4 rounded-full transition-all duration-300"
          >
            Join the Brotherhood
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { value: "50K+", label: "Subscribers" },
            { value: "200+", label: "Videos" },
            { value: "10K+", label: "Community" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[#dc2626] text-2xl font-black">{stat.value}</p>
              <p className="text-[#f5f0eb]/50 text-xs tracking-wide mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f5f0eb]/80">
        <span className="text-xs tracking-widest uppercase drop-shadow brightness-125">Scroll</span>
        <svg className="w-4 h-4 animate-bounce drop-shadow" fill="none" stroke="#fff" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
