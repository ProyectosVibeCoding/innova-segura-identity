import { createFileRoute } from "@tanstack/react-router";
import { CommunityBand, PageHero, Resources } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/recursos/")({
  head: () => seo({ title: "Recursos gratuitos de higiene y seguridad · Innova Segura", description: "Artículos y guías gratuitas sobre Ley 19.587, ART y EPP, explicados simple.", path: "/recursos" }),
  component: () => (<><PageHero eyebrow="Recursos" title="Recursos gratuitos" text="Normativa y buenas prácticas de seguridad laboral, en lenguaje claro." /><Resources /><CommunityBand /></>),
});
