import Link from "next/link";

const footerLinks = {
  Content: [
    { label: "Latest Videos", href: "#videos" },
    { label: "Men's Health", href: "#health" },
    { label: "Mental Strength", href: "#health" },
    { label: "Brotherhood", href: "#community" },
  ],
  Community: [
    { label: "Men's Group", href: "#community" },
    { label: "Newsletter", href: "#contact" },
    { label: "About Us", href: "#about" },
  ],
  Social: [
    { label: "YouTube", href: "https://www.youtube.com/@TGH-m8u" },
    { label: "Instagram", href: "https://www.instagram.com/thegodhand6466?igsh=MWFsbW1jZWpxYWlmMQ%3D%3D" },
    { label: "Twitter / X", href: "https://x.com/TGH6466" },
    { label: "TikTok", href: "https://www.tiktok.com/@tgh15361?_r=1&_t=ZT-95tyj07OF3e" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#dc2626] font-black text-2xl tracking-widest">TGH</span>
            </div>
            <p className="text-[#f5f0eb]/40 text-sm leading-relaxed mb-6">
              The God Hand — dedicated to helping men thrive physically,
              mentally, and in community.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@TGH-m8u"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#dc2626]/40 flex items-center justify-center text-[#f5f0eb]/50 hover:text-[#dc2626] transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/thegodhand6466?igsh=MWFsbW1jZWpxYWlmMQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#dc2626]/40 flex items-center justify-center text-[#f5f0eb]/50 hover:text-[#dc2626] transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com/TGH6466"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#dc2626]/40 flex items-center justify-center text-[#f5f0eb]/50 hover:text-[#dc2626] transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-[#f5f0eb] font-semibold text-sm tracking-wider uppercase mb-4">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#f5f0eb]/40 hover:text-[#dc2626] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#f5f0eb]/25 text-xs">
            © {new Date().getFullYear()} The God Hand. All rights reserved.
          </p>
          <p className="text-[#f5f0eb]/25 text-xs">
            Built for men who refuse to settle.
          </p>
        </div>
      </div>
    </footer>
  );
}
