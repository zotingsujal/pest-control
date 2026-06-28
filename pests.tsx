export function Pests() {
  const pests = [
    { name: "Cockroaches", image: "/pest-cockroach.jpg", desc: "Disease-carrying scavengers that multiply rapidly in kitchens and bathrooms." },
    { name: "Termites", image: "/pest-termite.jpg", desc: "Silent destroyers that can cause severe structural damage to your wooden furniture." },
    { name: "Bed Bugs", image: "/pest-bedbug.jpg", desc: "Parasitic insects that feed on human blood, causing itchy welts and sleepless nights." },
    { name: "Rats & Mice", image: "/pest-rat.jpg", desc: "Rodents that contaminate food, damage property, and spread dangerous diseases." },
    { name: "Mosquitoes", image: "/pest-mosquito.jpg", desc: "Carriers of Dengue, Malaria, and Chikungunya. We target both adults and breeding sites." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Every Pest, Every Property</h2>
          <p className="text-lg text-gray-600">We have the expertise to identify and eliminate all common household and commercial pests.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pests.map((pest, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg aspect-square">
              <img src={pest.image} alt={pest.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{pest.name}</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{pest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}