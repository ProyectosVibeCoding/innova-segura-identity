import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";
import { SimpleForm } from "@/components/site/Forms";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/Sections";
import { SITE, whatsappLink } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () => seo({ title: "Contacto · Innova Segura", description: "Escribinos para consultas sobre cursos de higiene y seguridad online o capacitaciones para empresas.", path: "/contacto" }),
  component: () => (
    <>
      <PageHero eyebrow="Contacto" title="Hablemos" text="Escribinos por el formulario o por WhatsApp y te respondemos personalmente." />
      <section className="section-y">
        <div className="container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <ul className="space-y-6">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: SITE.phone, href: whatsappLink() },
                { icon: Mail, label: "Mail", value: SITE.email },
                { icon: MapPin, label: "Ubicación", value: SITE.city },
                { icon: Instagram, label: "Instagram", value: "innova.segura", href: SITE.instagram },
                { icon: Youtube, label: "YouTube", value: "@innovasegura", href: SITE.youtube },
              ].map((i) => (
                <li key={i.label} className="flex gap-4 border-b pb-6">
                  <i.icon className="mt-1 h-5 w-5 text-primary" strokeWidth={1.5} />
                  <div><p className="text-sm uppercase tracking-widest text-muted-foreground">{i.label}</p>
                    {i.href ? <a href={i.href} target="_blank" rel="noopener noreferrer" className="text-navy hover:text-primary">{i.value}</a> : <p className="text-navy">{i.value}</p>}</div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-3xl bg-surface p-8 md:p-10">
            <h2 className="text-3xl text-navy">Envianos tu consulta</h2>
            <div className="mt-8">
              <SimpleForm submitLabel="Enviar mensaje" success="¡Gracias por escribirnos! Te respondemos a la brevedad."
                fields={[{ name: "nombre", label: "Nombre", required: true }, { name: "email", label: "Mail", type: "email", required: true }, { name: "telefono", label: "Teléfono", type: "tel" }, { name: "asunto", label: "Asunto" }, { name: "mensaje", label: "Mensaje", textarea: true, required: true }]} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  ),
});
