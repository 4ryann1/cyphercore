
"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const moveCursor = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
      if (ringRef.current) {
        ringRef.current.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
          },
          { duration: 500, fill: "forwards" }
        )
      }
    }

    const handleMouseDown = () => {
      if (dotRef.current) dotRef.current.style.transform = "translate(-50%, -50%) scale(0.5)"
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%, -50%) scale(1.5)"
    }

    const handleMouseUp = () => {
      if (dotRef.current) dotRef.current.style.transform = "translate(-50%, -50%) scale(1)"
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%, -50%) scale(1)"
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      <div ref={dotRef} className="custom-cursor hidden md:block" />
      <div ref={ringRef} className="custom-cursor-ring hidden md:block" />
    </>
  )
}
