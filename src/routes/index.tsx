import { createFileRoute } from "@tanstack/react-router";
import { About, CommunityBand, Companies, Courses, Differentials, Faq, faqJsonLd, Hero, Resources, Stats, Testimonials } from "@/components/site/Sections";
import { SITE } from "@/data/site";
import { jsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...seo({ title: "Innova Segura · Capacitación en higiene y seguridad online", description: "Cursos de higiene y seguridad online en vivo, con seguimiento personalizado. Capacitación in company en Córdoba y todo el país.", path: "/" }),
    scripts: [
      jsonLd({ "@context": "https://schema.org", "@type": "EducationalOrganization", name: SITE.name, url: SITE.url,
        address: { "@type": "PostalAddress", addressLocality: "Córdoba", addressCountry: "AR" }, sameAs: [SITE.instagram, SITE.youtube] }),
      jsonLd(faqJsonLd),
    ],
  }),
  component: () => (<><Hero /><Stats /><About /><Differentials /><Courses limit={3} /><Companies /><Resources /><Testimonials /><Faq /><CommunityBand /></>),
});
