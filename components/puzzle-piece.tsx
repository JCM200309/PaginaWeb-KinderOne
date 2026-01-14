"use client"

import { cn } from "@/lib/utils"

interface PuzzlePieceProps {
  color?: "pink" | "blue" | "yellow" | "green" | "orange"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  variant?: "full" | "tab-top" | "tab-right" | "tab-bottom" | "tab-left"
}

const colorClasses = {
  pink: "fill-puzzle-pink",
  blue: "fill-puzzle-blue",
  yellow: "fill-puzzle-yellow",
  green: "fill-puzzle-green",
  orange: "fill-puzzle-orange",
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
}

export function PuzzlePiece({ color = "pink", size = "md", className, variant = "full" }: PuzzlePieceProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(sizeClasses[size], colorClasses[color], className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 0 
           H45 
           C45 0, 45 5, 50 5 
           C55 5, 55 0, 55 0 
           H75 
           Q100 0, 100 25 
           V45 
           C100 45, 95 45, 95 50 
           C95 55, 100 55, 100 55 
           V75 
           Q100 100, 75 100 
           H55 
           C55 100, 55 95, 50 95 
           C45 95, 45 100, 45 100 
           H25 
           Q0 100, 0 75 
           V55 
           C0 55, 5 55, 5 50 
           C5 45, 0 45, 0 45 
           V25 
           Q0 0, 25 0 Z"
      />
    </svg>
  )
}

export function PuzzleDecoration({ className }: { className?: string }) {
  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <div className="relative">
        <PuzzlePiece color="pink" size="lg" className="animate-float absolute -top-4 -left-4 opacity-60" />
        <PuzzlePiece color="blue" size="md" className="animate-float-delayed absolute top-8 left-12 opacity-50" />
        <PuzzlePiece color="yellow" size="sm" className="animate-wiggle absolute -top-8 left-20 opacity-70" />
        <PuzzlePiece color="green" size="md" className="animate-float absolute top-16 -left-2 opacity-40" />
      </div>
    </div>
  )
}
