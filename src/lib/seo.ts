import { SITE } from "@/data/site";

export function seo(opts: { title: string; description: string; path: string; type?: string }) {
  const url = SITE.url + opts.path;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "es_AR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const jsonLd = (data: unknown) => ({ type: "application/ld+json", children: JSON.stringify(data) });
