import svgPaths from '../imports/svg-0mwn22yd52';
import { PixelTracker } from './PixelTracker';
import { useRef, useState, useEffect } from 'react';

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate md:min-h-[40vh] lg:min-h-[40vh] xl:min-h-[40vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-white via-[#fff8f0] to-white overflow-hidden"
    >
      {/* Pixel Grid - only in hero section, lower z-index, doesn't intercept clicks */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PixelTracker />
      </div>

      {/* Content - higher z-index, isolated stacking context guarantees it's on top */}
      <div className="relative z-10 py-6 mt-8 sm:mt-10 lg:mt-14 w-full max-w-4xl flex flex-col gap-3 sm:gap-[19.109px] items-center">
        <div
          className="bg-[rgba(253,198,10,0.02)] border border-[#fdc60a]/10 relative overflow-hidden px-3 py-[6px] rounded-full group cursor-pointer w-[280px] sm:w-[400px] md:w-[500px] pointer-events-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
            transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s',
          }}
        >
          <div
            className="flex w-max"
            style={{
              animation: isVisible ? 'marquee-rtl 30s linear infinite' : 'none',
            }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6 items-center px-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-2 py-[2px] rounded-md border border-[#fdc60a]/20 bg-[#fdc60a]/[0.03]">
                    <div className="size-1 rounded-sm bg-[#fdc60a]"></div>
                    <span className="text-[10px] font-mono tracking-widest text-[#fdc60a] font-semibold mt-[1px]">
                      2026
                    </span>
                  </div>

                  <span className="relative z-10 font-mono tracking-wider font-semibold text-[9px] sm:text-[10px] md:text-[12.172px] text-[#fdc60a] whitespace-nowrap">
                    Building Scalable Digital Products <span className="mx-2 text-[#fdc60a]/40">—</span> Now Accepting Partners
                  </span>
                </div>
                <div className="size-3 transition-transform duration-500 ease-out group-hover:translate-x-1 shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1722 9.1722">
                    <g>
                      <path d={svgPaths.p374c1a80} fill="#fdc60a" />
                    </g>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heading - Fade in with scale and blur */}
        <h1
          className="font-cabinet leading-tight sm:leading-[42px] lg:leading-[56.505px] not-italic text-[#282323] text-[28px] sm:text-[40px] lg:text-[55.918px] text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
            filter: isVisible ? 'blur(0px)' : 'blur(10px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
          }}
        >
          <span className="text-[#818181] font-semibold text-sm block mb-2">
            Software Development & Growth Engineering
          </span>
          <span
            className="text-[#ff6730] inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s',
            }}
          >
            Building Software
          </span>
          <span
            className="text-black font-normal opacity-90 block mt-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s',
            }}
          >
            {` That Drives Measurable Business Growth`}
          </span>
        </h1>

        {/* Description - Fade in from bottom */}
        <p
          className="font-['Cabinet_Grotesk:Regular',sans-serif] leading-[normal] not-italic text-[#818181] text-sm md:text-base max-w-full sm:max-w-[477.447px] text-center px-2 sm:px-0"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
          }}
        >
          We help businesses acquire customers, improve conversions, and scale operations through strategy, design, engineering, and data.
        </p>

        {/* Buttons - Slide in from sides, pointer-events-auto ensures clicks register above pixel grid */}
        <div className="flex sm:flex-row justify-center gap-3 sm:gap-[7.644px] items-center w-full sm:w-auto px-4 sm:px-0">
          <button
            className="flex items-center justify-center px-6 py-2.5 md:px-[27.931px] md:py-[16.465px] rounded-[76.435px] bg-[#fdc60a] relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-[#fdc60a]/30 active:scale-95 active:duration-150 pointer-events-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-30px) scale(0.9)',
              transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1s',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#fdd040] to-[#fdc60a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center gap-2 font-['Cabinet_Grotesk:Regular',sans-serif] leading-[normal] not-italic text-xs sm:text-sm md:text-base text-nowrap text-white">
              Discuss Your Project
            </span>
          </button>
          <button
            className="flex items-center justify-center px-6 py-2.5 md:px-[27.931px] md:py-[16.465px] rounded-[76.435px] bg-[#ff6730] relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-[#ff6730]/30 active:scale-95 active:duration-150 pointer-events-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(30px) scale(0.9)',
              transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1.1s',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7845] to-[#ff6730] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center gap-2 font-['Cabinet_Grotesk:Regular',sans-serif] leading-[normal] not-italic text-xs sm:text-sm md:text-base text-nowrap text-white">
              View Our Framework
            </span>
          </button>
        </div>
      </div>

      {/* CSS Keyframe Animations */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(253, 198, 10, 0.4);
          }
          50% {
            box-shadow: 0 0 20px 5px rgba(253, 198, 10, 0.2);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes beat {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }

        @keyframes rotate-smooth {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes marquee-rtl {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}