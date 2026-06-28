import { PhoneCall, Zap } from "lucide-react";

export function Emergency() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: "#152E35" }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: "#E3F2EE" }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: "#E3F2EE" }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center justify-center p-4 rounded-full mb-8 animate-pulse border-2" style={{ backgroundColor: "#E3F2EE20", borderColor: "#E3F2EE40" }}>
          <Zap className="h-10 w-10" style={{ color: "#E3F2EE" }} />
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Pest Emergency? We Respond in <span style={{ color: "#E3F2EE" }}>60 Minutes!</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Don't wait. 24/7 rapid response pest elimination across all of Mumbai. When pests invade your safe space, we take immediate action — day or night.
        </p>

        <a
          href="tel:8422930807"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-2xl font-bold shadow-2xl hover:opacity-90 transition-opacity text-[#152E35]"
          style={{ backgroundColor: "#E3F2EE" }}
          data-testid="emergency-call-btn"
        >
          <PhoneCall className="h-8 w-8" />
          Emergency: 8422930807
        </a>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
          {["Available 24 hours, 7 days a week", "Serving all Mumbai suburbs", "60-minute response guarantee"].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#E3F2EE" }}></div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
