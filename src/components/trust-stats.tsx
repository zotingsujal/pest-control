export function TrustStats() {
  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Emergency Service' },
    { number: '100%', label: 'Satisfaction Guaranteed' },
  ]

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-[#152E35] mb-2">{stat.number}</div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
