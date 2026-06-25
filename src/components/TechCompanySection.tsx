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
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Track screen size
  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 768);
      setIsDesktop(window.innerWidth >= 768);
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

  // Desktop: scroll-linked horizontal slide
  const handleScroll = useCallback(() => {
    if (!runwayRef.current || !isDesktop) return;
    const rect = runwayRef.current.getBoundingClientRect();
    const runwayHeight = runwayRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrolled = -rect.top;
    const maxScroll = runwayHeight - viewportHeight;
    const progress = Math.max(0, Math.min(1, scrolled / maxScroll));

    setScrollProgress(progress);
    setActiveCard(Math.min(4, Math.floor(progress * 5)));
  }, [isDesktop]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Mobile: track which card is visible via scroll snap
  useEffect(() => {
    if (isDesktop || !mobileTrackRef.current) return;
    const track = mobileTrackRef.current;

    const handleMobileScroll = () => {
      const scrollLeft = track.scrollLeft;
      const cardW = track.firstElementChild
        ? (track.firstElementChild as HTMLElement).offsetWidth + 16 // card width + gap
        : 296;
      const idx = Math.round(scrollLeft / cardW);
      setActiveCard(Math.min(4, Math.max(0, idx)));
    };

    track.addEventListener('scroll', handleMobileScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleMobileScroll);
  }, [isDesktop]);

  const services = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#22C55E" />
          <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      tag: 'Core Engineering',
      title: 'Build Better Digital Products',
      description: 'Web Applications, Mobile Applications, SaaS Platforms, APIs, and System Integrations designed to deliver exceptional user experiences.',
      image: cardone,
      imagePosition: 'bottom' as const,
      gradient: 'radial-gradient(ellipse at bottom left, rgba(1, 220, 132, 0.4) 0%, transparent 50%)',
    },
    {
      icon: (
     <img className='h-5 w-5' src={star} alt="" />
      ),
      tag: 'Efficiency',
      title: 'Improve Business Operations',
      description: 'Automation Systems, Internal Platforms, Workflow Optimization, and Business Process Digitization that streamline your workflows.',
      image: cardtwo,
      imagePosition: 'top' as const,
      gradient: 'radial-gradient(ellipse at bottom left, rgba(253, 198, 10, 0.4) 0%, transparent 50%)',
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      tag: 'Intelligence',
      title: 'Understand Your Customers',
      description: 'Analytics, User Behavior Tracking, Conversion Analysis, and Business Intelligence turning raw data into strategic insights.',
      image: cardthree,
      imagePosition: 'bottom' as const,
      gradient: 'radial-gradient(ellipse at bottom left, rgba(6, 182, 212, 0.4) 0%, transparent 50%)',
    },
    {
      icon: (
     <img className='h-5 w-5' src={bell} alt="" />
      ),
      tag: 'Growth',
      title: 'Increase Digital Visibility',
      description: 'SEO Research, Competitor Analysis, Technical SEO, Content Strategy, and Search Performance Optimization to capture high-intent traffic.',
      image: cardone,
      imagePosition: 'bottom' as const,
      gradient: 'radial-gradient(ellipse at bottom left, rgba(231, 48, 2, 0.3) 0%, transparent 50%)',
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#9333EA"/>
        </svg>
      ),
      tag: 'Reliability',
      title: 'Secure & Scale',
      description: 'Infrastructure Management, Performance Optimization, Monitoring, Backups, and Security Best Practices ensuring uptime and resilience.',
      image: cardtwo,
      imagePosition: 'top' as const,
      gradient: 'radial-gradient(ellipse at bottom left, rgba(147, 51, 234, 0.4) 0%, transparent 50%)',
    },
  ];

  // Desktop: calculate translation for scroll-driven animation
  const desktopCardWidth = 400;
  const cardGap = 16;
  const totalTrackWidth = services.length * (desktopCardWidth + cardGap) - cardGap;
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const maxTranslate = Math.max(0, totalTrackWidth - viewportWidth + 80);
  const translateX = -scrollProgress * maxTranslate;

  // Responsive card sizes
  const mobileCardWidth = isMobile ? 280 : 340; // 280 phone, 340 tablet
  const mobileCardHeight = isMobile ? '510px' : '470px';

  // Shared card renderer
  const renderCard = (service: typeof services[0], index: number, isMobileCard: boolean) => (
    <div
      key={index}
      className="flex flex-col items-center flex-shrink-0"
      style={{ width: isMobileCard ? `${mobileCardWidth}px` : `${desktopCardWidth}px` }}
    >
      {/* Card */}
      <div
        className={`rounded-2xl pt-8 px-8 flex flex-col justify-between relative overflow-hidden border border-white/5 w-full transition-all duration-500 ${
          !isMobileCard
            ? activeCard === index ? 'border-white/15 scale-[1.02]' : 'opacity-70 scale-100'
            : 'border-white/10'
        }`}
        style={{
          height: isMobileCard ? mobileCardHeight : '520px',
          background: service.gradient,
          opacity: isVisible ? (isMobileCard ? 1 : activeCard === index ? 1 : 0.7) : 0,
          transform: isVisible
            ? isMobileCard ? 'translateY(0)' : `translateY(0) scale(${activeCard === index ? 1.02 : 1})`
            : 'translateY(30px)',
          transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
        }}
      >
        {service.imagePosition === 'top' && (
          <div className="w-full rounded-xl overflow-hidden mb-4">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="flex-1">
          <div className="mb-3">{service.icon}</div>

          {service.tag && (
            <div className="inline-flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 mb-3">
              <span className="text-white text-xs font-cabinet">{service.tag}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}

          <h3 className="font-cabinet font-bold text-lg md:text-xl text-white mb-2">
            {service.title}
          </h3>

          <p className="text-white/50 text-xs leading-relaxed mb-3">
            {service.description}
          </p>

          <a href="#" className="text-[#FF6730] text-sm font-cabinet hover:underline">
            Learn More
          </a>
        </div>

        {service.imagePosition === 'bottom' && (
          <div className="w-full rounded-xl overflow-hidden mt-4">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      {/* Card number */}
      <div className={`mt-5 w-10 h-10 rounded-full flex items-center justify-center text-sm font-cabinet font-semibold transition-all duration-400 ${
        activeCard === index
          ? 'bg-[#FF6730] text-white scale-110'
          : 'border border-white/30 text-white/50 scale-100'
      }`}>
        {String(index + 1).padStart(2, '0')}
      </div>
    </div>
  );

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

      {/* Main dark content area */}
      <div className="bg-black relative">
        {/* Heading */}
        <div className="text-center pt-16 pb-4 max-w-2xl mx-auto px-6">
          <h2
            className="font-cabinet md:mt-[7rem] font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.2s',
            }}
          >
            We build software that{' '}
            <span className="text-[#FF6730]">grows businesses.</span>
          </h2>
          <p
            className="text-white/60 text-sm md:text-base max-w-lg mx-auto font-cabinet"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.4s',
            }}
          >
            We're expert software developers and digital marketers — we create our own software
            products and help ambitious businesses build theirs, with every feature tied to measurable business outcomes.
          </p>
        </div>

        {/* ══════ MOBILE / TABLET: Swipeable horizontal slider ══════ */}
        {!isDesktop && (
          <div className="py-10">
            <div
              ref={mobileTrackRef}
              className="flex gap-4 px-6 overflow-x-auto pb-6 hide-scrollbar"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  style={{ scrollSnapAlign: 'center' }}
                >
                  {renderCard(service, index, true)}
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`rounded-full transition-all duration-300 ${
                    activeCard === index
                      ? 'w-6 h-2 bg-[#FF6730]'
                      : 'w-2 h-2 bg-white/30'
                  }`}
                  onClick={() => {
                    if (mobileTrackRef.current) {
                      const cardW = mobileCardWidth + 16; // card width + gap
                      mobileTrackRef.current.scrollTo({
                        left: index * cardW,
                        behavior: 'smooth',
                      });
                    }
                  }}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* ══════ DESKTOP: Scroll-driven horizontal animation ══════ */}
        {isDesktop && (
          <div ref={runwayRef} className="relative h-[300vh]">
            <div
              ref={stickyRef}
              className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center"
            >
              <div
                className="flex gap-4 pl-20 transition-transform duration-100 ease-out items-stretch"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                {services.map((service, index) => renderCard(service, index, false))}
              </div>
            </div>
          </div>
        )}
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
