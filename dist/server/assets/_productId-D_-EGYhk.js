import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { p as products } from "./products-9Z2Dmzon.js";
import { R as Route, u as useCart } from "./router-DnDw5gcX.js";
function useSectionObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(".section-enter");
    const obs = new IntersectionObserver((e) => e.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        obs.unobserve(en.target);
      }
    }), {
      threshold: 0.1
    });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
function RouteComponent() {
  const product = Route.useLoaderData();
  const {
    addItem,
    count
  } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);
  const images = [product.image, product.hoverImage];
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);
  useSectionObserver();
  const handleAdd = () => {
    if (!selectedSize) return;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: 1
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-[0.55rem] tracking-[0.2em] uppercase text-muted hover:text-white transition-colors", children: "Home" }),
      /* @__PURE__ */ jsx("span", { className: "text-muted/40 text-xs", children: "/" }),
      /* @__PURE__ */ jsx(Link, { to: "/shop", className: "text-[0.55rem] tracking-[0.2em] uppercase text-muted hover:text-white transition-colors", children: "Shop" }),
      /* @__PURE__ */ jsx("span", { className: "text-muted/40 text-xs", children: "/" }),
      /* @__PURE__ */ jsx("span", { className: "text-[0.55rem] tracking-[0.2em] uppercase text-silver/70", children: product.name })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] bg-surface overflow-hidden group", children: [
          images.map((img, i) => /* @__PURE__ */ jsx("img", { src: img, alt: `${product.name} view ${i + 1}`, className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImage === i ? "opacity-100" : "opacity-0"}`, loading: i === 0 ? "eager" : "lazy" }, i)),
          /* @__PURE__ */ jsx("button", { onClick: () => setActiveImage((i) => (i - 1 + images.length) % images.length), className: "absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx(ChevronLeft, { size: 14 }) }),
          /* @__PURE__ */ jsx("button", { onClick: () => setActiveImage((i) => (i + 1) % images.length), className: "absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx(ChevronRight, { size: 14 }) }),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 flex flex-col gap-2", children: [
            product.isNew && /* @__PURE__ */ jsx("span", { className: "text-[0.55rem] tracking-[0.25em] uppercase bg-gold text-ink px-2 py-1", children: "New" }),
            product.isLimited && /* @__PURE__ */ jsx("span", { className: "text-[0.55rem] tracking-[0.25em] uppercase border border-gold text-gold px-2 py-1", children: "Limited" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: images.map((img, i) => /* @__PURE__ */ jsx("button", { onClick: () => setActiveImage(i), className: `w-16 h-20 overflow-hidden border transition-border-color ${activeImage === i ? "border-gold" : "border-border hover:border-border-light"}`, children: /* @__PURE__ */ jsx("img", { src: img, alt: "", className: "w-full h-full object-cover" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "section-enter", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-2", children: [
            product.collection,
            " / ",
            product.subtitle
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl tracking-widest leading-none mb-4", children: product.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-2xl font-light text-silver mb-8", children: [
            "$",
            product.price
          ] }),
          /* @__PURE__ */ jsx("span", { className: "gold-divider mb-8 block" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-[2.2] text-silver/70 tracking-wide mb-10 section-enter", style: {
          transitionDelay: "0.1s"
        }, children: product.description }),
        product.material && /* @__PURE__ */ jsxs("div", { className: "mb-8 pb-8 border-b border-border section-enter", style: {
          transitionDelay: "0.15s"
        }, children: [
          /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-2", children: "Material" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-silver/70 tracking-wide", children: product.material })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8 section-enter", style: {
          transitionDelay: "0.2s"
        }, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.35em] uppercase text-gold", children: "Select Size" }),
            /* @__PURE__ */ jsx("button", { className: "text-[0.55rem] tracking-[0.2em] uppercase text-muted hover:text-white transition-colors gold-link", children: "Size Guide" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: product.sizes.map((size) => /* @__PURE__ */ jsx("button", { onClick: () => setSelectedSize(size), className: `size-btn ${selectedSize === size ? "selected" : ""}`, children: size }, size)) }),
          !selectedSize && /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.2em] text-muted mt-2", children: "Please select a size" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 section-enter", style: {
          transitionDelay: "0.25s"
        }, children: [
          /* @__PURE__ */ jsxs("button", { onClick: handleAdd, disabled: !selectedSize, className: `btn-luxury w-full py-5 border flex items-center justify-center gap-3 transition-all ${added ? "border-gold bg-gold text-ink" : selectedSize ? "border-gold text-gold" : "border-border text-muted cursor-not-allowed"}`, "data-cursor-hover": true, children: [
            /* @__PURE__ */ jsx("span", { children: added ? "Added to Bag" : "Add to Bag" }),
            !added && /* @__PURE__ */ jsx(Plus, { size: 12 })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/cart", className: "block w-full text-center py-4 border border-border text-[0.65rem] tracking-[0.2em] uppercase text-muted hover:text-white hover:border-border-light transition-all", children: [
            "View Bag (",
            count,
            ")"
          ] })
        ] }),
        product.features && /* @__PURE__ */ jsxs("div", { className: "mt-10 pt-10 border-t border-border section-enter", style: {
          transitionDelay: "0.3s"
        }, children: [
          /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-5", children: "Details" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: product.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-silver/60 tracking-wide", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gold mt-1.5 shrink-0", children: "—" }),
            f
          ] }, f)) })
        ] })
      ] })
    ] }) }),
    related.length > 0 && /* @__PURE__ */ jsx("div", { className: "border-t border-border py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-3", children: "You May Also Like" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl tracking-widest mb-12", children: "COMPLETE THE FIT" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6", children: related.map((p) => /* @__PURE__ */ jsxs(Link, { to: "/products/$productId", params: {
        productId: String(p.id)
      }, className: "product-card group block", "data-cursor-hover": true, children: [
        /* @__PURE__ */ jsxs("div", { className: "product-card-img-wrap aspect-[4/5] bg-surface", children: [
          /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, className: "product-card-img", loading: "lazy" }),
          /* @__PURE__ */ jsx("img", { src: p.hoverImage, alt: "", "aria-hidden": true, className: "product-card-img product-card-img-hover", loading: "lazy" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-sm tracking-widest", children: p.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm font-light text-silver mt-1", children: [
            "$",
            p.price
          ] })
        ] })
      ] }, p.id)) })
    ] }) })
  ] });
}
export {
  RouteComponent as component
};
