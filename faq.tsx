import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How much does pest control cost in Mumbai?",
      answer: "The cost depends on the type of pest, the size of your property, and the severity of the infestation. We provide transparent pricing after a free inspection. Standard 1BHK treatments start from ₹800. We always give you a firm, upfront quote with no hidden charges."
    },
    {
      question: "Is the chemical treatment safe for children and pets?",
      answer: "Absolutely. We prioritize safety above all else. We use low-toxicity, eco-friendly chemicals that are highly effective against pests but completely safe for humans and pets. We also provide clear instructions if any brief isolation period is needed during application."
    },
    {
      question: "How long does the pest control treatment take?",
      answer: "Most standard residential treatments (like for cockroaches or bed bugs in a 2BHK) take between 45 minutes to 2 hours. Termite treatments or larger commercial properties may take longer. We'll give you a precise time estimate before starting."
    },
    {
      question: "Do I need to vacate my home during treatment?",
      answer: "For most general pest control (like cockroach gel baiting), you do not need to vacate. For more intensive treatments like fogging or heavy chemical sprays, we may ask you to step out for 2-3 hours for your comfort and safety."
    },
    {
      question: "How many treatments are required to eliminate pests?",
      answer: "Often, a single comprehensive treatment is enough to eliminate the active infestation. For pests with complex life cycles (like bed bugs) or severe infestations, a follow-up visit after 15-20 days is recommended to break the breeding cycle."
    },
    {
      question: "Do you provide a guarantee for your services?",
      answer: "Yes, we offer a 100% Satisfaction Guarantee. Depending on the service (single treatment vs AMC), we provide warranty periods ranging from 3 months to 1 year. If pests return during the warranty period, we retreat the area at no additional cost."
    },
    {
      question: "Do you offer Annual Maintenance Contracts (AMC)?",
      answer: "Yes, we offer comprehensive AMC packages for both residential and commercial properties. These include scheduled visits every 3 or 4 months to proactively prevent pest infestations, giving you year-round peace of mind."
    },
    {
      question: "Which areas in Mumbai do you serve?",
      answer: "While we are based in Santacruz West, we serve all major areas across Mumbai including Bandra, Andheri, Juhu, Vile Parle, Malad, Goregaon, Borivali, Powai, and South Mumbai. We have dedicated teams for fast response times across the city."
    }
  ];

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "#E3F2EE" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Clear, honest answers to the most common questions we get from our customers.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-[#c5e0d8] rounded-xl px-6 py-2" data-testid={`faq-item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-[#152E35] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
