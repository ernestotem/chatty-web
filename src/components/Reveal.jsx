import { motion } from 'motion/react'

/** Aparición al entrar en pantalla. Con movimiento reducido, Motion omite el desplazamiento. */
export default function Reveal({ as = 'div', delay = 0, y = 28, className = '', children, ...rest }) {
  const Cmp = motion[as]
  return (
    <Cmp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Cmp>
  )
}
