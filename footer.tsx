import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import logoPng from "../assets/logo-new.png";

const WA_NUMBER = "919136595675";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const areas = [
    "Mumbai City", "Navi Mumbai", "Thane", "Borivali",
    "Central Line", "Western Suburbs", "Herbal Line"
  ];

  return (
    <footer className="text-gray-300 pt-16 pb-8 border-t border-gray-800" style={{ backgroundColor: "#0d1f25" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-white p-1 flex-shrink-0">
                <img src={logoPng} alt="PCM Logo" className="h-14 w-14 object-contain" />
              </div>
              <span className="text-sm font-extrabold tracking-widest uppercase whitespace-nowrap" style={{ color: "#60A5FA" }}>
                PEST CONTROL MUMBAI
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Mumbai's most trusted pest control service. Safe, fast, and guaranteed pest elimination by Rajesh B. Zoting — 28+ years of expertise.
            </p>
            <div className="flex gap-3">
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" title="WhatsApp" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/pestcontrolmumbai" target="_blank" rel="noreferrer" title="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/pestcontrolmumbai" target="_blank" rel="noreferrer" title="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors" style={{ background: "rgba(255,255,255,0.05)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" title="Google" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                <FaGoogle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Follow Us — sits above Quick Links on large screens */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Follow Us</h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/pestcontrolmumbai"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-semibold text-gray-300 hover:text-white transition-colors group"
              >
                <span className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}>
                  <FaInstagram className="h-4 w-4 text-white" />
                </span>
                @pestcontrolmumbai
              </a>
              <a
                href="https://www.facebook.com/pestcontrolmumbai"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-semibold text-gray-300 hover:text-white transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110">
                  <FaFacebook className="h-4 w-4 text-white" />
                </span>
                Pest Control Mumbai
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-semibold text-gray-300 hover:text-white transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110">
                  <FaWhatsapp className="h-4 w-4 text-white" />
                </span>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Services", id: "services" },
                { name: "About Us", id: "about" },
                { name: "Our Process", id: "process" },
                { name: "FAQ", id: "faq" },
                { name: "Contact", id: "contact" },
                { name: "Book Inspection", id: "booking" }
              ].map((link) => (
                <li key={link.name}>
                  <a href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)} className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#E3F2EE" }} />
                <span className="text-sm">Nemani Chawl, Cross Station Rd, Above Panveli Wines, Santacruz West, Mumbai 400054</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" style={{ color: "#E3F2EE" }} />
                <a href="tel:9136595675" className="text-sm hover:text-white font-semibold">9136595675</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" style={{ color: "#E3F2EE" }} />
                <a href="tel:8422930807" className="text-sm hover:text-white font-semibold">8422930807 (24/7)</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" style={{ color: "#E3F2EE" }} />
                <a href="mailto:pestcontrolmumbai55@gmail.com" className="text-sm hover:text-white">pestcontrolmumbai55@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Service Areas</h4>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <span
                  key={area}
                  className="text-xs px-3 py-1.5 rounded-full border font-semibold text-[#152E35] border-[#a8d5c9]"
                  style={{ backgroundColor: "#E3F2EE" }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Pest Control Mumbai — PCM (Rajesh Pest Control). All rights reserved.
          </p>
          <div className="text-sm text-gray-500">Designed for Trust & Protection</div>
        </div>
      </div>
    </footer>
  );
}
