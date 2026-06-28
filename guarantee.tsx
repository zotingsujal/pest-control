import { ShieldCheck, Building2, Home, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Guarantee() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            <ShieldCheck className="h-4 w-4" />
            Warranty Backed Protection
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Termite Warranty for Your Property
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We stand behind our anti-termite treatments with comprehensive written warranties — giving builders, societies, and business owners total peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Post-Construction Society */}
          <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-border overflow-hidden group hover:-translate-y-1 transition-transform duration-300" data-testid="guarantee-card-society">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-8 translate-x-8"></div>

            <div className="flex items-start gap-5 mb-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Home className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <div className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-2 tracking-wide uppercase">
                  Post-Construction Society
                </div>
                <h3 className="text-2xl font-bold text-primary leading-tight">Residential Society Warranty</h3>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ideal for newly constructed housing societies and apartment complexes. After post-construction anti-termite treatment, we provide a comprehensive written warranty protecting your entire building from subterranean and drywood termites.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Written warranty certificate issued",
                "Covers all termite species",
                "Free re-treatment if infestation occurs within warranty period",
                "Annual inspection included",
                "Valid for common areas + individual flats"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between bg-muted rounded-2xl px-6 py-4 mb-6">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">Warranty Period</p>
                <p className="text-3xl font-extrabold text-primary">3 – 5 Years</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">Coverage</p>
                <p className="text-lg font-bold text-secondary">Full Building</p>
              </div>
            </div>

            <Button onClick={scrollToBooking} className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-5 text-base" data-testid="guarantee-society-cta">
              Get Society Warranty Quote
            </Button>
          </div>

          {/* Commercial Building */}
          <div className="relative bg-primary rounded-3xl shadow-xl p-8 overflow-hidden group hover:-translate-y-1 transition-transform duration-300" data-testid="guarantee-card-commercial">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>

            <div className="flex items-start gap-5 mb-6">
              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center shrink-0">
                <Building2 className="h-8 w-8 text-[#5FD9A8]" />
              </div>
              <div>
                <div className="inline-block bg-[#5FD9A8] text-primary text-xs font-bold px-3 py-1 rounded-full mb-2 tracking-wide uppercase">
                  Commercial Buildings
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight">Commercial Property Warranty</h3>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Protect your office buildings, warehouses, restaurants, hotels, and retail spaces with our commercial-grade anti-termite treatment — backed by a documented warranty accepted by banks, insurance companies, and regulatory bodies.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Bank & insurance accepted warranty document",
                "Covers structural and furniture termites",
                "Compliant with NBCC construction standards",
                "Priority re-treatment within 48 hours",
                "Suitable for all commercial property types"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#5FD9A8] shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between bg-white/10 rounded-2xl px-6 py-4 mb-6">
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Warranty Period</p>
                <p className="text-3xl font-extrabold text-white">3 – 5 Years</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Coverage</p>
                <p className="text-lg font-bold text-[#5FD9A8]">Full Property</p>
              </div>
            </div>

            <Button onClick={scrollToBooking} className="w-full bg-[#5FD9A8] hover:bg-[#4DC99A] text-primary font-bold py-5 text-base" data-testid="guarantee-commercial-cta">
              Get Commercial Warranty Quote
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
          All warranty certificates are issued on company letterhead, signed by Rajesh B. Zoting, and include full terms, coverage scope, and re-treatment conditions.
        </p>
      </div>
    </section>
  );
}
