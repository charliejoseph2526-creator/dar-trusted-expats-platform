import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UserCircle, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Find Accommodation', path: '/accommodation' },
    { label: 'Explore Services', path: '/services' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Official Brand Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0 group focus:outline-hidden"
            aria-label="Dar Trusted Expats Link Home"
          >
            <Logo variant="header" />
          </Link>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-stone-700">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`whitespace-nowrap transition-colors py-1.5 border-b-2 font-medium ${
                    active
                      ? 'text-[#174B3A] border-[#174B3A] font-semibold'
                      : 'text-stone-600 hover:text-[#174B3A] border-transparent hover:border-stone-300'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Auth & Action Controls */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              to="/login"
              className="text-sm font-medium text-stone-700 hover:text-[#174B3A] px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <UserCircle className="w-4 h-4 text-stone-500" />
              <span>Login</span>
            </Link>

            <Link
              to="/register"
              className="text-sm font-medium text-[#174B3A] border border-[#174B3A]/30 hover:bg-[#174B3A]/5 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Register
            </Link>

            <Link
              to="/provider/register"
              className="text-sm font-semibold text-white bg-[#174B3A] hover:bg-[#0f3327] px-4 py-2 rounded-lg shadow-xs transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-[#C49A45]" />
              <span>List Service / Property</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/login"
              className="sm:hidden text-xs font-medium text-stone-700 p-2"
              aria-label="Login"
            >
              <UserCircle className="w-5 h-5 text-stone-600" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-[#174B3A] hover:bg-stone-100 rounded-lg transition-colors focus:outline-hidden"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1 pb-4 border-b border-stone-100">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#174B3A]/10 text-[#174B3A] font-semibold'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 flex flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-3 text-sm font-medium text-stone-800 border border-stone-200 rounded-lg hover:bg-stone-50"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-3 text-sm font-medium text-[#174B3A] border border-[#174B3A]/40 rounded-lg bg-[#174B3A]/5 hover:bg-[#174B3A]/10"
              >
                Register
              </Link>
            </div>
            <Link
              to="/provider/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-[#174B3A] rounded-lg shadow-xs hover:bg-[#0f3327]"
            >
              Become a Verified Provider
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
