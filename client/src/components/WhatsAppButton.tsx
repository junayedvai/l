import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { useCms } from "@/contexts/CmsContext";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const { content } = useCms();
  const phoneNumber = content.global.whatsapp.startsWith("88")
    ? content.global.whatsapp
    : `88${content.global.whatsapp}`;
  const message = "Hello! I'm interested in learning more about Study Hub BD's services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Tooltip */}
      {isHovered && (
        <div className="fixed bottom-24 right-6 z-50 bg-black text-golden px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold shadow-lg pointer-events-none">
          Chat with us on WhatsApp!
          <div className="absolute bottom-0 right-4 w-2 h-2 bg-black transform rotate-45 translate-y-1"></div>
        </div>
      )}

      {/* Pulse Background */}
      <div className="fixed bottom-6 right-6 z-40 w-16 h-16 pointer-events-none">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-20"></div>
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 active:scale-95 border-4 border-white cursor-pointer pointer-events-auto"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={32} className="animate-bounce" />
      </a>
    </>
  );
}
