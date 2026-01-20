import Section from "@/src/components/common/layout/Section";
import React from "react";

/**
 * FAQ data
 */
const FAQS = [
  {
    question: "What is included in your travel packages?",
    answer:
      "Our packages typically include flights, accommodation, select meals, guided tours, and local transfers. Please check each package for specific inclusions.",
  },
  {
    question: "Can I customize my itinerary?",
    answer:
      "Yes! We offer customizable itineraries. Contact our travel experts to tailor your trip according to your preferences.",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Yes, we provide special discounts for group bookings. Please reach out to our team for more details.",
  },
  {
    question: "Is travel insurance included?",
    answer:
      "Travel insurance is not included by default but can be added to your package upon request.",
  },
  {
    question: "How do I make a booking?",
    answer:
      "You can book directly through our website or contact our customer support for assistance.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy varies by package and provider. Please refer to the package details or contact us for more information.",
  },
];

export default function FAQSection() {
  return (
    <section className="max-w-2xl mx-auto my-12 px-4">
      <h2 className="hidden md:block text-2xl md:text-3xl font-bold text-[#052210] mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <h2 className="md:hidden text-2xl md:text-3xl font-bold text-[#052210] mb-6 text-center">
        FAQs
      </h2>
      <div className="join join-vertical w-full">
        {FAQS.map((faq, idx) => (
          <div
            className="collapse collapse-arrow join-item bg-base-100"
            key={idx}
          >
            <input type="checkbox" />
            <div className="collapse-title text-md font-medium">
              {faq.question}
            </div>
            <div className="collapse-content text-sm text-gray-700">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
