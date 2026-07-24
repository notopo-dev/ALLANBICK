import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Droplets, Tent, Volume2, Sofa, ShieldCheck, Sparkles, Clock,
  Award, Users, CheckCircle2, ArrowRight, Phone, MapPin, Star, MonitorPlay,
} from "lucide-react";
import { ShuffleHero } from "@/components/site/ShuffleHero";
import { BRAND, waLink } from "@/lib/brand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Allanbick Locações | Locação para Eventos em Barreiras-BA" },
      { name: "description", content: "Locação profissional em Barreiras e região: banheiros de luxo, tendas 5x5 e 10x10, sonorização, painel de LED, mobiliário e disciplinadores. Faça seu orçamento." },
      { property: "og:title", content: "Allanbick Locações | Estrutura profissional para seu evento" },
      { property: "og:description", content: "Banheiros de luxo, tendas, sonorização, painel de LED e mobiliário para eventos em Barreiras-BA." },
      { property: "og:image", content: "https://res.cloudinary.com/duxxfpukn/image/upload/v1784674366/ChatGPT_Image_21_de_jul._de_2026_19_14_41_bdudcj.png" },
    ],
  }),
  component: HomePage,
});

const otherServices = [
  {
    icon: Droplets,
    title: "Banheiros Químicos",
    desc: "Solução prática e higiênica para obras, festivais, shows e eventos ao ar livre. Atendimento ágil e estrutura completa.",
    items: ["PNE disponível", "Manutenção inclusa", "Entrega rápida", "Diversos modelos"],
  },
  {
    icon: Tent,
    title: "Tendas 5x5 e 10x10",
    desc: "Cobertura segura e versátil para qualquer ambiente. Montagem profissional, lonas reforçadas e estrutura aprovada.",
    items: ["Tenda 5x5m", "Tenda 10x10m", "Tendas piramidais", "Fechamento lateral"],
  },
  {
    icon: Volume2,
    title: "Sonorização",
    desc: "Som potente, moderno e cristalino para shows, festas e eventos corporativos. Equipe técnica acompanha do início ao fim.",
    items: ["Line array profissional", "Iluminação cênica", "DJ e palco", "Técnicos especializados"],
  },
  {
    icon: MonitorPlay,
    title: "Painel de LED",
    desc: "Telões de LED de alta resolução para palcos, shows, congressos e ativações. Impacto visual e imagem cristalina em qualquer distância.",
    items: ["Alta resolução P3/P4", "Modular indoor/outdoor", "Operação técnica inclusa", "Ideal para palcos e ativações"],
  },
  {
    icon: Sofa,
    title: "Mobiliário para Eventos",
    desc: "Mesas, cadeiras, lounges, pufes e decoração. O detalhe que faz seu evento se destacar.",
    items: ["Mesas e cadeiras", "Lounges e pufes", "Bistrôs", "Toalhas e capas"],
  },
  {
    icon: ShieldCheck,
    title: "Disciplinadores",
    desc: "Organização e segurança para shows, festivais e eventos de grande porte. Estrutura profissional aprovada.",
    items: ["Grades de proteção", "Pedestais e cordas", "Controle de fluxo", "Equipe coordenadora"],
  },
];

const events = [
  "Casamentos", "Formaturas", "Shows e festivais",
  "Eventos corporativos", "Feiras e exposições", "Aniversários",
  "Obras e canteiros", "Festas privadas",
];

const reasons = [
  { icon: Award, title: "Qualidade certificada", desc: "Equipamentos modernos, higienizados e em perfeito estado de conservação." },
  { icon: ShieldCheck, title: "Segurança em primeiro lugar", desc: "Estrutura aprovada, montagem profissional e equipe técnica dedicada." },
  { icon: Clock, title: "Agilidade no atendimento", desc: "Orçamento rápido, entrega pontual e suporte do início ao fim do evento." },
  { icon: Users, title: "Atendimento personalizado", desc: "Cada evento é único — planejamos cada detalhe junto com você." },
];

function HomePage() {
  return (
    <div>
      <ShuffleHero />

      {/* Unified Services Section — light background */}
      <section id="servicos" className="relative bg-white text-neutral-900">
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "var(--gradient-gold)" }}
        />

        {/* Featured: Banheiros de Luxo with video */}
        <div className="container-x pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="max-w-3xl mb-10 md:mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-bold">
              Nossos Serviços
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 leading-[1.05] text-neutral-900">
              Seu evento merece o melhor em{" "}
              <span className="text-gradient-gold">cada detalhe</span>
            </h2>
            <p className="text-neutral-600 mt-5 text-base md:text-lg leading-relaxed">
              Do serviço mais sofisticado à estrutura completa: atendemos
              Barreiras e toda a região com equipamentos premium, equipe treinada
              e o padrão de qualidade que seu evento merece.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden ring-1 ring-neutral-200 shadow-2xl order-2 lg:order-1 min-h-[360px]"
            >
              <video
                src={BRAND.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full min-h-[360px] md:min-h-[520px] object-cover"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2 text-white">
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-bold px-3 py-1.5 rounded-full"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Sparkles className="size-3.5" /> Destaque
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 flex flex-col justify-center"
            >
              <div className="inline-flex items-center justify-center size-14 rounded-2xl text-white mb-5" style={{ background: "var(--gradient-gold)" }}>
                <Sparkles className="size-7" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl leading-tight text-neutral-900 mb-4">
                Banheiros de Luxo
              </h3>
              <p className="text-neutral-600 leading-relaxed text-base md:text-lg mb-6">
                Sanitários sofisticados com acabamento premium para casamentos,
                formaturas e eventos corporativos. Com os banheiros de luxo da
                Allanbick, você garante uma experiência completa para seus
                convidados — do conforto à elegância.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Conforto", "Elegância", "Exclusividade", "Modernidade", "Sofisticação", "Higiene"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="size-4 text-[var(--gold)] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={waLink("Olá! Quero saber sobre os banheiros de luxo.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white shadow-lg hover:-translate-y-0.5 transition"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  Solicitar agora <ArrowRight className="size-4" />
                </a>
                <a
                  href="#outros-servicos"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold border-2 border-neutral-200 text-neutral-800 hover:border-neutral-900 transition"
                >
                  Ver todos os serviços
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="container-x">
          <div className="h-px bg-neutral-200" />
        </div>

        {/* Other services grid */}
        <div id="outros-servicos" className="container-x py-16 md:py-24">
          <div className="max-w-3xl mb-10 md:mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-bold">
              Estrutura completa
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl mt-3 leading-[1.05] uppercase text-neutral-900">
              Demais serviços e locações para seu evento em{" "}
              <span className="text-gradient-gold">um só lugar</span>
            </h2>
            <p className="text-neutral-600 mt-5 text-base md:text-lg">
              De banheiros químicos a painéis de LED — tudo o que seu evento
              precisa, com montagem profissional e suporte do início ao fim.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {otherServices.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-neutral-200 bg-white p-6 md:p-7 hover:border-transparent hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl overflow-hidden"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "var(--gradient-gold)" }}
                />
                <div className="inline-flex items-center justify-center size-14 rounded-xl bg-neutral-900 text-white mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform" style={{ backgroundImage: "linear-gradient(135deg, #16181C, #22252B)" }}>
                  <s.icon className="size-7 text-[var(--gold)]" />
                </div>
                <h3 className="font-display text-xl md:text-2xl mb-2 text-neutral-900">{s.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="size-4 text-[var(--gold)] shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-[var(--surface)] py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold">
              Por que escolher a Allanbick
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight">
              A diferença está no <span className="text-gradient-gold">profissionalismo</span>
            </h2>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              Há mais de uma década transformando eventos em Barreiras e região.
              Combinamos equipamentos de ponta com uma equipe treinada para
              entregar mais do que estrutura — entregamos tranquilidade.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl bg-card p-6 border border-border"
              >
                <r.icon className="size-7 text-[var(--gold)] mb-3" />
                <h3 className="font-semibold text-lg mb-1.5">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events served — white */}
      <section className="bg-neutral-50 text-neutral-900 py-20 md:py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-bold">
              Eventos atendidos
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 text-neutral-900">
              Para cada <span className="text-gradient-gold">ocasião</span>
            </h2>
            <p className="text-neutral-600 mt-4">
              Da intimidade de um casamento ao porte de um grande festival.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {events.map((e) => (
              <div
                key={e}
                className="rounded-xl border border-neutral-200 bg-white p-5 text-center hover:border-[var(--gold)] hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                <Star className="size-5 mx-auto mb-2 text-[var(--gold)]" />
                <span className="font-medium text-sm text-neutral-800">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 md:py-28">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
          style={{ background: "var(--gradient-luxury)" }}
        >
          <div
            className="absolute -top-32 -right-32 size-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--gradient-gold)" }}
          />
          <div className="relative z-10 max-w-2xl mx-auto text-foreground">
            <Sparkles className="size-10 mx-auto text-[var(--gold)] mb-5" />
            <h2 className="font-display text-3xl md:text-5xl mb-4 leading-tight">
              Pronto para elevar o padrão do seu evento?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Faça seu orçamento agora e descubra a estrutura ideal para
              transformar sua celebração em uma experiência inesquecível.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={waLink("Olá! Gostaria de fazer um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Phone className="size-4" /> Orçamento no WhatsApp
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition"
              >
                <MapPin className="size-4" /> Página de contato
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/60">
              📍 Atendemos Barreiras-BA e região · 📞 {BRAND.phone}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
