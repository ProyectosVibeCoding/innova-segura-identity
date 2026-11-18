// Datos editables del sitio. Cambiá acá textos, cursos, artículos y preguntas.
export const SITE = {
  name: "Innova Segura",
  url: "https://innovasegura.com.ar", // [Reemplazar por el dominio real]
  city: "Córdoba, Argentina",
  email: "[EMAIL]",
  phone: "[TELÉFONO]",
  whatsapp: "5490000000000", // [Número de WhatsApp sin + ni espacios]
  whatsappCommunity: "https://chat.whatsapp.com/[LINK_COMUNIDAD]",
  instagram: "https://instagram.com/innova.segura",
  youtube: "https://youtube.com/@innovasegura",
  founder: "[NOMBRE Y APELLIDO]",
};

export const whatsappLink = (text = "Hola, quiero consultar por los cursos de Innova Segura") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const STATS = [
  { value: "[XX]", label: "años de experiencia" },
  { value: "[XX]", label: "alumnos capacitados" },
  { value: "[XX]", label: "cursos dictados" },
  { value: "[XX]", label: "provincias alcanzadas" },
];

export type Course = {
  slug: string;
  type: "Curso" | "Webinar gratuito";
  title: string;
  date: string;
  duration: string;
  price: string;
  summary: string;
  description: string;
  topics: string[];
};

export const COURSES: Course[] = [
  {
    slug: "fundamentos-ley-19587",
    type: "Curso",
    title: "Fundamentos de Higiene y Seguridad: Ley 19.587",
    date: "Febrero 2027 · [FECHA]",
    duration: "[X] encuentros en vivo",
    price: "[PRECIO]",
    summary: "Las bases legales y prácticas para trabajar en prevención en Argentina.",
    description: "Recorremos la Ley 19.587 y su Decreto 351/79 de forma clara, con casos reales y espacio para consultas en cada clase.",
    topics: ["Marco legal argentino", "Obligaciones del empleador", "Rol del servicio de HyS", "Casos prácticos"],
  },
  {
    slug: "webinar-art-que-cubre",
    type: "Webinar gratuito",
    title: "ART: qué cubre y qué no",
    date: "Marzo 2027 · [FECHA]",
    duration: "90 minutos",
    price: "Gratuito",
    summary: "Un encuentro abierto para entender el sistema de riesgos del trabajo.",
    description: "Un webinar en vivo para aclarar dudas frecuentes sobre la Ley 24.557 y el rol de las ART.",
    topics: ["Ley de Riesgos del Trabajo", "Prestaciones", "Denuncia de accidentes", "Preguntas en vivo"],
  },
  {
    slug: "riesgo-electrico",
    type: "Curso",
    title: "Prevención de riesgo eléctrico",
    date: "Mayo 2027 · [FECHA]",
    duration: "[X] encuentros en vivo",
    price: "[PRECIO]",
    summary: "Criterios y procedimientos para trabajar seguro con instalaciones eléctricas.",
    description: "Normativa vigente, resoluciones de la SRT aplicables y procedimientos de trabajo seguro.",
    topics: ["Res. SRT aplicables", "Bloqueo y etiquetado", "EPP dieléctrico", "Puesta a tierra"],
  },
  {
    slug: "ergonomia-laboral",
    type: "Curso",
    title: "Ergonomía laboral aplicada",
    date: "Agosto 2027 · [FECHA]",
    duration: "[X] encuentros en vivo",
    price: "[PRECIO]",
    summary: "Evaluación de puestos y mejora de condiciones de trabajo.",
    description: "Cómo aplicar la Res. SRT 886/15 para identificar riesgos ergonómicos y proponer mejoras.",
    topics: ["Res. SRT 886/15", "Planillas de evaluación", "Levantamiento de cargas", "Puestos administrativos"],
  },
  {
    slug: "webinar-epp-errores",
    type: "Webinar gratuito",
    title: "Errores frecuentes en el uso de EPP",
    date: "Octubre 2027 · [FECHA]",
    duration: "60 minutos",
    price: "Gratuito",
    summary: "Lo que más se ve en planta y cómo corregirlo.",
    description: "Un repaso práctico sobre selección, uso y control de elementos de protección personal.",
    topics: ["Res. SRT 299/11", "Selección de EPP", "Registro de entrega", "Casos reales"],
  },
  {
    slug: "plan-de-emergencias",
    type: "Curso",
    title: "Plan de emergencias y evacuación",
    date: "Noviembre 2027 · [FECHA]",
    duration: "[X] encuentros en vivo",
    price: "[PRECIO]",
    summary: "Diseñá un plan de emergencias claro y aplicable.",
    description: "Paso a paso para armar, comunicar y simular un plan de emergencias en cualquier organización.",
    topics: ["Análisis de riesgos", "Roles y brigadas", "Simulacros", "Señalización"],
  },
];

export type Article = { slug: string; title: string; excerpt: string; readTime: string; body: string[] };

export const ARTICLES: Article[] = [
  {
    slug: "ley-19587-en-5-minutos",
    title: "Qué dice la Ley 19.587, en 5 minutos",
    excerpt: "La ley madre de la Higiene y Seguridad en Argentina, explicada simple.",
    readTime: "5 min",
    body: ["[Contenido del artículo a completar por la autora.]"],
  },
  {
    slug: "que-cubre-la-art",
    title: "Qué cubre la ART y qué no",
    excerpt: "Prestaciones, límites y dudas frecuentes sobre las aseguradoras de riesgos del trabajo.",
    readTime: "6 min",
    body: ["[Contenido del artículo a completar por la autora.]"],
  },
  {
    slug: "errores-frecuentes-epp",
    title: "Errores frecuentes en el uso de EPP",
    excerpt: "Los descuidos más comunes con los elementos de protección personal.",
    readTime: "4 min",
    body: ["[Contenido del artículo a completar por la autora.]"],
  },
];

export const SERVICES = [
  "Capacitaciones a medida según el rubro y los riesgos de tu empresa",
  "Modalidad online en vivo o presencial en Córdoba",
  "Inducción en seguridad para personal nuevo",
  "Formación de brigadas y planes de emergencia",
  "Registro de asistencia y constancias para auditorías",
  "Seguimiento posterior y material de apoyo",
];

export const DIFFERENTIALS = [
  { icon: "Radio", title: "Clases en vivo", text: "Encuentros sincrónicos donde podés preguntar y participar." },
  { icon: "MessageSquareText", title: "Feedback personal", text: "Seguimiento de cada alumno y corrección de trabajos." },
  { icon: "Scale", title: "Normativa argentina", text: "Ley 19.587, ART y resoluciones de la SRT explicadas simple." },
  { icon: "Award", title: "Certificado", text: "Certificado con aval institucional de [INSTITUCIÓN]." },
] as const;

export const FAQS = [
  { q: "¿Las clases quedan grabadas?", a: "[Respuesta a completar]" },
  { q: "¿Necesito experiencia previa?", a: "[Respuesta a completar]" },
  { q: "¿Cómo me inscribo y pago?", a: "[Respuesta a completar]" },
  { q: "¿Entregan certificado?", a: "[Respuesta a completar]" },
  { q: "¿Hacen capacitaciones para empresas fuera de Córdoba?", a: "[Respuesta a completar]" },
];

export const TESTIMONIALS = [
  { name: "[NOMBRE]", role: "[Rol / empresa]", text: "[Testimonio real]" },
  { name: "[NOMBRE]", role: "[Rol / empresa]", text: "[Testimonio real]" },
  { name: "[NOMBRE]", role: "[Rol / empresa]", text: "[Testimonio real]" },
];
