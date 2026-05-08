import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Brush,
  Eye,
  Layers,
  Flame,
  Star,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  ArrowUpRight,
  Award,
  Users,
} from "lucide-react";
import "./App.css";

const WHATSAPP = "https://wa.me/17875550101";
const PHONE_DISPLAY = "(787) 555-0101";
const ADDRESS = "Calle Principal #45, Fajardo, PR";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Horario", href: "#horario" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES = [
  {
    icon: Scissors,
    name: "Corte Clásico",
    description:
      "Tijera y máquina, terminado con navaja. El corte que nunca pasa de moda.",
    price: 18,
    duration: "30 min",
  },
  {
    icon: Layers,
    name: "Corte + Barba",
    description:
      "El combo del caballero. Corte completo más perfilado de barba con toalla caliente.",
    price: 25,
    duration: "45 min",
    featured: true,
  },
  {
    icon: Brush,
    name: "Perfilado de Barba",
    description:
      "Definición, recorte y aceite. Tu barba con el carácter que se merece.",
    price: 12,
    duration: "20 min",
  },
  {
    icon: Sparkles,
    name: "Diseño / Line-Up",
    description:
      "Líneas precisas, frontales nítidos y diseño personalizado a navaja.",
    price: 15,
    duration: "25 min",
  },
  {
    icon: Eye,
    name: "Cejas",
    description: "Limpieza y arqueado para enmarcar la mirada con estilo.",
    price: 8,
    duration: "10 min",
  },
  {
    icon: Flame,
    name: "Facial Premium",
    description:
      "Vapor, exfoliación y mascarilla. La pausa que tu rostro estaba pidiendo.",
    price: 20,
    duration: "30 min",
  },
];

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&q=80&auto=format&fit=crop",
    alt: "Interior de la barbería",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=80&auto=format&fit=crop",
    alt: "Detalle de corte",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80&auto=format&fit=crop",
    alt: "Cliente atendido",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=700&q=80&auto=format&fit=crop",
    alt: "Herramientas del oficio",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1521490214270-7e92ed1c0fe0?w=700&q=80&auto=format&fit=crop",
    alt: "Acabado clásico",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=700&q=80&auto=format&fit=crop",
    alt: "Perfilado de barba",
    span: "",
  },
];

const TESTIMONIALS = [
  {
    name: "Carlos M.",
    role: "Cliente desde 2018",
    text:
      "El único lugar donde no tengo que explicar lo que quiero. Entran, miran, y ya saben. Atención impecable cada vez.",
    rating: 5,
  },
  {
    name: "Andrés R.",
    role: "Cliente desde 2021",
    text:
      "Probé tres barberías en Fajardo antes de quedarme aquí. La diferencia se nota a la primera. Vale cada centavo.",
    rating: 5,
  },
  {
    name: "Javier P.",
    role: "Cliente desde 2017",
    text:
      "Me casé y los traje para mi grupo de padrinos. Quedaron todos perfectos en las fotos. Profesionales de verdad.",
    rating: 5,
  },
];

const SCHEDULE = [
  { day: "Lunes", hours: "9:00 AM — 7:00 PM" },
  { day: "Martes", hours: "9:00 AM — 7:00 PM" },
  { day: "Miércoles", hours: "9:00 AM — 7:00 PM" },
  { day: "Jueves", hours: "9:00 AM — 7:00 PM" },
  { day: "Viernes", hours: "9:00 AM — 8:00 PM" },
  { day: "Sábado", hours: "9:00 AM — 6:00 PM" },
  { day: "Domingo", hours: "Cerrado", closed: true },
];

const STATS = [
  { value: "9+", label: "Años en el oficio" },
  { value: "150+", label: "Reseñas 5 estrellas" },
  { value: "4", label: "Barberos master" },
  { value: "4.9", label: "Rating en Google" },
];

const VALUES = [
  {
    icon: Award,
    title: "Tradición",
    body:
      "Técnicas clásicas de barbería que pasaron de generación en generación. Hecho a mano, hecho con tiempo.",
  },
  {
    icon: Sparkles,
    title: "Detalle",
    body:
      "Cada milímetro cuenta. Líneas limpias, transiciones perfectas y un terminado que se siente al tacto.",
  },
  {
    icon: Users,
    title: "Atención",
    body:
      "No somos una cadena. Sabemos tu nombre, sabemos tu corte y sabemos cómo lo prefieres.",
  },
];

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/70 backdrop-blur-xl border-b border-ink-line/80"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-display text-xl tracking-tight text-bone md:text-2xl"
        >
          <span className="inline-block h-2 w-2 rotate-45 bg-gold" />
          El&nbsp;Clásico
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-bone/80 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-5 py-2.5 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-ink md:inline-flex"
        >
          Reservar Cita
          <ChevronRight className="h-4 w-4" />
        </a>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="grid h-11 w-11 place-items-center rounded-full border border-ink-line/80 bg-ink-soft/80 text-bone backdrop-blur md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden border-t border-ink-line/60 bg-ink/95 backdrop-blur-xl md:hidden"
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base text-bone/90 hover:bg-ink-line/50"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 px-1">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-ink"
            >
              Reservar Cita por WhatsApp
              <ChevronRight className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </motion.div>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-32 md:pt-40"
    >
      {/* Background image with overlay */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <img
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1800&q=80&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
        <div className="absolute inset-0 animate-pan bg-[radial-gradient(circle_at_20%_30%,rgba(201,169,110,0.18),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(201,169,110,0.12),transparent_55%)]" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs uppercase tracking-[0.22em] text-gold">
              Desde 2015 · Fajardo, PR
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl leading-[1.05] tracking-tight text-bone sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            El corte que
            <br />
            <span className="italic text-gold">define</span> tu carácter.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-bone/70 md:text-xl"
          >
            Una barbería donde la tradición se encuentra con la precisión.
            Cortes clásicos, barba a navaja y el cuidado que se siente al
            sentarte en el sillón.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-all hover:bg-bone hover:shadow-[0_0_40px_var(--color-gold-glow)]"
            >
              Reservar mi cita
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-bone/25 px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-bone transition-all hover:border-bone hover:bg-bone/5"
            >
              Ver servicios
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-ink-line/70 pt-8 md:mt-28 md:grid-cols-4 md:gap-10 md:pt-10"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <div className="font-display text-3xl text-gold md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-bone/60 md:text-sm">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="mt-24 border-y border-ink-line/70 bg-ink-soft/40 py-5 md:mt-32">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12 font-display text-2xl uppercase tracking-[0.18em] text-bone/40 md:gap-16 md:pr-16 md:text-3xl">
            {[
              "Precisión",
              "Tradición",
              "Carácter",
              "Detalle",
              "Navaja",
              "Tijera",
              "Estilo",
              "Oficio",
            ]
              .concat([
                "Precisión",
                "Tradición",
                "Carácter",
                "Detalle",
                "Navaja",
                "Tijera",
                "Estilo",
                "Oficio",
              ])
              .map((w, i) => (
                <span
                  key={i}
                  className="flex items-center gap-12 md:gap-16"
                >
                  {w}
                  <span className="text-gold">✦</span>
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className={`mb-14 max-w-2xl md:mb-20 ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className={`mb-5 inline-flex items-center gap-2 ${
          align === "center" ? "" : ""
        }`}
      >
        <span className="h-px w-10 bg-gold" />
        <span className="text-[11px] uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl leading-tight tracking-tight text-bone sm:text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-bone/65 md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

function Servicios() {
  return (
    <section
      id="servicios"
      className="relative bg-ink py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          eyebrow="Servicios"
          title={
            <>
              Cada detalle,
              <br />
              <span className="italic text-gold">a navaja.</span>
            </>
          }
          subtitle="Servicios curados para el caballero que entiende que verse bien empieza por sentarse en la silla correcta."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-px overflow-hidden rounded-3xl border border-ink-line/80 bg-ink-line/80 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className={`group relative overflow-hidden bg-ink-soft p-8 transition-colors duration-500 hover:bg-ink-mute md:p-10 ${
                  s.featured ? "lg:bg-ink-mute" : ""
                }`}
              >
                {s.featured && (
                  <span className="absolute right-6 top-6 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                    Más pedido
                  </span>
                )}
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-bone md:text-3xl">
                  {s.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/65 md:text-base">
                  {s.description}
                </p>
                <div className="mt-8 flex items-baseline justify-between border-t border-ink-line/80 pt-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-bone/50">$</span>
                    <span className="font-display text-3xl text-gold">
                      {s.price}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-bone/50">
                    <Clock className="h-3.5 w-3.5" />
                    {s.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 text-center text-sm text-bone/50"
        >
          ¿No ves lo que buscas?{" "}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="text-gold underline-offset-4 hover:underline"
          >
            Pregúntanos por WhatsApp
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}

function Valores() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 md:py-32">
      <div className="absolute inset-0 -z-0 opacity-30">
        <div className="absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          eyebrow="Por qué El Clásico"
          title={
            <>
              Más que un corte,
              <br />
              <span className="italic text-gold">un ritual.</span>
            </>
          }
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-10 md:grid-cols-3"
        >
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="group relative rounded-3xl border border-ink-line/70 bg-ink/40 p-8 backdrop-blur-sm transition-all hover:border-gold/40 md:p-10"
              >
                <Icon className="mb-6 h-8 w-8 text-gold" />
                <h3 className="font-display text-2xl text-bone md:text-3xl">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bone/65 md:text-base">
                  {v.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section id="galeria" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          eyebrow="Galería"
          title={
            <>
              El trabajo
              <br />
              <span className="italic text-gold">habla solo.</span>
            </>
          }
          subtitle="Una pequeña selección de lo que hacemos día a día. Cada cabeza, una historia distinta."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4 md:gap-5"
        >
          {GALLERY.map((g, i) => (
            <motion.figure
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className={`group relative overflow-hidden rounded-2xl bg-ink-soft ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover grayscale-[40%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent opacity-60 transition-opacity group-hover:opacity-30" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonios() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 md:py-32">
      <div className="absolute inset-0 -z-0 opacity-30">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gold/15 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          eyebrow="Testimonios"
          title={
            <>
              Lo dicen nuestros
              <br />
              <span className="italic text-gold">clientes.</span>
            </>
          }
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex h-full flex-col rounded-3xl border border-ink-line/70 bg-ink/50 p-8 backdrop-blur-sm md:p-10"
            >
              <div className="mb-5 flex gap-1">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star
                    key={k}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <blockquote className="flex-1 font-display text-lg leading-relaxed text-bone/90 md:text-xl">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-8 border-t border-ink-line/70 pt-5">
                <div className="text-sm font-medium text-bone">{t.name}</div>
                <div className="text-xs text-bone/55">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Horario() {
  return (
    <section
      id="horario"
      className="relative bg-ink py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          eyebrow="Horario · Ubicación"
          title={
            <>
              Te esperamos
              <br />
              <span className="italic text-gold">cuando quieras venir.</span>
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Schedule + contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="lg:col-span-2"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-ink-line/70 bg-ink-soft p-8 md:p-10"
            >
              <div className="mb-6 flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" />
                <h3 className="font-display text-xl text-bone md:text-2xl">
                  Horario de atención
                </h3>
              </div>
              <ul className="divide-y divide-ink-line/60">
                {SCHEDULE.map((s) => (
                  <li
                    key={s.day}
                    className="flex items-center justify-between py-3 text-sm md:text-base"
                  >
                    <span className="text-bone/85">{s.day}</span>
                    <span
                      className={
                        s.closed
                          ? "text-bone/40"
                          : "font-medium text-bone"
                      }
                    >
                      {s.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <a
                href={`tel:+17875550101`}
                className="group flex items-center gap-4 rounded-2xl border border-ink-line/70 bg-ink-soft p-5 transition-colors hover:border-gold/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/10 text-gold">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-bone/50">
                    Llámanos
                  </span>
                  <span className="block text-sm font-medium text-bone">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-ink-line/70 bg-ink-soft p-5 transition-colors hover:border-gold/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/10 text-gold">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-bone/50">
                    WhatsApp
                  </span>
                  <span className="block text-sm font-medium text-bone">
                    Reserva en segundos
                  </span>
                </span>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-6 flex items-start gap-4 rounded-2xl border border-ink-line/70 bg-ink-soft p-6"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-bone/50">
                  Visítanos
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-bone">
                  {ADDRESS}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl border border-ink-line/70 lg:col-span-3"
          >
            <iframe
              title="Ubicación de El Clásico Barbería en Fajardo"
              src="https://www.google.com/maps?q=Fajardo,+Puerto+Rico&output=embed"
              loading="lazy"
              className="h-[420px] w-full grayscale-[20%] md:h-full md:min-h-[520px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gradient-to-br from-ink-soft via-ink to-ink-soft py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-gold">
            <Scissors className="h-3.5 w-3.5" />
            Reserva en línea
          </span>
          <h2 className="mt-7 font-display text-4xl leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl lg:text-7xl">
            ¿Listo para tu
            <br />
            <span className="italic text-gold">próxima visita?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bone/65 md:text-lg">
            Reserva por WhatsApp y te confirmamos en minutos. Sin filas, sin
            esperas.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide text-ink transition-all hover:bg-bone hover:shadow-[0_0_60px_var(--color-gold-glow)]"
            >
              <MessageCircle className="h-4 w-4" />
              Reservar por WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`tel:+17875550101`}
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-bone/25 px-8 py-4 text-sm font-medium uppercase tracking-wide text-bone transition-all hover:border-bone hover:bg-bone/5"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-line/70 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-4 md:gap-12">
          <div className="md:col-span-2">
            <a
              href="#inicio"
              className="flex items-center gap-2 font-display text-2xl tracking-tight text-bone"
            >
              <span className="inline-block h-2 w-2 rotate-45 bg-gold" />
              El&nbsp;Clásico
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone/55">
              Barbería en Fajardo, Puerto Rico. Cortes clásicos, barba y
              experiencia premium desde 2015.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[
                { icon: IconInstagram, href: "https://instagram.com" },
                { icon: IconFacebook, href: "https://facebook.com" },
                { icon: MessageCircle, href: WHATSAPP },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full border border-ink-line/70 text-bone/70 transition-colors hover:border-gold/40 hover:text-gold"
                    aria-label="Red social"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-bone/40">
              Navegación
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-bone/75 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-bone/40">
              Contacto
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2 text-bone/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {ADDRESS}
              </li>
              <li>
                <a
                  href="tel:+17875550101"
                  className="flex items-start gap-2 text-bone/75 hover:text-gold"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 text-bone/75 hover:text-gold"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-line/70 pt-8 text-xs text-bone/45 sm:flex-row sm:items-center">
          <span>© {year} El Clásico. Todos los derechos reservados.</span>
          <a
            href="https://veldevpr.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-bone/55 transition-colors hover:text-gold"
          >
            Desarrollado por{" "}
            <span className="font-medium text-bone">VelDev PR</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="grain min-h-screen bg-ink text-bone antialiased">
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Valores />
        <Galeria />
        <Testimonios />
        <Horario />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
