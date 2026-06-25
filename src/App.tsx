import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { CookieBanner } from './components/CookieBanner';
import { CTAFooter } from './components/CTAFooter';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import CompleteProfilePage from './pages/CompleteProfilePage';
import UserProfilePage from './pages/UserProfilePage';
import "./index.css";

function Layout() {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  return (
    <div className="relative min-h-screen bg-white">
      <CookieBanner />
      <Navigation />
      <Outlet />
      {!isProfilePage && <CTAFooter />}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Main layout with nav/footer */}
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="profile" element={<UserProfilePage />} />
      </Route>

      {/* Auth pages — no nav/footer, clean layout */}
      <Route path="signup" element={<SignUpPage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="verify-email" element={<VerifyEmailPage />} />
      <Route path="complete-profile" element={<CompleteProfilePage />} />
    </Routes>
  );
}