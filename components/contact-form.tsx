"use client"
import type { FormEvent } from "react"

export function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const getValue = (key: string) => (formData.get(key)?.toString().trim() ?? "")

    const fullName = getValue("fullName")
    const contactNumber = getValue("contactNumber")
    const email = getValue("email")
    const country = getValue("country")
    const course = getValue("course")
    const message = getValue("message")

    const subject = `Website Inquiry - ${fullName || "New Lead"}`
    const body = [
      `Full Name: ${fullName}`,
      `Contact Number: ${contactNumber}`,
      `Email: ${email}`,
      `Interested Country: ${country}`,
      `Interested Course: ${course}`,
      "",
      "Message:",
      message,
    ].join("\n")

    window.location.href = `mailto:abhi.ksari@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          required
          minLength={2}
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20"
        />
        <input
          name="contactNumber"
          type="tel"
          placeholder="Contact Number"
          required
          minLength={7}
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20"
        />
      </div>
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <select
          name="country"
          required
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20"
        >
          <option value="">Country you are interested in</option>
          <option>USA</option>
          <option>UK</option>
          <option>Australia</option>
          <option>Canada</option>
          <option>New Zealand</option>
          <option>Ireland</option>
          <option>Germany</option>
        </select>
        <input
          name="course"
          type="text"
          placeholder="Course you are interested in"
          required
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20"
        />
      </div>
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        minLength={10}
        className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20"
      />
      <p className="text-xs text-muted-foreground">
        By clicking the send button you agree to our{" "}
        <a href="#" className="text-[oklch(0.30_0.08_260)] underline">
          Privacy Policy
        </a>
      </p>
      <button
        type="submit"
        className="self-start rounded-lg bg-[oklch(0.30_0.08_260)] px-8 py-3 text-sm font-semibold text-[oklch(0.95_0.005_250)] transition-all hover:bg-[oklch(0.25_0.07_260)]"
      >
        Send Message
      </button>
    </form>
  )
}
