
function Pond({ x = 0, y = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>

      {/* Soft grassy pond bank */}
      <ellipse
        cx="0"
        cy="0"
        rx="72"
        ry="48"
        fill="#83a978"
        opacity="0.8"
      />

      {/* Main pond water */}
      <ellipse
        cx="0"
        cy="-3"
        rx="62"
        ry="38"
        fill="#72c7e8"
      />

      {/* Lighter inner water */}
      <ellipse
        cx="-5"
        cy="-7"
        rx="49"
        ry="27"
        fill="#a4e3f5"
        opacity="0.65"
      />
        
      {/* Lily pads */}
      <g fill="#6fa66c" stroke="#4f8959" strokeWidth="1.5">
        <path d="M-38 -15 A11 7 0 1 1 -23 -21 L-29 -15 Z" />
        <path d="M25 9 A12 8 0 1 1 39 2 L32 9 Z" />
        <path d="M-8 17 A9 6 0 1 1 5 12 L0 17 Z" />
      </g>

      {/* Tiny flowers on lily pads */}
      <g>
        <circle cx="-30" cy="-25" r="3" fill="#f2a7c5" />
        <circle cx="-30" cy="-30" r="2.5" fill="#f2a7c5" />
        <circle cx="-35" cy="-27" r="2.5" fill="#f2a7c5" />
        <circle cx="-25" cy="-27" r="2.5" fill="#f2a7c5" />
        <circle cx="-30" cy="-27" r="2" fill="#f4d16b" />

        <circle cx="34" cy="-1" r="3" fill="#f4d16b" />
        <circle cx="34" cy="-6" r="2.5" fill="#f4d16b" />
        <circle cx="29" cy="-3" r="2.5" fill="#f4d16b" />
        <circle cx="39" cy="-3" r="2.5" fill="#f4d16b" />
        <circle cx="34" cy="-3" r="2" fill="#e99b62" />
      </g>
        
      {/* Natural stones around the pond */}
      <g stroke="#8d9b83" strokeWidth="1.5">
        <ellipse cx="-57" cy="-7" rx="7" ry="4" fill="#c5c5b2" />
        <ellipse cx="-43" cy="32" rx="6" ry="4" fill="#d5c9b4" />
        <ellipse cx="48" cy="29" rx="8" ry="4.5" fill="#b9bda9" />
        <ellipse cx="63" cy="-12" rx="6" ry="3.5" fill="#d5c9b4" />
        <ellipse cx="5" cy="-43" rx="7" ry="4" fill="#c5c5b2" />
      </g>

      {/* Soft sunlight reflections */}
      <g fill="#e4f8ff" opacity="0.65">
        <ellipse cx="-8" cy="-16" rx="12" ry="3" />
        <ellipse cx="17" cy="5" rx="7" ry="2.5" />
        <ellipse cx="-23" cy="7" rx="6" ry="2" />
      </g>

    </g>
  )
}

export default Pond
