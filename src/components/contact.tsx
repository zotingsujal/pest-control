export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#152E35] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p>Santacruz West, Mumbai</p>
              <p>Serving all of Mumbai</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Phone</h3>
              <p>+91 91365 95675</p>
              <p>24/7 Available</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p>Monday - Sunday</p>
              <p>24/7 Emergency Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
