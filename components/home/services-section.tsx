import { BookOpen, GraduationCap, FileCheck, Lightbulb, Users, Award } from "lucide-react"
import Link from "next/link"
import { SectionTitle } from "@/components/section-title"

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad Counseling",
    description:
      "Expert guidance to help you choose the right university, course, and country for your academic journey.",
  },
  {
    icon: FileCheck,
    title: "Test Preparation",
    description:
      "Comprehensive classes for IELTS, PTE, TOEFL, SAT, GRE, and GMAT with experienced instructors.",
  },
  {
    icon: BookOpen,
    title: "Application Support",
    description:
      "End-to-end assistance with university applications, SOPs, and documentation.",
  },
  {
    icon: Lightbulb,
    title: "Career Counseling",
    description:
      "Personalized career guidance to help you make informed decisions about your education and future.",
  },
  {
    icon: Users,
    title: "Visa Assistance",
    description:
      "Complete visa application support with interview preparation and documentation guidance.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description:
      "Discover and secure scholarships and financial aid opportunities for your study abroad journey.",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          label="What We Do"
          title="Comprehensive Education Services"
          description="At B.M. Study Abroad, we specialize in guiding students to excel in exams and facilitating their aspirations to study abroad in top destinations worldwide."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-[oklch(0.75_0.15_75)]/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[oklch(0.30_0.08_260)]">
                <service.icon className="h-6 w-6 text-[oklch(0.75_0.15_75)]" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg bg-[oklch(0.30_0.08_260)] px-8 py-3 text-sm font-semibold text-[oklch(0.95_0.005_250)] transition-all hover:bg-[oklch(0.25_0.07_260)]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
