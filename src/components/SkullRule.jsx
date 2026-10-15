// 章节之间的分隔线，中间是一枚小骷髅
export default function SkullRule() {
  return (
    <div className="skull-rule" aria-hidden="true">
      <span className="skull-rule-line" />
      <svg viewBox="0 0 40 44" className="skull-rule-skull">
        <path
          d="M20 2C10 2 4 9 4 18c0 6 2 10 6 13v6c0 2 1 3 3 3h14c2 0 3-1 3-3v-6c4-3 6-7 6-13C36 9 30 2 20 2z"
          fill="#b8893a"
        />
        <ellipse cx="13.5" cy="19" rx="5" ry="5.5" fill="#16120e" />
        <ellipse cx="26.5" cy="19" rx="5" ry="5.5" fill="#16120e" />
        <path d="M20 24l-3 6h6z" fill="#16120e" />
        <path d="M15 34v5M20 34v5M25 34v5" stroke="#16120e" strokeWidth="1.6" />
      </svg>
      <span className="skull-rule-line" />
    </div>
  );
}
