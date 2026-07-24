import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, MapPin, Clock, Instagram, MessageCircle, Mail, Send, CheckCircle2 } from "lucide-react";
import { BRAND, waLink } from "@/lib/brand";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Allanbick Locações e Serviços — Barreiras-BA" },
      { name: "description", content: "Fale com a Allanbick Locações: WhatsApp 77 99861-7512. Atendemos Barreiras e região com locação de banheiros, tendas, sonorização e mobiliário para eventos." },
      { property: "og:title", content: "Contato — Allanbick Locações" },
      { property: "og:description", content: "WhatsApp, telefone e formulário para solicitar orçamento. Barreiras-BA." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Olá! Meu nome é ${data.get("nome")}.\n\nEvento: ${data.get("evento") || "—"}\nData: ${data.get("data") || "—"}\nLocal: ${data.get("local") || "—"}\n\n${data.get("mensagem") || ""}`;
    window.open(waLink(msg), "_blank", "noopener");
    setSent(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="container-x py-16 md:py-24 text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold">
          Fale conosco
        </span>
        <h1 className="font-display text-4xl md:text-6xl mt-3 leading-tight">
          Vamos planejar o seu <span className="text-gradient-gold">próximo evento</span>
        </h1>
        <p className="text-muted-foreground mt-5 text-lg">
          Estamos prontos para entender sua necessidade e preparar um orçamento
          sob medida. Resposta rápida via WhatsApp.
        </p>
      </section>

      {/* Content */}
      <section className="container-x pb-20 md:pb-24 grid lg:grid-cols-5 gap-8">
        {/* Info side */}
        <aside className="lg:col-span-2 space-y-4">
          <a
            href={waLink("Olá! Gostaria de um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-2xl bg-[var(--ink)] text-foreground p-6 hover:-translate-y-1 transition shadow-[var(--shadow-luxury)]"
          >
            <MessageCircle className="size-7 text-[var(--gold)] shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-wider text-[var(--gold-soft)] mb-1">WhatsApp (mais rápido)</div>
              <div className="font-display text-2xl">{BRAND.phone}</div>
              <div className="text-sm text-white/70 mt-1">Toque para conversar agora</div>
            </div>
          </a>

          <a href={`tel:+${BRAND.phoneRaw}`} className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6 hover:border-[var(--gold)] transition">
            <Phone className="size-6 text-[var(--gold)] shrink-0 mt-1" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Telefone</div>
              <div className="font-semibold text-lg">{BRAND.phone}</div>
            </div>
          </a>

          <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6 hover:border-[var(--gold)] transition">
            <Instagram className="size-6 text-[var(--gold)] shrink-0 mt-1" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Instagram</div>
              <div className="font-semibold text-lg">{BRAND.instagramHandle}</div>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6">
            <MapPin className="size-6 text-[var(--gold)] shrink-0 mt-1" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Região de atendimento</div>
              <div className="font-semibold">Barreiras - BA</div>
              <div className="text-sm text-muted-foreground">e cidades vizinhas do oeste baiano</div>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6">
            <Clock className="size-6 text-[var(--gold)] shrink-0 mt-1" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Horário</div>
              <div className="font-semibold">Seg a Sáb · 8h às 18h</div>
              <div className="text-sm text-muted-foreground">Suporte 24/7 durante eventos contratados</div>
            </div>
          </div>
        </aside>

        {/* Form */}
        <div className="lg:col-span-3 rounded-3xl bg-card border border-border p-7 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl mb-2">Solicite seu orçamento</h2>
          <p className="text-sm text-muted-foreground mb-7">
            Preencha os campos abaixo. Ao enviar, você será direcionado para o
            nosso WhatsApp com a mensagem pronta.
          </p>

          {sent && (
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-[var(--gold-soft)]/20 border border-[var(--gold)] p-4 text-sm">
              <CheckCircle2 className="size-5 text-[var(--gold)]" />
              Mensagem encaminhada ao WhatsApp. Caso não tenha aberto, toque no botão abaixo.
            </div>
          )}

          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Nome completo *" name="nome" required />
            <Field label="Telefone / WhatsApp" name="telefone" type="tel" />
            <Field label="Tipo de evento" name="evento" placeholder="Casamento, formatura, show…" />
            <Field label="Data do evento" name="data" type="date" />
            <Field label="Local / cidade" name="local" className="md:col-span-2" />
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1.5">Mensagem</label>
              <textarea
                name="mensagem"
                rows={5}
                placeholder="Conte o que você precisa: banheiros, tendas, sonorização, número de convidados, etc."
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold hover:opacity-95 transition"
            >
              <Send className="size-4" /> Enviar pelo WhatsApp
            </button>
          </form>

          <p className="mt-5 text-xs text-muted-foreground flex items-center gap-2">
            <Mail className="size-3.5" />
            Preferimos atender via WhatsApp para agilizar seu orçamento.
          </p>
        </div>
      </section>
    </div>
  );
}

function Field({
  label, name, type = "text", required, placeholder, className = "",
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
      />
    </div>
  );
}
