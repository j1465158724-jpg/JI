// 哥特式玫瑰花窗，纯 SVG 生成
const GLASS = ['#7a1a12', '#b8893a', '#24324d'];

export default function RoseWindow({ className = '' }) {
  const c = 200;
  const petals = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    return { i, x: c + Math.cos(a) * 128, y: c + Math.sin(a) * 128, a };
  });
  const inner = Array.from({ length: 6 }, (_, i) => {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
    return { i, x: c + Math.cos(a) * 36, y: c + Math.sin(a) * 36 };
  });

  return (
    <svg className={className} viewBox="0 0 400 400" aria-hidden="true">
      <defs>
        <radialGradient id="rw-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f3d48a" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#b8893a" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={c} cy={c} r="196" fill="#1d1813" stroke="#4a3f33" strokeWidth="6" />
      <circle cx={c} cy={c} r="184" fill="none" stroke="#6b5c49" strokeWidth="2" />

      {/* 外圈花瓣玻璃 */}
      {petals.map((p) => (
        <g key={p.i}>
          <circle
            cx={p.x}
            cy={p.y}
            r="46"
            fill={GLASS[p.i % 3]}
            fillOpacity="0.82"
            stroke="#2a231c"
            strokeWidth="5"
          />
          <circle cx={p.x} cy={p.y} r="18" fill="none" stroke="#2a231c" strokeWidth="3" />
          <line
            x1={p.x - Math.cos(p.a) * 46}
            y1={p.y - Math.sin(p.a) * 46}
            x2={p.x + Math.cos(p.a) * 46}
            y2={p.y + Math.sin(p.a) * 46}
            stroke="#2a231c"
            strokeWidth="3"
          />
        </g>
      ))}

      {/* 辐条 */}
      {petals.map((p) => (
        <line
          key={`s${p.i}`}
          x1={c}
          y1={c}
          x2={c + Math.cos(p.a + Math.PI / 12) * 184}
          y2={c + Math.sin(p.a + Math.PI / 12) * 184}
          stroke="#3a3027"
          strokeWidth="4"
        />
      ))}

      {/* 中心 */}
      <circle cx={c} cy={c} r="74" fill="#1d1813" stroke="#4a3f33" strokeWidth="5" />
      {inner.map((p) => (
        <circle
          key={`i${p.i}`}
          cx={p.x}
          cy={p.y}
          r="30"
          fill={p.i % 2 ? '#7a1a12' : '#24324d'}
          fillOpacity="0.85"
          stroke="#2a231c"
          strokeWidth="4"
        />
      ))}
      <circle cx={c} cy={c} r="20" fill="#d9b56a" stroke="#2a231c" strokeWidth="4" />

      <circle className="rw-glow" cx={c} cy={c} r="196" fill="url(#rw-glow)" />
    </svg>
  );
}
