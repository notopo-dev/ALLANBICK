import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { BRAND, waLink } from "@/lib/brand";
import { Sidebar } from "@/components/site/Sidebar";

const links = [
  { to: "/", label: "Início" },
  { to: "/nosso-trabalho", label: "Nosso Trabalho" },
  { to: "/trabalhe-conosco", label: "Trabalhe Conosco" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container-x flex items-center justify-between h-20 py-3">
          <Link to="/" className="flex items-center gap-3 group min-w-0">
            <img
              src={BRAND.logo}
              alt="Allanbick Locações e Serviços"
              className="h-12 w-12 md:h-14 md:w-14 object-contain shrink-0 transition-transform group-hover:scale-[1.03]"
            />
            <div className="hidden sm:flex flex-col leading-tight min-w-0">
              <span className="font-display text-lg font-extrabold tracking-tight text-foreground uppercase truncate">
                Allanbick
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground truncate">
                Locações & Serviços
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-[var(--gold)] after:transition-all hover:after:w-full"
                activeProps={{ className: "text-foreground after:!w-full" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waLink("Olá! Gostaria de fazer um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-[var(--shadow-luxury)] hover:opacity-95 transition"
            >
              <Phone className="size-4" />
              Orçamento
            </a>
            <button
              aria-label="Abrir menu"
              className="md:hidden p-2.5 rounded-lg hover:bg-muted transition inline-flex items-center gap-2"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <Sidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}