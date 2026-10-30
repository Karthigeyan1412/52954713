
function HouseC({
  x = 0,
  y = 0,
  wallColor = '#e9d9f5',
  roofColor = '#7863a8',
  doorColor = '#754b43',
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse
        cx="0" cy="82" rx="49" ry="16"
        fill="#6d9665" opacity="0.35"
      />
      {/* Enchanted magical pathway */}
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* Glowing trail beneath the stones */}
        <path
          d="M0 88 Q-8 98 3 107 Q13 116 0 126 Q-10 136 0 146"
          fill="none"
          stroke="#b99aff"
          strokeWidth="13"
          opacity="0.25"
        />

        {/* Magical stepping stones */}
        <g stroke="#8b73bd" strokeWidth="1.5">
          <ellipse cx="0" cy="92" rx="8" ry="4.5" fill="#d9c8ff" />
          <ellipse cx="4" cy="105" rx="9" ry="5" fill="#bba4f0" />
          <ellipse cx="-2" cy="119" rx="8" ry="4.5" fill="#e5d8ff" />
          <ellipse cx="3" cy="133" rx="9" ry="5" fill="#bba4f0" />
          <ellipse cx="0" cy="146" rx="7" ry="4" fill="#d9c8ff" />
        </g>

        {/* Golden magical sparkles */}
        <g fill="#f8d875" stroke="#b78a43" strokeWidth="0.8">
          <path d="M-15 99 L-13 103 L-9 105 L-13 107 L-15 111 L-17 107 L-21 105 L-17 103 Z" />
          <path d="M17 119 L19 123 L23 125 L19 127 L17 131 L15 127 L11 125 L15 123 Z" />
          <path d="M-13 135 L-12 138 L-9 139 L-12 141 L-13 144 L-15 141 L-18 139 L-15 138 Z" />
        </g>
      </g>

      <rect
        x="-32" y="0" width="64" height="82" rx="4"
        fill={wallColor} stroke="#765574" strokeWidth="4"
      />
      {/* Decorative stonework */}
      <g
        fill="none"
        stroke="#c4b0df"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M-27 12 H-12" />
        <path d="M8 12 H27" />
        <path d="M-27 36 H-17" />
        <path d="M17 36 H27" />
        <path d="M-27 66 H-17" />
        <path d="M17 66 H27" />
      </g>

      {/* Decorative finial behind the roof */}
      <path
        d="M0 -49 L0 -62"
        stroke="#8c704c"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <circle
        cx="0"
        cy="-64"
        r="5"
        fill="#f4d16b"
        stroke="#8c704c"
        strokeWidth="2"
      />

      {/* Tall pointed roof */}
      <path
        d="M-43 8 L0 -52 L43 8 Z"
        fill={roofColor} stroke="#5d4a80"
        strokeWidth="4" strokeLinejoin="round"
      />

      <path
        d="M-29 3 L0 -38 L29 3"
        fill="none" stroke="#d8c9f0"
        strokeWidth="3" strokeLinecap="round"
      />

      <rect
        x="-10" y="16" width="20" height="19" rx="8"
        fill="#8dc4c7" stroke="#765574" strokeWidth="2"
      />
      <rect
        x="-10" y="43" width="20" height="19" rx="8"
        fill="#8dc4c7" stroke="#765574" strokeWidth="2"
      />

      <rect
        x="-12" y="60" width="24" height="22" rx="4"
        fill={doorColor}
      />
      {/* Magical door emblem */}
      <path
        d="M0 65 L4 69 L0 73 L-4 69 Z"
        fill="#f4d16b"
        stroke="#8c704c"
        strokeWidth="1.5"
      />
      <circle cx="6" cy="72" r="2" fill="#f8d878" />
      {/* Tiny flowers beside the tower entrance */}
      <g>
        <circle cx="-24" cy="79" r="3" fill="#f2a7c5" />
        <circle cx="-20" cy="76" r="2.5" fill="#f4d16b" />
        <circle cx="24" cy="79" r="3" fill="#f2a7c5" />
        <circle cx="20" cy="76" r="2.5" fill="#f4d16b" />

        <path
          d="M-24 82 V87 M-20 79 V86 M24 82 V87 M20 79 V86"
          stroke="#56895b"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </g>
  )
}

export default HouseC
