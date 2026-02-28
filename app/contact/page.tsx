import type { Metadata } from "next"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us - B.M. Study Abroad Consultancy",
  description:
    "Get in touch with B.M. Study Abroad Consultancy. Visit our office in Kathmandu or contact us for a free counseling session.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["Putalisadak, Kathmandu", "Nepal"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    lines: ["+977 01-4XXXXXX", "+977 98XXXXXXXX"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@bmstudyabroad.com", "admissions@bmstudyabroad.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Sunday - Friday: 7:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
  },
]

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
]

const faqs = [
  {
    question: "How do I book a counseling session?",
    answer:
      "You can book a free counseling session by filling out the contact form on this page, calling our office, or visiting us in person during office hours. We typically respond within 24 hours.",
  },
  {
    question: "Is the initial consultation free?",
    answer:
      "Yes, we offer a completely free initial consultation where our expert counselors will assess your profile, discuss your goals, and recommend the best path forward for your study abroad journey.",
  },
  {
    question: "What documents should I bring to my first visit?",
    answer:
      "For your first visit, please bring your academic transcripts, passport (if available), any test scores you have, and a list of courses or universities you are interested in. This helps us provide more personalized guidance.",
  },
  {
    question: "Do you offer online counseling?",
    answer:
      "Yes, we offer online counseling sessions via Zoom and Google Meet for students who cannot visit our office in person. Contact us to schedule a virtual appointment.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "The timeline varies by country and university, but typically the process takes 2-4 months from application to offer letter. We recommend starting at least 6-8 months before your intended intake.",
  },
  {
    question: "Do you help with visa applications?",
    answer:
      "Yes, we provide complete visa application support including documentation preparation, form filling, financial documentation guidance, and mock visa interview preparation.",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact Us" },
        ]}
        description="We would love to hear from you. Reach out for a free consultation and let us help you take the first step toward studying abroad."
      />

      {/* Contact Info Cards */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-0 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex flex-col items-center py-10 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[oklch(0.30_0.08_260)]">
                  <info.icon className="h-5 w-5 text-[oklch(0.75_0.15_75)]" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-foreground">{info.title}</h3>
                {info.lines.map((line) => (
                  <p key={line} className="text-sm text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
            {/* Left - Info */}
            <div className="lg:col-span-2">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[oklch(0.75_0.15_75)]">
                Get in Touch
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Let{"'"}s Start Your Journey Together
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Thank you for your interest in reaching out to us. Our team of experienced counselors is
                ready to help you navigate the exciting journey of studying abroad. Whether you need help
                choosing a destination, preparing for exams, or applying to universities, we are here for you.
              </p>

              <div className="mt-8">
                <h3 className="mb-4 text-sm font-bold text-foreground">Follow Us</h3>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-[oklch(0.75_0.15_75)]/30 hover:bg-[oklch(0.30_0.08_260)] hover:text-[oklch(0.75_0.15_75)]"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="mt-8 rounded-xl border border-[oklch(0.75_0.15_75)]/20 bg-[oklch(0.75_0.15_75)]/5 p-6">
                <h3 className="mb-2 text-sm font-bold text-foreground">Free Counseling Session</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Book your free counseling session today. Our experienced counselors will evaluate your
                  profile, discuss your study abroad goals, and create a personalized roadmap for your
                  academic journey.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                  Send Us a Message
                </h3>
                <p className="mb-8 text-sm text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            label="Find Us"
            title="Visit Our Office"
            description="We are conveniently located in the heart of Kathmandu. Walk-ins are welcome during office hours."
          />

          <div className="mt-14 overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2!2d85.321!3d27.706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzIxLjYiTiA4NcKwMTknMTUuNiJF!5e0!3m2!1sen!2snp!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="B.M. Study Abroad Consultancy Office Location"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            label="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services and the study abroad process."
          />

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-[oklch(0.75_0.15_75)]/30 hover:shadow-md"
              >
                <h3 className="mb-3 text-sm font-bold text-foreground">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.22_0.06_260)] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-[oklch(0.95_0.005_250)] md:text-4xl">
            Ready to Start Your Study Abroad Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[oklch(0.70_0.01_250)]">
            Book your free counseling session today and let our expert team help you take the first step
            toward your dream education.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+97701400000"
              className="inline-flex items-center gap-2 rounded-lg bg-[oklch(0.75_0.15_75)] px-8 py-3.5 text-sm font-semibold text-[oklch(0.15_0.03_260)] transition-all hover:bg-[oklch(0.80_0.13_80)]"
            >
              <Phone className="h-4 w-4" />
              Call Us Now
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
