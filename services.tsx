import generalPestImg from "@assets/IMG_20260624_094923_1782386277907.jpg";
import mosquitoImg from "@assets/IMG_20260625_164848_1782386360071.jpg";
import { FaWhatsapp } from "react-icons/fa";

const WA_NUMBER = "919136595675";

const SERVICES = [
  {
    title: "General Pest Control",
    description: "Comprehensive ULV spray treatment covering all common household pests. Annual maintenance contracts for year-round protection.",
    image: generalPestImg,
    imageAlt: "Pest control technician using ULV spray machine indoors"
  },
  {
    title: "Cockroach Control",
    description: "Gel baiting and targeted spray treatment for complete cockroach eradication — safe for kitchens and food areas.",
    image: "/img-cockroach.png",
    imageAlt: "Close-up of cockroach pest"
  },
  {
    title: "Rodent Control",
    description: "Strategic trapping and baiting programs to eliminate rats and mice while preventing future entry into your property.",
    image: "/img-rats.png",
    imageAlt: "Rats and rodents pest control"
  },
  {
    title: "Termite Control",
    description: "Deep-drilling anti-termite soil treatment and wood protection backed by a 3–5 year written warranty.",
    image: "/img-termites.png",
    imageAlt: "Termite colony on damaged wood"
  },
  {
    title: "Ants Control",
    description: "Targeted gel and spray treatment to eliminate ant colonies at the source, including foraging trails and nesting areas inside walls.",
    image: "/img-ants.png",
    imageAlt: "Close-up of ants on surface"
  },
  {
    title: "Mosquito Control",
    description: "Outdoor fogging and larvicide treatment to drastically reduce mosquito populations around your home or housing society.",
    image: mosquitoImg,
    imageAlt: "Pest control technician performing outdoor mosquito fogging"
  },
  {
    title: "Flyban Control",
    description: "Fly control solutions for restaurants, kitchens, and commercial food businesses — including UV fly catcher units and spray treatment.",
    image: "/img-flyban.png",
    imageAlt: "UV fly catcher machine for flyban pest control"
  },
  {
    title: "Wood Borer Treatment",
    description: "Chemical injection and surface spray to eliminate wood-boring insects destroying furniture and structural woodwork.",
    image: "/img-wood-borer.png",
    imageAlt: "Wood borer insect on damaged wood"
  },
  {
    title: "Bed Bugs Control",
    description: "Multi-stage chemical treatment targeting bed bugs at all life stages — eggs, nymphs, and adults — for guaranteed full elimination.",
    image: "/img-bed-bugs.png",
    imageAlt: "Bed bug pest control treatment"
  },
  {
    title: "Bird Netting",
    description: "Professional installation of UV-stable bird nets to block pigeons and sparrows from balconies, ducts, and rooftops.",
    image: "/img-bird-netting.png",
    imageAlt: "Bird netting installation on building to prevent pigeons"
  },
  {
    title: "Bird Spike Installation",
    description: "Stainless steel spike systems installed on ledges, signage, and AC units to prevent birds from roosting and nesting.",
    image: "/img-bird-spike.png",
    imageAlt: "Stainless steel bird spikes installed on building ledge"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-full text-sm mb-4 text-[#152E35]" style={{ backgroundColor: "#E3F2EE" }}>
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Pest Control Solutions
          </h2>
          <p className="text-lg text-gray-500">
            Professional treatments for every type of pest — residential, commercial, and industrial properties across Mumbai, Navi Mumbai & Thane.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const waMsg = encodeURIComponent(`Hi, I need ${service.title} service in Mumbai`);
            const waLink = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;
            return (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 flex flex-col"
                data-testid={`service-card-${i}`}
              >
                <div className="h-48 overflow-hidden bg-gray-50">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={192}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{service.description}</p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full text-white text-sm font-semibold py-2.5 rounded-lg transition-colors bg-[#25D366] hover:bg-[#1ebe5c]"
                    data-testid={`service-whatsapp-${i}`}
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp for Quote
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
