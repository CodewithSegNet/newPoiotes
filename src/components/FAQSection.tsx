import { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    question: 'Who is Poietes',
    answer:
      'Poietes is a full-service software development agency specializing in custom web development, mobile app development, cloud infrastructure, and AI-powered solutions. We partner with startups and enterprises to build scalable, high-performance digital products that drive business growth and deliver exceptional user experiences.',
  },
  {
    question: 'What does Poietes do',
    answer:
      'Poietes is a premium software development company that builds intelligent, luxury-grade software solutions for ambitious businesses. We specialize in custom software development, AI systems, and product design.',
  },
  {
    question: 'How can I work with Poietes',
    answer:
      'You can reach out to us through our contact form, email, or phone. We start with a discovery call to understand your needs, then propose a tailored solution.',
  },
  {
    question: 'What is Poietes pricing?',
    answer:
      'Our pricing is project-based and depends on the scope, complexity, and timeline. We provide detailed proposals after understanding your requirements during the discovery phase.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We offer comprehensive post-launch support including bug fixes, performance monitoring, feature updates, and ongoing maintenance. We treat every client as a long-term partner.',
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
                    className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${
                      openIndex === index
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
                  <p className="text-[#818181] text-xs leading-relaxed pb-5">
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
