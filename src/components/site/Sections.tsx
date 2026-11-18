import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, CalendarDays, Clock, Compass, Download, Eye, Gem, MessageSquareText, PlayCircle, Quote, Radio, Scale, Target, UserRound } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ARTICLES, COURSES, DIFFERENTIALS, FAQS, SERVICES, SITE, STATS, TESTIMONIALS, type Course } from "@/data/site";
import { btn } from "./btn";
import { SimpleForm } from "./Forms";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS = { Radio, MessageSquareText, Scale, Award };

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="container-site grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <span className="eyebrow">Capacitación en Higiene y Seguridad</span>
          <h1 className="mt-6 text-5xl text-navy md:text-6xl lg:text-7xl">
            Aprendé a prevenir con quien te acompaña de verdad<span className="text-primary">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Cursos y webinars online en vivo, con seguimiento personalizado y la normativa argentina explicada simple. Para estudiantes, profesionales y empresas de todo el país.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/cursos" className={btn()}>Ver cursos 2027 <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/empresas" className={btn({ variant: "outline" })}>Capacitación para empresas</Link>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-navy shadow-lift">
            <div className="absolute inset-0 grid place-items-center text-center text-navy-foreground">
              <div>
                <PlayCircle className="mx-auto h-16 w-16" strokeWidth={1} />
                <p className="mt-3 text-sm text-navy-foreground/70">[Video de presentación · 60–90 s]</p>
              </div>
            </div>
            <span className="absolute right-6 top-6 h-3 w-3 rounded-full bg-primary" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section aria-label="Trayectoria en números" className="border-y bg-background">
      <div className="container-site grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="text-center md:border-l md:first:border-0">
            <p className="font-serif text-5xl text-navy">{s.value}</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function About({ full }: { full?: boolean }) {
  const cards = [
    { icon: Target, title: "Misión", text: "[Misión de Innova Segura]" },
    { icon: Eye, title: "Visión", text: "[Visión de Innova Segura]" },
    { icon: Gem, title: "Valores", text: "[Valores de Innova Segura]" },
  ];
  return (
    <section className="section-y">
      <div className="container-site grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative grid aspect-[4/5] place-items-center rounded-3xl bg-surface">
            <div className="text-center text-muted-foreground"><UserRound className="mx-auto h-16 w-16" strokeWidth={1} /><p className="mt-2 text-sm">[Foto profesional de {SITE.founder}]</p></div>
            <span className="absolute -bottom-3 left-10 h-6 w-6 rounded-full bg-primary" aria-hidden="true" />
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow="Sobre mí" title={`Hola, soy ${SITE.founder}`} />
          <Reveal className="mt-6 space-y-5 text-muted-foreground">
            <p>[Tu historia profesional y cómo nació Innova Segura.]</p>
            <p>[Formación: título, institución y matrícula profesional N.º XXXX.]</p>
            {full && <p>[Texto ampliado: experiencia en empresas, rubros, docencia.]</p>}
          </Reveal>
          <Reveal>
            <blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-2xl text-navy">“[Frase destacada]”</blockquote>
          </Reveal>
          {!full && <Link to="/sobre-mi" className={btn({ variant: "outline", className: "mt-8" })}>Conocé más</Link>}
        </div>
      </div>
      <div className="container-site mt-20 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 100} className="card-soft p-8">
            <c.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
            <h3 className="mt-5 text-2xl text-navy">{c.title}</h3>
            <p className="mt-3 text-muted-foreground">{c.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Differentials() {
  return (
    <section className="section-y bg-navy">
      <div className="container-site">
        <SectionHeading light eyebrow="Nuestro diferencial" title="No es un curso grabado más" text="Cada propuesta está pensada para que aprendas acompañado, con criterio profesional y aplicable a tu trabajo." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-navy-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((d, i) => {
            const Icon = ICONS[d.icon];
            return (
              <Reveal key={d.title} delay={i * 80} className="bg-navy p-8">
                <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 text-2xl text-navy-foreground">{d.title}</h3>
                <p className="mt-3 text-navy-foreground/70">{d.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CourseCard({ c }: { c: Course }) {
  const free = c.type === "Webinar gratuito";
  return (
    <article className="card-soft flex h-full flex-col p-7">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className={`rounded-full px-3 py-1 font-medium ${free ? "bg-primary/10 text-primary" : "bg-accent text-navy"}`}>{c.type}</span>
        <span className="flex items-center gap-1.5 text-muted-foreground"><CalendarDays className="h-4 w-4" strokeWidth={1.5} />{c.date}</span>
      </div>
      <h3 className="mt-6 text-2xl text-navy">{c.title}</h3>
      <p className="mt-3 flex-1 text-muted-foreground">{c.summary}</p>
      <div className="mt-6 flex items-center justify-between border-t pt-5">
        <span className="font-serif text-2xl text-navy">{c.price}</span>
        <Link to="/cursos/$slug" params={{ slug: c.slug }} className={btn({ size: "sm" })}>Inscribirme</Link>
      </div>
    </article>
  );
}

export function Courses({ limit }: { limit?: number }) {
  const list = limit ? COURSES.slice(0, limit) : COURSES;
  return (
    <section className="section-y bg-surface">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Calendario 2027" title="Cursos y webinars de febrero a diciembre" />
          {limit && <Link to="/cursos" className={btn({ variant: "outline" })}>Ver calendario completo</Link>}
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => <Reveal key={c.slug} delay={(i % 3) * 80}><CourseCard c={c} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function Companies({ withLink = true }: { withLink?: boolean }) {
  return (
    <section className="section-y">
      <div className="container-site grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Empresas" title="Capacitación in company, a la medida de tu equipo" text="Diseñamos cada capacitación según el rubro, los riesgos y los tiempos de tu organización." />
          {withLink && <Reveal><Link to="/empresas" hash="propuesta" className={btn({ variant: "navy", className: "mt-8" })}>Pedir propuesta para mi empresa</Link></Reveal>}
        </div>
        <Reveal>
          <ul className="divide-y border-y">
            {SERVICES.map((s) => (
              <li key={s} className="flex gap-4 py-5"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /><span className="text-foreground">{s}</span></li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function GuideBlock() {
  return (
    <Reveal className="mt-14 grid gap-8 rounded-3xl bg-navy p-8 md:grid-cols-2 md:p-12">
      <div>
        <Download className="h-8 w-8 text-primary" strokeWidth={1.5} />
        <h3 className="mt-5 text-3xl text-navy-foreground">Descargá la guía gratuita</h3>
        <p className="mt-3 text-navy-foreground/75">[Nombre de la guía]. Dejanos tu mail y te la enviamos.</p>
      </div>
      <SimpleForm dark fields={[{ name: "guia-email", label: "Tu mail", type: "email", required: true }]} submitLabel="Quiero la guía"
        success="¡Listo! Pronto vas a recibir la guía en tu mail." />
    </Reveal>
  );
}

export function Resources({ showGuide = true }: { showGuide?: boolean }) {
  return (
    <section className="section-y bg-surface">
      <div className="container-site">
        <SectionHeading eyebrow="Recursos gratuitos" title="Para seguir aprendiendo" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.slug} delay={i * 80}>
              <article className="card-soft h-full p-7">
                <BookOpen className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 text-2xl text-navy">{a.title}</h3>
                <p className="mt-3 text-muted-foreground">{a.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 text-muted-foreground"><Clock className="h-4 w-4" strokeWidth={1.5} />{a.readTime}</span>
                  <Link to="/recursos/$slug" params={{ slug: a.slug }} className="inline-flex items-center gap-1 font-medium text-navy hover:text-primary">Leer <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {showGuide && <GuideBlock />}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section-y">
      <div className="container-site">
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen quienes se capacitaron" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="card-soft h-full p-8">
                <Quote className="h-7 w-7 text-primary" strokeWidth={1.5} />
                <blockquote className="mt-5 text-foreground">{t.text}</blockquote>
                <figcaption className="mt-6 border-t pt-5 text-sm"><span className="font-medium text-navy">{t.name}</span><br /><span className="text-muted-foreground">{t.role}</span></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export function Faq() {
  return (
    <section className="section-y bg-surface">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Lo que más nos consultan" />
        <Reveal>
          <Accordion type="single" collapsible className="border-t">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`}>
                <AccordionTrigger className="py-6 text-left text-lg text-navy hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function CommunityBand() {
  return (
    <section className="bg-background py-20">
      <div className="container-site">
        <Reveal className="flex flex-col items-start justify-between gap-8 rounded-3xl border p-10 md:flex-row md:items-center md:p-14">
          <div className="max-w-xl">
            <span className="eyebrow">Comunidad</span>
            <h2 className="mt-4 text-4xl text-navy">Sumate a la comunidad de WhatsApp</h2>
            <p className="mt-3 text-muted-foreground">Novedades, webinars gratuitos y material útil, directo en tu celular.</p>
          </div>
          <a href={SITE.whatsappCommunity} target="_blank" rel="noopener noreferrer" className={btn({ variant: "whatsapp" })}>Unirme a la comunidad</a>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="bg-surface">
      <div className="container-site py-16 md:py-24">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-5 text-5xl text-navy md:text-6xl">{title}<span className="text-primary">.</span></h1>
          {text && <p className="mt-6 text-lg text-muted-foreground">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export { Compass };
