# Curriculum — Abel Aníbal Cáceres

Landing page de currículum, sitio estático de una sola página.

## Estructura

- `index.html` — página completa (HTML + CSS + JS, sin dependencias ni build).
- `favicon.svg` — ícono del sitio.
- `yo.jpeg` — foto de perfil.

## Edición

Todo el contenido (textos en español/inglés, experiencia, skills, testimonios, etc.) está en el objeto `CONTENT` / `TESTIMONIALS` dentro del `<script>` de `index.html`. Editalo directamente ahí.

## Blog

- `blog/ia-equipos-ctos.html` — primer artículo. Cada artículo nuevo es un HTML autocontenido (mismo estilo, cursor y toggle ES/EN que el resto del sitio).
- Para publicar un artículo nuevo: copiá `blog/ia-equipos-ctos.html`, cambiá el contenido (objeto `CONTENT` dentro de su `<script>`) y agregá una entrada al array `blog` de `CONTENT.es`/`CONTENT.en` en `index.html` para que aparezca en la sección Blog de la home.
- **Imagen de preview (Open Graph / LinkedIn):** cada artículo necesita su propia imagen de 1200×630 para que se vea bien al compartir el link. `blog/og-template-article.html` es la plantilla (mismo estilo del sitio) — copiala, cambiá el título/kicker, y renderizala a PNG con Playwright:
  ```bash
  npx playwright install chromium   # una sola vez
  npx serve .                        # sirve el sitio en localhost
  node -e "
    const { chromium } = require('playwright');
    (async () => {
      const b = await chromium.launch();
      const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
      await p.goto('http://localhost:3000/blog/TU-PLANTILLA.html', { waitUntil: 'networkidle' });
      await p.screenshot({ path: 'blog/og-TU-ARTICULO.png' });
      await b.close();
    })();
  "
  ```
  Luego agregá las meta tags `og:title`, `og:description`, `og:image` (apuntando a `https://www.abelanibalcaceres.site/blog/og-TU-ARTICULO.png`) y sus equivalentes `twitter:*` en el `<head>` del artículo, siguiendo el mismo patrón que `ia-equipos-ctos.html`.

## Puesta en marcha

No requiere instalación ni build. Basta con abrir `index.html` en el navegador, o servir la carpeta con cualquier servidor estático (GitHub Pages, Netlify, Vercel, etc. apuntando a `index.html` en la raíz).
