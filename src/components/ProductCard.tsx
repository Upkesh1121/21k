import { Link } from '@tanstack/react-router'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
  size?: 'normal' | 'large'
}

export function ProductCard({ product, size = 'normal' }: ProductCardProps) {
  const aspectClass = size === 'large' ? 'aspect-[3/4]' : 'aspect-[4/5]'

  return (
    <Link
      to="/products/$productId"
      params={{ productId: String(product.id) }}
      className="product-card group block"
      data-cursor-hover
    >
      <div className={`product-card-img-wrap ${aspectClass} bg-surface`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />
        <img
          src={product.hoverImage}
          alt=""
          aria-hidden
          className="product-card-img product-card-img-hover"
          loading="lazy"
        />

        {/* badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="text-[0.55rem] tracking-[0.25em] uppercase bg-gold text-ink px-2 py-1 font-body font-medium">
              New
            </span>
          )}
          {product.isLimited && (
            <span className="text-[0.55rem] tracking-[0.25em] uppercase border border-gold text-gold px-2 py-1 font-body">
              Limited
            </span>
          )}
        </div>

        {/* quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <p className="text-[0.6rem] tracking-[0.25em] uppercase text-silver/80">
            View Product
          </p>
        </div>
      </div>

      <div className="mt-3 px-0.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-muted mb-0.5">
              {product.collection}
            </p>
            <h3 className="font-display text-sm tracking-widest text-white/90 leading-tight">
              {product.name}
            </h3>
          </div>
          <p className="text-sm font-body font-light text-silver shrink-0 mt-0.5">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  )
}
