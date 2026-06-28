import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Poonam Nagar",
    area: "Andheri East",
    text: "We are extremely satisfied with the pest control services provided by Pest Control Mumbai. Highly recommend their services to anyone facing pest control issues."
  },
  {
    name: "Ajay Orpe",
    area: "Andheri East",
    text: "Their team is professional, efficient, and effective in eliminating the pest issue. The service is prompt, and the staff is courteous and knowledgeable. We appreciate their follow-up visit to ensure the issue is fully resolved. We highly recommend their services to anyone facing pest control issues."
  },
  {
    name: "Mr. Ajay Orpe",
    area: "Jai Malhar Ent., Andheri East",
    role: "Owner",
    text: "We are extremely satisfied with the pest control services provided by Pest Control Mumbai. The staff is well trained and expert, and Mr. Rajesh — having over years of experience — handles everything and ensures the treatment he is providing is highly effective. We highly recommend their services to anyone facing pest control issues."
  },
  {
    name: "Natasha",
    area: "Byculla East",
    text: "I recently had the pleasure of working with Mr. Rajesh from Pest Control Mumbai for termite treatment, and I couldn't be more impressed. From start to finish, Rajeshji was professional, knowledgeable, and attentive to every detail. He thoroughly explained the treatment process and answered all my questions. His expertise was evident — he used the best quality products and ensured the treatment was thorough and effective. Thanks to him, my home is now free from termites. I highly recommend Rajeshji for anyone in need of termite treatment or pest control services. His dedication to customer satisfaction truly sets him apart."
  },
  {
    name: "Stanny Pereira",
    area: "Mumbai",
    text: "We have had a good and satisfying experience with the pest control services of Pest Control Mumbai. The owner of the company is very supportive, the staff is very good and helpful, and anytime service is available. I highly recommend them for all your pest control needs."
  },
  {
    name: "Prasad Shenoy",
    area: "Nariman Point (Sai Advertisers)",
    text: "We are extremely satisfied with the pest control services provided by Pest Control Mumbai at our office. Their team is professional, efficient, and effective in eliminating the pest issue. The service is prompt, and the staff is courteous and knowledgeable. We appreciate their follow-up visit to ensure the issue is fully resolved. We highly recommend their services to anyone facing pest control issues."
  },
  {
    name: "Shraddha Patel",
    area: "Mahalakshmi",
    text: "Pest Control Mumbai gives us very good service at all our sites — especially for termite treatment. Their staff is experienced and they know how to do termite treatment properly. They have done proper drilling and spraying work. Very satisfied with the results."
  },
  {
    name: "Dinshaw F. Variava",
    area: "Rustom Baug, Block No. 10",
    text: "We are very happy using Rajesh Zoting Pest Control Mumbai. Their service is prompt and always on time. No need to call and remind for the service. Their services, especially Termite Control, are very effective. We are happy using their services."
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerPage(1);
      else if (window.innerWidth < 1024) setPerPage(2);
      else setPerPage(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = Math.ceil(reviews.length / perPage);
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const visible = reviews.slice(current * perPage, current * perPage + perPage);

  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: "#E3F2EE" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">Real reviews from families and businesses across Mumbai who trust us with their homes and offices.</p>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]">
            {visible.map((review, i) => (
              <div
                key={`${current}-${i}`}
                className="bg-white rounded-2xl shadow-md p-8 flex flex-col animate-in fade-in duration-500 border border-[#c5e0d8]"
                data-testid={`testimonial-card-${i}`}
              >
                <Quote className="h-8 w-8 mb-4 opacity-30" style={{ color: "#152E35" }} />
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">"{review.text}"</p>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  {"role" in review && review.role && (
                    <p className="text-xs font-semibold text-[#152E35] mb-0.5">{review.role}</p>
                  )}
                  <p className="text-sm text-gray-400">{review.area}, Mumbai</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors hover:text-white hover:bg-[#152E35]"
              style={{ borderColor: "#152E35", color: "#152E35" }}
              aria-label="Previous reviews"
              data-testid="testimonial-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ width: i === current ? "2rem" : "0.5rem", backgroundColor: i === current ? "#152E35" : "#a8c8c0" }}
                  aria-label={`Go to page ${i + 1}`}
                  data-testid={`testimonial-dot-${i}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors hover:text-white hover:bg-[#152E35]"
              style={{ borderColor: "#152E35", color: "#152E35" }}
              aria-label="Next reviews"
              data-testid="testimonial-next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <p className="text-center mt-6 text-sm text-gray-500 font-medium">
            {reviews.length} verified customer reviews — 5⭐ rated
          </p>
        </div>
      </div>
    </section>
  );
}
