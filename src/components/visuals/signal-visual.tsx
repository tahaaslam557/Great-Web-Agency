/**
 * Small "attention → action" visual for the intro:
 * scattered signals get funnelled into one green conversion point.
 */
export function SignalVisual() {
  const sources = [18, 38, 58, 78, 98];
  return (
    <div className="relative overflow-hidden rounded-lg border border-line bg-white p-6" aria-hidden>
      <div className="micro-label mb-4 flex justify-between text-muted">
        <span>Attention</span>
        <span className="text-teal">Action</span>
      </div>
      <svg viewBox="0 0 240 116" className="w-full">
        {sources.map((y, i) => (
          <g key={y}>
            <path
              d={`M12 ${y} C 110 ${y}, 130 58, 214 58`}
              fill="none"
              stroke={i === 2 ? "#63BF7C" : "#108B88"}
              strokeOpacity={i === 2 ? 1 : 0.35}
              strokeWidth="1.2"
              className="animate-dash"
              style={{ animationDuration: `${5 + i}s` }}
            />
            <circle cx="12" cy={y} r="3.5" fill="#0A1A27" fillOpacity="0.15" />
          </g>
        ))}
        <circle
          cx="222"
          cy="58"
          r="14"
          fill="#63BF7C"
          fillOpacity="0.18"
          className="animate-twinkle"
          style={{ transformOrigin: "222px 58px" }}
        />
        <rect x="216" y="52" width="12" height="12" fill="#63BF7C" />
      </svg>
      <div className="mt-4 flex items-end justify-between border-t border-line pt-4">
        <span className="text-sm text-muted">Visitors → customers</span>
        <span className="text-2xl font-bold tracking-[-0.03em] text-navy">
          ↑ <span className="text-teal">Conversion</span>
        </span>
      </div>
    </div>
  );
}
