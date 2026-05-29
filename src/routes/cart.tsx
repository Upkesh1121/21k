import { createFileRoute, Link } from '@tanstack/react-router'
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/cart'
import { createCheckoutSession, getStripeEnabled } from '@/lib/stripe'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/cart')({
  component: CartPage,
})

function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()
  const [stripeEnabled, setStripeEnabled] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getStripeEnabled().then(setStripeEnabled)
  }, [])

  const handleCheckout = async () => {
    if (!items.length) return
    setLoading(true)
    try {
      // Use first item for Stripe demo checkout
      const url = await createCheckoutSession({ data: items[0].id })
      if (url) window.location.href = url
    } catch {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center py-32 text-center">
        <p className="font-display text-[0.55rem] tracking-[0.5em] uppercase text-gold mb-4">Your Bag</p>
        <h1 className="font-display text-5xl md:text-7xl tracking-widest text-white/20 mb-8">EMPTY</h1>
        <p className="text-sm text-muted tracking-wide mb-12">Your bag is empty — let's fix that.</p>
        <Link to="/shop" className="btn-luxury border border-gold text-gold px-8 py-4 inline-block" data-cursor-hover>
          <span>Explore the Collection</span>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="border-b border-border py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-3">Your Selection</p>
          <h1 className="font-display text-5xl md:text-7xl tracking-widest">YOUR BAG</h1>
          <p className="text-sm text-muted mt-2">{items.length} {items.length === 1 ? 'item' : 'items'}</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Items list */}
          <div className="lg:col-span-2 space-y-0">
            {items.map(item => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-6 border-b border-border py-8"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img bg-surface"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="text-[0.55rem] tracking-[0.3em] uppercase text-muted mb-1">21K</p>
                      <h3 className="font-display text-lg tracking-widest text-white">{item.name}</h3>
                      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-muted mt-1">
                        Size: {item.size}
                      </p>
                    </div>
                    <p className="text-sm font-light text-silver shrink-0">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    {/* Qty control */}
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="px-3 py-2 text-muted hover:text-white transition-colors"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="px-4 text-sm text-white font-light min-w-[2.5rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="px-3 py-2 text-muted hover:text-white transition-colors"
                      >
                        <Plus size={10} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="text-muted hover:text-white transition-colors"
                    >
                      <Trash2 size={14} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="border border-border p-8 sticky top-28">
              <p className="text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-8">Order Summary</p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-muted tracking-wide">Subtotal</span>
                  <span className="text-silver">${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted tracking-wide">Shipping</span>
                  <span className="text-silver">Calculated at checkout</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between">
                  <span className="text-sm tracking-wider text-white">Total</span>
                  <span className="text-lg font-light text-white">${total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={loading || stripeEnabled === false || stripeEnabled === null}
                className="btn-luxury w-full border border-gold text-gold py-4 text-center flex items-center justify-center gap-3 group disabled:opacity-40 disabled:pointer-events-none"
                data-cursor-hover
              >
                <span>{loading ? 'Redirecting...' : stripeEnabled === false ? 'Checkout Unavailable' : 'Proceed to Checkout'}</span>
                {!loading && stripeEnabled !== false && (
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              <p className="text-[0.55rem] tracking-[0.2em] text-muted text-center mt-4">
                Secure checkout via Stripe
              </p>

              <div className="mt-6 pt-6 border-t border-border">
                <Link to="/shop" className="text-[0.6rem] tracking-[0.2em] uppercase text-muted hover:text-white transition-colors gold-link">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
