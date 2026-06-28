import { useState, useRef, useEffect } from "react";
import { Bot, X, Send } from "lucide-react";

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

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const t = text.toLowerCase();
      let resp = "";
      if (t.includes("quote") || t.includes("price") || t.includes("cost")) {
        resp = "Our pricing usually starts from ₹800 for a standard 1BHK. Book a free inspection for an exact quote — our expert will call you within 30 minutes!";
      } else if (t.includes("book") || t.includes("inspect")) {
        resp = "Great! Scroll to the 'Book Free Pest Inspection' form on this page. We'll call you back within 30 minutes to confirm.";
        document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
      } else if (t.includes("emergency") || t.includes("urgent") || t.includes("now")) {
        resp = "For emergencies call us directly RIGHT NOW: 8422930807. We respond 24/7 across all of Mumbai!";
      } else if (t.includes("area") || t.includes("location") || t.includes("serve")) {
        resp = "We serve all of Mumbai — Santacruz, Bandra, Andheri, Juhu, Vile Parle, Malad, Goregaon, Borivali, Thane, and more!";
      } else if (t.includes("termite") || t.includes("warranty")) {
        resp = "We provide anti-termite treatment with a written 3–5 year warranty for residential and commercial properties. Call 8422930807 for details!";
      } else if (t.includes("cockroach") || t.includes("roach")) {
        resp = "Cockroach gel baiting is our speciality! Safe, odorless, and works within days. WhatsApp us at 8422930807 to get a quote for your home.";
      } else {
        resp = "For detailed help, call our expert Rajesh directly at 8422930807 or WhatsApp us — or book a free inspection on this page!";
      }
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: "bot", text: resp }]);
    }, 600);
  };

  return (
    <>
      {/* Toggle button — rightmost, at the bottom */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-5 bottom-5 z-50 w-14 h-14 bg-primary rounded-full shadow-xl flex items-center justify-center text-white transition-all hover:scale-110 hover:bg-secondary ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
        aria-label="Open chat assistant"
        data-testid="chatbot-toggle"
      >
        <Bot className="h-6 w-6" />
      </button>

      {/* Chat Window — opens above the toggle */}
      <div
        className={`fixed right-5 bottom-[80px] z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}
        style={{ maxHeight: "70vh" }}
      >
        {/* Header */}
        <div className="bg-primary text-white p-4 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-[#2DD4BF]" />
            <div>
              <p className="font-bold text-sm leading-none">PestBot</p>
              <p className="text-xs text-white/60 mt-0.5">Pest Control Mumbai</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white p-1" aria-label="Close chat" data-testid="chatbot-close">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4" style={{ minHeight: "220px", maxHeight: "380px" }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === "user" ? "bg-primary text-white rounded-tr-sm" : "bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm"}`}>
                {msg.text}
              </div>
              {msg.options && (
                <div className="flex flex-wrap gap-2 mt-2 max-w-[90%]">
                  {msg.options.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => handleSend(opt.value)}
                      className="text-xs bg-white border border-primary/30 text-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors"
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

        {/* Input */}
        <div className="p-3 bg-white border-t border-gray-100 rounded-b-2xl flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend(input)}
            placeholder="Type a message..."
            className="flex-1 text-sm bg-gray-100 rounded-full px-4 py-2 border-0 outline-none focus:ring-1 focus:ring-primary"
            data-testid="chatbot-input"
          />
          <button
            onClick={() => handleSend(input)}
            disabled={!input.trim()}
            className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center disabled:opacity-40 hover:bg-secondary transition-colors"
            data-testid="chatbot-send"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}
