import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionTitle } from "@/components/section-title"

const destinations = [
  {
    name: "USA",
    slug: "usa",
    flag: "🇺🇸",
    description: "World-class universities with diverse programs and research opportunities.",
    image: "/images/dest-usa.jpg",
  },
  {
    name: "UK",
    slug: "uk",
    flag: "🇬🇧",
    description: "Historic institutions offering globally recognized degrees.",
    image: "/images/dest-uk.jpg",
  },
  {
    name: "Australia",
    slug: "australia",
    flag: "🇦🇺",
    description: "Innovative education system with excellent post-study work options.",
    image: "/images/dest-australia.jpg",
  },
  {
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    description: "Quality education with pathways to permanent residency.",
    image: "/images/dest-canada.jpg",
  },
  {
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    description: "Welcoming culture with strong tech and pharmaceutical industries.",
    image: "/images/dest-usa.jpg",
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    description: "Tuition-free universities with engineering and technology excellence.",
    image: "/images/blog-germany.jpg",
  },
]

export function DestinationsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          label="Study Abroad"
          title="Expert Guidance for Study Abroad Success"
          description="Choose from top study destinations around the world. Our counselors will help you find the perfect fit."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/study-abroad/${dest.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-[oklch(0.75_0.15_75)]/30 hover:shadow-lg"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={`Study in ${dest.name}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.03_260)]/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="mr-2 text-2xl" role="img" aria-label={dest.name}>
                    {dest.flag}
                  </span>
                  <span className="text-lg font-bold text-[oklch(0.95_0.005_250)]">
                    Study in {dest.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {dest.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.30_0.08_260)] transition-colors group-hover:text-[oklch(0.75_0.15_75)]">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/study-abroad"
            className="inline-flex items-center gap-2 rounded-lg bg-[oklch(0.30_0.08_260)] px-8 py-3 text-sm font-semibold text-[oklch(0.95_0.005_250)] transition-all hover:bg-[oklch(0.25_0.07_260)]"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  )
}
