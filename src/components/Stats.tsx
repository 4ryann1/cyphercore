
"use client"

import { useEffect, useState, useRef } from "react"
import { ScrollReveal } from "./ScrollReveal"

function CountUp({ end, suffix = "" }: { end: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true)
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, end])

  return <span ref={ref}>{count}{suffix}</span>
}

export function Stats() {
  const stats = [
    { label: "Projects Delivered", value: 50, suffix: "+" },
    { label: "Happy Clients", value: 30, suffix: "+" },
    { label: "Services", value: 5, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" }
  ]

  return (
    <div className="border-y border-white/5 bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center md:border-r last:border-0 border-white/5">
            <ScrollReveal>
              <div className="font-headline text-5xl md:text-7xl text-white mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-code text-[10px] uppercase tracking-widest text-secondary">
                {stat.label}
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </div>
  )
}
