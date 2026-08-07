import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { BRAND, waLink } from "@/lib/brand";
import { Sidebar } from "@/components/site/Sidebar";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Início" },
  { to: "/nosso-trabalho", label: "Nosso Trabalho" },
  { to: "/trabalhe-conosco", label: "Trabalhe Conosco" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-border bg-background/95 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] backdrop-blur-md"
            : "border-transparent bg-background/70 backdrop-blur-sm",
        )}
      >
        <div className="container-x flex items-center justify-between h-20 py-3">
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <img
              src={BRAND.logo}
              alt="Allanbick Locações e Serviços"
              className="h-11 w-11 md:h-14 md:w-14 object-contain shrink-0"
            />
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-display text-base md:text-lg font-bold tracking-tight text-foreground uppercase truncate">
                Allanbick
              </span>
              {/* "Locações & Serviços" some no mobile — só o nome principal fica visível */}
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.22em] text-muted-foreground truncate">
                Locações & Serviços
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative py-1 text-sm font-medium uppercase tracking-wide text-foreground/70 transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--gold)] after:transition-all after:duration-300 hover:after:w-full"
                activeProps={{ className: "!text-foreground after:!w-full" }}
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
              className="hidden md:inline-flex items-center gap-2 rounded-sm bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:bg-[var(--gold)]/90"
            >
              <Phone className="size-4" />
              Orçamento
            </a>
            <button
              aria-label="Abrir menu"
              className="md:hidden rounded-sm p-2.5 text-foreground transition-colors hover:bg-muted"
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