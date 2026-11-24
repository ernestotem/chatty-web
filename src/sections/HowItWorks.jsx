import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { Link2, SlidersHorizontal, Rocket } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { steps } from '../content/site'

const icons = [Link2, SlidersHorizontal, Rocket]

export default function HowItWorks() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.6'] })
  const draw = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0, 1])

  return (
    <section id="como-funciona" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Cómo funciona"
          title={
            <>
              De cero a conversando
              <br className="hidden md:block" /> en tres pasos.
            </>
          }
        />

        <div ref={ref} className="relative mt-20">
          {/* El hilo coral (escritorio) */}
          <svg aria-hidden="true" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute top-6 left-0 hidden h-28 w-full md:block">
            <path d="M60 60 C 260 -10, 380 130, 600 60 S 940 -10, 1140 60" fill="none" stroke="var(--color-line)" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
            <motion.path
              d="M60 60 C 260 -10, 380 130, 600 60 S 940 -10, 1140 60"
              fill="none"
              stroke="var(--color-coral)"
              strokeWidth="5"
              strokeLinecap="round"
              style={{ pathLength: draw }}
            />
          </svg>
          {/* Hilo vertical (móvil) */}
          <div aria-hidden="true" className="absolute top-0 bottom-0 left-[27px] w-[3px] rounded-full bg-line md:hidden">
            <motion.div style={{ scaleY: draw }} className="h-full w-full origin-top rounded-full bg-coral" />
          </div>

          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => {
              const I = icons[i]
              return (
                <Reveal as="li" key={s.n} delay={i * 0.12} className="relative pl-20 md:pl-0 md:text-center">
                  <div className="absolute top-0 left-0 md:relative md:mx-auto md:mb-8 md:w-fit">
                    <motion.span
                      whileHover={{ rotate: -8, scale: 1.06 }}
                      className="relative grid size-14 place-items-center rounded-[20px] bg-electric text-white shadow-glow md:size-[88px] md:rounded-[30px]"
                    >
                      <I className="size-6 md:size-9" aria-hidden="true" />
                      <span className="absolute -top-2 -right-2 grid size-7 place-items-center rounded-full bg-coral font-display text-xs font-bold text-ink ring-4 ring-white">
                        {i + 1}
                      </span>
                    </motion.span>
                  </div>
                  <p className="font-display text-sm font-semibold text-electric">Paso {s.n}</p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">{s.title}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-ink-70 md:mx-auto md:max-w-xs">{s.text}</p>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
