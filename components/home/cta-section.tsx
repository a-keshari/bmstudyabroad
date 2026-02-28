import { SectionTitle } from "@/components/section-title"
import { ContactForm } from "@/components/contact-form"

export function CtaSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle
              label="Contact Us"
              title="Ready to Start Your Journey?"
              description="Get in touch with our expert counselors to begin your study abroad journey today."
              centered={false}
            />
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.30_0.08_260)]">
                  <span className="text-sm font-bold text-[oklch(0.75_0.15_75)]">1</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Free Consultation</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Schedule a free consultation with our expert counselors.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.30_0.08_260)]">
                  <span className="text-sm font-bold text-[oklch(0.75_0.15_75)]">2</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Get a Personalized Plan</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Receive a tailored roadmap for your study abroad journey.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.30_0.08_260)]">
                  <span className="text-sm font-bold text-[oklch(0.75_0.15_75)]">3</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Start Your Journey</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Begin applications, test prep, and visa processing with our support.
                  </p>
                </div>
              </div>
            </div>
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
  )
}
