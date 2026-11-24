import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { faqs } from '../content/site'

function Item({ f, i, open, onToggle }) {
  const id = `faq-${i}`
  return (
    <Reveal as="li" delay={i * 0.04} className={`rounded-3xl transition-colors ${open ? 'bg-white shadow-soft ring-1 ring-line' : 'bg-white/60 ring-1 ring-line/60'}`}>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          onClick={onToggle}
          className="flex w-full items-center gap-4 px-6 py-5 text-left font-display text-lg font-semibold md:px-8 md:py-6 md:text-xl"
        >
          {f.q}
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            className={`ml-auto grid size-9 shrink-0 place-items-center rounded-full transition-colors ${open ? 'bg-electric text-white' : 'bg-mist text-electric'}`}
          >
            <Plus className="size-4" aria-hidden="true" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-btn`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[17px] leading-relaxed text-ink-70 md:px-8 md:pr-20">{f.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="relative bg-mist py-24 md:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Lo que más nos preguntan."
            lead="¿Tienes otra duda? Escríbenos y te respondemos."
          />
        </div>
        <ul className="space-y-3">
          {faqs.map((f, i) => (
            <Item key={f.q} f={f} i={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </ul>
      </div>
    </section>
  )
}
