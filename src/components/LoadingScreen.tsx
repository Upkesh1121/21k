import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2400)
    const hideTimer = setTimeout(() => setVisible(false), 3200)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`loading-screen ${fading ? 'fade-out' : ''}`}>
      <div className="loading-logo">21K</div>
      <p className="loading-tagline">Luxury Streetwear — Est. MMXXIV</p>
      <div className="loading-bar" />
    </div>
  )
}
