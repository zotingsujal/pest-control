import { Search, ClipboardList, ShieldAlert, CheckSquare, PhoneCall } from "lucide-react";

export function Process() {
  const steps = [
    { title: "Free Inspection", description: "We thoroughly assess your property to identify pest types, entry points, and the extent of the infestation.", icon: Search },
    { title: "Custom Plan", description: "Based on our findings, we develop a tailored treatment strategy for maximum effectiveness and safety.", icon: ClipboardList },
    { title: "Safe Application", description: "Our experienced team applies eco-friendly, highly targeted treatments to eliminate the pests completely.", icon: ShieldAlert },
    { title: "Verification", description: "We conduct a detailed post-treatment check to ensure all target areas have been properly treated.", icon: CheckSquare },
    { title: "Follow-up", description: "We provide preventive advice and schedule follow-up visits if necessary to guarantee long-term results.", icon: PhoneCall }
  ];

  return (
    <section id="process" className="py-24 text-white" style={{ backgroundColor: "#152E35" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Safe & Effective Treatment Process</h2>
          <p className="text-lg" style={{ color: "#a8c8c0" }}>A systematic, clinical approach to ensure your property becomes and remains 100% pest-free.</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 w-full h-px" style={{ backgroundColor: "#E3F2EE20" }}></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative border-2 transition-all duration-300" style={{ backgroundColor: "#1d3d47", borderColor: "#E3F2EE40" }}>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: "#E3F2EE", color: "#152E35" }}>
                    {i + 1}
                  </div>
                  <step.icon className="h-8 w-8" style={{ color: "#E3F2EE" }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed max-w-[250px]" style={{ color: "#a8c8c0" }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
