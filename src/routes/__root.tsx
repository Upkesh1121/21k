import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import { CartProvider } from '@/context/cart'
import { LoadingScreen } from '@/components/LoadingScreen'
import { CustomCursor } from '@/components/CustomCursor'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: '21K — Luxury Streetwear Redefined. Built beyond trends.' },
      { name: 'theme-color', content: '#080808' },
      { title: '21K — Luxury Streetwear' },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout() {
  return (
    <CartProvider>
      <LoadingScreen />
      <CustomCursor />
      <div className="grain-overlay" aria-hidden />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartProvider>
  )
}
