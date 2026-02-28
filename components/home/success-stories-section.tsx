import { SectionTitle } from "@/components/section-title"

const stories = [
  {
    name: "Rahul Thapa",
    program: "Bachelors of Computer Science",
    institution: "UTS University",
    country: "Australia",
    ielts: "7.0",
    scholarship: "AUS $10,000",
    intake: "Jan 2024",
  },
  {
    name: "Pooja Sharma",
    program: "Bachelors of Science",
    institution: "ACADIA University",
    country: "Canada",
    ielts: "6.8",
    scholarship: "CAD $8,000",
    intake: "Feb 2024",
  },
  {
    name: "Shivan Shah",
    program: "Bachelors of Arts - Accounting",
    institution: "NAVITAS University",
    country: "UK",
    ielts: "7.0",
    scholarship: "GBP 8,000",
    intake: "May 2024",
  },
]

export function SuccessStoriesSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          label="Success Stories"
          title="Our Students, Our Pride"
          description="Celebrating the achievements of our students who have secured admissions and scholarships at top universities worldwide."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.name}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              {/* Top accent */}
              <div className="bg-[oklch(0.30_0.08_260)] px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[oklch(0.95_0.005_250)]">
                      {story.name}
                    </h3>
                    <p className="text-sm text-[oklch(0.75_0.15_75)]">
                      {story.program}
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[oklch(0.75_0.15_75)]/20">
                    <span className="text-sm font-bold text-[oklch(0.75_0.15_75)]">
                      {story.ielts}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3 p-6">
                {[
                  { label: "Institution", value: story.institution },
                  { label: "Country", value: story.country },
                  { label: "Scholarship", value: story.scholarship },
                  { label: "Intake", value: story.intake },
                  { label: "IELTS Score", value: story.ielts },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
