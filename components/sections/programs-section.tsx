"use client"

import { useState } from "react"
import { PuzzlePiece } from "@/components/puzzle-piece"
import { Baby, Smile, GraduationCap, Palette, X, ChevronLeft, ChevronRight } from "lucide-react"

const programs = [
  {
    icon: Baby,
    age: "Lactarios",
    title: "Sala Lactarios",
    subtitle: "Primeros Pasos",
    description: "Estimulación temprana, desarrollo sensorial y mucho amor en un ambiente seguro y cálido.",
    features: ["Estimulación temprana", "Música y movimiento", "Alimentación cuidada"],
    color: "puzzle-pink",
    bgColor: "bg-puzzle-pink",
    images: ["/images/images.jpg", "/images/image3.jpg", "/images/images (1).jpg"]
  },
  {
    icon: Smile,
    age: "0-1 años",
    title: "Sala de 1",
    subtitle: "Exploradores",
    description: "Descubrimiento del mundo a través del juego, el arte y las primeras interacciones sociales.",
    features: ["Arte y expresión", "Socialización", "Psicomotricidad", "Lenguaje"],
    color: "puzzle-blue",
    bgColor: "bg-puzzle-blue",
    images: ["/images/his_sofija-05-19-235_0.jpg.webp", "/images/GettyImages-1461629187 (1).jpg"]
  },
  {
    icon: Palette,
    age: "1-2 años",
    title: "Sala de 2",
    subtitle: "Creativos",
    description: "Desarrollo de la creatividad, autonomía y habilidades pre-escolares en un ambiente lúdico.",
    features: ["Arte y expresión", "Socialización", "Psicomotricidad", "Lenguaje"],
    color: "puzzle-yellow",
    bgColor: "bg-puzzle-yellow",
    images: ["/images/6-successacademies_25048656-1-scaled.jpg", "/images/images.jpg"]
  },
  {
    icon: GraduationCap,
    age: "2-3 años",
    title: "Sala de 3",
    subtitle: "Preparados",
    description: "Preparación integral para el ingreso a la escuela primaria con confianza y entusiasmo.",
    features: ["Arte y expresión", "Socialización", "Psicomotricidad", "Lenguaje"],
    color: "puzzle-green",
    bgColor: "bg-puzzle-green",
    images: ["/images/image3.jpg", "/images/images (1).jpg"]
  },
]

export function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openCarousel = (index: number) => {
    setSelectedProgram(index)
    setCurrentImageIndex(0)
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedProgram !== null) {
      setCurrentImageIndex((prev) => (prev + 1) % programs[selectedProgram].images.length)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedProgram !== null) {
      setCurrentImageIndex((prev) => (prev - 1 + programs[selectedProgram].images.length) % programs[selectedProgram].images.length)
    }
  }

  return (
    <section id="propuesta" className="relative py-20 overflow-hidden">
      {/* Background puzzle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <PuzzlePiece color="pink" size="xl" />
        </div>
        <div className="absolute top-40 right-20">
          <PuzzlePiece color="blue" size="lg" />
        </div>
        <div className="absolute bottom-20 left-1/3">
          <PuzzlePiece color="yellow" size="xl" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-puzzle-orange rounded-full" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Propuesta Educativa</span>
            <div className="h-1 w-12 bg-puzzle-orange rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
            Salas diseñadas para cada{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">etapa</span>
              <PuzzlePiece color="yellow" size="sm" className="absolute -top-2 -right-6 animate-wiggle" />
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada sala está pensada como una pieza del rompecabezas educativo, adaptada a las necesidades y capacidades
            de cada edad.
          </p>
        </div>

        {/* Programs Grid - Interlocking Puzzle Design */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`
                relative group cursor-pointer
                ${index % 2 === 0 ? "md:translate-y-8" : ""}
              `}
              onClick={() => openCarousel(index)}
            >
              <div
                className={`
                relative rounded-[2rem] p-8 ${program.bgColor}
                transform transition-all duration-500
                group-hover:scale-[1.02] group-hover:shadow-2xl
                overflow-hidden
              `}
              >
                {/* Puzzle connector shapes */}
                <div
                  className={`absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-16 ${program.bgColor} rounded-full`}
                />
                <div
                  className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-8 ${program.bgColor} rounded-full`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-background/30 flex items-center justify-center">
                      <program.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <span className="px-4 py-2 rounded-full bg-background/30 text-sm font-bold text-foreground">
                      {program.age}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-foreground mb-1">{program.title}</h3>
                  <p className="text-sm font-bold text-foreground/70 mb-4">{program.subtitle}</p>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{program.description}</p>

                  {/* Features as mini puzzle pieces */}
                  <div className="flex flex-wrap gap-2">
                    {program.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-background/40 text-xs font-bold text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative puzzle piece */}
                <div className="absolute -bottom-6 -right-6 opacity-20">
                  <PuzzlePiece color={program.color.replace("puzzle-", "") as any} size="xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Modal */}
      {selectedProgram !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProgram(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-puzzle-pink flex items-center justify-center z-[60]"
            onClick={() => setSelectedProgram(null)}
          >
            <X className="w-6 h-6 text-foreground" />
          </button>

          <div className="relative w-full max-w-4xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={prevImage}
              className="absolute left-4 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors z-[60]"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black/50">
              <img
                src={programs[selectedProgram].images[currentImageIndex]}
                alt={programs[selectedProgram].title}
                className="w-full h-full object-contain"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors z-[60]"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            <div className="absolute bottom-4 flex gap-2">
              {programs[selectedProgram].images.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${i === currentImageIndex ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
