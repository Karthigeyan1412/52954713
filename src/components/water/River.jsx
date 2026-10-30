
function River() {
  const riverPath =
    "M-40 360 C150 285 190 490 350 450 S550 330 680 420 S900 530 1240 350"

  return (
    <g>
      {/* River shadow and bank */}
      <path
        d={riverPath}
        fill="none"
        stroke="#739f7b"
        strokeWidth="94"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* Main river water */}
      <path
        d={riverPath}
        fill="none"
        stroke="url(#waterGradient)"
        strokeWidth="78"
        strokeLinecap="round"
      />

      {/* Soft natural water reflections */}
      <g fill="#e4f8ff" opacity="0.55">
        <ellipse cx="115" cy="310" rx="13" ry="3" />
        <ellipse cx="275" cy="438" rx="9" ry="2.5" />
        <ellipse cx="440" cy="390" rx="15" ry="3" />
        <ellipse cx="610" cy="389" rx="11" ry="2.5" />
        <ellipse cx="790" cy="465" rx="14" ry="3" />
        <ellipse cx="990" cy="463" rx="10" ry="2.5" />
      </g>


      

    </g>
  )
}

export default River
