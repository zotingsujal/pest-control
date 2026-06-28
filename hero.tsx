import { Phone, Shield, Clock, Star } from "lucide-react";
import heroBg from "@assets/IMG_20260624_094923_1782386277907.jpg";

export function Hero() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Professional pest control technician with ULV spraying machine"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(21,46,53,0.95) 45%, rgba(21,46,53,0.6) 75%, rgba(21,46,53,0.1))" }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Mumbai's Most Trusted <br /><span style={{ color: "#E3F2EE" }}>Pest Control</span> Experts
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-3 max-w-2xl leading-relaxed">
            Fast, guaranteed, and eco-friendly pest elimination for your home and business. We don't just spray chemicals — we solve your pest problem permanently.
          </p>

          <p className="text-base font-semibold text-white mb-10">
            Rajesh B. Zoting &mdash; 28+ Years of Expertise in Pest Management
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToBooking}
              className="px-8 py-4 rounded-lg font-bold text-[#152E35] text-lg w-full sm:w-auto shadow-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#E3F2EE" }}
              data-testid="hero-book-inspection"
            >
              Book Free Inspection
            </button>
            <a
              href="tel:9136595675"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-lg w-full sm:w-auto border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
              data-testid="hero-call-now"
            >
              <Phone className="h-5 w-5" />
              Call Now: 9136595675
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-white/20">
            {[
              { icon: Star, text: "28+ Years Experience" },
              { icon: Shield, text: "100% Safe Chemicals" },
              { icon: Clock, text: "24/7 Emergency Service" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-white/20" style={{ backgroundColor: "#E3F2EE20" }}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-200">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
