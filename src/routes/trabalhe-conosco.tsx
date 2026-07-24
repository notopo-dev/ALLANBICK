import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Briefcase, HeartHandshake, TrendingUp, Users } from "lucide-react";
import { waLink } from "@/lib/brand";

export const Route = createFileRoute("/trabalhe-conosco")({
  head: () => ({
    meta: [
      { title: "Trabalhe Conosco | Allanbick Locações e Serviços — Barreiras-BA" },
      { name: "description", content: "Envie seu currículo para a Allanbick Locações e Serviços em Barreiras-BA. Vagas para montadores, motoristas, auxiliares de eventos, operadores de som e mais." },
      { property: "og:title", content: "Trabalhe Conosco — Allanbick Locações" },
      { property: "og:description", content: "Faça parte do time Allanbick. Envie seu currículo pelo WhatsApp." },
    ],
  }),
  component: TrabalheConoscoPage,
});

const beneficios = [
  { icon: HeartHandshake, title: "Ambiente respeitoso", text: "Equipe unida, cultura de segurança e valorização do profissional." },
  { icon: TrendingUp, title: "Crescimento real", text: "Treinamentos internos e oportunidades de evolução na empresa." },
  { icon: Users, title: "Time de referência", text: "Trabalhe com uma das marcas mais reconhecidas do oeste baiano." },
  { icon: Briefcase, title: "Vagas variadas", text: "Montagem, logística, operação técnica, atendimento e apoio." },
];

const areas = [
  "Montador de estruturas / tendas",
  "Motorista (categoria D ou E)",
  "Auxiliar de logística e carga",
  "Operador de som e iluminação",
  "Atendimento e apoio a eventos",
  "Área administrativa",
];

function TrabalheConoscoPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const msg = `Olá! Tenho interesse em trabalhar na Allanbick.\n\nNome: ${d.get("nome")}\nIdade: ${d.get("idade") || "—"}\nCidade: ${d.get("cidade") || "—"}\nÁrea de interesse: ${d.get("area") || "—"}\nExperiência: ${d.get("experiencia") || "—"}\n\n${d.get("mensagem") || ""}`;
    window.open(waLink(msg), "_blank", "noopener");
    setSent(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="container-x py-16 md:py-24 max-w-3xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold">
          Carreiras
        </span>
        <h1 className="font-display text-4xl md:text-6xl mt-3 leading-tight">
          Trabalhe com a <span className="text-gradient-gold">Allanbick</span>
        </h1>
        <p className="text-muted-foreground mt-5 text-lg">
          Estamos sempre em busca de pessoas comprometidas, que gostem de fazer
          eventos acontecerem com qualidade e segurança. Envie seu currículo e
          venha construir sua carreira com a gente.
        </p>
      </section>

      {/* Benefícios */}
      <section className="bg-white text-neutral-900">
        <div className="container-x py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl">Por que fazer parte do nosso time</h2>
            <p className="mt-3 text-neutral-600">
              Somos uma empresa em crescimento no oeste baiano, com estrutura
              própria e projetos de grande porte durante todo o ano.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {beneficios.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-neutral-200 p-6 hover:border-[var(--gold)] hover:shadow-md transition"
              >
                <div className="h-11 w-11 rounded-xl grid place-items-center bg-[var(--gold)]/10 text-[var(--gold)] mb-4">
                  <b.icon className="size-5" />
                </div>
                <div className="font-display text-lg font-extrabold uppercase tracking-tight">
                  {b.title}
                </div>
                <p className="text-sm text-neutral-600 mt-1.5 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas + Formulário */}
      <section className="container-x py-16 md:py-24 grid lg:grid-cols-5 gap-8">
        <aside className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Áreas de atuação</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Mesmo que sua função não esteja listada, envie seu currículo — vamos
              guardar para futuras oportunidades.
            </p>
          </div>
          <ul className="space-y-3">
            {areas.map((a) => (
              <li key={a} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4">
                <CheckCircle2 className="size-5 text-[var(--gold)] shrink-0 mt-0.5" />
                <span className="text-sm">{a}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="lg:col-span-3 rounded-3xl bg-card border border-border p-7 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl mb-2">Envie seu currículo</h2>
          <p className="text-sm text-muted-foreground mb-7">
            Preencha o formulário abaixo. Ao enviar, você será direcionado para o
            nosso WhatsApp com sua mensagem pronta — anexe seu currículo por lá.
          </p>

          {sent && (
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-[var(--gold-soft)]/20 border border-[var(--gold)] p-4 text-sm">
              <CheckCircle2 className="size-5 text-[var(--gold)]" />
              Mensagem encaminhada ao WhatsApp. Não esqueça de anexar seu currículo em PDF.
            </div>
          )}

          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Nome completo *" name="nome" required />
            <Field label="Idade" name="idade" type="number" />
            <Field label="Cidade onde mora" name="cidade" />
            <Field label="Área de interesse" name="area" placeholder="Ex.: Montador, motorista…" />
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1.5">Experiência anterior</label>
              <input
                name="experiencia"
                placeholder="Empresas, funções, tempo de atuação…"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1.5">Sobre você</label>
              <textarea
                name="mensagem"
                rows={5}
                placeholder="Conte um pouco sobre você, disponibilidade de horário, se possui CNH etc."
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold hover:opacity-95 transition"
            >
              <Send className="size-4" /> Enviar candidatura
            </button>
          </form>
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
