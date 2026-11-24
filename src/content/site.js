/**
 * Contenido editable de la landing de Chatty.
 * Todo el texto vive aquí para poder revisarlo sin tocar componentes.
 *
 * REGLA: no se inventan clientes, testimonios, cifras ni precios.
 * Lo marcado con TODO debe validarlo el equipo de Chatty.
 */

export const site = {
  name: 'Chatty',
  slogan: 'Cada conversación, una oportunidad.',
  // TODO: reemplazar por el enlace real (WhatsApp, formulario o calendario).
  ctaHref: '#contacto',
  ctaLabel: 'Solicitar demo',
  // TODO: enlace final del botón de la sección de contacto (p. ej. https://wa.me/<número> o un calendario).
  demoHref: '',
  // TODO: correo o enlace de contacto real. Se deja vacío para no inventar datos.
  contactEmail: '',
}

export const nav = [
  { label: 'Producto', href: '#demo' },
  { label: 'Funciones', href: '#funciones' },
  { label: 'Soluciones', href: '#rubros' },
  { label: 'Planes', href: '#planes' },
  { label: 'Preguntas', href: '#faq' },
]

export const hero = {
  eyebrow: 'CRM conversacional con inteligencia artificial',
  titleA: 'Cada conversación,',
  titleB: 'una oportunidad.',
  lead:
    'Chatty reúne tus conversaciones de WhatsApp, tus clientes, tu agenda y tus ventas en un solo lugar, con una IA que te ayuda a responder y a dar seguimiento.',
  primary: 'Solicitar demo',
  secondary: 'Ver cómo funciona',
}

/* ─── Demo guiada (sección 3) ─────────────────────────────────── */
export const demoSteps = [
  {
    key: 'message',
    title: 'Llega un mensaje',
    text: 'Un posible cliente escribe por WhatsApp. Chatty lo recibe en una bandeja ordenada, sin perderlo entre chats.',
  },
  {
    key: 'ai',
    title: 'La IA propone una respuesta',
    text: 'El asistente sugiere una respuesta con el contexto de la conversación. Tú decides si enviarla tal cual o ajustarla.',
  },
  {
    key: 'contact',
    title: 'Se crea la ficha del cliente',
    text: 'Nombre, interés y etiquetas quedan registrados automáticamente para que nadie tenga que copiar datos a mano.',
  },
  {
    key: 'agenda',
    title: 'Se agenda la cita',
    text: 'La conversación termina en una cita confirmada dentro de tu agenda, con recordatorio incluido.',
  },
  {
    key: 'deal',
    title: 'La venta avanza',
    text: 'La oportunidad aparece en tu pipeline de ventas. Ahora sabes en qué etapa está cada cliente.',
  },
]

/* ─── Problemas (sección 4) ───────────────────────────────────── */
export const problems = [
  {
    icon: 'MessageSquareX',
    title: 'Mensajes que se pierden',
    text: 'Entre decenas de chats, un cliente interesado queda sin respuesta y se va con otro.',
  },
  {
    icon: 'Clock',
    title: 'Respuestas que llegan tarde',
    text: 'Fuera de horario o en horas pico, las consultas se acumulan y el interés se enfría.',
  },
  {
    icon: 'FileSpreadsheet',
    title: 'Datos dispersos',
    text: 'Clientes en el teléfono, citas en una libreta y ventas en una hoja de cálculo. Nada conversa entre sí.',
  },
  {
    icon: 'EyeOff',
    title: 'Ventas sin seguimiento',
    text: 'Sin una vista clara de cada oportunidad, es difícil saber a quién contactar y cuándo.',
  },
]

export const chaosNotifications = [
  { name: 'Cliente nuevo', text: '¿Tienen disponibilidad mañana?', unread: 3 },
  { name: 'Consulta', text: 'Hola, ¿cuánto cuesta…?', unread: 1 },
  { name: 'Seguimiento', text: '¿Me pasan la info otra vez?', unread: 2 },
  { name: 'Reserva', text: 'Quiero cambiar mi cita', unread: 4 },
  { name: 'Pedido', text: '¿Hacen envíos a domicilio?', unread: 1 },
  { name: 'Interesado', text: 'Sigo esperando respuesta…', unread: 5 },
]

/* ─── Beneficios (sección 5, bento) ───────────────────────────── */
export const benefits = [
  {
    id: 'inbox',
    title: 'Todo en una sola bandeja',
    text: 'Conversaciones, clientes, citas y ventas conectados. Deja de saltar entre aplicaciones.',
  },
  {
    id: 'ai',
    title: 'IA que trabaja contigo',
    text: 'Sugerencias de respuesta, resúmenes y clasificación de conversaciones para responder mejor y más rápido.',
  },
  {
    id: 'auto',
    title: 'Automatiza lo repetitivo',
    text: 'Bienvenidas, recordatorios y seguimientos que se envían solos.',
  },
  {
    id: 'agenda',
    title: 'Agenda sin fricción',
    text: 'Convierte un «¿tienes hora?» en una cita confirmada.',
  },
  {
    id: 'pipeline',
    title: 'Ventas a la vista',
    text: 'Cada oportunidad en su etapa, para saber qué sigue.',
  },
  {
    id: 'team',
    title: 'Pensado para equipos',
    text: 'Asigna conversaciones y comparte el contexto de cada cliente con tu equipo.',
  },
]

/* ─── Funcionalidades (sección 6, tabs) ───────────────────────── */
export const features = [
  {
    id: 'inbox',
    icon: 'Inbox',
    label: 'Bandeja unificada',
    title: 'Todas tus conversaciones de WhatsApp, ordenadas.',
    text: 'Filtra por estado, etiqueta o responsable. Cada chat muestra quién es el cliente y en qué punto está.',
    bullets: ['Estados: nuevo, en curso, resuelto', 'Etiquetas y filtros', 'Asignación a tu equipo'],
  },
  {
    id: 'ai',
    icon: 'Sparkles',
    label: 'Asistente IA',
    title: 'Un asistente que entiende el contexto.',
    text: 'Propone respuestas, resume conversaciones largas y detecta la intención del cliente para que actúes rápido.',
    bullets: ['Respuestas sugeridas', 'Resumen de conversación', 'Detección de intención'],
  },
  {
    id: 'contacts',
    icon: 'Users',
    label: 'Clientes',
    title: 'Fichas de cliente que se completan solas.',
    text: 'El historial de cada persona, sus datos y sus notas, siempre a un clic desde la conversación.',
    bullets: ['Historial completo', 'Notas y etiquetas', 'Búsqueda instantánea'],
  },
  {
    id: 'agenda',
    icon: 'CalendarDays',
    label: 'Agenda',
    title: 'Citas que nacen en el chat.',
    text: 'Agenda, reprograma y recuerda citas sin salir de la conversación.',
    bullets: ['Vista diaria y semanal', 'Recordatorios automáticos', 'Reprogramación sencilla'],
  },
  {
    id: 'pipeline',
    icon: 'KanbanSquare',
    label: 'Pipeline de ventas',
    title: 'Tu embudo de ventas, siempre al día.',
    text: 'Arrastra oportunidades entre etapas y detecta qué clientes necesitan seguimiento.',
    bullets: ['Etapas personalizables', 'Vista tipo tablero', 'Seguimiento por oportunidad'],
  },
  {
    id: 'automation',
    icon: 'Zap',
    label: 'Automatizaciones',
    title: 'Flujos que trabajan mientras tú atiendes.',
    text: 'Define qué pasa cuando llega un mensaje, se agenda una cita o una venta cambia de etapa.',
    bullets: ['Disparadores y acciones', 'Mensajes programados', 'Sin programar código'],
  },
]

/* ─── Cómo funciona (sección 7) ───────────────────────────────── */
export const steps = [
  {
    n: '01',
    title: 'Conecta tu WhatsApp',
    text: 'Vincula el número de tu negocio y empieza a recibir las conversaciones en Chatty.',
  },
  {
    n: '02',
    title: 'Configura tu espacio',
    text: 'Define etapas de venta, etiquetas, horarios de agenda y las respuestas que la IA tomará como base.',
  },
  {
    n: '03',
    title: 'Convierte conversaciones',
    text: 'Responde con ayuda de la IA, agenda citas y sigue cada oportunidad hasta cerrar la venta.',
  },
]

/* ─── Rubros (sección 8) ──────────────────────────────────────────
 * Conversaciones de ejemplo, claramente marcadas como demostración. */
export const industries = [
  {
    id: 'salud',
    icon: 'Stethoscope',
    label: 'Salud y clínicas',
    pitch: 'Agenda pacientes, confirma turnos y envía recordatorios para reducir ausencias.',
    chat: [
      { from: 'client', text: 'Hola, ¿tienen turno para odontología esta semana?' },
      { from: 'ai', text: 'Hola, ¡claro! Tengo disponible el jueves a las 10:00 o a las 16:30. ¿Cuál te acomoda?' },
      { from: 'client', text: 'Jueves 16:30 por favor.' },
    ],
    card: { icon: 'CalendarCheck', label: 'Cita agendada', value: 'Jueves · 16:30' },
  },
  {
    id: 'inmobiliaria',
    icon: 'Building2',
    label: 'Inmobiliarias',
    pitch: 'Califica interesados, coordina visitas y sigue cada propiedad en tu pipeline.',
    chat: [
      { from: 'client', text: 'Vi el departamento de 2 dormitorios, ¿sigue disponible?' },
      { from: 'ai', text: 'Sí, sigue disponible. ¿Te gustaría coordinar una visita? Tengo horarios el sábado por la mañana.' },
      { from: 'client', text: 'Sí, el sábado me sirve.' },
    ],
    card: { icon: 'KanbanSquare', label: 'Etapa', value: 'Visita coordinada' },
  },
  {
    id: 'educacion',
    icon: 'GraduationCap',
    label: 'Educación',
    pitch: 'Responde consultas de inscripción y da seguimiento a cada interesado.',
    chat: [
      { from: 'client', text: '¿Cuándo empiezan las clases del curso de inglés?' },
      { from: 'ai', text: 'El próximo grupo inicia el lunes. ¿Quieres que te envíe el detalle de horarios e inscripción?' },
      { from: 'client', text: 'Sí, por favor.' },
    ],
    card: { icon: 'Tag', label: 'Etiqueta', value: 'Interesado · Inglés' },
  },
  {
    id: 'belleza',
    icon: 'Scissors',
    label: 'Belleza y estética',
    pitch: 'Llena tu agenda desde el chat y recuerda a tus clientes su próxima visita.',
    chat: [
      { from: 'client', text: '¿Tienen hora para corte y color el viernes?' },
      { from: 'ai', text: '¡Hola! El viernes tengo a las 11:00 y a las 15:00. ¿Te reservo alguna?' },
      { from: 'client', text: 'A las 11, gracias.' },
    ],
    card: { icon: 'BellRing', label: 'Recordatorio', value: 'Programado para el jueves' },
  },
  {
    id: 'retail',
    icon: 'ShoppingBag',
    label: 'Tiendas y comercio',
    pitch: 'Atiende consultas de productos, toma pedidos y no pierdas ninguna venta.',
    chat: [
      { from: 'client', text: '¿Tienen estas zapatillas en talla 40?' },
      { from: 'ai', text: 'Sí, tenemos talla 40 en blanco y negro. ¿Quieres que te reserve un par?' },
      { from: 'client', text: 'Las blancas, por favor.' },
    ],
    card: { icon: 'ShoppingCart', label: 'Oportunidad', value: 'Pedido en preparación' },
  },
  {
    id: 'servicios',
    icon: 'Briefcase',
    label: 'Servicios profesionales',
    pitch: 'Organiza consultas, agenda reuniones y lleva el historial de cada cliente.',
    chat: [
      { from: 'client', text: 'Necesito asesoría contable para mi negocio.' },
      { from: 'ai', text: 'Con gusto. ¿Agendamos una reunión inicial de 30 minutos para entender tu caso?' },
      { from: 'client', text: 'Perfecto, ¿el martes?' },
    ],
    card: { icon: 'UserPlus', label: 'Nuevo cliente', value: 'Ficha creada' },
  },
]

/* ─── Planes (sección 9) ──────────────────────────────────────────
 * TODO: completar con nombres, precios y características reales. */
export const plans = [
  {
    id: 'inicial',
    name: 'Plan Inicial',
    audience: 'Para negocios que empiezan a ordenar sus conversaciones.',
    price: null,
    features: ['Característica por definir', 'Característica por definir', 'Característica por definir'],
  },
  {
    id: 'crecimiento',
    name: 'Plan Crecimiento',
    audience: 'Para equipos que quieren automatizar y vender más.',
    price: null,
    highlighted: true,
    features: [
      'Característica por definir',
      'Característica por definir',
      'Característica por definir',
      'Característica por definir',
    ],
  },
  {
    id: 'empresa',
    name: 'Plan Empresa',
    audience: 'Para operaciones con varios equipos y necesidades a medida.',
    price: null,
    features: ['Característica por definir', 'Característica por definir', 'Característica por definir'],
  },
]

/* ─── Preguntas frecuentes (sección 10) ───────────────────────────
 * TODO: validar respuestas con el equipo de Chatty. */
export const faqs = [
  {
    q: '¿Qué es Chatty?',
    a: 'Chatty es un CRM conversacional con inteligencia artificial. Reúne tus conversaciones de WhatsApp, la gestión de clientes, la agenda y el seguimiento de ventas en una sola plataforma.',
  },
  {
    q: '¿Necesito conocimientos técnicos para usarlo?',
    a: 'No. Chatty está pensado para que cualquier persona de tu equipo pueda usarlo desde el primer día, con una interfaz clara y sin necesidad de programar.',
  },
  {
    q: '¿La inteligencia artificial responde sola a mis clientes?',
    a: 'El asistente de IA te ayuda a redactar respuestas, resumir conversaciones y organizar la información. Tú mantienes el control de cómo y cuándo se usa.',
  },
  {
    q: '¿Puedo usar Chatty con mi número de WhatsApp actual?',
    a: 'Te acompañamos en el proceso de conexión de tu número. Escríbenos y revisamos juntos la mejor opción para tu negocio.',
  },
  {
    q: '¿Puedo trabajar con mi equipo?',
    a: 'Sí. Puedes asignar conversaciones y compartir el contexto de cada cliente para que todos trabajen coordinados.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Estamos preparando nuestros planes. Solicita una demo y te contamos qué opción se adapta mejor a tu negocio.',
  },
]

export const footerLinks = [
  {
    title: 'Producto',
    links: [
      { label: 'Demo', href: '#demo' },
      { label: 'Funciones', href: '#funciones' },
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Planes', href: '#planes' },
    ],
  },
  {
    title: 'Soluciones',
    links: [
      { label: 'Salud y clínicas', href: '#rubros' },
      { label: 'Inmobiliarias', href: '#rubros' },
      { label: 'Educación', href: '#rubros' },
      { label: 'Comercio', href: '#rubros' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Preguntas frecuentes', href: '#faq' },
      { label: 'Contacto', href: '#contacto' },
      // TODO: crear páginas legales
      { label: 'Privacidad', href: '#' },
      { label: 'Términos', href: '#' },
    ],
  },
]
