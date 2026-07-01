import { Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Emergency() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center bg-[#E3F2EE] rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Need Immediate Help?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We provide 24/7 emergency pest control service. Call us now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#152E35] hover:bg-[#1a3a42]">
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 91365 95675
            </Button>
            <Button size="lg" variant="outline">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
