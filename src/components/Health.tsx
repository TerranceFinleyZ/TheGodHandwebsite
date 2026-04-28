const topics = [
  {
    icon: "💪",
    title: "Testosterone & Hormones",
    description: "Understanding how to naturally optimize your hormones through sleep, diet, exercise, and stress management.",
    tags: ["Testosterone", "Hormones", "TRT"],
  },
  {
    icon: "🧠",
    title: "Mental Health & Therapy",
    description: "Breaking down the stigma around men seeking help. Practical tools from therapy, stoicism, and modern psychology.",
    tags: ["Depression", "Anxiety", "Therapy"],
  },
  {
    icon: "🥗",
    title: "Nutrition for Men",
    description: "Cutting through the noise: what men actually need to eat to build muscle, burn fat, and live longer.",
    tags: ["Diet", "Protein", "Supplements"],
  },
  {
    icon: "😴",
    title: "Sleep Optimization",
    description: "Why sleep is the #1 performance enhancer and how to fix yours starting tonight.",
    tags: ["Sleep", "Recovery", "Circadian"],
  },
  {
    icon: "🫀",
    title: "Heart Health",
    description: "Men die from heart disease at twice the rate of women. What every man over 30 needs to know.",
    tags: ["Cardio", "Blood Pressure", "Longevity"],
  },
  {
    icon: "🤝",
    title: "Relationships & Masculinity",
    description: "Navigating modern masculinity, fatherhood, marriage, and what it means to be a good man today.",
    tags: ["Marriage", "Fatherhood", "Identity"],
  },
];

export default function Health() {
  return (
    <section id="health" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-12 bg-[#dc2626]" />
          <span className="text-[#dc2626] text-xs font-semibold tracking-widest uppercase">Topics We Cover</span>
        </div>
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-[#f5f0eb] leading-tight mb-4">
            Men&apos;s Health{" "}
            <span className="text-[#dc2626]">Simplified</span>
          </h2>
          <p className="text-[#f5f0eb]/50 text-lg max-w-2xl">
            We dig deep into the topics that matter most for modern men — so you
            can make informed decisions about your health and life.
          </p>
        </div>

        {/* Topics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#dc2626]/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <span className="text-4xl mb-4 block">{topic.icon}</span>
              <h3 className="text-[#f5f0eb] font-bold text-xl mb-3 group-hover:text-[#dc2626] transition-colors">
                {topic.title}
              </h3>
              <p className="text-[#f5f0eb]/50 text-sm leading-relaxed mb-4">
                {topic.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#dc2626]/70 bg-[#dc2626]/5 border border-[#dc2626]/20 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured stat bar */}
        <div className="mt-16 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8">
          <p className="text-[#f5f0eb]/40 text-xs font-semibold tracking-widest uppercase mb-6 text-center">Why It Matters</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "77%", label: "of suicides are men" },
              { value: "2x", label: "higher heart disease rate" },
              { value: "40%", label: "of men never see a doctor" },
              { value: "60%", label: "report loneliness" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[#dc2626] text-3xl font-black">{stat.value}</p>
                <p className="text-[#f5f0eb]/50 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
