import { Link } from "@tanstack/react-router";
import { X, Phone, Instagram, MessageCircle, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
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
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
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
            <img src={BRAND.logo} alt="Allanbick" className="h-11 w-11 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-base font-extrabold uppercase tracking-tight">Allanbick</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Menu</div>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="p-2 rounded-lg hover:bg-neutral-100 transition"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="px-4 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={onClose}
              className="px-4 py-3 rounded-xl text-base font-semibold text-neutral-800 hover:bg-neutral-100 transition flex items-center justify-between group"
              activeProps={{ className: "bg-neutral-100 text-neutral-900" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition" />
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="px-6">
          <div className="h-px bg-neutral-200" />
        </div>

        {/* Cross-brand card */}
        <div className="px-6 py-6">
          <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 mb-3 font-semibold">
            Conheça também
          </div>
          <a
            href={BRAND.producoesSite}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden border border-neutral-200 hover:border-transparent hover:shadow-xl transition-all"
          >
            <div
              className="relative p-5 text-white"
              style={{ background: "var(--gradient-gold)" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="size-4" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                      Produtora oficial
                    </span>
                  </div>
                  <div className="font-display text-xl font-extrabold uppercase leading-tight">
                    Allanbick<br />Produções
                  </div>
                </div>
                <ArrowUpRight className="size-5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="mt-3 text-sm text-white/90 leading-snug">
                Produção completa de eventos, shows e experiências únicas.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold bg-white/15 backdrop-blur px-3 py-1.5 rounded-full">
                Visitar site
                <ArrowUpRight className="size-3.5" />
              </div>
            </div>
          </a>
        </div>

        {/* Contact */}
        <div className="mt-auto px-6 py-6 border-t border-neutral-200 space-y-3">
          <a
            href={waLink("Olá! Gostaria de fazer um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-95 transition"
          >
            <MessageCircle className="size-4" /> Falar no WhatsApp
          </a>
          <div className="flex items-center justify-between text-sm text-neutral-600">
            <a href={`tel:+${BRAND.phoneRaw}`} className="inline-flex items-center gap-1.5 hover:text-neutral-900">
              <Phone className="size-4" /> {BRAND.phone}
            </a>
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-neutral-900">
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
