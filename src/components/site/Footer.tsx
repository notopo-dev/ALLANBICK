import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { BRAND, waLink } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[var(--ink)] text-foreground overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gold)" }}
      />

      {/* Conheça também — Allanbick Produções */}
      <div className="container-x pt-16">
        <a
          href={BRAND.producoesSite}
          target="_blank"
          rel="noopener noreferrer"
          className="group block border border-white/10 p-6 transition-colors hover:border-[var(--gold)]/50 md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
                Conheça também
              </span>
              <div className="mt-2 font-display text-2xl font-bold uppercase leading-tight md:text-4xl">
                Allanbick Produções
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">
                Nossa produtora oficial de eventos, shows e experiências únicas.
                Visite o site e conheça os projetos.
              </p>
            </div>
            <div className="inline-flex shrink-0 items-center gap-2 border-b border-white/25 pb-1 text-sm font-semibold uppercase tracking-wide transition-colors group-hover:border-[var(--gold)] group-hover:text-[var(--gold)]">
              Visitar site
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </a>
      </div>

      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            <img
              src={BRAND.logo}
              alt="Allanbick Locações"
              className="h-14 w-14 object-contain"
            />
            <div>
              <div className="font-display text-xl font-bold uppercase tracking-tight">Allanbick</div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                Locações & Serviços
              </div>
            </div>
          </div>
          <p className="text-sm text-white/65 max-w-md leading-relaxed">
            Estrutura profissional para eventos e obras em Barreiras e região.
            Sonorização, painel de LED, estrutura Q30, tendas, banheiros de luxo
            e mobiliário — com a qualidade, segurança e agilidade que seu evento
            merece.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-[11px] uppercase tracking-[0.18em] text-white/50">
            <span>Qualidade</span>
            <span>Segurança</span>
            <span>Agilidade</span>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide mb-4 text-white/85">Navegação</h4>
          <ul className="space-y-2.5 text-sm text-white/65">
            <li><Link to="/" className="hover:text-[var(--gold)] transition-colors">Início</Link></li>
            <li><Link to="/nosso-trabalho" className="hover:text-[var(--gold)] transition-colors">Nosso Trabalho</Link></li>
            <li><Link to="/trabalhe-conosco" className="hover:text-[var(--gold)] transition-colors">Trabalhe Conosco</Link></li>
            <li><Link to="/contato" className="hover:text-[var(--gold)] transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide mb-4 text-white/85">Contato</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href={`tel:+${BRAND.phoneRaw}`} className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
                <Phone className="size-4" /> {BRAND.phone}
              </a>
            </li>
            <li>
              <a href={waLink("Olá! Vim pelo site.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
                <Instagram className="size-4" /> {BRAND.instagramHandle}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4" /> {BRAND.region}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/45">
          <p>© {new Date().getFullYear()} Allanbick Locações e Serviços. Todos os direitos reservados.</p>
          <p>Barreiras - BA · CNPJ sob consulta</p>
        </div>
      </div>
    </footer>
  );
}