import { MotionConfig, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Bot,
  Box,
  ChartColumn,
  Check,
  CheckCircle2,
  ClipboardList,
  Cpu,
  GraduationCap,
  Mail,
  MessageCircle,
  Monitor,
  Presentation,
  Route,
  ScanEye,
  Send,
  Trophy,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { Mascot, MascotHead } from "./Mascot";

const WHATSAPP_URL = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`;

type Tone = "cyan" | "yellow" | "purple" | "green";

// --- BASE ---

const Eyebrow = ({ children, tone = "cyan" }: { children: React.ReactNode; tone?: Tone }) => {
  const tones = {
    cyan: "bg-cyan-tint text-cyan-text",
    yellow: "bg-yellow-tint text-yellow-text",
    purple: "bg-purple-tint text-purple-shadow",
    green: "bg-green-tint text-green-text",
  };
  return <span className={`cx-eyebrow ${tones[tone]}`}>{children}</span>;
};

const SectionTitle = ({ eyebrow, tone, title, lead }: { eyebrow: string; tone?: Tone; title: React.ReactNode; lead?: string }) => (
  <div className="mb-10 max-w-2xl lg:mb-14">
    <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
    <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] text-ink lg:text-[44px]">{title}</h2>
    {lead && <p className="mt-4 text-lg font-medium leading-relaxed text-muted">{lead}</p>}
  </div>
);

const CheckItem = ({ children, tone = "bg-green-tint text-green-text", className = "" }: { children: React.ReactNode; tone?: string; className?: string }) => (
  <li className={`flex items-start gap-3 text-[15px] font-semibold leading-snug text-ink ${className}`}>
    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${tone}`}>
      <Check className="h-3.5 w-3.5" strokeWidth={3} />
    </span>
    <span>{children}</span>
  </li>
);

// Formas decorativas de fundo, como as do Hub (cx-decor).
const Decor = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <span className="absolute -left-20 top-[46%] h-56 w-56 rotate-[18deg] rounded-[52px] bg-cyan-tint" />
    <span className="absolute -right-56 top-24 h-72 w-72 rounded-full bg-[#FFF2C2] sm:-right-24" />
    <span className="absolute -bottom-28 right-[30%] h-56 w-56 -rotate-[14deg] rounded-[48px] bg-[#EBDDFB] opacity-70" />
    <span className="absolute left-[46%] top-28 hidden h-16 w-16 rotate-[14deg] rounded-[18px] bg-green-tint lg:block" />
    <span className="absolute left-[56%] top-48 hidden h-4 w-4 rounded-full bg-yellow lg:block" />  </div>
);

// --- HEADER ---

const nav = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#trilha", label: "Trilha" },
  { href: "#parceria", label: "Parceria" },
  { href: "#equipe", label: "Equipe" },
];

const Header = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-line bg-white/95 backdrop-blur">
    <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
      <a href="#hero" className="flex items-center gap-2.5" aria-label="CodeSteam, início">
        <MascotHead className="h-10 w-10" />
        <span className="font-display text-[22px] font-semibold tracking-tight text-ink">
          Code<span className="text-cyan-fill">Steam</span>
        </span>
      </a>
      <nav className="hidden items-center gap-7 text-[15px] font-bold text-muted lg:flex">
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="transition-colors hover:text-cyan-fill">
            {n.label}
          </a>
        ))}
        <a href="#contato" className="cx-btn !min-h-[44px] !px-5 !text-[16px]">Agendar conversa</a>
      </nav>
      <a href="#contato" className="cx-btn !min-h-[40px] !px-4 !text-[15px] lg:hidden">Agendar conversa</a>
    </div>
  </header>
);

// --- HERO ---

const Hero = () => (
  <section id="hero" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:pb-28 lg:pt-40">
    <Decor />
    <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <Eyebrow>Robótica educacional · STEAM</Eyebrow>
        <h1 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[60px]">
          Robótica, programação e IA integradas ao{" "}
          <span className="relative isolate inline-block text-cyan-fill">
            currículo escolar.
            <span className="absolute -bottom-0.5 left-0 -z-10 h-3 w-full rounded-full bg-yellow/60 lg:h-4" aria-hidden="true" />
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-muted lg:text-xl">
          Uma solução completa e personalizável, sem necessidade de laboratório dedicado: o robô X1, a plataforma CUBYX, roteiros alinhados à BNCC e formação para os professores.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a href="#contato" className="cx-btn">
            Agendar uma conversa <ArrowRight className="h-5 w-5" strokeWidth={2.4} />
          </a>
          <a href="#plataforma" className="cx-btn cx-btn-white">
            Conhecer a plataforma
          </a>
        </div>
        <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-[15px] font-bold text-ink">
          {["Alinhado à BNCC", "Sem laboratório dedicado", "Formação docente inclusa"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-green-tint text-green-text">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="relative mx-auto w-full max-w-[560px]"
      >
        <div className="cx-card overflow-hidden p-2.5">
          <img src="/assets/demo_image.png" alt="Robô sobre a mesa ao lado de um notebook com o editor de blocos aberto" className="h-auto w-full rounded-[20px]" />
        </div>
      </motion.div>
    </div>
  </section>
);

// --- O DESAFIO DA ESCOLA ---

const challenges = [
  { title: "Currículo", desc: "Integrar a BNCC em aulas envolventes que funcionem na grade escolar." },
  { title: "Professores", desc: "Dar segurança para aplicar atividades mesmo sem experiência prévia em robótica." },
  { title: "Infraestrutura", desc: "Usar salas existentes, sem laboratório exclusivo nem kits de alto custo de aquisição e manutenção." },
  { title: "Continuidade", desc: "Renovar conteúdos e garantir suporte e equipamentos durante todo o programa." },
];

const Challenge = () => (
  <section className="px-4 py-20 sm:px-6 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="O desafio da escola" tone="yellow" title="Educação digital precisa caber no currículo, na equipe e no orçamento." />
      <div className="grid gap-5 lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col justify-between rounded-cx-lg bg-ink p-8 text-white shadow-[0_6px_0_#121A2E] lg:p-10">
          <div>
            <p className="text-lg font-bold text-[#C9D3E2]">Apenas</p>
            <p className="font-display text-[88px] font-semibold leading-none text-cyan lg:text-[112px]">22%</p>
            <p className="mt-4 text-xl font-semibold leading-snug">das escolas particulares ofereceram formação docente em programação e robótica.</p>
          </div>
          <p className="mt-8 text-[15px] font-semibold italic text-[#A3AFC2]">E formação isolada não garante prática contínua com os alunos.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {challenges.map((c, i) => (
            <article key={c.title} className="cx-card p-6 lg:p-7">
              <span className="font-display text-[22px] font-semibold text-cyan-fill">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-display text-[23px] font-semibold leading-tight text-ink">{c.title}</h3>
              <p className="mt-2 text-[15px] font-semibold leading-relaxed text-muted">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
      <p className="mt-6 text-[13px] font-semibold text-muted">Fonte: TIC Educação 2023 (Cetic.br).</p>
    </div>
  </section>
);

// --- COMO FUNCIONA NA ESCOLA ---

const classSteps = [
  { icon: ClipboardList, tile: "bg-yellow text-ink", title: "Roteiro", desc: "O professor acessa o plano de aula, os materiais e as videoaulas." },
  { icon: Monitor, tile: "bg-purple text-white", title: "Simulação", desc: "Os alunos testam a lógica em simulação realista antes de usar o equipamento." },
  { icon: Route, tile: "bg-cyan-fill text-white", title: "Prática com o robô", desc: "Cada dupla planeja, programa, executa, testa e corrige com base nos resultados reais." },
  { icon: ChartColumn, tile: "bg-green text-white", title: "Acompanhamento", desc: "A plataforma registra as atividades e o progresso da turma." },
];

const classStats = [
  { value: "1 robô", label: "por dupla de alunos" },
  { value: "10 roteiros", label: "20 aulas de 50 min" },
  { value: "Blocos e Python", label: "progressão de aprendizado" },
  { value: "Kit móvel", label: "trilhas e tablet, usado entre turmas e turnos" },
];

const HowItWorks = () => (
  <section id="como-funciona" className="bg-white px-4 py-20 sm:px-6 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Como funciona na escola" title="Uma sequência simples, do planejamento ao acompanhamento." />
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {classSteps.map((s, i) => {
          const Icon = s.icon;
          return (
            <li key={s.title} className="relative">
              <div className="flex items-center gap-3">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${s.tile}`}>
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <span className="font-display text-[15px] font-semibold uppercase tracking-[0.08em] text-muted">Passo {i + 1}</span>
                {i < classSteps.length - 1 && <span className="ml-2 hidden h-[2px] flex-1 rounded bg-line lg:block" aria-hidden="true" />}
              </div>
              <h3 className="mt-5 font-display text-[23px] font-semibold leading-tight text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] font-semibold leading-relaxed text-muted">{s.desc}</p>
            </li>
          );
        })}
      </ol>
      <div className="mt-14 grid gap-6 rounded-cx-lg bg-page p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
        {classStats.map((s) => (
          <div key={s.value}>
            <p className="font-display text-[28px] font-semibold leading-tight text-ink">{s.value}</p>
            <p className="mt-1 text-[15px] font-semibold text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- STEAM DENTRO DE CADA DESAFIO ---

const steam = [
  { letter: "S", color: "bg-cyan-fill text-white", title: "Ciências", desc: "Sensores e percepção do ambiente" },
  { letter: "T", color: "bg-purple text-white", title: "Tecnologia", desc: "Algoritmos, depuração e análise de dados" },
  { letter: "E", color: "bg-green text-white", title: "Engenharia", desc: "Teste, correção e melhoria da solução" },
  { letter: "A", color: "bg-orange text-ink", title: "Artes e Linguagens", desc: "Cenário, criatividade e apresentação das escolhas" },
  { letter: "M", color: "bg-yellow text-ink", title: "Matemática", desc: "Distância, velocidade, tempo e ângulos" },
];

const Steam = () => (
  <section className="px-4 py-20 sm:px-6 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="STEAM integrado às disciplinas"
        tone="purple"
        title="A robótica conecta as disciplinas a um problema concreto."
        lead="Os desafios ligam a programação a Ciências, Matemática, Engenharia, Artes e outras áreas do currículo."
      />
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="cx-card overflow-hidden">
          <img src="/assets/students_image.png" alt="Três alunos sorrindo ao redor do robô durante uma atividade" className="aspect-[16/10] w-full object-cover" />
          <div className="p-6 lg:p-8">
            <span className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-cyan-text">Desafio 04</span>
            <h3 className="mt-2 font-display text-[28px] font-semibold leading-tight text-ink">Desvio de obstáculos</h3>
            <p className="mt-3 text-[16px] font-semibold leading-relaxed text-muted">
              A dupla mede o cenário, programa o percurso, testa alternativas e analisa os dados produzidos pelo robô. O mesmo desafio gera evidências de raciocínio, colaboração e comunicação.
            </p>
          </div>
        </div>
        <ul className="space-y-5">
          {steam.map((s) => (
            <li key={s.letter} className="flex items-center gap-5">
              <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl font-display text-[26px] font-semibold ${s.color}`}>{s.letter}</span>
              <div>
                <h3 className="font-display text-[21px] font-semibold leading-tight text-ink">{s.title}</h3>
                <p className="text-[15px] font-semibold text-muted">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

// --- PLATAFORMA: BLOCOS E PYTHON (cartões inspirados no Hub) ---

// Nível em barrinhas (1 a 3), no lugar das estrelas do Hub.
const LevelBars = ({ level, color }: { level: number; color: string }) => (
  <svg viewBox="0 0 18 14" className="h-3.5 w-[18px]" aria-hidden="true">
    {[0, 1, 2].map((i) => (
      <rect key={i} x={i * 6} y={8 - i * 4} width="4" height={6 + i * 4} rx="1.5" fill={i < level ? color : "#E1E8F0"} />
    ))}
  </svg>
);

// Contorno de um bloco de encaixe: entalhe em cima e dente embaixo.
const blockPath = (x: number, y: number, w: number, h: number, hat = false) => {
  const r = 6;
  const top = hat
    ? `M${x} ${y + 14} Q${x} ${y} ${x + 22} ${y} H${x + w - r} Q${x + w} ${y} ${x + w} ${y + r}`
    : `M${x} ${y + r} Q${x} ${y} ${x + r} ${y} H${x + 12} L${x + 16} ${y + 5} H${x + 28} L${x + 32} ${y} H${x + w - r} Q${x + w} ${y} ${x + w} ${y + r}`;
  return `${top} V${y + h - r} Q${x + w} ${y + h} ${x + w - r} ${y + h} H${x + 32} L${x + 28} ${y + h + 5} H${x + 16} L${x + 12} ${y + h} H${x + r} Q${x} ${y + h} ${x} ${y + h - r} Z`;
};

const BlockyArt = () => (
  <svg viewBox="0 0 220 140" className="h-[82%] w-auto max-w-[86%]" aria-hidden="true">
    {/* Pilha montada: evento, ação com valor e ação. */}
    <path d={blockPath(30, 22, 112, 28, true)} fill="#FFC800" stroke="#C99A00" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M42 31 L50 36 L42 41 Z" fill="#1F2A44" />
    <rect x="58" y="31" width="58" height="10" rx="5" fill="#1F2A44" opacity="0.2" />
    <path d={blockPath(30, 50, 148, 28)} fill="#0A8FC7" stroke="#076A94" strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="44" y="59" width="64" height="10" rx="5" fill="#FFFFFF" opacity="0.7" />
    <rect x="128" y="56" width="38" height="16" rx="8" fill="#FFFFFF" />
    <rect x="136" y="61" width="22" height="6" rx="3" fill="#0A8FC7" opacity="0.6" />
    <path d={blockPath(30, 78, 96, 28)} fill="#34A300" stroke="#257500" strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="44" y="87" width="46" height="10" rx="5" fill="#FFFFFF" opacity="0.7" />
    {/* Bloco sendo arrastado, com o cursor. */}
    <g transform="rotate(-8 176 112)">
      <path d={blockPath(146, 100, 62, 24)} fill="#8E47D9" stroke="#6A2FB0" strokeWidth="2.5" strokeLinejoin="round" opacity="0.95" />
      <rect x="158" y="108" width="34" height="8" rx="4" fill="#FFFFFF" opacity="0.7" />
    </g>
    <path d="M190 112 L190 132 L195 127 L199 135 L203 133 L199 125 L206 125 Z" fill="#FFFFFF" stroke="#1F2A44" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const PythonArt = () => (
  <svg viewBox="0 0 220 140" className="h-[82%] w-auto max-w-[86%]" aria-hidden="true">
    {/* Editor escuro com aba do arquivo e números de linha. */}
    <rect x="24" y="14" width="168" height="114" rx="14" fill="#1F2A44" />
    <rect x="24" y="14" width="168" height="24" rx="14" fill="#2C3858" />
    <rect x="24" y="30" width="168" height="8" fill="#2C3858" />
    <rect x="36" y="22" width="44" height="16" rx="5" fill="#1F2A44" />
    <rect x="44" y="28" width="28" height="5" rx="2.5" fill="#C9A6F2" />
    {[50, 66, 82, 98, 114].map((y) => (
      <rect key={y} x="36" y={y} width="7" height="5" rx="2" fill="#4A5878" />
    ))}
    <rect x="54" y="48" width="26" height="9" rx="4.5" fill="#B57BEE" />
    <rect x="86" y="48" width="48" height="9" rx="4.5" fill="#7CF0FF" opacity="0.85" />
    <rect x="68" y="64" width="36" height="9" rx="4.5" fill="#FFC800" />
    <rect x="110" y="64" width="40" height="9" rx="4.5" fill="#4A5878" />
    <rect x="68" y="80" width="22" height="9" rx="4.5" fill="#B57BEE" />
    <rect x="96" y="80" width="54" height="9" rx="4.5" fill="#58CC02" />
    <rect x="82" y="96" width="44" height="9" rx="4.5" fill="#FF8A1F" />
    <rect x="54" y="112" width="30" height="9" rx="4.5" fill="#4A5878" />
    <rect x="88" y="110" width="3" height="13" rx="1.5" fill="#7CF0FF" />
    {/* Selo de terminal. */}
    <g transform="rotate(-6 186 104)">
      <rect x="162" y="82" width="48" height="44" rx="12" fill="#8E47D9" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M174 96 L182 104 L174 112" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="186" y="108" width="14" height="4" rx="2" fill="#FFFFFF" />
    </g>
  </svg>
);

const SimulatorArt = () => (
  <svg viewBox="0 0 220 140" className="h-[82%] w-auto max-w-[86%]" aria-hidden="true">
    {/* Piso da arena em perspectiva, com a pista. */}
    <polygon points="14,92 110,52 206,92 110,132" fill="#FFFFFF" stroke="#B9CCE0" strokeWidth="2.5" strokeLinejoin="round" />
    <polygon points="14,92 110,132 110,138 14,98" fill="#C9D3E2" />
    <polygon points="206,92 110,132 110,138 206,98" fill="#A3AFC2" />
    <path d="M52 92 L110 68 L168 92 L110 116 Z" fill="none" stroke="#1F2A44" strokeWidth="3" strokeLinejoin="round" opacity="0.75" />
    <path d="M110 68 L110 116" fill="none" stroke="#1F2A44" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
    {/* Cubo azul */}
    <polygon points="42,78 54,73 66,78 54,83" fill="#7CD3F2" />
    <polygon points="42,78 54,83 54,96 42,91" fill="#29B6E8" />
    <polygon points="66,78 54,83 54,96 66,91" fill="#0A8FC7" />
    {/* Cubo verde */}
    <polygon points="150,106 160,102 170,106 160,110" fill="#8BE05A" />
    <polygon points="150,106 160,110 160,121 150,117" fill="#58CC02" />
    <polygon points="170,106 160,110 160,121 170,117" fill="#34A300" />
    {/* Cone laranja */}
    <ellipse cx="164" cy="78" rx="9" ry="3.5" fill="#C25E00" />
    <path d="M157 78 L164 58 L171 78 Z" fill="#FF8A1F" />
    <path d="M159.5 71 L168.5 71 L167.6 68 L160.4 68 Z" fill="#FFFFFF" />
    {/* Robô X1 */}
    <g transform="translate(92 74)">
      <rect x="0" y="12" width="9" height="20" rx="4" fill="#1F2A44" />
      <rect x="27" y="12" width="9" height="20" rx="4" fill="#1F2A44" />
      <rect x="5" y="8" width="26" height="22" rx="6" fill="#2C3858" stroke="#1F2A44" strokeWidth="2" />
      <path d="M11 8 V3 H25 V8" fill="none" stroke="#1F2A44" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="10" y="13" width="16" height="7" rx="2" fill="#0A8FC7" />
      <circle cx="13.5" cy="25" r="2.6" fill="#7CF0FF" />
      <circle cx="22.5" cy="25" r="2.6" fill="#7CF0FF" />
      <path d="M6 30 H30" stroke="#29B6E8" strokeWidth="2" strokeLinecap="round" />
    </g>
    {/* Cronômetro */}
    <rect x="10" y="10" width="58" height="22" rx="8" fill="#FFFFFF" stroke="#D5DEE9" strokeWidth="2" />
    <text x="39" y="25.5" textAnchor="middle" fontFamily="Fredoka, Nunito, sans-serif" fontWeight="600" fontSize="12" fill="#1F2A44">⏱ 8:00</text>
    {/* Executar e parar */}
    <circle cx="180" cy="124" r="10" fill="#34A300" />
    <path d="M176.8 119 L184.5 124 L176.8 129 Z" fill="#FFFFFF" />
    <circle cx="204" cy="124" r="10" fill="#E53935" />
    <rect x="200" y="120" width="8" height="8" rx="1.5" fill="#FFFFFF" />
  </svg>
);

const modes = [
  {
    title: "Blocos",
    level: "Iniciante",
    bars: 1,
    barColor: "#8A5A00",
    art: <BlockyArt />,
    tint: "bg-yellow-tint",
    levelText: "text-yellow-text",
    check: "bg-yellow-tint text-yellow-text",
    desc: "Programação visual: o aluno monta a lógica encaixando blocos.",
    points: ["Sem erros de digitação: os blocos só encaixam do jeito certo", "Motores, sensores e tela em blocos prontos", "Mostra o código Python gerado pelos blocos"],
  },
  {
    title: "Python",
    level: "Avançado",
    bars: 3,
    barColor: "#6A2FB0",
    art: <PythonArt />,
    tint: "bg-purple-tint",
    levelText: "text-purple-shadow",
    check: "bg-purple-tint text-purple-shadow",
    desc: "Código de verdade, em MicroPython, rodando no próprio robô.",
    points: ["Editor com autocompletar e verificação do código", "Shell interativo e telemetria dos sensores", "A mesma linguagem usada na indústria e na universidade"],
  },
  {
    title: "Simulador",
    level: "3D",
    bars: 0,
    barColor: "#08729F",
    art: <SimulatorArt />,
    tint: "bg-cyan-tint",
    levelText: "text-cyan-text",
    check: "bg-cyan-tint text-cyan-text",
    desc: "Um gêmeo digital do X1: o aluno testa, observa os dados e corrige o programa antes da prática física.",
    points: ["Funciona com os programas em blocos e em Python", "Distância, velocidade e tempo durante o desafio", "Mais tempo de prática, mesmo com o robô ocupado"],
  },
];

const platformFeatures = [
  { icon: BookOpen, tile: "bg-yellow-tint text-yellow-text", title: "Roteiros e BNCC", desc: "Planos de aula, rubricas e materiais organizados por turma." },
  { icon: GraduationCap, tile: "bg-cyan-tint text-cyan-text", title: "Formação docente", desc: "Videoaulas e guias rápidos antes de cada atividade." },
  { icon: Users, tile: "bg-purple-tint text-purple-shadow", title: "Progresso da turma", desc: "Atividades concluídas e acompanhamento por aluno." },
  { icon: Activity, tile: "bg-green-tint text-green-text", title: "Dados dos sensores", desc: "Distância, velocidade e tempo acompanhados durante o desafio." },
  { icon: ScanEye, tile: "bg-orange-tint text-orange-shadow", title: "Câmera e IA", desc: "Os alunos treinam a câmera para reconhecer objetos, com resposta em tempo real." },
  { icon: ChartColumn, tile: "bg-red-tint text-red", title: "Indicadores da escola", desc: "Uso, participação e progresso das turmas reunidos em relatórios." },
];

const Platform = () => (
  <section id="plataforma" className="bg-white px-4 py-20 sm:px-6 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Plataforma CUBYX"
        tone="green"
        title="Aulas, formação, simulador e indicadores no mesmo ambiente."
        lead="O mesmo robô acompanha toda a jornada: o aluno começa com blocos e evolui para Python quando estiver pronto."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modes.map((m, idx) => (
          <article key={m.title} className={`cx-card cx-card-hover flex flex-col overflow-hidden ${idx === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}>
            <div
              className={`relative grid h-56 place-items-center pb-3 pt-12 ${m.tint}`}
              style={{ backgroundImage: "radial-gradient(rgba(31,42,68,0.07) 1.2px, transparent 1.2px)", backgroundSize: "18px 18px" }}
            >
              <span className={`absolute right-4 top-4 flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.06em] ${m.levelText}`}>
                {m.bars > 0 ? <LevelBars level={m.bars} color={m.barColor} /> : <Box className="h-4 w-4" strokeWidth={2.4} />}
                {m.level}
              </span>
              {m.art}
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6 lg:p-8">
              <h3 className="font-display text-[28px] font-semibold leading-none">{m.title}</h3>
              <p className="text-[17px] font-semibold leading-snug text-muted">{m.desc}</p>
              <ul className="space-y-2.5">
                {m.points.map((p) => (
                  <CheckItem key={p} tone={m.check}>{p}</CheckItem>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {platformFeatures.map((f) => {
          const Icon = f.icon;
          return (
            <article key={f.title} className="cx-card cx-card-hover p-6 lg:p-7">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${f.tile}`}>
                <Icon className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-display text-[21px] font-semibold leading-tight text-ink">{f.title}</h3>
              <p className="mt-2 text-[15px] font-semibold leading-relaxed text-muted">{f.desc}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

// --- UMA VISÃO PARA CADA PERFIL ---

// Painel resumido da direção (inspirado na tela inicial da plataforma).
const DirectorArt = () => (
  <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Painel com indicadores da escola">
    <rect width="320" height="240" fill="#E4F8D9" />
    <rect x="28" y="28" width="264" height="184" rx="18" fill="#FFFFFF" stroke="#E1E8F0" strokeWidth="3" />
    <rect x="48" y="48" width="96" height="10" rx="5" fill="#1F2A44" opacity="0.8" />
    <rect x="48" y="66" width="64" height="8" rx="4" fill="#C9D3E2" />
    {[
      [56, 70, "#29B6E8"],
      [80, 96, "#29B6E8"],
      [104, 82, "#29B6E8"],
      [128, 118, "#29B6E8"],
      [152, 104, "#29B6E8"],
    ].map(([x, h, c]) => (
      <rect key={x as number} x={x as number} y={190 - (h as number)} width="16" height={h as number} rx="4" fill={c as string} />
    ))}
    <circle cx="232" cy="122" r="38" fill="none" stroke="#E1E8F0" strokeWidth="14" />
    <circle cx="232" cy="122" r="38" fill="none" stroke="#34A300" strokeWidth="14" strokeLinecap="round" strokeDasharray="160 239" transform="rotate(-90 232 122)" />
    <text x="232" y="129" textAnchor="middle" fontFamily="Fredoka, Nunito, sans-serif" fontWeight="600" fontSize="20" fill="#1F2A44">67%</text>
    <rect x="200" y="176" width="64" height="8" rx="4" fill="#C9D3E2" />
  </svg>
);

const profiles = [
  { title: "Aluno", chip: "bg-cyan-tint text-cyan-text", desc: "Desafios, simulador e programação em blocos ou Python, sempre em dupla com o robô.", media: <img src="/assets/students_image.png" alt="" className="h-full w-full object-cover" /> },
  { title: "Professor", chip: "bg-yellow-tint text-yellow-text", desc: "Plano de aula, materiais, videoaulas e o progresso de cada aluno da turma.", media: <img src="/assets/teachers_image.png" alt="" className="h-full w-full object-cover" /> },
  { title: "Direção", chip: "bg-green-tint text-green-text", desc: "Indicadores de uso, participação e aprendizagem reunidos em relatórios.", media: <DirectorArt /> },
];

const Profiles = () => (
  <section className="px-4 py-20 sm:px-6 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Início por perfil" tone="cyan" title="Uma visão adequada para aluno, professor e direção." />
      <div className="grid gap-6 md:grid-cols-3">
        {profiles.map((p) => (
          <article key={p.title} className="cx-card cx-card-hover flex flex-col overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">{p.media}</div>
            <div className="flex flex-1 flex-col p-6">
              <span className={`w-fit rounded-full px-3 py-1 text-[12px] font-extrabold uppercase tracking-[0.06em] ${p.chip}`}>{p.title}</span>
              <p className="mt-3 text-[16px] font-semibold leading-relaxed text-muted">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// --- TRILHA DO 6º ANO ---

const track = [
  { range: "Roteiros 01–02", dot: "bg-yellow", title: "Fundamentos", desc: "Conhecer o X1, movimentos, medidas e primeiros programas." },
  { range: "Roteiros 03–05", dot: "bg-cyan", title: "Sensores e decisões", desc: "Coletar dados, detectar obstáculos e usar condições." },
  { range: "Roteiros 06–08", dot: "bg-green", title: "Programação e projetos", desc: "Repetições, funções e desafios ligados às disciplinas." },
  { range: "Roteiros 09–10", dot: "bg-purple", title: "IA e missão final", desc: "Câmera, reconhecimento de objetos e projeto de encerramento." },
];

const included = ["Plano do professor", "Correlação com a BNCC", "Videoaula", "Atividade no simulador", "Prática com o X1", "Registro de aprendizagem"];

const Track = () => (
  <section id="trilha" className="bg-white px-4 py-20 sm:px-6 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Trilhas" tone="yellow" title="Dez roteiros, cada um com duas aulas de 50 minutos." />
      <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <span className="absolute left-0 right-0 top-[38px] hidden h-[3px] rounded bg-line lg:block" aria-hidden="true" />
        {track.map((t) => (
          <li key={t.range} className="relative">
            <p className="text-[14px] font-extrabold text-cyan-text">{t.range}</p>
            <span className={`relative mt-3 block h-6 w-6 rounded-full border-4 border-white ${t.dot} shadow-[0_0_0_2px_#E1E8F0]`} aria-hidden="true" />
            <h3 className="mt-5 font-display text-[23px] font-semibold leading-tight text-ink">{t.title}</h3>
            <p className="mt-2 text-[15px] font-semibold leading-relaxed text-muted">{t.desc}</p>
          </li>
        ))}
      </ol>
      <div className="mt-12 rounded-cx-lg bg-page p-6 lg:p-8">
        <p className="font-display text-[19px] font-semibold text-ink">Cada roteiro inclui</p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {included.map((i) => (
            <li key={i} className="flex items-center gap-2 rounded-full border-2 border-line bg-white px-4 py-2 text-[14px] font-bold text-ink">
              <Check className="h-4 w-4 text-green-text" strokeWidth={3} />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

// --- PARCERIA E ACOMPANHAMENTO ---

const roles = [
  { title: "CodeSteam", accent: "text-cyan-fill", items: ["Implanta kits, plataforma e simulador", "Forma os professores e entrega os roteiros", "Mantém os equipamentos e presta suporte", "Organiza os dados e entrega o relatório final"] },
  { title: "Escola parceira", accent: "text-ink", items: ["Define turmas, professores e horários", "Disponibiliza sala, internet e dispositivos", "Participa dos encontros de acompanhamento", "Apoia os procedimentos de consentimento e feedback"] },
];

const indicators = [
  { title: "Participação", desc: "alunos e professores" },
  { title: "Execução", desc: "aulas e desafios" },
  { title: "Aprendizagem", desc: "rubricas e evidências" },
  { title: "Operação", desc: "uso e disponibilidade" },
];

const Partnership = () => (
  <section id="parceria" className="px-4 py-20 sm:px-6 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Parceria e acompanhamento" tone="green" title="A escola e a CodeSteam, cada uma com o seu papel." />

      {/* Papéis e indicadores */}
      <div className="cx-card p-6 lg:p-8">
        <h3 className="font-display text-[24px] font-semibold text-ink">Papéis definidos reduzem a carga da escola</h3>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {roles.map((r) => (
            <div key={r.title}>
              <p className={`font-display text-[20px] font-semibold ${r.accent}`}>{r.title}</p>
              <ul className="mt-3 space-y-2.5">
                {r.items.map((i) => (
                  <CheckItem key={i} tone="bg-cyan-tint text-cyan-text">{i}</CheckItem>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[13px] font-extrabold uppercase tracking-[0.08em] text-muted">Indicadores de acompanhamento</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map((i) => (
            <div key={i.title} className="rounded-cx bg-page p-4">
              <p className="font-display text-[19px] font-semibold text-ink">{i.title}</p>
              <p className="text-[14px] font-semibold text-muted">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- APOIO E PARCEIROS (quadro do último slide da apresentação) ---

const partnerGroups = [
  {
    label: "Apoio",
    logos: [
      { src: "/assets/centelha.png", alt: "Programa Centelha, MCTI", w: 198, h: 77, cls: "h-12 rounded-md" },
      { src: "/assets/logo-fapes.png", alt: "FAPES, Fundação de Amparo à Pesquisa e Inovação do Espírito Santo", w: 233, h: 74, cls: "h-12" },
    ],
  },
  {
    label: "Parceria",
    logos: [
      { src: "/assets/logo-certi.png", alt: "Fundação CERTI", w: 155, h: 64, cls: "h-8" },
      { src: "/assets/logo-confap.png", alt: "CONFAP", w: 208, h: 48, cls: "h-6" },
    ],
  },
  {
    label: "Promoção",
    logos: [
      { src: "/assets/logo-fndct.png", alt: "FNDCT", w: 176, h: 62, cls: "h-8" },
      { src: "/assets/logo-cnpq.png", alt: "CNPq", w: 165, h: 56, cls: "h-7" },
      { src: "/assets/logo-finep.png", alt: "Finep", w: 139, h: 68, cls: "h-9" },
      { src: "/assets/logo-mcti.png", alt: "Ministério da Ciência, Tecnologia e Inovação", w: 244, h: 58, cls: "h-8" },
    ],
  },
];

// Faixa de logos que fecha o quadro de contato, separada por uma linha.
const PartnerStrip = () => (
  <div id="parceiros" className="relative flex flex-col items-center gap-6 border-t-2 border-line pt-8 lg:col-span-2 lg:flex-row lg:items-stretch lg:justify-center lg:gap-0">
    {partnerGroups.map((g, i) => (
      <div key={g.label} className={`flex flex-col items-center gap-3 lg:shrink-0 lg:px-6 ${i > 0 ? "lg:border-l-2 lg:border-line" : ""}`}>
        <span className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#1B75BB]">{g.label}</span>
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:flex-nowrap">
          {g.logos.map((l) => (
            <img key={l.src} src={l.src} alt={l.alt} width={l.w} height={l.h} className={`w-auto ${l.cls}`} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

// --- QUEM SOMOS ---

const companyPillars = [
  { icon: Bot, title: "Robô X1", desc: "Hardware e firmware desenvolvidos pela própria equipe." },
  { icon: Monitor, title: "Plataforma CUBYX", desc: "Programação em blocos e Python, simulador e câmera com IA." },
  { icon: BookOpen, title: "Conteúdo pedagógico", desc: "Roteiros alinhados à BNCC, videoaulas e formação docente." },
];

const teamExperience = [
  { icon: GraduationCap, tile: "bg-cyan-tint text-cyan-text", title: "Formação em engenharia", desc: "Engenheiros eletricistas com experiência em automação, robótica e IA." },
  { icon: Presentation, tile: "bg-yellow-tint text-yellow-text", title: "Docência", desc: "Professores de Engenharia Elétrica, Robótica, Eletrônica, Inteligência Artificial e Redes Neurais." },
  { icon: Trophy, tile: "bg-green-tint text-green-text", title: "Educação em robótica", desc: "Criação dos cursos Programação Aplicada à Robótica e Meninas Programadoras, e orientação de estudantes para a Olimpíada Brasileira de Robótica (OBR)." },
  { icon: Cpu, tile: "bg-purple-tint text-purple-shadow", title: "Desenvolvimento de tecnologia", desc: "Projeto de eletrônica e sistemas embarcados que unem hardware, programação e IA em soluções para a sala de aula." },
];

const Team = () => (
  <section id="equipe" className="bg-white px-4 py-20 sm:px-6 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Quem somos"
        tone="purple"
        title="Engenharia, tecnologia e educação aplicadas à aprendizagem."
        lead="A CodeSteam une quem desenvolve tecnologia e quem vive a sala de aula para levar robótica, programação e IA ao currículo de forma prática e contínua."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr]">
        {/* A empresa */}
        <article className="flex flex-col rounded-cx-lg bg-ink p-7 text-white shadow-[0_6px_0_#121A2E] lg:p-9">
          <div className="flex items-center gap-3">
            <MascotHead className="h-11 w-11" />
            <span className="font-display text-[24px] font-semibold">
              Code<span className="text-cyan">Steam</span>
            </span>
          </div>
          <p className="mt-5 text-[16px] font-semibold leading-relaxed text-[#C9D3E2]">
            Desenvolvemos a solução completa, do hardware à sala de aula. Assim, robô, plataforma e conteúdo evoluem juntos, com suporte de quem conhece cada parte.
          </p>
          <ul className="mt-7 space-y-5">
            {companyPillars.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.title} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-cyan">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="font-display text-[19px] font-semibold leading-tight">{c.title}</p>
                    <p className="mt-0.5 text-[15px] font-semibold text-[#A3AFC2]">{c.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-auto pt-8 text-[14px] font-extrabold uppercase tracking-[0.08em] text-cyan">Ensino STEAM integrado às disciplinas</p>
        </article>

        {/* A equipe */}
        <div>
          <p className="font-display text-[22px] font-semibold text-ink">Experiência da equipe</p>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {teamExperience.map((t) => {
              const Icon = t.icon;
              return (
                <article key={t.title} className="cx-card p-6">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl ${t.tile}`}>
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-4 font-display text-[20px] font-semibold leading-tight text-ink">{t.title}</h3>
                  <p className="mt-2 text-[15px] font-semibold leading-relaxed text-muted">{t.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- CONTATO ---

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", school: "", role: "", message: "" });
  const [status, setStatus] = useState<null | "loading" | "success" | "error">(null);

  const set = (k: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [k]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // O servidor recebe nome, e-mail e mensagem; escola e cargo vão no texto da mensagem.
    const message = [`Escola: ${formData.school}`, `Cargo: ${formData.role || "não informado"}`, "", formData.message || "(sem mensagem)"].join("\n");
    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, message }),
      });
      setStatus(resp.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="cx-card relative grid gap-12 overflow-hidden p-6 sm:p-10 lg:grid-cols-[1fr_1.25fr] lg:p-14">
          <span className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FFF2C2]" aria-hidden="true" />

          <div className="relative flex flex-col">
            <Eyebrow tone="green">Fale com a gente</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] text-ink lg:text-[44px]">Vamos levar a CodeSteam para a sua escola.</h2>
            <p className="mt-4 text-lg font-medium leading-relaxed text-muted">Deixe seu contato para conversarmos sobre as turmas e a realidade da sua escola.</p>
            <div className="mt-8 flex items-center gap-8">
            <div className="space-y-3">
              <a href="mailto:code.steam.dev@gmail.com" className="flex w-fit items-center gap-3 text-[15px] font-bold text-ink hover:text-cyan-fill">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-tint text-cyan-text"><Mail className="h-5 w-5" /></span>
                code.steam.dev@gmail.com
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex w-fit items-center gap-3 text-[15px] font-bold text-ink hover:text-green-text">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-green-tint text-green-text"><MessageCircle className="h-5 w-5" /></span>
                Conversar pelo WhatsApp
              </a>
            </div>
            {/* Mascote ao lado dos contatos. */}
            <div className="cx-bob order-first hidden w-24 shrink-0 sm:block" aria-hidden="true">
              <Mascot className="h-auto w-full" />
            </div>
            </div>
          </div>

          <div className="relative">
            {status === "success" ? (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex h-full flex-col items-center justify-center rounded-cx-lg bg-green-tint p-10 text-center" role="status">
                <CheckCircle2 className="h-14 w-14 text-green" />
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">Mensagem enviada!</h3>
                <p className="mt-2 font-semibold text-muted">Obrigado pelo interesse. Entraremos em contato em breve.</p>
                <button onClick={() => setStatus(null)} className="cx-btn cx-btn-white mt-6">Enviar outra mensagem</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[14px] font-extrabold text-ink">Nome completo</span>
                  <input required type="text" autoComplete="name" placeholder="Seu nome" className="cx-input" value={formData.name} onChange={set("name")} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[14px] font-extrabold text-ink">E-mail</span>
                  <input required type="email" autoComplete="email" placeholder="voce@escola.com.br" className="cx-input" value={formData.email} onChange={set("email")} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[14px] font-extrabold text-ink">Escola</span>
                  <input required type="text" autoComplete="organization" placeholder="Nome da escola" className="cx-input" value={formData.school} onChange={set("school")} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[14px] font-extrabold text-ink">Cargo</span>
                  <input type="text" autoComplete="organization-title" placeholder="Direção, coordenação, professor…" className="cx-input" value={formData.role} onChange={set("role")} />
                </label>
                <label className="block md:col-span-2">
                  <span className="mb-2 block text-[14px] font-extrabold text-ink">
                    Mensagem <span className="font-semibold text-muted">(opcional)</span>
                  </span>
                  <textarea rows={4} placeholder="Quantas turmas, quais anos, melhor horário para conversar…" className="cx-input resize-none" value={formData.message} onChange={set("message")} />
                </label>
                {status === "error" && (
                  <p className="rounded-xl bg-red-tint px-4 py-3 text-[14px] font-bold text-[#B3261E] md:col-span-2" role="alert">
                    Não foi possível enviar agora. Tente de novo ou fale conosco pelo WhatsApp.
                  </p>
                )}
                <button type="submit" disabled={status === "loading"} className="cx-btn cx-btn-green w-full md:col-span-2">
                  {status === "loading" ? "Enviando…" : (<>Quero agendar uma conversa <Send className="h-5 w-5" strokeWidth={2.4} /></>)}
                </button>
              </form>
            )}
          </div>

          <PartnerStrip />
        </div>
      </div>
    </section>
  );
};

// --- RODAPÉ ---

const Footer = () => (
  <footer className="bg-ink px-4 py-10 text-[#A3AFC2] sm:px-6">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
      <div className="flex items-center gap-2.5">
        <MascotHead className="h-9 w-9" />
        <span className="font-display text-[19px] font-semibold text-white">
          Code<span className="text-cyan">Steam</span>
        </span>
      </div>
      <p className="text-center text-[14px] font-semibold">© 2026 CodeSteam. Robótica, programação e IA no currículo escolar.</p>
      <div className="flex gap-6 text-[14px] font-bold">
        <a href="#" className="transition-colors hover:text-white">Privacidade</a>
        <a href="#" className="transition-colors hover:text-white">Termos</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip">
        <Header />
        <main>
          <Hero />
          <Challenge />
          <HowItWorks />
          <Steam />
          <Platform />
          <Profiles />
          <Track />
          <Partnership />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
