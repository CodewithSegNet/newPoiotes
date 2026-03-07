import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from '../assets/menu.svg';
import Logo from '../assets/poioteslogo.svg';


export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Products', to: '/#services' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/#portfolio' },
  ];

  return (
    <>
      <nav 
        className={`sticky top-0 z-[10010] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled ? 'bg-white/95 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[20px] md:py-[30px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">

          <div className="flex items-center justify-between">
    

             <div className="flex items-center gap-4 md:gap-8">
                    {/* Logo - Slide in from left with fade */}
            <Link 
              to="/"
              className="flex items-center gap-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-20px) scale(0.9)',
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <div className="w-20 md:w-25 transition-transform duration-300 ease-out hover:scale-105">
         <img src={Logo} alt="Poietes" />
              </div>
            </Link>
 
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
              
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-black font-normal text-sm !font-cabinet relative group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                    transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + index * 0.1}s`,
                  }}
                >
                  <span className={`relative z-10 transition-colors duration-300 ease-out group-hover:text-[#ff6730] ${
                    location.pathname === link.to ? 'text-[#ff6730]' : ''
                  }`}>
                    {link.label}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#ff6730] transition-all duration-300 ease-out group-hover:w-full ${
                    location.pathname === link.to ? 'w-full' : 'w-0'
                  }`} />
                </Link>
              ))}
            </div>

          </div>

            {/* Hamburger Button */}
            <button 
              className="relative group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0) rotate(0)' : 'translateX(20px) rotate(45deg)',
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s',
              }}
            >
              <div className="absolute inset-0 bg-[#ff6730] rounded-full scale-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-150 group-hover:opacity-10" />
              {isMobileMenuOpen ? (
                <svg className="relative z-10 w-6 h-6 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <img 
                  src={Menu} 
                  alt="" 
                  className="relative z-10 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:rotate-90 group-hover:scale-110" 
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[10009] transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full sm:w-[340px] h-full bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col pt-24 px-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                to={link.to}
                className={`py-4 border-b border-gray-100 text-lg font-cabinet font-medium transition-all duration-300 ${
                  location.pathname === link.to
                    ? 'text-[#FF6730]'
                    : 'text-[#1a1a1a] hover:text-[#FF6730]'
                }`}
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(30px)',
                  transition: `all 0.5s ease-out ${0.1 + index * 0.08}s`,
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA in mobile menu */}
            <div
              className="mt-8"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease-out 0.4s',
              }}
            >
              <a
                href="#"
                className="inline-block w-full text-center px-8 py-3 rounded-full bg-[#FF6730] text-white text-sm font-cabinet font-semibold
                           hover:bg-[#e55a28] transition-all duration-300"
              >
                Make Enquiries
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}