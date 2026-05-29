import { Link, createFileRoute } from '@tanstack/react-router'
import { useCart } from '@/context/cart'
import { useEffect } from 'react'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
})

function CheckoutSuccess() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-lg">
        <span className="gold-divider mx-auto mb-12 block" />

        <p className="text-[0.55rem] tracking-[0.5em] uppercase text-gold mb-4">
          Order Confirmed
        </p>
        <h1 className="font-display text-6xl md:text-8xl tracking-widest mb-8 leading-none">
          THANK<br />YOU.
        </h1>
        <p className="text-sm text-silver/60 tracking-wider leading-loose mb-12 max-w-xs mx-auto">
          Your order is confirmed and being prepared with care. You'll receive a tracking notification shortly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/shop"
            className="btn-luxury border border-gold text-gold px-8 py-4 inline-block"
            data-cursor-hover
          >
            <span>Continue Shopping</span>
          </Link>
          <Link
            to="/"
            className="btn-luxury border border-border text-muted px-8 py-4 inline-block hover:text-white hover:border-border-light"
          >
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
