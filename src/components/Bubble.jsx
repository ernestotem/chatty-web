import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'

/**
 * Burbuja de chat propia de Chatty (no imita la interfaz de WhatsApp).
 * from: client | agent | ai
 */
export function Bubble({ from = 'client', children, className = '', animate = true, delay = 0 }) {
  const styles = {
    client: 'self-start bg-white text-ink ring-1 ring-line rounded-[18px] rounded-bl-md',
    agent: 'self-end bg-electric text-white rounded-[18px] rounded-br-md',
    ai: 'self-end bg-mist text-ink ring-1 ring-electric/25 rounded-[18px] rounded-br-md',
  }
  const props = animate
    ? {
        initial: { opacity: 0, y: 12, scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { type: 'spring', stiffness: 380, damping: 28, delay },
      }
    : {}
  return (
    <motion.div layout="position" {...props} className={`max-w-[85%] px-3.5 py-2.5 text-[13px] leading-snug shadow-soft ${styles[from]} ${className}`}>
      {from === 'ai' && (
        <span className="mb-1 flex items-center gap-1 text-[10px] font-semibold tracking-wide text-electric uppercase">
          <Sparkles className="size-3" aria-hidden="true" /> Sugerencia IA · demo
        </span>
      )}
      {children}
    </motion.div>
  )
}

export function Typing({ className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`flex w-fit items-center gap-1 rounded-[18px] rounded-bl-md bg-white px-4 py-3 ring-1 ring-line ${className}`}
      aria-label="Escribiendo"
    >
      <span className="typing-dot size-1.5 rounded-full bg-ink-50" />
      <span className="typing-dot size-1.5 rounded-full bg-ink-50" />
      <span className="typing-dot size-1.5 rounded-full bg-ink-50" />
    </motion.div>
  )
}
