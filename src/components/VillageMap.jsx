import River from './water/River'
import Creek from './water/Creek'
import Pond from './water/Pond'
import HouseA from './houses/HouseA'
import HouseB from './houses/HouseB'
import HouseC from './houses/HouseC'
import { useState } from 'react'
function VillageMap() {
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const [dragging, setDragging] = useState(false)
  const [lastPointer, setLastPointer] = useState({ x: 0, y: 0 })

  function handlePointerDown(event) {
    setDragging(true)
    setLastPointer({
      x: event.clientX,
      y: event.clientY,
    })
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event) {
    if (!dragging) return

    const deltaX = event.clientX - lastPointer.x
    const deltaY = event.clientY - lastPointer.y

    setPosition((previous) => ({
      x: previous.x + deltaX,
      y: previous.y + deltaY,
    }))

    setLastPointer({
      x: event.clientX,
      y: event.clientY,
    })
  }

  function handlePointerUp() {
    setDragging(false)
  }

  function zoomIn() {
    setZoom((currentZoom) =>
      Math.min(currentZoom + 0.2, 2)
    )
  }

  function zoomOut() {
    setZoom((currentZoom) =>
      Math.max(currentZoom - 0.2, 0.8)
    )
  }

  function resetMap() {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }
  return (
    <div className="village-map">
      <div
        className="map-camera"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <svg
          className="village-art"
          viewBox="0 0 2400 1600"
          role="img"
          aria-label="A cozy fantasy village with winding paths, tiny houses, trees, and portfolio landmarks"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="grass" width="70" height="70" patternUnits="userSpaceOnUse">
              <rect width="70" height="70" fill="#b8ce91" />
              <circle cx="12" cy="20" r="2" fill="#96b77a" />
              <circle cx="48" cy="52" r="3" fill="#d4dda5" />
              <path d="M25 8 l5 -5 M57 18 l5 4" stroke="#91b47a" strokeWidth="2" />
            </pattern>
            <linearGradient id="grassGradient" x1="0" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#d5e5aa" />
              <stop offset="55%" stopColor="#a8c982" />
              <stop offset="100%" stopColor="#83ae70" />
            </linearGradient>

            <linearGradient id="hillGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#dce8b4" />
              <stop offset="100%" stopColor="#a9c98a" />
            </linearGradient>

            <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bcece6" />
              <stop offset="50%" stopColor="#79cbd1" />
              <stop offset="100%" stopColor="#65b4c4" />
            </linearGradient>

            <filter id="softShadow" x="-30%" y="-30%" width="160%" height="170%">
              <feDropShadow dx="0" dy="7" stdDeviation="7" floodColor="#526c4b" floodOpacity="0.25" />
            </filter>

          </defs>
          {/* Expanded world background */}
          <rect
            x="0"
            y="0"
            width="2400"
            height="1600"
            fill="url(#grassGradient)"
          />
          {/* Existing village region */}
          <g transform="translate(300 350)">

          {/* Distant rolling hills */}
          <path
            d="M-900 165 Q-770 40 -620 140 T-300 155 T0 180 Q130 55 270 155 T540 140 T830 115 T1200 165 Q1370 205 1530 140 T1840 160 T2200 125 L2200 -600 L-900 -600Z"
            fill="#c4d99c"
            opacity="0.8"
          />

          <path
            d="M-900 250 Q-750 120 -600 215 T-300 230 T0 250 Q180 125 350 220 T690 190 T1000 215 T1200 165 Q1380 130 1530 195 T1850 175 T2200 200 L2200 -600 L-900 -600Z"
            fill="url(#hillGradient)"
          />

          {/* Middle-ground meadow */}
          <path
            d="M-900 420 Q-750 340 -600 390 T-300 430 T0 420 Q170 330 340 425 T680 380 T970 420 T1200 350 Q1400 300 1590 395 T1900 370 T2200 420 L2200 1550 Q1850 1610 1500 1530 T800 1580 T100 1510 T-900 1570Z"
            fill="#b2cf8e"
          />

          {/* Foreground rolling hills */}
          <path
            d="M-900 650 Q-760 530 -600 610 T-300 650 T0 650 Q170 535 350 650 T690 600 T1000 660 T1200 570 Q1400 520 1580 640 T1900 600 T2200 650 L2200 1650 Q1850 1700 1500 1620 T800 1680 T100 1610 T-900 1670Z"
            fill="#91b978"
          />

          {/* Soft foreground meadow */}
          <path
            d="M-900 740 Q-700 650 -500 730 T-100 750 T0 740 Q240 650 440 735 T850 710 T1200 690 Q1400 660 1600 720 T1950 700 T2200 740 L2200 1700 Q1850 1750 1500 1670 T800 1730 T100 1660 T-900 1720Z"
            fill="#a4c782"
            opacity="0.9"
          />
          {/*river main component*/}
          <River />

          {/* Small creek near the extended meadow */}
          <Creek x={180} y={560} />

          {/* Small fantasy pond */}
          <Pond x={1050} y={170} scale={0.9} />

          {/* Winding village paths */}
          <path
            d="M80 760 C160 640 240 690 320 560 S470 470 510 350 S680 280 750 180 S960 170 1110 70"
            fill="none"
            stroke="#a88b66"
            strokeWidth="100"
            strokeLinecap="round"
          />
          <path
            d="M80 760 C160 640 240 690 320 560 S470 470 510 350 S680 280 750 180 S960 170 1110 70"
            fill="none"
            stroke="#f1dfb6"
            strokeWidth="84"
            strokeLinecap="round"
          />
          <path
            d="M320 560 C450 620 540 660 700 610 S940 620 1100 730"
            fill="none"
            stroke="#a88b66"
            strokeWidth="66"
            strokeLinecap="round"
          />
          <path
            d="M320 560 C450 620 540 660 700 610 S940 620 1100 730"
            fill="none"
            stroke="#f1dfb6"
            strokeWidth="52"
            strokeLinecap="round"
          />

          {/* Village houses — reusable components */}

          {/* House 1: Lavender classic cottage */}
          <HouseA
            x={130}
            y={180}
            wallColor="#f8e8c7"
            roofColor="#a779a8"
            doorColor="#8c6049"
          />

          {/* House 2: Golden round cottage */}
          <HouseB
            x={425}
            y={165}
            wallColor="#fff0d3"
            roofColor="#d7a05c"
            doorColor="#80543c"
          />

          {/* House 3: Purple tower house */}
          <HouseC
            x={910}
            y={250}
            wallColor="#e9d9f5"
            roofColor="#7863a8"
            doorColor="#754b43"
          />

          {/* House 4: Mint round cottage */}
          <HouseB
            x={810}
            y={665}
            wallColor="#d8eed5"
            roofColor="#78a9a0"
            doorColor="#80543c"
          />


          {/* Cherry-blossom trees */}
          {[
            [70, 100], [280, 250], [360, 330], [585, 130],
            [1030, 150], [1070, 460], [180, 520], [610, 710],
            [980, 700], [720, 300], [260, 720], [500, 560]
          ].map(([x, y], i) => (
            <g key={i} transform={`translate(${x} ${y})`}>
              <ellipse cx="0" cy="17" rx="27" ry="11" fill="#6d9665" opacity=".35" />
              <path d="M0 15 L0 -14" stroke="#8b6448" strokeWidth="9" strokeLinecap="round" />
              <circle cx="-13" cy="-20" r="22" fill="#eaa5bd" />
              <circle cx="12" cy="-24" r="24" fill="#f4bfd0" />
              <circle cx="0" cy="-39" r="21" fill="#f8d5df" />
              <circle cx="0" cy="-19" r="17" fill="#f3b7cb" />
              <circle cx="-9" cy="-32" r="4" fill="#fff0d3" />
              <circle cx="14" cy="-19" r="4" fill="#fff0d3" />
            </g>
          ))}

          {/* Small decorative rocks */}
          <g fill="#e9d9b5" stroke="#b9a17b" strokeWidth="3">
            <ellipse cx="200" cy="390" rx="18" ry="11" />
            <ellipse cx="215" cy="408" rx="12" ry="8" />
            <ellipse cx="720" cy="510" rx="18" ry="10" />
            <ellipse cx="740" cy="523" rx="11" ry="7" />
          </g>

          {/* Interactive landmark markers */}
          <g className="map-landmark" transform="translate(330 490)">
            <circle r="37" fill="#fff4d5" stroke="#9a7755" strokeWidth="5" />
            <text y="12" textAnchor="middle" fontSize="36">🏰</text>
            <rect x="-66" y="43" width="132" height="30" rx="15" fill="#7852a0" stroke="#fff0d3" strokeWidth="3" />
            <text y="63" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">PROJECTS</text>
          </g>

          <g className="map-landmark" transform="translate(670 205)">
            <circle r="34" fill="#fff4d5" stroke="#9a7755" strokeWidth="5" />
            <text y="12" textAnchor="middle" fontSize="32">📚</text>
            <rect x="-57" y="40" width="114" height="28" rx="14" fill="#7852a0" stroke="#fff0d3" strokeWidth="3" />
            <text y="59" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="bold">SKILLS</text>
          </g>

          <g className="map-landmark" transform="translate(1010 540)">
            <circle r="34" fill="#fff4d5" stroke="#9a7755" strokeWidth="5" />
            <text y="11" textAnchor="middle" fontSize="30">🎓</text>
            <rect x="-66" y="40" width="132" height="28" rx="14" fill="#7852a0" stroke="#fff0d3" strokeWidth="3" />
            <text y="59" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="bold">EDUCATION</text>
          </g>

          {/* Village sign */}
          <g transform="translate(575 480)">
            <rect x="-70" y="-22" width="140" height="44" rx="12" fill="#f6e5bf" stroke="#986b52" strokeWidth="4" />
            <text y="7" textAnchor="middle" fontSize="18" fill="#694c39" fontWeight="bold">SAKURA VILLAGE</text>
          </g>
          </g>
        </svg>
      </div>
      <div className="map-controls">
        <button
          type="button"
          onClick={zoomIn}
          aria-label="Zoom in"
        >
          +
        </button>

        <button
          type="button"
          onClick={zoomOut}
          aria-label="Zoom out"
        >
          −
        </button>

        <button
          type="button"
          onClick={resetMap}
          aria-label="Reset map"
        >
          ⌂
        </button>
      </div>
    </div>
  )
}

export default VillageMap
