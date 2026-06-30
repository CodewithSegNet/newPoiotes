import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/poioteslogo.svg';
import Mascot from '../assets/mascot.avif';
import { GeometricArt } from '../components/GeometricArt';

export default function VerifyEmailPage() {
  const [email, setEmail] = useState('user@example.com');
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const savedEmail = localStorage.getItem('poietes_signup_email');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste
      const chars = value.slice(0, 6).split('');
      const newOtp = [...otp];
      chars.forEach((char, i) => {
        if (index + i < 6) newOtp[index + i] = char;
      });
      setOtp(newOtp);
      const nextIndex = Math.min(index + chars.length, 5);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

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
              We've emailed you a code
            </h1>
            <p className="text-[#818181] text-sm text-center mb-2 font-cabinet leading-relaxed">
              To complete your account setup, enter the code we've sent to:
            </p>
            <p className="text-[#1a1a1a] text-sm text-center mb-8 font-cabinet font-semibold">
              {email}
            </p>

            {/* OTP Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (otp.every(d => d)) window.location.href = '/complete-profile';
              }}
            >
              <div className="flex justify-center gap-2.5 sm:gap-3 mb-8">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value.replace(/[^0-9]/g, ''))}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-11 h-12 sm:w-12 sm:h-14 rounded-xl border border-gray-200 bg-[#fafafa] text-center text-lg font-cabinet font-semibold text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#FF6730]/20 focus:border-[#FF6730] transition-all duration-200"
                    aria-label={`Digit ${index + 1}`}
                  />
                ))}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#FF6730] text-white text-sm font-cabinet font-semibold hover:bg-[#e55a28] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6730]/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Verify
              </button>
            </form>

            {/* Resend */}
            <p className="text-center mt-6 text-sm font-cabinet text-[#818181]">
              Didn't receive an email?{' '}
              <button
                type="button"
                className="text-[#FF6730] font-medium hover:underline"
                onClick={() => { /* Resend logic */ }}
              >
                Resend email
              </button>
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
