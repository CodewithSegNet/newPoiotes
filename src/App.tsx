import { Routes, Route, Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { CookieBanner } from './components/CookieBanner';
import { CTAFooter } from './components/CTAFooter';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import "./index.css";

function Layout() {
  return (
    <div className="relative min-h-screen bg-white">
      <CookieBanner />
      <Navigation />
      <Outlet />
      <CTAFooter />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}