import { motion } from 'motion/react'

/** Flotación suave en bucle (Motion la omite con movimiento reducido). */
export default function Floating({ children, className = '', amplitude = 10, duration = 6, delay = 0, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
