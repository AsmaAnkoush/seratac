import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'الرئيسية', kind: 'home', id: 'hero' },
  { label: 'عن البرنامج', kind: 'scroll', id: 'about' },
  { label: 'المكونات', kind: 'scroll', id: 'components' },
  { label: 'المواد الدراسية', kind: 'route', to: '/subjects' },
  { label: 'قيمنا', kind: 'scroll', id: 'values' },
];

const SECTION_IDS = ['hero', 'about', 'components', 'values'];

function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    if (location.pathname !== '/') return undefined;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTION_IDS[i]);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMenuOpen]);

  const handleGoHome = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSectionLink = (e, sectionId) => {
    e.preventDefault();
    const scrollToSection = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };

  const isActive = (link) => {
    if (link.kind === 'route') return location.pathname === link.to;
    if (location.pathname !== '/') return false;
    if (link.kind === 'home') return activeSection === 'hero';
    return activeSection === link.id;
  };

  const desktopBase =
    'text-sm px-1 py-2 pb-1 border-b-2 whitespace-nowrap transition-all duration-200';
  const desktopActive = 'text-subject1 font-bold border-subject1';
  const desktopInactive =
    'text-grey/70 font-medium border-transparent hover:text-primary hover:border-primary/30';

  const renderDesktopLink = (link) => {
    const active = isActive(link);
    const className = `${desktopBase} ${active ? desktopActive : desktopInactive}`;

    if (link.kind === 'home') {
      return (
        <a key={link.label} href="/" onClick={handleGoHome} className={className}>
          {link.label}
        </a>
      );
    }
    if (link.kind === 'route') {
      return (
        <Link key={link.label} to={link.to} className={className}>
          {link.label}
        </Link>
      );
    }
    return (
      <a
        key={link.label}
        href={`#${link.id}`}
        onClick={(e) => handleSectionLink(e, link.id)}
        className={className}
      >
        {link.label}
      </a>
    );
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleMobileSectionClick = (e, sectionId) => {
    closeMenu();
    handleSectionLink(e, sectionId);
  };

  const handleMobileHomeClick = (e) => {
    closeMenu();
    handleGoHome(e);
  };

  const renderMobileLink = (link) => {
    const active = isActive(link);
    const className = `block px-6 py-3 transition ${
      active
        ? 'bg-subject1/10 text-subject1 font-bold'
        : 'text-grey font-medium hover:bg-subject1/10 hover:text-subject1'
    }`;

    if (link.kind === 'home') {
      return (
        <a
          key={link.label}
          href="/"
          onClick={handleMobileHomeClick}
          className={className}
        >
          {link.label}
        </a>
      );
    }
    if (link.kind === 'route') {
      return (
        <Link
          key={link.label}
          to={link.to}
          className={className}
          onClick={closeMenu}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <a
        key={link.label}
        href={`#${link.id}`}
        className={className}
        onClick={(e) => handleMobileSectionClick(e, link.id)}
      >
        {link.label}
      </a>
    );
  };

  return (
    <header
      ref={menuRef}
      className="sticky top-0 z-50 bg-[#F0EEFC] shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between lg:grid lg:grid-cols-3">
        {/* RIGHT: logo */}
        <a
          href="/"
          onClick={handleGoHome}
          className="group cursor-pointer flex items-center gap-3 lg:justify-self-start"
        >
          <img
            src={logo}
            alt="شعار سيرتك"
            className="h-10 sm:h-12 w-auto group-hover:rotate-6 transition-transform duration-300"
          />
          <div className="flex flex-col items-start leading-tight">
            <span className="font-bold text-xl sm:text-2xl text-primary">سيرتك</span>
            <span className="font-bold text-base sm:text-lg text-primary tracking-tight">
              Seratac
            </span>
          </div>
        </a>

        {/* CENTER: desktop nav */}
        <nav className="hidden lg:flex lg:justify-self-center items-center gap-6">
          {navLinks.map(renderDesktopLink)}
        </nav>

        {/* LEFT: CTA + hamburger */}
        <div className="lg:justify-self-end flex items-center">
          <Link
            to="/subjects"
            className="hidden lg:flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary/90 hover:shadow-lg transition-all"
          >
            <span>ابدأ الآن</span>
            <FiArrowLeft />
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="lg:hidden text-primary text-3xl p-2 hover:bg-grey/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#F0EEFC] shadow-lg border-t border-grey/10 py-4">
          <nav className="flex flex-col">{navLinks.map(renderMobileLink)}</nav>
          <Link
            to="/subjects"
            onClick={closeMenu}
            className="mx-6 mt-3 bg-primary text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2"
          >
            <span>ابدأ الآن</span>
            <FiArrowLeft />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
