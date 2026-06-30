import { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    question: 'Who is Poietes?',
    answer:
      'Poietes is a full-cycle software development and technology partner. We build our own successful digital products (like Kloka) and help ambitious businesses succeed through web application development, iOS and Android mobile apps, DevOps consulting, technical SEO, and conversion-focused digital marketing. We don\'t just write code — we build systems that generate business value.',
  },
  {
    question: 'What makes Poietes different from typical software agencies?',
    answer:
      'Most software agencies just write code. Poietes delivers end-to-end digital product engineering tied directly to business growth. Every project is designed around measurable business outcomes — whether that\'s launching a scalable mobile app, optimizing your infrastructure, or driving user acquisition for your new platform. We combine robust software engineering with proven digital growth strategies.',
  },
  {
    question: 'What services does Poietes offer?',
    answer:
      'We offer software development (web apps, mobile apps, APIs), digital marketing & user acquisition (technical SEO, competitor analysis, audience targeting), product design (UX/UI, conversion rate optimization), infrastructure & reliability (DevOps consulting, cloud architecture, security), and data intelligence (funnel tracking, business intelligence).',
  },
  {
    question: 'How can I work with Poietes?',
    answer:
      'Start with a free technical consultation — we\'ll understand your business goals, analyze your current software architecture or digital presence, and propose a tailored roadmap for development and user acquisition. Every engagement begins with deep technical research and ends with a robust, scalable product.',
  },
  {
    question: 'What is Poietes pricing?',
    answer:
      'Our pricing is project-based and depends on scope, complexity, and timeline. We provide detailed proposals with clear ROI projections after understanding your requirements during the discovery phase.',
  },
  {
    question: 'Do you build your own products?',
    answer:
      'Yes! We build and operate our own software products like Kloka (attendance monitoring). This means we understand both sides — the technical challenges of building products and the business challenges of growing them. We bring that experience to every client engagement.',
  },
];

export function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-6 md:px-10 lg:px-20 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-16">
          {/* Left Column — Badge + Title */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#fafafa] border border-gray-200 rounded-full px-4 py-1.5 mb-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818181" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              <span className="text-[#818181] text-xs font-cabinet font-medium">FAQs</span>
            </div>

            <h2 className="font-cabinet font-bold text-2xl md:text-3xl lg:text-[36px] text-[#1a1a1a] leading-tight">
              Your questions,
              <br />
              answered.
            </h2>
          </div>

          {/* Right Column — Accordion */}
          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                  transition: `all 0.6s ease-out ${0.1 + index * 0.08}s`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="font-cabinet font-medium text-sm text-[#1a1a1a] group-hover:text-[#FF6730] transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${openIndex === index
                        ? 'border-[#FF6730] bg-[#FF6730]/5 rotate-45'
                        : 'border-gray-300'
                      }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openIndex === index ? '#FF6730' : '#818181'} strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    maxHeight: openIndex === index ? '200px' : '0',
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <p className="text-[#818181] text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
