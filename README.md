# ExpatEase — proyecto Astro

## Cómo correrlo
npm install
npm run dev        # http://localhost:4321
npm run build       # genera /dist (sitio estático)

## Estructura
- src/layouts/Layout.astro   → SEO, hreflang, Header/Footer comunes
- src/components/            → piezas reutilizables (Header, Hero, TriageWizard, tarjetas, formulario…)
- src/data/                  → contenido de servicios y blog (services.ts, serviceContent.ts, posts.ts)
- src/pages/
  - index.astro                    → Home (NL)
  - diensten/index.astro           → Overview de servicios
  - diensten/[slug].astro          → Genera /diensten/huurrecht/, /kooprecht/, /overheid/ automáticamente desde data/services.ts
  - over-ons/, spreekuur/, contact/ → páginas reales
  - blog/index.astro y blog/[slug].astro → listado + artículos individuales

## Pendiente para producción
1. **Dominio + hosting**: sin esto nada de lo de abajo funciona. Recomendado: comprar `expatease.nl` y desplegar en Vercel o Netlify (gratis para este tamaño de sitio, deploy automático desde GitHub).
2. **Google Analytics real**: en `src/components/Analytics.astro`, reemplazar `G-XXXXXXXXXX` por el Measurement ID real de tu propiedad GA4. Ya está conectado al banner de cookies — solo carga si el visitante acepta "Analytisch".
3. **Google Search Console + Google Business Profile**: verificar el dominio en Search Console (usa el sitemap en `/sitemap-index.xml`) y crear/reclamar el perfil de empresa en Google — esto es lo que hace aparecer el negocio en Google Maps y en el panel lateral de búsquedas "advocaat Den Haag".
4. **Traducción EN/ES/FR**: duplicar cada carpeta de pages/ bajo /en/, /es/, /fr/. El `Layout.astro` ya soporta `lang`, pero deliberadamente NO emite hreflang hacia esos idiomas todavía (para no señalar a Google páginas que aún no existen) — hay un comentario `TODO` marcando dónde reactivarlo.
5. **WhatsApp real**: reemplazar "31600000000" en TriageWizard.astro, Footer.astro y las páginas de servicio por el número real (formato 31612345678, sin +).
6. **Formulario de contacto**: ContactBlock.astro solo simula el envío en el navegador. Conéctalo a un backend (Formspree, función serverless, o el conector de formularios de tu hosting).
7. **Blog real**: los posts viven en src/data/posts.ts como ejemplo. Para que los abogados puedan publicar ellos mismos, conviene migrar a Astro Content Collections + Decap CMS.
8. **Fotos reales + Open Graph image**: falta una imagen real (equipo, oficina) para `og:image` — sin eso, los links compartidos en WhatsApp/LinkedIn se ven sin miniatura.
9. **Backlinks / citas locales**: registrar el despacho en directorios de expats (InterNations, ACCESS NL), la Kamer van Koophandel, y la Nederlandse Orde van Advocaten — esto pesa tanto como el SEO on-page para "abogado para expats en Den Haag".
