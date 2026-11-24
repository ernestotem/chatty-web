import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { CheckCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { problems, chaosNotifications } from '../content/site'

// Posiciones "caos" (dispersas) → "orden" (pila alineada)
const chaos = [
  { x: -120, y: -150, r: -14 },
  { x: 110, y: -110, r: 10 },
  { x: -150, y: 10, r: 8 },
  { x: 130, y: 40, r: -12 },
  { x: -60, y: 150, r: 16 },
  { x: 90, y: 170, r: -6 },
]

function Notification({ n, i, progress, reduce }) {
  const c = chaos[i]
  const orderY = (i - (chaosNotifications.length - 1) / 2) * 64
  const x = useTransform(progress, [0, 1], [reduce ? 0 : c.x, 0])
  const y = useTransform(progress, [0, 1], [reduce ? orderY : c.y, orderY])
  const rotate = useTransform(progress, [0, 1], [reduce ? 0 : c.r, 0])
  const badge = useTransform(progress, [0.75, 1], [1, 0])
  const check = useTransform(progress, [0.8, 1], [0, 1])
  return (
    <motion.div
      style={{ x, y, rotate }}
      className="absolute top-1/2 left-1/2 -mt-7 -ml-[140px] flex h-14 w-[280px] items-center gap-3 rounded-2xl bg-white px-3 shadow-lift ring-1 ring-line"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-mist text-[11px] font-bold text-electric">
        {n.name.slice(0, 2).toUpperCase()}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold">{n.name}</p>
        <p className="truncate text-[12px] text-ink-50">{n.text}</p>
      </div>
      <span className="relative grid size-6 place-items-center">
        <motion.span style={{ opacity: reduce ? 0 : badge, scale: reduce ? 0 : badge }} className="absolute grid size-6 place-items-center rounded-full bg-coral text-[11px] font-bold text-ink">
          {n.unread}
        </motion.span>
        <motion.span style={{ opacity: reduce ? 1 : check, scale: reduce ? 1 : check }} className="absolute text-electric">
          <CheckCheck className="size-5" aria-hidden="true" />
        </motion.span>
      </span>
    </motion.div>
  )
}

export default function Problems() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'center 0.45'] })
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true })
  const labelOpacity = useTransform(progress, [0.85, 1], [0, 1])

  return (
    <section ref={ref} id="problemas" className="relative overflow-hidden bg-mist py-24 md:py-36">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="El problema"
            title={
              <>
                Tus clientes escriben.
                <br />
                <span className="text-ink-50">¿Quién les responde?</span>
              </>
            }
            lead="Cuando las conversaciones crecen, la atención se desordena. Y cada mensaje sin respuesta es una oportunidad que se enfría."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06} className="rounded-2xl bg-white p-5 ring-1 ring-line">
                <span className="grid size-10 place-items-center rounded-xl bg-coral-100 text-[#b4453a]">
                  <Icon name={p.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-70">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Caos → orden */}
        <div className="relative h-[520px]" aria-hidden="true">
          <div className="absolute inset-6 rounded-[40px] border-2 border-dashed border-electric/15" />
          {chaosNotifications.map((n, i) => (
            <Notification key={n.name} n={n} i={i} progress={progress} reduce={reduce} />
          ))}
          <motion.div
            style={{ opacity: reduce ? 1 : labelOpacity }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-electric px-5 py-2 text-sm font-semibold whitespace-nowrap text-white shadow-glow"
          >
            Con Chatty, todo en orden
          </motion.div>
        </div>
      </div>
    </section>
  )
}
