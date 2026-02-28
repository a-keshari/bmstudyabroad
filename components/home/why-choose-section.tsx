import { Shield, BookOpen, Trophy } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Expert Guidance",
    description:
      "Our team of experienced instructors and counselors specializes in providing expert guidance for test preparation and study abroad success. With years of expertise, we offer personalized support tailored to each student's needs, ensuring they are well-equipped to excel in their exams and pursue their dreams of studying abroad.",
  },
  {
    icon: BookOpen,
    title: "Study Support",
    description:
      "We recognize the significance of effective study support in both test preparation and studying abroad. At B.M. Study Abroad, we provide a wide array of study materials and resources. From practice tests and study guides to guidance on application procedures and visa requirements, we offer everything our students need to succeed.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description:
      "With over twenty-five years of experience, B.M. Study Abroad has established a proven track record in both test preparation and study abroad placements. Our commitment to student success is evident in the thousands of students who have gone on to achieve their academic and career aspirations abroad.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="bg-[oklch(0.22_0.06_260)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[oklch(0.75_0.15_75)]">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[oklch(0.95_0.005_250)] md:text-4xl">
            Nepal{"'"}s Leading Educational Consultancy
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-xl border border-[oklch(0.30_0.06_260)] bg-[oklch(0.25_0.05_260)] p-8 transition-all hover:border-[oklch(0.75_0.15_75)]/30"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[oklch(0.75_0.15_75)]/10">
                <reason.icon className="h-7 w-7 text-[oklch(0.75_0.15_75)]" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-[oklch(0.95_0.005_250)]">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-[oklch(0.65_0.02_260)]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
