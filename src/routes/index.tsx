import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ShieldCheck, Clock,
  Award, Users, CheckCircle2, ArrowRight, Phone, MapPin,
} from "lucide-react";
import { ShuffleHero } from "@/components/site/ShuffleHero";
import { BRAND, waLink } from "@/lib/brand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Allanbick Locações | Locação para Eventos em Barreiras-BA" },
      { name: "description", content: "Locação profissional em Barreiras e região: sonorização, painel de LED, estrutura Q30, tendas, banheiros de luxo, mobiliário e disciplinadores. Faça seu orçamento." },
      { property: "og:title", content: "Allanbick Locações | Estrutura profissional para seu evento" },
      { property: "og:description", content: "Sonorização, painel de LED, estrutura Q30, tendas, banheiros de luxo e mobiliário para eventos em Barreiras-BA." },
      { property: "og:image", content: "https://res.cloudinary.com/duxxfpukn/image/upload/v1784674366/ChatGPT_Image_21_de_jul._de_2026_19_14_41_bdudcj.png" },
    ],
  }),
  component: HomePage,
});

// Grid unificado — todas as categorias com o mesmo peso visual,
// cada uma com uma foto real do portfólio (não ícone genérico).
const services = [
  {
    title: "Sonorização",
    desc: "Som potente, moderno e cristalino para shows, festas e eventos corporativos. Equipe técnica acompanha do início ao fim.",
    items: ["Line array profissional", "Iluminação cênica", "DJ e palco", "Técnicos especializados"],
    img: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060519/WhatsApp_Image_2026-08-06_at_20.47.53_2_qpgbkx.jpg",
  },
  {
    title: "Painel de LED",
    desc: "Telões de LED de alta resolução para palcos, shows, congressos e ativações. Impacto visual e imagem cristalina em qualquer distância.",
    items: ["Alta resolução P3/P4", "Modular indoor/outdoor", "Operação técnica inclusa", "Ideal para palcos e ativações"],
    img: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060514/WhatsApp_Image_2026-08-06_at_20.47.51_3_aelois.jpg",
  },
  {
    title: "Estrutura Q30",
    desc: "Estrutura para palcos de pequeno, médio e grande porte, com piso elevado e acabamento profissional. Base sólida para o seu show.",
    items: ["Palco pequeno e médio porte", "Piso elevado", "Montagem técnica", "Aprovado para grandes eventos"],
    img: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060501/WhatsApp_Image_2026-08-06_at_20.47.47_qczrwu.jpg",
  },
  {
    title: "Tendas 5x5 e 10x10",
    desc: "Cobertura segura e versátil para qualquer ambiente. Montagem profissional, lonas reforçadas e estrutura aprovada.",
    items: ["Tenda 5x5m", "Tenda 10x10m", "Tendas piramidais", "Fechamento lateral"],
    img: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060479/WhatsApp_Image_2026-08-06_at_20.47.59_3_znynpn.jpg",
  },
  {
    title: "Mobiliário para Eventos",
    desc: "Mesas, cadeiras, lounges, pufes e estrutura para buffet. O detalhe que faz seu evento se destacar.",
    items: ["Mesas e cadeiras", "Lounges e pufes", "Estrutura para buffet", "Mobiliário corporativo"],
    img: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060483/WhatsApp_Image_2026-08-06_at_20.48.00_4_kbregg.jpg",
  },
  {
    title: "Banheiros de Luxo",
    desc: "Sanitários sofisticados com acabamento premium para casamentos, formaturas e eventos corporativos.",
    items: ["Conforto e elegância", "Acabamento premium", "Higienização completa", "Ideal para casamentos"],
    img: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060530/WhatsApp_Image_2026-08-06_at_20.47.57_1_ttmnlj.jpg",
  },
  {
    title: "Banheiros Químicos",
    desc: "Solução prática e higiênica para obras, festivais, shows e eventos ao ar livre. Atendimento ágil e estrutura completa.",
    items: ["PNE disponível", "Manutenção inclusa", "Entrega rápida", "Diversos modelos"],
    img: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060533/WhatsApp_Image_2026-08-06_at_20.47.58_2_cqepcl.jpg",
  },
  {
    title: "Disciplinadores e Grades",
    desc: "Organização e segurança para shows, festivais e eventos de grande porte. Estrutura profissional aprovada.",
    items: ["Grades de proteção", "Pedestais e cordas", "Controle de fluxo", "Equipe coordenadora"],
    img: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060480/WhatsApp_Image_2026-08-06_at_20.47.59_2_jtjnb1.jpg",
  },
  {
    title: "Mobiliário Corporativo",
    desc: "Estrutura completa para eventos corporativos, congressos e ativações de marca.",
    items: ["Mesas e balcões", "Backdrops", "Painéis de identidade", "Setup completo"],
    img: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060480/WhatsApp_Image_2026-08-06_at_20.48.00_1_qaeow7.jpg",
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

      {/* Serviços — grid unificado, mesmo peso visual para todas as categorias */}
      <section id="servicos" className="relative bg-white text-neutral-900">
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "var(--gradient-gold)" }}
        />

        <div className="container-x py-16 md:py-24">
          <div className="max-w-3xl mb-10 md:mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-bold">
              Nossos Serviços
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-display text-3xl md:text-5xl mt-3 leading-[1.05] text-neutral-900"
            >
              Estrutura completa para{" "}
              <span className="text-[var(--gold)]">seu evento ou obra</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-neutral-600 mt-5 text-base md:text-lg leading-relaxed"
            >
              Da sonorização de grande porte ao mobiliário mais sofisticado:
              atendemos Barreiras e toda a região com equipamentos premium,
              equipe treinada e o padrão de qualidade que seu evento merece.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="group relative rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:border-transparent hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 right-5 font-display text-xl md:text-2xl text-white">
                    {s.title}
                  </h3>
                </div>

                <div className="p-6 md:p-7">
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-neutral-700">
                        <CheckCircle2 className="size-4 text-[var(--gold)] shrink-0" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={waLink("Olá! Gostaria de um orçamento para meu evento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-lg hover:-translate-y-0.5 transition"
              style={{ background: "var(--gradient-gold)" }}
            >
              Solicitar orçamento <ArrowRight className="size-4" />
            </a>
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
              A diferença está no <span className="text-[var(--gold)]">profissionalismo</span>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-bold">
              Eventos atendidos
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 text-neutral-900">
              Para cada <span className="text-[var(--gold)]">ocasião</span>
            </h2>
            <p className="text-neutral-600 mt-4">
              Da intimidade de um casamento ao porte de um grande festival.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {events.map((e, i) => (
              <motion.div
                key={e}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06, ease: "easeOut" }}
                className="group rounded-xl border border-neutral-200 bg-white px-5 py-6 text-center transition-all duration-300 hover:border-[var(--gold)] hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mx-auto mb-3 h-px w-8 bg-neutral-200 transition-colors group-hover:bg-[var(--gold)]" />
                <span className="font-display text-base text-neutral-800">{e}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] p-10 md:p-16 text-center">
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: "var(--gradient-gold)" }}
          />
          <div className="relative z-10 max-w-2xl mx-auto text-foreground">
            <span className="text-xs uppercase tracking-[0.28em] text-[var(--gold)] font-semibold">
              Vamos começar
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-4 mb-4 leading-tight">
              Pronto para elevar o padrão do seu evento?
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Faça seu orçamento agora e descubra a estrutura ideal para
              transformar sua celebração em uma experiência inesquecível.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={waLink("Olá! Gostaria de fazer um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm px-8 py-4 font-semibold text-neutral-900 bg-[var(--gold)] hover:bg-[var(--gold)]/90 transition-colors"
              >
                <Phone className="size-4" /> Orçamento no WhatsApp
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-sm px-8 py-4 font-semibold border border-white/25 text-white hover:border-white/50 transition-colors"
              >
                <MapPin className="size-4" /> Página de contato
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/50 uppercase tracking-wide">
              Atendemos Barreiras-BA e região · {BRAND.phone}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}