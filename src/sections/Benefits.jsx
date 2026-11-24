import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { Sparkles, Zap, MessageCircle, CalendarCheck, Send, Inbox } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import DemoBadge from '../components/DemoBadge'
import { benefits } from '../content/site'

const b = Object.fromEntries(benefits.map((x) => [x.id, x]))

/** Tarjeta bento con foco de luz que sigue al cursor */
function Card({ className = '', dark = false, children, delay = 0 }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <Reveal
      delay={delay}
      onPointerMove={onMove}
      className={`group relative overflow-hidden rounded-[28px] p-7 transition-shadow duration-500 hover:shadow-lift ${
        dark ? 'bg-electric text-white' : 'bg-white ring-1 ring-line'
      } ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(380px circle at var(--mx) var(--my), ${dark ? 'rgb(255 255 255 / 0.14)' : 'rgb(37 99 255 / 0.07)'}, transparent 60%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </Reveal>
  )
}

function Title({ item, dark }) {
  return (
    <>
      <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
      <p className={`mt-2 max-w-sm text-[15px] leading-relaxed ${dark ? 'text-white/85' : 'text-ink-70'}`}>{item.text}</p>
    </>
  )
}

/* Bandeja: los mensajes llegan y se ordenan solos */
const inboxPool = [
  { n: 'Sofía', m: '¿Atienden los sábados?', tag: 'Consulta' },
  { n: 'Martín', m: 'Quiero reservar para dos', tag: 'Reserva' },
  { n: 'Valeria', m: '¿Me envían el catálogo?', tag: 'Ventas' },
  { n: 'Tomás', m: 'Gracias, quedó perfecto', tag: 'Resuelto' },
  { n: 'Camila', m: '¿Puedo cambiar mi hora?', tag: 'Agenda' },
]
function InboxVisual() {
  const reduce = useReducedMotion()
  const [start, setStart] = useState(0)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setStart((s) => (s + 1) % inboxPool.length), 2200)
    return () => clearInterval(t)
  }, [reduce])
  const items = [0, 1, 2, 3].map((k) => inboxPool[(start + k) % inboxPool.length])
  return (
    <div className="mt-8 rounded-2xl bg-mist p-3 ring-1 ring-line" aria-hidden="true">
      <div className="mb-2 flex items-center gap-2 px-1 text-[12px] font-semibold text-ink-70">
        <Inbox className="size-4 text-electric" /> Bandeja de entrada
        <span className="ml-auto text-[11px] font-medium text-ink-50">Datos de ejemplo</span>
      </div>
      <ul className="relative space-y-2">
        <AnimatePresence initial={false} mode="popLayout">
          {items.map((it, i) => (
            <motion.li
              key={it.n}
              layout
              initial={{ opacity: 0, y: -24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-soft"
            >
              <span className="grid size-9 place-items-center rounded-full bg-electric-100 text-[12px] font-bold text-electric">{it.n[0]}</span>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold">{it.n}</p>
                <p className="truncate text-[12px] text-ink-50">{it.m}</p>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${i === 0 ? 'bg-coral text-ink' : 'bg-mist text-ink-70'}`}>
                {i === 0 ? 'Nuevo' : it.tag}
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}

/* IA: texto que se escribe solo (simulación) */
const aiText = 'Resumen: la clienta quiere agendar una limpieza dental el jueves por la tarde. Sugerencia: ofrecer 16:30.'
function AiVisual() {
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? aiText.length : 0)
  useEffect(() => {
    if (reduce) return
    let i = 0
    const t = setInterval(() => {
      i = i > aiText.length + 40 ? 0 : i + 1
      setN(Math.min(i, aiText.length))
    }, 45)
    return () => clearInterval(t)
  }, [reduce])
  return (
    <div className="mt-8 rounded-2xl bg-white/10 p-4 ring-1 ring-white/20" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[12px] font-semibold">
          <Sparkles className="size-4" /> Asistente
        </span>
        <DemoBadge tone="dark" className="!text-[9px]" />
      </div>
      <p className="mt-3 min-h-[5.5rem] text-[14px] leading-relaxed">
        {aiText.slice(0, n)}
        <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-coral" />
      </p>
    </div>
  )
}

/* Automatización: un pulso recorre el flujo */
function AutoVisual() {
  const reduce = useReducedMotion()
  const nodes = [
    { i: MessageCircle, t: 'Mensaje nuevo' },
    { i: Zap, t: 'Regla' },
    { i: Send, t: 'Bienvenida' },
  ]
  return (
    <div className="relative mt-6 flex items-center justify-between" aria-hidden="true">
      <div className="absolute inset-x-6 top-5 h-[2px] bg-line" />
      <motion.div
        className="absolute top-[17px] left-6 size-2 rounded-full bg-coral shadow-[0_0_0_4px_rgb(255_128_117/0.25)]"
        animate={reduce ? undefined : { left: ['6%', '90%'] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
      />
      {nodes.map(({ i: I, t }) => (
        <div key={t} className="relative flex flex-col items-center gap-2">
          <span className="grid size-10 place-items-center rounded-xl bg-white text-electric shadow-soft ring-1 ring-line">
            <I className="size-4.5" />
          </span>
          <span className="text-[11px] font-medium text-ink-70">{t}</span>
        </div>
      ))}
    </div>
  )
}

/* Agenda: mini calendario */
function AgendaVisual() {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  return (
    <div className="mt-6 grid grid-cols-7 gap-1.5 text-center" aria-hidden="true">
      {days.map((d, i) => (
        <span key={i} className="text-[10px] font-semibold text-ink-50">{d}</span>
      ))}
      {Array.from({ length: 14 }, (_, i) => (
        <motion.span
          key={i}
          whileInView={i === 10 ? { scale: [1, 1.18, 1] } : undefined}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className={`grid aspect-square place-items-center rounded-lg text-[11px] font-medium ${
            i === 10 ? 'bg-electric text-white shadow-glow' : i === 3 || i === 8 ? 'bg-coral-100 text-[#a63b30]' : 'bg-mist text-ink-70'
          }`}
        >
          {i + 1}
        </motion.span>
      ))}
    </div>
  )
}

/* Pipeline: una tarjeta avanza de etapa */
function PipelineVisual() {
  const reduce = useReducedMotion()
  const [col, setCol] = useState(reduce ? 2 : 0)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setCol((c) => (c + 1) % 3), 1800)
    return () => clearInterval(t)
  }, [reduce])
  return (
    <div className="mt-6 grid grid-cols-3 gap-2" aria-hidden="true">
      {['Nuevo', 'Propuesta', 'Cerrado'].map((s, i) => (
        <div key={s} className="min-h-24 rounded-xl bg-mist p-2">
          <p className="text-[10px] font-semibold text-ink-50">{s}</p>
          <div className="mt-1.5 h-6 rounded-md bg-white/70" />
          {col === i && (
            <motion.div layoutId="bento-deal" transition={{ type: 'spring', stiffness: 260, damping: 24 }} className="mt-1.5 h-6 rounded-md bg-electric shadow-glow" />
          )}
        </div>
      ))}
    </div>
  )
}

/* Equipo: asignación de conversaciones */
function TeamVisual() {
  const people = [
    { i: 'AR', c: 'bg-electric text-white' },
    { i: 'JP', c: 'bg-coral text-ink' },
    { i: 'MS', c: 'bg-ink text-white' },
  ]
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <div className="flex -space-x-3">
        {people.map((p, k) => (
          <motion.span
            key={p.i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + k * 0.1, type: 'spring' }}
            className={`grid size-12 place-items-center rounded-full text-sm font-bold ring-4 ring-white ${p.c}`}
          >
            {p.i}
          </motion.span>
        ))}
      </div>
      <div className="hidden rounded-2xl bg-mist px-4 py-3 text-[13px] sm:block">
        <span className="font-semibold">Conversación asignada</span>
        <span className="text-ink-50"> · Ventas</span>
      </div>
    </div>
  )
}

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Beneficios"
          title={
            <>
              Menos caos.
              <br />
              Más <span className="text-electric">oportunidades.</span>
            </>
          }
          lead="Chatty conecta lo que hoy está disperso, para que tu equipo dedique su tiempo a lo que importa: atender bien y vender."
        />

        <div className="mt-16 grid auto-rows-auto gap-4 md:grid-cols-6">
          <Card className="md:col-span-4 md:row-span-2">
            <span className="grid size-11 place-items-center rounded-2xl bg-electric text-white">
              <Inbox className="size-5" aria-hidden="true" />
            </span>
            <div className="mt-5">
              <Title item={b.inbox} />
            </div>
            <InboxVisual />
          </Card>

          <Card dark className="md:col-span-2 md:row-span-2" delay={0.05}>
            <span className="grid size-11 place-items-center rounded-2xl bg-white text-electric">
              <Sparkles className="size-5" aria-hidden="true" />
            </span>
            <div className="mt-5">
              <Title item={b.ai} dark />
            </div>
            <AiVisual />
          </Card>

          <Card className="md:col-span-2" delay={0.05}>
            <Title item={b.auto} />
            <AutoVisual />
          </Card>
          <Card className="md:col-span-2" delay={0.1}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <Title item={b.agenda} />
              </div>
              <CalendarCheck className="size-6 shrink-0 text-coral" aria-hidden="true" />
            </div>
            <AgendaVisual />
          </Card>
          <Card className="md:col-span-2" delay={0.15}>
            <Title item={b.pipeline} />
            <PipelineVisual />
          </Card>

          <Card className="md:col-span-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <Title item={b.team} />
              </div>
              <TeamVisual />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
