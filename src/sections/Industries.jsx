import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import SectionHeading from '../components/SectionHeading'
import { Bubble } from '../components/Bubble'
import DemoBadge from '../components/DemoBadge'
import Icon from '../components/Icon'
import { industries } from '../content/site'

export default function Industries() {
  const [active, setActive] = useState(industries[0].id)
  const tabsRef = useRef([])
  const cur = industries.find((x) => x.id === active)

  const onKeyDown = (e, idx) => {
    const n = industries.length
    let next = null
    if (e.key === 'ArrowRight') next = (idx + 1) % n
    if (e.key === 'ArrowLeft') next = (idx - 1 + n) % n
    if (next !== null) {
      e.preventDefault()
      setActive(industries[next].id)
      tabsRef.current[next]?.focus()
    }
  }

  return (
    <section id="rubros" className="relative overflow-hidden bg-mist py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Soluciones por rubro"
            title={
              <>
                Hecho para negocios
                <br />
                que <span className="text-electric">conversan.</span>
              </>
            }
          />
          <p className="max-w-sm text-lg text-ink-70">
            Elige tu sector y mira un ejemplo de cómo Chatty convierte una conversación en una acción concreta.
          </p>
        </div>

        <div role="tablist" aria-label="Rubros" className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0">
          {industries.map((x, idx) => {
            const on = x.id === active
            return (
              <button
                key={x.id}
                ref={(el) => (tabsRef.current[idx] = el)}
                role="tab"
                type="button"
                id={`rubro-tab-${x.id}`}
                aria-selected={on}
                aria-controls="rubro-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(x.id)}
                onKeyDown={(e) => onKeyDown(e, idx)}
                className={`relative flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-[15px] font-semibold whitespace-nowrap transition-colors ${
                  on ? 'text-white' : 'bg-white text-ink-70 ring-1 ring-line hover:text-ink hover:ring-electric/40'
                }`}
              >
                {on && <motion.span layoutId="rubro-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                <Icon name={x.icon} className="relative size-4" />
                <span className="relative">{x.label}</span>
              </button>
            )
          })}
        </div>

        <div id="rubro-panel" role="tabpanel" aria-labelledby={`rubro-tab-${active}`} className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid overflow-hidden rounded-[36px] bg-white ring-1 ring-line lg:grid-cols-2"
            >
              <div className="relative isolate flex flex-col justify-between gap-10 overflow-hidden p-8 md:p-12">
                <div className="relative z-10">
                  <span className="grid size-16 place-items-center rounded-[22px] bg-electric text-white shadow-glow">
                    <Icon name={cur.icon} className="size-8" />
                  </span>
                  <h3 className="mt-8 text-3xl font-bold tracking-tight md:text-5xl">{cur.label}</h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-70">{cur.pitch}</p>
                </div>
                <Icon name={cur.icon} className="pointer-events-none absolute -right-12 -bottom-12 -z-0 size-56 text-mist" />
              </div>

              <div className="relative bg-mist/60 p-6 md:p-10">
                <div className="bg-dots absolute inset-0 opacity-70" aria-hidden="true" />
                <div className="relative mx-auto max-w-md">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-ink-70">Conversación de ejemplo</p>
                    <DemoBadge />
                  </div>
                  <div className="flex flex-col gap-2.5" aria-label={`Conversación de ejemplo para ${cur.label}`}>
                    {cur.chat.map((m, i) => (
                      <Bubble key={i} from={m.from === 'client' ? 'client' : 'ai'} delay={0.25 + i * 0.55} className="text-[14px]">
                        {m.text}
                      </Bubble>
                    ))}
                  </div>
                  {/* La burbuja se convierte en tarjeta del CRM */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6, borderRadius: '24px 24px 24px 6px' }}
                    animate={{ opacity: 1, scale: 1, borderRadius: '20px' }}
                    transition={{ delay: 0.3 + cur.chat.length * 0.55, type: 'spring', stiffness: 220, damping: 20 }}
                    className="mt-6 flex items-center gap-3 bg-ink p-4 text-white shadow-lift"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-coral text-ink">
                      <Icon name={cur.card.icon} className="size-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold tracking-wide text-white/70 uppercase">{cur.card.label}</p>
                      <p className="font-semibold">{cur.card.value}</p>
                    </div>
                    <span className="ml-auto rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold">En Chatty</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
