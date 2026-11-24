# Chatty Web: dirección artística y estructura

> Documento vivo. Define el *por qué* visual de la landing antes del *cómo*.
> Eslogan: **Cada conversación, una oportunidad.**

---

## 1. Concepto rector: «Del mensaje a la oportunidad»

Toda la página cuenta una sola historia: **una conversación que entra desordenada y sale convertida en una oportunidad de negocio**. Cada sección es un paso de esa transformación.

La idea visual que lo sostiene es la **burbuja que se convierte en tarjeta**: un globo de chat (redondeado, con su colita) que se transforma en una tarjeta del CRM (contacto, cita, negocio). Es el gesto central y se repite en el hero, en la demo y en los rubros.

Elementos de firma (originales, propios de Chatty):

| Firma | Qué es | Dónde aparece |
|---|---|---|
| **La colita** | La punta del globo de chat, usada como forma gráfica (viñetas, marcadores de sección, esquinas de tarjetas) | Etiquetas de sección, bento, CTA |
| **El hilo coral** | Un trazo coral a mano alzada, heredado del subrayado del mockup, que se *dibuja* al hacer scroll y conecta pasos | Subrayado del hero, «Cómo funciona», CTA |
| **Burbujas flotantes** | Mensajes y tarjetas que orbitan el contenido con parallax moderado | Hero, problemas, CTA |
| **Etiqueta «Demostración»** | Pastilla visible en toda simulación de IA o dato de ejemplo | Demo, funcionalidades, rubros |

## 2. Paleta y proporciones

Regla de la marca: **70 % blanco · 20 % azul eléctrico · 10 % coral**.

| Token | Hex | Uso |
|---|---|---|
| `white` | `#FFFFFF` | Fondo protagonista |
| `electric` | `#2563FF` | Acción, enlaces, énfasis, el *producto* |
| `coral` | `#FF8075` | Acento: hilo, notificaciones, detalles. **Nunca texto pequeño sobre blanco** (contraste 2,4:1) |
| `ink` | `#0F1E4D` | Texto principal y la única sección oscura (CTA final) |
| `mist` | `#F3F6FF` | Fondos secundarios, superficies del mockup |

Contraste verificado: `electric` sobre blanco ≈ 4,9:1 (AA), `ink` sobre blanco ≈ 16:1, `coral` sobre `ink` ≈ 6,3:1.
Se evitan degradados intensos y fondos oscuros: solo hay **una** sección en azul profundo (CTA) para que tenga peso dramático.

## 3. Tipografía

- **Poppins** 600/700/800 para titulares. Tamaños grandes y expresivos (`clamp(2.75rem, 8vw, 7rem)` en el hero) con *tracking* negativo.
- **Inter** (variable) para texto, UI y mockups.
- Ambas se **sirven desde el propio sitio** (`@fontsource`), sin depender de Google Fonts: más rápido y más privado.
- Logotipo: se usa **el archivo oficial** (`src/assets/chatty-logo.png`), solo limpiado de ruido de bordes y recortado. No se recrea con texto, no se recolorea y no se le añaden símbolos. El original queda en `src/assets/chatty-logo-original.png`.

## 4. Movimiento

Principio: **el movimiento explica, no decora**. Cada animación muestra cómo Chatty ordena una conversación.

- **Entrada del hero**: titular palabra por palabra, subrayado coral dibujándose, burbujas que llegan con muelle suave.
- **Scroll**: el mockup del hero se endereza en 3D; en «Problemas» el caos de notificaciones se ordena; en «Cómo funciona» el hilo coral se dibuja.
- **Demo guiada**: sección *sticky* donde cada paso del scroll avanza la conversación y el panel del CRM reacciona.
- **Parallax moderado**: desplazamientos de 20 a 80 px como máximo, nunca en el texto.
- **Microinteracciones**: botones magnéticos suaves, tarjetas bento que reaccionan al cursor, tabs con indicador animado.
- **Accesibilidad**: con `prefers-reduced-motion` se desactivan Lenis, parallax, scroll vinculado y bucles; el contenido aparece directamente en su estado final. Todo el contenido es legible sin JavaScript de animación.

Librerías: **Motion** (animación y scroll), **Lenis** (scroll suave, solo si el usuario no pide movimiento reducido), **Lucide** (iconos). **GSAP no se incluye** en v1: Motion cubre todo lo necesario y así ahorramos ~30 KB. Se puede añadir más adelante si hace falta una línea de tiempo compleja.

## 5. Narrativa y estructura

| # | Sección | Mensaje | Pieza visual clave |
|---|---|---|---|
| 1 | Navbar | Minimalista, se vuelve «cristal» al hacer scroll | Logo + 4 enlaces + «Solicitar demo» |
| 2 | Hero | *Cada conversación, una oportunidad.* | Tipografía gigante, burbujas que se vuelven tarjetas, mockup del panel en 3D |
| 3 | Demo del producto | Mira una conversación convertirse en cliente | Teléfono con chat animado + panel CRM sincronizado (sticky scroll) |
| 4 | Problemas | Hoy los mensajes se pierden | Nube caótica de notificaciones que se ordena |
| 5 | Beneficios | Lo que cambia con Chatty | Bento grid con microanimaciones |
| 6 | Funcionalidades | Explora el producto | Tabs interactivos con mini-UIs vivas |
| 7 | Cómo funciona | Tres pasos | Hilo coral que se dibuja al bajar |
| 8 | Rubros | Chatty en tu sector | Selector de rubros con conversación de ejemplo |
| 9 | Planes | Preparado para precios | 3 tarjetas con marcadores «Por definir» |
| 10 | FAQ | Resolver objeciones | Acordeón accesible |
| 11 | CTA | Empieza hoy | Única sección azul profundo, eslogan monumental |
| 12 | Footer | Cierre | Logo, navegación, eslogan |

## 6. Reglas de contenido

- **Nada inventado**: sin clientes, testimonios, cifras, resultados ni precios.
- Toda simulación de IA y todo número dentro de un mockup lleva la etiqueta **«Demostración»** o **«Datos de ejemplo»**.
- Los textos que requieren validación del equipo están en `src/content/` (precios, FAQ, enlaces de contacto), marcados con `TODO` o «Por definir».
- No se usa el logotipo de WhatsApp ni se imita su interfaz; WhatsApp se menciona como canal.

## 7. Estructura técnica

```
chatty-web/
├─ public/                 favicon
├─ src/
│  ├─ assets/              logotipo oficial
│  ├─ content/site.js      TODO el texto editable (copys, planes, FAQ, rubros, enlaces)
│  ├─ components/          piezas reutilizables (Logo, Button, Bubble, DemoBadge, Reveal…)
│  ├─ sections/            una sección = un archivo (Hero, ProductDemo, Problems…)
│  ├─ hooks/               useSmoothScroll (Lenis)
│  ├─ App.jsx              orden de las secciones
│  └─ index.css            tokens de marca (Tailwind v4 @theme)
├─ DIRECTION.md            este documento
└─ README.md               cómo ejecutar y desplegar
```

Stack: React 19 · Vite · Tailwind CSS v4 · Motion · Lenis · Lucide. Salida 100 % estática (`npm run build` → `dist/`), alojable gratis en Netlify, Vercel, Cloudflare Pages o GitHub Pages.

## 8. Próximas iteraciones sugeridas

1. Capturas reales del software para sustituir los mockups ilustrados.
2. Precios y contenidos de planes definitivos.
3. Enlace real de contacto (WhatsApp, formulario o agenda).
4. Página de privacidad y términos.
5. Analítica respetuosa con la privacidad (opcional, gratuita).
