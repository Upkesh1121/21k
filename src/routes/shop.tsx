import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import products from '@/data/products'
import { ProductCard } from '@/components/ProductCard'

export const Route = createFileRoute('/shop')({
  component: ShopPage,
})

const CATEGORIES = ['All', 'Hoodies', 'Jackets', 'Bottoms', 'Tees', 'Accessories']
const COLLECTIONS = ['All', 'VOID', 'FOUNDATION']
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
]

function ShopPage() {
  const [category, setCategory] = useState('All')
  const [collection, setCollection] = useState('All')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = products
    .filter(p => category === 'All' || p.category === category.toLowerCase())
    .filter(p => collection === 'All' || p.collection === collection)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
      return 0
    })

  return (
    <div className="min-h-screen pt-20">
      {/* Page header */}
      <div className="border-b border-border py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="text-[0.55rem] tracking-[0.4em] uppercase text-gold mb-3">SS26</p>
          <h1 className="font-display text-6xl md:text-8xl tracking-widest">SHOP ALL</h1>
          <p className="text-sm text-muted mt-3 tracking-wider">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Controls bar */}
        <div className="flex items-center justify-between py-6 border-b border-border gap-4 flex-wrap">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2">
            {CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 border transition-all ${
                  category === c
                    ? 'border-gold bg-gold text-ink'
                    : 'border-border text-muted hover:border-border-light hover:text-silver'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            className="md:hidden flex items-center gap-2 text-[0.6rem] tracking-[0.2em] uppercase text-silver border border-border px-4 py-2"
            onClick={() => setFiltersOpen(true)}
          >
            <SlidersHorizontal size={12} />
            Filters
          </button>

          {/* Sort */}
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="bg-transparent border border-border text-[0.6rem] tracking-[0.15em] text-silver px-4 py-2 outline-none uppercase"
          >
            {SORT_OPTIONS.map(o => (
              <option key={o.value} value={o.value} className="bg-ink text-white">
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-12">
          {filtered.map((p, i) => (
            <div key={p.id} style={{ animationDelay: `${i * 0.05}s` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-32 text-center">
            <p className="font-display text-4xl tracking-widest text-muted/40">NO RESULTS</p>
            <button
              className="mt-8 text-[0.6rem] tracking-[0.25em] uppercase text-gold gold-link"
              onClick={() => { setCategory('All'); setCollection('All') }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile filters panel */}
      <div
        className={`fixed inset-0 z-[200] bg-ink/95 backdrop-blur-xl transition-opacity duration-300 ${
          filtersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center px-6 h-16 border-b border-border">
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white">Filters</p>
          <button onClick={() => setFiltersOpen(false)}>
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
        <div className="px-6 py-10 space-y-10">
          <div>
            <p className="text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-5">Category</p>
            <div className="grid grid-cols-3 gap-2">
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  onClick={() => { setCategory(c); setFiltersOpen(false) }}
                  className={`text-[0.6rem] tracking-[0.15em] uppercase py-3 border transition-all ${
                    category === c ? 'border-gold bg-gold text-ink' : 'border-border text-muted'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[0.55rem] tracking-[0.35em] uppercase text-gold mb-5">Collection</p>
            <div className="grid grid-cols-3 gap-2">
              {COLLECTIONS.map(c => (
                <button
                  key={c}
                  onClick={() => { setCollection(c); setFiltersOpen(false) }}
                  className={`text-[0.6rem] tracking-[0.15em] uppercase py-3 border transition-all ${
                    collection === c ? 'border-gold bg-gold text-ink' : 'border-border text-muted'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
