"use client"

import { PuzzlePiece } from "@/components/puzzle-piece"
import { AnimatedPuzzle } from "@/components/animated-puzzle"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Floating puzzle pieces background */}
      <div className="absolute inset-0 pointer-events-none">
        <PuzzlePiece color="pink" size="xl" className="absolute top-32 left-[10%] animate-float opacity-30" />
        <PuzzlePiece color="blue" size="lg" className="absolute top-48 right-[15%] animate-float-delayed opacity-40" />
        <PuzzlePiece color="yellow" size="xl" className="absolute bottom-32 left-[20%] animate-wiggle opacity-25" />
        <PuzzlePiece color="green" size="lg" className="absolute top-[60%] right-[10%] animate-float opacity-35" />
        <PuzzlePiece color="orange" size="md" className="absolute top-40 left-[40%] animate-float-delayed opacity-30" />
        <PuzzlePiece color="pink" size="md" className="absolute bottom-48 right-[30%] animate-wiggle opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-puzzle-yellow rounded-full">
              <span className="w-2 h-2 bg-puzzle-orange rounded-full animate-pulse" />
              <span className="text-sm font-bold text-foreground">¡Inscripciones Abiertas 2026!</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-balance">
              Donde las{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">infancias</span>
                <div className="absolute -bottom-2 left-0 right-0 h-4 bg-puzzle-yellow -rotate-1 rounded-lg" />
              </span>{" "}
              crecen en bienestar, cuidado y aprendizaje
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              <strong>Kinder One </strong> es un jardín maternal y de educación inicial con más de 35 años de trayectoria, por el Gobierno de la Ciudad de Buenos Aires por su propuesta educativa de calidad, centrada en el desarrollo integral de niños y niñas.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full text-lg px-8 font-bold bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-5 w-5" />
                Contactanos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-lg px-8 font-bold border-2 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Más Info
              </Button>
            </div>

            {/* Stats as puzzle pieces */}
            <div className="flex flex-wrap gap-4 pt-8">
              {[
                { number: "35+", label: "Años de experiencia" },
                { number: "0-3", label: "Años de edad" },
                {number: "🌱", label: "Un lugar para crecer"}
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={cn(
                    "px-6 py-4 rounded-2xl text-center transform",
                    i === 0 && "bg-puzzle-pink rotate-2",
                    i === 1 && "bg-puzzle-blue -rotate-1",
                    i === 2 && "bg-puzzle-green rotate-1"
                  )}
                >
                  <div className="text-2xl font-black text-foreground">{stat.number}</div>
                  <div className="text-xs font-bold text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Puzzle Illustration */}
          <div className="relative lg:pb-50">
            <AnimatedPuzzle />
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-card"
          />
        </svg>
      </div>
    </section>
  )
}
