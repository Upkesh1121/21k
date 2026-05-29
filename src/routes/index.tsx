import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import products from '@/data/products'
import type { Product } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'
import { CountdownTimer } from '@/components/CountdownTimer'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function useSectionObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.section-enter')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function HomePage() {
  useSectionObserver()

  const featured = products.filter(p => p.isNew).slice(0, 4)
  const allFeatured = featured.length < 4 ? products.slice(0, 4) : featured

  return (
    <div>
      <HeroSection />
      <MarqueeStrip />
      <FeaturedSection products={allFeatured} />
      <PhilosophySection />
      <DropSection />
      <LookbookSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}

/* ─── Hero ─────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1920&q=80&fit=crop"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.35) contrast(1.1)' }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
        {/* Eyebrow */}
        <p
          className="text-[0.6rem] tracking-[0.4em] uppercase text-gold mb-6 fade-in-up"
          style={{ '--delay': '0.8s' } as React.CSSProperties}
        >
          SS26 Collection — Now Available
        </p>

        {/* Headline */}
        <div className="mb-4 overflow-hidden">
          <h1
            className="font-display text-[clamp(4.5rem,13vw,13rem)] leading-[0.9] tracking-[0.04em] text-white text-reveal-wrap"
          >
            <span
              className="text-reveal-inner block"
              style={{ '--delay': '0.9s' } as React.CSSProperties}
            >
              BUILT
            </span>
            <span
              className="text-reveal-inner block"
              style={{ '--delay': '1.05s' } as React.CSSProperties}
            >
              BEYOND
            </span>
            <span
              className="text-reveal-inner block text-transparent"
              style={{
                '--delay': '1.2s',
                WebkitTextStroke: '1px rgba(184,150,90,0.8)',
              } as React.CSSProperties}
            >
              TRENDS.
            </span>
          </h1>
        </div>

        <p
          className="text-sm md:text-base text-silver/70 font-light max-w-xs leading-loose tracking-wider mb-10 fade-in-up"
          style={{ '--delay': '1.5s' } as React.CSSProperties}
        >
          Luxury streetwear for those who move between worlds.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 fade-in-up"
          style={{ '--delay': '1.7s' } as React.CSSProperties}
        >
          <Link
            to="/shop"
            className="btn-luxury border border-white/20 text-white px-8 py-4 inline-block"
            data-cursor-hover
          >
            <span>Shop Collection</span>
          </Link>
          <Link
            to="/lookbook"
            className="btn-luxury border border-gold/40 text-gold px-8 py-4 inline-block"
            data-cursor-hover
          >
            <span>Explore Drop</span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-10 z-10 flex flex-col items-center gap-2">
        <ChevronDown size={16} className="text-gold animate-bounce" />
        <span className="text-[0.5rem] tracking-[0.3em] text-muted uppercase rotate-90 origin-center mt-2">
          Scroll
        </span>
      </div>
    </section>
  )
}

/* ─── Marquee Strip ─────────────────────────────────────── */
function MarqueeStrip() {
  const words = ['VOID COLLECTION', '—', 'SS26 DROP', '—', 'PHANTOM JACKET', '—', 'LUXURY STREETWEAR', '—', 'BUILT BEYOND TRENDS', '—', 'ECLIPSE CAP', '—']
  return (
    <div className="border-y border-border overflow-hidden py-4 bg-surface/40">
      <div className="marquee-track">
        {[...Array(2)].map((_, i) => (
          <span key={i} className="inline-flex items-center gap-8 mr-8">
            {words.map((w, j) => (
              <span
                key={j}
                className={`text-[0.6rem] tracking-[0.35em] uppercase whitespace-nowrap ${w === '—' ? 'text-gold' : 'text-muted'}`}
              >
                {w}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Featured Collection ───────────────────────────────── */
function FeaturedSection({ products }: { products: Product[] }) {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">
      <div className="flex items-end justify-between mb-14 section-enter">
        <div>
          <p className="text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-3">SS26</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider">
            FEATURED DROPS
          </h2>
        </div>
        <Link
          to="/shop"
          className="hidden md:flex items-center gap-2 text-[0.65rem] tracking-[0.25em] uppercase text-muted hover:text-white transition-colors group"
          data-cursor-hover
        >
          View All
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid — intentionally asymmetric */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.slice(0, 2).map((p, i) => (
          <div
            key={p.id}
            className={`section-enter col-span-1 ${i === 0 ? 'md:col-span-2' : ''}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <ProductCard product={p} size={i === 0 ? 'large' : 'normal'} />
          </div>
        ))}
        {products.slice(2, 4).map((p, i) => (
          <div
            key={p.id}
            className="section-enter col-span-1"
            style={{ transitionDelay: `${(i + 2) * 0.1}s` }}
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex md:hidden justify-center">
        <Link
          to="/shop"
          className="btn-luxury border border-border text-silver px-8 py-3 inline-block"
        >
          <span>View All Products</span>
        </Link>
      </div>
    </section>
  )
}

/* ─── Philosophy ─────────────────────────────────────────── */
function PhilosophySection() {
  return (
    <section className="border-t border-border overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* Image side */}
        <div className="relative h-72 md:h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80&fit=crop"
            alt="21K Philosophy"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'grayscale(0.4) brightness(0.6)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/60" />
          {/* Large decorative number */}
          <span
            className="absolute bottom-6 left-6 font-display text-[10rem] leading-none text-white/5"
            aria-hidden
          >
            21
          </span>
        </div>

        {/* Text side */}
        <div className="bg-surface flex flex-col justify-center px-10 md:px-16 py-20">
          <p className="text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-8 section-enter">
            Our Philosophy
          </p>
          <h2
            className="font-editorial text-4xl md:text-5xl lg:text-6xl leading-tight italic text-white/90 mb-8 section-enter"
            style={{ transitionDelay: '0.1s' }}
          >
            "We don't follow culture.<br />We move ahead of it."
          </h2>
          <span className="gold-divider mb-8 section-enter" style={{ transitionDelay: '0.2s' }} />
          <p
            className="text-sm leading-[2] text-silver/70 max-w-sm section-enter"
            style={{ transitionDelay: '0.3s' }}
          >
            21K was built on a single premise: that luxury and street culture are not opposites — they are the same hunger expressed differently. Every garment is a position statement. Every stitch is an argument against mediocrity.
          </p>
          <div className="mt-10 section-enter" style={{ transitionDelay: '0.4s' }}>
            <Link
              to="/about"
              className="btn-luxury border border-gold/40 text-gold px-7 py-3 inline-block"
              data-cursor-hover
            >
              <span>Read the Manifesto</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Drop Countdown ─────────────────────────────────────── */
function DropSection() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      {/* BG Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&fit=crop"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.15) grayscale(0.6)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink/80" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-28 md:py-40 text-center">
        <p className="text-[0.55rem] tracking-[0.45em] uppercase text-gold mb-6 section-enter">
          Exclusive Members Drop
        </p>
        <h2
          className="font-display text-5xl md:text-8xl tracking-widest text-white mb-4 section-enter"
          style={{ transitionDelay: '0.1s' }}
        >
          CHAPTER IV
        </h2>
        <p
          className="text-sm text-silver/60 tracking-widest mb-16 section-enter"
          style={{ transitionDelay: '0.2s' }}
        >
          — DROPPING JULY 21, 2026 —
        </p>

        <div className="flex justify-center section-enter" style={{ transitionDelay: '0.3s' }}>
          <CountdownTimer />
        </div>

        <div className="mt-16 section-enter" style={{ transitionDelay: '0.5s' }}>
          <Link
            to="/contact"
            className="btn-luxury border border-gold text-gold px-10 py-4 inline-block"
            data-cursor-hover
          >
            <span>Join the Inner Circle</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Lookbook ───────────────────────────────────────────── */
const lookbookImages = [
  { src: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80&fit=crop', label: 'VOID / FW25' },
  { src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&fit=crop', label: 'FOUNDATION' },
  { src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80&fit=crop', label: 'PHANTOM' },
  { src: 'https://images.unsplash.com/photo-1618898909019-010e4e234c55?w=800&q=80&fit=crop', label: 'NOIR' },
  { src: 'https://images.unsplash.com/photo-1556821840-3a63f462f2a0?w=800&q=80&fit=crop', label: 'VOID' },
]

function LookbookSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="border-t border-border py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-12">
        <div className="flex items-end justify-between section-enter">
          <div>
            <p className="text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-3">Visual Journal</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-wider">LOOKBOOK</h2>
          </div>
          <Link
            to="/lookbook"
            className="hidden md:flex items-center gap-2 text-[0.65rem] tracking-[0.25em] uppercase text-muted hover:text-white transition-colors group"
          >
            View All <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollRef}
        className="flex gap-4 px-6 md:px-10 overflow-x-auto scrollbar-none pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {lookbookImages.map((img, i) => (
          <div
            key={i}
            className="lookbook-item flex-none w-[72vw] md:w-[36vw] lg:w-[28vw] aspect-[3/4] relative overflow-hidden bg-surface group"
            style={{ scrollSnapAlign: 'start' }}
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ filter: 'brightness(0.75)' }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-5 left-5 font-display text-lg tracking-widest text-white/80">
              {img.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Testimonials ───────────────────────────────────────── */
const testimonials = [
  {
    quote: "21K changed how I think about what I wear. This isn't fashion — it's a statement I can physically put on.",
    author: 'Malik O.',
    location: 'London',
    item: 'VOID Hoodie',
  },
  {
    quote: "The NOIR Bomber is the most intentional piece of clothing I've ever owned. You feel it before you see it.",
    author: 'Reina S.',
    location: 'Tokyo',
    item: 'NOIR Bomber',
  },
  {
    quote: "I've never had people ask about a cap this much. The ECLIPSE is just different. Understated dominance.",
    author: 'Dario V.',
    location: 'Milan',
    item: 'Eclipse Cap',
  },
]

function TestimonialsSection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-16 section-enter">
          <p className="text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-3">The Community</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider">WORN WORLDWIDE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-border p-8 bg-surface/50 flex flex-col justify-between section-enter"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div>
                <p className="font-editorial italic text-xl leading-relaxed text-white/80 mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[0.65rem] tracking-[0.15em] text-white">{t.author}</p>
                  <p className="text-[0.55rem] tracking-[0.2em] text-muted uppercase">{t.location}</p>
                </div>
                <p className="text-[0.55rem] tracking-[0.2em] text-gold uppercase">{t.item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Newsletter ─────────────────────────────────────────── */
function NewsletterSection() {
  return (
    <section className="border-t border-border bg-surface/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[0.55rem] tracking-[0.45em] uppercase text-gold mb-5 section-enter">
            Members Only
          </p>
          <h2
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-widest leading-tight mb-6 section-enter"
            style={{ transitionDelay: '0.1s' }}
          >
            ENTER THE<br />21K CIRCLE
          </h2>
          <p
            className="text-sm text-silver/60 tracking-wider leading-loose mb-12 section-enter"
            style={{ transitionDelay: '0.2s' }}
          >
            First access to drops. Archive prices. Invitations to private events.
            No spam. No noise. Just signal.
          </p>

          <div
            className="flex gap-0 border border-border-light max-w-md mx-auto section-enter"
            style={{ transitionDelay: '0.3s' }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent px-5 py-4 text-[0.7rem] text-white placeholder:text-muted outline-none font-body tracking-wider min-w-0"
            />
            <button
              className="btn-luxury border-l border-border-light text-gold px-6 py-4 shrink-0"
              data-cursor-hover
            >
              <span>Join</span>
            </button>
          </div>

          <p
            className="text-[0.55rem] tracking-[0.2em] text-muted mt-4 section-enter"
            style={{ transitionDelay: '0.4s' }}
          >
            Unsubscribe at any time. Your data stays private.
          </p>
        </div>
      </div>
    </section>
  )
}
