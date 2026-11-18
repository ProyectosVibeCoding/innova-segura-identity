import { cva } from "class-variance-authority";

export const btn = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 disabled:opacity-60 text-[0.95rem] px-6 py-3",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-lift",
        navy: "bg-navy text-navy-foreground hover:-translate-y-0.5 hover:shadow-lift",
        outline: "border border-navy/20 text-navy hover:border-navy hover:bg-surface",
        ghostLight: "border border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10",
        whatsapp: "bg-whatsapp text-navy-deep hover:-translate-y-0.5 hover:shadow-lift",
      },
      size: { sm: "px-4 py-2 text-sm", md: "" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);
