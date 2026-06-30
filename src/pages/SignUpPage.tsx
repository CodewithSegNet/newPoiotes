import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/poioteslogo.svg';
import Mascot from '../assets/mascot.avif';
import { GeometricArt } from '../components/GeometricArt';

export default function SignUpPage() {
  const [email, setEmail] = useState('');

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
            <h1 className="font-cabinet font-bold text-xl text-[#1a1a1a] text-center mb-2">
              Sign up to continue
            </h1>
            <p className="text-[#818181] text-sm text-center mb-8 font-cabinet leading-relaxed">
              Sign up once and get access to Kloka, and every product we build — now and in the future.
            </p>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) {
                  localStorage.setItem('poietes_signup_email', email);
                  window.location.href = '/verify-email';
                }
              }}
            >
              <div className="mb-4">
                <label htmlFor="signup-email" className="block text-sm font-cabinet font-medium text-[#1a1a1a] mb-2">
                  Email Address
                </label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#fafafa] text-sm font-cabinet text-[#1a1a1a] placeholder:text-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#FF6730]/20 focus:border-[#FF6730] transition-all duration-200"
                  required
                />
              </div>

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
                Continue
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-[#818181] text-xs font-cabinet">Or continue with:</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social buttons */}
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-gray-200 bg-white text-sm font-cabinet font-medium text-[#1a1a1a] hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-gray-200 bg-white text-sm font-cabinet font-medium text-[#1a1a1a] hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Apple
              </button>
            </div>

            {/* Sign in link */}
            <p className="text-center mt-6 text-sm font-cabinet text-[#818181]">
              Already have an account?{' '}
              <Link to="/signin" className="text-[#FF6730] font-medium hover:underline">Sign in</Link>
            </p>
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
