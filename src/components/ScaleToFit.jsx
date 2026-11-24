import { useLayoutEffect, useRef, useState } from 'react'

/**
 * Dibuja un mockup a un ancho de diseño fijo y lo escala para que quepa en su
 * contenedor. Así la composición del mockup es idéntica en móvil y escritorio.
 */
export default function ScaleToFit({ width, height, className = '', children }) {
  const ref = useRef(null)
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setScale(Math.min(1, entry.contentRect.width / width)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [width])
  return (
    <div ref={ref} className={`relative w-full ${className}`} style={{ height: height * scale }}>
      <div className="absolute top-0 left-0 origin-top-left" style={{ width, height, transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  )
}
