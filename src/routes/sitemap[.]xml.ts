import { createFileRoute } from "@tanstack/react-router";
import { ARTICLES, COURSES, SITE } from "@/data/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = ["/", "/sobre-mi", "/cursos", "/empresas", "/recursos", "/contacto",
          ...COURSES.map((c) => `/cursos/${c.slug}`), ...ARTICLES.map((a) => `/recursos/${a.slug}`)];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>${SITE.url}${p}</loc></url>`).join("")}</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
