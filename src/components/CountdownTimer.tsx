import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const TARGET = new Date('2026-07-21T00:00:00Z').getTime()

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function CountdownTimer() {
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calc = () => {
      const diff = TARGET - Date.now()
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: pad(time.days) },
    { label: 'Hours', value: pad(time.hours) },
    { label: 'Minutes', value: pad(time.minutes) },
    { label: 'Seconds', value: pad(time.seconds) },
  ]

  return (
    <div className="flex items-end gap-6 md:gap-10">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-end gap-6 md:gap-10">
          <div className="flex flex-col items-center">
            <span className="countdown-digit">{u.value}</span>
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-muted mt-1">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="font-display text-gold text-3xl opacity-50 mb-3" aria-hidden>:</span>
          )}
        </div>
      ))}
    </div>
  )
}
