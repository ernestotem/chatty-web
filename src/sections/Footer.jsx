import Logo from '../components/Logo'
import { footerLinks, site } from '../content/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-white pt-20">
      <div className="container-x grid gap-12 md:grid-cols-[1.4fr_2fr]">
        <div>
          <Logo className="h-10 w-auto" />
          <p className="mt-5 max-w-xs font-display text-xl font-semibold tracking-tight">{site.slogan}</p>
          <p className="mt-3 max-w-xs text-[15px] text-ink-70">CRM conversacional con inteligencia artificial para negocios que atienden por WhatsApp.</p>
        </div>
        <nav aria-label="Pie de página" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerLinks.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-ink">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[15px] text-ink-70 transition-colors hover:text-electric">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="container-x mt-16 flex flex-col gap-3 border-t border-line py-8 text-sm text-ink-50 sm:flex-row sm:justify-between">
        <p>© {year} Chatty. Todos los derechos reservados.</p>
        <p>Las demostraciones de este sitio usan datos de ejemplo.</p>
      </div>

      {/* Logotipo monumental de cierre */}
      <div aria-hidden="true" className="container-x pointer-events-none -mb-[4%] select-none">
        <Logo className="h-auto w-full" />
      </div>
    </footer>
  )
}
