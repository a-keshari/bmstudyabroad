import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { ServicesSection } from "@/components/home/services-section"
import { DestinationsSection } from "@/components/home/destinations-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { ClassesSection } from "@/components/home/classes-section"
import { UniversitiesSection } from "@/components/home/universities-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { SuccessStoriesSection } from "@/components/home/success-stories-section"
import { BlogSection } from "@/components/home/blog-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <DestinationsSection />
      <WhyChooseSection />
      <ClassesSection />
      <UniversitiesSection />
      <TestimonialsSection />
      <SuccessStoriesSection />
      <BlogSection />
      <CtaSection />
    </>
  )
}
