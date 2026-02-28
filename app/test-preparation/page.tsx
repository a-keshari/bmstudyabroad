import type { Metadata } from "next"
import Link from "next/link"
import {
  Clock,
  Users,
  BookOpen,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  BarChart3,
  Headphones,
  PenTool,
  MessageSquare,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Test Preparation - B.M. Study Abroad Consultancy",
  description:
    "Best IELTS, PTE, TOEFL, SAT, GRE, and GMAT preparation classes in Kathmandu, Nepal. Expert instructors, proven strategies, and guaranteed results.",
}

const tests = [
  {
    name: "IELTS",
    fullName: "International English Language Testing System",
    description:
      "IELTS is the world's most popular English language proficiency test for higher education and migration. Accepted by over 11,000 organizations in 140 countries worldwide.",
    features: [
      "Academic & General Training modules",
      "Listening, Reading, Writing & Speaking sections",
      "Band score from 0 to 9",
      "Accepted by universities in UK, Australia, Canada, NZ",
    ],
    duration: "2 hrs 45 min",
    color: "bg-[oklch(0.30_0.08_260)]",
    accent: "text-[oklch(0.75_0.15_75)]",
  },
  {
    name: "PTE",
    fullName: "Pearson Test of English Academic",
    description:
      "PTE Academic is a computer-based English language test trusted by universities, colleges, and governments worldwide. Known for fast results and AI-powered scoring.",
    features: [
      "Computer-based with AI scoring",
      "Results typically in 48 hours",
      "Speaking, Writing, Reading & Listening",
      "Widely accepted in Australia & New Zealand",
    ],
    duration: "2 hrs",
    color: "bg-[oklch(0.30_0.08_260)]",
    accent: "text-[oklch(0.75_0.15_75)]",
  },
  {
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    description:
      "TOEFL iBT is one of the most widely respected English language tests, accepted by over 12,500 universities in 160+ countries, particularly in the United States.",
    features: [
      "Internet-based test format",
      "Reading, Listening, Speaking & Writing",
      "Score range: 0-120",
      "Preferred by US universities",
    ],
    duration: "3 hrs",
    color: "bg-[oklch(0.30_0.08_260)]",
    accent: "text-[oklch(0.75_0.15_75)]",
  },
  {
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    description:
      "The SAT is a standardized test widely used for undergraduate admissions in the United States. It assesses academic readiness for college.",
    features: [
      "Evidence-based Reading & Writing",
      "Math section with calculator & no-calculator",
      "Score range: 400-1600",
      "Required by many US universities",
    ],
    duration: "3 hrs",
    color: "bg-[oklch(0.30_0.08_260)]",
    accent: "text-[oklch(0.75_0.15_75)]",
  },
  {
    name: "GRE",
    fullName: "Graduate Record Examination",
    description:
      "The GRE is required for admission to most graduate schools worldwide. It measures verbal reasoning, quantitative reasoning, and analytical writing skills.",
    features: [
      "Verbal & Quantitative Reasoning",
      "Analytical Writing Assessment",
      "Score range: 260-340",
      "Required for graduate programs worldwide",
    ],
    duration: "3 hrs 45 min",
    color: "bg-[oklch(0.30_0.08_260)]",
    accent: "text-[oklch(0.75_0.15_75)]",
  },
  {
    name: "GMAT",
    fullName: "Graduate Management Admission Test",
    description:
      "The GMAT is a computer adaptive test assessing analytical, writing, quantitative, verbal, and reading skills for admission to MBA and business programs.",
    features: [
      "Analytical Writing & Integrated Reasoning",
      "Quantitative & Verbal sections",
      "Score range: 200-800",
      "Required for top MBA programs",
    ],
    duration: "3 hrs 7 min",
    color: "bg-[oklch(0.30_0.08_260)]",
    accent: "text-[oklch(0.75_0.15_75)]",
  },
]

const whyChooseUs = [
  {
    icon: Users,
    title: "Certified Expert Instructors",
    description:
      "Our instructors hold internationally recognized certifications and have years of experience helping students achieve their target scores.",
  },
  {
    icon: Target,
    title: "Proven Score Improvement",
    description:
      "Our structured methodology and personalized approach consistently helps students improve their scores by 1-2 bands or equivalent.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Study Materials",
    description:
      "Access official practice tests, study guides, and our exclusive preparation materials curated by our expert instructors.",
  },
  {
    icon: BarChart3,
    title: "Regular Mock Tests",
    description:
      "Weekly full-length mock tests with detailed performance analytics to track your progress and identify areas for improvement.",
  },
  {
    icon: Clock,
    title: "Flexible Class Schedules",
    description:
      "Choose from morning, day, and evening batches. Weekend classes also available for working professionals.",
  },
  {
    icon: Award,
    title: "Small Batch Sizes",
    description:
      "Maximum 15 students per batch ensures personalized attention and ample opportunity for interaction and doubt clearing.",
  },
]

const testSkills = [
  { icon: Headphones, name: "Listening", description: "Enhance your ability to understand spoken English in academic contexts" },
  { icon: BookOpen, name: "Reading", description: "Develop strategies for comprehending complex academic passages quickly" },
  { icon: PenTool, name: "Writing", description: "Master essay structure, coherence, and grammatical accuracy" },
  { icon: MessageSquare, name: "Speaking", description: "Build confidence and fluency for oral assessments and interviews" },
]

const successStats = [
  { number: "15,000+", label: "Students Trained" },
  { number: "92%", label: "Score Improvement Rate" },
  { number: "7.5+", label: "Avg IELTS Band Score" },
  { number: "50+", label: "Certified Instructors" },
]

export default function TestPreparationPage() {
  return (
    <>
      <PageHeader
        title="Test Preparation"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Test Preparation" },
        ]}
        description="Achieve your target scores with our expert-led test preparation classes for IELTS, PTE, TOEFL, SAT, GRE, and GMAT."
      />

      {/* Stats Bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-0 divide-x divide-border md:grid-cols-4">
            {successStats.map((stat) => (
              <div key={stat.label} className="py-8 text-center">
                <p className="text-2xl font-bold text-[oklch(0.30_0.08_260)] md:text-3xl">{stat.number}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[oklch(0.75_0.15_75)]">
              Our Approach
            </span>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Structured Preparation for Maximum Results
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Our test preparation programs are designed with a focused, results-driven methodology.
              Each course combines proven teaching strategies, comprehensive practice materials, and
              personalized feedback to ensure you reach your target score efficiently.
            </p>
          </div>

          {/* 4 Skill Areas */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-[oklch(0.75_0.15_75)]/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.30_0.08_260)]">
                  <skill.icon className="h-6 w-6 text-[oklch(0.75_0.15_75)]" />
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">{skill.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Tests */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            label="Our Courses"
            title="Test Preparation Programs"
            description="Choose from our comprehensive range of test preparation courses taught by certified experts."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tests.map((test) => (
              <div
                key={test.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-[oklch(0.75_0.15_75)]/30 hover:shadow-xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between bg-[oklch(0.22_0.06_260)] px-6 py-5">
                  <div>
                    <h3 className="text-xl font-bold text-[oklch(0.95_0.005_250)]">{test.name}</h3>
                    <p className="mt-0.5 text-xs text-[oklch(0.65_0.02_260)]">{test.fullName}</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-[oklch(0.30_0.08_260)] px-3 py-1.5 text-xs font-medium text-[oklch(0.75_0.15_75)]">
                    <Clock className="h-3.5 w-3.5" />
                    {test.duration}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {test.description}
                  </p>
                  <ul className="mb-6 flex flex-1 flex-col gap-2.5">
                    {test.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.75_0.15_75)]" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[oklch(0.30_0.08_260)] px-6 py-3 text-sm font-semibold text-[oklch(0.95_0.005_250)] transition-all hover:bg-[oklch(0.25_0.07_260)]"
                  >
                    Enroll Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            label="Why Choose Us"
            title="The B.M. Advantage"
            description="Here is what makes our test preparation classes the best choice in Kathmandu."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-[oklch(0.75_0.15_75)]/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[oklch(0.30_0.08_260)]">
                  <item.icon className="h-6 w-6 text-[oklch(0.75_0.15_75)]" />
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[oklch(0.22_0.06_260)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            label="Success Stories"
            title="Hear From Our Students"
            description="Real results from real students who achieved their target scores with us."
            light
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                test: "IELTS - Band 8.0",
                quote:
                  "The structured approach and mock tests at B.M. were incredibly helpful. My speaking score improved from 6.0 to 8.0 in just 6 weeks.",
              },
              {
                name: "Rahul Thapa",
                test: "PTE - Score 85",
                quote:
                  "I was struggling with PTE until I joined B.M. The instructors understood the AI scoring system perfectly and tailored the preparation accordingly.",
              },
              {
                name: "Anita Gurung",
                test: "GRE - Score 328",
                quote:
                  "The GRE preparation at B.M. was phenomenal. The quantitative strategies and vocabulary building techniques helped me score 328 out of 340.",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl border border-[oklch(0.35_0.06_260)] bg-[oklch(0.25_0.05_260)] p-6"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[oklch(0.75_0.15_75)] text-[oklch(0.75_0.15_75)]"
                    />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-[oklch(0.80_0.01_250)]">
                  {'"'}{testimonial.quote}{'"'}
                </p>
                <div>
                  <p className="text-sm font-bold text-[oklch(0.95_0.005_250)]">{testimonial.name}</p>
                  <p className="text-xs text-[oklch(0.75_0.15_75)]">{testimonial.test}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Enroll */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle
                label="Get Started"
                title="Enroll in a Class Today"
                description="Contact us to find the right batch and schedule for your test preparation needs."
                centered={false}
              />
              <div className="mt-8 flex flex-col gap-4">
                <div className="rounded-lg border border-border bg-card p-5">
                  <h4 className="mb-1 text-sm font-bold text-foreground">Morning Batch</h4>
                  <p className="text-sm text-muted-foreground">7:00 AM - 9:00 AM (Sun - Fri)</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-5">
                  <h4 className="mb-1 text-sm font-bold text-foreground">Day Batch</h4>
                  <p className="text-sm text-muted-foreground">11:00 AM - 1:00 PM (Sun - Fri)</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-5">
                  <h4 className="mb-1 text-sm font-bold text-foreground">Evening Batch</h4>
                  <p className="text-sm text-muted-foreground">4:00 PM - 6:00 PM (Sun - Fri)</p>
                </div>
                <div className="rounded-lg border border-[oklch(0.75_0.15_75)]/30 bg-[oklch(0.75_0.15_75)]/5 p-5">
                  <h4 className="mb-1 text-sm font-bold text-foreground">Weekend Batch</h4>
                  <p className="text-sm text-muted-foreground">10:00 AM - 2:00 PM (Sat only)</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
                Register for Classes
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
