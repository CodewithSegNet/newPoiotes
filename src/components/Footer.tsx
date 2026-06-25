import Logo from '../assets/logowhite.png';

export function Footer() {
  return (
    <footer
      className="w-full font-cabinet"
      style={{ background: 'linear-gradient(180deg, #65240D 0%, #000000 100%)' }}
    >
      {/* ─── Main Footer Content ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-8">
        {/* Top Row: Logo/Description + Link Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
          {/* Logo & Description */}
          <div className="flex flex-col gap-5">
            <img src={Logo} alt="Poietes" className="w-40" />
            <p className="text-white/60 text-xs leading-relaxed max-w-[260px]">
              Poietes is a software development and growth engineering company.
              We build our own products and help businesses grow through
              web applications, mobile apps, data-driven strategy, conversion
              optimization, and digital experiences that drive measurable results.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Solutions */}
            <div>
              <h4 className="text-[#FF6730] font-semibold text-sm uppercase tracking-wider mb-4">
                Solutions
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  'Digital Marketing & SEO',
                  'Product Engineering',
                  'Conversion Design',
                  'Analytics & Intelligence',
                  'SEO & Customer Acquisition',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[#FF6730] font-semibold text-sm uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  'About Poietes',
                  'Careers',
                  'Contact Us',
                  'Blogs & News',
                  'Press Kit',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-[#FF6730] font-semibold text-sm uppercase tracking-wider mb-4">
                Products
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  'Web Applications',
                  'Mobile Apps',
                  'APIs & Integrations',
                  'Automation Systems',
                  'Cloud Infrastructure',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[#FF6730] font-semibold text-sm uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  'Case Studies',
                  'Development Framework',
                  'Blog',
                  'Documentation',
                  'API Reference',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ─── Middle Row: Address / Connect / Language ─── */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
          {/* Address & Contact */}
          <div className="flex flex-col gap-2">
            <p className="text-white/60 text-xs leading-relaxed">
              Address: No 1, Adress Park, somehwere in the states, Lagos Nigeria
            </p>
            <a
              href="mailto:support@poietes.co"
              className="text-white/60 text-xs hover:text-white transition-colors"
            >
              support@poietes.co
            </a>
            <a
              href="tel:+2341234567890"
              className="text-white/60 text-xs hover:text-white transition-colors"
            >
              +234 123 456 7890
            </a>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Connect with us
            </h4>
            <div className="flex items-center gap-4">
              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="text-[#FF6730] hover:text-white transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#FF6730] hover:text-white transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[#FF6730] hover:text-white transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Language */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Language
            </h4>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Nigeria</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        {/* ─── Support Row ─── */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:col-span-2">
              {/* Verified & Secure */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border border-[#FF6730] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF6730"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-white/60 text-xs">
                  Verified &amp; Secure Platform
                </span>
              </div>

              {/* Rated */}
              <div className="flex items-center gap-2">
                <span className="text-[#FF6730] text-sm">★</span>
                <span className="text-white/60 text-xs">Rated 4.9/5</span>
              </div>

              {/* Licensed */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border border-[#FF6730] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF6730"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-white/60 text-xs">Licensed Agency</span>
              </div>

              {/* Made In Nigeria */}
              <div className="flex items-center gap-2">
                <span className="text-sm">🇳🇬</span>
                <span className="text-white/60 text-xs">Made In Nigeria</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-white/40 text-xs text-left md:text-right">
              © 2026 Poietes. All rights reserved.
            </div>
          </div>

          {/* Support Links */}
          <div className="mt-6 flex flex-wrap gap-4">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
              Support
            </h4>
            {['Help Center', 'FAQ', 'Privacy Policy', 'Terms of Service', 'Security'].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/50 text-xs hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        {/* ─── Bottom Description ─── */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-white/30 text-[10px] leading-relaxed">
            Poietes is a global software development company and technology partner.
            We provide full-cycle digital product engineering and growth services
            including web application development, mobile app development (iOS & Android),
            DevOps consulting, technical SEO optimization, and audience acquisition.
            All services are delivered with industry-standard security
            compliance, comprehensive documentation, and ongoing
            maintenance support.
          </p>
        </div>
      </div>
    </footer>
  );
}
