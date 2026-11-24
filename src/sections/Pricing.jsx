import { Check, Info, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { plans, site } from '../content/site'

export default function Pricing() {
  return (
    <section id="planes" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Planes y precios"
          title="Un plan para cada etapa de tu negocio."
          lead="Estamos definiendo nuestros planes. Muy pronto encontrarás aquí todos los detalles."
        />
        <Reveal className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full bg-coral-100 px-4 py-2 text-sm font-medium text-[#8a2f26]">
          <Info className="size-4" aria-hidden="true" /> Precios y características por confirmar
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p, i) => {
            const hl = p.highlighted
            return (
              <Reveal
                key={p.id}
                delay={i * 0.08}
                className={`relative flex flex-col rounded-[32px] p-8 transition-transform duration-500 hover:-translate-y-1.5 ${
                  hl ? 'bg-ink text-white shadow-lift lg:-my-4 lg:py-12' : 'bg-white ring-1 ring-line'
                }`}
              >
                {hl && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-coral px-3.5 py-1 text-xs font-bold text-ink">Destacado</span>
                )}
                <h3 className="text-2xl font-bold tracking-tight">{p.name}</h3>
                <p className={`mt-2 min-h-12 text-[15px] ${hl ? 'text-white/75' : 'text-ink-70'}`}>{p.audience}</p>
                <div className="mt-8 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold tracking-tight">{p.price ?? 'Por definir'}</span>
                </div>
                <p className={`mt-1 text-sm ${hl ? 'text-white/60' : 'text-ink-50'}`}>Precio próximamente</p>
                <ul className={`mt-8 space-y-3 border-t pt-8 ${hl ? 'border-white/15' : 'border-line'}`}>
                  {p.features.map((f, k) => (
                    <li key={k} className="flex items-center gap-3 text-[15px]">
                      <span className={`grid size-5 place-items-center rounded-full ${hl ? 'bg-coral text-ink' : 'bg-electric-100 text-electric'}`}>
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      <span className={hl ? 'text-white/85' : 'text-ink-70'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <Button href={site.ctaHref} variant={hl ? 'light' : 'secondary'} className="w-full">
                    Solicitar información
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Button>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
