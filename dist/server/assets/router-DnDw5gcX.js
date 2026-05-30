import { Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, createContext, useContext, useEffect, useRef } from "react";
import { ShoppingBag, X, Menu } from "lucide-react";
import { p as products } from "./products-9Z2Dmzon.js";
const CartContext = createContext(null);
function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.size === item.size);
      if (existing) {
        return prev.map(
          (i) => i.id === item.id && i.size === item.size ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };
  const removeItem = (id, size) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size)));
  };
  const updateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      removeItem(id, size);
      return;
    }
    setItems(
      (prev) => prev.map((i) => i.id === id && i.size === size ? { ...i, quantity } : i)
    );
  };
  const clearCart = () => setItems([]);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  return /* @__PURE__ */ jsx(CartContext.Provider, { value: { items, addItem, removeItem, updateQuantity, clearCart, total, count }, children });
}
function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2400);
    const hideTimer = setTimeout(() => setVisible(false), 3200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  if (!visible) return null;
  return /* @__PURE__ */ jsxs("div", { className: `loading-screen ${fading ? "fade-out" : ""}`, children: [
    /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "21K Logo", className: "loading-logo" }),
    /* @__PURE__ */ jsx("p", { className: "loading-tagline", children: "Luxury Streetwear — Est. MMXXIV" }),
    /* @__PURE__ */ jsx("div", { className: "loading-bar" })
  ] });
}
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef(0);
  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      rafId.current = requestAnimationFrame(animate);
    };
    const onOver = (e) => {
      const t = e.target;
      if (t.closest("a, button, [data-cursor-hover]")) {
        ringRef.current?.classList.add("hovered");
      } else {
        ringRef.current?.classList.remove("hovered");
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    rafId.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { ref: dotRef, className: "cursor-dot", style: { left: -100, top: -100 } }),
    /* @__PURE__ */ jsx("div", { ref: ringRef, className: "cursor-ring", style: { left: -100, top: -100 } })
  ] });
}
const links = [
  { to: "/shop", label: "Shop" },
  { to: "/lookbook", label: "Lookbook" },
  { to: "/about", label: "Philosophy" },
  { to: "/contact", label: "Contact" }
];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count } = useCart();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "nav",
      {
        className: `nav-glass fixed top-0 inset-x-0 z-[100] ${scrolled ? "scrolled" : ""}`,
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/logo.png",
              alt: "21K Logo",
              className: "h-12 w-auto"
            }
          ) }),
          /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center gap-10", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "gold-link text-[0.65rem] tracking-[0.25em] uppercase text-silver hover:text-white transition-colors duration-300",
              children: l.label
            }
          ) }, l.to)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/cart", className: "relative", "data-cursor-hover": true, children: [
              /* @__PURE__ */ jsx(ShoppingBag, { size: 18, className: "text-silver hover:text-white transition-colors", strokeWidth: 1.5 }),
              count > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-gold rounded-full text-[0.5rem] font-body font-medium text-ink flex items-center justify-center leading-none", children: count })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "md:hidden",
                onClick: () => setMobileOpen((v) => !v),
                "aria-label": "Toggle menu",
                children: mobileOpen ? /* @__PURE__ */ jsx(X, { size: 20, className: "text-white", strokeWidth: 1.5 }) : /* @__PURE__ */ jsx(Menu, { size: 20, className: "text-silver", strokeWidth: 1.5 })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `fixed inset-0 z-[99] bg-ink/95 backdrop-blur-xl transition-opacity duration-400 flex flex-col ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center h-16 px-6", children: [
            /* @__PURE__ */ jsx("span", { className: "font-display text-2xl tracking-[0.2em]", children: "21K" }),
            /* @__PURE__ */ jsx("button", { onClick: () => setMobileOpen(false), "aria-label": "Close", children: /* @__PURE__ */ jsx(X, { size: 20, strokeWidth: 1.5 }) })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2 px-8 mt-12", children: links.map((l, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              onClick: () => setMobileOpen(false),
              className: "block font-display text-5xl tracking-widest text-white/80 hover:text-white py-3 transition-colors",
              style: { animationDelay: `${i * 0.06}s` },
              children: l.label
            }
          ) }, l.to)) }),
          /* @__PURE__ */ jsx("div", { className: "mt-auto px-8 pb-12", children: /* @__PURE__ */ jsx("p", { className: "text-[0.6rem] tracking-[0.3em] uppercase text-muted", children: "Built Beyond Trends" }) })
        ]
      }
    )
  ] });
}
const collections = [
  { label: "VOID Collection", to: "/shop?collection=void" },
  { label: "FOUNDATION", to: "/shop?collection=foundation" },
  { label: "Hoodies", to: "/shop?category=hoodies" },
  { label: "Jackets", to: "/shop?category=jackets" },
  { label: "Bottoms", to: "/shop?category=bottoms" }
];
const info = [
  { label: "Philosophy", to: "/about" },
  { label: "Lookbook", to: "/lookbook" },
  { label: "Contact", to: "/contact" },
  { label: "Size Guide", to: "/contact" },
  { label: "Sustainability", to: "/about" }
];
const legal = [
  { label: "Privacy Policy", to: "/contact" },
  { label: "Terms of Service", to: "/contact" },
  { label: "Shipping & Returns", to: "/contact" }
];
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-border bg-ink", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-border overflow-hidden py-3", children: /* @__PURE__ */ jsx("div", { className: "marquee-track", children: [...Array(2)].map((_, i) => /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-8 mr-8", children: ["21K", "—", "LUXURY STREETWEAR", "—", "BUILT BEYOND TRENDS", "—", "EST. MMXXIV", "—", "GLOBAL CULTURE", "—"].map((t, j) => /* @__PURE__ */ jsx(
      "span",
      {
        className: `text-[0.55rem] tracking-[0.35em] ${t === "—" ? "text-gold" : "text-muted"}`,
        children: t
      },
      j
    )) }, i)) }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-2 md:col-span-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-5xl tracking-[0.2em] text-white mb-4", children: "21K" }),
          /* @__PURE__ */ jsx("p", { className: "text-[0.65rem] leading-loose tracking-wide text-muted max-w-[200px]", children: "Luxury streetwear built for those who move between worlds. Exclusivity is not a price point — it's a perspective." }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-5 mt-8", children: ["IG", "TW", "TK"].map((s) => /* @__PURE__ */ jsx("span", { className: "text-[0.55rem] tracking-[0.2em] text-muted hover:text-gold transition-colors gold-link", children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.3em] uppercase text-gold mb-6", children: "Collections" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: collections.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "text-[0.65rem] tracking-[0.1em] text-muted hover:text-white transition-colors gold-link",
              children: l.label
            }
          ) }, l.label)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.3em] uppercase text-gold mb-6", children: "Information" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: info.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "text-[0.65rem] tracking-[0.1em] text-muted hover:text-white transition-colors gold-link",
              children: l.label
            }
          ) }, l.label)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.3em] uppercase text-gold mb-6", children: "The Circle" }),
          /* @__PURE__ */ jsx("p", { className: "text-[0.65rem] tracking-wide text-muted mb-4 leading-relaxed", children: "First access to drops. Members only." }),
          /* @__PURE__ */ jsxs("div", { className: "flex border border-border", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "your@email.com",
                className: "bg-transparent flex-1 px-3 py-2.5 text-[0.65rem] text-white placeholder:text-muted outline-none font-body min-w-0"
              }
            ),
            /* @__PURE__ */ jsx("button", { className: "px-4 text-[0.55rem] tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-ink transition-colors border-l border-border", children: "Join" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.2em] text-muted", children: "© 2024 21K. ALL RIGHTS RESERVED." }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-6", children: legal.map((l) => /* @__PURE__ */ jsx(
          Link,
          {
            to: l.to,
            className: "text-[0.55rem] tracking-[0.15em] text-muted hover:text-silver transition-colors",
            children: l.label
          },
          l.label
        )) })
      ] })
    ] })
  ] });
}
const Route$9 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "21K — Luxury Streetwear Redefined. Built beyond trends." },
      { name: "theme-color", content: "#080808" },
      { title: "21K — Luxury Streetwear" }
    ]
  }),
  shellComponent: RootDocument,
  component: RootLayout
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootLayout() {
  return /* @__PURE__ */ jsxs(CartProvider, { children: [
    /* @__PURE__ */ jsx(LoadingScreen, {}),
    /* @__PURE__ */ jsx(CustomCursor, {}),
    /* @__PURE__ */ jsx("div", { className: "grain-overlay", "aria-hidden": true }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$8 = () => import("./shop-BMhrbuNC.js");
const Route$8 = createFileRoute("/shop")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./lookbook-CDEttf5Y.js");
const Route$7 = createFileRoute("/lookbook")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./contact-BDxKTBxo.js");
const Route$6 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./cart-DWh_yIQc.js");
const Route$5 = createFileRoute("/cart")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./about-C22GK9di.js");
const Route$4 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-oY_hQwnY.js");
const Route$3 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./_productId-D_-EGYhk.js");
const Route$2 = createFileRoute("/products/$productId")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  loader: async ({
    params
  }) => {
    const product = products.find((p) => p.id === +params.productId);
    if (!product) throw new Error("Product not found");
    return product;
  }
});
const $$splitComponentImporter$1 = () => import("./success-s_oHMT-N.js");
const Route$1 = createFileRoute("/checkout/success")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./cancel-0CfooLOj.js");
const Route = createFileRoute("/checkout/cancel")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ShopRoute = Route$8.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$9
});
const LookbookRoute = Route$7.update({
  id: "/lookbook",
  path: "/lookbook",
  getParentRoute: () => Route$9
});
const ContactRoute = Route$6.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$9
});
const CartRoute = Route$5.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$9
});
const AboutRoute = Route$4.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$9
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const ProductsProductIdRoute = Route$2.update({
  id: "/products/$productId",
  path: "/products/$productId",
  getParentRoute: () => Route$9
});
const CheckoutSuccessRoute = Route$1.update({
  id: "/checkout/success",
  path: "/checkout/success",
  getParentRoute: () => Route$9
});
const CheckoutCancelRoute = Route.update({
  id: "/checkout/cancel",
  path: "/checkout/cancel",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CartRoute,
  ContactRoute,
  LookbookRoute,
  ShopRoute,
  CheckoutCancelRoute,
  CheckoutSuccessRoute,
  ProductsProductIdRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$2 as R,
  router as r,
  useCart as u
};
