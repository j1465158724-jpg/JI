// 纯洁封印：红色火漆 + 垂下的羊皮纸条
export default function PuritySeal({ className = '', mark = 'I' }) {
  return (
    <svg className={className} viewBox="0 0 120 230" aria-hidden="true">
      <defs>
        <radialGradient id="ps-wax" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#b3301f" />
          <stop offset="60%" stopColor="#7d1a10" />
          <stop offset="100%" stopColor="#4d0d07" />
        </radialGradient>
        <linearGradient id="ps-paper" x1="0" x2="1">
          <stop offset="0%" stopColor="#cdb689" />
          <stop offset="50%" stopColor="#e6d6ae" />
          <stop offset="100%" stopColor="#c4ab7b" />
        </linearGradient>
      </defs>

      {/* 纸条 */}
      <g>
        <path d="M38 60 L30 214 L40 206 L48 218 L54 62 Z" fill="url(#ps-paper)" />
        <path d="M66 62 L74 196 L82 186 L92 196 L84 58 Z" fill="url(#ps-paper)" />
        {[92, 108, 124, 140, 156, 172, 188].map((y, i) => (
          <line
            key={`a${i}`}
            x1={38 - (y - 60) * 0.05}
            y1={y}
            x2={50 - (y - 60) * 0.03}
            y2={y + 1}
            stroke="#5a4a35"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray={i % 2 ? '4 2 6 2' : '7 2 3 2'}
          />
        ))}
        {[90, 104, 118, 132, 146, 160, 174].map((y, i) => (
          <line
            key={`b${i}`}
            x1={70 + (y - 60) * 0.06}
            y1={y}
            x2={82 + (y - 60) * 0.05}
            y2={y - 1}
            stroke="#5a4a35"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray={i % 2 ? '5 2 4 2' : '3 2 7 2'}
          />
        ))}
      </g>

      {/* 火漆 */}
      <path
        d="M60 6c12 0 22 3 30 10 8 6 13 15 14 26 1 12-3 22-11 30-8 8-19 12-32 12-14 0-24-4-32-12C21 64 16 54 16 42c1-11 5-20 13-26 8-7 18-10 31-10z"
        fill="url(#ps-wax)"
      />
      <circle cx="60" cy="45" r="27" fill="none" stroke="#4d0d07" strokeWidth="3" />
      <circle cx="60" cy="45" r="22" fill="none" stroke="#c0483a" strokeOpacity="0.35" strokeWidth="1" />
      <text
        x="60"
        y="57"
        textAnchor="middle"
        fontFamily="UnifrakturCook, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="32"
        fill="#3c0905"
      >
        {mark}
      </text>
      <ellipse cx="46" cy="24" rx="10" ry="5" fill="#fff" fillOpacity="0.12" transform="rotate(-25 46 24)" />
    </svg>
  );
}
