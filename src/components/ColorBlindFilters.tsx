// SVG filters for color blindness simulation
// These are hidden but referenced by CSS filters

export function ColorBlindFilters() {
  return (
    <svg
      className="absolute w-0 h-0 overflow-hidden"
      aria-hidden="true"
      style={{ position: 'absolute', width: 0, height: 0 }}
    >
      <defs>
        {/* Deuteranopia (red-green color blindness, most common) */}
        <filter id="deuteranopia-filter">
          <feColorMatrix
            type="matrix"
            values="0.625 0.375 0     0 0
                    0.7   0.3   0     0 0
                    0     0.3   0.7   0 0
                    0     0     0     1 0"
          />
        </filter>

        {/* Protanopia (red-green color blindness) */}
        <filter id="protanopia-filter">
          <feColorMatrix
            type="matrix"
            values="0.567 0.433 0     0 0
                    0.558 0.442 0     0 0
                    0     0.242 0.758 0 0
                    0     0     0     1 0"
          />
        </filter>

        {/* Tritanopia (blue-yellow color blindness) */}
        <filter id="tritanopia-filter">
          <feColorMatrix
            type="matrix"
            values="0.95  0.05  0     0 0
                    0     0.433 0.567 0 0
                    0     0.475 0.525 0 0
                    0     0     0     1 0"
          />
        </filter>
      </defs>
    </svg>
  );
}
