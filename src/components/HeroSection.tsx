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
      className="relative min-h-screen flex  items-center justify-center px-8 pb-20 bg-gradient-to-br from-white via-[#fff8f0] to-white overflow-hidden"
    >
      {/* Pixel Grid - only in hero section, lower z-index */}
      <div className="absolute inset-0 z-[9997]">
        <PixelTracker />
      </div>
      
      {/* Content - higher z-index */}
      <div className="relative z-[10000] py-6 mt-14 w-full max-w-4xl flex flex-col gap-[19.109px] items-center">
        {/* Badge - Slide down with bounce */}
        <div 
          className="bg-[rgba(253,198,10,0.02)] flex flex-col items-start overflow-clip px-[5.35px] py-[6.879px] rounded-[26.752px] group cursor-pointer"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-30px) scale(0.9)',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
          }}
        >
          <div className="flex gap-[7.644px] items-center">
            <div className="flex gap-[9.172px] items-center">
              <div 
                className="bg-[rgba(253,198,10,0.1)] flex flex-col items-center justify-center px-[6.115px] py-[4.586px] rounded-[76.435px] transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-[rgba(253,198,10,0.15)]"
                style={{
                  animation: isVisible ? 'pulse-glow 2s ease-in-out infinite' : 'none',
                }}
              >
                <p 
                  className="font-cabinet leading-[normal] not-italic text-[#fdc60a] text-[13.172px] text-center text-nowrap transition-transform duration-300 ease-out"
                  style={{
                    animation: isVisible ? 'bounce-subtle 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s' : 'none',
                  }}
                >
                  🎉 New
                </p>
              </div>
              <p className="font-cabinet leading-[normal] not-italic text-[#fdc60a] text-[12.172px] text-center text-nowrap transition-all duration-300 ease-out">
                Poietes is here with the best properties listings 🔥
              </p>
            </div>
            <div 
              className="size-[12.172px] transition-transform duration-500 ease-out group-hover:translate-x-2"
              style={{
                animation: isVisible ? 'beat 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
              }}
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1722 9.1722">
                <g>
                  <path d={svgPaths.p374c1a80} fill="var(--fill-0, #FDC60A)" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Heading - Fade in with scale and blur */}
        <h1 
          className="font-cabinet leading-[56.505px] not-italic text-[#282323] text-[55.918px] text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
            filter: isVisible ? 'blur(0px)' : 'blur(10px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
          }}
        >
          <span 
            className="text-[#ff6730] inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s',
            }}
          >
            Building Softwares
          </span>
          <span 
            className="inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s',
            }}
          >
            {` for Businesses That Thinks Ahead of Your Competition `}
          </span>
        </h1>

        {/* Description - Fade in from bottom */}
        <p 
          className="font-['Cabinet_Grotesk:Regular',sans-serif] leading-[normal] not-italic text-[#818181] text-[12.23px] max-w-[477.447px] text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
          }}
        >
          Premium software solutions meticulously crafted for visionary businesses that demand excellence in every pixel, every interaction, every outcome.
        </p>

        {/* Buttons - Slide in from sides */}
        <div className="flex gap-[7.644px] items-center">
          <button 
            className="flex items-center justify-center px-[27.931px] py-[16.465px] rounded-[76.435px] bg-[#fdc60a] relative overflow-hidden group"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-30px) scale(0.9)',
              transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1s',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#fdd040] to-[#fdc60a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <p className="relative z-10 font-['Cabinet_Grotesk:Regular',sans-serif] leading-[normal] not-italic text-[10.701px] text-nowrap text-white transition-transform duration-300 ease-out group-hover:scale-105">
              See all Services
            </p>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 shadow-lg shadow-[#fdc60a]/30 rounded-[76.435px]" />
            </div>
          </button>
          <button 
            className="flex items-center justify-center px-[27.931px] py-[16.465px] rounded-[76.435px] bg-[#ff6730] relative overflow-hidden group"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(30px) scale(0.9)',
              transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1.1s',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7845] to-[#ff6730] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <p className="relative z-10 font-['Cabinet_Grotesk:Regular',sans-serif] leading-[normal] not-italic text-[10.701px] text-nowrap text-white transition-transform duration-300 ease-out group-hover:scale-105">
              Make Enquiries
            </p>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 shadow-lg shadow-[#ff6730]/30 rounded-[76.435px]" />
            </div>
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
      `}</style>
    </section>
  );
}