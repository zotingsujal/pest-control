import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoPng from "../assets/logo-new.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Services", href: "services" },
    { name: "About", href: "about" },
    { name: "Process", href: "process" },
    { name: "FAQ", href: "faq" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-1" : "bg-white/98 backdrop-blur-sm py-1"}`}>
      <div className="mx-auto px-2 sm:px-4 lg:px-6 w-full">
        <div className="flex items-center justify-between">

          {/* Logo — no blend mode, clean on white, bigger, name tight */}
          <div className="flex items-center gap-0 cursor-pointer" onClick={() => scrollToSection("hero")} data-testid="nav-logo">
            <img
              src={logoPng}
              alt="PCM Pest Control Mumbai Logo"
              className="h-20 w-20 object-contain flex-shrink-0"
            />
            <span className="text-base font-extrabold tracking-widest uppercase whitespace-nowrap -ml-1" style={{ color: "#60A5FA" }}>
              PEST CONTROL MUMBAI
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                    data-testid={`nav-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <a href="tel:9136595675" className="flex items-center gap-2 font-bold text-gray-900 hover:text-[#152E35] transition-colors text-sm" data-testid="nav-phone">
                <Phone className="h-4 w-4" />
                <span>9136595675</span>
              </a>
              <button
                onClick={() => scrollToSection("booking")}
                className="px-4 py-2 rounded-lg font-semibold text-[#152E35] border border-[#a8d5c9] hover:bg-[#c8e8e0] transition-colors text-sm shadow-sm"
                style={{ backgroundColor: "#E3F2EE" }}
                data-testid="nav-book-now"
              >
                Book Now
              </button>
            </div>
          </nav>

          <div className="md:hidden flex items-center">
            <button className="p-2 text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" data-testid="nav-mobile-toggle">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left py-2 text-base font-semibold text-gray-700 hover:text-gray-900"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="h-px w-full bg-gray-100 my-1" />
            <a href="tel:9136595675" className="flex items-center justify-center gap-2 py-3 rounded-md font-bold text-[#152E35]" style={{ backgroundColor: "#E3F2EE" }}>
              <Phone className="h-5 w-5" />
              <span>Call: 9136595675</span>
            </a>
            <button onClick={() => scrollToSection("booking")} className="w-full py-4 rounded-lg font-bold text-[#152E35] border border-[#a8d5c9] text-lg" style={{ backgroundColor: "#E3F2EE" }}>
              Book Free Inspection
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
