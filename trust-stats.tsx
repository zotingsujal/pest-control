export function TrustStats() {
  const stats = [
    { value: "5,000+", label: "Happy Customers" },
    { value: "28+", label: "Years Experience" },
    { value: "100%", label: "Satisfaction Guarantee" },
    { value: "24/7", label: "Emergency Service" }
  ];

  return (
    <section style={{ backgroundColor: "#E3F2EE" }} className="py-12 border-y border-[#c5e0d8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2" data-testid={`stat-${i}`}>
              <span className="text-4xl md:text-5xl font-extrabold text-[#152E35]">{stat.value}</span>
              <span className="text-sm md:text-base font-semibold tracking-wider uppercase text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
