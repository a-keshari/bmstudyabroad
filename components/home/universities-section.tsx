import { SectionTitle } from "@/components/section-title"

const universities = [
  { name: "University of The Sunshine Coast", country: "Australia" },
  { name: "Griffith College", country: "Ireland" },
  { name: "James Cook University", country: "Australia" },
  { name: "University of Wollongong", country: "Australia" },
  { name: "Central Queensland University", country: "Australia" },
  { name: "Southeast Missouri State University", country: "USA" },
  { name: "University of Utah", country: "USA" },
  { name: "Gannon University", country: "USA" },
]

export function UniversitiesSection() {
  return (
    <section className="bg-[oklch(0.22_0.06_260)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          label="Featured Universities"
          title="Our Partner Institutions"
          description="We are proud to be affiliated with hundreds of world-class universities across the globe."
          light
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {universities.map((uni) => (
            <div
              key={uni.name}
              className="group flex flex-col items-center rounded-xl border border-[oklch(0.30_0.06_260)] bg-[oklch(0.25_0.05_260)] p-6 text-center transition-all hover:border-[oklch(0.75_0.15_75)]/30"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[oklch(0.75_0.15_75)]/10">
                <span className="font-serif text-xl font-bold text-[oklch(0.75_0.15_75)]">
                  {uni.name.charAt(0)}
                </span>
              </div>
              <h3 className="mb-1 text-sm font-bold text-[oklch(0.95_0.005_250)]">
                {uni.name}
              </h3>
              <span className="text-xs text-[oklch(0.65_0.02_260)]">{uni.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
