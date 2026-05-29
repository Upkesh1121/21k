import { Link } from '@tanstack/react-router'

const collections = [
  { label: 'VOID Collection', to: '/shop?collection=void' },
  { label: 'FOUNDATION', to: '/shop?collection=foundation' },
  { label: 'Hoodies', to: '/shop?category=hoodies' },
  { label: 'Jackets', to: '/shop?category=jackets' },
  { label: 'Bottoms', to: '/shop?category=bottoms' },
]

const info = [
  { label: 'Philosophy', to: '/about' },
  { label: 'Lookbook', to: '/lookbook' },
  { label: 'Contact', to: '/contact' },
  { label: 'Size Guide', to: '/contact' },
  { label: 'Sustainability', to: '/about' },
]

const legal = [
  { label: 'Privacy Policy', to: '/contact' },
  { label: 'Terms of Service', to: '/contact' },
  { label: 'Shipping & Returns', to: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      {/* Marquee strip */}
      <div className="border-b border-border overflow-hidden py-3">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 mr-8">
              {['21K', '—', 'LUXURY STREETWEAR', '—', 'BUILT BEYOND TRENDS', '—', 'EST. MMXXIV', '—', 'GLOBAL CULTURE', '—'].map((t, j) => (
                <span
                  key={j}
                  className={`text-[0.55rem] tracking-[0.35em] ${t === '—' ? 'text-gold' : 'text-muted'}`}
                >
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-5xl tracking-[0.2em] text-white mb-4">21K</p>
            <p className="text-[0.65rem] leading-loose tracking-wide text-muted max-w-[200px]">
              Luxury streetwear built for those who move between worlds. Exclusivity is not a price point — it's a perspective.
            </p>
            {/* Social */}
            <div className="flex gap-5 mt-8">
              {['IG', 'TW', 'TK'].map(s => (
                <span key={s} className="text-[0.55rem] tracking-[0.2em] text-muted hover:text-gold transition-colors gold-link">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <p className="text-[0.55rem] tracking-[0.3em] uppercase text-gold mb-6">Collections</p>
            <ul className="space-y-3">
              {collections.map(l => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[0.65rem] tracking-[0.1em] text-muted hover:text-white transition-colors gold-link"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-[0.55rem] tracking-[0.3em] uppercase text-gold mb-6">Information</p>
            <ul className="space-y-3">
              {info.map(l => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[0.65rem] tracking-[0.1em] text-muted hover:text-white transition-colors gold-link"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-[0.55rem] tracking-[0.3em] uppercase text-gold mb-6">The Circle</p>
            <p className="text-[0.65rem] tracking-wide text-muted mb-4 leading-relaxed">
              First access to drops. Members only.
            </p>
            <div className="flex border border-border">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent flex-1 px-3 py-2.5 text-[0.65rem] text-white placeholder:text-muted outline-none font-body min-w-0"
              />
              <button className="px-4 text-[0.55rem] tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-ink transition-colors border-l border-border">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[0.55rem] tracking-[0.2em] text-muted">
            © 2024 21K. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {legal.map(l => (
              <Link
                key={l.label}
                to={l.to}
                className="text-[0.55rem] tracking-[0.15em] text-muted hover:text-silver transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
