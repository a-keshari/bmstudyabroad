import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { ContactForm } from "@/components/contact-form"
import { notFound } from "next/navigation"

const countryData: Record<
  string,
  {
    name: string
    fullName: string
    description: string
    overview: string
    whyStudy: string[]
    popularCourses: string[]
    requirements: string[]
    visaInfo: string
    workOpportunity: string
  }
> = {
  usa: {
    name: "USA",
    fullName: "United States of America",
    description: "The world's top destination for international students with unmatched academic diversity.",
    overview:
      "The United States is home to some of the world's most prestigious universities and offers an incredibly diverse range of academic programs. With over 4,000 accredited institutions, students can find programs that perfectly match their academic interests and career goals. The US education system emphasizes research, innovation, and practical learning experiences.",
    whyStudy: [
      "Home to top-ranked universities globally including Ivy League institutions",
      "Diverse range of programs and specializations across all fields",
      "Optional Practical Training (OPT) for post-graduation work experience",
      "Cutting-edge research facilities and innovation hubs",
      "Vibrant campus life with extensive extracurricular activities",
      "Strong alumni networks for career advancement",
    ],
    popularCourses: [
      "Computer Science & IT",
      "Business Administration (MBA)",
      "Engineering",
      "Data Science & AI",
      "Public Health",
      "Finance & Economics",
    ],
    requirements: [
      "Valid passport and student visa (F-1)",
      "TOEFL/IELTS score",
      "SAT/GRE/GMAT scores (depending on program)",
      "Academic transcripts and certificates",
      "Statement of Purpose (SOP)",
      "Letters of recommendation",
      "Proof of financial support",
    ],
    visaInfo:
      "The F-1 student visa is the most common visa for international students in the USA. After receiving your I-20 form from the university, you can apply for the visa at the US Embassy. Our team provides comprehensive visa interview preparation.",
    workOpportunity:
      "Students can work on-campus for up to 20 hours per week during the academic term. After graduation, OPT allows 12 months of work (up to 36 months for STEM graduates).",
  },
  uk: {
    name: "UK",
    fullName: "United Kingdom",
    description: "Historic institutions offering globally recognized degrees with shorter program durations.",
    overview:
      "The United Kingdom has a long tradition of academic excellence, with universities like Oxford, Cambridge, and Imperial College consistently ranking among the world's best. UK degrees are recognized globally, and many programs are shorter than their counterparts in other countries, making them cost-effective.",
    whyStudy: [
      "World-renowned universities with centuries of academic tradition",
      "Shorter program durations saving time and money",
      "Graduate Route visa for 2 years post-study work",
      "Multicultural environment with rich cultural heritage",
      "Strong connections to European industries and research",
      "NHS healthcare access for international students",
    ],
    popularCourses: [
      "Business & Management",
      "Law",
      "Medicine & Healthcare",
      "Arts & Design",
      "Engineering",
      "Social Sciences",
    ],
    requirements: [
      "Valid passport and Tier 4 student visa",
      "IELTS/PTE score (usually 6.0-7.0)",
      "Academic transcripts",
      "Personal Statement",
      "Letters of recommendation",
      "Proof of finances (CAS letter required)",
    ],
    visaInfo:
      "The Student Route visa (formerly Tier 4) is required for courses longer than 6 months. You'll need a Confirmation of Acceptance for Studies (CAS) from your university. Our team guides you through every step of the application.",
    workOpportunity:
      "Students can work 20 hours per week during term time and full-time during holidays. The Graduate Route visa allows 2 years of post-study work (3 years for PhD graduates).",
  },
  australia: {
    name: "Australia",
    fullName: "Australia",
    description: "Innovative education system with excellent post-study work options and quality of life.",
    overview:
      "Australia offers a world-class education system with 7 of the top 100 universities globally. Known for its innovative teaching methods, strong research focus, and excellent student support services, Australia is one of the most popular destinations for international students.",
    whyStudy: [
      "7 of the world's top 100 universities",
      "Post-study work visa up to 4 years",
      "High quality of life and safety",
      "Multicultural and welcoming society",
      "Strong job market for graduates",
      "Beautiful natural environment and climate",
    ],
    popularCourses: [
      "Engineering & Technology",
      "Business & Accounting",
      "Health Sciences & Nursing",
      "Information Technology",
      "Environmental Science",
      "Hospitality & Tourism",
    ],
    requirements: [
      "Valid passport and student visa (subclass 500)",
      "IELTS/PTE score (usually 6.0+)",
      "Academic transcripts and certificates",
      "Genuine Temporary Entrant (GTE) statement",
      "Overseas Student Health Cover (OSHC)",
      "Proof of financial capacity",
    ],
    visaInfo:
      "The Student Visa (subclass 500) covers all types of study programs. You'll need a Confirmation of Enrolment (CoE) from your institution. Our team assists with complete documentation and application.",
    workOpportunity:
      "Students can work up to 48 hours per fortnight during study periods and unlimited hours during breaks. Post-study work visas range from 2-4 years depending on your qualification.",
  },
  canada: {
    name: "Canada",
    fullName: "Canada",
    description: "Quality education with clear pathways to permanent residency.",
    overview:
      "Canada is increasingly popular among international students for its high-quality education, affordable tuition, and clear immigration pathways. Canadian degrees are globally recognized, and the country offers one of the most welcoming environments for international graduates.",
    whyStudy: [
      "Affordable tuition compared to USA and UK",
      "Post-Graduation Work Permit (PGWP) up to 3 years",
      "Clear pathway to Permanent Residency",
      "Safe, multicultural, and welcoming society",
      "Bilingual advantage (English and French)",
      "High standard of living",
    ],
    popularCourses: [
      "Computer Science & IT",
      "Business Analytics",
      "Engineering",
      "Healthcare & Nursing",
      "Agriculture & Food Science",
      "Project Management",
    ],
    requirements: [
      "Valid passport and study permit",
      "IELTS/PTE/TOEFL score",
      "Academic transcripts",
      "Statement of Purpose",
      "Proof of funds",
      "Medical examination (if required)",
    ],
    visaInfo:
      "A Study Permit is required for programs longer than 6 months. You'll need a Letter of Acceptance from a Designated Learning Institution (DLI). Our team helps with SDS and regular study permit applications.",
    workOpportunity:
      "Students can work 20 hours per week off-campus during academic sessions. PGWP allows up to 3 years of post-graduation work, which counts toward PR eligibility.",
  },
  "new-zealand": {
    name: "New Zealand",
    fullName: "New Zealand",
    description: "World-class education amidst breathtaking natural beauty with excellent work opportunities.",
    overview:
      "New Zealand offers a unique combination of world-class education and incredible quality of life. With 8 universities all ranked in the top 3% globally, a strong focus on practical learning, and stunning natural landscapes, it's an ideal destination for international students.",
    whyStudy: [
      "All 8 universities ranked in top 3% globally",
      "Post-study work visa up to 3 years",
      "Safe and peaceful country",
      "Practical, research-led teaching",
      "Affordable compared to Australia",
      "Stunning natural environment",
    ],
    popularCourses: [
      "Agriculture & Forestry",
      "Environmental Science",
      "Engineering",
      "IT & Computer Science",
      "Hospitality Management",
      "Business & Marketing",
    ],
    requirements: [
      "Valid passport and student visa",
      "IELTS/PTE score (usually 6.0+)",
      "Academic transcripts",
      "Statement of Purpose",
      "Proof of funds (NZ$20,000+ per year)",
      "Medical and character certificates",
    ],
    visaInfo:
      "A Student Visa is required for courses longer than 3 months. You'll need an offer of place from an approved institution. Our counselors guide the entire visa process.",
    workOpportunity:
      "Students can work 20 hours per week during studies and full-time during holidays. Post-study work visas of 1-3 years are available depending on your qualification level.",
  },
  ireland: {
    name: "Ireland",
    fullName: "Ireland",
    description: "Europe's tech hub offering excellent education and strong career prospects.",
    overview:
      "Ireland has emerged as one of the top destinations for international students, especially those interested in technology, pharmaceuticals, and business. Home to European headquarters of major tech companies, Ireland offers excellent career prospects alongside quality education.",
    whyStudy: [
      "European headquarters of Google, Facebook, Apple, and more",
      "Stay Back Option for 1-2 years after graduation",
      "English-speaking country in the EU",
      "Friendly and welcoming culture",
      "Strong pharmaceutical and tech industries",
      "Rich cultural heritage and history",
    ],
    popularCourses: [
      "Information Technology",
      "Pharmaceutical Sciences",
      "Business & Finance",
      "Data Analytics",
      "Biotechnology",
      "Digital Marketing",
    ],
    requirements: [
      "Valid passport and student visa (Stamp 2)",
      "IELTS score (usually 6.0+)",
      "Academic transcripts",
      "Statement of Purpose",
      "Proof of funds",
      "Private medical insurance",
    ],
    visaInfo:
      "Non-EU students need a Study Visa (Stamp 2) for courses longer than 3 months. You'll need a letter of acceptance from your institution. Our team provides complete visa guidance.",
    workOpportunity:
      "Students can work 20 hours per week during term time and 40 hours during holidays. The Third Level Graduate Programme allows 1-2 years of post-study work.",
  },
  germany: {
    name: "Germany",
    fullName: "Germany",
    description: "Tuition-free or low-cost universities with engineering and technology excellence.",
    overview:
      "Germany is a dream destination for students seeking high-quality education at minimal cost. Most public universities charge no tuition fees, even for international students. Known for engineering excellence and strong industry connections, Germany offers outstanding career prospects.",
    whyStudy: [
      "No or very low tuition fees at public universities",
      "World-leading engineering and technology programs",
      "18-month post-study job seeker visa",
      "Strong industrial connections and internship opportunities",
      "Central location in Europe with travel opportunities",
      "High standard of living and safety",
    ],
    popularCourses: [
      "Mechanical Engineering",
      "Automotive Engineering",
      "Computer Science",
      "Business Administration",
      "Environmental Science",
      "Renewable Energy",
    ],
    requirements: [
      "Valid passport and student visa",
      "German language proficiency (for German-taught programs)",
      "IELTS/TOEFL (for English-taught programs)",
      "Academic transcripts with APS certificate",
      "Proof of funds (blocked account ~11,208 EUR/year)",
      "Health insurance coverage",
    ],
    visaInfo:
      "Non-EU students need a Student Visa or Student Applicant Visa. A blocked account with sufficient funds is required. Our team assists with APS certification and complete visa documentation.",
    workOpportunity:
      "Students can work 120 full days or 240 half days per year. After graduation, an 18-month job seeker visa allows you to find employment related to your studies.",
  },
}

export async function generateStaticParams() {
  return Object.keys(countryData).map((country) => ({ country }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>
}): Promise<Metadata> {
  const { country } = await params
  const data = countryData[country]
  if (!data) return { title: "Not Found" }
  return {
    title: `Study in ${data.name} - B.M. Study Abroad Consultancy`,
    description: data.description,
  }
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>
}) {
  const { country } = await params
  const data = countryData[country]
  if (!data) notFound()

  return (
    <>
      <PageHeader
        title={`Study in ${data.name}`}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Study Abroad", href: "/study-abroad" },
          { name: data.name },
        ]}
        description={data.description}
      />

      {/* Overview */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[oklch(0.75_0.15_75)]">
                Overview
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Why Study in {data.fullName}?
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {data.overview}
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {data.whyStudy.map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[oklch(0.75_0.15_75)]" />
                    <span className="text-sm text-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-base font-bold text-foreground">
                  Popular Courses
                </h3>
                <div className="flex flex-col gap-2">
                  {data.popularCourses.map((course) => (
                    <div
                      key={course}
                      className="rounded-lg bg-secondary px-4 py-2.5 text-sm text-foreground"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-base font-bold text-foreground">
                  Work Opportunities
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {data.workOpportunity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Visa */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Admission Requirements
              </h3>
              <div className="flex flex-col gap-3">
                {data.requirements.map((req, i) => (
                  <div key={req} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[oklch(0.30_0.08_260)] text-xs font-bold text-[oklch(0.75_0.15_75)]">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Visa Information
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {data.visaInfo}
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[oklch(0.30_0.08_260)] px-6 py-3 text-sm font-semibold text-[oklch(0.95_0.005_250)] transition-all hover:bg-[oklch(0.25_0.07_260)]"
                >
                  Get Visa Assistance
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <SectionTitle
            label="Get Started"
            title={`Start Your ${data.name} Journey`}
            description={`Ready to study in ${data.fullName}? Fill out the form below and our expert counselors will get in touch.`}
          />
          <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
