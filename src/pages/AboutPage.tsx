import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const animStyle = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.8s ease-out ${delay}s`,
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[#1a1a1a] via-[#2a2020] to-[#1a1a1a] overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF6730]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#fdc60a]/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6"
            style={animStyle(0)}
          >
            <span className="text-[#FF6730] text-xs font-cabinet font-medium">About Us</span>
          </div>

          <h1
            className="font-cabinet font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white leading-tight mb-6"
            style={animStyle(0.1)}
          >
            We Engineer <span className="text-[#FF6730]">Growth</span> Through Software
          </h1>

          <p
            className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto font-satoshi leading-relaxed"
            style={animStyle(0.2)}
          >
            Poietes is a software development and growth engineering company that builds
            its own products and helps ambitious businesses grow through technology,
            data-driven strategy, and conversion-focused digital experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div style={animStyle(0.3)}>
            <h2 className="font-cabinet font-bold text-2xl sm:text-3xl lg:text-[36px] text-[#1a1a1a] mb-4 leading-tight">
              Our Mission
            </h2>
            <p className="text-[#818181] text-sm leading-relaxed font-satoshi">
              To help businesses achieve measurable growth through technology, data, and
              digital experiences. We build software products and help companies develop
              solutions that acquire customers, optimize conversions, retain users, and
              drive revenue — not just write code.
            </p>
          </div>
          <div style={animStyle(0.4)}>
            <h2 className="font-cabinet font-bold text-2xl sm:text-3xl lg:text-[36px] text-[#1a1a1a] mb-4 leading-tight">
              Our Vision
            </h2>
            <p className="text-[#818181] text-sm leading-relaxed font-satoshi">
              To become a trusted growth and technology partner for ambitious businesses
              globally. Businesses should choose Poietes because we understand growth
              AND build great software — not just one or the other.
            </p>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12" style={animStyle(0.2)}>
            <h2 className="font-cabinet font-bold text-2xl sm:text-3xl lg:text-[36px] text-[#1a1a1a] mb-3">
              What We Stand For
            </h2>
            <p className="text-[#818181] text-sm max-w-lg mx-auto font-satoshi">
              Our values guide every decision, every line of code, and every client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Growth-First Engineering',
                description: 'Every product and feature serves a strategic purpose — acquiring customers, improving conversions, or scaling operations.',
              },
              {
                icon: '💎',
                title: 'Luxury Craftsmanship',
                description: 'We obsess over invisible details, micro-interactions, and the polish that separates good from exceptional.',
              },
              {
                icon: '🤝',
                title: 'True Partnership',
                description: "We don't disappear after launch. As your business grows, we grow with you — your embedded product team.",
              },
              {
                icon: '🔒',
                title: 'Complete Ownership',
                description: 'You own every line of code and design file. No lock-in, no dependencies, complete transparency.',
              },
              {
                icon: '📊',
                title: 'Data-Driven Decisions',
                description: 'Analytics, funnel tracking, user behavior analysis, and performance metrics guide every decision we make.',
              },
              {
                icon: '🌍',
                title: 'Global Standards',
                description: 'Enterprise-grade security, accessibility, and compliance — regardless of your company size.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-[#FF6730]/20 hover:shadow-lg transition-all duration-300"
                style={animStyle(0.2 + index * 0.1)}
              >
                <span className="text-2xl sm:text-3xl mb-4 block">{value.icon}</span>
                <h3 className="font-cabinet font-bold text-lg text-[#1a1a1a] mb-2">{value.title}</h3>
                <p className="text-[#818181] text-xs sm:text-sm leading-relaxed font-satoshi">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-3xl mx-auto text-center" style={animStyle(0.2)}>
          <h2 className="font-cabinet font-bold text-2xl sm:text-3xl lg:text-[40px] text-[#1a1a1a] mb-4 leading-tight">
            Ready to Grow Your Business{' '}
            <span className="text-[#FF6730]">With Software</span>?
          </h2>
          <p className="text-[#818181] text-sm sm:text-base mb-8 font-satoshi">
            Let’s start a conversation about building products that drive measurable growth for your business.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 rounded-full bg-[#FF6730] text-white text-sm font-cabinet font-semibold
                       hover:bg-[#e55a28] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6730]/25
                       hover:-translate-y-0.5 active:translate-y-0"
          >
            Book a Growth Call
          </a>
        </div>
      </section> */}
    </div>
  );
}
