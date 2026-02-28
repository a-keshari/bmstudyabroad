"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Study Abroad",
    href: "/study-abroad",
    children: [
      { name: "USA", href: "/study-abroad/usa" },
      { name: "UK", href: "/study-abroad/uk" },
      { name: "Australia", href: "/study-abroad/australia" },
      { name: "Canada", href: "/study-abroad/canada" },
      { name: "New Zealand", href: "/study-abroad/new-zealand" },
      { name: "Ireland", href: "/study-abroad/ireland" },
      { name: "Germany", href: "/study-abroad/germany" },
    ],
  },
  {
    name: "Test Preparation",
    href: "/test-preparation",
    children: [
      { name: "IELTS", href: "/test-preparation#ielts" },
      { name: "PTE", href: "/test-preparation#pte" },
      { name: "TOEFL", href: "/test-preparation#toefl" },
      { name: "SAT", href: "/test-preparation#sat" },
      { name: "GRE", href: "/test-preparation#gre" },
      { name: "GMAT", href: "/test-preparation#gmat" },
    ],
  },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <>
      {/* Top bar */}
      <div className="bg-[oklch(0.22_0.06_260)] text-[oklch(0.95_0.005_250)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+977-9801030907"
              className="flex items-center gap-1.5 transition-colors hover:text-[oklch(0.75_0.15_75)]"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">+977-9801030907</span>
            </a>
            <a
              href="mailto:info@bmstudyabroad.com"
              className="flex items-center gap-1.5 transition-colors hover:text-[oklch(0.75_0.15_75)]"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">info@bmstudyabroad.com</span>
            </a>
          </div>
          <button
            className="rounded-md bg-[oklch(0.75_0.15_75)] px-4 py-1.5 text-xs font-semibold text-[oklch(0.15_0.03_260)] transition-all hover:bg-[oklch(0.80_0.13_80)]"
            onClick={() => {
              const event = new CustomEvent("open-apply-modal")
              window.dispatchEvent(event)
            }}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/bm-logo.png"
              alt="B.M. Study Abroad Consultancy"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold leading-tight text-[oklch(0.22_0.06_260)]">
                B.M. Study Abroad
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <div key={link.name} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-[oklch(0.30_0.08_260)]"
                >
                  {link.name}
                  {link.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {link.children && (
                  <div className="invisible absolute left-0 top-full z-50 min-w-48 rounded-lg border border-border bg-card p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary hover:text-[oklch(0.30_0.08_260)]"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-border bg-card px-4 pb-6 pt-4 lg:hidden">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between py-3 text-sm font-medium text-foreground"
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.name ? null : link.name)
                      }
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === link.name && (
                      <div className="pb-2 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-3 text-sm font-medium text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  )
}
