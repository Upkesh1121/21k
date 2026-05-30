import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
const lookbookSections = [{
  chapter: "Chapter I",
  title: "VOID",
  desc: "Darkness as a design principle. The inaugural drop.",
  images: [{
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80&fit=crop",
    caption: "VOID Hoodie — Onyx"
  }, {
    src: "https://images.unsplash.com/photo-1556821840-3a63f462f2a0?w=1200&q=80&fit=crop",
    caption: "VOID Hoodie — detail"
  }, {
    src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80&fit=crop",
    caption: "Phantom Jacket — Matte"
  }]
}, {
  chapter: "Chapter II",
  title: "FOUNDATION",
  desc: "The everyday vocabulary of the 21K world.",
  images: [{
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80&fit=crop",
    caption: "Signal Tee — Natural"
  }, {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80&fit=crop",
    caption: "Ghost Sweatpant"
  }, {
    src: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1200&q=80&fit=crop",
    caption: "Cargo Trousers"
  }]
}, {
  chapter: "Chapter III",
  title: "NOIR",
  desc: "The apex. 18 months in development.",
  images: [{
    src: "https://images.unsplash.com/photo-1618898909019-010e4e234c55?w=1200&q=80&fit=crop",
    caption: "NOIR Bomber — Editorial"
  }, {
    src: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200&q=80&fit=crop",
    caption: "NOIR Campaign"
  }, {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80&fit=crop",
    caption: "NOIR — Full Look"
  }]
}];
function LookbookPage() {
  const [lightbox, setLightbox] = useState(null);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-border py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-3", children: "Visual Journal" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-7xl md:text-[10rem] tracking-widest leading-none", children: [
        "LOOK",
        /* @__PURE__ */ jsx("br", {}),
        "BOOK"
      ] })
    ] }) }),
    lookbookSections.map((section, si) => /* @__PURE__ */ jsx("div", { className: `border-b border-border ${si % 2 === 1 ? "bg-surface/20" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-6 mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-[0.6rem] tracking-[0.4em] uppercase text-muted/50", children: section.chapter }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-7xl tracking-widest", children: section.title }),
        /* @__PURE__ */ jsx("p", { className: "hidden md:block text-sm text-muted ml-4 mb-1 tracking-wide", children: section.desc })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-2 md:col-span-2 aspect-[16/10] overflow-hidden group relative bg-surface cursor-pointer", onClick: () => setLightbox(section.images[0]), "data-cursor-hover": true, children: [
          /* @__PURE__ */ jsx("img", { src: section.images[0].src, alt: section.images[0].caption, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", style: {
            filter: "brightness(0.8)"
          }, loading: "lazy" }),
          /* @__PURE__ */ jsx("p", { className: "absolute bottom-4 left-4 text-[0.55rem] tracking-[0.25em] uppercase text-white/60 opacity-0 group-hover:opacity-100 transition-opacity", children: section.images[0].caption })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4", children: section.images.slice(1).map((img, i) => /* @__PURE__ */ jsxs("div", { className: "aspect-square md:aspect-[4/3] overflow-hidden group relative bg-surface cursor-pointer", onClick: () => setLightbox(img), "data-cursor-hover": true, children: [
          /* @__PURE__ */ jsx("img", { src: img.src, alt: img.caption, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", style: {
            filter: "brightness(0.75)"
          }, loading: "lazy" }),
          /* @__PURE__ */ jsx("p", { className: "absolute bottom-3 left-3 text-[0.5rem] tracking-[0.2em] uppercase text-white/60 opacity-0 group-hover:opacity-100 transition-opacity", children: img.caption })
        ] }, i)) })
      ] })
    ] }) }, section.chapter)),
    /* @__PURE__ */ jsxs("div", { className: "py-24 text-center border-b border-border", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-6", children: "Seen Something?" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-7xl tracking-widest mb-10", children: "SHOP THE LOOK" }),
      /* @__PURE__ */ jsx(Link, { to: "/shop", className: "btn-luxury border border-gold text-gold px-10 py-4 inline-block", "data-cursor-hover": true, children: /* @__PURE__ */ jsx("span", { children: "Explore All Pieces" }) })
    ] }),
    lightbox && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[300] bg-black/95 flex items-center justify-center p-6", onClick: () => setLightbox(null), children: [
      /* @__PURE__ */ jsx("button", { className: "absolute top-6 right-6 text-white/60 hover:text-white transition-colors", "aria-label": "Close", children: /* @__PURE__ */ jsx(X, { size: 24, strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsxs("div", { onClick: (e) => e.stopPropagation(), className: "relative max-w-4xl w-full", children: [
        /* @__PURE__ */ jsx("img", { src: lightbox.src, alt: lightbox.caption, className: "w-full max-h-[80vh] object-contain" }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-[0.6rem] tracking-[0.3em] uppercase text-gold mt-4", children: lightbox.caption })
      ] })
    ] })
  ] });
}
export {
  LookbookPage as component
};
