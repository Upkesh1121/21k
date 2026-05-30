import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/cart'

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/lookbook', label: 'Lookbook' },
  { to: '/about', label: 'Philosophy' },
  { to: '/contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`nav-glass fixed top-0 inset-x-0 z-[100] ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/">
  <img
    src="/logo.png"
    alt="21K Logo"
    className="h-12 w-auto"
  />
</Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="gold-link text-[0.65rem] tracking-[0.25em] uppercase text-silver hover:text-white transition-colors duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-5">
            <Link to="/cart" className="relative" data-cursor-hover>
              <ShoppingBag size={18} className="text-silver hover:text-white transition-colors" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-gold rounded-full text-[0.5rem] font-body font-medium text-ink flex items-center justify-center leading-none">
                  {count}
                </span>
              )}
            </Link>

            <button
              className="md:hidden"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <X size={20} className="text-white" strokeWidth={1.5} />
                : <Menu size={20} className="text-silver" strokeWidth={1.5} />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-ink/95 backdrop-blur-xl transition-opacity duration-400 flex flex-col ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center h-16 px-6">
          <span className="font-display text-2xl tracking-[0.2em]">21K</span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <ul className="flex flex-col gap-2 px-8 mt-12">
          {links.map((l, i) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="block font-display text-5xl tracking-widest text-white/80 hover:text-white py-3 transition-colors"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto px-8 pb-12">
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-muted">
            Built Beyond Trends
          </p>
        </div>
      </div>
    </>
  )
}
