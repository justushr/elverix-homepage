export function HeroFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[62vmax] w-[62vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bordeaux/20 blur-[120px]" />
      <div className="absolute left-[68%] top-[30%] h-[38vmax] w-[38vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pine/15 blur-[100px]" />
      <div className="absolute left-[25%] top-[70%] h-[30vmax] w-[30vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bordeaux-deep/20 blur-[90px]" />
      <svg
        viewBox="0 0 600 600"
        className="absolute left-1/2 top-1/2 h-[72vmin] w-[72vmin] -translate-x-1/2 -translate-y-1/2 opacity-50"
      >
        <g fill="none" strokeWidth="1.5">
          <ellipse cx="300" cy="300" rx="220" ry="92" stroke="#00C8FF" transform="rotate(20 300 300)" />
          <ellipse
            cx="300"
            cy="300"
            rx="220"
            ry="92"
            stroke="#F5A623"
            opacity="0.45"
            transform="rotate(80 300 300)"
          />
          <ellipse
            cx="300"
            cy="300"
            rx="220"
            ry="92"
            stroke="#00C8FF"
            opacity="0.25"
            transform="rotate(140 300 300)"
          />
        </g>
      </svg>
    </div>
  );
}
