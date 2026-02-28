import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Users, BookOpen, FileCheck, Pencil, Award, Handshake, Plane, Mic } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Study Abroad - B.M. Study Abroad Consultancy",
  description:
    "Explore top study abroad destinations including USA, UK, Australia, Canada, New Zealand, Ireland, and Germany with B.M. Study Abroad Consultancy.",
}

const destinations = [
  {
    name: "USA",
    slug: "usa",
    flag: "US",
    description:
      "World-class universities with diverse programs, cutting-edge research opportunities, and vibrant campus life. The USA remains the top choice for international students.",
    highlights: ["1,000+ partner universities", "OPT work opportunities", "Diverse scholarship options"],
  },
  {
    name: "UK",
    slug: "uk",
    flag: "GB",
    description:
      "Historic institutions offering globally recognized degrees with shorter program durations. Experience centuries of academic excellence in a multicultural environment.",
    highlights: ["Russell Group universities", "2-year post-study visa", "1-year Master's programs"],
  },
  {
    name: "Australia",
    slug: "australia",
    flag: "AU",
    description:
      "Innovative education system with excellent post-study work options and a welcoming, multicultural society in one of the most liveable countries in the world.",
    highlights: ["Post-study work visa", "High quality of life", "Strong job market"],
  },
  {
    name: "Canada",
    slug: "canada",
    flag: "CA",
    description:
      "Quality education with clear pathways to permanent residency. Canada offers affordable tuition, safe cities, and a welcoming immigration policy for graduates.",
    highlights: ["PR pathways", "Affordable tuition", "Safe & welcoming"],
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    flag: "NZ",
    description:
      "A peaceful and innovative country offering world-class education with post-study work opportunities amidst breathtaking natural beauty.",
    highlights: ["Post-study work visa", "Safe environment", "Practical learning"],
  },
  {
    name: "Ireland",
    slug: "ireland",
    flag: "IE",
    description:
      "A welcoming culture with strong technology and pharmaceutical industries. Ireland offers excellent education with strong career prospects in Europe's tech hub.",
    highlights: ["Stay-back option", "Tech hub of Europe", "English-speaking"],
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "DE",
    description:
      "Tuition-free or low-cost universities with engineering and technology excellence. Germany combines academic rigor with practical industry connections.",
    highlights: ["Low/no tuition fees", "Engineering excellence", "18-month post-study visa"],
  },
]

const services = [
  {
    icon: Users,
    title: "The Best Counselors",
    description:
      "Our counselors are qualified with intensive training and years of experience to help you make crucial decisions involved in studying abroad.",
  },
  {
    icon: BookOpen,
    title: "Career Counseling",
    description:
      "Discover yourself with the right direction through our career counseling services with unbiased advice and moral support.",
  },
  {
    icon: FileCheck,
    title: "Universities & Courses",
    description:
      "Access hundreds of universities and thousands of courses across popular study destinations worldwide.",
  },
  {
    icon: Pencil,
    title: "SOP Writing Workshops",
    description:
      "Learn to craft compelling Statements of Purpose with our structured writing workshops and expert feedback.",
  },
  {
    icon: Award,
    title: "Scholarships",
    description:
      "Discover scholarships and financial aid across destinations, with guidance on requirements and application processes.",
  },
  {
    icon: Handshake,
    title: "Interview Preparation",
    description:
      "Practice for university and visa interviews with our experienced counselors to build confidence.",
  },
  {
    icon: Plane,
    title: "Pre-departure Session",
    description:
      "Get prepared for your new life as an international student with tips on packing, travel, and settling in.",
  },
  {
    icon: Mic,
    title: "Visa Assistance",
    description:
      "End-to-end visa application support including documentation, form filling, and interview coaching.",
  },
]

export default function StudyAbroadPage() {
  return (
    <>
      <PageHeader
        title="Study Abroad"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Study Abroad" },
        ]}
        description="Higher education abroad opens doors to global opportunities. Let us guide you to the right destination."
      />

      {/* Overview */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[oklch(0.75_0.15_75)]">
              Overview
            </span>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Expert Counsel for Higher Education Abroad
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              B.M. Study Abroad counsels prospective students for their higher education in popular study
              destinations. Selecting the right college, university, and course can be challenging, but our
              well-trained counselors provide all necessary information including application procedures,
              entry requirements, immigration rules, and visa application procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            label="Destinations"
            title="Choose Your Study Destination"
            description="Explore top study destinations around the world and find the perfect fit for your academic goals."
          />

          <div className="mt-14 flex flex-col gap-8">
            {destinations.map((dest, i) => (
              <Link
                key={dest.slug}
                href={`/study-abroad/${dest.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-[oklch(0.75_0.15_75)]/30 hover:shadow-xl"
              >
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Color block */}
                  <div className="flex min-h-[200px] flex-col items-center justify-center bg-[oklch(0.30_0.08_260)] p-10 lg:w-1/3">
                    <span className="mb-3 text-5xl font-bold text-[oklch(0.75_0.15_75)]">
                      {dest.flag}
                    </span>
                    <h3 className="text-2xl font-bold text-[oklch(0.95_0.005_250)]">
                      Study in {dest.name}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
                    <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                      {dest.description}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-3">
                      {dest.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-foreground"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.30_0.08_260)] transition-colors group-hover:text-[oklch(0.75_0.15_75)]">
                      Learn More About {dest.name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            label="What You Get"
            title="Comprehensive Study Abroad Support"
            description="From counseling to pre-departure, we support every step of your international education journey."
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

      {/* Contact */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle
                label="Get in Touch"
                title="Ready to Get Started?"
                description="Contact our expert counselors to begin your international academic journey."
                centered={false}
              />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Thank you for your interest in reaching out to us. Our team of experienced counselors is
                ready to help you navigate the exciting journey of studying abroad. Whether you need help
                choosing a destination, preparing for exams, or applying to universities, we are here for you.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
