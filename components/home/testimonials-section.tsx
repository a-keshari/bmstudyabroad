"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { SectionTitle } from "@/components/section-title"

const testimonials = [
  {
    name: "Arbin Bhandari",
    university: "Gannon University",
    scholarship: "$30,421",
    quote:
      "Thank you for helping me through the process. I had a great time here at B.M. Study Abroad. The team was incredibly supportive throughout my journey.",
  },
  {
    name: "Preshna Karki",
    university: "Gannon University",
    scholarship: "$30,421",
    quote:
      "It was a really great experience joining B.M. Study Abroad for my study counseling. I am immensely grateful to the team for helping me get through all the processes regarding US study.",
  },
  {
    name: "Lemon Dhakal",
    university: "Juniata College",
    scholarship: "$49,000",
    quote:
      "I would like to thank B.M. Study Abroad for being my mentor and guide throughout my whole abroad journey. They guided me and made my process incredibly smooth.",
  },
  {
    name: "Tenzing Gurung",
    university: "Gannon University",
    scholarship: "$5,000",
    quote:
      "I would like to thank B.M. Study Abroad for being a part of my abroad journey as a mentor and complete guide. The support was exceptional.",
  },
  {
    name: "Sajan Banjara",
    university: "University of Utah",
    scholarship: "Full Support",
    quote:
      "My experience at B.M. Study Abroad was amazing. All of the staff are very helpful towards the students. It was one of my best decisions to choose this consultancy.",
  },
  {
    name: "Tsering Choden Gurung",
    university: "University of Louisiana Monroe",
    scholarship: "Full Support",
    quote:
      "My experience was amazing. All of the staff are very helpful towards the students. I will always be grateful for the experience and the guidance that led me towards my dream.",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const perPage = 3

  const maxPage = Math.ceil(testimonials.length / perPage) - 1

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(maxPage, c + 1))

  const visible = testimonials.slice(
    current * perPage,
    current * perPage + perPage
  )

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <SectionTitle
            label="Testimonials"
            title="What Our Students Say"
            centered={false}
          />
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary disabled:opacity-30"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={current === maxPage}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary disabled:opacity-30"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-[oklch(0.75_0.15_75)]/30" />
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.quote}
              </p>
              <div className="border-t border-border pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.30_0.08_260)] text-sm font-bold text-[oklch(0.75_0.15_75)]">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.university} &middot; Scholarship: {t.scholarship}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
