"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function ApplyModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener("open-apply-modal", handler)
    return () => window.removeEventListener("open-apply-modal", handler)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-card p-8 shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <Image
          src="/images/bm-logo.png"
          alt="B.M. Study Abroad Consultancy"
          width={56}
          height={56}
          className="mb-4 h-14 w-14 object-contain"
        />
        <h2 className="mb-1 font-serif text-2xl font-bold text-foreground">
          Apply Now
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Start your journey to study abroad today.
        </p>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20"
          />
          <input
            type="tel"
            placeholder="Contact Number"
            className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20"
          />
          <select className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-[oklch(0.30_0.08_260)] focus:outline-none focus:ring-2 focus:ring-ring/20">
            <option value="">Select Location</option>
            <option>Kathmandu</option>
            <option>Chitwan</option>
            <option>Pokhara</option>
            <option>Butwal</option>
          </select>
          <button
            type="submit"
            className="rounded-lg bg-[oklch(0.30_0.08_260)] py-3 text-sm font-semibold text-[oklch(0.95_0.005_250)] transition-all hover:bg-[oklch(0.25_0.07_260)]"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}
