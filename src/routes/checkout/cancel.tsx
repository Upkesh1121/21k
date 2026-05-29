import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/cancel')({
  component: CheckoutCancel,
})

function CheckoutCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-lg">
        <p className="text-[0.55rem] tracking-[0.5em] uppercase text-muted mb-4">
          Checkout Cancelled
        </p>
        <h1 className="font-display text-6xl md:text-8xl tracking-widest mb-8 leading-none text-white/40">
          CANCELLED.
        </h1>
        <p className="text-sm text-silver/60 tracking-wider leading-loose mb-12 max-w-xs mx-auto">
          No charges were made. Your bag is still waiting when you're ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/cart"
            className="btn-luxury border border-gold text-gold px-8 py-4 inline-block"
            data-cursor-hover
          >
            <span>Return to Bag</span>
          </Link>
          <Link
            to="/shop"
            className="btn-luxury border border-border text-muted px-8 py-4 inline-block hover:text-white hover:border-border-light"
          >
            <span>Keep Browsing</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
