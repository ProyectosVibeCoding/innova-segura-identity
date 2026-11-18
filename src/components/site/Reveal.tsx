import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, text, light }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <Reveal className="max-w-2xl">
      <span className={cn("eyebrow", light && "text-navy-foreground/70")}>{eyebrow}</span>
      <h2 className={cn("mt-4 text-4xl md:text-5xl", light ? "text-navy-foreground" : "text-navy")}>{title}</h2>
      {text && <p className={cn("mt-5", light ? "text-navy-foreground/75" : "text-muted-foreground")}>{text}</p>}
    </Reveal>
  );
}
