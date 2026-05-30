import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function CheckoutCancel() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center pt-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-lg", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.5em] uppercase text-muted mb-4", children: "Checkout Cancelled" }),
    /* @__PURE__ */ jsx("h1", { className: "font-display text-6xl md:text-8xl tracking-widest mb-8 leading-none text-white/40", children: "CANCELLED." }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-silver/60 tracking-wider leading-loose mb-12 max-w-xs mx-auto", children: "No charges were made. Your bag is still waiting when you're ready." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ jsx(Link, { to: "/cart", className: "btn-luxury border border-gold text-gold px-8 py-4 inline-block", "data-cursor-hover": true, children: /* @__PURE__ */ jsx("span", { children: "Return to Bag" }) }),
      /* @__PURE__ */ jsx(Link, { to: "/shop", className: "btn-luxury border border-border text-muted px-8 py-4 inline-block hover:text-white hover:border-border-light", children: /* @__PURE__ */ jsx("span", { children: "Keep Browsing" }) })
    ] })
  ] }) });
}
export {
  CheckoutCancel as component
};
