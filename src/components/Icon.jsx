import {
  MessageSquareX, Clock, FileSpreadsheet, EyeOff, Inbox, Sparkles, Users, CalendarDays,
  KanbanSquare, Zap, Stethoscope, Building2, GraduationCap, Scissors, ShoppingBag, Briefcase,
  CalendarCheck, Tag, BellRing, ShoppingCart, UserPlus,
} from 'lucide-react'

// Mapa explícito: mantiene el tree-shaking de Lucide (solo se empaquetan estos iconos)
const icons = {
  MessageSquareX, Clock, FileSpreadsheet, EyeOff, Inbox, Sparkles, Users, CalendarDays,
  KanbanSquare, Zap, Stethoscope, Building2, GraduationCap, Scissors, ShoppingBag, Briefcase,
  CalendarCheck, Tag, BellRing, ShoppingCart, UserPlus,
}

export default function Icon({ name, ...props }) {
  const Cmp = icons[name]
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null
}
