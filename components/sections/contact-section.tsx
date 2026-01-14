"use client"

import type React from "react"

import { useState } from "react"
import { PuzzlePiece } from "@/components/puzzle-piece"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "(011) 4123-4567",
    href: "tel:+541141234567",
    color: "bg-puzzle-pink",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+54 9 11 1234-5678",
    href: "https://wa.me/5491112345678",
    color: "bg-puzzle-green",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@kinderone.com.ar",
    href: "mailto:info@kinderone.com.ar",
    color: "bg-puzzle-blue",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. del Jardín 1234, CABA",
    href: "https://maps.google.com",
    color: "bg-puzzle-yellow",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a Viernes 7:30 - 17:30",
    href: null,
    color: "bg-puzzle-orange",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contacto" className="relative py-20 bg-card overflow-hidden">
      {/* Puzzle pieces border */}
      <div className="absolute top-0 left-0 right-0 h-2 flex">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 ${["bg-puzzle-pink", "bg-puzzle-blue", "bg-puzzle-yellow", "bg-puzzle-green", "bg-puzzle-orange"][i % 5]}`}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <PuzzlePiece color="pink" size="sm" className="animate-wiggle" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Contacto</span>
            <PuzzlePiece color="blue" size="sm" className="animate-wiggle" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
            ¡Completemos el <span className="text-primary">rompecabezas</span> juntos!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estamos acá para responder todas tus preguntas. ¡La primera pieza del camino es contactarnos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-background rounded-[2rem] p-8 shadow-lg border-4 border-dashed border-puzzle-yellow">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-puzzle-pink flex items-center justify-center">✉️</span>
                Envianos un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Nombre completo</label>
                  <Input
                    type="text"
                    placeholder="María García"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border-2 border-muted focus:border-puzzle-pink h-12"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="maria@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl border-2 border-muted focus:border-puzzle-blue h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Teléfono</label>
                    <Input
                      type="tel"
                      placeholder="+54 9 11 1234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl border-2 border-muted focus:border-puzzle-green h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Mensaje</label>
                  <Textarea
                    placeholder="Contanos sobre tu hijo/a y qué te gustaría saber..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="rounded-xl border-2 border-muted focus:border-puzzle-yellow resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full text-lg font-bold bg-primary hover:bg-primary/90 h-14"
                >
                  Enviar Mensaje 🧩
                </Button>
              </form>
            </div>

            {/* Decorative puzzle piece */}
            <PuzzlePiece color="orange" size="xl" className="absolute -bottom-8 -right-8 opacity-30 -rotate-12" />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href || undefined}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`
                  group flex items-center gap-4 p-5 rounded-2xl bg-background
                  transform transition-all duration-300
                  ${item.href ? "hover:scale-105 cursor-pointer" : "cursor-default"}
                  ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}
                  hover:rotate-0
                `}
              >
                <div
                  className={`
                  w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center
                  group-hover:scale-110 transition-transform
                `}
                >
                  <item.icon className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground">{item.label}</p>
                  <p className="text-lg font-bold text-foreground">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="relative h-64 rounded-3xl overflow-hidden mt-8">
              <img
                src="/colorful-illustrated-map-location-marker-kindergar.jpg"
                alt="Ubicación de Kinder One"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-puzzle-blue/20" />
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-2xl p-4">
                <p className="font-bold text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Av. del Jardín 1234, CABA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
