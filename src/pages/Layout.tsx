import { useEffect } from 'react';
import FooterSection from '../components/FooterSection';
import Header from '../components/headers/Headers';

interface LayoutProp {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProp> = ({ children }) => {
  // Smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll w-screen">
      <Header />
      <main>{children}</main>
      <FooterSection />
    </div>
  );
};

export default Layout;
