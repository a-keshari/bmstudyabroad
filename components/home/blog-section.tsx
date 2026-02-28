import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { SectionTitle } from "@/components/section-title"

const blogs = [
  {
    title: "Top Courses in Germany for International Students",
    date: "January 7, 2026",
    excerpt:
      "Discover the most sought-after courses in Germany that offer excellent career prospects for international students.",
    image: "/images/blog-germany.jpg",
  },
  {
    title: "Online vs Offline PTE Classes in Kathmandu",
    date: "January 2, 2026",
    excerpt:
      "Comparing the benefits of online and offline PTE preparation classes to help you choose the right format.",
    image: "/images/blog-test-prep.jpg",
  },
  {
    title: "UK Student Visa Guide for Nepalese Students",
    date: "December 30, 2025",
    excerpt:
      "A comprehensive guide to the UK student visa application process specifically for students from Nepal.",
    image: "/images/blog-uk-visa.jpg",
  },
  {
    title: "Consultancy in Nepal with High Visa Success Rate",
    date: "December 28, 2025",
    excerpt:
      "Learn what makes a consultancy stand out with consistent visa approval rates for students heading to the UK.",
    image: "/images/blog-consultancy.jpg",
  },
]

export function BlogSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          label="Our Blog"
          title="Insights for Your Study Abroad Journey"
          description="Expert articles covering test preparation tips, visa guides, university reviews, and more."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg"
            >
              {/* Blog image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {blog.date}
                </div>
                <h3 className="mb-3 text-base font-bold leading-snug text-foreground line-clamp-2">
                  {blog.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {blog.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.30_0.08_260)] transition-colors group-hover:text-[oklch(0.75_0.15_75)]">
                  Read More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
          >
            View More Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
