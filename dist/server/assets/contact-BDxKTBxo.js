import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Send } from "lucide-react";
function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-border py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-3", children: "Get in Touch" }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-7xl md:text-[9rem] tracking-widest leading-none", children: "CONTACT" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-[2.2] text-silver/60 tracking-wide mb-14 max-w-sm", children: "For press enquiries, collaborations, wholesale requests, or general questions — reach out via the form or our direct channels." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-10", children: [{
          label: "General Enquiries",
          value: "info@21k.world"
        }, {
          label: "Press & Media",
          value: "press@21k.world"
        }, {
          label: "Wholesale",
          value: "trade@21k.world"
        }, {
          label: "Customer Support",
          value: "support@21k.world"
        }].map((item) => /* @__PURE__ */ jsxs("div", { className: "border-b border-border pb-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-2", children: item.label }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-silver/70 tracking-wider font-light", children: item.value })
        ] }, item.label)) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: sent ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-center py-16", children: [
        /* @__PURE__ */ jsx("span", { className: "gold-divider mb-8" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl tracking-widest text-white mb-4", children: "MESSAGE RECEIVED" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-silver/60 tracking-wide leading-relaxed max-w-xs", children: "We'll be in touch within 24 hours. If your enquiry is urgent, email us directly." })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        [{
          id: "name",
          label: "Full Name",
          type: "text",
          placeholder: "Your full name"
        }, {
          id: "email",
          label: "Email Address",
          type: "email",
          placeholder: "your@email.com"
        }, {
          id: "subject",
          label: "Subject",
          type: "text",
          placeholder: "What is this regarding?"
        }].map((field) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-2", children: field.label }),
          /* @__PURE__ */ jsx("input", { type: field.type, placeholder: field.placeholder, value: form[field.id], onChange: (e) => setForm((f) => ({
            ...f,
            [field.id]: e.target.value
          })), required: true, className: "w-full bg-transparent border-b border-border focus:border-gold py-3 text-sm text-white placeholder:text-muted outline-none transition-colors duration-300 tracking-wide" })
        ] }, field.id)),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-2", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { rows: 5, placeholder: "Tell us what's on your mind", value: form.message, onChange: (e) => setForm((f) => ({
            ...f,
            message: e.target.value
          })), required: true, className: "w-full bg-transparent border-b border-border focus:border-gold py-3 text-sm text-white placeholder:text-muted outline-none transition-colors duration-300 tracking-wide resize-none" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxs("button", { type: "submit", className: "btn-luxury border border-gold text-gold px-8 py-4 inline-flex items-center gap-3 group", "data-cursor-hover": true, children: [
          /* @__PURE__ */ jsx("span", { children: "Send Message" }),
          /* @__PURE__ */ jsx(Send, { size: 12, className: "group-hover:translate-x-1 transition-transform" })
        ] }) })
      ] }) })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
