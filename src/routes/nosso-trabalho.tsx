import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/brand";

export const Route = createFileRoute("/nosso-trabalho")({
  head: () => ({
    meta: [
      { title: "Nosso Trabalho | Allanbick Locações e Serviços" },
      { name: "description", content: "Conheça os trabalhos realizados pela Allanbick Locações em Barreiras-BA: casamentos, formaturas, shows, eventos corporativos e obras com banheiros de luxo, tendas e sonorização." },
      { property: "og:title", content: "Nosso Trabalho — Allanbick Locações" },
      { property: "og:description", content: "Galeria de eventos atendidos com estrutura profissional em Barreiras e região." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80" },
    ],
  }),
  component: NossoTrabalhoPage,
});

const gallery = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80", title: "Casamentos", tag: "Banheiros de luxo" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80", title: "Eventos ao ar livre", tag: "Tendas 10x10" },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80", title: "Shows e festivais", tag: "Sonorização" },
  { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80", title: "Formaturas", tag: "Mobiliário premium" },
  { src: "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=900&q=80", title: "Eventos corporativos", tag: "Tendas 5x5" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80", title: "Festas privadas", tag: "Estrutura completa" },
  { src: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&w=900&q=80", title: "Festivais", tag: "Disciplinadores" },
  { src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=900&q=80", title: "Feiras e exposições", tag: "Mobiliário" },
  { src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80", title: "Eventos sociais", tag: "Banheiros químicos" },
];

const stats = [
  { n: "+500", l: "Eventos realizados" },
  { n: "10+", l: "Anos de mercado" },
  { n: "100%", l: "Clientes satisfeitos" },
  { n: "24/7", l: "Suporte durante o evento" },
];

const testimonials = [
  { name: "Mariana S.", role: "Noiva — Casamento 2025", text: "Os banheiros de luxo da Allanbick foram o detalhe que arrancou elogios dos convidados. Atendimento impecável do começo ao fim." },
  { name: "Carlos R.", role: "Produtor de eventos", text: "Trabalho com a Allanbick há anos. Pontualidade, equipamento sempre novo e equipe extremamente profissional. Recomendo de olhos fechados." },
  { name: "Letícia M.", role: "Coordenação Formatura", text: "Tenda, sonorização e mobiliário — tudo perfeito. A estrutura impressionou todos os formandos e familiares." },
];

function NossoTrabalhoPage() {
  return (
    <div>
      {/* Hero */}
      <section className="container-x py-16 md:py-24 text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold">
          Portfólio
        </span>
        <h1 className="font-display text-4xl md:text-6xl mt-3 leading-tight">
          Eventos que se tornaram <span className="text-gradient-gold">inesquecíveis</span>
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
          Cada estrutura montada conta uma história. Conheça parte do que já
          realizamos em Barreiras e região — casamentos, festivais, eventos
          corporativos e obras de grande porte.
        </p>
      </section>

      {/* Stats */}
      <section className="container-x mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.l}
              className="rounded-2xl bg-[var(--ink)] text-foreground p-6 text-center"
            >
              <div className="font-display text-3xl md:text-4xl text-gradient-gold">{s.n}</div>
              <div className="text-xs uppercase tracking-wider text-white/65 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((g, i) => (
            <motion.figure
              key={g.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <img
                src={g.src}
                alt={g.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold-soft)] font-semibold">
                  {g.tag}
                </span>
                <h3 className="font-display text-2xl mt-1">{g.title}</h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* What we deliver */}
      <section className="bg-[var(--surface)] py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold">
              O que entregamos
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight">
              Mais que estrutura — <span className="text-gradient-gold">experiência</span>
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Cada projeto recebe atenção dedicada do nosso time. Da consulta
              inicial à desmontagem, garantimos que tudo aconteça conforme o
              planejado.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Consultoria personalizada para definir a estrutura ideal",
              "Equipamentos higienizados, modernos e bem conservados",
              "Equipe técnica especializada na montagem e operação",
              "Entrega e retirada pontual, sem atrasos",
              "Suporte 24/7 durante toda a duração do evento",
              "Atendimento humanizado e foco total na satisfação",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <CheckCircle2 className="size-5 text-[var(--gold)] shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-3">
            Quem viveu, <span className="text-gradient-gold">recomenda</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-border bg-card p-7">
              <div className="text-[var(--gold)] text-3xl font-display leading-none mb-3">"</div>
              <p className="text-foreground/85 leading-relaxed italic">{t.text}</p>
              <footer className="mt-5 pt-5 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20 md:pb-24">
        <div className="rounded-3xl bg-[var(--ink)] p-10 md:p-14 text-center text-foreground">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            O próximo grande evento pode ser o <span className="text-gradient-gold">seu</span>
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-7">
            Conte para nós a sua ideia. Preparamos um orçamento sob medida em
            poucas horas.
          </p>
          <a
            href={waLink("Olá! Vi a página de trabalhos e gostaria de um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white"
            style={{ background: "var(--gradient-gold)" }}
          >
            Solicitar orçamento <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
