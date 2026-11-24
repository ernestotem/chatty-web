import { useReducedMotion, useTransform } from 'motion/react'

/** Parallax moderado: se anula si el usuario prefiere movimiento reducido. */
export function useParallax(progress, input, output) {
  const reduce = useReducedMotion()
  const v = useTransform(progress, input, output)
  return reduce ? 0 : v
}
