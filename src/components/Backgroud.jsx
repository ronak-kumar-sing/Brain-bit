"use client"

import { useEffect, useState, useCallback, useMemo } from "react"

function RefinedBackground() {
  const [grid, setGrid] = useState({ cols: 0, rows: 0, total: 0 })
  const [hovered, setHovered] = useState(null)

  const BOX_SIZE = 80

  const calculateGrid = useCallback(() => {
    const cols = Math.floor(window.innerWidth / BOX_SIZE)
    const rows = Math.floor(window.innerHeight / BOX_SIZE)
    setGrid({ cols, rows, total: cols * rows })
  }, [])

  const getHoveredBox = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const col = Math.floor((e.clientX - rect.left) / (rect.width / grid.cols))
      const row = Math.floor((e.clientY - rect.top) / (rect.height / grid.rows))

      return col >= 0 && col < grid.cols && row >= 0 && row < grid.rows ? row * grid.cols + col : null
    },
    [grid],
  )

  const getEffectMap = useCallback(
    (index) => {
      if (!index && index !== 0) return new Map()

      const map = new Map()
      const centerRow = Math.floor(index / grid.cols)
      const centerCol = index % grid.cols

      for (let r = Math.max(0, centerRow - 3); r <= Math.min(grid.rows - 1, centerRow + 3); r++) {
        for (let c = Math.max(0, centerCol - 3); c <= Math.min(grid.cols - 1, centerCol + 3); c++) {
          const distance = Math.max(Math.abs(r - centerRow), Math.abs(c - centerCol))
          if (distance <= 3) {
            map.set(r * grid.cols + c, 1 - distance / 3)
          }
        }
      }
      return map
    },
    [grid],
  )

  useEffect(() => {
    calculateGrid()
    window.addEventListener("resize", calculateGrid)
    return () => window.removeEventListener("resize", calculateGrid)
  }, [calculateGrid])

  const effectMap = useMemo(() => getEffectMap(hovered), [hovered, getEffectMap])

  return (
    <div className="bg-gray-900 h-screen w-screen overflow-hidden fixed top-0 left-0 ">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
          gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
          gap: "2px",
          width: "100vw",
          height: "100vh",
          padding: "4px",
        }}
        onMouseMove={(e) => setHovered(getHoveredBox(e))}
        onMouseLeave={() => setHovered(null)}
      >
        {Array.from({ length: grid.total }, (_, i) => {
          const intensity = effectMap.get(i) || 0
          const angle =
            hovered !== null
              ? Math.atan2(
                Math.floor(i / grid.cols) - Math.floor(hovered / grid.cols),
                (i % grid.cols) - (hovered % grid.cols),
              ) *
              57.3 +
              90
              : 135

          return (
            <div
              key={i}
              className="transition-all duration-300 ease-out"
              style={{
                background:
                  intensity > 0
                    ? `linear-gradient(${angle}deg,
                    rgba(255,255,255,${intensity * 0.2}),
                    rgba(147,197,253,${intensity * 0.15}),
                    rgba(99,102,241,${intensity * 0.1}),
                    rgba(255,255,255,${intensity * 0.05}))`
                    : "transparent",
                border: `${Math.max(1, intensity * 3)}px solid rgba(255,255,255,${intensity * 0.5})`,
                borderRadius: "6px",
                opacity: Math.max(intensity * 0.3, 0.02),
                transform: `scale(${1 + intensity * 0.1})`,
                boxShadow: intensity > 0 ? `0 0 ${intensity * 20}px rgba(147,197,253,${intensity * 0.3})` : "none",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default RefinedBackground
