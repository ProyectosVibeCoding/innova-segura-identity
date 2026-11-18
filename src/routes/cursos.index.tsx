import { createFileRoute } from "@tanstack/react-router";
import { CommunityBand, Courses, Faq, PageHero } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cursos/")({
  head: () => seo({ title: "Cursos 2027 · Cursos de higiene y seguridad online", description: "Calendario 2027 de cursos y webinars de higiene y seguridad online en vivo, de febrero a diciembre.", path: "/cursos" }),
  component: () => (<><PageHero eyebrow="Cursos 2027" title="Calendario de cursos y webinars" text="Clases en vivo, seguimiento personalizado y normativa argentina explicada simple." /><Courses /><Faq /><CommunityBand /></>),
});
