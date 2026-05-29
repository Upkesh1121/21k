import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Send } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="border-b border-border py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-3">Get in Touch</p>
          <h1 className="font-display text-7xl md:text-[9rem] tracking-widest leading-none">
            CONTACT
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: info */}
          <div>
            <p className="text-sm leading-[2.2] text-silver/60 tracking-wide mb-14 max-w-sm">
              For press enquiries, collaborations, wholesale requests, or general questions — reach out via the form or our direct channels.
            </p>

            <div className="space-y-10">
              {[
                { label: 'General Enquiries', value: 'info@21k.world' },
                { label: 'Press & Media', value: 'press@21k.world' },
                { label: 'Wholesale', value: 'trade@21k.world' },
                { label: 'Customer Support', value: 'support@21k.world' },
              ].map(item => (
                <div key={item.label} className="border-b border-border pb-8">
                  <p className="text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-2">{item.label}</p>
                  <p className="text-sm text-silver/70 tracking-wider font-light">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-start justify-center py-16">
                <span className="gold-divider mb-8" />
                <h2 className="font-display text-4xl tracking-widest text-white mb-4">
                  MESSAGE RECEIVED
                </h2>
                <p className="text-sm text-silver/60 tracking-wide leading-relaxed max-w-xs">
                  We'll be in touch within 24 hours. If your enquiry is urgent, email us directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                  { id: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this regarding?' },
                ].map(field => (
                  <div key={field.id}>
                    <label className="block text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))}
                      required
                      className="w-full bg-transparent border-b border-border focus:border-gold py-3 text-sm text-white placeholder:text-muted outline-none transition-colors duration-300 tracking-wide"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us what's on your mind"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    className="w-full bg-transparent border-b border-border focus:border-gold py-3 text-sm text-white placeholder:text-muted outline-none transition-colors duration-300 tracking-wide resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="btn-luxury border border-gold text-gold px-8 py-4 inline-flex items-center gap-3 group"
                    data-cursor-hover
                  >
                    <span>Send Message</span>
                    <Send size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
