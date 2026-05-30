import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { p as products } from "./products-9Z2Dmzon.js";
import { P as ProductCard } from "./ProductCard-V_X7pEF4.js";
import "@tanstack/react-router";
const CATEGORIES = ["All", "Hoodies", "Jackets", "Bottoms", "Tees", "Accessories"];
const COLLECTIONS = ["All", "VOID", "FOUNDATION"];
const SORT_OPTIONS = [{
  value: "featured",
  label: "Featured"
}, {
  value: "price-asc",
  label: "Price: Low to High"
}, {
  value: "price-desc",
  label: "Price: High to Low"
}, {
  value: "newest",
  label: "Newest First"
}];
function ShopPage() {
  const [category, setCategory] = useState("All");
  const [collection, setCollection] = useState("All");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filtered = products.filter((p) => category === "All" || p.category === category.toLowerCase()).filter((p) => collection === "All" || p.collection === collection).sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "newest") return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return 0;
  });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-border py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-3", children: "SS26" }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-6xl md:text-8xl tracking-widest", children: "SHOP ALL" }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted mt-3 tracking-wider", children: [
        filtered.length,
        " ",
        filtered.length === 1 ? "piece" : "pieces"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-6 border-b border-border gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-2", children: CATEGORIES.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setCategory(c), className: `text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 border transition-all ${category === c ? "border-gold bg-gold text-ink" : "border-border text-muted hover:border-border-light hover:text-silver"}`, children: c }, c)) }),
        /* @__PURE__ */ jsxs("button", { className: "md:hidden flex items-center gap-2 text-[0.6rem] tracking-[0.2em] uppercase text-silver border border-border px-4 py-2", onClick: () => setFiltersOpen(true), children: [
          /* @__PURE__ */ jsx(SlidersHorizontal, { size: 12 }),
          "Filters"
        ] }),
        /* @__PURE__ */ jsx("select", { value: sort, onChange: (e) => setSort(e.target.value), className: "bg-transparent border border-border text-[0.6rem] tracking-[0.15em] text-silver px-4 py-2 outline-none uppercase", children: SORT_OPTIONS.map((o) => /* @__PURE__ */ jsx("option", { value: o.value, className: "bg-ink text-white", children: o.label }, o.value)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-12", children: filtered.map((p, i) => /* @__PURE__ */ jsx("div", { style: {
        animationDelay: `${i * 0.05}s`
      }, children: /* @__PURE__ */ jsx(ProductCard, { product: p }) }, p.id)) }),
      filtered.length === 0 && /* @__PURE__ */ jsxs("div", { className: "py-32 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-4xl tracking-widest text-muted/40", children: "NO RESULTS" }),
        /* @__PURE__ */ jsx("button", { className: "mt-8 text-[0.6rem] tracking-[0.25em] uppercase text-gold gold-link", onClick: () => {
          setCategory("All");
          setCollection("All");
        }, children: "Clear filters" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `fixed inset-0 z-[200] bg-ink/95 backdrop-blur-xl transition-opacity duration-300 ${filtersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center px-6 h-16 border-b border-border", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[0.6rem] tracking-[0.3em] uppercase text-white", children: "Filters" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setFiltersOpen(false), children: /* @__PURE__ */ jsx(X, { size: 18, strokeWidth: 1.5 }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-6 py-10 space-y-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-5", children: "Category" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2", children: CATEGORIES.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => {
            setCategory(c);
            setFiltersOpen(false);
          }, className: `text-[0.6rem] tracking-[0.15em] uppercase py-3 border transition-all ${category === c ? "border-gold bg-gold text-ink" : "border-border text-muted"}`, children: c }, c)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-5", children: "Collection" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2", children: COLLECTIONS.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => {
            setCollection(c);
            setFiltersOpen(false);
          }, className: `text-[0.6rem] tracking-[0.15em] uppercase py-3 border transition-all ${collection === c ? "border-gold bg-gold text-ink" : "border-border text-muted"}`, children: c }, c)) })
        ] })
      ] })
    ] })
  ] });
}
export {
  ShopPage as component
};
