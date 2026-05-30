import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function ProductCard({ product, size = "normal" }) {
  const aspectClass = size === "large" ? "aspect-[3/4]" : "aspect-[4/5]";
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: "/products/$productId",
      params: { productId: String(product.id) },
      className: "product-card group block",
      "data-cursor-hover": true,
      children: [
        /* @__PURE__ */ jsxs("div", { className: `product-card-img-wrap ${aspectClass} bg-surface`, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: product.image,
              alt: product.name,
              className: "product-card-img",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: product.hoverImage,
              alt: "",
              "aria-hidden": true,
              className: "product-card-img product-card-img-hover",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-3 left-3 flex flex-col gap-1.5", children: [
            product.isNew && /* @__PURE__ */ jsx("span", { className: "text-[0.55rem] tracking-[0.25em] uppercase bg-gold text-ink px-2 py-1 font-body font-medium", children: "New" }),
            product.isLimited && /* @__PURE__ */ jsx("span", { className: "text-[0.55rem] tracking-[0.25em] uppercase border border-gold text-gold px-2 py-1 font-body", children: "Limited" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out", children: /* @__PURE__ */ jsx("p", { className: "text-[0.6rem] tracking-[0.25em] uppercase text-silver/80", children: "View Product" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 px-0.5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-[0.6rem] tracking-[0.25em] uppercase text-muted mb-0.5", children: product.collection }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-sm tracking-widest text-white/90 leading-tight", children: product.name })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm font-body font-light text-silver shrink-0 mt-0.5", children: [
            "$",
            product.price
          ] })
        ] }) })
      ]
    }
  );
}
export {
  ProductCard as P
};
