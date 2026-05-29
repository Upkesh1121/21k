import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function useSectionObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.section-enter')
    const obs = new IntersectionObserver(
      e => e.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target) } }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

const tenets = [
  {
    number: '01',
    title: 'Material Truth',
    body: 'Every fabric is chosen for what it does, not what it costs to market. Heaviness is honesty. We build with the materials that last.',
  },
  {
    number: '02',
    title: 'Earned Exclusivity',
    body: "Scarcity isn't manufactured at 21K. Pieces are limited because they take time to do right. When they're gone, they're gone.",
  },
  {
    number: '03',
    title: 'Cultural Authorship',
    body: "We don't respond to what's trending. We create the context that trends respond to. That's the difference between a brand and a movement.",
  },
  {
    number: '04',
    title: 'Global Without Borders',
    body: "21K is from everywhere. London, Lagos, Tokyo, LA — culture has no geography. The garments travel because the ideas already do.",
  },
]

function AboutPage() {
  useSectionObserver()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden border-b border-border">
        <img
          src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?w=1920&q=80&fit=crop"
          alt="21K Philosophy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.3) grayscale(0.3)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <p className="text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-4">Our Philosophy</p>
          <h1 className="font-display text-6xl md:text-9xl tracking-widest leading-none">
            THE<br />MANIFESTO
          </h1>
        </div>
      </div>

      {/* Opening statement */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="section-enter">
            <p className="font-editorial italic text-3xl md:text-4xl leading-relaxed text-white/80">
              "21K is not a clothing brand. It is a set of decisions — about how to live, what to carry on your body, and what that communicates to a world that reads everything."
            </p>
            <span className="gold-divider mt-8 block" />
          </div>
          <div className="space-y-6 section-enter" style={{ transitionDelay: '0.15s' }}>
            <p className="text-sm leading-[2.2] text-silver/70 tracking-wide">
              21K was founded on a refusal. A refusal to participate in the disposability of modern fashion. A refusal to confuse accessibility with quality. A refusal to separate street culture from the highest level of craft.
            </p>
            <p className="text-sm leading-[2.2] text-silver/70 tracking-wide">
              The number itself is a reference to the 21,000 hours of craft — the equivalent of ten years of dedicated practice — that we believe should inform every garment before it reaches a customer. Not marketing. Not mood boards. Work.
            </p>
            <p className="text-sm leading-[2.2] text-silver/70 tracking-wide">
              The result is clothing that holds its shape, its meaning, and its value over time. Because that's what we were built to do.
            </p>
          </div>
        </div>
      </div>

      {/* Tenets */}
      <div className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <p className="text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-12 section-enter">
            The Four Tenets
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {tenets.map((t, i) => (
              <div
                key={t.number}
                className={`border-border py-12 pr-0 md:pr-12 section-enter ${
                  i < 2 ? 'border-b' : ''
                } ${i % 2 === 0 ? 'md:border-r md:pr-16 md:pl-0' : 'md:pl-16'}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <p className="font-display text-7xl text-white/5 mb-[-1.5rem]">{t.number}</p>
                <h3 className="font-display text-2xl tracking-widest text-white mb-4 relative z-10">
                  {t.title.toUpperCase()}
                </h3>
                <p className="text-sm leading-[2] text-silver/60 tracking-wide">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="border-t border-border bg-surface/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <p className="text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-16 section-enter">
            The Timeline
          </p>
          <div className="space-y-0">
            {[
              { year: '2020', event: 'Founded. First 50 hoodies cut by hand. Sold out in 4 hours.' },
              { year: '2021', event: 'FOUNDATION Collection. 200 pieces. First global audience.' },
              { year: '2022', event: 'VOID Chapter I. First collaboration with independent fabric mills.' },
              { year: '2023', event: 'Tokyo & London pop-ups. 3,000 attendees combined. No advertising.' },
              { year: '2024', event: 'NOIR Bomber. 18 months in development. Sold out in 12 minutes.' },
              { year: '2026', event: 'CHAPTER IV — Coming July 21.' },
            ].map((item, i) => (
              <div
                key={item.year}
                className="flex gap-8 md:gap-16 border-b border-border py-8 items-baseline section-enter group"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <p className="font-display text-4xl md:text-6xl text-white/20 group-hover:text-gold transition-colors duration-300 shrink-0 w-24 md:w-32">
                  {item.year}
                </p>
                <p className="text-sm md:text-base text-silver/70 tracking-wide leading-relaxed">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-border py-24 text-center">
        <h2 className="font-display text-5xl md:text-7xl tracking-widest mb-10 section-enter">
          EXPLORE THE COLLECTION
        </h2>
        <Link to="/shop" className="btn-luxury border border-gold text-gold px-10 py-4 inline-block section-enter" data-cursor-hover>
          <span>Shop Now</span>
        </Link>
      </div>
    </div>
  )
}
