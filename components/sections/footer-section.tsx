"use client"

import { PuzzlePiece } from "@/components/puzzle-piece"
import { Instagram, Facebook, Youtube } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="relative bg-foreground text-background py-16 overflow-hidden">
      {/* Puzzle piece wave divider */}
      <div className="absolute -top-6 sm:-top-4 xl:-top-px left-0 right-0 rotate-180 h-12">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 lg:h-15 2xl:h-20" >
          <path
            d="M0 60V30C120 30 120 0 240 0C360 0 360 30 480 30C600 30 600 0 720 0C840 0 840 30 960 30C1080 30 1080 0 1200 0C1320 0 1320 30 1440 30V60H0Z"
            className="fill-card"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="flex -space-x-1">
                <div className="w-8 h-8 bg-puzzle-pink rounded-lg transform rotate-12" />
                <div className="w-8 h-8 bg-puzzle-blue rounded-lg transform -rotate-6" />
                <div className="w-8 h-8 bg-puzzle-yellow rounded-lg transform rotate-3" />
              </div>
              <span className="text-2xl font-black text-background">
                Kinder <span className="text-puzzle-pink">One</span>
              </span>
            </a>
            <p className="text-background/70 leading-relaxed">
              Donde cada pieza encuentra su lugar. Más de 25 años formando a los pequeños gigantes del mañana con amor,
              creatividad y dedicación.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, color: "bg-puzzle-pink", href: "#" },
                { icon: Facebook, color: "bg-puzzle-blue", href: "#" },
                { icon: Youtube, color: "bg-puzzle-orange", href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`w-10 h-10 rounded-xl ${social.color} flex items-center justify-center
                    transform transition-all hover:scale-110 hover:rotate-6`}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6 flex items-center gap-2">
              <PuzzlePiece color="yellow" size="sm" />
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Quiénes Somos", href: "#nosotros" },
                { label: "Propuesta Educativa", href: "#propuesta" },
                { label: "Instalaciones", href: "#instalaciones" },
                { label: "Galería", href: "#galeria" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-puzzle-pink transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6 flex items-center gap-2">
              <PuzzlePiece color="green" size="sm" />
              Contactanos
            </h4>
            <div className="space-y-4 text-background/70">
              <p className="flex items-start gap-2">
                <span className="text-puzzle-pink">📍</span>
                Av. del Jardín 1234, CABA
              </p>
              <p className="flex items-start gap-2">
                <span className="text-puzzle-blue">📞</span>
                (011) 4123-4567
              </p>
              <p className="flex items-start gap-2">
                <span className="text-puzzle-green">💬</span>
                +54 9 11 1234-5678
              </p>
              <p className="flex items-start gap-2">
                <span className="text-puzzle-yellow">✉️</span>
                info@kinderone.com.ar
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">© 2026 Kinder One. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="text-background/50 text-sm">Hecho con</span>
            <span className="text-xl">❤️</span>
            <span className="text-background/50 text-sm">y muchas</span>
            <PuzzlePiece color="pink" size="sm" className="animate-wiggle" />
          </div>
        </div>
      </div>
    </footer>
  )
}
