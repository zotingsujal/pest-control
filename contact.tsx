import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-500">We're based in Santacruz West and ready to serve you across all of Mumbai, Navi Mumbai & Thane.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info */}
          <div className="text-white rounded-3xl p-10 flex flex-col justify-center" style={{ backgroundColor: "#152E35" }}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full shrink-0" style={{ backgroundColor: "#ffffff15" }}>
                  <MapPin className="h-6 w-6" style={{ color: "#E3F2EE" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-200 mb-1">Office Address</h4>
                  <p className="text-white font-medium leading-relaxed">
                    Nemani Chawl, Cross Station Road,<br />
                    Above Panveli Wines,<br />
                    Santacruz West, Mumbai,<br />
                    Maharashtra 400054
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full shrink-0" style={{ backgroundColor: "#ffffff15" }}>
                  <Phone className="h-6 w-6" style={{ color: "#E3F2EE" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-200 mb-2">Phone Numbers</h4>
                  <a href="tel:9136595675" className="text-white font-bold text-xl block mb-1 hover:opacity-80 transition-opacity" data-testid="contact-phone-main">
                    9136595675
                  </a>
                  <p className="text-gray-400 text-sm mb-3">General Enquiries & Bookings</p>
                  <a href="tel:8422930807" className="text-white font-bold text-xl block mb-1 hover:opacity-80 transition-opacity" data-testid="contact-phone-emergency">
                    8422930807
                  </a>
                  <span className="inline-block text-xs font-bold px-2 py-1 rounded uppercase tracking-wider text-[#152E35]" style={{ backgroundColor: "#E3F2EE" }}>24/7 Emergency</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full shrink-0" style={{ backgroundColor: "#ffffff15" }}>
                  <Mail className="h-6 w-6" style={{ color: "#E3F2EE" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-200 mb-1">Email</h4>
                  <a href="mailto:pestcontrolmumbai55@gmail.com" className="text-white font-medium hover:opacity-80 transition-opacity break-all" data-testid="contact-email">
                    pestcontrolmumbai55@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full shrink-0" style={{ backgroundColor: "#ffffff15" }}>
                  <Clock className="h-6 w-6" style={{ color: "#E3F2EE" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-200 mb-1">Office Hours</h4>
                  <p className="text-white font-medium">Mon – Sat: 10:00 AM – 7:00 PM</p>
                  <p className="text-gray-400 text-sm mt-1">Emergency service available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-auto border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8!2d72.8347!3d19.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSantacruz+West%2C+Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Pest Control Mumbai Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
