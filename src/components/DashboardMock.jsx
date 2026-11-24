import {
  LayoutGrid, MessageSquare, Users, CalendarDays, KanbanSquare, Zap, Sparkles, Search, Bell, Settings,
} from 'lucide-react'
import Logo from './Logo'
import DemoBadge from './DemoBadge'

const nav = [
  { icon: LayoutGrid, label: 'Dashboard', active: true },
  { icon: MessageSquare, label: 'Conversaciones', badge: 5 },
  { icon: Users, label: 'Contactos' },
  { icon: CalendarDays, label: 'Agenda' },
  { icon: KanbanSquare, label: 'Pipeline de ventas' },
  { icon: Zap, label: 'Automatizaciones' },
  { icon: Sparkles, label: 'Asistente IA' },
]

// Datos ficticios, solo para ilustrar la interfaz.
const stats = [
  { label: 'Conversaciones', value: '248', tone: 'electric' },
  { label: 'Clientes nuevos', value: '56', tone: 'coral' },
  { label: 'Citas de hoy', value: '12', tone: 'electric' },
  { label: 'Oportunidades', value: '31', tone: 'ink' },
]
const chats = [
  { n: 'Laura M.', m: 'Perfecto, jueves a las 16:30', t: '10:24', s: 'Agendado', c: 'bg-electric-100 text-electric' },
  { n: 'Diego R.', m: '¿Hacen envíos a domicilio?', t: '10:12', s: 'Nuevo', c: 'bg-coral-100 text-[#b4453a]' },
  { n: 'Ana P.', m: 'Gracias por la información', t: '09:58', s: 'Resuelto', c: 'bg-emerald-50 text-emerald-700' },
  { n: 'Carlos V.', m: 'Quiero cotizar el plan anual', t: '09:41', s: 'En curso', c: 'bg-mist text-ink-70' },
]
const bars = [38, 52, 44, 70, 58, 82, 64, 90, 76, 96, 72, 88]

export default function DashboardMock() {
  return (
    <div className="flex h-[640px] w-[1080px] overflow-hidden rounded-[22px] bg-mist text-ink ring-1 ring-line">
      {/* Sidebar */}
      <aside className="flex w-[220px] shrink-0 flex-col border-r border-line bg-white px-4 py-6">
        <Logo className="ml-2 h-8 w-auto self-start" />
        <p className="mt-8 ml-2 text-[10px] font-bold tracking-[0.12em] text-ink-50">ESPACIO DE TRABAJO</p>
        <ul className="mt-3 space-y-1">
          {nav.map(({ icon: I, label, active, badge }) => (
            <li
              key={label}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] ${active ? 'bg-electric font-semibold text-white' : 'text-ink'}`}
            >
              <I className={`size-4 ${active ? '' : 'text-ink-50'}`} />
              {label}
              {badge && <span className="ml-auto grid size-5 place-items-center rounded-full bg-coral text-[10px] font-bold text-ink">{badge}</span>}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] text-ink-70">
          <Settings className="size-4 text-ink-50" /> Configuración
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col p-7">
        <header className="flex items-center gap-4">
          <div>
            <p className="font-display text-[22px] font-bold tracking-tight">Buenos días</p>
            <p className="text-[12px] text-ink-50">Esto es lo que pasa hoy en tu negocio</p>
          </div>
          <DemoBadge className="ml-3">Datos de ejemplo</DemoBadge>
          <div className="ml-auto flex h-10 w-56 items-center gap-2 rounded-full bg-white px-4 text-[12px] text-ink-50 ring-1 ring-line">
            <Search className="size-4" /> Buscar clientes…
          </div>
          <div className="relative grid size-10 place-items-center rounded-full bg-white ring-1 ring-line">
            <Bell className="size-4" />
            <span className="absolute top-2 right-2.5 size-2 rounded-full bg-coral" />
          </div>
        </header>

        <div className="mt-6 grid grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-4 shadow-soft">
              <p className="text-[11px] font-medium text-ink-50">{s.label}</p>
              <p className="mt-1 font-display text-[28px] font-bold tracking-tight">{s.value}</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-mist">
                <div
                  className={`h-full rounded-full ${s.tone === 'coral' ? 'bg-coral' : s.tone === 'ink' ? 'bg-ink' : 'bg-electric'}`}
                  style={{ width: `${40 + s.value.length * 15}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid min-h-0 flex-1 grid-cols-5 gap-4">
          <div className="col-span-3 flex flex-col rounded-2xl bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-semibold">Conversaciones recientes</p>
              <span className="text-[11px] font-medium text-electric">Ver todas</span>
            </div>
            <ul className="mt-3 divide-y divide-line">
              {chats.map((c) => (
                <li key={c.n} className="flex items-center gap-3 py-2.5">
                  <span className="grid size-9 place-items-center rounded-full bg-mist text-[12px] font-bold text-electric">
                    {c.n.split(' ').map((w) => w[0]).join('')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold">{c.n}</p>
                    <p className="truncate text-[12px] text-ink-50">{c.m}</p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${c.c}`}>{c.s}</span>
                  <span className="w-10 text-right text-[11px] text-ink-50">{c.t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 flex flex-col rounded-2xl bg-white p-5 shadow-soft">
            <p className="text-[13px] font-semibold">Actividad semanal</p>
            <p className="text-[11px] text-ink-50">Conversaciones por día</p>
            <div className="mt-auto flex h-36 items-end gap-2">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-md ${i === bars.length - 3 ? 'bg-coral' : 'bg-electric'}`}
                  style={{ height: `${h}%`, opacity: i === bars.length - 3 ? 1 : 0.25 + (i / bars.length) * 0.75 }}
                />
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-mist p-3 text-[12px]">
              <Sparkles className="size-4 shrink-0 text-electric" />
              <span>
                <b className="font-semibold">Asistente IA:</b> 3 clientes esperan seguimiento hoy.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
