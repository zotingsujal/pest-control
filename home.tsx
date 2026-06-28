import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { TrustStats } from "@/components/trust-stats";
import { WhyChooseUs } from "@/components/why-choose-us";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Emergency } from "@/components/emergency";
import { BookingForm } from "@/components/booking-form";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <TrustStats />
        <WhyChooseUs />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Emergency />
        <BookingForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
