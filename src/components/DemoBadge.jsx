import { FlaskConical } from 'lucide-react'

/** Etiqueta obligatoria en toda simulación de IA o dato de ejemplo. */
export default function DemoBadge({ children = 'Demostración', tone = 'light', className = '' }) {
  const tones = {
    light: 'bg-white/90 text-ink ring-1 ring-line',
    dark: 'bg-white/10 text-white ring-1 ring-white/20',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase backdrop-blur ${tones[tone]} ${className}`}
    >
      <FlaskConical className="size-3 text-electric" aria-hidden="true" />
      {children}
    </span>
  )
}
