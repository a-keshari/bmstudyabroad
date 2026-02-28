interface SectionTitleProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export function SectionTitle({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <span
          className={`mb-3 inline-block text-xs font-semibold uppercase tracking-widest ${
            light ? "text-[oklch(0.75_0.15_75)]" : "text-[oklch(0.75_0.15_75)]"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-serif text-3xl font-bold leading-tight md:text-4xl ${
          light ? "text-[oklch(0.95_0.005_250)]" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${
            light ? "text-[oklch(0.70_0.01_250)]" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
