
function HouseA({
  x = 0,
  y = 0,
  wallColor = '#f8e8c7',
  roofColor = '#a779a8',
  doorColor = '#8c6049',
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* Shadow beneath the house */}
      <ellipse
        cx="0" cy="58" rx="65" ry="18"
        fill="#6d9665" opacity="0.35"
      />

      {/* Small stepping stones in front of the door */}
      <g fill="#d9c6a3" stroke="#b9a17b" strokeWidth="1.5">
        <ellipse cx="0" cy="65" rx="10" ry="5" />
        <ellipse cx="2" cy="76" rx="9" ry="4.5" />
        <ellipse cx="-1" cy="86" rx="8" ry="4" />
      </g>

      {/* Main house structure */}
      <rect
        x="-43" y="0" width="86" height="58" rx="5"
        fill={wallColor} stroke="#986b52" strokeWidth="4"
      />

      {/* Decorative timber beams */}
      <path
        d="M-40 5 L-40 54 M40 5 L40 54"
        stroke="#b58a65"
        strokeWidth="4"
        strokeLinecap="round"
      />
          
      <path
        d="M-37 8 L-20 8 M20 8 L37 8"
        stroke="#b58a65"
        strokeWidth="3"
        strokeLinecap="round"
      />


      {/* Chimney behind the roof */}
      <rect
        x="22"
        y="-43"
        width="15"
        height="30"
        rx="2"
        fill="#b96f62"
        stroke="#765574"
        strokeWidth="3"
      />

      {/* Chimney cap */}
      <rect
        x="19"
        y="-46"
        width="21"
        height="5"
        rx="2"
        fill="#d58b77"
        stroke="#765574"
        strokeWidth="2"
      />

      {/* Roof is drawn before the windows */}
      <path
        d="M-58 8 L0 -45 L58 8 Z"
        fill={roofColor} stroke="#765574"
        strokeWidth="4" strokeLinejoin="round"
      />

      <path
        d="M-43 2 L0 -36 L43 2"
        fill="none" stroke="#f3d5ed"
        strokeWidth="3" strokeLinecap="round"
      />

      <rect
        x="-32" y="16" width="15" height="16" rx="3"
        fill="#8dc4c7" stroke="#986b52" strokeWidth="2"
      />

      {/* Flower box beneath the left window */}
      <rect
        x="-35"
        y="33"
        width="21"
        height="6"
        rx="2"
        fill="#986b52"
      />

      {/* Tiny flowers */}
      <circle cx="-31" cy="30" r="3" fill="#e889ad" />
      <circle cx="-24" cy="29" r="3" fill="#f4c95d" />
      <circle cx="-18" cy="31" r="3" fill="#d98bc8" />

      {/* Green leaves */}
      <path
        d="M-31 34 l-2 -5 M-24 34 l1 -5 M-18 35 l3 -4"
        stroke="#56895b"
        strokeWidth="2"
        fill="none"
      />

      <rect
        x="17" y="16" width="15" height="16" rx="3"
        fill="#8dc4c7" stroke="#986b52" strokeWidth="2"
      />

      {/* Flower box beneath the right window */}
      <rect
        x="14"
        y="33"
        width="21"
        height="6"
        rx="2"
        fill="#986b52"
      />

      {/* Tiny flowers */}
      <circle cx="18" cy="30" r="3" fill="#e889ad" />
      <circle cx="25" cy="29" r="3" fill="#f4c95d" />
      <circle cx="31" cy="31" r="3" fill="#d98bc8" />

      {/* Green leaves */}
      <path
        d="M18 34 l-2 -5 M25 34 l1 -5 M31 35 l3 -4"
        stroke="#56895b"
        strokeWidth="2"
        fill="none"
      />


      <rect
        x="-12" y="24" width="24" height="34" rx="4"
        fill={doorColor}
      />
      <circle cx="6" cy="42" r="2" fill="#f8d878" />
    </g>
  )
}

export default HouseA
