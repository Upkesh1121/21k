export interface Product {
  id: number
  name: string
  subtitle: string
  image: string
  hoverImage: string
  description: string
  shortDescription: string
  price: number
  category: 'hoodies' | 'jackets' | 'bottoms' | 'tees' | 'accessories'
  sizes: string[]
  isNew?: boolean
  isLimited?: boolean
  isSoldOut?: boolean
  material?: string
  features?: string[]
  collection?: string
}

const products: Array<Product> = [
  {
    id: 1,
    name: '21K VOID HOODIE',
    subtitle: 'Chapter I — Darkness',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f462f2a0?w=800&q=80&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80&fit=crop',
    description: 'The VOID Hoodie is a meditation on absence. Constructed from 480gsm heavyweight French terry, it drapes with architectural intention — a garment that commands space without demanding attention. The oversized silhouette follows a decade of study in proportion theory, cut from a single pattern piece across the back panel to eliminate seam interruption. Triple-stitched cuffs. Tonal embroidery. Built to outlast trends by not participating in them.',
    shortDescription: '480gsm heavyweight French terry. Oversized drop-shoulder. Born from darkness.',
    price: 285,
    category: 'hoodies',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    isLimited: false,
    material: '100% Heavyweight French Terry Cotton (480gsm)',
    features: ['Drop-shoulder construction', 'Triple-stitched seams', 'Tonal chest embroidery', 'Kangaroo pocket', 'Ribbed cuffs & hem'],
    collection: 'VOID',
  },
  {
    id: 2,
    name: '21K PHANTOM JACKET',
    subtitle: 'Chapter II — Armor',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80&fit=crop',
    description: 'The PHANTOM Jacket is structured silence. A technical shell constructed from matte-finish ripstop nylon with a DWR coating — water-resistant without advertising it. The silhouette is precise: elongated body, structured shoulders, minimal hardware in gunmetal. The back panel carries a single debossed 21K serif mark. This is armor. Quiet, considered, absolute.',
    shortDescription: 'Technical ripstop shell. Elongated silhouette. Gunmetal hardware.',
    price: 485,
    category: 'jackets',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    isLimited: true,
    material: '100% Matte Ripstop Nylon with DWR coating',
    features: ['DWR water-resistant coating', 'Elongated body cut', 'Debossed back logo', 'Gunmetal YKK zippers', 'Internal storm cuffs'],
    collection: 'VOID',
  },
  {
    id: 3,
    name: '21K CARGO TROUSERS',
    subtitle: 'Chapter III — Structure',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80&fit=crop',
    description: 'The CARGO Trousers reject the military surplus aesthetic entirely. Precision-cut workwear trousers in heavyweight canvas, tapered from the hip and breaking cleanly at the ankle. The utility pockets are architecturally proportioned — functional without being utilitarian. A hidden waistband adjustment system eliminates the need for a belt while maintaining clean lines. 580gsm canvas that breaks in with wear.',
    shortDescription: '580gsm heavyweight canvas. Precision-tapered silhouette. Hidden adjustment system.',
    price: 340,
    category: 'bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    isNew: false,
    isLimited: false,
    material: '100% Heavyweight Canvas Cotton (580gsm)',
    features: ['Hidden waistband adjustment', 'Architecturally proportioned pockets', 'Tapered leg with ankle break', 'Reinforced stress points', 'Bartack detailing'],
    collection: 'FOUNDATION',
  },
  {
    id: 4,
    name: '21K SIGNAL TEE',
    subtitle: 'Chapter I — Frequency',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80&fit=crop',
    description: 'The SIGNAL Tee is the foundation — the everyday uniform of the 21K world. 260gsm supima cotton, preshrunk and garment-dyed for a matte, lived-in quality that premium blanks never achieve. The fit is oversized-but-architectural: boxy through the chest, falling straight to a raw-hemmed edge. The 21K wordmark is debossed on the chest — invisible until light hits it at angle.',
    shortDescription: '260gsm supima cotton. Garment-dyed. Debossed invisible wordmark.',
    price: 145,
    category: 'tees',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    isNew: false,
    isLimited: false,
    material: '100% Supima Cotton (260gsm) — Garment Dyed',
    features: ['Garment-dyed finish', 'Preshrunk construction', 'Raw hem finish', 'Debossed chest mark', 'Reinforced collar'],
    collection: 'FOUNDATION',
  },
  {
    id: 5,
    name: '21K GHOST SWEATPANT',
    subtitle: 'Chapter II — Rest',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80&fit=crop',
    description: 'The GHOST Sweatpant is comfort without compromise. A 380gsm loopback cotton fleece with a refined silhouette that bridges the gap between luxury and utility. The waistband sits naturally at the hip, tapering through the leg to a ribbed ankle cuff. Dual-construction pockets with no visible stitching. A single embroidered 21K mark at the left knee.',
    shortDescription: '380gsm loopback fleece. Tapered silhouette. Invisible pocket construction.',
    price: 225,
    category: 'bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    isNew: false,
    isLimited: false,
    material: '100% Loopback Cotton Fleece (380gsm)',
    features: ['Tapered leg construction', 'Invisible pocket seaming', 'Elastic waistband', 'Ribbed ankle cuffs', 'Embroidered knee mark'],
    collection: 'FOUNDATION',
  },
  {
    id: 6,
    name: '21K ECLIPSE CAP',
    subtitle: 'Chapter I — Crown',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1556821840-3a63f462f2a0?w=800&q=80&fit=crop',
    description: 'The ECLIPSE Cap is a study in restraint. Six-panel structured wool blend with a mid-profile fit that neither demands attention nor surrenders it. The brim curves with a mathematical arc — 2.75 inches, pressed flat under 180g/cm² for a permanent set. The only marking is a single 21K serif letterform stitched in tonal thread on the front panel.',
    shortDescription: 'Structured wool blend. Mathematical brim arc. Tonal 21K mark.',
    price: 115,
    category: 'accessories',
    sizes: ['ONE SIZE'],
    isNew: false,
    isLimited: true,
    material: '80% Wool / 20% Polyester blend',
    features: ['Mid-profile structured fit', 'Mathematical 2.75" brim arc', 'Tonal embroidery', 'Authentic snap closure', 'Moisture-wicking sweatband'],
    collection: 'VOID',
  },
  {
    id: 7,
    name: '21K NOIR BOMBER',
    subtitle: 'Chapter III — Legacy',
    image: 'https://images.unsplash.com/photo-1618898909019-010e4e234c55?w=800&q=80&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80&fit=crop',
    description: 'The NOIR Bomber is the apex of the VOID collection — a garment 18 months in development. The shell is custom-woven matte satin that photographs as flat black but shifts with movement. The MA-1 silhouette is referenced but elevated: extended length, dropped shoulders, slim knit collar and cuffs. An interior lining in deep burgundy silk charmeuse — the only warmth in an otherwise cold garment.',
    shortDescription: 'Custom matte satin shell. Silk charmeuse lining. 18 months in development.',
    price: 620,
    category: 'jackets',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    isLimited: true,
    material: 'Custom Matte Satin Shell / Silk Charmeuse Lining',
    features: ['Custom woven matte satin', 'Burgundy silk charmeuse interior', 'Extended body length', 'Dropped shoulder construction', 'Tonal YKK hardware'],
    collection: 'VOID',
  },
  {
    id: 8,
    name: '21K FOUNDATION HOODIE',
    subtitle: 'Chapter I — Origin',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1556821840-3a63f462f2a0?w=800&q=80&fit=crop',
    description: 'Where it all started. The FOUNDATION Hoodie is the original 21K garment — the first piece developed, the standard for everything that followed. 420gsm midweight French terry in a relaxed-but-considered fit. The hood is oversized with a structured inner layer that holds its shape. The chest carries the original 21K wordmark in raised puff print.',
    shortDescription: '420gsm midweight French terry. The original 21K design. Puff-print wordmark.',
    price: 265,
    category: 'hoodies',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    isNew: false,
    isLimited: false,
    material: '100% French Terry Cotton (420gsm)',
    features: ['Structured double-layer hood', 'Puff-print wordmark', 'Relaxed true-to-size fit', 'Ribbed cuffs & waistband', 'Centre kangaroo pocket'],
    collection: 'FOUNDATION',
  },
]

export default products
