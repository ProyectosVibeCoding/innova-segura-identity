import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import logo from "@/assets/innova-segura-logo.png.asset.json";
import { SITE, whatsappLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Logo de Innova Segura" width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full" />
            <span className="font-serif text-2xl">Innova Segura</span>
          </div>
          <p className="mt-4 max-w-xs text-navy-foreground/70">Capacitación en Higiene y Seguridad laboral, online y en vivo, desde Córdoba para todo el país.</p>
        </div>
        <nav aria-label="Pie de página">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-navy-foreground/60">Navegación</h2>
          <ul className="mt-4 space-y-2">
            {([["/sobre-mi","Sobre mí"],["/cursos","Cursos 2027"],["/empresas","Empresas"],["/recursos","Recursos"],["/contacto","Contacto"]] as const).map(([to, l]) => (
              <li key={to}><Link to={to} className="text-navy-foreground/80 hover:text-navy-foreground">{l}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-navy-foreground/60">Contacto</h2>
          <ul className="mt-4 space-y-3 text-navy-foreground/80">
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4" strokeWidth={1.5} />{SITE.city}</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4" strokeWidth={1.5} />{SITE.email}</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4" strokeWidth={1.5} /><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{SITE.phone}</a></li>
            <li className="flex items-center gap-3"><Instagram className="h-4 w-4" strokeWidth={1.5} /><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">innova.segura</a></li>
            <li className="flex items-center gap-3"><Youtube className="h-4 w-4" strokeWidth={1.5} /><a href={SITE.youtube} target="_blank" rel="noopener noreferrer">@innovasegura</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container-site flex flex-col gap-2 py-6 text-sm text-navy-foreground/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Innova Segura. Todos los derechos reservados.</p>
          <p>Sitio desarrollado por MafeTech</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-navy-deep shadow-lift transition-transform hover:scale-105">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>
    </a>
  );
}
