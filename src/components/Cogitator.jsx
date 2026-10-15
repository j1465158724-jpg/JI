import { useEffect, useState } from 'react';

// 沉思者终端：开场逐字打出几行文字
export default function Cogitator({ lines }) {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const total = lines.join('').length;
  const [count, setCount] = useState(reduced ? total : 0);

  useEffect(() => {
    if (reduced || count >= total) return undefined;
    const t = setTimeout(() => setCount((n) => n + 1), count === 0 ? 600 : 38);
    return () => clearTimeout(t);
  }, [count, total, reduced]);

  let remaining = count;
  const shown = lines.map((line) => {
    const part = line.slice(0, Math.max(0, remaining));
    remaining -= line.length;
    return part;
  });
  const activeLine = shown.findIndex((s, i) => s.length < lines[i].length);
  const cursorAt = activeLine === -1 ? lines.length - 1 : activeLine;

  return (
    <div className="cogitator" role="log" aria-label="开机记录">
      <div className="cogitator-screen">
        {/* 屏幕阅读器直接读完整内容 */}
        <p className="sr-only">{lines.join(' ')}</p>
        <div aria-hidden="true">
          {shown.map((s, i) =>
            i <= cursorAt ? (
              <div className="cogitator-line" key={i}>
                {s}
                {i === cursorAt && <span className="cogitator-cursor">█</span>}
              </div>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}
