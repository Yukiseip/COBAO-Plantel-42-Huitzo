import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CobaoLogo = ({ size = 40 }) => (
  <img
    src="/images/logo.png"
    alt="Logo COBAO"
    style={{
      width: size,
      height: size,
      objectFit: 'contain',
      borderRadius: 'var(--radius-sm)',
    }}
  />
);

const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'oferta-educativa', label: 'Oferta Educativa' },
  { id: 'comunidad', label: 'Comunidad' },
  { id: 'contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Detect active section
      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          background: scrolled
            ? 'rgba(248, 246, 241, 0.96)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(10,25,47,0.08)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
          {/* Logo + Name */}
          <button
            onClick={() => scrollTo('inicio')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              textDecoration: 'none',
            }}
            aria-label="Ir al inicio"
          >
            <CobaoLogo size={44} />
            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: scrolled ? 'var(--navy)' : 'var(--white)',
                lineHeight: 1.2,
                transition: 'color 0.35s',
              }}>
                COBAO
              </div>
              <div style={{
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                color: scrolled ? 'var(--gold)' : 'rgba(201,168,76,0.9)',
                transition: 'color 0.35s',
                textTransform: 'uppercase',
              }}>
                Plantel 42 · Huitzo
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-${link.id}`}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '10px 16px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: scrolled
                    ? activeSection === link.id ? 'var(--gold)' : 'var(--navy)'
                    : activeSection === link.id ? 'var(--gold)' : 'rgba(255,255,255,0.9)',
                  transition: 'color 0.3s',
                  borderRadius: 'var(--radius-full)',
                  position: 'relative',
                }}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 18,
                      height: 2,
                      background: 'var(--gold)',
                      borderRadius: 2,
                      display: 'block',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contacto')}
              className="btn btn-primary"
              style={{ marginLeft: 8 }}
              id="nav-cta-inscribete"
            >
              Inscríbete
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              flexDirection: 'column',
              gap: 5,
              zIndex: 1001,
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{
                  rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                  y: menuOpen && i === 0 ? 9 : menuOpen && i === 2 ? -9 : 0,
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
                style={{
                  display: 'block',
                  width: 24,
                  height: 2,
                  background: scrolled ? 'var(--navy)' : 'var(--white)',
                  borderRadius: 2,
                  transition: 'background 0.35s',
                }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '75vw',
              maxWidth: 320,
              background: 'var(--navy)',
              zIndex: 999,
              padding: '100px 32px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              boxShadow: '-20px 0 60px rgba(0,0,0,0.3)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '16px 0',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: activeSection === link.id ? 'var(--gold)' : 'rgba(255,255,255,0.85)',
                  textAlign: 'left',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  transition: 'color 0.3s',
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => scrollTo('contacto')}
              className="btn btn-primary"
              style={{ marginTop: 'auto' }}
            >
              Inscríbete
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10,25,47,0.6)',
              zIndex: 998,
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
