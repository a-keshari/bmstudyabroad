import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.04_260)] text-[oklch(0.85_0.01_250)]">
      {/* Head office bar */}
      <div className="border-b border-[oklch(0.28_0.04_260)]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h3 className="mb-6 font-serif text-xl font-bold text-[oklch(0.95_0.005_250)]">
            Head Office
          </h3>
          <div className="max-w-md">
            <div className="flex items-start gap-3 rounded-lg border border-[oklch(0.28_0.04_260)] bg-[oklch(0.22_0.05_260)] p-4 transition-colors hover:border-[oklch(0.75_0.15_75)]/30">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[oklch(0.75_0.15_75)]" />
              <div>
                <p className="text-sm font-semibold text-[oklch(0.95_0.005_250)]">
                  Putalisadak, Kathmandu
                </p>
                <p className="text-xs text-[oklch(0.65_0.02_260)]">B.M. Centre</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <Image
                src="/images/bm-logo.png"
                alt="B.M. Study Abroad Consultancy"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-tight text-[oklch(0.95_0.005_250)]">
                  B.M. Study Abroad
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-[oklch(0.65_0.02_260)]">
                  Consultancy
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[oklch(0.65_0.02_260)]">
              Your trusted partner for international education. We guide students
              towards their dream of studying abroad with expert counseling and
              test preparation services.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[oklch(0.75_0.15_75)]">
              Sitemap
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Study Abroad", href: "/study-abroad" },
                { name: "Test Preparation", href: "/test-preparation" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[oklch(0.70_0.01_250)] transition-colors hover:text-[oklch(0.75_0.15_75)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Abroad */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[oklch(0.75_0.15_75)]">
              Study Abroad
            </h4>
            <ul className="flex flex-col gap-3">
              {["USA", "UK", "Australia", "Canada", "Ireland", "Germany"].map(
                (country) => (
                  <li key={country}>
                    <Link
                      href={`/study-abroad/${country.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-[oklch(0.70_0.01_250)] transition-colors hover:text-[oklch(0.75_0.15_75)]"
                    >
                      Study in {country}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[oklch(0.75_0.15_75)]">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+977-9801030907"
                  className="flex items-center gap-2.5 text-sm text-[oklch(0.70_0.01_250)] transition-colors hover:text-[oklch(0.75_0.15_75)]"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +977-9801030907
                </a>
              </li>
              <li>
                <a
                  href="tel:+977-01-5356600"
                  className="flex items-center gap-2.5 text-sm text-[oklch(0.70_0.01_250)] transition-colors hover:text-[oklch(0.75_0.15_75)]"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +977-01-5356600
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bmstudyabroad.com"
                  className="flex items-center gap-2.5 text-sm text-[oklch(0.70_0.01_250)] transition-colors hover:text-[oklch(0.75_0.15_75)]"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@bmstudyabroad.com
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.28_0.04_260)] text-[oklch(0.70_0.01_250)] transition-all hover:bg-[oklch(0.75_0.15_75)] hover:text-[oklch(0.15_0.03_260)]"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.28_0.04_260)] text-[oklch(0.70_0.01_250)] transition-all hover:bg-[oklch(0.75_0.15_75)] hover:text-[oklch(0.15_0.03_260)]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.28_0.04_260)] text-[oklch(0.70_0.01_250)] transition-all hover:bg-[oklch(0.75_0.15_75)] hover:text-[oklch(0.15_0.03_260)]"
                aria-label="Youtube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[oklch(0.28_0.04_260)]">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <p className="text-center text-xs text-[oklch(0.50_0.02_260)]">
            Copyright 2026, All rights reserved, B.M. Study Abroad Consultancy
          </p>
        </div>
      </div>
    </footer>
  )
}
