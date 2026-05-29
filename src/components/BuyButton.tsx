import { useEffect, useState } from 'react'
import { createCheckoutSession, getStripeEnabled } from '@/lib/stripe'
import { useCart } from '@/context/cart'
import type { Product } from '@/data/products'

interface BuyButtonProps {
  product: Product
  selectedSize: string
  className?: string
}

export function BuyButton({ product, selectedSize, className = '' }: BuyButtonProps) {
  const [loading, setLoading] = useState(false)
  const [stripeEnabled, setStripeEnabled] = useState<boolean | null>(null)
  const { addItem } = useCart()

  useEffect(() => {
    getStripeEnabled().then(setStripeEnabled)
  }, [])

  const handleBuy = async () => {
    if (!selectedSize) return
    setLoading(true)
    try {
      addItem({ id: product.id, name: product.name, price: product.price, image: product.image, size: selectedSize, quantity: 1 })
      const url = await createCheckoutSession({ data: product.id })
      if (url) window.location.href = url
    } catch {
      setLoading(false)
    }
  }

  if (stripeEnabled === false) {
    return (
      <button disabled className={`btn-luxury border border-border text-muted px-6 py-3 opacity-40 ${className}`}>
        <span>Checkout Unavailable</span>
      </button>
    )
  }

  return (
    <button
      onClick={handleBuy}
      disabled={loading || stripeEnabled === null || !selectedSize}
      className={`btn-luxury border border-white text-white px-6 py-3 disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
      data-cursor-hover
    >
      <span>{loading ? 'Processing...' : 'Buy Now'}</span>
    </button>
  )
}
