import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ArrowRight, Play, Sparkles, CalendarCheck, Check } from 'lucide-react'
import Button from '../components/Button'
import DashboardMock from '../components/DashboardMock'
import ScaleToFit from '../components/ScaleToFit'
import Floating from '../components/Floating'
import MorphBubble from '../components/MorphBubble'
import DemoBadge from '../components/DemoBadge'
import { useParallax } from '../hooks/useParallax'
import { hero, site } from '../content/site'

const ease = [0.16, 1, 0.3, 1]

function Words({ text, className = '', delay = 0, inline = false }) {
  return (
    <span className={`${inline ? 'inline' : 'block'} ${className}`}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: delay + i * 0.08, ease }}
          >
            {w}
            {' '}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Mockup: se endereza y crece al hacer scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.45], [reduce ? 0 : 22, 0])
  const scale = useTransform(scrollYProgress, [0, 0.45], [reduce ? 1 : 0.9, 1])
  // Parallax moderado de los elementos flotantes
  const yFast = useParallax(scrollYProgress, [0, 1], [0, -90])
  const ySlow = useParallax(scrollYProgress, [0, 1], [0, -70])
  const yText = useParallax(scrollYProgress, [0, 0.5], [0, 60])

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Fondo: textura de puntos + halo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_30%,black,transparent)]" />
        <div className="absolute top-[38%] left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-[50%] bg-mist blur-2xl" />
      </div>

      <motion.div style={{ y: yText }} className="container-x relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease }}
          className="inline-flex items-center gap-2 rounded-full bg-mist py-1.5 pr-4 pl-1.5 text-sm font-medium text-electric ring-1 ring-electric/15"
        >
          <span className="grid size-6 place-items-center rounded-full bg-electric text-white">
            <Sparkles className="size-3.5" aria-hidden="true" />
          </span>
          {hero.eyebrow}
        </motion.div>

        <h1 className="text-display mx-auto mt-8 max-w-6xl text-[clamp(2.75rem,7.4vw,6.6rem)]">
          <Words text={hero.titleA} className="text-ink" delay={0.15} />
          <Words text={hero.titleB.split(' ').slice(0, -1).join(' ')} className="text-electric" delay={0.4} inline />
          <span className="relative inline-block text-electric">
            <Words text={hero.titleB.split(' ').slice(-1)[0]} delay={0.48} inline />
            {/* El hilo coral: subrayado a mano alzada que se dibuja */}
            <svg
              aria-hidden="true"
              viewBox="0 0 600 40"
              preserveAspectRatio="none"
              className="absolute -bottom-[0.06em] left-[2%] h-[0.2em] w-[96%] overflow-visible"
            >
              <motion.path
                d="M4 28 C 120 6, 300 4, 596 20"
                fill="none"
                stroke="var(--color-coral)"
                strokeWidth="12"
                strokeLinecap="round"
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, delay: 1.05, ease: 'easeInOut' }}
              />
            </svg>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-70 md:text-xl"
        >
          {hero.lead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href={site.ctaHref} size="lg">
            {hero.primary}
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Button>
          <Button href="#demo" variant="secondary" size="lg">
            <span className="grid size-6 place-items-center rounded-full bg-electric/10">
              <Play className="size-3 fill-current" aria-hidden="true" />
            </span>
            {hero.secondary}
          </Button>
        </motion.div>
      </motion.div>

      {/* Mockup del producto con profundidad */}
      <div className="container-x relative mt-16 md:mt-24" style={{ perspective: 1600 }}>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.6, ease }}
        >
          <motion.div style={{ rotateX, scale, transformOrigin: 'center top' }} className="relative mx-auto max-w-[1080px]">
            <div className="rounded-[28px] bg-white/60 p-2 shadow-lift ring-1 ring-line backdrop-blur md:p-3">
              <ScaleToFit width={1080} height={640}>
                <DashboardMock />
              </ScaleToFit>
            </div>
            <p className="sr-only">
              Ilustración del panel de Chatty con conversaciones, clientes, citas y oportunidades. Los datos son de ejemplo.
            </p>
          </motion.div>
        </motion.div>

        {/* Elementos flotantes alrededor del mockup */}
        <motion.div style={{ y: yFast }} className="absolute -top-10 left-0 z-10 hidden md:block lg:-left-4">
          <Floating amplitude={8} duration={5}>
            <MorphBubble />
          </Floating>
        </motion.div>

        <motion.div style={{ y: ySlow }} className="absolute top-[30%] -right-2 z-10 hidden md:block lg:-right-6">
          <Floating amplitude={12} duration={7} delay={1}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.8, ease }}
              className="w-64 rounded-2xl bg-white p-4 text-left shadow-lift ring-1 ring-line"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-electric uppercase">
                  <Sparkles className="size-3.5" aria-hidden="true" /> Asistente IA
                </span>
                <DemoBadge className="!px-2 !py-0.5 !text-[9px]" />
              </div>
              <p className="mt-2 text-[13px] leading-snug text-ink">
                «¡Hola Laura! Tengo el jueves a las 10:00 o a las 16:30. ¿Cuál te acomoda?»
              </p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-electric px-3 py-1 text-[11px] font-semibold text-white">Enviar</span>
                <span className="rounded-full bg-mist px-3 py-1 text-[11px] font-semibold text-ink-70">Editar</span>
              </div>
            </motion.div>
          </Floating>
        </motion.div>

        <motion.div style={{ y: yFast }} className="absolute -bottom-6 left-[8%] z-10 hidden lg:block">
          <Floating amplitude={6} duration={6} delay={0.5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.9, type: 'spring', stiffness: 200, damping: 18 }}
              className="flex items-center gap-3 rounded-full bg-ink py-2 pr-5 pl-2 text-white shadow-lift"
              aria-hidden="true"
            >
              <span className="grid size-8 place-items-center rounded-full bg-coral text-ink">
                <CalendarCheck className="size-4" />
              </span>
              <span className="text-sm font-semibold">Recordatorio enviado</span>
              <Check className="size-4 text-coral" />
            </motion.div>
          </Floating>
        </motion.div>
      </div>
    </section>
  )
}
