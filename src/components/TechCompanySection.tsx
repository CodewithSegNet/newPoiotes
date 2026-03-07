import { useState, useEffect, useRef, useCallback } from 'react';
import first from "../assets/firstlayer.png"
import second from "../assets/center.png"
import third from "../assets/Layer_11.png"
import fourth from "../assets/Layer_9.png"
import fifth from "../assets/lefts.png"
import sixth from "../assets/rights.png"
import cardone from "../assets/firstt.png"
import trys from "../assets/try2.png"
import star from "../assets/StarFour.png"
import cardtwo from "../assets/seconds.png"
import bell from "../assets/BellSimpleRinging.png"
import cardthree from "../assets/thirds.png"



export function TechCompanySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const runwayRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Track screen size for responsive card widths
  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // Intersection observer for fade-in
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

  // Scroll-linked horizontal slide
  const handleScroll = useCallback(() => {
    if (!runwayRef.current) return;
    const rect = runwayRef.current.getBoundingClientRect();
    const runwayHeight = runwayRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;

    // How far we've scrolled into the runway (0 = top just entered, 1 = bottom leaving)
    const scrolled = -rect.top;
    const maxScroll = runwayHeight - viewportHeight;
    const progress = Math.max(0, Math.min(1, scrolled / maxScroll));

    setScrollProgress(progress);
    setActiveCard(Math.min(4, Math.floor(progress * 5)));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const services = [
    {
      icon: (
     <img className='h-5 w-5' src={star} alt="" />
      ),
      tag: 'We Build',
      title: 'Custom Software Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at nulla in fermentum urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricis at. Aiquam in hendrerit urna.',
      image: cardone,
      imagePosition: 'bottom' as const,
      gradient: 'radial-gradient(ellipse at bottom left, rgba(253, 198, 10, 0.4) 0%, transparent 50%)',
    },
    {
      icon: (
     <img className='h-5 w-5' src={bell} alt="" />
      ),
      tag: null,
      title: 'AI & Intelligent Systems',
      description: 'Strategically come up with user friendly and responsive AI-powered solutions that learn and adapt to your business needs.',
      image: cardtwo,
      imagePosition: 'top' as const,
      gradient: 'radial-gradient(ellipse at bottom left, rgba(231, 48, 2, 0.3) 0%, transparent 50%)',
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#22C55E" />
          <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      tag: null,
      title: 'Product Design & UX',
      description: 'Know the details with real-time updates from lean documentation. We craft pixel-perfect interfaces that delight users.',
      image: cardthree,
      imagePosition: 'bottom' as const,
      gradient: 'radial-gradient(ellipse at bottom left, rgba(1, 220, 132, 0.4) 0%, transparent 50%)',
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#FF6730"/>
        </svg>
      ),
      tag: 'We Scale',
      title: 'Cloud & Infrastructure',
      description: 'Enterprise-grade cloud architecture built for scale. Secure, resilient, and optimized for peak performance at any load.',
      image: cardone,
      imagePosition: 'bottom' as const,
      gradient: 'radial-gradient(ellipse at bottom left, rgba(147, 51, 234, 0.4) 0%, transparent 50%)',
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FDC60A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      tag: 'We Advise',
      title: 'Consulting & Strategy',
      description: 'From roadmap to launch, we provide strategic technology consulting that aligns your software investments with business goals.',
      image: cardtwo,
      imagePosition: 'top' as const,
      gradient: 'radial-gradient(ellipse at bottom left, rgba(6, 182, 212, 0.4) 0%, transparent 50%)',
    },
  ];

  // Calculate how much to translate the card track based on scroll progress
  const cardWidth = isMobile ? 280 : isTablet ? 340 : 400; // responsive px per card
  const cardGap = 16; // gap between cards
  const totalTrackWidth = services.length * (cardWidth + cardGap) - cardGap;
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const maxTranslate = Math.max(0, totalTrackWidth - viewportWidth + 80); // 80px padding
  const translateX = -scrollProgress * maxTranslate;

  return (
    <section ref={sectionRef} className="relative w-full overflow-visible z-10">
      {/* Curved dark top with ribbon images */}
      <div className="relative overflow-visible md:h-[180px] lg:h-[250px]">
        <div className="relative w-full h-full overflow-visible">
          <div>
            <img className='' src={trys} alt="" />
          </div>
        </div>
      </div>

      {/* Main dark content area — this wraps everything including the scroll runway */}
      <div className="bg-black relative">
        {/* Heading — always visible at top */}
        <div className="text-center pt-16 pb-4 max-w-2xl mx-auto px-6">
          <h2
            className="font-cabinet md:mt-[7rem] font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.2s',
            }}
          >
            We're not just another{' '}
            <span className="text-[#FF6730]">tech Company.</span>
          </h2>
          <p
            className="text-white/60 text-sm md:text-base max-w-lg mx-auto font-cabinet"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.4s',
            }}
          >
            We're architects of intelligent, luxury-grade software that transforms
            ambitious brands into industry leaders.
          </p>
        </div>

        {/* ══════ SCROLL RUNWAY — tall container that drives the horizontal scroll ══════ */}
        <div ref={runwayRef} className="relative h-[200vh] sm:h-[250vh] md:h-[300vh]">
          {/* Sticky viewport — pins to screen while user scrolls through runway */}
          <div
            ref={stickyRef}
            className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center"
          >
            {/* Horizontal card track */}
            <div
              className="flex gap-4 pl-4 sm:pl-10 md:pl-20 transition-transform duration-100 ease-out items-stretch"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center flex-shrink-0" style={{ width: `${cardWidth}px` }}>
                  {/* Card */}
                  <div
                    className={`rounded-2xl pt-8 px-8 flex flex-col justify-between relative overflow-hidden border border-white/5 w-full transition-all duration-500 ${
                      activeCard === index ? 'border-white/15 scale-[1.02]' : 'opacity-70 scale-100'
                    }`}
                    style={{
                      height: isMobile ? '420px' : isTablet ? '470px' : '520px',
                      background: service.gradient,
                      opacity: isVisible ? (activeCard === index ? 1 : 0.7) : 0,
                      transform: isVisible
                        ? `translateY(0) scale(${activeCard === index ? 1.02 : 1})`
                        : 'translateY(30px)',
                      transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
                    }}
                  >
                    {service.imagePosition === 'top' && (
                      <div className="w-full rounded-xl overflow-hidden mb-4">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="flex-1">
                      {/* Icon */}
                      <div className="mb-3">{service.icon}</div>

                      {/* Tag */}
                      {service.tag && (
                        <div className="inline-flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 mb-3">
                          <span className="text-white text-xs font-cabinet">{service.tag}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="font-cabinet font-bold text-lg md:text-xl text-white mb-2">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/50 text-xs leading-relaxed mb-3">
                        {service.description}
                      </p>

                      {/* Learn More */}
                      <a href="#" className="text-[#FF6730] text-sm font-cabinet hover:underline">
                        Learn More
                      </a>
                    </div>

                    {service.imagePosition === 'bottom' && (
                      <div className="w-full rounded-xl overflow-hidden mt-4">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Individual card number */}
                  <div className={`mt-5 w-10 h-10 rounded-full flex items-center justify-center text-sm font-cabinet font-semibold transition-all duration-400 ${
                    activeCard === index
                      ? 'bg-[#FF6730] text-white scale-110'
                      : 'border border-white/30 text-white/50 scale-100'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll progress bar */}
            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FF6730] rounded-full transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom curved transition to white */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 240"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: '140px', marginTop: '-1px' }}
        >
          <rect width="1440" height="240" fill="black" />
          <path
            d="M0,0 Q720,120 1440,0 L1440,240 L0,240 Z"
            fill="#1a1a1a"
          />
          <path
            d="M0,120 Q720,240 1440,120 L1440,240 L0,240 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
