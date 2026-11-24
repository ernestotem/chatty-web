import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Scroll suave con Lenis, solo si el usuario no pidió movimiento reducido.
 * Los enlaces internos (#ancla) se desplazan con Lenis y mueven el foco
 * al destino para no romper la navegación por teclado.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let raf = requestAnimationFrame(function loop(t) {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    })

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length < 2) return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -72 })
      history.replaceState(null, '', id)
      el.setAttribute('tabindex', '-1')
      el.focus({ preventScroll: true })
    }
    document.addEventListener('click', onClick)

    const onChange = () => mq.matches && lenis.destroy()
    mq.addEventListener('change', onChange)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onClick)
      mq.removeEventListener('change', onChange)
      lenis.destroy()
    }
  }, [])
}
