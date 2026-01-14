"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { label: "Inicio", href: "#inicio", color: "bg-puzzle-pink" },
  { label: "Nosotros", href: "#nosotros", color: "bg-puzzle-blue" },
  { label: "Propuesta", href: "#propuesta", color: "bg-puzzle-yellow" },
  { label: "Instalaciones", href: "#instalaciones", color: "bg-puzzle-green" },
  { label: "Galería", href: "#galeria", color: "bg-puzzle-orange" },
  { label: "Contacto", href: "#contacto", color: "bg-puzzle-pink" },
]

export function PuzzleNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo as puzzle pieces */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Kinder One Logo"
              width={56}
              height={56}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-2xl font-black text-foreground">
              Kinder <span className="text-primary">One</span>
            </span>
          </a>

          {/* Desktop Navigation - Puzzle Tabs */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 font-bold text-sm rounded-xl transition-all duration-300",
                  "hover:scale-105 hover:-translate-y-1",
                  item.color,
                  "text-foreground",
                )}
                style={{
                  transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                }}
              >
                {/* Puzzle tab connector */}
                <div className={cn("absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full", item.color)} />
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-puzzle-pink text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn("block px-4 py-3 font-bold rounded-xl text-center", item.color, "text-foreground")}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
