import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionTitle } from "@/components/section-title"

const classes = [
  {
    name: "TOEFL",
    description:
      "Our TOEFL Preparation classes stand out as the premier choice for achieving exceptional TOEFL scores.",
    color: "bg-blue-500",
  },
  {
    name: "IELTS",
    description:
      "We offer the Best IELTS Preparation classes for achieving high IELTS scores and band results.",
    color: "bg-red-500",
  },
  {
    name: "PTE-A",
    description:
      "Our PTE-A Preparation classes are tailored to ensure remarkable PTE-A scores for your studies.",
    color: "bg-emerald-500",
  },
  {
    name: "SAT",
    description:
      "Our SAT Preparation classes are designed to maximize your SAT scores and college readiness.",
    color: "bg-amber-500",
  },
  {
    name: "GMAT",
    description:
      "Our GMAT Preparation classes are crafted to elevate your GMAT scores for business school admission.",
    color: "bg-indigo-500",
  },
  {
    name: "GRE",
    description:
      "Our GRE Preparation classes are meticulously designed to boost your GRE scores for graduate programs.",
    color: "bg-rose-500",
  },
]

export function ClassesSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          label="Our Classes"
          title="Top-Notch Test Preparation"
          description="Your gateway to global education with comprehensive test preparation programs led by expert instructors."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <div
              key={cls.name}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
            >
              <div className={`h-1.5 ${cls.color}`} />
              <div className="p-7">
                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  {cls.name}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {cls.description}
                </p>
                <Link
                  href="/test-preparation"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.30_0.08_260)] transition-colors group-hover:text-[oklch(0.75_0.15_75)]"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/test-preparation"
            className="inline-flex items-center gap-2 rounded-lg bg-[oklch(0.30_0.08_260)] px-8 py-3 text-sm font-semibold text-[oklch(0.95_0.005_250)] transition-all hover:bg-[oklch(0.25_0.07_260)]"
          >
            View All Classes
          </Link>
        </div>
      </div>
    </section>
  )
}
