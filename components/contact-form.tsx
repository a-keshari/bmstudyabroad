"use client"

export function ContactForm() {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Full Name"
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20"
        />
        <input
          type="tel"
          placeholder="Contact Number"
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20"
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <select className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20">
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
          type="text"
          placeholder="Course you are interested in"
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20"
        />
      </div>
      <textarea
        placeholder="Your Message"
        rows={4}
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
