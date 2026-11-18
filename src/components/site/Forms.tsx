import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { btn } from "./btn";

// Por ahora los formularios solo validan y confirman. Para conectarlos a la base de datos,
// reemplazá el cuerpo de `onSubmit` por una llamada al servidor.
type Field = { name: string; label: string; type?: string; required?: boolean; textarea?: boolean };

const inputCls = "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition focus:border-navy";

export function SimpleForm({ fields, submitLabel, success, onSubmit, dark }: {
  fields: Field[]; submitLabel: string; success: ReactNode; onSubmit?: (data: Record<string, string>) => Promise<void> | void; dark?: boolean;
}) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const errs: Record<string, string> = {};
    for (const f of fields) {
      const v = (data[f.name] ?? "").trim();
      if (f.required && !v) errs[f.name] = "Este campo es obligatorio";
      else if (f.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) errs[f.name] = "Ingresá un mail válido";
      else if (v.length > 2000) errs[f.name] = "Es demasiado largo";
    }
    setErrors(errs);
    if (Object.keys(errs).length) return;
    await onSubmit?.(data);
    setSent(true);
  }

  if (sent) return (
    <div role="status" className={`flex items-start gap-3 rounded-2xl p-6 ${dark ? "bg-navy-foreground/10 text-navy-foreground" : "bg-surface text-navy"}`}>
      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" /> <div>{success}</div>
    </div>
  );

  return (
    <form onSubmit={handle} noValidate className="grid gap-5 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.name} className={f.textarea ? "sm:col-span-2" : ""}>
          <label htmlFor={f.name} className={`text-sm font-medium ${dark ? "text-navy-foreground" : "text-navy"}`}>{f.label}{f.required && " *"}</label>
          {f.textarea
            ? <textarea id={f.name} name={f.name} rows={4} className={inputCls} aria-invalid={!!errors[f.name]} />
            : <input id={f.name} name={f.name} type={f.type ?? "text"} className={inputCls} aria-invalid={!!errors[f.name]} />}
          {errors[f.name] && <p className="mt-1 text-sm text-primary">{errors[f.name]}</p>}
        </div>
      ))}
      <div className="sm:col-span-2"><button type="submit" className={btn()}>{submitLabel}</button></div>
    </form>
  );
}

export const COMPANY_FIELDS: Field[] = [
  { name: "empresa", label: "Empresa", required: true },
  { name: "nombre", label: "Nombre y apellido", required: true },
  { name: "email", label: "Mail", type: "email", required: true },
  { name: "telefono", label: "Teléfono", type: "tel" },
  { name: "personas", label: "Cantidad de personas", type: "number" },
  { name: "mensaje", label: "Contanos qué necesitás", textarea: true },
];
