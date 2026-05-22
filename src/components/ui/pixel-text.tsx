"use client"

import { useEffect, useMemo, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface PixelTextProps {
  text: string
  rows?: number
  cols?: number
  pixelFadeInDuration?: number
  maxAnimationDelay?: number
  className?: string
  textClassName?: string
}

export const PixelText = ({
  text,
  rows = 3,
  cols = 10,
  pixelFadeInDuration = 800,
  maxAnimationDelay = 600,
  className,
  textClassName,
}: PixelTextProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Small delay to ensure DOM is ready, then trigger the animation
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const pieces = useMemo(() => {
    const total = rows * cols
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols)
      const col = index % cols

      const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`

      const delay = Math.random() * maxAnimationDelay
      return { clipPath, delay }
    })
  }, [rows, cols, maxAnimationDelay])

  return (
    <div ref={containerRef} className={cn("relative inline-block", className)}>
      {/* Invisible text to reserve space */}
      <span className={cn("invisible whitespace-nowrap", textClassName)}>
        {text}
      </span>

      {/* Pixel pieces overlay */}
      {pieces.map((piece, index) => (
        <span
          key={index}
          className={cn(
            "absolute inset-0 flex items-center transition-opacity ease-out",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{
            clipPath: piece.clipPath,
            transitionDelay: `${piece.delay}ms`,
            transitionDuration: `${pixelFadeInDuration}ms`,
          }}
          aria-hidden="true"
        >
          <span className={cn("whitespace-nowrap", textClassName)}>
            {text}
          </span>
        </span>
      ))}

      {/* Screen reader accessible text */}
      <span className="sr-only">{text}</span>
    </div>
  )
}
