import { Code2, Rocket, Zap, Shield, Clock, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect, useRef } from 'react';



export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-8 bg-[#282323] relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs with smooth movement */}
        <div 
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#ff6730] opacity-10 blur-[100px]"
          style={{
            transform: isVisible ? 'translate(0, 0) scale(1)' : 'translate(-100px, -100px) scale(0.5)',
            transition: 'all 2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#fdc60a] opacity-10 blur-[120px]"
          style={{
            transform: isVisible ? 'translate(0, 0) scale(1)' : 'translate(100px, 100px) scale(0.5)',
            transition: 'all 2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        />
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            opacity: isVisible ? 0.03 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Coming Soon Badge */}
        <div className="flex justify-center mb-8">
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff6730]/10 to-[#fdc60a]/10 border border-[#ff6730]/20 backdrop-blur-sm group cursor-pointer"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.9)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s',
            }}
          >
            <div className="relative">
              <Clock className="w-5 h-5 text-[#ff6730] transition-transform duration-500 ease-out group-hover:rotate-12" />
              <div className="absolute inset-0 animate-ping">
                <Clock className="w-5 h-5 text-[#ff6730] opacity-40" />
              </div>
            </div>
            <span className="text-white/80 text-sm font-cabinet tracking-wide uppercase transition-all duration-300 ease-out group-hover:tracking-wider group-hover:text-white">
              Coming Soon
            </span>
            <div className="absolute inset-0 rounded-full bg-[#ff6730]/5 scale-0 transition-transform duration-500 ease-out group-hover:scale-100" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6">
          <h2 
            className="font-cabinet text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              filter: isVisible ? 'blur(0px)' : 'blur(10px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            <span className="inline-block relative">
              Innovative Features
              {/* Animated underline */}
              <div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ff6730] to-[#fdc60a]"
                style={{
                  width: isVisible ? '100%' : '0%',
                  transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
                }}
              />
            </span>
          </h2>
          
          <p 
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-['Cabinet_Grotesk:Regular',sans-serif]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
            }}
          >
            We're crafting something extraordinary. Premium features designed to transform your business.
          </p>
        </div>

  

        {/* Notification Message */}
        <div 
          className="mt-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.4s',
          }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#282323] to-[#3a3434] border border-white/10 backdrop-blur-sm group cursor-pointer">
            <Sparkles className="w-5 h-5 text-[#fdc60a] animate-pulse transition-transform duration-500 ease-out group-hover:rotate-180 group-hover:scale-110" />
            <p className="text-white/70 font-['Cabinet_Grotesk:Regular',sans-serif] transition-all duration-300 ease-out group-hover:text-white/90">
              Get notified when we launch
            </p>
            <button className="ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff6730] to-[#fdc60a] text-white text-sm font-cabinet font-medium relative overflow-hidden group/btn transition-all duration-300 ease-out hover:shadow-lg hover:shadow-[#ff6730]/30">
              <span className="relative z-10 transition-transform duration-300 ease-out group-hover/btn:scale-105">Notify Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fdc60a] to-[#ff6730] translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out" />
            </button>
          </div>
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#ff6730] rounded-full opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-particle ${5 + i}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
            transform: translateY(-20px) translateX(10px) scale(1);
          }
          50% {
            transform: translateY(-100px) translateX(50px) scale(1.2);
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
            transform: translateY(-180px) translateX(90px) scale(0.8);
          }
          100% {
            transform: translateY(-200px) translateX(100px) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}