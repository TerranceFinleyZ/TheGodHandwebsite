"use client";

import Image from "next/image";

const benefits = [
  "Weekly live streaming",
  "Exclusive members-only content",
  "Accountability partner",
  "Support & Grow social media platforms",
  "Video prodution & Script writting",
  "Organize and build large public events.",
];

const testimonials = [
  {
    quote: "Stop waiting for the perfect moment.\n\nStart moving toward your goals now.\n\nPeople talk about wanting success, but few actually take action.",
    name: "Mark Phillips",
    tag: "— From RDC",
  },
  {
    quote: "Most people talk about wanting success, but very few actually put in the work.\n\nYour future depends on the actions you take, not the excuses you make.",
    name: "Kai Cenat",
    tag: "— From AMP",
  },
  {
    quote: "No one will love you- choosing to love yourself makes you stronger, more confident, and more capable",
    name: "Duke Dennis",
    tag: "— From AMP",
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className="relative py-24 bg-[#111111] overflow-hidden"
    >
      {/* Background hand image */}
      
      <Image
        src="/hand.png"
        alt="Hand background"
        width={700}
        height={700}
        className="pointer-events-none select-none absolute z-0 opacity-10 w-[700px] max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
        priority
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-12 bg-[#dc2626]" />
          <span className="text-[#dc2626] text-xs font-semibold tracking-widest uppercase">Brotherhood</span>
        </div>
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#f5f0eb] leading-tight mb-4">
            Join <span className="text-[#dc2626]">TGH</span>
          </h2>
          <p className="text-[#f5f0eb]/50 text-lg max-w-2xl">
            Men thrive in community. And with your talent, your skills, your support, and your effort, I believe you would be the perfect addition to the team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Benefits */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8">
            <h3 className="text-[#f5f0eb] font-bold text-2xl mb-6">The Mission.</h3>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#dc2626]/20 border border-[#dc2626]/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#dc2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[#f5f0eb]/80 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="mt-8 w-full flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-[#0d0d0d] font-bold text-base px-6 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#dc2626]/20"
            >
              Join TGH
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Testimonials */}
          <div className="space-y-4">
            {testimonials.map((t) =>
              t.name === "Mark Phillips" ? (
                <a
                  key={t.name}
                  href="https://www.youtube.com/shorts/BZRoHBDUswo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 z-10 pointer-events-auto"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="flex items-start gap-1 text-[#dc2626] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#f5f0eb]/70 text-sm leading-relaxed mb-4 group-hover:underline">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#dc2626]/20 border border-[#dc2626]/30 flex items-center justify-center">
                      <span className="text-[#dc2626] text-xs font-bold">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-[#f5f0eb] text-sm font-semibold">{t.name}</p>
                      <p className="text-[#f5f0eb]/40 text-xs">{t.tag}</p>
                    </div>
                  </div>
                </a>
              ) : t.name === "Kai Cenat" ? (
                <a
                  key={t.name}
                  href="https://www.youtube.com/shorts/RCJ8CAfssY0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 z-10 pointer-events-auto"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="flex items-start gap-1 text-[#dc2626] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#f5f0eb]/70 text-sm leading-relaxed mb-4 group-hover:underline">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#dc2626]/20 border border-[#dc2626]/30 flex items-center justify-center">
                      <span className="text-[#dc2626] text-xs font-bold">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-[#f5f0eb] text-sm font-semibold">{t.name}</p>
                      <p className="text-[#f5f0eb]/40 text-xs">{t.tag}</p>
                    </div>
                  </div>
                </a>
              ) : t.name === "Duke Dennis" ? (
                <a
                  key={t.name}
                  href="https://www.youtube.com/shorts/HecpzacrdCA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 z-10 pointer-events-auto"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="flex items-start gap-1 text-[#dc2626] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#f5f0eb]/70 text-sm leading-relaxed mb-4 group-hover:underline">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#dc2626]/20 border border-[#dc2626]/30 flex items-center justify-center">
                      <span className="text-[#dc2626] text-xs font-bold">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-[#f5f0eb] text-sm font-semibold">{t.name}</p>
                      <p className="text-[#f5f0eb]/40 text-xs">{t.tag}</p>
                    </div>
                  </div>
                </a>
              ) : null
            )}
          </div>
        </div>

        {/* Newsletter */}
        <div id="contact" className="bg-gradient-to-br from-[#1a0808] to-[#1a1a1a] border border-[#dc2626]/20 rounded-3xl p-8 sm:p-12 text-center">
          <span className="text-[#dc2626] text-xs font-semibold tracking-widest uppercase">Stay in the loop</span>
          <h3 className="text-3xl sm:text-4xl font-black text-[#f5f0eb] mt-3 mb-4">
            Show Your Support by Donating
          </h3>
          <p className="text-[#f5f0eb]/50 text-base mb-8 max-w-lg mx-auto">
            All donation will go into building and expaning our channel and the building up on ower own Comic Con
            and brotherhood.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.patreon.com/cw/TGH920?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-[#0d0d0d] font-bold text-sm px-6 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
            >
              Donate With Patreon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
