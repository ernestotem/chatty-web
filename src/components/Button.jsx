import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'

/**
 * Botón/enlace con efecto magnético sutil (se desactiva con movimiento reducido).
 * variant: primary | secondary | ghost | light
 */
export default function Button({ href = '#', variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 })
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 })

  const onMove = (e) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.18)
    y.set((e.clientY - r.top - r.height / 2) * 0.28)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  const variants = {
    primary: 'bg-electric text-white shadow-glow hover:bg-electric-600',
    secondary: 'bg-white text-electric ring-1 ring-inset ring-electric/40 hover:ring-electric hover:bg-mist',
    ghost: 'text-ink hover:bg-mist',
    light: 'bg-white text-ink hover:bg-mist',
  }
  const sizes = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6 text-[15px]',
    lg: 'h-14 px-8 text-base',
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </motion.a>
  )
}
