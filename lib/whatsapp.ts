export const WHATSAPP_PHONE = "5491166415555"
export const WHATSAPP_DISPLAY = "+54 9 11 6641-5555"
export const WHATSAPP_DEFAULT_MESSAGE = "Hola, queria consultar mas información sobre Kinder One!"

export function buildWhatsappUrl(text: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`
}
