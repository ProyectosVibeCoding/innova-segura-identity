import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CommunityBand } from "@/components/site/Sections";
import { ARTICLES, SITE } from "@/data/site";
import { jsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/recursos/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Artículo no encontrado · Innova Segura" }, { name: "robots", content: "noindex" }] };
    return {
      ...seo({ title: `${a.title} · Innova Segura`, description: a.excerpt, path: `/recursos/${a.slug}`, type: "article" }),
      scripts: [jsonLd({ "@context": "https://schema.org", "@type": "Article", headline: a.title, description: a.excerpt, author: { "@type": "Person", name: SITE.founder } })],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  return (
    <>
      <article className="container-site max-w-3xl py-16 md:py-24">
        <Link to="/recursos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy"><ArrowLeft className="h-4 w-4" />Volver a recursos</Link>
        <header className="mt-8 border-b pb-10">
          <span className="eyebrow">{a.readTime} de lectura</span>
          <h1 className="mt-4 text-5xl text-navy">{a.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{a.excerpt}</p>
        </header>
        <div className="mt-10 space-y-6">{a.body.map((p, i) => <p key={i}>{p}</p>)}</div>
      </article>
      <CommunityBand />
    </>
  );
}
