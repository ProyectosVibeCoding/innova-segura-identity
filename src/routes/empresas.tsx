import { createFileRoute } from "@tanstack/react-router";
import { COMPANY_FIELDS, SimpleForm } from "@/components/site/Forms";
import { Reveal } from "@/components/site/Reveal";
import { Companies, PageHero, Testimonials } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/empresas")({
  head: () => seo({ title: "Capacitación in company Córdoba · Innova Segura", description: "Capacitación in company en higiene y seguridad para empresas de Córdoba y todo el país. Pedí tu propuesta a medida.", path: "/empresas" }),
  component: () => (
    <>
      <PageHero eyebrow="Empresas" title="Capacitación in company en Córdoba y todo el país" text="Programas a medida para que tu equipo trabaje más seguro y tu empresa cumpla la normativa." />
      <Companies withLink={false} />
      <section id="propuesta" className="section-y bg-surface scroll-mt-20">
        <div className="container-site max-w-3xl">
          <Reveal>
            <span className="eyebrow">Propuesta</span>
            <h2 className="mt-4 text-4xl text-navy md:text-5xl">Pedí una propuesta para tu empresa</h2>
            <p className="mt-4 text-muted-foreground">Contanos sobre tu equipo y te enviamos una propuesta a medida.</p>
            <div className="mt-10 rounded-3xl bg-background p-8 shadow-soft md:p-10">
              <SimpleForm fields={COMPANY_FIELDS} submitLabel="Enviar pedido" success="¡Gracias! Recibimos tu pedido y te vamos a contactar a la brevedad." />
            </div>
          </Reveal>
        </div>
      </section>
      <Testimonials />
    </>
  ),
});
