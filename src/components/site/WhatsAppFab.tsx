import { waLink } from "@/lib/brand";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Olá! Gostaria de mais informações.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3.5 shadow-2xl hover:scale-105 transition-transform"
    >
      <MessageCircle className="size-5" />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  );
}
