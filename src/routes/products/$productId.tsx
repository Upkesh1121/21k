import { Link, createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import products from '../../data/products'
import { useCart } from '@/context/cart'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find(p => p.id === +params.productId)
    if (!product) throw new Error('Product not found')
    return product
  },
})

function useSectionObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.section-enter')
    const obs = new IntersectionObserver(
      e => e.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target) } }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function RouteComponent() {
  const product = Route.useLoaderData()
  const { addItem, count } = useCart()
  const [activeImage, setActiveImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [added, setAdded] = useState(false)
  const images = [product.image, product.hoverImage]
  const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3)
  useSectionObserver()

  const handleAdd = () => {
    if (!selectedSize) return
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: 1,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center gap-3">
          <Link to="/" className="text-[0.55rem] tracking-[0.2em] uppercase text-muted hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-muted/40 text-xs">/</span>
          <Link to="/shop" className="text-[0.55rem] tracking-[0.2em] uppercase text-muted hover:text-white transition-colors">
            Shop
          </Link>
          <span className="text-muted/40 text-xs">/</span>
          <span className="text-[0.55rem] tracking-[0.2em] uppercase text-silver/70">{product.name}</span>
        </div>
      </div>

      {/* Product Layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28">
          {/* Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[4/5] bg-surface overflow-hidden group">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImage === i ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}

              {/* Nav arrows */}
              <button
                onClick={() => setActiveImage(i => (i - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => setActiveImage(i => (i + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={14} />
              </button>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="text-[0.55rem] tracking-[0.25em] uppercase bg-gold text-ink px-2 py-1">
                    New
                  </span>
                )}
                {product.isLimited && (
                  <span className="text-[0.55rem] tracking-[0.25em] uppercase border border-gold text-gold px-2 py-1">
                    Limited
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 overflow-hidden border transition-border-color ${
                    activeImage === i ? 'border-gold' : 'border-border hover:border-border-light'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="section-enter">
              <p className="text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-2">
                {product.collection} / {product.subtitle}
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-widest leading-none mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-light text-silver mb-8">${product.price}</p>
              <span className="gold-divider mb-8 block" />
            </div>

            <p
              className="text-sm leading-[2.2] text-silver/70 tracking-wide mb-10 section-enter"
              style={{ transitionDelay: '0.1s' }}
            >
              {product.description}
            </p>

            {/* Material */}
            {product.material && (
              <div
                className="mb-8 pb-8 border-b border-border section-enter"
                style={{ transitionDelay: '0.15s' }}
              >
                <p className="text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-2">Material</p>
                <p className="text-sm text-silver/70 tracking-wide">{product.material}</p>
              </div>
            )}

            {/* Size selector */}
            <div
              className="mb-8 section-enter"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-[0.55rem] tracking-[0.35em] uppercase text-gold">Select Size</p>
                <button className="text-[0.55rem] tracking-[0.2em] uppercase text-muted hover:text-white transition-colors gold-link">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-[0.55rem] tracking-[0.2em] text-muted mt-2">Please select a size</p>
              )}
            </div>

            {/* Add to cart */}
            <div
              className="space-y-3 section-enter"
              style={{ transitionDelay: '0.25s' }}
            >
              <button
                onClick={handleAdd}
                disabled={!selectedSize}
                className={`btn-luxury w-full py-5 border flex items-center justify-center gap-3 transition-all ${
                  added
                    ? 'border-gold bg-gold text-ink'
                    : selectedSize
                    ? 'border-gold text-gold'
                    : 'border-border text-muted cursor-not-allowed'
                }`}
                data-cursor-hover
              >
                <span>{added ? 'Added to Bag' : 'Add to Bag'}</span>
                {!added && <Plus size={12} />}
              </button>

              <Link
                to="/cart"
                className="block w-full text-center py-4 border border-border text-[0.65rem] tracking-[0.2em] uppercase text-muted hover:text-white hover:border-border-light transition-all"
              >
                View Bag ({count})
              </Link>
            </div>

            {/* Features */}
            {product.features && (
              <div
                className="mt-10 pt-10 border-t border-border section-enter"
                style={{ transitionDelay: '0.3s' }}
              >
                <p className="text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-5">Details</p>
                <ul className="space-y-2">
                  {product.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-silver/60 tracking-wide">
                      <span className="text-gold mt-1.5 shrink-0">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Complete the look */}
      {related.length > 0 && (
        <div className="border-t border-border py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <p className="text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-3">You May Also Like</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-widest mb-12">
              COMPLETE THE FIT
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {related.map(p => (
                <Link
                  key={p.id}
                  to="/products/$productId"
                  params={{ productId: String(p.id) }}
                  className="product-card group block"
                  data-cursor-hover
                >
                  <div className="product-card-img-wrap aspect-[4/5] bg-surface">
                    <img src={p.image} alt={p.name} className="product-card-img" loading="lazy" />
                    <img src={p.hoverImage} alt="" aria-hidden className="product-card-img product-card-img-hover" loading="lazy" />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-display text-sm tracking-widest">{p.name}</h3>
                    <p className="text-sm font-light text-silver mt-1">${p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
