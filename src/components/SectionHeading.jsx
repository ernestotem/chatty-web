import Reveal from './Reveal'

/** Encabezado de sección con la "colita" de burbuja como marcador (firma visual). */
export function Eyebrow({ children, tone = 'electric' }) {
  const color = tone === 'coral' ? 'text-coral' : tone === 'white' ? 'text-white' : 'text-electric'
  return (
    <span className={`inline-flex items-center gap-2 text-sm font-semibold ${color}`}>
      <BubbleTail className="size-3.5" />
      {children}
    </span>
  )
}

export function BubbleTail({ className = '' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" fill="currentColor">
      <path d="M8 1a7 7 0 0 1 7 7v0a7 7 0 0 1-7 7H1.5a.5.5 0 0 1-.4-.8L3 12.2A7 7 0 0 1 8 1Z" />
    </svg>
  )
}

export default function SectionHeading({ eyebrow, title, lead, align = 'left', tone, className = '' }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal y={12}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal as="h2" delay={0.05} className="mt-4 text-4xl leading-[1.02] font-bold tracking-[-0.035em] md:text-6xl">
        {title}
      </Reveal>
      {lead && (
        <Reveal as="p" delay={0.12} className={`mt-5 text-lg leading-relaxed text-ink-70 md:text-xl ${center ? 'mx-auto' : ''} max-w-2xl`}>
          {lead}
        </Reveal>
      )}
    </div>
  )
}
