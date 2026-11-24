import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { UserPlus, CalendarCheck, MessageCircle } from 'lucide-react'

/**
 * Firma visual de Chatty: una burbuja de chat que se transforma en tarjeta del CRM.
 * Mensaje → ficha de cliente → cita agendada.
 */
const states = [
  { kind: 'bubble', icon: MessageCircle, title: 'Nuevo mensaje', text: '¿Tienen disponibilidad el jueves?' },
  { kind: 'card', icon: UserPlus, title: 'Ficha creada', text: 'Laura M. · Interesada' },
  { kind: 'card', icon: CalendarCheck, title: 'Cita agendada', text: 'Jueves · 16:30' },
]

export default function MorphBubble({ className = '' }) {
  const reduce = useReducedMotion()
  const [i, setI] = useState(reduce ? 2 : 0)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setI((v) => (v + 1) % states.length), 2600)
    return () => clearInterval(t)
  }, [reduce])
  const s = states[i]
  const Icon = s.icon
  const isBubble = s.kind === 'bubble'

  return (
    <motion.div
      layout
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      style={{ borderRadius: isBubble ? '22px 22px 22px 6px' : 18 }}
      className={`flex items-center gap-3 p-3 pr-5 shadow-lift ring-1 ring-line ${isBubble ? 'bg-white' : 'bg-white'} ${className}`}
      aria-hidden="true"
    >
      <motion.span
        layout
        className={`grid size-10 shrink-0 place-items-center rounded-xl ${isBubble ? 'bg-coral-100 text-[#c2493d]' : 'bg-electric text-white'}`}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span key={i} initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0 }}>
            <Icon className="size-5" />
          </motion.span>
        </AnimatePresence>
      </motion.span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={i}
          layout="position"
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          transition={{ duration: 0.35 }}
          className="whitespace-nowrap"
        >
          <p className="text-[11px] font-semibold tracking-wide text-ink-50 uppercase">{s.title}</p>
          <p className="text-sm font-semibold text-ink">{s.text}</p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
