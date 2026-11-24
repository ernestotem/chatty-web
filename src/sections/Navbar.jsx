import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from '../components/Logo'
import Button from '../components/Button'
import { nav, site } from '../content/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6"
    >
      <nav
        aria-label="Principal"
        className={`relative mx-auto flex h-16 max-w-6xl items-center gap-6 rounded-full pr-2 pl-5 transition-all duration-500 ${
          scrolled || open ? 'bg-white/80 shadow-soft ring-1 ring-line backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <a href="#top" aria-label="Chatty, ir al inicio" className="shrink-0">
          <Logo className="h-7 w-auto md:h-8" />
        </a>
        <ul className="mx-auto hidden items-center gap-1 lg:flex">
          {nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-4 py-2 text-[15px] font-medium text-ink-70 transition-colors hover:bg-mist hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button href={site.ctaHref} size="sm" className="hidden min-[380px]:inline-flex">
            {site.ctaLabel}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="grid size-11 place-items-center rounded-full text-ink hover:bg-mist lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {scrolled && (
          <motion.span
            aria-hidden="true"
            style={{ scaleX: progress }}
            className="absolute inset-x-8 bottom-0 h-[2px] origin-left rounded-full bg-coral"
          />
        )}
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl bg-white p-3 shadow-lift ring-1 ring-line lg:hidden"
          >
            <ul>
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3.5 font-display text-xl font-semibold text-ink hover:bg-mist"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href={site.ctaHref} onClick={() => setOpen(false)} className="mt-2 w-full">
              {site.ctaLabel}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
