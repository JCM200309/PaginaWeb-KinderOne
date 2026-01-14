"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const PUZZLE_PIECES = [
  { id: 0, row: 0, col: 0, color: "#E31B23" },
  { id: 1, row: 0, col: 1, color: "#003DA5" },
  { id: 2, row: 0, col: 2, color: "#FFD100" },
  { id: 3, row: 1, col: 0, color: "#009639" },
  { id: 4, row: 1, col: 1, color: "#E31B23" },
  { id: 5, row: 1, col: 2, color: "#003DA5" },
  { id: 6, row: 2, col: 0, color: "#FFD100" },
  { id: 7, row: 2, col: 1, color: "#009639" },
  { id: 8, row: 2, col: 2, color: "#E31B23" },
]

const ICONS = ["🎨", "🎵", "📚", "🌈", "✨", "⭐", "🦋", "🌻", "🎈"]

// Random starting positions for pieces
const getRandomPosition = () => ({
  x: Math.random() * 300 - 150,
  y: Math.random() * 300 - 150,
  rotation: Math.random() * 360,
})

/**
 * ✅ Edge maps (shared borders) so pieces always interlock correctly
 */
type Edges = { top: number; right: number; bottom: number; left: number }

function buildEdgeMaps(rows: number, cols: number) {
  // verticalEdges[r][c] is the shared edge between (r,c) and (r,c+1)
  const verticalEdges = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols - 1 }, (_, c) => ((r + c) % 2 === 0 ? 1 : -1)),
  )

  // horizontalEdges[r][c] is the shared edge between (r,c) and (r+1,c)
  const horizontalEdges = Array.from({ length: rows - 1 }, (_, r) =>
    Array.from({ length: cols }, (_, c) => ((r + c) % 2 === 0 ? -1 : 1)),
  )

  return { verticalEdges, horizontalEdges }
}

const { verticalEdges, horizontalEdges } = buildEdgeMaps(3, 3)

function getEdges(row: number, col: number): Edges {
  const top = row === 0 ? 0 : -horizontalEdges[row - 1][col]
  const bottom = row === 2 ? 0 : horizontalEdges[row][col]
  const left = col === 0 ? 0 : -verticalEdges[row][col - 1]
  const right = col === 2 ? 0 : verticalEdges[row][col]
  return { top, right, bottom, left }
}

/**
 * ✅ Robust edge drawing:
 * - Uses outward normal (nx, ny), so it works even if the edge is drawn right-to-left or bottom-to-top.
 */
function drawEdgeWithNormal(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  tab: number, // 0 flat, 1 tab out, -1 tab in
  nx: number, // outward normal x
  ny: number, // outward normal y
  tabSize: number,
  halfTab: number,
): string {
  if (tab === 0) return `L ${endX} ${endY}`

  const midX = (startX + endX) / 2
  const midY = (startY + endY) / 2

  // Tangent unit vector along the edge
  const dx = endX - startX
  const dy = endY - startY
  const len = Math.max(1e-6, Math.hypot(dx, dy))
  const tx = dx / len
  const ty = dy / len

  // Points where the “tab” starts and ends along the edge
  const p1x = midX - tx * halfTab
  const p1y = midY - ty * halfTab
  const p2x = midX + tx * halfTab
  const p2y = midY + ty * halfTab

  // Offset in outward direction (tab out/in)
  const offX = nx * tab * tabSize
  const offY = ny * tab * tabSize

  // Gentle “bulge” (two cubic curves)
  return `
    L ${p1x} ${p1y}
    C ${p1x + offX * 0.2} ${p1y + offY * 0.2},
      ${midX + offX} ${midY + offY},
      ${midX + offX} ${midY + offY}
    C ${midX + offX} ${midY + offY},
      ${p2x + offX * 0.2} ${p2y + offY * 0.2},
      ${p2x} ${p2y}
    L ${endX} ${endY}
  `
}

function getPuzzlePiecePath(row: number, col: number, size: number): string {
  const tabSize = size * 0.18
  const tabWidth = size * 0.26
  const halfTab = tabWidth / 2

  // ✅ Shared edges (consistent interlock)
  const { top, right, bottom, left } = getEdges(row, col)

  let path = `M 0 0`

  // Top edge (outward normal up)
  path += drawEdgeWithNormal(0, 0, size, 0, top, 0, -1, tabSize, halfTab)

  // Right edge (outward normal right)
  path += drawEdgeWithNormal(size, 0, size, size, right, 1, 0, tabSize, halfTab)

  // Bottom edge (outward normal down) — even though we draw right-to-left, normal keeps it correct
  path += drawEdgeWithNormal(size, size, 0, size, bottom, 0, 1, tabSize, halfTab)

  // Left edge (outward normal left) — even though we draw bottom-to-top
  path += drawEdgeWithNormal(0, size, 0, 0, left, -1, 0, tabSize, halfTab)

  path += " Z"
  return path
}

function PuzzlePieceSVG({
  row,
  col,
  color,
  icon,
  size = 100,
  isCenter,
  assembled,
}: {
  row: number
  col: number
  color: string
  icon: string
  size?: number
  isCenter: boolean
  assembled: boolean
}) {
  const path = getPuzzlePiecePath(row, col, size)
  const padding = size * 0.25

  const gradientId = `highlight-${row}-${col}`

  return (
    <svg
      width={size + padding * 2}
      height={size + padding * 2}
      viewBox={`${-padding} ${-padding} ${size + padding * 2} ${size + padding * 2}`}
      className="overflow-visible"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="50%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="black" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <path d={path} fill="rgba(0,0,0,0.2)" transform="translate(4, 4)" />

      {/* Main piece */}
      <path
        d={path}
        fill={color}
        stroke="rgba(0,0,0,0.22)"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Inner highlight for 3D effect */}
      <path d={path} fill={`url(#${gradientId})`} />

      {/* Icon */}
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={isCenter ? size * 0.4 : size * 0.32}
        className={`transition-transform duration-500 ${assembled ? "scale-110" : "scale-100"}`}
        style={{
          transformOrigin: "center",
          transformBox: "fill-box",
          filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.3))",
        }}
      >
        {icon}
      </text>
    </svg>
  )
}

export function AnimatedPuzzle() {
  const [assembled, setAssembled] = useState(false)
  const [pieces, setPieces] = useState<
    Array<{ placed: boolean; startPos: { x: number; y: number; rotation: number } }>
  >([])
  const [currentPiece, setCurrentPiece] = useState(-1)

  useEffect(() => {
    setPieces(PUZZLE_PIECES.map(() => ({ placed: false, startPos: getRandomPosition() })))
  }, [])

  useEffect(() => {
    if (pieces.length === 0) return

    const timer = setTimeout(
      () => {
        if (currentPiece < PUZZLE_PIECES.length - 1) {
          const nextPiece = currentPiece + 1
          setCurrentPiece(nextPiece)
          setPieces((prev) => prev.map((p, i) => (i === nextPiece ? { ...p, placed: true } : p)))
        } else if (currentPiece === PUZZLE_PIECES.length - 1) {
          setTimeout(() => setAssembled(true), 500)
        }
      },
      currentPiece === -1 ? 800 : 400,
    )

    return () => clearTimeout(timer)
  }, [currentPiece, pieces.length])

  useEffect(() => {
    if (!assembled) return

    const resetTimer = setTimeout(() => {
      setAssembled(false)
      setCurrentPiece(-1)
      setPieces(PUZZLE_PIECES.map(() => ({ placed: false, startPos: getRandomPosition() })))
    }, 4000)

    return () => clearTimeout(resetTimer)
  }, [assembled])

  const pieceSize = 90

  return (
    <div className="relative aspect-square max-w-md mx-auto">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background glow when assembled */}
        <div
          className={`absolute inset-0 rounded-3xl transition-all duration-1000 ${
            assembled ? "bg-[#FFD100]/30 shadow-2xl shadow-[#FFD100]/50 scale-105" : ""
          }`}
        />

        <div className="relative" style={{ width: pieceSize * 3, height: pieceSize * 3 }}>
          {PUZZLE_PIECES.map((piece, index) => {
            const pieceState = pieces[index]
            const isPlaced = pieceState?.placed ?? false
            const startPos = pieceState?.startPos ?? { x: 0, y: 0, rotation: 0 }
            const isCenter = index === 4

            const x = piece.col * pieceSize
            const y = piece.row * pieceSize

            return (
              <div
                key={piece.id}
                className="absolute transition-all duration-700 ease-out"
                style={{
                  left: x - pieceSize * 0.25,
                  top: y - pieceSize * 0.25,
                  transform: isPlaced
                    ? "translate(0, 0) rotate(0deg) scale(1)"
                    : `translate(${startPos.x}px, ${startPos.y}px) rotate(${startPos.rotation}deg) scale(0.6)`,
                  opacity: isPlaced ? 1 : 0,
                  zIndex: isPlaced ? 10 + index : 0,
                }}
              >
                <PuzzlePieceSVG
                  row={piece.row}
                  col={piece.col}
                  color={piece.color}
                  icon={ICONS[index]}
                  size={pieceSize}
                  isCenter={isCenter}
                  assembled={assembled}
                />
              </div>
            )
          })}
        </div>

        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ${
            assembled ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl mt-[340px] flex items-center gap-3">
            <Image src="/images/logo.png" alt="Kinder One Logo" width={50} height={50} className="object-contain" />
            <span className="text-xl sm:text-2xl font-black text-foreground">
              ¡Kinder <span className="text-[#E31B23]">One</span>!
            </span>
          </div>
        </div>
      </div>

      {/* Floating sparkles when assembled */}
      {assembled && (
        <>
          <Sparkle className="absolute top-0 left-1/4 animate-ping" delay="0s" />
          <Sparkle className="absolute top-1/4 right-0 animate-ping" delay="0.2s" />
          <Sparkle className="absolute bottom-1/4 left-0 animate-ping" delay="0.4s" />
          <Sparkle className="absolute bottom-0 right-1/4 animate-ping" delay="0.6s" />
        </>
      )}
    </div>
  )
}

function Sparkle({ className, delay }: { className: string; delay: string }) {
  return (
    <div className={className} style={{ animationDelay: delay }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FFD100]">
        <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor" />
      </svg>
    </div>
  )
}
