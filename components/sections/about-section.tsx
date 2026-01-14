"use client"

import { PuzzlePiece } from "@/components/puzzle-piece"
import { Heart, Star, Sparkles, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Amor y Contención",
    description: "Cada niño recibe el cariño y la atención que necesita para sentirse seguro y feliz.",
    color: "bg-puzzle-pink",
  },
  {
    icon: Sparkles,
    title: "Creatividad",
    description: "Fomentamos la expresión artística y la imaginación a través del juego libre.",
    color: "bg-puzzle-blue",
  },
  {
    icon: Star,
    title: "Excelencia",
    description: "Equipo docente capacitado y comprometido con la educación inicial de calidad.",
    color: "bg-puzzle-yellow",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Familias y educadores trabajando juntos por el bienestar de los más pequeños.",
    color: "bg-puzzle-green",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="relative py-20 bg-card overflow-hidden">
      {/* Decorative puzzle pieces */}
      <PuzzlePiece color="orange" size="xl" className="absolute -top-8 -right-8 opacity-20 rotate-45" />
      <PuzzlePiece color="blue" size="lg" className="absolute bottom-20 -left-6 opacity-20 -rotate-12" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <PuzzlePiece color="pink" size="sm" className="animate-wiggle" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Quiénes Somos</span>
            <PuzzlePiece color="blue" size="sm" className="animate-wiggle" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
            Construyendo el futuro, <span className="text-primary">pieza por pieza</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Desde hace más de 25 años, en <strong>Kinder One</strong> acompañamos a las familias en los primeros pasos
            de sus hijos, creando un espacio donde el aprendizaje y la diversión van de la mano.
          </p>
        </div>

        {/* Values Grid - Puzzle Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`
                relative p-6 rounded-3xl ${value.color}
                transform transition-all duration-300 hover:scale-105 hover:-rotate-1
                ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}
              `}
            >
              {/* Puzzle connector */}
              <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${value.color}`} />

              <div className="w-14 h-14 rounded-2xl bg-background/30 flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Philosophy Quote */}
        <div className="mt-16 relative">
          <div className="bg-background rounded-[2rem] p-8 lg:p-12 shadow-lg border-4 border-dashed border-puzzle-yellow">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-puzzle-pink flex items-center justify-center">
                  <span className="text-6xl">🧩</span>
                </div>
              </div>
              <div>
                <blockquote className="text-xl lg:text-2xl font-bold text-foreground mb-4 leading-relaxed">
                  "Creemos que cada niño es una pieza única e irrepetible. Nuestro trabajo es ayudarlos a descubrir cómo
                  encajan en el maravilloso rompecabezas de la vida."
                </blockquote>
                <cite className="text-muted-foreground font-medium">— Equipo Pedagógico de Kinder One</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
