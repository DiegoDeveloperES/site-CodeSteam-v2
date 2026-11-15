// Mascote CUBYX, copiado do Hub do WEBSITE (hub.html), só com a pose "acenando".

const INK = "#1F2A44";
const CYAN = "#29B6E8";
const YELLOW = "#FFC800";
const EYE = "#7CF0FF";

export const Mascot = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 240 260" role="img" aria-label="CUBYX, o robô mascote, acenando">
    <ellipse cx="120" cy="248" rx="80" ry="9" fill={INK} opacity="0.12" />
    <line x1="120" y1="40" x2="120" y2="64" stroke={INK} strokeWidth="6" strokeLinecap="round" />
    <circle cx="120" cy="32" r="12" fill={YELLOW} stroke={INK} strokeWidth="5" />
    <rect x="38" y="198" width="164" height="44" rx="22" fill="#3A4560" stroke={INK} strokeWidth="5" />
    {[66, 102, 138, 174].map((cx) => (
      <circle key={cx} cx={cx} cy="220" r="9" fill="#8A96AE" />
    ))}
    {/* Braço esquerdo acenando */}
    <g className="cx-wave">
      <path d="M56 140 C 34 128 24 106 30 84" fill="none" stroke={INK} strokeWidth="18" strokeLinecap="round" />
      <path d="M56 140 C 34 128 24 106 30 84" fill="none" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
      <circle cx="30" cy="78" r="13" fill={YELLOW} stroke={INK} strokeWidth="5" />
    </g>
    {/* Braço direito para baixo */}
    <path d="M186 150 C 204 160 210 176 206 190" fill="none" stroke={INK} strokeWidth="18" strokeLinecap="round" />
    <path d="M186 150 C 204 160 210 176 206 190" fill="none" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
    <circle cx="206" cy="194" r="13" fill={YELLOW} stroke={INK} strokeWidth="5" />
    {/* Corpo */}
    <rect x="50" y="60" width="140" height="150" rx="32" fill={CYAN} stroke={INK} strokeWidth="6" />
    <rect x="160" y="74" width="20" height="122" rx="10" fill="#1590C4" opacity="0.45" />
    <rect x="68" y="70" width="96" height="9" rx="4.5" fill="#FFFFFF" opacity="0.45" />
    <rect x="70" y="86" width="100" height="72" rx="20" fill={INK} />
    <g className="cx-blink">
      <ellipse cx="100" cy="116" rx="10" ry="13" fill={EYE} />
      <ellipse cx="140" cy="116" rx="10" ry="13" fill={EYE} />
      <circle cx="104" cy="111" r="3.5" fill="#FFFFFF" />
      <circle cx="144" cy="111" r="3.5" fill="#FFFFFF" />
    </g>
    <path d="M106 140 Q 120 150 134 140" fill="none" stroke={EYE} strokeWidth="5" strokeLinecap="round" />
    <circle cx="82" cy="172" r="8" fill="#FF8FB1" opacity="0.85" />
    <circle cx="158" cy="172" r="8" fill="#FF8FB1" opacity="0.85" />
    <circle cx="104" cy="188" r="6" fill="#FF4B4B" stroke={INK} strokeWidth="3" />
    <circle cx="120" cy="188" r="6" fill={YELLOW} stroke={INK} strokeWidth="3" />
    <circle cx="136" cy="188" r="6" fill="#58CC02" stroke={INK} strokeWidth="3" />
  </svg>
);

// Cabeça do CUBYX (a mesma da pílula de status do Hub), usada como marca.
export const MascotHead = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 44 44" aria-hidden="true" focusable="false">
    <line x1="22" y1="6" x2="22" y2="12" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="22" cy="5" r="3.6" fill={YELLOW} stroke={INK} strokeWidth="2" />
    <rect x="6" y="12" width="32" height="27" rx="9" fill={CYAN} stroke={INK} strokeWidth="2.5" />
    <rect x="11" y="17" width="22" height="15" rx="5.5" fill={INK} />
    <path
      d="M14.5 24.5 Q 17 20.5 19.5 24.5 M24.5 24.5 Q 27 20.5 29.5 24.5 M19.5 28 Q 22 30 24.5 28"
      fill="none"
      stroke={EYE}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
