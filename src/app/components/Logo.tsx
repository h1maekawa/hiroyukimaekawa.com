export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* H */}
      <rect x="15" y="25" width="6" height="50" fill="currentColor" />
      <rect x="15" y="47" width="20" height="6" fill="currentColor" />
      <rect x="29" y="25" width="6" height="50" fill="currentColor" />
      
      {/* M */}
      <rect x="50" y="25" width="6" height="50" fill="currentColor" />
      <path d="M56 25 L65 40 L65 25 L71 25 L71 40 L80 25 L80 75 L74 75 L74 45 L65 60 L56 45 L56 75 L50 75 L50 25 L56 25 Z" fill="currentColor" />
      <rect x="79" y="25" width="6" height="50" fill="currentColor" />
    </svg>
  );
}

export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified mark version - just initials in a circle */}
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none" />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: '40px', fontWeight: '300', fontFamily: 'system-ui, sans-serif' }}
        fill="currentColor"
      >
        HM
      </text>
    </svg>
  );
}

export function LogoMinimal({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Modern geometric design */}
      <rect x="20" y="20" width="25" height="60" fill="currentColor" />
      <rect x="20" y="45" width="60" height="10" fill="currentColor" />
      <rect x="55" y="20" width="25" height="60" fill="currentColor" />
    </svg>
  );
}
