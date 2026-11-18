import { createFileRoute } from "@tanstack/react-router";
import { About, CommunityBand, Differentials, PageHero, Testimonials } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/sobre-mi")({
  head: () => seo({ title: "Sobre mí · Innova Segura", description: "Conocé a la profesional detrás de Innova Segura, capacitación en higiene y seguridad desde Córdoba.", path: "/sobre-mi" }),
  component: () => (<><PageHero eyebrow="Sobre mí" title="Una profesional que acompaña" text="La historia, la formación y los valores detrás de Innova Segura." /><About full /><Differentials /><Testimonials /><CommunityBand /></>),
});
