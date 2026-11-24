import { MotionConfig } from 'motion/react'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ProductDemo from './sections/ProductDemo'
import Problems from './sections/Problems'
import Benefits from './sections/Benefits'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Industries from './sections/Industries'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'
import FinalCta from './sections/FinalCta'
import Footer from './sections/Footer'

export default function App() {
  useSmoothScroll()
  return (
    // reducedMotion="user": Motion respeta prefers-reduced-motion en todas las animaciones
    <MotionConfig reducedMotion="user">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <ProductDemo />
        <Problems />
        <Benefits />
        <Features />
        <HowItWorks />
        <Industries />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </MotionConfig>
  )
}
