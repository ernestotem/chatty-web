import { useRef } from 'react'
import { motion, useScroll } from 'motion/react'
import { ArrowRight, Sparkles, CalendarCheck, MessageCircle } from 'lucide-react'
import Button from '../components/Button'
import Floating from '../components/Floating'
import { useParallax } from '../hooks/useParallax'
import { site } from '../content/site'

export default function FinalCta() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useParallax(scrollYProgress, [0, 1], [80, -80])
  const y2 = useParallax(scrollYProgress, [0, 1], [-40, 60])

  return (
    <section id="contacto" ref={ref} className="relative px-3 py-6 md:px-6 md:py-10">
      <div className="relative isolate overflow-hidden rounded-[40px] bg-ink px-6 py-24 text-center text-white md:rounded-[56px] md:py-40">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(rgb(255_255_255/0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/40 blur-[120px]" />

        {/* Burbujas flotantes */}
        <motion.div style={{ y: y1 }} className="absolute top-16 left-[6%] hidden md:block" aria-hidden="true">
          <Floating amplitude={10} duration={6}>
            <div className="flex items-center gap-2 rounded-[20px] rounded-bl-md bg-white px-4 py-3 text-sm font-medium text-ink shadow-lift">
              <MessageCircle className="size-4 text-electric" /> ¿Tienen disponibilidad hoy?
            </div>
          </Floating>
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute right-[6%] bottom-20 hidden md:block" aria-hidden="true">
          <Floating amplitude={12} duration={7} delay={0.8}>
            <div className="flex items-center gap-2 rounded-2xl bg-coral px-4 py-3 text-sm font-semibold text-ink shadow-lift">
              <CalendarCheck className="size-4" /> Cita confirmada
            </div>
          </Floating>
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute top-24 right-[12%] hidden lg:block" aria-hidden="true">
          <Floating amplitude={8} duration={5} delay={0.3}>
            <span className="grid size-14 place-items-center rounded-2xl bg-electric text-white shadow-glow">
              <Sparkles className="size-6" />
            </span>
          </Floating>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-[0.18em] text-coral uppercase"
        >
          Empieza hoy
        </motion.p>
        <h2 className="text-display mx-auto mt-6 max-w-5xl text-[clamp(2.6rem,8vw,6.5rem)]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Cada conversación,
          </motion.span>
          <motion.span
            className="relative inline-block text-coral"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            una oportunidad.
          </motion.span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-white/75 md:text-xl">
          Agenda una demostración y descubre cómo Chatty puede ordenar tus conversaciones y ayudarte a vender más.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* TODO: reemplazar href por el enlace real de contacto/agenda */}
          <Button href={site.demoHref || '#contacto'} size="lg" className="!shadow-[0_12px_40px_-8px_rgb(37_99_255/0.9)]">
            {site.ctaLabel}
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Button>
          <Button href="#demo" variant="ghost" size="lg" className="!text-white ring-1 ring-white/25 hover:!bg-white/10">
            Ver la demo otra vez
          </Button>
        </div>
      </div>
    </section>
  )
}
