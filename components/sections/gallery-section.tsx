"use client"

import { useState } from "react"
import { PuzzlePiece } from "@/components/puzzle-piece"
import { X } from "lucide-react"

const galleryImages = [
  { query: "happy children playing with colorful blocks kindergarten", color: "puzzle-pink" },
  { query: "toddlers painting with fingers art class", color: "puzzle-blue" },
  { query: "children dancing music class preschool", color: "puzzle-yellow" },
  { query: "kids outdoor playground fun sunshine", color: "puzzle-green" },
  { query: "children reading story time kindergarten", color: "puzzle-orange" },
  { query: "preschool graduation ceremony happy kids", color: "puzzle-pink" },
  { query: "children doing yoga mindfulness class", color: "puzzle-blue" },
  { query: "kids science experiment preschool learning", color: "puzzle-yellow" },
  { query: "children birthday party celebration kindergarten", color: "puzzle-green" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="galeria" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <PuzzlePiece color="pink" size="xl" className="absolute top-20 -left-10 opacity-10 rotate-12" />
        <PuzzlePiece color="blue" size="xl" className="absolute bottom-20 -right-10 opacity-10 -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-puzzle-pink" />
              <div className="w-3 h-3 rounded-full bg-puzzle-blue" />
              <div className="w-3 h-3 rounded-full bg-puzzle-yellow" />
            </div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Galería</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-puzzle-green" />
              <div className="w-3 h-3 rounded-full bg-puzzle-orange" />
              <div className="w-3 h-3 rounded-full bg-puzzle-pink" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
            Momentos que armamos <span className="text-primary">juntos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada foto es una pieza del rompecabezas de la infancia. Mirá cómo nuestros pequeños disfrutan, aprenden y
            crecen.
          </p>
        </div>

        {/* Puzzle Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`
                group relative aspect-square rounded-3xl overflow-hidden
                transform transition-all duration-500
                hover:scale-105 hover:z-10 hover:shadow-2xl
                ${index % 3 === 0 ? "rotate-2" : index % 3 === 1 ? "-rotate-1" : "rotate-1"}
                hover:rotate-0
                ${index === 4 ? "md:col-span-1 md:row-span-2 aspect-auto md:aspect-[1/2]" : ""}
              `}
            >
              <img
                src={`/.jpg?height=400&width=400&query=${encodeURIComponent(image.query)}`}
                alt={image.query}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Puzzle piece overlay */}
              <div
                className={`
                absolute inset-0 bg-${image.color} opacity-0 group-hover:opacity-30
                transition-opacity duration-300 mix-blend-multiply
              `}
              />

              {/* Puzzle piece corner decoration */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <PuzzlePiece color={image.color.replace("puzzle-", "") as any} size="md" className="drop-shadow-lg" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-puzzle-pink flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <img
            src={`/.jpg?height=800&width=800&query=${encodeURIComponent(galleryImages[selectedImage].query)}`}
            alt={galleryImages[selectedImage].query}
            className="max-w-full max-h-[80vh] rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
