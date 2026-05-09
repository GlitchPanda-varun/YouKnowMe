export function PandaMascot({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Tech Panda Mascot"
    >
      {/* Left ear */}
      <ellipse cx="60" cy="50" rx="30" ry="28" fill="#1a1a2e" />
      <ellipse cx="60" cy="50" rx="18" ry="16" fill="#e0e0e0" />
      {/* Right ear */}
      <ellipse cx="140" cy="50" rx="30" ry="28" fill="#1a1a2e" />
      <ellipse cx="140" cy="50" rx="18" ry="16" fill="#e0e0e0" />

      {/* Head */}
      <ellipse cx="100" cy="100" rx="60" ry="55" fill="#f5f5f5" />
      <ellipse cx="100" cy="100" rx="60" ry="55" stroke="#1a1a2e" strokeWidth="2" />

      {/* Eye patches (dark) */}
      <ellipse cx="75" cy="90" rx="20" ry="18" fill="#1a1a2e" transform="rotate(-10, 75, 90)" />
      <ellipse cx="125" cy="90" rx="20" ry="18" fill="#1a1a2e" transform="rotate(10, 125, 90)" />

      {/* Glasses frames */}
      <rect x="55" y="76" width="36" height="28" rx="6" fill="none" stroke="#6c63ff" strokeWidth="3" />
      <rect x="109" y="76" width="36" height="28" rx="6" fill="none" stroke="#6c63ff" strokeWidth="3" />
      {/* Glasses bridge */}
      <path d="M91 90 Q100 85 109 90" fill="none" stroke="#6c63ff" strokeWidth="3" />
      {/* Glasses arms */}
      <line x1="55" y1="88" x2="42" y2="82" stroke="#6c63ff" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="145" y1="88" x2="158" y2="82" stroke="#6c63ff" strokeWidth="2.5" strokeLinecap="round" />

      {/* Eyes (white + pupil) */}
      <circle cx="73" cy="90" r="7" fill="white" />
      <circle cx="73" cy="90" r="4" fill="#1a1a2e" />
      <circle cx="71" cy="88" r="1.5" fill="white" />

      <circle cx="127" cy="90" r="7" fill="white" />
      <circle cx="127" cy="90" r="4" fill="#1a1a2e" />
      <circle cx="125" cy="88" r="1.5" fill="white" />

      {/* Nose */}
      <ellipse cx="100" cy="108" rx="6" ry="4" fill="#1a1a2e" />

      {/* Mouth */}
      <path d="M94 112 Q100 118 106 112" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />

      {/* Blush */}
      <circle cx="62" cy="105" r="7" fill="#ffb3b3" opacity="0.5" />
      <circle cx="138" cy="105" r="7" fill="#ffb3b3" opacity="0.5" />

      {/* Headphone band */}
      <path d="M42 80 Q42 35 100 32 Q158 35 158 80" fill="none" stroke="#6c63ff" strokeWidth="4" strokeLinecap="round" />

      {/* Headphone left cup */}
      <rect x="30" y="72" width="16" height="24" rx="6" fill="#6c63ff" />
      <rect x="33" y="76" width="10" height="16" rx="4" fill="#8b83ff" />

      {/* Headphone right cup */}
      <rect x="154" y="72" width="16" height="24" rx="6" fill="#6c63ff" />
      <rect x="157" y="76" width="10" height="16" rx="4" fill="#8b83ff" />

      {/* Body hint */}
      <ellipse cx="100" cy="168" rx="40" ry="25" fill="#f5f5f5" stroke="#1a1a2e" strokeWidth="2" />
      {/* Code brackets on chest */}
      <text x="85" y="174" fontFamily="monospace" fontSize="16" fontWeight="bold" fill="#6c63ff">{"</>"}</text>
    </svg>
  );
}
