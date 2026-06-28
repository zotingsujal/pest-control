import { CheckCircle2, Award, Users, Calendar } from "lucide-react";
import founderImg from "@assets/1782401824854_1782473099405.png";

export function About() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20" style={{ backgroundColor: "#E3F2EE" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "3/4" }}>
              <img
                src={founderImg}
                alt="Rajesh B. Zoting - Founder, Pest Control Mumbai"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 p-6 md:p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 inline-block">
                  <p className="text-white font-bold text-2xl">Rajesh B. Zoting</p>
                  <p className="font-semibold" style={{ color: "#E3F2EE" }}>Founder & Chief Expert</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { icon: Calendar, value: "28+", label: "Years Experience" },
                { icon: Users, value: "5,000+", label: "Happy Clients" },
                { icon: Award, value: "100%", label: "Satisfaction" }
              ].map((stat, i) => (
                <div key={i} className="text-white rounded-xl p-4 text-center" style={{ backgroundColor: "#152E35" }} data-testid={`about-stat-${i}`}>
                  <stat.icon className="h-5 w-5 mx-auto mb-1 opacity-70" style={{ color: "#E3F2EE" }} />
                  <p className="text-xl font-extrabold">{stat.value}</p>
                  <p className="text-xs opacity-70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full font-semibold text-sm mb-6 text-[#152E35]" style={{ backgroundColor: "#c8e3dc" }}>
              Santacruz West, Mumbai
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              28+ Years of Protecting Mumbai Homes
            </h2>

            <div className="space-y-5 text-lg text-gray-600 mb-8 leading-relaxed">
              <p>
                Pest Control Mumbai has been the most trusted name for families and businesses facing pest infestations across the city. Founded by <strong className="text-gray-900">Rajesh B. Zoting</strong>, our company brings nearly three decades of hands-on expertise to every job.
              </p>
              <p>
                We understand the stress and health risks that pests bring into your home. That's why we use only 100% safe, eco-friendly chemical formulations — powerful enough to eliminate pests, gentle enough to be safe around children, elderly, and pets.
              </p>
              <p>
                Based in Santacruz West, we proudly serve all neighbourhoods across Mumbai — from Bandra to Borivali, Andheri to Powai, and across Navi Mumbai and Thane.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Safe & Eco-Friendly Chemicals",
                "100% Satisfaction Guarantee",
                "28+ Years of Experience",
                "Termite Warranty (3–5 Years)",
                "Same-Day Service Available",
                "Serving All of Mumbai"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" style={{ color: "#152E35" }} />
                  <span className="font-semibold text-gray-800 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-lg font-bold text-[#152E35] text-lg border border-[#a8d5c9] hover:bg-[#c8e8e0] transition-colors shadow-sm"
              style={{ backgroundColor: "#E3F2EE" }}
              data-testid="about-contact-cta"
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
