import { Link } from "@tanstack/react-router";
import { X, Phone, Instagram, MessageCircle, ArrowUpRight, MapPin } from "lucide-react";
import { BRAND, waLink } from "@/lib/brand";
import { useEffect } from "react";

const links = [
  { to: "/", label: "Início" },
  { to: "/nosso-trabalho", label: "Nosso Trabalho" },
  { to: "/trabalhe-conosco", label: "Trabalhe Conosco" },
  { to: "/contato", label: "Contato" },
] as const;

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-sm bg-white text-neutral-900 shadow-2xl transition-transform duration-300 ease-out flex flex-col overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200 shrink-0">
          <div className="flex items-center gap-3">
            <img src={BRAND.logo} alt="Allanbick" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-sm font-bold uppercase tracking-wide">Allanbick</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Menu</div>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="rounded-sm p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex flex-col px-6 py-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={onClose}
              className="border-b border-neutral-100 py-4 text-base font-medium text-neutral-800 transition-colors last:border-b-0 hover:text-[var(--gold)]"
              activeProps={{ className: "!text-[var(--gold)]" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Cross-brand card — sóbrio, sem gradiente chamativo */}
        <div className="px-6 py-6">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Conheça também
          </div>
          <a
            href={BRAND.producoesSite}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-neutral-200 p-5 transition-colors hover:border-[var(--gold)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Produtora oficial
                </span>
                <div className="mt-1.5 font-display text-lg font-bold uppercase leading-tight text-neutral-900">
                  Allanbick Produções
                </div>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-neutral-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--gold)]" />
            </div>
            <p className="mt-3 text-sm leading-snug text-neutral-600">
              Produção completa de eventos, shows e experiências únicas.
            </p>
            <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-neutral-900 underline decoration-neutral-300 underline-offset-4 group-hover:decoration-[var(--gold)]">
              Visitar site
            </span>
          </a>
        </div>

        {/* Contact */}
        <div className="mt-auto space-y-4 border-t border-neutral-200 px-6 py-6">
          <a
            href={waLink("Olá! Gostaria de fazer um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[var(--gold)] px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:bg-[var(--gold)]/90"
          >
            <MessageCircle className="size-4" /> Falar no WhatsApp
          </a>
          <div className="flex items-center justify-between text-sm text-neutral-600">
            <a href={`tel:+${BRAND.phoneRaw}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-900">
              <Phone className="size-4" /> {BRAND.phone}
            </a>
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-900">
              <Instagram className="size-4" />
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-neutral-500">
            <MapPin className="size-3.5" /> {BRAND.region}
          </div>
        </div>
      </aside>
    </>
  );
}