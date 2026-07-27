export default function Logo({ className = "", theme = "light" }: { className?: string, theme?: 'light' | 'dark' }) {
  const textColor = theme === 'dark' ? '#FFFFFF' : '#12312B';
  const tagColor = theme === 'dark' ? '#94A3B8' : '#7A7A76';
  const iconColor = theme === 'dark' ? '#FFFFFF' : '#12312B';

  return (
    <svg viewBox="0 0 340 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bold G Icon Mark */}
      <g transform="translate(-45, -15) scale(0.55)">
        <path d="M186 100 A54 54 0 1 0 220 195 L220 155 L186 155"
              fill="none" stroke={iconColor} strokeWidth="15"
              strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M150 150 L182 118 L206 142 L246 102"
              fill="none" stroke="#C99A2E" strokeWidth="14"
              strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M224 102 L246 102 L246 124"
              fill="none" stroke="#C99A2E" strokeWidth="14"
              strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      {/* Wordmark */}
      <text x="100" y="58" fontFamily="Poppins, sans-serif" fontWeight="700"
            fontSize="36" letterSpacing="-1" fill={textColor}>
        grow<tspan fill="#C99A2E">guest</tspan>
      </text>
      <text x="102" y="78" fontFamily="Poppins, sans-serif" fontWeight="500"
            fontSize="8.5" letterSpacing="1.5" fill={tagColor}>
        DIGITAL GROWTH FOR HOSPITALITY
      </text>
    </svg>
  );
}

