import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { waLink } from "@/lib/brand";
import { Sparkles } from "lucide-react";

const squareData = [
  { id: 1, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80" },
  { id: 2, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80" },
  { id: 3, src: "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=800&q=80" },
  { id: 4, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80" },
  { id: 5, src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80" },
  { id: 6, src: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&w=800&q=80" },
  { id: 7, src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80" },
  { id: 8, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80" },
  { id: 9, src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80" },
  { id: 10, src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80" },
  { id: 11, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80" },
  { id: 12, src: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800&q=80" },
  { id: 13, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" },
  { id: 14, src: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=800&q=80" },
  { id: 15, src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80" },
  { id: 16, src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80" },
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

const generateSquares = () =>
  shuffle(squareData).map((sq) => (
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
    <section className="container-x py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
      <div>
        <span className="inline-flex items-center gap-2 mb-5 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-gradient-gold">
          <Sparkles className="size-4 text-[var(--gold)]" />
          Locação premium em Barreiras-BA
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-foreground">
          Estrutura profissional para seu{" "}
          <span className="text-gradient-gold">evento ou obra</span>.
        </h1>
        <p className="text-base md:text-lg text-muted-foreground my-6 leading-relaxed max-w-xl">
          Banheiros de luxo, tendas, sonorização, mobiliário e disciplinadores
          para eventos de todos os portes. Qualidade, segurança e agilidade do
          início ao fim.
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
            className="inline-flex items-center gap-2 rounded-full border-2 border-border text-foreground font-semibold py-3 px-7 hover:border-primary hover:text-primary transition"
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
    </section>
  );
};
