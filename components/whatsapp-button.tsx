import { buildWhatsappUrl } from "@/lib/whatsapp"

export function WhatsappButton() {
  return (
    <a
      id="whatsapp-floating-button"
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center justify-center"
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-bold text-foreground shadow-lg opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block">
        ¡Escribinos! 🧩
      </span>

      <span className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <svg viewBox="0 0 32 32" className="h-8 w-8 sm:h-9 sm:w-9 fill-white" aria-hidden="true">
          <path d="M16.004 3C9.38 3 4 8.38 4 15.004c0 2.117.553 4.183 1.604 6.004L4 28l7.17-1.58a11.95 11.95 0 0 0 4.834 1.02h.004C22.626 27.44 28 22.06 28 15.436 28 8.81 22.63 3 16.004 3Zm0 21.89h-.003a9.9 9.9 0 0 1-5.05-1.383l-.362-.215-4.255.937.907-4.147-.236-.38a9.86 9.86 0 0 1-1.516-5.258c0-5.474 4.46-9.93 9.94-9.93 5.47 0 9.93 4.67 9.93 10.14 0 5.47-4.46 10.236-9.355 10.236Zm5.44-7.42c-.298-.15-1.763-.87-2.037-.97-.273-.1-.472-.15-.67.15-.2.297-.77.97-.944 1.17-.174.198-.348.223-.646.074-.298-.15-1.258-.464-2.396-1.479-.886-.79-1.484-1.766-1.658-2.064-.174-.298-.019-.459.13-.607.134-.133.298-.348.447-.522.15-.174.199-.298.298-.497.1-.198.05-.372-.025-.521-.074-.15-.67-1.616-.918-2.213-.242-.58-.487-.502-.67-.511l-.57-.01a1.1 1.1 0 0 0-.795.372c-.273.298-1.043 1.02-1.043 2.486s1.068 2.884 1.217 3.083c.149.198 2.1 3.207 5.09 4.497.711.307 1.266.49 1.699.628.714.227 1.364.195 1.878.118.573-.085 1.763-.72 2.012-1.417.248-.696.248-1.293.174-1.417-.075-.124-.273-.198-.571-.348Z" />
        </svg>
      </span>
    </a>
  )
}
