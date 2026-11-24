import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'motion/react'
import { ChevronLeft, Phone, Sparkles, UserPlus, CalendarCheck, Send, Pencil, Tag, BellRing } from 'lucide-react'
import { Bubble, Typing } from '../components/Bubble'
import DemoBadge from '../components/DemoBadge'
import { Eyebrow } from '../components/SectionHeading'
import { demoSteps } from '../content/site'

/* ─── Teléfono con la conversación ───────────────────────────── */
function PhoneChat({ step }) {
  return (
    <div className="relative mx-auto w-[272px] shrink-0 rounded-[40px] bg-ink p-2 shadow-lift sm:w-[320px] sm:rounded-[44px] sm:p-2.5">
      <div className="absolute top-4 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
      <div className="flex h-[min(430px,48svh)] flex-col overflow-hidden rounded-[32px] bg-mist sm:h-[560px] sm:rounded-[36px]">
        <div className="flex items-center gap-2 bg-white px-4 pt-10 pb-3 ring-1 ring-line">
          <ChevronLeft className="size-5 text-electric" aria-hidden="true" />
          <span className="grid size-9 place-items-center rounded-full bg-coral-100 text-xs font-bold text-[#c2493d]">LM</span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Laura M.</p>
            <p className="flex items-center gap-1 text-[11px] text-ink-50">
              <span className="size-1.5 rounded-full bg-online" /> vía WhatsApp
            </p>
          </div>
          <Phone className="ml-auto size-4 text-electric" aria-hidden="true" />
        </div>

        <div className="flex flex-1 flex-col justify-end gap-2 overflow-hidden p-3">
          <p className="mx-auto my-1 rounded-full bg-white px-3 py-1 text-[10px] font-medium text-ink-50">Hoy</p>
          <Bubble from="client">¡Hola! ¿Tienen hora para una limpieza dental esta semana?</Bubble>
          <AnimatePresence mode="popLayout">
            {step === 1 && <Typing key="typing" className="self-end" />}
          </AnimatePresence>
          {step >= 1 && (
            <Bubble from="ai" delay={0.5}>
              ¡Hola Laura! Sí, tengo el jueves a las 10:00 o a las 16:30. ¿Cuál te acomoda?
              {step === 1 && (
                <span className="mt-2 flex gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-electric px-2.5 py-1 text-[10px] font-semibold text-white">
                    <Send className="size-3" aria-hidden="true" /> Enviar
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-ink-70 ring-1 ring-line">
                    <Pencil className="size-3" aria-hidden="true" /> Editar
                  </span>
                </span>
              )}
            </Bubble>
          )}
          {step >= 2 && <Bubble from="client">¡Jueves 16:30, perfecto!</Bubble>}
          {step >= 3 && (
            <Bubble from="agent">
              Listo, quedó agendado. Te enviaremos un recordatorio el día anterior.
            </Bubble>
          )}
          {step >= 4 && <Bubble from="client">¡Muchas gracias!</Bubble>}
        </div>

        <div className="m-3 mt-0 flex items-center gap-2 rounded-full bg-white p-1.5 pl-4 text-[12px] text-ink-50 ring-1 ring-line">
          Escribe un mensaje…
          <span className="ml-auto grid size-8 place-items-center rounded-full bg-electric text-white">
            <Send className="size-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  )
}

/* ─── Panel del CRM que reacciona ────────────────────────────── */
const stages = ['Nuevo', 'Agendado', 'Cerrado']

function CrmPanel({ step }) {
  const card = 'rounded-2xl bg-white p-4 shadow-soft ring-1 ring-line'
  const enter = {
    initial: { opacity: 0, x: 40, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 20 },
    transition: { type: 'spring', stiffness: 260, damping: 26 },
  }
  return (
    <div className="flex w-full max-w-[340px] flex-col gap-3">
      <AnimatePresence mode="popLayout">
        {step >= 1 && (
          <motion.div key="ai" layout {...enter} className={`${card} !bg-electric text-white !ring-0`}>
            <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide uppercase opacity-90">
              <Sparkles className="size-3.5" aria-hidden="true" /> Asistente IA · demostración
            </p>
            <p className="mt-1.5 text-sm font-medium">Intención detectada: agendar una cita.</p>
          </motion.div>
        )}
        {step >= 2 && (
          <motion.div key="contact" layout {...enter} className={card}>
            <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-ink-50 uppercase">
              <UserPlus className="size-3.5 text-electric" aria-hidden="true" /> Ficha de cliente
            </p>
            <div className="mt-2 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-coral-100 text-sm font-bold text-[#c2493d]">LM</span>
              <div>
                <p className="font-semibold">Laura M.</p>
                <p className="text-xs text-ink-50">Interés: limpieza dental</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-full bg-mist px-2 py-0.5 text-[11px] font-medium text-electric">
                <Tag className="size-3" aria-hidden="true" /> Nuevo cliente
              </span>
              <span className="rounded-full bg-coral-100 px-2 py-0.5 text-[11px] font-medium text-[#a63b30]">WhatsApp</span>
            </div>
          </motion.div>
        )}
        {step >= 3 && (
          <motion.div key="agenda" layout {...enter} className={card}>
            <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-ink-50 uppercase">
              <CalendarCheck className="size-3.5 text-electric" aria-hidden="true" /> Agenda
            </p>
            <div className="mt-2 flex items-center gap-3">
              <div className="grid w-12 place-items-center rounded-xl bg-electric py-1.5 text-white">
                <span className="text-[10px] font-semibold uppercase">Jue</span>
                <span className="font-display text-lg leading-none font-bold">16:30</span>
              </div>
              <div>
                <p className="font-semibold">Limpieza dental</p>
                <p className="flex items-center gap-1 text-xs text-ink-50">
                  <BellRing className="size-3" aria-hidden="true" /> Recordatorio 24 h antes
                </p>
              </div>
            </div>
          </motion.div>
        )}
        {step >= 4 && (
          <motion.div key="deal" layout {...enter} className={card}>
            <p className="text-[11px] font-semibold tracking-wide text-ink-50 uppercase">Pipeline de ventas</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {stages.map((s) => (
                <div key={s} className="rounded-xl bg-mist p-2">
                  <p className="text-[10px] font-semibold text-ink-50">{s}</p>
                  {s === 'Agendado' && (
                    <motion.div
                      layoutId="deal-chip"
                      initial={{ x: -60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
                      className="mt-1.5 rounded-lg bg-white p-1.5 text-[10px] font-semibold shadow-soft"
                    >
                      Laura M.
                      <span className="mt-1 block h-1 rounded-full bg-coral" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {step === 0 && (
        <div className="rounded-2xl border-2 border-dashed border-line p-6 text-center text-sm text-ink-50">
          El CRM se completa a medida que avanza la conversación.
        </div>
      )}
    </div>
  )
}

export default function ProductDemo() {
  const ref = useRef(null)
  const [step, setStep] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const s = Math.min(demoSteps.length - 1, Math.floor(v * demoSteps.length * 1.02))
    setStep((prev) => (prev === s ? prev : Math.max(0, s)))
  })
  const bar = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="demo" ref={ref} aria-labelledby="demo-title" className="relative bg-white" style={{ height: `${demoSteps.length * 85 + 40}vh` }}>
      <div className="sticky top-0 flex min-h-svh items-center overflow-hidden pt-20 pb-6 md:py-24">
        <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(transparent,black_30%,black_70%,transparent)]" />
        <div className="container-x grid items-center gap-5 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Narrativa */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>Producto en acción</Eyebrow>
              <DemoBadge>Simulación local</DemoBadge>
            </div>
            <h2 id="demo-title" className="mt-3 max-w-xl text-[2rem] leading-[1.02] font-bold tracking-[-0.035em] sm:text-4xl md:text-6xl">
              Mira un mensaje convertirse en cliente.
            </h2>

            {/* Lista completa (escritorio y lectores de pantalla) */}
            <ol className="mt-10 hidden space-y-1 lg:block">
              {demoSteps.map((s, i) => {
                const active = i === step
                return (
                  <li key={s.key} aria-current={active ? 'step' : undefined} className="relative rounded-2xl py-3 pr-4 pl-14">
                    {active && (
                      <motion.span layoutId="step-bg" className="absolute inset-0 -z-10 rounded-2xl bg-mist" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                    )}
                    <span
                      className={`absolute top-3.5 left-4 grid size-7 place-items-center rounded-full text-xs font-bold transition-colors ${
                        i < step ? 'bg-electric text-white' : active ? 'bg-coral text-ink' : 'bg-mist text-ink-50 ring-1 ring-line'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <p className={`font-display text-lg font-semibold transition-colors ${active ? 'text-ink' : 'text-ink-50'}`}>{s.title}</p>
                    <motion.p
                      initial={false}
                      animate={{ height: active ? 'auto' : 0, opacity: active ? 1 : 0 }}
                      className="overflow-hidden text-ink-70"
                    >
                      <span className="block pt-1">{s.text}</span>
                    </motion.p>
                  </li>
                )
              })}
            </ol>

            {/* Paso actual (móvil) */}
            <div className="mt-4 lg:hidden" aria-live="polite">
              <div className="mb-3 h-1 overflow-hidden rounded-full bg-mist">
                <motion.div style={{ width: bar }} className="h-full rounded-full bg-coral" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                  <p className="font-display text-lg font-semibold">
                    {step + 1}. {demoSteps[step].title}
                  </p>
                  <p className="text-sm text-ink-70">{demoSteps[step].text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Visual sincronizado */}
          <div className="flex items-center justify-center gap-6" aria-hidden="true">
            <div>
              <PhoneChat step={step} />
            </div>
            <div className="hidden w-[340px] md:block">
              <CrmPanel step={step} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
