import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/poioteslogo.svg';
import Mascot from '../assets/mascot.avif';
import { GeometricArt } from '../components/GeometricArt';

export default function CompleteProfilePage() {
  const [email, setEmail] = useState('user@example.com');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('poietes_signup_email');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  return (
    <div className="min-h-screen flex bg-white relative overflow-hidden">
      <GeometricArt />
      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-[440px]">
          {/* Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                <img src={Logo} alt="Poietes" className="w-32" />
              </Link>
            </div>

            {/* Heading */}
            <div className="text-center mb-8">
              <h1 className="font-cabinet font-bold text-xl text-[#1a1a1a] mb-1 flex items-center justify-center gap-2">
                Email address verified
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              </h1>
              <p className="text-[#818181] text-sm font-cabinet">
                Complete your Poietes account setup
              </p>
            </div>

            {/* Form */}
            <form onSubmit={(e) => {
              e.preventDefault();
              const name = fullName || email.split('@')[0];
              const initials = name.charAt(0).toUpperCase();
              localStorage.setItem('poietes_user', JSON.stringify({ email, name, initials }));
              window.location.href = '/';
            }}>
              {/* Email (read-only) */}
              <div className="mb-5">
                <label htmlFor="profile-email" className="block text-sm font-cabinet font-medium text-[#1a1a1a] mb-2">
                  Email Address
                </label>
                <p id="profile-email" className="text-sm font-cabinet text-[#1a1a1a] px-1">
                  {email}
                </p>
              </div>

              {/* Full Name */}
              <div className="mb-5">
                <label htmlFor="profile-name" className="block text-sm font-cabinet font-medium text-[#1a1a1a] mb-2">
                  Full Name
                </label>
                <input
                  id="profile-name"
                  type="text"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#fafafa] text-sm font-cabinet text-[#1a1a1a] placeholder:text-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#FF6730]/20 focus:border-[#FF6730] transition-all duration-200"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-2">
                <label htmlFor="profile-password" className="block text-sm font-cabinet font-medium text-[#1a1a1a] mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="profile-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-[#fafafa] text-sm font-cabinet text-[#1a1a1a] placeholder:text-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#FF6730]/20 focus:border-[#FF6730] transition-all duration-200"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b0b0b0] hover:text-[#666] transition-colors p-1"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <p className="text-[#b0b0b0] text-xs font-cabinet mb-6">
                Password must be at least 8 characters
              </p>

              {/* Terms */}
              <p className="text-[#818181] text-xs font-cabinet mb-6 leading-relaxed">
                By creating a Poietes account, I agree to the{' '}
                <Link to="/terms" className="text-[#FF6730] hover:underline">Terms of Service</Link>
                {' '}and confirm I have read the{' '}
                <Link to="/privacy" className="text-[#FF6730] hover:underline">Privacy Policy</Link>.
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#FF6730] text-white text-sm font-cabinet font-semibold hover:bg-[#e55a28] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6730]/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mascot — massive but mostly hidden off-screen */}
      <div className="hidden lg:block absolute -bottom-10 -right-20 xl:-bottom-[-105px] xl:-right-[-100px] z-[5] pointer-events-none translate-x-[45%] translate-y-[55%]">
        <img
          src={Mascot}
          alt="Poietes Mascot"
          className="w-[600px] xl:w-[700px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] opacity-95"
        />
      </div>
    </div>
  );
}
