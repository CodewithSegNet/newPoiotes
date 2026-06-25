import { useState, useRef, useEffect } from 'react';

const caseStudies = [
  {
    client: 'Gemsore',
    industry: 'E-Commerce / FinTech',
    title: 'Scaling Revenue & Optimizing Conversion for High-Volume Transactions',
    challenge: 'Gemsore needed a robust, high-performance platform capable of handling thousands of concurrent users and massive transaction volumes without latency issues or security vulnerabilities.',
    solution: 'We engineered a highly scalable cloud architecture, completely redesigning the checkout flow to reduce friction, and implemented real-time analytics to monitor user behavior and system performance.',
    technology: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
    outcome: 'Increased conversion rates by 42% within the first quarter and successfully scaled infrastructure to handle a 300% increase in holiday traffic with zero downtime.',
    lessons: 'Performance optimizations at the database level provided the highest ROI for scaling. A streamlined, single-page checkout flow drastically reduced cart abandonment.',
  }
];

export function CaseStudiesSection() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section ref={sectionRef} className="bg-[#fcfcfc] py-20 px-6 md:px-10 lg:px-20 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="font-cabinet font-bold text-3xl md:text-4xl text-[#1a1a1a] mb-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            Proven Business Outcomes
          </h2>
          <p
            className="text-[#818181] text-sm md:text-base max-w-2xl mx-auto font-satoshi"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.15s',
            }}
          >
            We don't just write code — we build systems that generate measurable ROI. Here is how we've helped ambitious businesses scale.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-sm"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s ease-out ${0.3 + index * 0.1}s`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px]">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#FF6730]/10 text-[#FF6730] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {study.client}
                    </span>
                    <span className="text-[#818181] text-xs font-medium">
                      {study.industry}
                    </span>
                  </div>

                  <h3 className="font-cabinet font-bold text-2xl md:text-3xl text-[#1a1a1a] mb-8 leading-tight max-w-2xl">
                    {study.title}
                  </h3>

                  <div className="space-y-6 max-w-3xl font-satoshi">
                    <div>
                      <h4 className="font-bold text-[#1a1a1a] mb-2 text-sm">Business Challenge</h4>
                      <p className="text-[#818181] text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a1a] mb-2 text-sm">Solution Delivered</h4>
                      <p className="text-[#818181] text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a1a] mb-2 text-sm">Outcome Achieved</h4>
                      <p className="text-[#FF6730] font-medium text-sm leading-relaxed">{study.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f9f9f9] border-t lg:border-t-0 lg:border-l border-[#E5E5E5] p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] mb-4 text-sm font-satoshi">Technology Used</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.technology.map((tech, i) => (
                        <span key={i} className="bg-white border border-[#E5E5E5] text-[#1a1a1a] text-xs font-medium px-3 py-1.5 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1a1a1a] mb-2 text-sm font-satoshi">Key Lessons</h4>
                    <p className="text-[#818181] text-sm leading-relaxed font-satoshi italic">"{study.lessons}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
