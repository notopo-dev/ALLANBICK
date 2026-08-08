import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { waLink } from "@/lib/brand";
import { Sparkles } from "lucide-react";

const HERO_BG =
  "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060489/WhatsApp_Image_2026-08-06_at_20.48.02_2_rzvzww.jpg";

// Portfólio balanceado por categoria — evita que uma única categoria
// (ex: banheiros) domine visualmente o grid aleatório.
const squareData = [
  // Som / painel de LED — maior frota, prioridade visual
  { id: 1, category: "Sonorização", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060519/WhatsApp_Image_2026-08-06_at_20.47.53_2_qpgbkx.jpg" },
  { id: 2, category: "Sonorização", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060524/WhatsApp_Image_2026-08-06_at_20.47.54_2_tujeim.jpg" },
  { id: 3, category: "Telão", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060514/WhatsApp_Image_2026-08-06_at_20.47.51_3_aelois.jpg" },

  // Estrutura Q30 / palco
  { id: 4, category: "Estrutura Q30", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060501/WhatsApp_Image_2026-08-06_at_20.47.47_qczrwu.jpg" },
  { id: 5, category: "Estrutura Q30", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060510/WhatsApp_Image_2026-08-06_at_20.47.50_2_a7qmmh.jpg" },

  // Tenda
  { id: 6, category: "Tenda", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060479/WhatsApp_Image_2026-08-06_at_20.47.59_3_znynpn.jpg" },

  // Mobiliário para eventos / corporativo / buffet
  { id: 7, category: "Mobiliário", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060483/WhatsApp_Image_2026-08-06_at_20.48.00_4_kbregg.jpg" },
  { id: 8, category: "Mobiliário corporativo", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060480/WhatsApp_Image_2026-08-06_at_20.48.00_1_qaeow7.jpg" },

  // Grades / disciplinadores
  { id: 9, category: "Grades", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060480/WhatsApp_Image_2026-08-06_at_20.47.59_2_jtjnb1.jpg" },

  // Cabines sanitárias (químico e luxo) — presentes, mas sem dominar a proporção
  { id: 10, category: "Cabine de luxo", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786152498/IMG_2393_ahhvpe.heic" },
  { id: 11, category: "Cabine química", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060496/WhatsApp_Image_2026-08-06_at_20.48.04_2_l0k8vh.jpg" },

  // Demais estruturas / mobiliário do portfólio original
  { id: 12, category: "Estrutura", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786152487/WhatsApp_Image_2026-08-07_at_11.59.31_rf83fr.jpg" },
  { id: 13, category: "Estrutura", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060503/WhatsApp_Image_2026-08-06_at_20.47.48_2_otgv5q.jpg" },
  { id: 14, category: "Estrutura", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060500/WhatsApp_Image_2026-08-06_at_20.47.47_3_ezawj3.jpg" },
  { id: 15, category: "Estrutura", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060499/WhatsApp_Image_2026-08-06_at_20.47.47_2_llkgwp.jpg" },
  { id: 16, category: "Estrutura", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060499/WhatsApp_Image_2026-08-06_at_20.47.47_1_y8fawt.jpg" },
  { id: 17, category: "Estrutura", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060492/WhatsApp_Image_2026-08-06_at_20.48.03_2_uyfgmi.jpg" },
  { id: 18, category: "Estrutura", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786060490/WhatsApp_Image_2026-08-06_at_20.48.02_3_yise7z.jpg" },
  { id: 19, category: "Estrutura", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786152489/WhatsApp_Image_2026-08-07_at_11.58.30_mplq5l.jpg" },
  { id: 20, category: "Estrutura", src: "https://res.cloudinary.com/duxxfpukn/image/upload/v1786152496/IMG_2389_nayckx.heic" },
];

const shuffle = <T,>(array: T[]): T[] => {
  const arr = [...array];
  let i = arr.length;
  while (i !== 0) {
    const r = Math.floor(Math.random() * i);
    i--;
    [arr[i], arr[r]] = [arr[r], arr[i]];
  }
  return arr;
};

// Sorteia 16 posições do grid a partir do portfólio completo, garantindo
// que no máximo 2 imagens da mesma categoria apareçam por rodada — evita
// que "cabine de luxo" (ou qualquer categoria) domine visualmente o grid.
const pickBalanced = (pool: typeof squareData, count: number) => {
  const shuffled = shuffle(pool);
  const picked: typeof squareData = [];
  const countByCategory = new Map<string, number>();

  for (const item of shuffled) {
    const used = countByCategory.get(item.category) ?? 0;
    if (used >= 2) continue;
    picked.push(item);
    countByCategory.set(item.category, used + 1);
    if (picked.length === count) break;
  }

  // Se sobrar espaço (pool pequeno ou categorias esgotadas), completa sem a trava
  if (picked.length < count) {
    for (const item of shuffled) {
      if (picked.length === count) break;
      if (!picked.includes(item)) picked.push(item);
    }
  }

  return shuffle(picked);
};

const generateSquares = () =>
  pickBalanced(squareData, 16).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-md"
      style={{ backgroundImage: `url(${sq.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
    />
  ));

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    const tick = () => {
      setSquares(generateSquares());
      timeoutRef.current = setTimeout(tick, 3500);
    };
    timeoutRef.current = setTimeout(tick, 3500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[420px] md:h-[500px] gap-1.5">
      {squares.map((sq) => sq)}
    </div>
  );
};

export const ShuffleHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Imagem de fundo — visível, com gradiente direcional para manter o texto legível */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradiente: mais escuro/opaco onde fica o texto (esquerda), transparente onde fica o grid (direita) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40 md:from-background md:via-background/75 md:to-background/20"
      />
      {/* Reforço sutil no topo/base para integrar com o resto da página */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60"
      />

      <div className="container-x relative py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
        <div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-foreground drop-shadow-sm">
            Estrutura profissional para seu{" "}
            <span className="text-gradient-gold">evento ou obra</span>.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground my-6 leading-relaxed max-w-xl">
            Painéis de LED, sonorização de grande porte, estrutura Q30, tendas
            e mobiliário completo para eventos de todos os portes. Qualidade,
            segurança e agilidade do início ao fim.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink("Olá! Gostaria de um orçamento para meu evento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold py-3.5 px-7 shadow-[var(--shadow-luxury)] hover:-translate-y-0.5 transition"
            >
              Solicitar orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border-2 border-border text-foreground font-semibold py-3 px-7 hover:border-primary hover:text-primary transition backdrop-blur-sm"
            >
              Ver serviços
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
            <div>
              <div className="text-2xl font-display text-foreground">+500</div>
              eventos atendidos
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-display text-foreground">10+</div>
              anos de experiência
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-2xl font-display text-foreground">100%</div>
              cliente satisfeito
            </div>
          </div>
        </div>
        <ShuffleGrid />
      </div>
    </section>
  );
};