import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const statsCards = [
  {
    id: 'stat-certificacion',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    badge: 'SSO · 2025',
    badgeType: 'emerald',
    title: 'Primer CEMS certificado en Salud',
    description:
      'Los Servicios de Salud de Oaxaca nos reconocieron como la primera institución de educación media superior en el estado con la distinción de "Escuela Promotora de la Salud y Entorno Laboral Saludable".',
    highlight: '#1er Lugar',
    highlightColor: 'var(--emerald-dark)',
    image: '/images/Gemini_Generated_Image_88wpq688wpq688wp.png',
  },
  {
    id: 'stat-aulas',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    badge: 'Infraestructura · 2025',
    badgeType: 'gold',
    title: 'Nuevas aulas para una mejor educación',
    description:
      'En 2025 recibimos la entrega oficial de nuevas aulas construidas para mejorar las conditions de aprendizaje de nuestra comunidad estudiantil, ampliando nuestra capacidad y confort.',
    highlight: 'Nuevas Aulas',
    highlightColor: '#8B6914',
    image: '/images/aulas.png',
  },
  {
    id: 'stat-conadems',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    badge: 'CONADEMS · Puebla 2025',
    badgeType: 'navy',
    title: 'Clasificados a los Juegos Nacionales',
    description:
      'Nuestro equipo de Baloncesto Varonil 3×3 representó al plantel en los Juegos Nacionales del CONADEMS 2025 celebrados en Puebla, demostrando el talento deportivo de nuestros estudiantes.',
    highlight: 'Nacional',
    highlightColor: 'var(--navy)',
    image: '/images/basquetbol.png',
  },
];

function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function InfoCards() {
  return (
    <section
      id="logros"
      style={{
        background: 'var(--white)',
        padding: 'var(--space-3xl) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background */}
      <div
        style={{
          position: 'absolute',
          top: -120,
          right: -120,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Header */}
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <span className="section-label">Reconocimientos & Logros</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Un plantel que marca la diferencia
            </h2>
            <p
              className="section-subtitle"
              style={{ textAlign: 'center', margin: '0 auto' }}
            >
              Cada logro refleja el esfuerzo conjunto de docentes, administrativos y estudiantes comprometidos con la excelencia.
            </p>
          </div>
        </FadeInSection>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-md)',
          }}
        >
          {statsCards.map((card, i) => (
            <FadeInSection key={card.id} delay={i * 0.12}>
              <motion.article
                id={card.id}
                whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(10,25,47,0.14)' }}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-lg)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  cursor: 'default',
                  transition: 'box-shadow 0.35s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background:
                      card.badgeType === 'emerald'
                        ? 'linear-gradient(90deg, var(--emerald-dark), var(--emerald))'
                        : card.badgeType === 'gold'
                        ? 'linear-gradient(90deg, var(--gold), var(--gold-light))'
                        : 'linear-gradient(90deg, var(--navy), var(--navy-light))',
                    zIndex: 2,
                  }}
                />

                {/* Header Image */}
                {card.image && (
                  <div
                    style={{
                      width: 'calc(100% + 2 * var(--space-lg))',
                      height: 160,
                      margin: 'calc(-1 * var(--space-lg)) calc(-1 * var(--space-lg)) 0',
                      overflow: 'hidden',
                      position: 'relative',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                )}

                {/* Icon */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background:
                      card.badgeType === 'emerald'
                        ? 'rgba(46,204,141,0.10)'
                        : card.badgeType === 'gold'
                        ? 'var(--gold-pale)'
                        : 'rgba(10,25,47,0.06)',
                    color:
                      card.badgeType === 'emerald'
                        ? 'var(--emerald-dark)'
                        : card.badgeType === 'gold'
                        ? '#8B6914'
                        : 'var(--navy)',
                  }}
                >
                  {card.icon}
                </div>

                {/* Badge */}
                <span
                  className={`badge badge-${card.badgeType}`}
                  style={{ alignSelf: 'flex-start' }}
                >
                  {card.badge}
                </span>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.75 }}>
                    {card.description}
                  </p>
                </div>

                {/* Highlight chip */}
                <div
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      color: card.highlightColor,
                      background: `${card.highlightColor}15`,
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    ✦ {card.highlight}
                  </span>
                </div>
              </motion.article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
