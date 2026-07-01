import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Services() {
  const services = [
    {
      title: 'Cockroach Control',
      description: 'Complete elimination of cockroaches using safe gel baiting and targeted sprays.',
    },
    {
      title: 'Termite Management',
      description: 'Advanced termite treatments to protect your property from costly damage.',
    },
    {
      title: 'Bed Bug Treatment',
      description: 'Comprehensive bed bug elimination with follow-up inspections.',
    },
    {
      title: 'Rodent Control',
      description: 'Professional rat and mouse control with humane and effective methods.',
    },
    {
      title: 'Mosquito Control',
      description: 'Effective mosquito management to prevent dengue and malaria.',
    },
    {
      title: 'Annual Maintenance',
      description: 'Preventive pest control contracts for year-round peace of mind.',
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#152E35]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
