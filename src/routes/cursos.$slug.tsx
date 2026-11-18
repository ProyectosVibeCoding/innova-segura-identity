import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Check, Clock } from "lucide-react";
import { btn } from "@/components/site/btn";
import { Reveal } from "@/components/site/Reveal";
import { COURSES, SITE, whatsappLink } from "@/data/site";
import { jsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/cursos/$slug")({
  loader: ({ params }) => {
    const course = COURSES.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.course;
    if (!c) return { meta: [{ title: "Curso no encontrado · Innova Segura" }, { name: "robots", content: "noindex" }] };
    return {
      ...seo({ title: `${c.title} · Innova Segura`, description: c.summary, path: `/cursos/${c.slug}` }),
      scripts: [jsonLd({ "@context": "https://schema.org", "@type": "Course", name: c.title, description: c.description,
        provider: { "@type": "EducationalOrganization", name: SITE.name, sameAs: SITE.url } })],
    };
  },
  component: CoursePage,
});

function CoursePage() {
  const { course: c } = Route.useLoaderData();
  return (
    <article>
      <header className="bg-surface">
        <div className="container-site py-16 md:py-24">
          <Link to="/cursos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy"><ArrowLeft className="h-4 w-4" />Volver a cursos</Link>
          <p className="mt-8"><span className="eyebrow">{c.type}</span></p>
          <h1 className="mt-4 max-w-3xl text-5xl text-navy md:text-6xl">{c.title}</h1>
          <div className="mt-6 flex flex-wrap gap-6 text-muted-foreground">
            <span className="flex items-center gap-2"><CalendarDays className="h-5 w-5" strokeWidth={1.5} />{c.date}</span>
            <span className="flex items-center gap-2"><Clock className="h-5 w-5" strokeWidth={1.5} />{c.duration}</span>
          </div>
        </div>
      </header>
      <div className="container-site section-y grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <h2 className="text-3xl text-navy">Sobre el curso</h2>
          <p className="mt-4 text-muted-foreground">{c.description}</p>
          <h2 className="mt-12 text-3xl text-navy">Qué vas a aprender</h2>
          <ul className="mt-6 divide-y border-y">
            {c.topics.map((t) => <li key={t} className="flex gap-3 py-4"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" />{t}</li>)}
          </ul>
        </Reveal>
        <Reveal>
          <aside className="card-soft sticky top-28 p-8">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Inversión</p>
            <p className="mt-2 font-serif text-4xl text-navy">{c.price}</p>
            {/* Acá se conectará el pago con Mercado Pago */}
            <a href={whatsappLink(`Hola, quiero inscribirme en "${c.title}"`)} target="_blank" rel="noopener noreferrer" className={btn({ className: "mt-6 w-full" })}>Inscribirme</a>
            <p className="mt-4 text-sm text-muted-foreground">Te respondemos por WhatsApp con los pasos para completar la inscripción.</p>
          </aside>
        </Reveal>
      </div>
    </article>
  );
}
