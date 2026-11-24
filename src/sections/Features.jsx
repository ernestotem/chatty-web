import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Check, Sparkles, Filter, Phone, Mail, Tag, MessageCircle, Clock, Send, UserCheck, GripVertical } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import DemoBadge from '../components/DemoBadge'
import Icon from '../components/Icon'
import { features } from '../content/site'

/* ─── Mini interfaces (datos de ejemplo) ─────────────────────── */
const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
}
const item = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 28 } },
}

function InboxUI() {
  const rows = [
    { n: 'Sofía L.', m: '¿Atienden los sábados?', s: 'Nuevo', c: 'bg-coral text-ink', who: 'Sin asignar' },
    { n: 'Martín G.', m: 'Quiero reservar para dos', s: 'En curso', c: 'bg-electric-100 text-electric', who: 'Ana' },
    { n: 'Valeria T.', m: '¿Me envían el catálogo?', s: 'En curso', c: 'bg-electric-100 text-electric', who: 'Juan' },
    { n: 'Tomás B.', m: 'Gracias, quedó perfecto', s: 'Resuelto', c: 'bg-emerald-50 text-emerald-700', who: 'Ana' },
  ]
  return (
    <motion.div variants={stagger} initial="initial" animate="animate">
      <motion.div variants={item} className="mb-4 flex flex-wrap gap-2">
        {['Todos', 'Nuevos', 'En curso', 'Resueltos'].map((f, i) => (
          <span key={f} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${i === 0 ? 'bg-ink text-white' : 'bg-white text-ink-70 ring-1 ring-line'}`}>{f}</span>
        ))}
        <span className="ml-auto flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink-70 ring-1 ring-line">
          <Filter className="size-3.5" /> Etiquetas
        </span>
      </motion.div>
      {rows.map((r) => (
        <motion.div key={r.n} variants={item} className="mb-2 flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-soft">
          <span className="grid size-10 place-items-center rounded-full bg-mist text-xs font-bold text-electric">{r.n[0]}</span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">{r.n}</p>
            <p className="truncate text-[13px] text-ink-50">{r.m}</p>
          </div>
          <span className="hidden text-xs text-ink-50 sm:block">{r.who}</span>
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${r.c}`}>{r.s}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}

function AiUI() {
  return (
    <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-3">
      <motion.div variants={item} className="rounded-2xl bg-white p-4 shadow-soft">
        <p className="text-xs font-semibold tracking-wide text-ink-50 uppercase">Resumen de la conversación</p>
        <p className="mt-2 text-sm leading-relaxed">
          Martín quiere reservar una mesa para dos el viernes por la noche y pregunta si hay opciones vegetarianas.
        </p>
      </motion.div>
      <motion.div variants={item} className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-electric px-3 py-1.5 text-xs font-semibold text-white">
          <Sparkles className="size-3.5" /> Intención: reserva
        </span>
        <span className="rounded-full bg-coral-100 px-3 py-1.5 text-xs font-semibold text-[#a63b30]">Prioridad alta</span>
      </motion.div>
      <motion.p variants={item} className="pt-2 text-xs font-semibold tracking-wide text-ink-50 uppercase">Respuestas sugeridas</motion.p>
      {[
        '¡Hola Martín! Tenemos mesa el viernes a las 20:00 o 21:30. ¿Cuál prefieres?',
        'Sí, contamos con opciones vegetarianas. ¿Te reservo para el viernes?',
      ].map((t) => (
        <motion.button
          key={t}
          variants={item}
          type="button"
          tabIndex={-1}
          whileHover={{ x: 4 }}
          className="flex w-full items-start gap-3 rounded-2xl bg-mist p-3.5 text-left text-sm ring-1 ring-electric/20"
        >
          <Send className="mt-0.5 size-4 shrink-0 text-electric" /> {t}
        </motion.button>
      ))}
    </motion.div>
  )
}

function ContactsUI() {
  return (
    <motion.div variants={stagger} initial="initial" animate="animate" className="grid gap-3 sm:grid-cols-5">
      <motion.div variants={item} className="rounded-2xl bg-white p-5 shadow-soft sm:col-span-2">
        <span className="grid size-14 place-items-center rounded-2xl bg-coral text-lg font-bold text-ink">VT</span>
        <p className="mt-3 font-display text-lg font-semibold">Valeria T.</p>
        <p className="text-xs text-ink-50">Cliente desde marzo</p>
        <div className="mt-4 space-y-2 text-[13px] text-ink-70">
          <p className="flex items-center gap-2"><Phone className="size-3.5 text-electric" /> +00 000 000 000</p>
          <p className="flex items-center gap-2"><Mail className="size-3.5 text-electric" /> valeria@ejemplo.com</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {['Frecuente', 'Catálogo'].map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-full bg-mist px-2 py-0.5 text-[11px] font-medium text-electric">
              <Tag className="size-3" /> {t}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.div variants={item} className="rounded-2xl bg-white p-5 shadow-soft sm:col-span-3">
        <p className="text-xs font-semibold tracking-wide text-ink-50 uppercase">Historial</p>
        <ol className="relative mt-4 space-y-4 border-l-2 border-line pl-5">
          {[
            { i: MessageCircle, t: 'Pidió el catálogo por WhatsApp', d: 'Hoy' },
            { i: Check, t: 'Compra registrada', d: 'Hace 2 semanas' },
            { i: Clock, t: 'Cita de asesoría', d: 'Hace 1 mes' },
          ].map(({ i: I, t, d }) => (
            <li key={t} className="relative">
              <span className="absolute top-0.5 -left-[31px] grid size-5 place-items-center rounded-full bg-electric text-white">
                <I className="size-3" />
              </span>
              <p className="text-sm font-medium">{t}</p>
              <p className="text-xs text-ink-50">{d}</p>
            </li>
          ))}
        </ol>
      </motion.div>
    </motion.div>
  )
}

function AgendaUI() {
  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie']
  const events = [
    { d: 0, s: 1, h: 2, t: 'Asesoría', c: 'bg-electric text-white' },
    { d: 1, s: 3, h: 1, t: 'Visita', c: 'bg-coral text-ink' },
    { d: 2, s: 0, h: 1, t: 'Llamada', c: 'bg-electric-100 text-electric' },
    { d: 3, s: 2, h: 2, t: 'Limpieza dental', c: 'bg-electric text-white' },
    { d: 4, s: 1, h: 1, t: 'Demo', c: 'bg-ink text-white' },
  ]
  return (
    <motion.div variants={stagger} initial="initial" animate="animate" className="rounded-2xl bg-white p-4 shadow-soft">
      <div className="grid grid-cols-5 gap-2">
        {days.map((d) => (
          <p key={d} className="text-center text-xs font-semibold text-ink-50">{d}</p>
        ))}
        {days.map((d, di) => (
          <div key={d} className="relative h-56 rounded-xl bg-mist">
            {events.filter((e) => e.d === di).map((e) => (
              <motion.div
                key={e.t}
                variants={item}
                className={`absolute inset-x-1 rounded-lg p-1.5 text-[11px] leading-tight font-semibold ${e.c}`}
                style={{ top: `${e.s * 25 + 2}%`, height: `${e.h * 25 - 4}%` }}
              >
                {e.t}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function PipelineUI() {
  const cols = [
    { t: 'Nuevo', items: ['Sofía L.', 'Diego R.'] },
    { t: 'Propuesta', items: ['Martín G.'] },
    { t: 'Negociación', items: ['Valeria T.', 'Carlos V.'] },
    { t: 'Cerrado', items: ['Tomás B.'] },
  ]
  return (
    <motion.div variants={stagger} initial="initial" animate="animate" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {cols.map((c, ci) => (
        <motion.div key={c.t} variants={item} className="rounded-2xl bg-white/70 p-2.5 ring-1 ring-line">
          <p className="flex items-center justify-between px-1 text-xs font-semibold text-ink-70">
            {c.t} <span className="text-ink-50">{c.items.length}</span>
          </p>
          <div className="mt-2 space-y-2">
            {c.items.map((n) => (
              <motion.div
                key={n}
                variants={item}
                whileHover={{ y: -3, rotate: -1 }}
                className="flex items-center gap-1.5 rounded-xl bg-white p-2.5 text-[13px] font-medium shadow-soft"
              >
                <GripVertical className="size-3.5 text-ink-50" />
                {n}
                <span className={`ml-auto size-2 rounded-full ${ci === 3 ? 'bg-emerald-500' : ci === 0 ? 'bg-coral' : 'bg-electric'}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

function AutomationUI() {
  const flow = [
    { i: MessageCircle, t: 'Cuando llega un mensaje nuevo', k: 'Disparador', c: 'bg-coral text-ink' },
    { i: Clock, t: 'Si es fuera del horario de atención', k: 'Condición', c: 'bg-white text-ink ring-1 ring-line' },
    { i: Send, t: 'Enviar mensaje de bienvenida', k: 'Acción', c: 'bg-electric text-white' },
    { i: UserCheck, t: 'Asignar a ventas por la mañana', k: 'Acción', c: 'bg-electric text-white' },
  ]
  return (
    <motion.ol variants={stagger} initial="initial" animate="animate" className="mx-auto max-w-md">
      {flow.map(({ i: I, t, k, c }, idx) => (
        <motion.li key={t} variants={item} className="relative">
          <div className={`flex items-center gap-3 rounded-2xl p-3.5 shadow-soft ${c}`}>
            <span className="grid size-9 place-items-center rounded-xl bg-white/20">
              <I className="size-4" />
            </span>
            <div>
              <p className="text-[10px] font-semibold tracking-wide uppercase opacity-75">{k}</p>
              <p className="text-sm font-semibold">{t}</p>
            </div>
          </div>
          {idx < flow.length - 1 && (
            <div className="mx-auto h-6 w-[2px] bg-gradient-to-b from-line to-electric/40" />
          )}
        </motion.li>
      ))}
    </motion.ol>
  )
}

const panels = { inbox: InboxUI, ai: AiUI, contacts: ContactsUI, agenda: AgendaUI, pipeline: PipelineUI, automation: AutomationUI }

export default function Features() {
  const [active, setActive] = useState(features[0].id)
  const tabsRef = useRef([])
  const current = features.find((f) => f.id === active)
  const Panel = panels[active]

  const onKeyDown = (e, idx) => {
    const n = features.length
    let next = null
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (idx + 1) % n
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (idx - 1 + n) % n
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = n - 1
    if (next !== null) {
      e.preventDefault()
      setActive(features[next].id)
      tabsRef.current[next]?.focus()
    }
  }

  return (
    <section id="funciones" className="relative bg-mist py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Funcionalidades"
          title="Todo lo que necesitas, conectado."
          lead="Explora cada módulo. Son simulaciones locales con datos de ejemplo para que veas cómo se trabaja en Chatty."
        />

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">
          <div
            role="tablist"
            aria-label="Funcionalidades de Chatty"
            aria-orientation="vertical"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
          >
            {features.map((f, idx) => {
              const on = f.id === active
              return (
                <button
                  key={f.id}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  role="tab"
                  type="button"
                  id={`tab-${f.id}`}
                  aria-selected={on}
                  aria-controls={`panel-${f.id}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(f.id)}
                  onKeyDown={(e) => onKeyDown(e, idx)}
                  className={`relative flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3 text-left font-semibold transition-colors lg:py-4 ${
                    on ? 'text-ink' : 'text-ink-50 hover:text-ink'
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="feature-tab"
                      className="absolute inset-0 -z-0 rounded-2xl bg-white shadow-soft ring-1 ring-line"
                      transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                    />
                  )}
                  <span className={`relative grid size-9 place-items-center rounded-xl transition-colors ${on ? 'bg-electric text-white' : 'bg-white text-ink-50 ring-1 ring-line'}`}>
                    <Icon name={f.icon} className="size-4.5" />
                  </span>
                  <span className="relative whitespace-nowrap">{f.label}</span>
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
            className="relative overflow-hidden rounded-[32px] bg-white p-6 shadow-soft ring-1 ring-line md:p-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 xl:grid-cols-[1fr_1.25fr] xl:items-center"
              >
                <div>
                  <h3 className="text-3xl leading-tight font-bold tracking-tight md:text-4xl">{current.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink-70">{current.text}</p>
                  <ul className="mt-6 space-y-2.5">
                    {current.bullets.map((bl) => (
                      <li key={bl} className="flex items-center gap-3 font-medium">
                        <span className="grid size-6 place-items-center rounded-full bg-coral-100 text-[#a63b30]">
                          <Check className="size-3.5" aria-hidden="true" />
                        </span>
                        {bl}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-3xl bg-mist p-4 md:p-5" aria-hidden="true">
                  <DemoBadge className="absolute -top-3 right-4 z-10 shadow-soft">Datos de ejemplo</DemoBadge>
                  <Panel />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
