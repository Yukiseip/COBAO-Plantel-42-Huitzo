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

const quickLinks = [
  { label: 'Inicio', target: 'inicio' },
  { label: 'Oferta Educativa', target: 'oferta-educativa' },
  { label: 'Comunidad', target: 'comunidad' },
  { label: 'Contacto', target: 'contacto' },
];

const capacitacionesFooter = [
  'TICs', 'Administración', 'Higiene y Salud Comunitaria', 'DACO',
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      style={{
        background: 'var(--navy)',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-lg)',
      }}
    >
      <div className="container">
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-xl)',
            paddingBottom: 'var(--space-xl)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <CobaoLogo size={44} />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                    lineHeight: 1.2,
                  }}
                >
                  COBAO
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    color: 'var(--gold)',
                    textTransform: 'uppercase',
                  }}
                >
                  Plantel 42 · Huitzo
                </div>
              </div>
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.88rem',
                lineHeight: 1.75,
                maxWidth: 260,
                marginBottom: 24,
              }}
            >
              Colegio de Bachilleres del Estado de Oaxaca. Comprometidos con la formación integral de los jóvenes del Valle de Etla.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(46,204,141,0.1)',
                border: '1px solid rgba(46,204,141,0.25)',
                borderRadius: 'var(--radius-full)',
                padding: '6px 14px',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--emerald)',
                  display: 'inline-block',
                }}
              />
              <span style={{ color: 'var(--emerald)', fontSize: '0.78rem', fontWeight: 600 }}>
                CCT: 20ECB0042D
              </span>
            </div>

            {/* Social Media Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginTop: 24,
              }}
            >
              {[
                {
                  name: 'Facebook',
                  url: 'https://www.facebook.com/COBAO42HUITZO',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                  color: '#1877F2',
                },
                {
                  name: 'Instagram',
                  url: 'https://www.instagram.com/comunidadcobao/',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                  color: '#E4405F',
                },
                {
                  name: 'TikTok',
                  url: 'https://www.tiktok.com/@cobaooax',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  ),
                  color: '#25F4EE',
                },
                {
                  name: 'X',
                  url: 'https://x.com/COBAO_Gob',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                  ),
                  color: '#E8C97A',
                },
                {
                  name: 'YouTube',
                  url: 'https://www.youtube.com/@COBAOOaxaca',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  ),
                  color: '#FF0000',
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar nuestro ${social.name}`}
                  id={`footer-social-${social.name.toLowerCase()}`}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.65)',
                    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.borderColor = social.color;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: 'var(--gold)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <button
                    id={`footer-link-${link.target}`}
                    onClick={() => scrollTo(link.target)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'rgba(255,255,255,0.55)',
                      fontSize: '0.9rem',
                      padding: 0,
                      transition: 'color 0.25s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontFamily: 'var(--font-sans)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>→</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Capacitaciones */}
          <div>
            <h4
              style={{
                color: 'var(--gold)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Capacitaciones
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {capacitacionesFooter.map((cap) => (
                <li
                  key={cap}
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: 'rgba(201,168,76,0.5)',
                      flexShrink: 0,
                    }}
                  />
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4
              style={{
                color: 'var(--gold)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Contacto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  Carretera Internacional s/n, Barrio Agua Blanca, San Pablo Huitzo, Etla, Oaxaca
                </p>
              </div>
              <a
                href="mailto:pl42huitzo@cobao.edu.mx"
                id="footer-email"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                pl42huitzo@cobao.edu.mx
              </a>
              <a
                href="tel:9515284142"
                id="footer-tel"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 8a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                951 528 4142
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: 'var(--space-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} COBAO Plantel 42 Huitzo. Todos los derechos reservados.
          </p>
          <a
            href="https://www.cobao.edu.mx"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-cobao-main"
            style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.8rem',
              textDecoration: 'none',
              transition: 'color 0.25s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
          >
            cobao.edu.mx →
          </a>
        </div>
      </div>
    </footer>
  );
}
