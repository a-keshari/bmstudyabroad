import type { Metadata } from "next"
import {
  Shield,
  BookOpen,
  Trophy,
  Users,
  Target,
  Heart,
  GraduationCap,
  FileCheck,
  Lightbulb,
  Award,
  Globe,
  Briefcase,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"

export const metadata: Metadata = {
  title: "About Us - B.M. Study Abroad Consultancy",
  description:
    "Learn about B.M. Study Abroad Consultancy, one of the best education consultancies in Nepal for studying abroad.",
}

const milestones = [
  { year: "2000", event: "Founded in Kathmandu with a mission to guide students abroad" },
  { year: "2005", event: "Expanded test preparation classes to include all major exams" },
  { year: "2010", event: "Reached 5,000+ students served milestone" },
  { year: "2015", event: "Opened branch offices across Nepal" },
  { year: "2020", event: "Partnered with 200+ universities worldwide" },
  { year: "2025", event: "Celebrated 25 years of educational excellence" },
]

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad Counseling",
    description:
      "Expert counselors help you choose the right university, course, and country. We consider your academic background, career goals, and personal preferences to find the perfect fit.",
  },
  {
    icon: FileCheck,
    title: "Test Preparation",
    description:
      "Comprehensive classes for IELTS, PTE, TOEFL, SAT, GRE, and GMAT. Our certified instructors use proven strategies to help you achieve your target scores.",
  },
  {
    icon: Lightbulb,
    title: "Career Counseling",
    description:
      "Personalized career guidance considering your interests, personality, strengths, and weaknesses to facilitate suitable career and education choices.",
  },
  {
    icon: Globe,
    title: "University & Course Selection",
    description:
      "Access hundreds of universities and thousands of courses worldwide. Our counselors help you navigate options to find your ideal program.",
  },
  {
    icon: BookOpen,
    title: "SOP Writing Workshops",
    description:
      "Dedicated workshops to help you write compelling Statements of Purpose and Personal Statements that strengthen your application.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description:
      "Discover scholarships and financial aid opportunities. We guide you through requirements and application processes to ease your financial burden.",
  },
  {
    icon: Users,
    title: "Visa Assistance",
    description:
      "Complete visa application support including documentation, interview preparation, and guidance through the entire visa process.",
  },
  {
    icon: Briefcase,
    title: "Pre-departure Session",
    description:
      "Comprehensive pre-departure sessions covering packing tips, airport guidance, accommodation, and what to expect as an international student.",
  },
]

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We provide honest, unbiased advice focused entirely on your best interests.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest standards in every service we provide.",
  },
  {
    icon: Heart,
    title: "Student-First",
    description: "Every decision we make puts our students' success and well-being first.",
  },
  {
    icon: Trophy,
    title: "Results-Driven",
    description: "Our proven track record speaks for itself with thousands of success stories.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About Us" },
        ]}
        description="Learn about our mission to help students achieve their dreams of studying abroad at the world's best institutions."
      />

      {/* Mission */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[oklch(0.75_0.15_75)]">
                Our Story
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Over 25 Years of Guiding Students to Global Success
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                B.M. Study Abroad Consultancy is one of the leading educational consultancies in Nepal,
                specializing in helping students pursue higher education in top destinations including the
                USA, UK, Australia, Canada, New Zealand, Ireland, and Germany.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our team of experienced counselors undergoes intensive training before providing information
                on colleges, universities, or visa application processes. We select the right college or
                university and course based on each student{"'"}s unique needs and aspirations.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                With a comprehensive suite of services from test preparation to pre-departure orientation,
                we serve as your one-stop solution for studying abroad.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-border bg-card p-6 transition-all hover:border-[oklch(0.75_0.15_75)]/30 hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[oklch(0.30_0.08_260)]">
                    <value.icon className="h-5 w-5 text-[oklch(0.75_0.15_75)]" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-foreground">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            label="Our Journey"
            title="Milestones That Define Us"
            description="A timeline of our growth from a small consultancy to Nepal's leading education partner."
          />

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative border-l-2 border-[oklch(0.75_0.15_75)]/30 pl-8">
              {milestones.map((milestone, i) => (
                <div key={milestone.year} className={`relative ${i !== milestones.length - 1 ? "pb-10" : ""}`}>
                  <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-[oklch(0.75_0.15_75)] bg-background">
                    <div className="h-2.5 w-2.5 rounded-full bg-[oklch(0.75_0.15_75)]" />
                  </div>
                  <span className="mb-1 block text-sm font-bold text-[oklch(0.75_0.15_75)]">
                    {milestone.year}
                  </span>
                  <p className="text-base text-foreground">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            label="Our Services"
            title="Everything You Need Under One Roof"
            description="From test preparation to pre-departure sessions, we provide comprehensive support for every step of your study abroad journey."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-[oklch(0.75_0.15_75)]/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[oklch(0.30_0.08_260)]">
                  <service.icon className="h-6 w-6 text-[oklch(0.75_0.15_75)]" />
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.22_0.06_260)] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-[oklch(0.95_0.005_250)] md:text-4xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[oklch(0.70_0.01_250)]">
            Contact our expert counselors today for a free consultation and let us help you achieve your
            dream of studying abroad.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[oklch(0.75_0.15_75)] px-8 py-3.5 text-sm font-semibold text-[oklch(0.15_0.03_260)] transition-all hover:bg-[oklch(0.80_0.13_80)]"
            >
              Contact Us
            </a>
            <a
              href="/study-abroad"
              className="inline-flex items-center gap-2 rounded-lg border border-[oklch(0.75_0.15_75)]/30 px-8 py-3.5 text-sm font-semibold text-[oklch(0.75_0.15_75)] transition-all hover:bg-[oklch(0.75_0.15_75)]/10"
            >
              Explore Destinations
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
