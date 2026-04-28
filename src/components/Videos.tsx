const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "You achieved failure",
    category: "Physical Health",
    duration: "18:42",
    views: "1.4m",
    url: "https://www.youtube.com/watch?v=G0ZD7sUlxMo",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Get out of your own head.",
    category: "Mental Strength",
    duration: "22:15",
    views: "143K",
    url: "https://www.youtube.com/watch?v=PR-0y2EvEfo",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Building a Brotherhood: Men Need Community",
    category: "Brotherhood",
    duration: "14:30",
    views: "76K",
    url: "https://www.youtube.com/watch?v=CNtpGZ0SnFA",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "GET OVER IT | Break-Up Motivation",
    category: "Dating Life",
    duration: "20:05",
    views: "518K",
    url: "https://www.youtube.com/watch?v=WdXuXPez6Yg&t=1000s",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Men Who Make Women Feel THIS Win At Dating",
    category: "Dating Life",
    duration: "16:50",
    views: "58K",
    url: "https://www.youtube.com/watch?v=KslKvXS65ZU",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Find Purpose & Goals",
    category: "Lifestyle",
    duration: "19:22",
    views: "617K",
    url: "https://www.youtube.com/watch?v=UwO7QmgGoTM",
  },
];

const categoryColor: Record<string, string> = {
  "Physical Health": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Dating Life": "bg-[#dc2626]/10 text-[#dc2626] border-[#dc2626]/20",
  "Mental Strength": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Brotherhood: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Lifestyle: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
};

export default function Videos() {
  return (
    <section id="videos" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-12 bg-[#dc2626]" />
          <span className="text-[#dc2626] text-xs font-semibold tracking-widest uppercase">Content</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-[#f5f0eb] leading-tight">
            Self-Improvement <span className="text-[#dc2626]">Videos</span>
          </h2>
          <a
            href="https://www.youtube.com/watch?v=RsU5i0YFAcY&list=PLNRX4eztTjojcLOISLrC06rgYtcbUTF6B&index=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#dc2626] hover:text-[#ef4444] text-sm font-semibold transition-colors group"
          >
            View all videos
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Video grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <a
              key={i}
              href={video.url ? video.url : `https://youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#dc2626]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#dc2626]/5"
            >
              {/* Thumbnail placeholder */}
              <div className="relative aspect-video bg-[#0d0d0d] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0808] to-[#0d1a1a]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#dc2626]/90 group-hover:bg-[#dc2626] group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg shadow-[#dc2626]/30">
                    <svg className="w-6 h-6 text-[#0d0d0d] ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Duration badge */}
                <span className="absolute bottom-2 right-2 bg-[#0d0d0d]/80 text-[#f5f0eb] text-xs px-2 py-0.5 rounded font-mono">
                  {video.duration}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${categoryColor[video.category]}`}>
                    {video.category}
                  </span>
                  <span className="text-[#f5f0eb]/30 text-xs">{video.views} views</span>
                </div>
                <h3 className="text-[#f5f0eb] font-semibold text-base leading-snug group-hover:text-[#dc2626] transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* YouTube CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@TGH-m8u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FF0000]/10 hover:bg-[#FF0000]/20 border border-[#FF0000]/30 hover:border-[#FF0000]/50 text-[#f5f0eb] font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            <svg className="w-5 h-5 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Subscribe on YouTube — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  );
}
