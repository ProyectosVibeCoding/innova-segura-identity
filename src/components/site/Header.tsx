import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/innova-segura-logo.png.asset.json";
import { SITE } from "@/data/site";
import { btn } from "./btn";

const NAV = [
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/cursos", label: "Cursos 2027" },
  { to: "/empresas", label: "Empresas" },
  { to: "/recursos", label: "Recursos" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container-site flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Logo de Innova Segura" width={44} height={44} className="h-11 w-11 shrink-0 rounded-full" />
          <span className="truncate font-serif text-xl text-navy">Innova Segura</span>
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-[0.95rem] text-muted-foreground transition-colors hover:text-navy" activeProps={{ className: "text-navy font-medium" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href={SITE.whatsappCommunity} target="_blank" rel="noopener noreferrer" className={btn({ size: "sm", className: "hidden sm:inline-flex" })}>
            Sumate a la comunidad
          </a>
          <button type="button" className="rounded-full p-2 text-navy lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Menú móvil" className="border-t bg-background lg:hidden">
          <div className="container-site flex flex-col py-4">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b py-3 text-lg text-navy last:border-0">{n.label}</Link>
            ))}
            <a href={SITE.whatsappCommunity} target="_blank" rel="noopener noreferrer" className={btn({ className: "mt-4" })}>Sumate a la comunidad</a>
          </div>
        </nav>
      )}
    </header>
  );
}
