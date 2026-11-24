# Chatty · Sitio web comercial

Landing page oficial de **Chatty**, CRM conversacional con inteligencia artificial.
Proyecto independiente: no se conecta al software, base de datos ni autenticación de Chatty.

> Dirección artística y estructura: ver [`DIRECTION.md`](./DIRECTION.md).

## Requisitos

- Node.js 20 o superior (probado con Node 22)

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (normalmente http://localhost:5173).

## Generar el sitio estático

```bash
npm run build     # genera la carpeta dist/
npm run preview   # sirve dist/ en local para revisarlo
```

La carpeta `dist/` es 100 % estática y se puede publicar gratis en Netlify, Vercel,
Cloudflare Pages o GitHub Pages (arrastrando la carpeta o conectando el repositorio).

## Dónde editar

| Qué | Dónde |
|---|---|
| Textos, planes, FAQ, rubros, enlaces | `src/content/site.js` |
| Colores y tipografías (tokens de marca) | `src/index.css` (bloque `@theme`) |
| Orden de las secciones | `src/App.jsx` |
| Cada sección | `src/sections/*.jsx` |
| Logotipo oficial | `src/assets/chatty-logo.png` (original en `chatty-logo-original.png`) |

Pendientes marcados con `TODO` en `src/content/site.js`: enlace real de contacto/demo,
precios y características de los planes, validación de respuestas de la FAQ y páginas legales.

## Stack

React 19 · Vite · Tailwind CSS v4 · Motion · Lenis · Lucide · Fuentes Poppins e Inter autoalojadas (@fontsource).
Sin APIs, bases de datos ni servicios de pago. Todas las demostraciones son locales y están etiquetadas.

## Accesibilidad y movimiento

- Respeta `prefers-reduced-motion`: desactiva scroll suave, parallax, animaciones en bucle y vinculadas al scroll.
- Navegación por teclado: enlace «Saltar al contenido», pestañas con flechas, acordeón con `aria-expanded`, foco visible.
- Los mockups decorativos están ocultos a lectores de pantalla y tienen una descripción alternativa.
