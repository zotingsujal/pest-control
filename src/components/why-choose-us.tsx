import { Shield, Leaf, Clock, Award } from 'lucide-react'

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Safe for Family',
      description: 'Low-toxicity, eco-friendly chemicals safe for children and pets.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Environmentally responsible pest control solutions.',
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Call anytime. We respond within 30 minutes.',
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Certified professionals with 15+ years experience.',
    },
  ]

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Why Choose PestShield?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div key={i} className="text-center">
                <Icon className="h-12 w-12 mx-auto mb-4" style={{ color: '#152E35' }} />
                <h3 className="text-xl font-bold mb-2 text-gray-900">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
