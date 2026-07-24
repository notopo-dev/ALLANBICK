import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { BRAND, waLink } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[var(--ink)] text-foreground overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-gold)" }}
      />

      {/* Conheça também — Allanbick Produções */}
      <div className="container-x pt-16">
        <a
          href={BRAND.producoesSite}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)] hover:shadow-[var(--shadow-gold)] transition-shadow"
        >
          <div
            className="relative p-6 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{ background: "var(--gradient-gold)" }}
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="size-4" />
                <span className="text-[10px] uppercase tracking-[0.22em] font-bold">
                  Conheça também
                </span>
              </div>
              <div className="font-display text-2xl md:text-4xl font-extrabold uppercase leading-tight">
                Allanbick Produções
              </div>
              <p className="mt-3 text-sm md:text-base text-white/90 leading-relaxed">
                Nossa produtora oficial de eventos, shows e experiências únicas.
                Visite o site e conheça os projetos.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-5 py-3 text-sm font-semibold group-hover:bg-white/25 transition shrink-0">
              Visitar site
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
              <div className="font-display text-xl font-extrabold uppercase tracking-tight">Allanbick</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold-soft)]">
                Locações & Serviços
              </div>
            </div>
          </div>
          <p className="text-sm text-white/70 max-w-md leading-relaxed">
            Estrutura profissional para eventos e obras em Barreiras e região.
            Banheiros de luxo, tendas, sonorização, mobiliário e muito mais — com
            qualidade, segurança e agilidade que seu evento merece.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border border-white/15 text-[var(--gold-soft)]">
              Qualidade
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border border-white/15 text-[var(--gold-soft)]">
              Segurança
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border border-white/15 text-[var(--gold-soft)]">
              Agilidade
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-[var(--gold-soft)]">Navegação</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/" className="hover:text-[var(--gold)] transition">Início</Link></li>
            <li><Link to="/nosso-trabalho" className="hover:text-[var(--gold)] transition">Nosso Trabalho</Link></li>
            <li><Link to="/trabalhe-conosco" className="hover:text-[var(--gold)] transition">Trabalhe Conosco</Link></li>
            <li><Link to="/contato" className="hover:text-[var(--gold)] transition">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-[var(--gold-soft)]">Contato</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <a href={`tel:+${BRAND.phoneRaw}`} className="flex items-center gap-2 hover:text-[var(--gold)] transition">
                <Phone className="size-4" /> {BRAND.phone}
              </a>
            </li>
            <li>
              <a href={waLink("Olá! Vim pelo site.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--gold)] transition">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--gold)] transition">
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
        <div className="container-x py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/55">
          <p>© {new Date().getFullYear()} Allanbick Locações e Serviços. Todos os direitos reservados.</p>
          <p>Barreiras - BA · CNPJ sob consulta</p>
        </div>
      </div>
    </footer>
  );
}
