const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.5 17a3.5 3.5 0 01-3.5-3.5V13a5 5 0 015-5h8a5 5 0 015 5v.5A3.5 3.5 0 0117.5 17c-.828 0-1.5-.672-1.5-1.5S16.672 14 17.5 14s1.5.672 1.5 1.5M6.5 14A1.5 1.5 0 108 15.5 1.5 1.5 0 006.5 14zm0 0v.01" />
        <rect x="9" y="13" width="2" height="2" rx=".5" />
        <rect x="13" y="13" width="2" height="2" rx=".5" />
      </svg>
    ),
    title: "Lockdown Protical",
    description: "Join us as we play Lockdown Protical live on stream—sharing strategies, epic moments, and community fun as we tackle the game together!",
    url: "https://www.youtube.com/watch?v=lqArWtxNgT4&t=5701s",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.5 17a3.5 3.5 0 01-3.5-3.5V13a5 5 0 015-5h8a5 5 0 015 5v.5A3.5 3.5 0 0117.5 17c-.828 0-1.5-.672-1.5-1.5S16.672 14 17.5 14s1.5.672 1.5 1.5M6.5 14A1.5 1.5 0 108 15.5 1.5 1.5 0 006.5 14zm0 0v.01" />
        <rect x="9" y="13" width="2" height="2" rx=".5" />
        <rect x="13" y="13" width="2" height="2" rx=".5" />
      </svg>
    ),
    title: "Minecraft",
    description: "Organizing community events and immersive simulations to strengthen our community.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.5 17a3.5 3.5 0 01-3.5-3.5V13a5 5 0 015-5h8a5 5 0 015 5v.5A3.5 3.5 0 0117.5 17c-.828 0-1.5-.672-1.5-1.5S16.672 14 17.5 14s1.5.672 1.5 1.5M6.5 14A1.5 1.5 0 108 15.5 1.5 1.5 0 006.5 14zm0 0v.01" />
        <rect x="9" y="13" width="2" height="2" rx=".5" />
        <rect x="13" y="13" width="2" height="2" rx=".5" />
      </svg>
    ),
    title: "Marvel Rivals",
    description: "It's wild to see so many people tuning in to watch us play Marvel Rivals—every stream is a new adventure with the community cheering us on!",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.5 17a3.5 3.5 0 01-3.5-3.5V13a5 5 0 015-5h8a5 5 0 015 5v.5A3.5 3.5 0 0117.5 17c-.828 0-1.5-.672-1.5-1.5S16.672 14 17.5 14s1.5.672 1.5 1.5M6.5 14A1.5 1.5 0 108 15.5 1.5 1.5 0 006.5 14zm0 0v.01" />
        <rect x="9" y="13" width="2" height="2" rx=".5" />
        <rect x="13" y="13" width="2" height="2" rx=".5" />
      </svg>
    ),
    title: "Elden Ring Nightreign",
    description: "Elden Ring Nightreign is brutally challenging—every boss fight and new area pushes us to our limits. Join us as we try to conquer one of the hardest games out there!",
    url: "https://www.youtube.com/watch?v=2_kUZf1-s-U",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-12 bg-[#dc2626]" />
          <span className="text-[#dc2626] text-xs font-semibold tracking-widest uppercase">Our Mission</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#f5f0eb] leading-tight mb-6">
              Men Are Built to{" "}
              <span className="text-[#dc2626]">Thrive</span> —<br />
              Not Just Survive
            </h2>
            <p className="text-[#f5f0eb]/60 text-base leading-relaxed mb-6">
              I remember that cold, empty feeling — sitting alone, scrolling for hours, watching other friend groups laugh, build, create, and chase a future together while I felt stuck in place. It was like life was happening everywhere except where I was.
            </p>
            <p className="text-[#f5f0eb]/60 text-base leading-relaxed mb-6">
              Then I found RDC and Dream Con.
            </p>
            <p className="text-[#f5f0eb]/60 text-base leading-relaxed mb-6">
              A small group of friends with nothing but heart, hustle, and a shared mission — fighting for the same dream. From their humble beginnings to millions of views, from Anime House to Game House, they showed what’s possible when a tribe believes in something bigger than themselves.
            </p>
            <p className="text-[#f5f0eb]/60 text-base leading-relaxed mb-6">
              And that lit something in me.
            </p>
            <p className="text-[#f5f0eb]/60 text-base leading-relaxed mb-6">
              Because that’s what I aspire to do. I want to build our Dream Con — our own world, our own movement, our own tribe. A place where creativity, loyalty, and ambition collide. A community that lifts up our friends, our family, and anyone brave enough to dream with us.
            </p>
            <p className="text-[#f5f0eb]/60 text-base leading-relaxed mb-6">
              So I’m inviting you on this adventure.
            </p>
            <p className="text-[#f5f0eb]/60 text-base leading-relaxed mb-6">
              Let’s build something that matters. Let’s create moments people will remember. Let’s grow into something that can bless the people we care about.
            </p>
            <p className="text-[#f5f0eb]/60 text-base leading-relaxed">
              I can’t wait to talk again — and I can’t wait to see where this journey takes us.
            </p>
          </div>

          {/* Quote card */}
          <div className="relative">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8">
              <span className="text-[#dc2626] text-6xl font-serif leading-none">&ldquo;</span>
              <p className="text-[#f5f0eb] text-xl font-medium leading-relaxed mt-2 mb-6">
                A man who stands for nothing will fall for anything. We help men
                find what they stand for.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#dc2626]/20 border border-[#dc2626]/40 flex items-center justify-center">
                  <span className="text-[#dc2626] font-bold text-sm">TGH</span>
                </div>
                <div>
                  <p className="text-[#f5f0eb] text-sm font-semibold">The God Hand</p>
                  <p className="text-[#f5f0eb]/40 text-xs">YouTube Channel</p>
                </div>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[#dc2626]/20 -z-10" />
          </div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#dc2626]/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-[#dc2626] mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                {pillar.icon}
              </div>
              <h3 className="text-[#f5f0eb] font-bold text-lg mb-2">{pillar.title}</h3>
              <p className="text-[#f5f0eb]/50 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
