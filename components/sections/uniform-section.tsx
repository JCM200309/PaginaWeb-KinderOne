"use client"

import { PuzzlePiece } from "@/components/puzzle-piece"
import { ShieldCheck, Sparkles, Users, Ruler } from "lucide-react"

const uniformImages = [
  { src: "/images/uniform/remera.jpeg", alt: "Remera Kinder One" },
  { src: "/images/uniform/campera.jpeg", alt: "Campera Kinder One" },
  { src: "/images/uniform/pantalon.jpeg", alt: "Pantalón Kinder One" },
  { src: "/images/uniform/short.jpeg", alt: "Short Kinder One" },
]

export function UniformSection() {
  return (
    <section id="uniforme" className="relative py-20 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <PuzzlePiece color="green" size="xl" className="absolute top-10 left-10 rotate-12" />
        <PuzzlePiece color="blue" size="lg" className="absolute bottom-10 right-10 -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <PuzzlePiece color="blue" size="sm" className="animate-float" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Nuestra Identidad</span>
            <PuzzlePiece color="green" size="sm" className="animate-float-delayed" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
            La importancia del <span className="text-primary">uniforme escolar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En Kinder One, el uso del uniforme forma parte de nuestra propuesta institucional y tiene como objetivo principal favorecer el bienestar, la comodidad y la igualdad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-puzzle-pink/10 border-2 border-dashed border-puzzle-pink/30 hover:border-puzzle-pink/60 transition-colors">
                <ShieldCheck className="w-10 h-10 text-puzzle-pink mb-4" />
                <h3 className="font-bold text-xl mb-2 text-foreground">Identidad</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Promueve un sentido de pertenencia y fortalece los vínculos institucionales desde edades tempranas.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-puzzle-blue/10 border-2 border-dashed border-puzzle-blue/30 hover:border-puzzle-blue/60 transition-colors">
                <Sparkles className="w-10 h-10 text-puzzle-blue mb-4" />
                <h3 className="font-bold text-xl mb-2 text-foreground">Igualdad</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Genera un clima de igualdad, evitando comparaciones y distracciones vinculadas a la vestimenta.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-puzzle-yellow/10 border-2 border-dashed border-puzzle-yellow/30 hover:border-puzzle-yellow/60 transition-colors">
                <Ruler className="w-10 h-10 text-puzzle-yellow mb-4" />
                <h3 className="font-bold text-xl mb-2 text-foreground">Autonomía</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Facilita el movimiento, el juego y la exploración diaria de manera cómoda y segura.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-puzzle-green/10 border-2 border-dashed border-puzzle-green/30 hover:border-puzzle-green/60 transition-colors">
                <Users className="w-10 h-10 text-puzzle-green mb-4" />
                <h3 className="font-bold text-xl mb-2 text-foreground">Práctica</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Simplifica las rutinas cotidianas y favorece la organización tanto en el jardín como en el hogar.
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-[2rem] shadow-sm border-l-8 border-primary italic text-muted-foreground leading-relaxed">
              "El uniforme escolar no solo cumple una función práctica, sino que acompaña el desarrollo integral de los niños y niñas, en coherencia con los valores de cuidado y respeto."
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {uniformImages.map((img, i) => (
              <div 
                key={i} 
                className={`
                  relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md
                  transform transition-all duration-300 hover:scale-105
                  ${i % 2 === 0 ? "rotate-2" : "-rotate-2"}
                  hover:rotate-0
                `}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
