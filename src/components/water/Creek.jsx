
function Creek({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* Soft creek bank */}
      <path
        d="M0 0 C45 -20 55 35 100 20 S155 -15 200 15"
        fill="none"
        stroke="#83a978"
        strokeWidth="42"
        strokeLinecap="round"
      />

      {/* Main creek water */}
      <path
        d="M0 0 C45 -20 55 35 100 20 S155 -15 200 15"
        fill="none"
        stroke="#72c7e8"
        strokeWidth="30"
        strokeLinecap="round"
      />
      
      {/* Natural creek water highlights */}
      <g fill="#e4f8ff" opacity="0.6">
        <ellipse cx="45" cy="-5" rx="7" ry="2" />
        <ellipse cx="110" cy="22" rx="9" ry="2.5" />
        <ellipse cx="165" cy="-2" rx="6" ry="2" />
      </g>

      
        
      {/* Decorative creek stones */}
      <g stroke="#8d9b83" strokeWidth="1.5">
        <ellipse cx="18" cy="19" rx="7" ry="4" fill="#c5c5b2" />
        <ellipse cx="76" cy="-13" rx="6" ry="3.5" fill="#d5c9b4" />
        <ellipse cx="132" cy="37" rx="8" ry="4" fill="#b9bda9" />
        <ellipse cx="184" cy="-14" rx="7" ry="4" fill="#d5c9b4" />
      </g>

      {/* Small grass patches */}
      <g
        fill="none"
        stroke="#56895b"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M-8 13 L-12 5 M-8 13 L-5 4 M-8 13 L0 7" />
        <path d="M65 -28 L61 -36 M65 -28 L68 -38 M65 -28 L73 -34" />
        <path d="M145 39 L141 31 M145 39 L148 30 M145 39 L153 34" />
        <path d="M207 1 L203 -7 M207 1 L210 -8 M207 1 L215 -4" />
      </g>
      

    </g>
  )
}

export default Creek
