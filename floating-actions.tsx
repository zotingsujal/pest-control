import { useState, useRef, useEffect } from "react";
import { Phone, Bot, X, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WA_NUMBER = "919136595675";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: { label: string; value: string }[];
};

const initialMessage: Message = {
  id: "1",
  sender: "bot",
  text: "Hi! I'm PestBot 🤖 How can I help you today?",
  options: [
    { label: "Get a Quote", value: "quote" },
    { label: "Book Inspection", value: "book" },
    { label: "Emergency", value: "emergency" },
    { label: "Service Areas", value: "areas" }
  ]
};

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const t = text.toLowerCase();
      let resp = "";
      if (t.includes("quote") || t.includes("price") || t.includes("cost")) {
        resp = "Our pricing starts from ₹800 for a standard 1BHK. Book a free inspection for an exact quote — our expert will call you within 30 minutes!";
      } else if (t.includes("book") || t.includes("inspect")) {
        resp = "Great! Scroll to the 'Book Free Pest Inspection' form on this page. We'll call back within 30 minutes to confirm.";
        document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
      } else if (t.includes("emergency") || t.includes("urgent")) {
        resp = "For emergencies call us RIGHT NOW: 9136595675. We respond 24/7 across all of Mumbai!";
      } else if (t.includes("area") || t.includes("location") || t.includes("serve")) {
        resp = "We serve Mumbai City, Navi Mumbai, Thane, Borivali, Central Line, Western Suburbs, Harbour Line and all surrounding areas!";
      } else if (t.includes("termite") || t.includes("warranty")) {
        resp = "We provide anti-termite treatment with a written 3–5 year warranty. Call 9136595675 for details!";
      } else {
        resp = "For detailed help, call our expert Rajesh at 9136595675 or WhatsApp us — or book a free inspection on this page!";
      }
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: "bot", text: resp }]);
    }, 600);
  };

  const waMsg = encodeURIComponent("Hi, I need pest control service in Mumbai");

  return (
    <>
      {/* Chat Window — above the vertical button stack */}
      <div
        className={`fixed right-[74px] bottom-5 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 origin-bottom-right ${chatOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}
        style={{ maxHeight: "75vh" }}
      >
        <div className="text-white p-4 rounded-t-2xl flex justify-between items-center" style={{ backgroundColor: "#152E35" }}>
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5" style={{ color: "#E3F2EE" }} />
            <div>
              <p className="font-bold text-sm leading-none">PestBot</p>
              <p className="text-xs opacity-60 mt-0.5">Pest Control Mumbai</p>
            </div>
          </div>
          <button onClick={() => setChatOpen(false)} className="text-white/70 hover:text-white p-1" aria-label="Close chat" data-testid="chatbot-close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4" style={{ minHeight: "220px", maxHeight: "360px" }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === "user" ? "text-white rounded-tr-sm" : "bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm"}`}
                style={msg.sender === "user" ? { backgroundColor: "#152E35" } : {}}
              >
                {msg.text}
              </div>
              {msg.options && (
                <div className="flex flex-wrap gap-2 mt-2 max-w-[90%]">
                  {msg.options.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => handleSend(opt.value)}
                      className="text-xs bg-white border border-[#a8d5c9] text-[#152E35] px-3 py-1.5 rounded-full hover:bg-[#152E35] hover:text-white transition-colors"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 bg-white border-t border-gray-100 rounded-b-2xl flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend(input)}
            placeholder="Type a message..."
            className="flex-1 text-sm bg-gray-100 rounded-full px-4 py-2 border-0 outline-none"
            data-testid="chatbot-input"
          />
          <button
            onClick={() => handleSend(input)}
            disabled={!input.trim()}
            className="w-9 h-9 text-white rounded-full flex items-center justify-center disabled:opacity-40 transition-colors"
            style={{ backgroundColor: "#152E35" }}
            data-testid="chatbot-send"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 3 buttons — vertical stack on the right */}
      <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3 items-center">
        {/* Call */}
        <a
          href="tel:9136595675"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-white hover:scale-110 transition-all duration-200 animate-bounce"
          style={{ backgroundColor: "#152E35", animationDuration: "2s" }}
          aria-label="Call Pest Control Mumbai"
          data-testid="floating-call"
        >
          <Phone className="h-6 w-6" />
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-white hover:scale-110 transition-all duration-200"
          style={{ backgroundColor: "#25D366" }}
          aria-label="Chat on WhatsApp"
          data-testid="floating-whatsapp"
        >
          <FaWhatsapp className="h-8 w-8" />
        </a>

        {/* Chat Bot Toggle */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-white hover:scale-110 transition-all duration-200"
          style={{ backgroundColor: chatOpen ? "#0f2030" : "#152E35" }}
          aria-label="Open chat assistant"
          data-testid="floating-chatbot"
        >
          {chatOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        </button>
      </div>
    </>
  );
}
