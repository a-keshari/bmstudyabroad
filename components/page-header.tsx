import Link from "next/link"

interface PageHeaderProps {
  title: string
  breadcrumbs: { name: string; href?: string }[]
  description?: string
}

export function PageHeader({ title, breadcrumbs, description }: PageHeaderProps) {
  return (
    <section className="bg-[oklch(0.22_0.06_260)]">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <nav className="mb-4 flex items-center gap-2 text-sm text-[oklch(0.65_0.02_260)]">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.name} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-[oklch(0.75_0.15_75)]"
                >
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-[oklch(0.75_0.15_75)]">{crumb.name}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="font-serif text-4xl font-bold text-[oklch(0.95_0.005_250)] md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[oklch(0.70_0.01_250)]">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
