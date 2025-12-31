import svgPaths from '../imports/svg-0mwn22yd52';
import { useState, useEffect } from 'react';
import Menu from '../assets/menu.svg';
import Logo from '../assets/poioteslogo.svg';


export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-[10010] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled ? 'bg-white/95 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-[30px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">

        <div className="flex items-center justify-between">
  

           <div className="flex items-center gap-8">
                  {/* Logo - Slide in from left with fade */}
          <div 
            className="flex items-center gap-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-20px) scale(0.9)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <div className="w-25 transition-transform duration-300 ease-out hover:scale-105">
       <img src={Logo} alt="" />
            </div>
            {/* <span className="text-[#282323]">Poietes</span> */}

          </div>
 
        {/* Divider - Grow from center */}
<div 
  className='hidden md:block w-[2px] h-[11.88px] bg-primary origin-center'
  style={{
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
  }}
>

</div>

       {/* Navigation Links - Staggered fade in from top */}
          <div className="hidden md:flex items-center gap-8">
            
            <a 
              href="#services" 
              className="text-black font-normal text-sm !font-cabinet relative group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
              }}
            >
              <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-[#ff6730]">
                Products
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff6730] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
            <a 
              href="#about" 
              className="text-black font-normal text-sm !font-cabinet relative group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s',
              }}
            >
              <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-[#ff6730]">
                About
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff6730] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
            <a 
              href="#portfolio" 
              className="text-black font-normal text-sm !font-cabinet relative group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s',
              }}
            >
              <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-[#ff6730]">
                Contact
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff6730] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          </div>

        </div>

          {/* CTA Button - Slide in from right with rotation */}
          <button 
            className="relative group"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0) rotate(0)' : 'translateX(20px) rotate(45deg)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s',
            }}
          >
            <div className="absolute inset-0 bg-[#ff6730] rounded-full scale-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-150 group-hover:opacity-10" />
            <img 
              src={Menu} 
              alt="" 
              className="relative z-10 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:rotate-90 group-hover:scale-110" 
            />
          </button>
        </div>
      </div>
    </nav>
  );
}