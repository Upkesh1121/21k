import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { u as useCart } from "./router-DnDw5gcX.js";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from "../server.js";
import { useState, useEffect } from "react";
import "./products-9Z2Dmzon.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const getStripeEnabled = createServerFn({
  method: "GET"
}).handler(createSsrRpc("3d2e99b45e2882a4173fd21ceaa20ca741129ca5fa4868bce25b4278795eeeaf"));
const createCheckoutSession = createServerFn({
  method: "POST"
}).inputValidator((productId) => productId).handler(createSsrRpc("331287a1bf0e39b2e44801cb3b35904ce6c343245195fa09bb019bb3f15ea58c"));
function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    total
  } = useCart();
  const [stripeEnabled, setStripeEnabled] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getStripeEnabled().then(setStripeEnabled);
  }, []);
  const handleCheckout = async () => {
    if (!items.length) return;
    setLoading(true);
    try {
      const url = await createCheckoutSession({
        data: items[0].id
      });
      if (url) window.location.href = url;
    } catch {
      setLoading(false);
    }
  };
  if (items.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20 flex flex-col items-center justify-center py-32 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-[0.55rem] tracking-[0.5em] uppercase text-gold mb-4", children: "Your Bag" }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-7xl tracking-widest text-white/20 mb-8", children: "EMPTY" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted tracking-wide mb-12", children: "Your bag is empty — let's fix that." }),
      /* @__PURE__ */ jsx(Link, { to: "/shop", className: "btn-luxury border border-gold text-gold px-8 py-4 inline-block", "data-cursor-hover": true, children: /* @__PURE__ */ jsx("span", { children: "Explore the Collection" }) })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-border py-12 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-3", children: "Your Selection" }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-7xl tracking-widest", children: "YOUR BAG" }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted mt-2", children: [
        items.length,
        " ",
        items.length === 1 ? "item" : "items"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 py-12", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 space-y-0", children: items.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6 border-b border-border py-8", children: [
        /* @__PURE__ */ jsx("img", { src: item.image, alt: item.name, className: "cart-item-img bg-surface" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.3em] uppercase text-muted mb-1", children: "21K" }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-lg tracking-widest text-white", children: item.name }),
              /* @__PURE__ */ jsxs("p", { className: "text-[0.6rem] tracking-[0.2em] uppercase text-muted mt-1", children: [
                "Size: ",
                item.size
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm font-light text-silver shrink-0", children: [
              "$",
              (item.price * item.quantity).toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center border border-border", children: [
              /* @__PURE__ */ jsx("button", { onClick: () => updateQuantity(item.id, item.size, item.quantity - 1), className: "px-3 py-2 text-muted hover:text-white transition-colors", children: /* @__PURE__ */ jsx(Minus, { size: 10 }) }),
              /* @__PURE__ */ jsx("span", { className: "px-4 text-sm text-white font-light min-w-[2.5rem] text-center", children: item.quantity }),
              /* @__PURE__ */ jsx("button", { onClick: () => updateQuantity(item.id, item.size, item.quantity + 1), className: "px-3 py-2 text-muted hover:text-white transition-colors", children: /* @__PURE__ */ jsx(Plus, { size: 10 }) })
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: () => removeItem(item.id, item.size), className: "text-muted hover:text-white transition-colors", children: /* @__PURE__ */ jsx(Trash2, { size: 14, strokeWidth: 1.5 }) })
          ] })
        ] })
      ] }, `${item.id}-${item.size}`)) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "border border-border p-8 sticky top-28", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-8", children: "Order Summary" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted tracking-wide", children: "Subtotal" }),
            /* @__PURE__ */ jsxs("span", { className: "text-silver", children: [
              "$",
              total.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted tracking-wide", children: "Shipping" }),
            /* @__PURE__ */ jsx("span", { className: "text-silver", children: "Calculated at checkout" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-4 flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm tracking-wider text-white", children: "Total" }),
            /* @__PURE__ */ jsxs("span", { className: "text-lg font-light text-white", children: [
              "$",
              total.toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("button", { onClick: handleCheckout, disabled: loading || stripeEnabled === false || stripeEnabled === null, className: "btn-luxury w-full border border-gold text-gold py-4 text-center flex items-center justify-center gap-3 group disabled:opacity-40 disabled:pointer-events-none", "data-cursor-hover": true, children: [
          /* @__PURE__ */ jsx("span", { children: loading ? "Redirecting..." : stripeEnabled === false ? "Checkout Unavailable" : "Proceed to Checkout" }),
          !loading && stripeEnabled !== false && /* @__PURE__ */ jsx(ArrowRight, { size: 12, className: "group-hover:translate-x-1 transition-transform" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.2em] text-muted text-center mt-4", children: "Secure checkout via Stripe" }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 pt-6 border-t border-border", children: /* @__PURE__ */ jsx(Link, { to: "/shop", className: "text-[0.6rem] tracking-[0.2em] uppercase text-muted hover:text-white transition-colors gold-link", children: "Continue Shopping" }) })
      ] }) })
    ] }) })
  ] });
}
export {
  CartPage as component
};
