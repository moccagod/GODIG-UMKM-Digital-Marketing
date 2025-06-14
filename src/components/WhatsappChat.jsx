import { MessageCircle } from "lucide-react";

const WhatsappChat = () => {
  const whatsappNumber = "628123456789"; // Ganti nomor WA kamu

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 backdrop-blur-md border border-white/20"
    >
      <MessageCircle size={32} className="animate-pulse" />
    </a>
  );
};

export default WhatsappChat;
