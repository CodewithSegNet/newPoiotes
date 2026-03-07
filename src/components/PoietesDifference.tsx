import { useState, useEffect, useRef } from 'react';
import first from "../assets/Object.png"
import second from "../assets/right.png"
import third from "../assets/stars.png"
import fourth from "../assets/puzzle.png"
import fifth from "../assets/last.png"
import ads from "../assets/IMG.mp4"


export function PoietesDifference() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoInView, setIsVideoInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Lazy load: only play video when it scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoInView(true);
          if (videoRef.current && isVideoLoaded) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          setIsVideoInView(false);
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.2 }
    );
    if (videoContainerRef.current) observer.observe(videoContainerRef.current);
    return () => { if (videoContainerRef.current) observer.unobserve(videoContainerRef.current); };
  }, [isVideoLoaded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const animStyle = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.8s ease-out ${delay}s`,
  });

  return (
    <section ref={sectionRef} className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2
            className="font-cabinet font-bold text-3xl md:text-4xl lg:text-[42px] text-[#1a1a1a] mb-3"
            style={animStyle(0)}
          >
            The Poietes Difference
          </h2>
          <p
            className="text-[#818181] text-sm md:text-base max-w-lg mx-auto font-satoshi"
            style={animStyle(0.15)}
          >
            We're architects of intelligent, luxury-grade software that transforms
            ambitious brands into industry leaders.
          </p>
        </div>

        {/* ──── Row 1: Strategic Thinking First ──── */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_430px] border-t border-b border-[#E5E5E5]"
          style={animStyle(0.2)}
        >
          {/* Text cell */}
          <div className="flex items-starts flex-col justify-center p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#E5E5E5]">
            <h3 className="font-satoshi font-black text-2xl md:text-3xl lg:text-[36px] text-[#1a1a1a] mb-2 leading-tight">
              Strategic Thinking First
            </h3>
            <p className="font-satoshi font-medium text-sm text-[#1a1a1a] mb-3">
              We don't just code. We solve business problems.
            </p>
            <p className="text-[#818181] text-xs leading-relaxed mb-5 font-satoshi">
              Before writing code, we dive deeper into your business—understanding customers, analyzing competitors, and
              identifying opportunities. Every feature serves a strategic purpose: driving revenue, reducing costs, or creating
              competitive advantages.
            </p>
            <a
              href="#"
              className="inline-block w-fit px-5 py-2 rounded-full bg-[#FF6730] text-white text-xs font-cabinet font-semibold hover:bg-[#e55a28] transition-all duration-300"
            >
              Make Enquiries
            </a>
          </div>
          {/* Image cell */}
          <div className="flex items-center justify-center border-t md:border-t-0 border-l-0 md:border-l border-[#E5E5E5] p-4 sm:p-6 md:p-8">
            <img
              src={first}
              alt="Strategic Thinking"
              className="w-full max-w-[250px] sm:max-w-[280px] md:max-w-[320px] h-auto object-contain"
            />
          </div>
        </div>

        {/* ──── Row 2: Luxury Execution (3-column with overflowing images) ──── */}
        <div
          className="relative grid grid-cols-1 md:grid-cols-[200px_1fr_200px] border-b border-[#E5E5E5] items-center "
          style={animStyle(0.35)}
        >
          {/* Image cell - left (desktop only — overflows left) */}
          <div className="hidden md:flex items-center justify-center p-4 md:p-6 h-auto md:h-[380px] md:border-r border-[#E5E5E5] overflow-hidden">
            <img
              src={third}
              alt="Luxury Execution"
              className="absolute w-[450px] left-[-270px] h-auto object-contain"
            />
          </div>
          {/* Text cell - center (bordered on left and right) */}
          <div className="flex flex-col items-start justify-center p-6 sm:p-8 md:p-10 border-[#E5E5E5] md:border-l md:border-r md:mx-2 min-h-[280px] md:h-[380px] order-first md:order-none">
            <h3 className="font-satoshi font-black text-2xl md:text-3xl lg:text-[36px] text-[#1a1a1a] mb-2 leading-tight">
              Luxury Execution
            </h3>
            <p className="font-satoshi font-medium text-sm text-[#1a1a1a] mb-3">
              Every pixel, every interaction, every detail matters.
            </p>
            <p className="text-[#818181] text-xs leading-relaxed mb-5 font-satoshi">
              We obsess over invisible details, micro interactions, and loading states most agencies
              ignore. Pixel-first top-to-find craftmanship on every element, ensuring. Our work doesn't just
              function—it captivates and becomes your brand's signature.
            </p>
            <a
              href="#"
              className="inline-block px-5 py-2 rounded-full bg-[#FF6730] text-white text-xs font-cabinet font-semibold hover:bg-[#e55a28] transition-all duration-300"
            >
              Make Enquiries
            </a>
          </div>
          {/* Video cell - right (partial on desktop, fills container on mobile) */}
          <div ref={videoContainerRef} className="relative border-t md:border-t-0 w-full sm:w-[250px] md:w-[320px] h-[280px] sm:h-[320px] md:h-[380px] border-l-0 md:border-l border-[#E5E5E5] overflow-hidden">
            {/* Loading skeleton */}
            <div className={`absolute inset-0 z-[5] flex items-center justify-center bg-gray-100 transition-opacity duration-500 ${
              isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7z" fill="#FF6730" />
                  </svg>
                </div>
                <span className="text-xs text-gray-400 font-cabinet">Loading video...</span>
              </div>
            </div>

            <video
              ref={videoRef}
              src={ads}
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={() => {
                setIsVideoLoaded(true);
                if (isVideoInView && videoRef.current) {
                  videoRef.current.play().catch(() => {});
                }
              }}
              className="w-full h-full object-cover my-2 ml-2 md:absolute md:inset-0"
            />
            {/* Mute/Unmute toggle */}
            <button
              onClick={toggleMute}
              className={`absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all duration-200 z-10 ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ──── Row 3: True Ownership + Intelligence-Driven (2 separate bordered boxes) ──── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-2 min-h-[280px] md:h-[380px] border-b border-[#E5E5E5]"
          style={animStyle(0.5)}
        >
          {/* True Ownership - own border */}
          <div className="flex items-start flex-col justify-center border-b md:border-b-0 md:border-r border-[#E5E5E5] p-6 sm:p-8 md:p-10">
            <h3 className="font-cabinet font-bold text-2xl md:text-3xl text-[#1a1a1a] mb-2 leading-tight">
              True Ownership
            </h3>
            <p className="font-satoshi font-medium text-sm text-[#1a1a1a] mb-3">
              No lock-in. No dependencies. Complete transparency.
            </p>
            <p className="text-[#818181] text-xs leading-relaxed mb-5 font-satoshi">
              You own every line of code and design file. We use industry-standard tech, provide
              full documentation, and train your team. You're free to leave anytime—but when we
              offer flexibility, clients choose to stay.
            </p>
            <a
              href="#"
              className="inline-block px-5 py-2 rounded-full bg-[#FF6730] text-white text-xs font-cabinet font-semibold hover:bg-[#e55a28] transition-all duration-300"
            >
              Make Enquiries
            </a>
          </div>

          {/* Intelligence-Driven - own border */}
          <div className="flex items-start flex-col justify-center md:border-l border-[#E5E5E5] p-6 sm:p-8 md:p-10">
            <h3 className="font-cabinet font-bold text-2xl md:text-3xl text-[#1a1a1a] mb-2 leading-tight">
              Intelligence-Driven
            </h3>
            <p className="font-satoshi font-medium text-sm text-[#1a1a1a] mb-3">
              Data informs every decision we make.
            </p>
            <p className="text-[#818181] text-xs leading-relaxed mb-5 font-satoshi">
              User analytics, A/B testing, and performance metrics guide every hand-on-not approach. This
              eliminates guesswork, reduces risk, and ensures each iteration makes your product measurably
              better than before.
            </p>
            <a
              href="#"
              className="inline-block px-5 py-2 rounded-full bg-[#FF6730] text-white text-xs font-cabinet font-semibold hover:bg-[#e55a28] transition-all duration-300"
            >
              Make Enquiries
            </a>
          </div>
        </div>

        {/* ──── Row 4: Long-term Partnership (3-column with overflowing image) ──── */}
        <div
          className="relative grid grid-cols-1 md:grid-cols-[200px_1fr] items-center min-h-[280px] md:h-[380px] border-b border-[#E5E5E5]"
          style={animStyle(0.65)}
        >
          {/* Image cell - left (overflows on desktop, inline on mobile) */}
          <div className="flex items-center justify-center p-4 md:p-6 h-auto md:h-[380px] border-b md:border-b-0 md:border-r border-[#E5E5E5] overflow-hidden">
            <img
              src={fourth}
              alt="Long-term Partnership"
              className="w-[200px] sm:w-[250px] md:absolute md:w-[400px] md:left-[-220px] md:top-[-50px] h-auto object-contain"
            />
          </div>
          {/* Text cell - right (bordered on left only, creating the divider effect) */}
          <div className="flex items-start justify-center flex-col p-6 sm:p-8 md:p-10 md:border-l border-[#E5E5E5] min-h-[280px] md:h-[380px] md:mx-2">
            <h3 className="font-cabinet font-bold text-2xl md:text-3xl lg:text-[36px] text-[#1a1a1a] mb-2 leading-tight">
              Long-term Partnership
            </h3>
            <p className="font-satoshi font-medium text-sm text-[#1a1a1a] mb-3">
              Your success is our success metric.
            </p>
            <p className="text-[#818181] text-xs leading-relaxed mb-5 font-satoshi">
              We don't disappear after launch. As your business grows, we grow with you—adding features, optimizing
              performance, scaling infrastructure. Think of us as your embedded product team, invested in your long-term
              continued up.
            </p>
            <a
              href="#"
              className="inline-block px-5 py-2 rounded-full bg-[#FF6730] text-white text-xs font-cabinet font-semibold hover:bg-[#e55a28] transition-all duration-300"
            >
              Make Enquiries
            </a>
          </div>
        </div>

        {/* ──── Row 5: Global Standards, Personal Touch ──── */}
        <div
          className="relative grid grid-cols-1 md:grid-cols-[1fr_300px] items-center border-b border-[#E5E5E5] "
          style={animStyle(0.8)}
        >
          {/* Text cell - left */}
          <div className="flex items-start justify-center flex-col p-6 sm:p-8 md:p-10 min-h-[280px] md:h-[380px] border-r border-[#E5E5E5]">
            <h3 className="font-cabinet font-bold text-2xl md:text-3xl lg:text-[36px] text-[#1a1a1a] mb-2 leading-tight">
              Global Standards,
              <br />
              Personal Touch
            </h3>
            <p className="font-satoshi font-medium text-sm text-[#1a1a1a] mb-3">
              Enterprise-grade quality for every project.
            </p>
            <p className="text-[#818181] text-xs leading-relaxed mb-5 font-satoshi">
              Military-grade security, WCAG, gdpr-e, accessibility, compliance—whether you're a startup or Fortune 500. But unlike
              enterprise approaches, you know us by name and still building a fresh team for every project.
            </p>
            <a
              href="#"
              className="inline-block px-5 py-2 rounded-full bg-[#FF6730] text-white text-xs font-cabinet font-semibold hover:bg-[#e55a28] transition-all duration-300"
            >
              Make Enquiries
            </a>
          </div>
          {/* Image cell - right (cut on desktop, inline on mobile) */}
          <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 h-auto md:h-[380px] border-t md:border-t-0 border-l-0 md:border-l border-[#E5E5E5] md:ml-2 overflow-hidden">
            <img
              src={fifth}
              alt="Global Standards"
              className="w-[200px] sm:w-[250px] md:absolute md:w-[350px] md:right-[-170px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
