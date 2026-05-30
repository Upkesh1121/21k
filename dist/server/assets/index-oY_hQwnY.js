import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { p as products } from "./products-9Z2Dmzon.js";
import { P as ProductCard } from "./ProductCard-V_X7pEF4.js";
const TARGET = (/* @__PURE__ */ new Date("2026-07-21T00:00:00Z")).getTime();
function pad(n) {
  return String(n).padStart(2, "0");
}
function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = TARGET - Date.now();
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTime({
        days: Math.floor(diff / 864e5),
        hours: Math.floor(diff % 864e5 / 36e5),
        minutes: Math.floor(diff % 36e5 / 6e4),
        seconds: Math.floor(diff % 6e4 / 1e3)
      });
    };
    calc();
    const id = setInterval(calc, 1e3);
    return () => clearInterval(id);
  }, []);
  const units = [
    { label: "Days", value: pad(time.days) },
    { label: "Hours", value: pad(time.hours) },
    { label: "Minutes", value: pad(time.minutes) },
    { label: "Seconds", value: pad(time.seconds) }
  ];
  return /* @__PURE__ */ jsx("div", { className: "flex items-end gap-6 md:gap-10", children: units.map((u, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-6 md:gap-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "countdown-digit", children: u.value }),
      /* @__PURE__ */ jsx("span", { className: "text-[0.6rem] tracking-[0.3em] uppercase text-muted mt-1", children: u.label })
    ] }),
    i < units.length - 1 && /* @__PURE__ */ jsx("span", { className: "font-display text-gold text-3xl opacity-50 mb-3", "aria-hidden": true, children: ":" })
  ] }, u.label)) });
}
function useSectionObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(".section-enter");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12
    });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
function HomePage() {
  useSectionObserver();
  const featured = products.filter((p) => p.isNew).slice(0, 4);
  const allFeatured = featured.length < 4 ? products.slice(0, 4) : featured;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(MarqueeStrip, {}),
    /* @__PURE__ */ jsx(FeaturedSection, { products: allFeatured }),
    /* @__PURE__ */ jsx(PhilosophySection, {}),
    /* @__PURE__ */ jsx(DropSection, {}),
    /* @__PURE__ */ jsx(LookbookSection, {}),
    /* @__PURE__ */ jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsx(NewsletterSection, {})
  ] });
}
function HeroSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1920&q=80&fit=crop", alt: "", "aria-hidden": true, className: "w-full h-full object-cover object-center", style: {
        filter: "brightness(0.35) contrast(1.1)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[0.6rem] tracking-[0.4em] uppercase text-gold mb-6 fade-in-up", style: {
        "--delay": "0.8s"
      }, children: "SS26 Collection — Now Available" }),
      /* @__PURE__ */ jsx("div", { className: "mb-4 overflow-hidden", children: /* @__PURE__ */ jsxs("h1", { className: "font-display text-[clamp(4.5rem,13vw,13rem)] leading-[0.9] tracking-[0.04em] text-white text-reveal-wrap", children: [
        /* @__PURE__ */ jsx("span", { className: "text-reveal-inner block", style: {
          "--delay": "0.9s"
        }, children: "BUILT" }),
        /* @__PURE__ */ jsx("span", { className: "text-reveal-inner block", style: {
          "--delay": "1.05s"
        }, children: "BEYOND" }),
        /* @__PURE__ */ jsx("span", { className: "text-reveal-inner block text-transparent", style: {
          "--delay": "1.2s",
          WebkitTextStroke: "1px rgba(184,150,90,0.8)"
        }, children: "TRENDS." })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-silver/70 font-light max-w-xs leading-loose tracking-wider mb-10 fade-in-up", style: {
        "--delay": "1.5s"
      }, children: "Luxury streetwear for those who move between worlds." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 fade-in-up", style: {
        "--delay": "1.7s"
      }, children: [
        /* @__PURE__ */ jsx(Link, { to: "/shop", className: "btn-luxury border border-white/20 text-white px-8 py-4 inline-block", "data-cursor-hover": true, children: /* @__PURE__ */ jsx("span", { children: "Shop Collection" }) }),
        /* @__PURE__ */ jsx(Link, { to: "/lookbook", className: "btn-luxury border border-gold/40 text-gold px-8 py-4 inline-block", "data-cursor-hover": true, children: /* @__PURE__ */ jsx("span", { children: "Explore Drop" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-8 right-8 md:right-10 z-10 flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsx(ChevronDown, { size: 16, className: "text-gold animate-bounce" }),
      /* @__PURE__ */ jsx("span", { className: "text-[0.5rem] tracking-[0.3em] text-muted uppercase rotate-90 origin-center mt-2", children: "Scroll" })
    ] })
  ] });
}
function MarqueeStrip() {
  const words = ["VOID COLLECTION", "—", "SS26 DROP", "—", "PHANTOM JACKET", "—", "LUXURY STREETWEAR", "—", "BUILT BEYOND TRENDS", "—", "ECLIPSE CAP", "—"];
  return /* @__PURE__ */ jsx("div", { className: "border-y border-border overflow-hidden py-4 bg-surface/40", children: /* @__PURE__ */ jsx("div", { className: "marquee-track", children: [...Array(2)].map((_, i) => /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-8 mr-8", children: words.map((w, j) => /* @__PURE__ */ jsx("span", { className: `text-[0.6rem] tracking-[0.35em] uppercase whitespace-nowrap ${w === "—" ? "text-gold" : "text-muted"}`, children: w }, j)) }, i)) }) });
}
function FeaturedSection({
  products: products2
}) {
  return /* @__PURE__ */ jsxs("section", { className: "max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-14 section-enter", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-3", children: "SS26" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-7xl tracking-wider", children: "FEATURED DROPS" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/shop", className: "hidden md:flex items-center gap-2 text-[0.65rem] tracking-[0.25em] uppercase text-muted hover:text-white transition-colors group", "data-cursor-hover": true, children: [
        "View All",
        /* @__PURE__ */ jsx(ArrowRight, { size: 12, className: "group-hover:translate-x-1 transition-transform" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6", children: [
      products2.slice(0, 2).map((p, i) => /* @__PURE__ */ jsx("div", { className: `section-enter col-span-1 ${i === 0 ? "md:col-span-2" : ""}`, style: {
        transitionDelay: `${i * 0.1}s`
      }, children: /* @__PURE__ */ jsx(ProductCard, { product: p, size: i === 0 ? "large" : "normal" }) }, p.id)),
      products2.slice(2, 4).map((p, i) => /* @__PURE__ */ jsx("div", { className: "section-enter col-span-1", style: {
        transitionDelay: `${(i + 2) * 0.1}s`
      }, children: /* @__PURE__ */ jsx(ProductCard, { product: p }) }, p.id))
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 flex md:hidden justify-center", children: /* @__PURE__ */ jsx(Link, { to: "/shop", className: "btn-luxury border border-border text-silver px-8 py-3 inline-block", children: /* @__PURE__ */ jsx("span", { children: "View All Products" }) }) })
  ] });
}
function PhilosophySection() {
  return /* @__PURE__ */ jsx("section", { className: "border-t border-border overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 min-h-[80vh]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-72 md:h-auto overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80&fit=crop", alt: "21K Philosophy", className: "w-full h-full object-cover object-center", style: {
        filter: "grayscale(0.4) brightness(0.6)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent to-ink/60" }),
      /* @__PURE__ */ jsx("span", { className: "absolute bottom-6 left-6 font-display text-[10rem] leading-none text-white/5", "aria-hidden": true, children: "21" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-surface flex flex-col justify-center px-10 md:px-16 py-20", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-8 section-enter", children: "Our Philosophy" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-editorial text-4xl md:text-5xl lg:text-6xl leading-tight italic text-white/90 mb-8 section-enter", style: {
        transitionDelay: "0.1s"
      }, children: [
        `"We don't follow culture.`,
        /* @__PURE__ */ jsx("br", {}),
        'We move ahead of it."'
      ] }),
      /* @__PURE__ */ jsx("span", { className: "gold-divider mb-8 section-enter", style: {
        transitionDelay: "0.2s"
      } }),
      /* @__PURE__ */ jsx("p", { className: "text-sm leading-[2] text-silver/70 max-w-sm section-enter", style: {
        transitionDelay: "0.3s"
      }, children: "21K was built on a single premise: that luxury and street culture are not opposites — they are the same hunger expressed differently. Every garment is a position statement. Every stitch is an argument against mediocrity." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 section-enter", style: {
        transitionDelay: "0.4s"
      }, children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "btn-luxury border border-gold/40 text-gold px-7 py-3 inline-block", "data-cursor-hover": true, children: /* @__PURE__ */ jsx("span", { children: "Read the Manifesto" }) }) })
    ] })
  ] }) });
}
function DropSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-t border-border", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&fit=crop", alt: "", "aria-hidden": true, className: "w-full h-full object-cover object-center", style: {
        filter: "brightness(0.15) grayscale(0.6)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink/80" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-28 md:py-40 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.45em] uppercase text-gold mb-6 section-enter", children: "Exclusive Members Drop" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-8xl tracking-widest text-white mb-4 section-enter", style: {
        transitionDelay: "0.1s"
      }, children: "CHAPTER IV" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-silver/60 tracking-widest mb-16 section-enter", style: {
        transitionDelay: "0.2s"
      }, children: "— DROPPING JULY 21, 2026 —" }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center section-enter", style: {
        transitionDelay: "0.3s"
      }, children: /* @__PURE__ */ jsx(CountdownTimer, {}) }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 section-enter", style: {
        transitionDelay: "0.5s"
      }, children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-luxury border border-gold text-gold px-10 py-4 inline-block", "data-cursor-hover": true, children: /* @__PURE__ */ jsx("span", { children: "Join the Inner Circle" }) }) })
    ] })
  ] });
}
const lookbookImages = [{
  src: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80&fit=crop",
  label: "VOID / FW25"
}, {
  src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&fit=crop",
  label: "FOUNDATION"
}, {
  src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80&fit=crop",
  label: "PHANTOM"
}, {
  src: "https://images.unsplash.com/photo-1618898909019-010e4e234c55?w=800&q=80&fit=crop",
  label: "NOIR"
}, {
  src: "https://images.unsplash.com/photo-1556821840-3a63f462f2a0?w=800&q=80&fit=crop",
  label: "VOID"
}];
function LookbookSection() {
  const scrollRef = useRef(null);
  return /* @__PURE__ */ jsxs("section", { className: "border-t border-border py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 mb-12", children: /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between section-enter", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-3", children: "Visual Journal" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-7xl tracking-wider", children: "LOOKBOOK" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/lookbook", className: "hidden md:flex items-center gap-2 text-[0.65rem] tracking-[0.25em] uppercase text-muted hover:text-white transition-colors group", children: [
        "View All ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 12, className: "group-hover:translate-x-1 transition-transform" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { ref: scrollRef, className: "flex gap-4 px-6 md:px-10 overflow-x-auto scrollbar-none pb-4", style: {
      scrollSnapType: "x mandatory"
    }, children: lookbookImages.map((img, i) => /* @__PURE__ */ jsxs("div", { className: "lookbook-item flex-none w-[72vw] md:w-[36vw] lg:w-[28vw] aspect-[3/4] relative overflow-hidden bg-surface group", style: {
      scrollSnapAlign: "start"
    }, children: [
      /* @__PURE__ */ jsx("img", { src: img.src, alt: img.label, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", style: {
        filter: "brightness(0.75)"
      }, loading: "lazy" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
      /* @__PURE__ */ jsx("p", { className: "absolute bottom-5 left-5 font-display text-lg tracking-widest text-white/80", children: img.label })
    ] }, i)) })
  ] });
}
const testimonials = [{
  quote: "21K changed how I think about what I wear. This isn't fashion — it's a statement I can physically put on.",
  author: "Malik O.",
  location: "London",
  item: "VOID Hoodie"
}, {
  quote: "The NOIR Bomber is the most intentional piece of clothing I've ever owned. You feel it before you see it.",
  author: "Reina S.",
  location: "Tokyo",
  item: "NOIR Bomber"
}, {
  quote: "I've never had people ask about a cap this much. The ECLIPSE is just different. Understated dominance.",
  author: "Dario V.",
  location: "Milan",
  item: "Eclipse Cap"
}];
function TestimonialsSection() {
  return /* @__PURE__ */ jsx("section", { className: "border-t border-border py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16 section-enter", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-3", children: "The Community" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-7xl tracking-wider", children: "WORN WORLDWIDE" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxs("div", { className: "border border-border p-8 bg-surface/50 flex flex-col justify-between section-enter", style: {
      transitionDelay: `${i * 0.1}s`
    }, children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "font-editorial italic text-xl leading-relaxed text-white/80 mb-8", children: [
        '"',
        t.quote,
        '"'
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[0.65rem] tracking-[0.15em] text-white", children: t.author }),
          /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.2em] text-muted uppercase", children: t.location })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.2em] text-gold uppercase", children: t.item })
      ] })
    ] }, i)) })
  ] }) });
}
function NewsletterSection() {
  return /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-surface/30", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.45em] uppercase text-gold mb-5 section-enter", children: "Members Only" }),
    /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl lg:text-8xl tracking-widest leading-tight mb-6 section-enter", style: {
      transitionDelay: "0.1s"
    }, children: [
      "ENTER THE",
      /* @__PURE__ */ jsx("br", {}),
      "21K CIRCLE"
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-silver/60 tracking-wider leading-loose mb-12 section-enter", style: {
      transitionDelay: "0.2s"
    }, children: "First access to drops. Archive prices. Invitations to private events. No spam. No noise. Just signal." }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-0 border border-border-light max-w-md mx-auto section-enter", style: {
      transitionDelay: "0.3s"
    }, children: [
      /* @__PURE__ */ jsx("input", { type: "email", placeholder: "Enter your email address", className: "flex-1 bg-transparent px-5 py-4 text-[0.7rem] text-white placeholder:text-muted outline-none font-body tracking-wider min-w-0" }),
      /* @__PURE__ */ jsx("button", { className: "btn-luxury border-l border-border-light text-gold px-6 py-4 shrink-0", "data-cursor-hover": true, children: /* @__PURE__ */ jsx("span", { children: "Join" }) })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.2em] text-muted mt-4 section-enter", style: {
      transitionDelay: "0.4s"
    }, children: "Unsubscribe at any time. Your data stays private." })
  ] }) }) });
}
export {
  HomePage as component
};
