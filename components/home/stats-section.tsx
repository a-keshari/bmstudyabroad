"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const stats = [
  { label: "Years of Excellence", value: 25, suffix: "+" },
  { label: "Students Served", value: 10, suffix: "K+" },
  { label: "Affiliated Universities", value: 200, suffix: "+" },
  { label: "Visa Success Rate", value: 98, suffix: "%" },
]

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, isVisible])
  return count
}

function StatItem({
  label,
  value,
  suffix,
  isVisible,
}: {
  label: string
  value: number
  suffix: string
  isVisible: boolean
}) {
  const count = useCountUp(value, isVisible)

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="font-serif text-4xl font-bold text-[oklch(0.75_0.15_75)] md:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[oklch(0.75_0.15_75)]">
              About
            </span>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
              B.M. Study Abroad Consultancy is one of the best consultancies in Nepal
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We specialize in helping students pursue their academic dreams in the
              USA, UK, Australia, Canada, New Zealand, Ireland, and Germany. With
              expert counselors and decades of experience, we provide the guidance
              you need to succeed in your study abroad journey.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.30_0.08_260)] transition-colors hover:text-[oklch(0.75_0.15_75)]"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Stats grid */}
          <div
            ref={ref}
            className="grid grid-cols-2 gap-8 self-center"
          >
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
