"use client"

import { useState } from "react"
import { PuzzlePiece } from "@/components/puzzle-piece"
import { Heart, Star, Sparkles, Users, X } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Amor y Contención",
    description: "Cada niño recibe el cariño y la atención que necesita para sentirse seguro y feliz.",
    color: "bg-puzzle-pink",
    details: "En Kinder One, el amor no es solo una palabra, es la base de todo lo que hacemos. Nuestra prioridad es que cada niño se sienta en su segundo hogar, rodeado de afecto y seguridad emocional para que pueda desplegar todo su potencial."
  },
  {
    icon: Sparkles,
    title: "Creatividad",
    description: "Fomentamos la expresión artística y la imaginación a través del juego libre.",
    color: "bg-puzzle-blue",
    details: "La creatividad es el motor del aprendizaje. A través de talleres de arte, música y juego simbólico, invitamos a los niños a imaginar mundos nuevos y a expresarse con libertad, desarrollando su pensamiento crítico desde la primera infancia."
  },
  {
    icon: Star,
    title: "Excelencia",
    description: "Equipo docente capacitado y comprometido con la educación inicial de calidad.",
    color: "bg-puzzle-yellow",
    details: "Nuestro proyecto institucional ha sido reconocido por la Dirección General de Educación de Gestión Privada (DGEGP) como parte de una educación de calidad, destacando a Kinder One como institución representativa de este enfoque pedagógico, comprometido con el desarrollo integral de niños y niñas.  Asimismo, una de nuestras propuestas y actividades fue seleccionada por el Gobierno de la Ciudad de Buenos Aires para representar el eje “Infancias en clave de bienestar” en un acto oficial realizado en un auditorio, donde una imagen de nuestro jardín fue elegida como fondo de la presentación, reafirmando el valor y el impacto de nuestro trabajo educativo."
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Familias y educadores trabajando juntos por el bienestar de los más pequeños.",
    color: "bg-puzzle-green",
    details: "Creemos en la educación como un puente entre el jardín y la casa. Fomentamos una comunicación abierta y constante con las familias, construyendo una red de contención que acompaña el crecimiento de cada niño de manera personalizada."
  },
]

export function AboutSection() {
  const [selectedValue, setSelectedValue] = useState<number | null>(null)

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
            Un jardín con historia y <span className="text-primary"> mirada actual</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Kinder One nace como un proyecto de innovación pedagógica, respaldado por más de 35 años de experiencia en educación inicial. Nuestra propuesta se centra en el desarrollo integral de cada niño y niña, respetando sus tiempos, emociones y necesidades, en un entorno seguro, afectivo y estimulante.
          </p>
        </div>

        {/* Values Grid - Puzzle Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <button
              key={value.title}
              onClick={() => setSelectedValue(index)}
              className={`
                relative p-6 rounded-3xl ${value.color} text-left
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
            </button>
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
                  Acompañamos los primeros años con una propuesta basada en el juego, el cuidado y una crianza respetuosa, en vínculo cercano con las familias.
                </blockquote>
                <cite className="text-muted-foreground font-medium">— Equipo Pedagógico de Kinder One</cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Details Modal */}
      {selectedValue !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedValue(null)}
        >
          <div
            className={`relative max-w-lg w-full p-8 rounded-[2rem] shadow-2xl ${values[selectedValue].color} transform transition-all animate-in fade-in zoom-in duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
              onClick={() => setSelectedValue(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-20 h-20 rounded-2xl bg-background/30 flex items-center justify-center mb-6">
              {(() => {
                const Icon = values[selectedValue].icon;
                return <Icon className="w-10 h-10 text-foreground" />;
              })()}
            </div>

            <h3 className="text-3xl font-black text-foreground mb-4">
              {values[selectedValue].isNews ? "📰 Noticia: " : ""}{values[selectedValue].title}
            </h3>

            <div className="prose prose-sm text-foreground/90 text-lg leading-relaxed">
              <p>{values[selectedValue].details}</p>
            </div>

            
          </div>
        </div>
      )}
    </section>
  )
}
