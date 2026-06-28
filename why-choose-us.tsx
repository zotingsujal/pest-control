import { ShieldCheck, Leaf, ThumbsUp, Clock, IndianRupee, HeadphonesIcon, FileCheck } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      title: "Highly Experienced Team",
      description: "Our technicians bring decades of hands-on experience handling every type of pest infestation across Mumbai homes and businesses.",
      icon: ShieldCheck
    },
    {
      title: "Safe, Eco-Friendly Chemicals",
      description: "We use hospital-grade, odorless formulations that are tough on pests but completely safe for children, pets, and the elderly.",
      icon: Leaf
    },
    {
      title: "100% Satisfaction Promise",
      description: "We stand behind our work. If pests return between scheduled treatments, we come back to fix it at absolutely no extra cost.",
      icon: ThumbsUp
    },
    {
      title: "Fast Emergency Response",
      description: "Pest emergency? Same-day and 24/7 rapid response across all of Mumbai to handle urgent infestations when you need us most.",
      icon: Clock
    },
    {
      title: "Transparent Pricing",
      description: "No hidden charges, no upselling. You receive a clear, upfront quote before we begin any treatment — always.",
      icon: IndianRupee
    },
    {
      title: "Post-Treatment Support",
      description: "Our service doesn't end when we leave. We provide ongoing support, scheduled follow-ups, and prevention advice.",
      icon: HeadphonesIcon
    },
    {
      title: "Termite Warranty",
      description: "Post-construction societies and commercial buildings receive a written termite protection warranty valid for 3 to 5 years. Free re-treatment if termites return within the warranty period.",
      icon: FileCheck
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#152E35" }}>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why 5,000+ Families Trust Us</h2>
          <p className="text-lg" style={{ color: "#a8c8c0" }}>We don't just treat the symptoms — we eliminate the root cause of your pest problem with unmatched professionalism.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-all duration-300 group"
              data-testid={`why-card-${i}`}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: "#E3F2EE20" }}>
                <feature.icon className="h-6 w-6" style={{ color: "#E3F2EE" }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#a8c8c0" }}>{feature.description}</p>
              {feature.title === "Termite Warranty" && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[#152E35] text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#E3F2EE" }}>Residential</span>
                  <span className="text-[#152E35] text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#E3F2EE" }}>Commercial</span>
                  <span className="text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">3–5 Years</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
