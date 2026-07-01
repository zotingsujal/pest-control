import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { TrustStats } from '@/components/trust-stats'
import { WhyChooseUs } from '@/components/why-choose-us'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { FAQ } from '@/components/faq'
import { Testimonials } from '@/components/testimonials'
import { Emergency } from '@/components/emergency'
import { Contact } from '@/components/contact'
import { BookingForm } from '@/components/booking-form'
import { FloatingActions } from '@/components/floating-actions'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TrustStats />
      <WhyChooseUs />
      <About />
      <Services />
      <Process />
      <FAQ />
      <Testimonials />
      <BookingForm />
      <Emergency />
      <Contact />
      <FloatingActions />
    </div>
  )
}

export default App
