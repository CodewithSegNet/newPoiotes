import { useState, useEffect, useRef } from 'react';

const processSteps = [
  {
    title: 'Discovery & Strategy',
    description: 'Deep dive into your business. Market research. User insights. Technical requirements.',
  },
  {
    title: 'Design & Architecture',
    description: 'Wireframes & prototypes. Visual design. System architecture. User testing.',
  },
  {
    title: 'Development & Integration',
    description: 'Agile development sprints. Regular check-ins. Quality assurance.',
  },
  {
    title: 'Launch & Optimization',
    description: 'Deployment. Team training. Documentation. Post-launch support.',
  },
  {
    title: 'Growth & Evolution',
    description: 'Performance monitoring. Continuous improvement. Feature evolution.',
  },
];

export function ProcessSection() {
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
    <section ref={sectionRef} className="bg-white py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2
          className="font-cabinet font-bold text-3xl md:text-4xl text-[#1a1a1a] mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          Our Process
        </h2>

        {/* Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 rounded-xl p-6 border-r border-l border-b border-gray-100 hover:border-[#FF6730]/30 hover:shadow-md transition-all duration-300 ${
                index === 1 || index === 4 ? '' : 'bg-white'
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${0.1 + index * 0.1}s`,
              }}
            >
              {/* Checkbox icon */}
              <div className="mb-4">
                <div className="w-6 h-6 rounded bg-[#FF6730] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div>

              {/* Title */}
              <h3 className="font-cabinet font-normal text-xl font-regular text-nowrap text-[#1a1a1a] mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#818181] text-sm leading-relaxed">
                {step.description}
              </p>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
