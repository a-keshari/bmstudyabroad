"use client"

import { ArrowRight, BookOpen, FileCheck, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const slides = [
  {
    title: "Study Abroad",
    subtitle:
      "Discover top destinations for education: USA, UK, Australia, Canada, New Zealand, Ireland, and Germany for global opportunities.",
    icon: BookOpen,
    cta: "/study-abroad",
    ctaText: "Explore Destinations",
  },
  {
    title: "Test Preparation",
    subtitle:
      "Prepare for IELTS, PTE, TOEFL, SAT, GRE, and GMAT with expert guidance and personalized strategies to achieve your highest scores.",
    icon: FileCheck,
    cta: "/test-preparation",
    ctaText: "View Classes",
  },
  {
    title: "Expert Guidance",
    subtitle:
      "Get expert guidance and support for studying abroad, career planning, and test preparation from Nepal's leading consultancy.",
    icon: Users,
    cta: "/about",
    ctaText: "Learn More",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative overflow-hidden bg-[oklch(0.22_0.06_260)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-students.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.22_0.06_260)]/80 via-[oklch(0.22_0.06_260)]/90 to-[oklch(0.22_0.06_260)]" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[oklch(0.30_0.08_260)] opacity-40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[oklch(0.75_0.15_75)] opacity-10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center md:py-32 lg:py-40">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[oklch(0.75_0.15_75)]/20 bg-[oklch(0.75_0.15_75)]/10 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-[oklch(0.75_0.15_75)]" />
          <span className="text-xs font-medium text-[oklch(0.75_0.15_75)]">
            Nepal{"'"}s Leading Education Consultancy
          </span>
        </div>

        {/* Content */}
        <div className="min-h-[220px] md:min-h-[200px]">
          <h1 className="font-serif text-4xl font-bold leading-tight text-[oklch(0.95_0.005_250)] md:text-5xl lg:text-6xl">
            <span className="text-balance">Your Gateway to</span>
            <br />
            <span className="text-[oklch(0.75_0.15_75)]">{slide.title}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[oklch(0.70_0.01_250)] md:text-lg">
            {slide.subtitle}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href={slide.cta}
            className="group inline-flex items-center gap-2 rounded-lg bg-[oklch(0.75_0.15_75)] px-8 py-3.5 text-sm font-semibold text-[oklch(0.15_0.03_260)] transition-all hover:bg-[oklch(0.80_0.13_80)]"
          >
            {slide.ctaText}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            className="inline-flex items-center gap-2 rounded-lg border border-[oklch(0.75_0.15_75)]/30 px-8 py-3.5 text-sm font-semibold text-[oklch(0.75_0.15_75)] transition-all hover:bg-[oklch(0.75_0.15_75)]/10"
            onClick={() => {
              const event = new CustomEvent("open-apply-modal")
              window.dispatchEvent(event)
            }}
          >
            Apply Now
          </button>
        </div>

        {/* Slide indicators */}
        <div className="mt-12 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? "w-8 bg-[oklch(0.75_0.15_75)]"
                  : "w-2 bg-[oklch(0.50_0.02_260)]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
