"use client"

import { PuzzlePiece } from "@/components/puzzle-piece"
import { Shield, Sun, Leaf, Music, Utensils, BookOpen } from "lucide-react"

const facilities = [
  {
    icon: Shield,
    title: "Seguridad Total",
    description:
      "Instalaciones diseñadas pensando en la seguridad de los más pequeños. Cámaras, acceso controlado y personal capacitado.",
  },
  {
    icon: Sun,
    title: "Espacios Luminosos",
    description: "Aulas amplias con luz natural, colores cálidos y materiales didácticos de calidad.",
  },
  {
    icon: Leaf,
    title: "Patio y Naturaleza",
    description: "Espacios verdes donde los niños pueden explorar, jugar y conectar con la naturaleza.",
  },
  {
    icon: Music,
    title: "Sala de Música",
    description: "Instrumentos musicales adaptados para la exploración sonora y el desarrollo artístico.",
  },
  {
    icon: Utensils,
    title: "Cocina Propia",
    description: "Menú nutritivo y casero, elaborado diariamente con ingredientes frescos y de calidad.",
  },
  {
    icon: BookOpen,
    title: "Talleres",
    description: "Talleres para fomentar la estimulación y el desarrollo cognitivo temprano",
  },
]

export function FacilitiesSection() {
  return (
    <section id="instalaciones" className="relative py-20 bg-card overflow-hidden">
      {/* Puzzle border decoration */}
      <div className="absolute top-0 left-0 right-0 flex justify-center gap-4 -translate-y-1/2">
        {["pink", "blue", "yellow", "green", "orange", "pink", "blue"].map((color, i) => (
          <div key={i} className={`w-12 h-12 rounded-2xl bg-puzzle-${color} transform rotate-45 opacity-80`} />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <PuzzlePiece color="green" size="sm" className="animate-float" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Instalaciones</span>
            <PuzzlePiece color="orange" size="sm" className="animate-float-delayed" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
            Un espacio pensado para <span className="text-primary">crecer feliz</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada rincón de Kinder One está diseñado como una pieza del rompecabezas del bienestar infantil: seguro,
            estimulante y lleno de amor.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => {
            const colors = [
              "bg-puzzle-pink",
              "bg-puzzle-blue",
              "bg-puzzle-yellow",
              "bg-puzzle-green",
              "bg-puzzle-orange",
              "bg-puzzle-pink",
            ]
            return (
              <div
                key={facility.title}
                className={`
                  group relative p-6 rounded-3xl bg-background
                  border-4 border-dashed border-transparent
                  hover:border-puzzle-yellow
                  transform transition-all duration-300
                  hover:scale-105 hover:-translate-y-2
                  ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}
                  hover:rotate-0
                `}
              >
                <div
                  className={`
                  w-14 h-14 rounded-2xl ${colors[index]} 
                  flex items-center justify-center mb-4
                  group-hover:scale-110 transition-transform
                `}
                >
                  <facility.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{facility.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{facility.description}</p>

                {/* Corner puzzle piece decoration */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <PuzzlePiece color={["pink", "blue", "yellow", "green", "orange", "pink"][index] as any} size="sm" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Photo Gallery Preview 
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/images/233318-1600x1030-what-do-kids-learn-kindergarten.jpg",
            "/images/6-successacademies_25048656-1-scaled.jpg",
            "/images/GettyImages-1461629187 (1).jpg",
            "/images/his_sofija-05-19-235_0.jpg.webp",
            "/images/images (1).jpg",
            "/images/images.jpg",
            "/images/image3.jpg",
            "/images/233318-1600x1030-what-do-kids-learn-kindergarten.jpg"
          ].map((query, i) => (
            <div
              key={i}
              className={`
                relative aspect-square rounded-3xl overflow-hidden
                transform transition-all duration-300 hover:scale-105
                ${i % 2 === 0 ? "rotate-2" : "-rotate-2"}
                hover:rotate-0
              `}
            >
              <img
                src={query}
                alt={'Prueba'}
                className="w-full h-full object-cover"
              />
              <div
                className={`
                absolute inset-0 opacity-30
                ${["bg-puzzle-pink", "bg-puzzle-blue", "bg-puzzle-yellow", "bg-puzzle-green"][i]}
                mix-blend-multiply
              `}
              />
            </div>
          ))}
        </div>*/}
      </div>
    </section>
  )
}
