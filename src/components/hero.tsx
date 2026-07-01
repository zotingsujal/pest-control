import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white to-[#E3F2EE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Pest-Free Living Starts Here
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Professional pest control services in Mumbai. 100% safe, eco-friendly treatments. 
            Fast response, guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#152E35] hover:bg-[#1a3a42]">
              Book Free Inspection <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Call: +91 91365 95675
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
