import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from '../assets/menu.svg';
import Logo from '../assets/poioteslogo.svg';
import KlokaLogo from '../assets/kloka-logo.png';
import CommandLogo from '../assets/command-logo.png';


export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [isLoginPanelOpen, setIsLoginPanelOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState<{ email: string; name: string; initials: string } | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const loginPanelRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem('poietes_user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) { }
    }
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setIsLoginPanelOpen(false);
    setIsProfileDropdownOpen(false);
  }, [location.pathname]);

  const handleMouseEnterDropdown = () => {
    if (window.innerWidth >= 768) {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeaveDropdown = () => {
    if (window.innerWidth >= 768) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 150);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
        (!mobileDropdownRef.current || !mobileDropdownRef.current.contains(event.target as Node))
      ) {
        setIsDropdownOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsLoginPanelOpen(false);
        setIsMobileMenuOpen(false);
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when panels are open
  useEffect(() => {
    if (isMobileMenuOpen || isLoginPanelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen, isLoginPanelOpen]);

  // Product categories data
  const productCategories: Record<string, { title: string; description: string; items: { name: string; description: string; icon: React.ReactNode; link: string }[] }> = {
    Featured: {
      title: 'Featured Apps',
      description: 'Our softwares providing critical support for operations.',
      items: [
        {
          name: 'Kloka',
          description: 'Attendance Monitoring',
          icon: (
            <div className="w-10 h-10 rounded-[10px] overflow-hidden flex-shrink-0 shadow-sm border border-gray-100/50">
              <img src={KlokaLogo} alt="Kloka" className="w-full h-full object-cover" />
            </div>
          ),
          link: '/products/kloka',
        },
      ],
    },
    Estate: {
      title: 'Estate Management',
      description: 'Property and estate management solutions.',
      items: [
        // {
        //   name: 'EstateFlow',
        //   description: 'Property Management System',
        //   icon: (
        //     <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center flex-shrink-0">
        //       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6730" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        //         <polyline points="9 22 9 12 15 12 15 22"></polyline>
        //       </svg>
        //     </div>
        //   ),
        //   link: '/products/estateflow',
        // },
      ],
    },
    Mailing: {
      title: 'Mailing Solutions',
      description: 'Communication and outreach tools.',
      items: [
        // {
        //   name: 'MailCraft',
        //   description: 'Email Campaign Manager',
        //   icon: (
        //     <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center flex-shrink-0">
        //       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6730" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        //         <polyline points="22,6 12,13 2,6"></polyline>
        //       </svg>
        //     </div>
        //   ),
        //   link: '/products/mailcraft',
        // },
      ],
    },
    Procurement: {
      title: 'Procurement Solutions',
      description: 'Streamline your purchasing and supply chain.',
      items: [
        // {
        //   name: 'ProcureHub',
        //   description: 'Procurement Automation',
        //   icon: (
        //     <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center flex-shrink-0">
        //       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6730" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
        //         <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        //         <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        //         <line x1="12" y1="22.08" x2="12" y2="12"></line>
        //       </svg>
        //     </div>
        //   ),
        //   link: '/products/procurehub',
        // },
      ],
    },
  };

  const navLinks = [
    { label: 'Products', to: '/#services', hasDropdown: true },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/#contact' },
  ];

  const profileNavTabs = [
    { label: 'Profile & Visibility', active: true },
    { label: 'Email', active: false },
    { label: 'Privacy & Data', active: false },
    { label: 'Security', active: false },
    { label: 'Account Preferences', active: false },
    { label: 'Support', active: false },
    { label: 'Legal', active: false, hasDropdown: true },
  ];

  const currentCategory = productCategories[activeCategory];
  const isProfilePage = location.pathname === '/profile';

  return (
    <>
      <nav
        className={`sticky top-0 z-[10010] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'bg-white/95 shadow-sm' : 'bg-transparent'
          }`}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[20px] md:py-[30px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileMenuOpen ? 'hidden md:block' : ''}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-8">
              {/* Logo */}
              <Link
                to="/"
                className={`flex items-center gap-2 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto' : 'opacity-100'}`}
                style={{
                  transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-20px) scale(0.9)',
                  transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <div className="w-20 md:w-25 transition-transform duration-300 ease-out hover:scale-105">
                  <img src={Logo} alt="Poietes" />
                </div>
              </Link>

              {/* Divider */}
              <div
                className='hidden md:block w-[2px] h-[11.88px] bg-primary origin-center transition-opacity duration-300'
                style={{
                  opacity: isVisible && !isMobileMenuOpen ? 1 : 0,
                  transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
                  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
                }}
              />

              {/* Desktop Navigation Links */}
              {!isProfilePage && (
                <div className={`hidden md:flex items-center gap-8 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
                  }`}>
                  {navLinks.map((link, index) => (
                    <div 
                      key={link.label} 
                      className="relative" 
                      ref={link.hasDropdown ? dropdownRef : null}
                      onMouseEnter={link.hasDropdown ? handleMouseEnterDropdown : undefined}
                      onMouseLeave={link.hasDropdown ? handleMouseLeaveDropdown : undefined}
                    >
                      {link.hasDropdown ? (
                        <button
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="text-black font-normal text-sm font-cabinet relative flex items-center gap-1.5 group"
                          style={{
                            opacity: isVisible && !isMobileMenuOpen ? 1 : 0,
                            transform: isVisible && !isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                            transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + index * 0.1}s`,
                          }}
                          aria-expanded={isDropdownOpen}
                          aria-haspopup="true"
                        >
                          <span className={`relative z-10 transition-colors duration-300 ease-out group-hover:text-[#ff6730] ${isDropdownOpen ? 'text-[#ff6730]' : ''}`}>
                            {link.label}
                          </span>
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                      ) : (
                        <Link
                          to={link.to}
                          className="text-black font-normal text-sm font-cabinet relative group flex items-center"
                          style={{
                            opacity: isVisible && !isMobileMenuOpen ? 1 : 0,
                            transform: isVisible && !isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                            transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + index * 0.1}s`,
                          }}
                        >
                          <span className={`relative z-10 transition-colors duration-300 ease-out group-hover:text-[#ff6730] ${location.pathname === link.to ? 'text-[#ff6730]' : ''
                            }`}>
                            {link.label}
                          </span>
                          <span className={`absolute bottom-0 left-0 h-0.5 bg-[#ff6730] transition-all duration-300 ease-out group-hover:w-full ${location.pathname === link.to ? 'w-full' : 'w-0'
                            }`} />
                        </Link>
                      )}

                      {/* ══════ Mega-Menu Dropdown ══════ */}
                      {link.hasDropdown && (
                        <div
                          className={`absolute top-full left-0 mt-4 bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top-left ${isDropdownOpen
                            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                            }`}
                          style={{ width: '560px' }}
                        >
                          <div className="flex h-[320px] m-5">
                            {/* Left sidebar — Categories */}
                            <div className="w-[150px] rounded-lg bg-[#fafafa] p-4 flex flex-col gap-1">
                              {Object.keys(productCategories).map((category) => (
                                <button
                                  key={category}
                                  onClick={() => setActiveCategory(category)}
                                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-cabinet transition-all duration-200 ${activeCategory === category
                                    ? 'text-[#ff6730] bg-white shadow-sm font-semibold'
                                    : 'text-[#666] hover:text-[#1a1a1a] font-medium'
                                    }`}
                                >
                                  {category}
                                </button>
                              ))}
                            </div>

                            {/* Right content — Category items */}
                            <div className="flex-1 p-6 bg-white">
                              <div className="flex items-start justify-between mb-6">
                                <div>
                                  <h3 className="font-cabinet font-semibold text-[#1a1a1a] text-sm">
                                    {currentCategory.title}
                                  </h3>
                                  <p className="text-[#818181] text-xs mt-1 font-cabinet max-w-[200px] leading-relaxed">
                                    {currentCategory.description}
                                  </p>
                                </div>
                                <Link
                                  to="/products"
                                  className="text-[#ff6730] text-xs font-cabinet font-medium hover:underline flex items-center gap-1 whitespace-nowrap"
                                  onClick={() => setIsDropdownOpen(false)}
                                >
                                  See all
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7M7 7h10v10" />
                                  </svg>
                                </Link>
                              </div>

                              {/* Product items */}
                              <div className="flex flex-col gap-3">
                                {currentCategory.items.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.link}
                                    className="flex items-center gap-4 rounded-xl hover:bg-gray-50/50 p-2 -ml-2 transition-all duration-200 group/item"
                                    onClick={() => setIsDropdownOpen(false)}
                                  >
                                    {item.icon}
                                    <div>
                                      <p className="font-cabinet font-semibold text-sm text-[#1a1a1a]">
                                        {item.name}
                                      </p>
                                      <p className="text-[#818181] text-[11px] mt-0.5 font-cabinet">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Profile Navigation Tabs (Desktop only) */}
              {isProfilePage && (
                <div className="hidden md:flex items-center gap-6 overflow-x-auto no-scrollbar ml-4">
                  {profileNavTabs.map((tab, idx) => (
                    <button
                      key={idx}
                      className={`relative flex items-center gap-1 text-[13px] font-medium whitespace-nowrap transition-colors py-1 ${tab.active ? 'text-[#FF6730]' : 'text-[#666] hover:text-[#1a1a1a]'
                        }`}
                    >
                      {tab.label}
                      {tab.hasDropdown && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      )}
                      {tab.active && (
                        <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#FF6730] rounded-t-full" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right side — Login icon + Hamburger */}
            <div className="flex items-center gap-3">
              {/* User/Login icon (desktop) */}
              {user ? (
                <div className="hidden md:flex relative" ref={profileDropdownRef}>
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-full hover:bg-gray-50 transition-colors"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s',
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#fdc60a] flex items-center justify-center text-[#1a1a1a] font-cabinet font-semibold text-sm">
                      {user.initials}
                    </div>
                    <span className="font-cabinet font-medium text-sm text-[#1a1a1a] mr-1">{user.name}</span>
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileDropdownOpen && (
                    <div className="absolute top-full right-0 mt-3 w-[500px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden origin-top-right animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex">
                        {/* Left Col */}
                        <div className="w-1/2 p-5 border-r border-gray-100">
                          <p className="font-cabinet font-bold text-[#1a1a1a] text-sm mb-5 truncate">{user.email}</p>
                          <div className="flex flex-col gap-2">
                            <Link to="/profile" className="text-sm font-cabinet text-[#1a1a1a] hover:text-[#FF6730] transition-colors py-1">Profile</Link>
                            <Link to="#" className="text-sm font-cabinet text-[#1a1a1a] hover:text-[#FF6730] transition-colors py-1">Products</Link>
                            <button
                              onClick={() => {
                                localStorage.removeItem('poietes_user');
                                window.location.href = '/';
                              }}
                              className="text-sm font-cabinet text-[#1a1a1a] hover:text-[#FF6730] text-left transition-colors py-1 mt-1"
                            >
                              Sign Out
                            </button>
                          </div>
                        </div>
                        {/* Right Col */}
                        <div className="w-2/3 p-5">
                          <p className="font-cabinet font-semibold text-xs text-[#1a1a1a] mb-4">Featured Products</p>
                          <div className="flex flex-col gap-3">
                            <Link to="/products/kloka" className="flex items-center gap-3 group">
                              <div className="w-10 h-10 rounded-[10px] overflow-hidden shadow-sm border border-gray-100/50 group-hover:scale-105 transition-transform">
                                <img src={KlokaLogo} alt="Kloka" className="w-full h-full object-cover" />
                              </div>
                              <span className="font-cabinet font-medium text-sm text-[#1a1a1a] group-hover:text-[#FF6730] transition-colors">Kloka</span>
                            </Link>
                            <Link to="/products/command" className="flex items-center gap-3 group">
                              <div className="w-10 h-10 rounded-[10px] overflow-hidden shadow-sm border border-gray-100/50 group-hover:scale-105 transition-transform">
                                <img src={CommandLogo} alt="Command" className="w-full h-full object-cover" />
                              </div>
                              <span className="font-cabinet font-medium text-sm text-[#1a1a1a] group-hover:text-[#FF6730] transition-colors">Command</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  className="hidden md:flex relative group items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-all duration-200"
                  onClick={() => setIsLoginPanelOpen(!isLoginPanelOpen)}
                  aria-label="Account"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a1a1a]">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </button>
              )}

              {/* Hamburger Button (mobile & tablet) */}
              {!isProfilePage && (
                <button
                  className="md:hidden relative group"
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
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ══════ Mobile Menu Overlay ══════ */}
      <div
        className={`fixed inset-0 z-[10009] transition-all duration-500 md:hidden ${isMobileMenuOpen
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
          className={`absolute top-0 right-0 w-full sm:w-[340px] h-full bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Header & Close button */}
          <div className="flex justify-between items-center p-4">
            <div className="w-20"><img src={Logo} alt="Poietes" /></div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col px-6 pt-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 80px)' }}>
            {/* Products accordion */}
            <div
              ref={mobileDropdownRef}
              className="border-b border-gray-100"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(30px)',
                transition: 'all 0.5s ease-out 0.1s',
              }}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between py-4 text-lg font-cabinet font-medium text-[#1a1a1a]"
              >
                Products
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Mobile accordion content */}
              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                  maxHeight: isDropdownOpen ? '400px' : '0',
                  opacity: isDropdownOpen ? 1 : 0,
                }}
              >
                <div className="pb-4 flex flex-col gap-1">
                  {Object.entries(productCategories).map(([key, category]) => (
                    <div key={key}>
                      <p className="text-xs font-cabinet font-semibold text-[#ff6730] uppercase tracking-wider px-2 py-2 mt-2">
                        {key}
                      </p>
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.link}
                          className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}
                        >
                          <span className="text-base">{item.icon}</span>
                          <div>
                            <p className="font-cabinet font-medium text-sm text-[#1a1a1a]">{item.name}</p>
                            <p className="text-[#818181] text-xs">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other nav links */}
            {navLinks.filter(l => !l.hasDropdown).map((link, index) => (
              <Link
                key={link.label}
                to={link.to}
                className={`py-4 border-b border-gray-100 text-lg font-cabinet font-medium transition-all duration-300 ${location.pathname === link.to
                  ? 'text-[#FF6730]'
                  : 'text-[#1a1a1a] hover:text-[#FF6730]'
                  }`}
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(30px)',
                  transition: `all 0.5s ease-out ${0.15 + index * 0.08}s`,
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile auth buttons */}
            {!user && (
              <div
                className="mt-8 flex flex-col gap-3"
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-out 0.35s',
                }}
              >
                <Link
                  to="/signin"
                  className="inline-block w-full text-center px-8 py-3 rounded-full bg-[#fdc60a] text-white text-sm font-cabinet font-semibold
                             hover:bg-[#e5b309] transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="inline-block w-full text-center px-8 py-3 rounded-full border-2 border-[#FF6730] text-[#FF6730] text-sm font-cabinet font-semibold
                             hover:bg-[#FF6730] hover:text-white transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Create an Account
                </Link>
              </div>
            )}

            {user && (
              <div className="mt-8 border-t border-gray-100 pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#fdc60a] flex items-center justify-center text-[#1a1a1a] font-cabinet font-semibold text-lg">
                    {user.initials}
                  </div>
                  <div>
                    <p className="font-cabinet font-bold text-[#1a1a1a] text-base">{user.name}</p>
                    <p className="font-cabinet text-sm text-[#818181] truncate">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem('poietes_user');
                    window.location.href = '/';
                  }}
                  className="w-full text-center px-8 py-3 rounded-full border border-gray-200 text-[#1a1a1a] text-sm font-cabinet font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ══════ Login Aside Panel (Desktop) ══════ */}
      <div
        className={`fixed inset-0 z-[10011] transition-all duration-500 ${isLoginPanelOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsLoginPanelOpen(false)}
        />

        {/* Panel */}
        <div
          ref={loginPanelRef}
          className={`absolute top-0 right-0 w-full sm:w-[380px] h-full bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isLoginPanelOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Close button */}
          <div className="flex justify-end p-5">
            <button
              onClick={() => setIsLoginPanelOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-[#666] hover:text-[#1a1a1a]"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Panel content */}
          <div className="px-8 pt-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img src={Logo} alt="Poietes" className="w-28" />
            </div>

            <h2 className="font-cabinet font-semibold text-[15px] text-[#1a1a1a] mb-2">
              Get Started With Poietes
            </h2>
            <p className="text-[#818181] text-[11px] font-cabinet mb-6 leading-[1.6]">
              Create your free account and get instant access to all Poietes products.
            </p>

            {/* Auth buttons */}
            <div className="flex gap-2.5">
              <Link
                to="/signin"
                className="flex-1 text-center px-4 py-2.5 rounded-full bg-[#fdc60a] text-white text-[12px] font-cabinet font-medium
                           hover:bg-[#e5b309] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                onClick={() => setIsLoginPanelOpen(false)}
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="flex-1 text-center px-4 py-2.5 rounded-full bg-[#FF6730] text-white text-[12px] font-cabinet font-medium
                           hover:bg-[#e55a28] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                onClick={() => setIsLoginPanelOpen(false)}
              >
                Create an Account
              </Link>
            </div>
          </div>

          {/* Bottom — Privacy links */}
          <div className="absolute bottom-6 left-0 right-0 px-8 flex items-center justify-center">
            <div className="flex items-center gap-3 text-[10px] text-[#818181] font-cabinet">
              <Link to="/privacy" className="hover:text-[#1a1a1a] transition-colors">Privacy Policy</Link>
              <span className="opacity-50">|</span>
              <Link to="/terms" className="hover:text-[#1a1a1a] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}