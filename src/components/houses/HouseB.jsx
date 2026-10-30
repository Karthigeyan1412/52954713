
function HouseB({
  x = 0,
  y = 0,
  wallColor = '#f6d6ae',
  roofColor = '#d7a05c',
  doorColor = '#86553e',
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse
        cx="0" cy="58" rx="62" ry="17"
        fill="#6d9665" opacity="0.35"
      />

      {/* Curved stepping-stone path */}
      <g
        fill="#d9c6a3"
        stroke="#b39a76"
        strokeWidth="1.5"
      >
        <path d="M-4 64 Q2 59 9 64 L11 69 Q4 73 -3 69 Z" />
        <path d="M7 75 Q14 70 21 75 L22 80 Q15 84 8 80 Z" />
        <path d="M-1 86 Q5 81 12 86 L13 91 Q6 95 0 91 Z" />
        <path d="M17 97 Q23 92 30 97 L31 102 Q24 106 18 102 Z" />
      </g>


      <rect
        x="-40" y="5" width="80" height="53" rx="12"
        fill={wallColor} stroke="#986b52" strokeWidth="4"
      />

      {/* Broad curved roof */}
      <path
        d="M-49 15 Q-48 -38 0 -43 Q48 -38 49 15 Z"
        fill={roofColor} stroke="#986b52"
        strokeWidth="4" strokeLinejoin="round"
      />

      {/* Round attic window */}
      <circle
        cx="0"
        cy="-22"
        r="8"
        fill="#8dc4c7"
        stroke="#986b52"
        strokeWidth="3"
      />

      {/* Window crossbars */}
      <path
        d="M-6 -22 H6 M0 -28 V-16"
        stroke="#986b52"
        strokeWidth="2"
      />


      <path
        d="M-35 7 Q-28 -25 0 -32"
        fill="none" stroke="#f6d69b"
        strokeWidth="4" strokeLinecap="round"
      />

      {/* Decorative curved roof band */}
      <path
        d="M-43 9 Q0 20 43 9"
        fill="none"
        stroke="#986b52"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M-35 13 Q0 22 35 13"
        fill="none"
        stroke="#f6d69b"
        strokeWidth="2"
        strokeLinecap="round"
      />


      <rect
        x="-29" y="23" width="17" height="17" rx="6"
        fill="#8dc4c7" stroke="#986b52" strokeWidth="2"
      />

      {/* Climbing vine on the left wall */}
      <path
        d="M-36 53 Q-29 45 -34 36 Q-38 29 -32 22"
        fill="none"
        stroke="#56895b"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Vine leaves */}
      <g fill="#78a96b">
        <ellipse cx="-30" cy="45" rx="5" ry="2.5" transform="rotate(-35 -30 45)" />
        <ellipse cx="-36" cy="37" rx="5" ry="2.5" transform="rotate(35 -36 37)" />
        <ellipse cx="-28" cy="29" rx="5" ry="2.5" transform="rotate(-35 -28 29)" />
      </g>

      <rect
        x="12" y="23" width="17" height="17" rx="6"
        fill="#8dc4c7" stroke="#986b52" strokeWidth="2"
      />

      {/* Climbing vine on the right wall */}
      <path
        d="M36 53 Q29 45 34 36 Q38 29 32 22"
        fill="none"
        stroke="#56895b"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Right vine leaves */}
      <g fill="#78a96b">
        <ellipse
          cx="30" cy="45" rx="5" ry="2.5"
          transform="rotate(35 30 45)"
        />
        <ellipse
          cx="36" cy="37" rx="5" ry="2.5"
          transform="rotate(-35 36 37)"
        />
        <ellipse
          cx="28" cy="29" rx="5" ry="2.5"
          transform="rotate(35 28 29)"
        />
      </g>
      {/* Small curved canopy above the door */}
      <path
        d="M-13 34 Q-11 28 0 28 Q11 28 13 34 Z"
        fill="#c58a55"
        stroke="#986b52"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Canopy highlight */}
      <path
        d="M-8 32 Q0 29 8 32"
        fill="none"
        stroke="#f1d3a2"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="-11" y="32" width="22" height="26" rx="8"
        fill={doorColor}
      />
      <circle cx="5" cy="45" r="2" fill="#f8d878" />
    </g>
  )
}

export default HouseB
