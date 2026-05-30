import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { u as useCart } from "./router-DnDw5gcX.js";
import { useEffect } from "react";
import "lucide-react";
import "./products-9Z2Dmzon.js";
function CheckoutSuccess() {
  const {
    clearCart
  } = useCart();
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center pt-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-lg", children: [
    /* @__PURE__ */ jsx("span", { className: "gold-divider mx-auto mb-12 block" }),
    /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.5em] uppercase text-gold mb-4", children: "Order Confirmed" }),
    /* @__PURE__ */ jsxs("h1", { className: "font-display text-6xl md:text-8xl tracking-widest mb-8 leading-none", children: [
      "THANK",
      /* @__PURE__ */ jsx("br", {}),
      "YOU."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-silver/60 tracking-wider leading-loose mb-12 max-w-xs mx-auto", children: "Your order is confirmed and being prepared with care. You'll receive a tracking notification shortly." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ jsx(Link, { to: "/shop", className: "btn-luxury border border-gold text-gold px-8 py-4 inline-block", "data-cursor-hover": true, children: /* @__PURE__ */ jsx("span", { children: "Continue Shopping" }) }),
      /* @__PURE__ */ jsx(Link, { to: "/", className: "btn-luxury border border-border text-muted px-8 py-4 inline-block hover:text-white hover:border-border-light", children: /* @__PURE__ */ jsx("span", { children: "Return Home" }) })
    ] })
  ] }) });
}
export {
  CheckoutSuccess as component
};
