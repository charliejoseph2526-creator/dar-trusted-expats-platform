import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DemonstrationNotice } from '../components/DemonstrationNotice';

export const MainLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F1] text-stone-900 font-sans selection:bg-[#174B3A] selection:text-white">
      {/* Top Banner Notice */}
      <DemonstrationNotice />

      {/* Main Navigation */}
      <Header />

      {/* Main Page Body */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};
