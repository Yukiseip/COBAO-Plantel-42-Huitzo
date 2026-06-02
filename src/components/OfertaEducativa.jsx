import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────────────
   CAPACITACIONES DATA
   Images: AI-generated (TICs) + curated Unsplash URLs
──────────────────────────────────────────────────────── */
const capacitaciones = [
  {
    id: 'tics',
    code: '01',
    name: 'Tecnologías de la Información y Comunicación',
    shortName: 'TICs',
    tagline: 'El futuro se programa hoy',
    description:
      'Domina ofimática avanzada, programación básica, redes y gestión de datos. En un mundo que corre a velocidad digital, tú estarás siempre un paso adelante.',
    salidas: ['Técnico en soporte de TI', 'Gestor de contenido digital', 'Asistente de sistemas'],
    image: '/cap_tics.png',
    // Gradient that sits OVER the image
    overlayGradient: 'linear-gradient(160deg, rgba(5,15,40,0.92) 0%, rgba(10,25,47,0.55) 55%, rgba(0,200,180,0.15) 100%)',
    accentColor: '#00C8B0',
    accentGlow: 'rgba(0,200,176,0.35)',
    textLight: true,
    span: 'wide', // takes 2 columns on desktop
  },
  {
    id: 'admin',
    code: '02',
    name: 'Administración',
    shortName: 'Administración',
    tagline: 'Gestiona, emprende, lidera',
    description:
      'Contabilidad, recursos humanos y planeación estratégica. La base sólida para emprender o integrarte con confianza al mundo empresarial.',
    salidas: ['Auxiliar administrativo', 'Asistente contable', 'Emprendedor'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=85&auto=format&fit=crop',
    overlayGradient: 'linear-gradient(160deg, rgba(60,40,5,0.90) 0%, rgba(120,80,10,0.50) 60%, rgba(201,168,76,0.10) 100%)',
    accentColor: '#E8C97A',
    accentGlow: 'rgba(201,168,76,0.35)',
    textLight: true,
    span: 'tall',
  },
  {
    id: 'higiene',
    code: '03',
    name: 'Higiene y Salud Comunitaria',
    shortName: 'Salud Comunitaria',
    tagline: 'Cuidar es una vocación',
    description:
      'Primeros auxilios, salud pública y promoción de hábitos saludables. Forma promotores de bienestar para las familias oaxaqueñas.',
    salidas: ['Promotor de salud', 'Auxiliar en salud comunitaria', 'Asistente IMSS / SSO'],
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=900&q=85&auto=format&fit=crop',
    overlayGradient: 'linear-gradient(160deg, rgba(5,60,35,0.92) 0%, rgba(15,100,60,0.50) 60%, rgba(46,204,141,0.12) 100%)',
    accentColor: '#2ECC8D',
    accentGlow: 'rgba(46,204,141,0.35)',
    textLight: true,
    span: 'normal',
  },
  {
    id: 'turismo',
    code: '04',
    name: 'Industria Turística',
    shortName: 'Turismo',
    tagline: 'Oaxaca, tu mejor aula',
    description:
      'Gastronomía, hospitalidad y gestión de destinos. Sumérgete en la riqueza cultural de Oaxaca mientras construyes una carrera en la industria más humana del mundo.',
    salidas: ['Guía de turistas', 'Recepcionista hotelera', 'Asistente en agencias de viajes'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85&auto=format&fit=crop',
    overlayGradient: 'linear-gradient(160deg, rgba(5,25,60,0.92) 0%, rgba(20,60,120,0.50) 60%, rgba(100,180,255,0.12) 100%)',
    accentColor: '#7EC8F0',
    accentGlow: 'rgba(100,180,255,0.35)',
    textLight: true,
    span: 'normal',
  },
  {
    id: 'daco',
    code: '05',
    name: 'Dibujo Arquitectónico y de Construcción',
    shortName: 'DACO',
    tagline: 'Del trazo nace el mundo',
    description:
      'Diseño, planos y perspectiva técnica. Une el arte con la ingeniería y construye desde cero espacios donde las personas vivirán su historia.',
    salidas: ['Dibujante técnico', 'Auxiliar en despachos de arquitectura', 'Asistente en construcción'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=85&auto=format&fit=crop',
    overlayGradient: 'linear-gradient(160deg, rgba(40,20,5,0.92) 0%, rgba(80,45,10,0.55) 60%, rgba(200,140,60,0.12) 100%)',
    accentColor: '#F0A850',
    accentGlow: 'rgba(200,130,50,0.35)',
    textLight: true,
    span: 'wide',
  },
];

/* ─────────────────────────────────────────────────────
   TILT CARD HOOK — 3D perspective on mouse move
──────────────────────────────────────────────────────── */
function TiltCard({ children, style, className, id, onClick }) {
  return (
    <motion.div
      id={id}
      style={style}
      className={className}
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────
   FADE IN WITH SCROLL
──────────────────────────────────────────────────────── */
function FadeIn({ children, delay = 0, from = 'bottom' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const initial =
    from === 'bottom' ? { opacity: 0, y: 50 }
    : from === 'left'   ? { opacity: 0, x: -50 }
    : from === 'right'  ? { opacity: 0, x: 50 }
    :                     { opacity: 0 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────
   CINEMATIC CARD COMPONENT
──────────────────────────────────────────────────────── */
function CapCard({ cap, index, isActive, onToggle }) {
  return (
    <FadeIn delay={index * 0.09} from={index % 2 === 0 ? 'left' : 'right'}>
      <TiltCard
        id={`cap-${cap.id}`}
        className={`cap-card span-${cap.span} ${isActive ? 'is-active' : ''}`}
        style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          cursor: 'pointer',
          boxShadow: isActive
            ? `0 30px 80px ${cap.accentGlow}, 0 0 0 2px ${cap.accentColor}`
            : '0 8px 40px rgba(0,0,0,0.22)',
        }}
        onClick={onToggle}
        aria-expanded={isActive}
      >
        {/* ── BACKGROUND IMAGE ── */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${cap.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{ scale: isActive ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ── CINEMATIC GRADIENT OVERLAY ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: cap.overlayGradient,
          }}
        />

        {/* ── NOISE TEXTURE for premium feel ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay',
            pointerEvents: 'none',
          }}
        />

        {/* ── ACCENT GLOW LINE — top edge ── */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: 3,
            background: `linear-gradient(90deg, transparent, ${cap.accentColor}, transparent)`,
            opacity: isActive ? 1 : 0.4,
          }}
          animate={{ opacity: isActive ? 1 : 0.4 }}
          transition={{ duration: 0.4 }}
        />

        {/* ── CONTENT ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            padding: '28px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Top — module number + accent line */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: cap.accentColor,
                background: `${cap.accentColor}18`,
                border: `1px solid ${cap.accentColor}40`,
                padding: '5px 12px',
                borderRadius: 999,
                backdropFilter: 'blur(8px)',
              }}
            >
              Módulo {cap.code}
            </span>
            {/* Expand chevron */}
            <motion.div
              animate={{ rotate: isActive ? 180 : 0, opacity: isActive ? 1 : 0.6 }}
              transition={{ duration: 0.35 }}
              style={{
                width: 32, height: 32,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(8px)',
                color: 'white',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </motion.div>
          </div>

          {/* Bottom — main content */}
          <div>
            {/* Tagline */}
            <motion.p
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: cap.accentColor,
                marginBottom: 10,
              }}
              animate={{ opacity: isActive ? 0.7 : 1 }}
            >
              {cap.tagline}
            </motion.p>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: cap.span === 'wide' ? 'clamp(1.5rem, 2.5vw, 2rem)' : '1.35rem',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: 12,
                textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                textWrap: 'balance',
              }}
            >
              {cap.name}
            </h3>

            {/* Description — always visible */}
            <p
              style={{
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                marginBottom: 16,
                maxWidth: 400,
              }}
            >
              {cap.description}
            </p>

            {/* Salidas — revealed on click */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: 10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.35)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      borderRadius: 14,
                      border: `1px solid ${cap.accentColor}30`,
                      padding: '14px 18px',
                      marginTop: 4,
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: cap.accentColor,
                        marginBottom: 10,
                      }}
                    >
                      Salidas laborales
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                      {cap.salidas.map((s, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.08, duration: 0.35 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontSize: '0.85rem',
                            color: 'rgba(255,255,255,0.88)',
                          }}
                        >
                          <span
                            style={{
                              width: 5, height: 5,
                              borderRadius: '50%',
                              background: cap.accentColor,
                              boxShadow: `0 0 6px ${cap.accentColor}`,
                              flexShrink: 0,
                            }}
                          />
                          {s}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </TiltCard>
    </FadeIn>
  );
}

/* ─────────────────────────────────────────────────────
   MAIN SECTION
──────────────────────────────────────────────────────── */
export default function OfertaEducativa() {
  const [active, setActive] = useState(null);

  const toggle = (id) => setActive((prev) => (prev === id ? null : id));

  return (
    <section
      id="oferta-educativa"
      style={{
        background: 'var(--navy)',
        padding: 'var(--space-3xl) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Decorative background geometry ── */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '140%',
          height: '140%',
          backgroundImage: `
            radial-gradient(ellipse 60% 50% at 20% 30%, rgba(201,168,76,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 80% 70%, rgba(0,200,176,0.05) 0%, transparent 60%)
          `,
          pointerEvents: 'none',
        }}
      />
      {/* Subtle grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* ── HEADER ── */}
        <FadeIn>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 40,
              alignItems: 'flex-end',
              marginBottom: 'var(--space-xl)',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <span
                className="section-label"
                style={{ color: 'var(--gold)' }}
              >
                Formación para el Trabajo
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                  fontWeight: 700,
                  color: 'var(--white)',
                  lineHeight: 1.15,
                  marginTop: 10,
                  textWrap: 'balance',
                }}
              >
                5 Capacitaciones que{' '}
                <span className="text-gradient">abren puertas</span>
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  marginTop: 14,
                  maxWidth: 520,
                }}
              >
                Desde el tercer semestre elige tu área de especialización. Haz clic en cada tarjeta para descubrir las salidas laborales que te esperan.
              </p>
            </div>

            {/* Counter badge */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 110,
                height: 110,
                borderRadius: '50%',
                border: '2px solid rgba(201,168,76,0.25)',
                background: 'rgba(201,168,76,0.06)',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  lineHeight: 1,
                }}
              >
                5
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  marginTop: 4,
                }}
              >
                áreas de<br />formación
              </span>
            </div>
          </div>
        </FadeIn>

        {/* ── ASYMMETRIC MAGAZINE GRID ── */}
        <div
          id="oferta-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: 16,
          }}
        >
          {/* TICs — spans 7 cols (wide) */}
          <div style={{ gridColumn: '1 / 8', gridRow: '1' }}>
            <CapCard cap={capacitaciones[0]} index={0} isActive={active === capacitaciones[0].id} onToggle={() => toggle(capacitaciones[0].id)} />
          </div>

          {/* Admin — spans 5 cols, tall */}
          <div style={{ gridColumn: '8 / 13', gridRow: '1' }}>
            <CapCard cap={capacitaciones[1]} index={1} isActive={active === capacitaciones[1].id} onToggle={() => toggle(capacitaciones[1].id)} />
          </div>

          {/* Higiene — spans 4 cols */}
          <div style={{ gridColumn: '1 / 5', gridRow: '2' }}>
            <CapCard cap={capacitaciones[2]} index={2} isActive={active === capacitaciones[2].id} onToggle={() => toggle(capacitaciones[2].id)} />
          </div>

          {/* Turismo — spans 4 cols */}
          <div style={{ gridColumn: '5 / 9', gridRow: '2' }}>
            <CapCard cap={capacitaciones[3]} index={3} isActive={active === capacitaciones[3].id} onToggle={() => toggle(capacitaciones[3].id)} />
          </div>

          {/* DACO — spans 4 cols */}
          <div style={{ gridColumn: '9 / 13', gridRow: '2' }}>
            <CapCard cap={capacitaciones[4]} index={4} isActive={active === capacitaciones[4].id} onToggle={() => toggle(capacitaciones[4].id)} />
          </div>
        </div>

        {/* ── RESPONSIVE CARD STYLES & LAYOUT (override via CSS) ── */}
        <style>{`
          /* Base heights (Desktop) */
          .cap-card {
            height: 420px;
            transition: height 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
          }
          .cap-card.span-tall {
            height: 520px;
          }
          .cap-card.is-active {
            height: 580px; /* Generous active height for normal/wide cards */
          }
          /* Módulo 5 (DACO) specifically needs a bit more space due to extremely long title & text */
          #cap-daco.is-active {
            height: 600px;
          }
          .cap-card.span-tall.is-active {
            height: 640px; /* Generous active height for tall cards */
          }

          /* Tablet layout (width <= 900px) */
          @media (max-width: 900px) {
            #oferta-grid {
              grid-template-columns: 1fr !important;
            }
            #oferta-grid > div {
              grid-column: 1 / -1 !important;
              grid-row: auto !important;
            }
            .cap-card:not(.is-active) {
              height: 380px;
            }
            .cap-card.is-active {
              height: 580px;
            }
            #cap-daco.is-active {
              height: 600px;
            }
            .cap-card.span-tall:not(.is-active) {
              height: 400px;
            }
            .cap-card.span-tall.is-active {
              height: 580px;
            }
          }

          /* Mobile layout (width <= 600px) */
          @media (max-width: 600px) {
            .cap-card:not(.is-active) {
              height: 340px;
            }
            .cap-card.is-active {
              height: 560px; /* Dynamic expansion on mobile */
            }
            #cap-daco.is-active {
              height: 590px;
            }
            .cap-card.span-tall:not(.is-active) {
              height: 340px;
            }
            .cap-card.span-tall.is-active {
              height: 560px;
            }
          }
        `}</style>

        {/* ── BOTTOM CTA ── */}
        <FadeIn delay={0.4}>
          <div
            style={{
              marginTop: 'var(--space-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
              padding: '28px 40px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(201,168,76,0.18)',
              borderRadius: 24,
              backdropFilter: 'blur(12px)',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              {/* Animated pulse dot */}
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <motion.div
                  animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2.2 }}
                  style={{
                    position: 'absolute',
                    inset: -6,
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    opacity: 0.3,
                  }}
                />
                <div
                  style={{
                    width: 12, height: 12,
                    borderRadius: '50%',
                    background: 'var(--gold)',
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: 4,
                  }}
                >
                  ¿Listo para elegir tu camino?
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                  }}
                >
                  Inscripciones abiertas · Generación 2025–2028
                </p>
              </div>
            </div>
            <button
              className="btn btn-primary"
              id="oferta-cta-contacto"
              onClick={() => {
                const el = document.getElementById('contacto');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ flexShrink: 0 }}
            >
              Solicitar información
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
