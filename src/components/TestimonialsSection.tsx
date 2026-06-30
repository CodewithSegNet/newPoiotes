import { useState, useEffect, useRef } from 'react';
import background from "../assets/Testimonials.avif"

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Credit officer of Tech Innovations LLC',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    },
    {
      name: 'James Okonkwo',
      role: 'CTO of FinEdge Solutions',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    },
    {
      name: 'Amara Chen',
      role: 'Product Lead at NovaBridge',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    },
  ];

  const current = testimonials[activeIndex];

  const goToPrev = () => {
    setIsPlaying(false);
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsPlaying(false);
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Reset play state when video ends
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const handleEnded = () => setIsPlaying(false);
    vid.addEventListener('ended', handleEnded);
    return () => vid.removeEventListener('ended', handleEnded);
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 md:px-10 lg:px-20 overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay to ensure readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header row — title left, arrows right */}
        <div className="flex items-start justify-between mb-10">
          <h2
            className="font-cabinet font-bold text-2xl md:text-3xl lg:text-[40px] text-white leading-tight"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            What our Clients
            <br />
            have to say
          </h2>

          {/* Navigation arrows */}
          <div
            className="flex gap-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out 0.2s',
            }}
          >
            <button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#FF6730] hover:text-[#FF6730] transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#FF6730] hover:text-[#FF6730] transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Video Card */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.2s',
          }}
        >
          {/* Orange quotation marks — overlapping top of video */}
          {/* <div className="absolute top-4 left-6 z-20">
            <span className="text-[#FF6730] text-6xl md:text-7xl font-bold leading-none select-none" style={{ fontFamily: 'Georgia, serif' }}>
              &#x201C;&#x201C;
            </span>
          </div> */}

          {/* Video area */}
          <div className="relative w-full aspect-video md:aspect-[18/8] rounded-t-2xl overflow-hidden">
            <video
              ref={videoRef}
              key={current.video}
              src={current.video}
              className="w-full h-full object-cover"
              playsInline
              preload="metadata"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

            {/* Play/Pause button */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center z-10 group"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-black/70 group-hover:scale-110 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                {isPlaying ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <polygon points="8,5 20,12 8,19" />
                  </svg>
                )}
              </div>
            </button>
          </div>

          {/* Client info bar below video */}
          <div className="backdrop-blur-sm px-6 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#FF6730]/30 flex-shrink-0">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-white font-cabinet font-semibold text-sm">{current.name}</p>
              <p className="text-white/50 text-xs font-cabinet">{current.role}</p>
            </div>
          </div>

          {/* Bottom accent progress bars */}
          <div className="flex h-[3px]">
            <div
              className="h-full bg-[#FF6730] transition-all duration-500"
              style={{ width: `${((activeIndex + 1) / testimonials.length) * 30}%` }}
            />
            <div className="h-full flex-1 bg-transparent" />
            <div
              className="h-full bg-[#FF6730]/40 transition-all duration-500"
              style={{ width: `${((testimonials.length - activeIndex) / testimonials.length) * 20}%` }}
            />
          </div>
        </div>

        {/* Decorative bottom elements */}
        <div className="flex justify-between items-end mt-6">
          {/* Left decorative corner */}
          <div className="flex items-end gap-1">
            <div className="w-[3px] h-8 bg-[#FF6730]/60 rounded-full" />
            <div className="w-20 h-6 border border-white/10 rounded-sm" />
          </div>
          {/* Right decorative line */}
          <div className="w-24 h-[2px] bg-[#FF6730]/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
