import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const initial =
    direction === 'up'
      ? { opacity: 0, y: 40 }
      : direction === 'left'
      ? { opacity: 0, x: -40 }
      : { opacity: 0, x: 40 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const achievements = [
  { num: '1°', label: 'Certificación SSO en\neducación media superior', color: 'var(--emerald-dark)' },
  { num: '5', label: 'Capacitaciones para\nel trabajo disponibles', color: '#8B6914' },
  { num: '3×3', label: 'Equipo de baloncesto\nen CONADEMS 2025', color: 'var(--navy)' },
];

export default function Comunidad() {
  return (
    <section
      id="comunidad"
      style={{
        background: 'var(--navy)',
        padding: 'var(--space-3xl) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative backdrop shapes */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46,204,141,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Section Header */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <span
              className="section-label"
              style={{ color: 'var(--gold)', justifyContent: 'center' }}
            >
              <span style={{ background: 'var(--gold)' }}></span>
              Vida en el Plantel
            </span>
            <h2
              className="section-title"
              style={{ color: 'var(--white)', textAlign: 'center' }}
            >
              Una comunidad que{' '}
              <span className="text-gradient">inspira y trasciende</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ color: 'rgba(255,255,255,0.65)', textAlign: 'center', margin: '0 auto' }}
            >
              Más allá del aula, el COBAO Plantel 42 Huitzo es un espacio donde los jóvenes descubren sus talentos, forjan su carácter y construyen su futuro.
            </p>
          </div>
        </FadeIn>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-xl)',
          }}
        >
          {/* Oratoria Card */}
          <FadeIn delay={0.1} direction="left">
            <article
              id="comunidad-oratoria"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-lg)',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: 220,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  marginBottom: 'var(--space-md)',
                  background: 'var(--navy-mid)',
                }}
              >
                <img
                  src="https://www.oaxaca.gob.mx/comunicacion/wp-content/uploads/sites/28/2019/12/2-CB.jpg"
                  alt="Taller de oratoria Palabra de Bachiller"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.9,
                  }}
                />
              </div>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(201,168,76,0.15)',
                  border: '1px solid rgba(201,168,76,0.35)',
                  borderRadius: 'var(--radius-full)',
                  padding: '4px 14px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: 'var(--gold-light)',
                  marginBottom: 14,
                }}
              >
                ✦ Taller
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--white)',
                  marginBottom: 14,
                  lineHeight: 1.25,
                }}
              >
                "Palabra de Bachiller"
              </h3>

              <p
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.8,
                  fontSize: '0.93rem',
                  marginBottom: 20,
                }}
              >
                El arte de comunicar con claridad y convicción es una habilidad transformadora. Nuestro taller de oratoria "Palabra de Bachiller" enseña a los jóvenes a argumentar con firmeza, debatir con respeto y expresar sus ideas con seguridad. Formamos voces que el mundo necesita escuchar.
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {[
                  'Técnicas de oratoria y expresión verbal',
                  'Debate argumentativo y pensamiento crítico',
                  'Autoconfianza y manejo del nerviosismo',
                  'Participación en concursos estatales',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.75)',
                    }}
                  >
                    <span
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: 'rgba(201,168,76,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>

          {/* Deportes Card */}
          <FadeIn delay={0.2} direction="right">
            <article
              id="comunidad-deportes"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(46,204,141,0.2)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-lg)',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: 220,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  marginBottom: 'var(--space-md)',
                  background: 'var(--navy-mid)',
                }}
              >
                <img
                  src="https://www.oaxaca.gob.mx/comunicacion/wp-content/uploads/sites/28/2019/12/1-CB.jpg"
                  alt="Equipo de baloncesto COBAO Plantel 42 CONADEMS 2025"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.9,
                  }}
                />
              </div>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(46,204,141,0.12)',
                  border: '1px solid rgba(46,204,141,0.3)',
                  borderRadius: 'var(--radius-full)',
                  padding: '4px 14px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: 'var(--emerald)',
                  marginBottom: 14,
                }}
              >
                🏆 CONADEMS 2025
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--white)',
                  marginBottom: 14,
                  lineHeight: 1.25,
                }}
              >
                Campeones del deporte estudiantil
              </h3>

              <p
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.8,
                  fontSize: '0.93rem',
                  marginBottom: 20,
                }}
              >
                Nuestro equipo de Baloncesto Varonil 3×3 alcanzó la clasificación a los Juegos Nacionales del CONADEMS 2025 celebrados en Puebla. Este logro es el reflejo del trabajo disciplinado, la dedicación y el espíritu de superación que caracteriza a los estudiantes del Plantel 42 Huitzo.
              </p>

              <div
                style={{
                  background: 'rgba(46,204,141,0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  border: '1px solid rgba(46,204,141,0.18)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--emerald)',
                    marginBottom: 8,
                  }}
                >
                  Logros deportivos
                </p>
                {[
                  'Clasificación CONADEMS Nacional — Puebla 2025',
                  'Baloncesto Varonil 3×3 — representación estatal',
                  'Participación activa en deportes de conjunto',
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      fontSize: '0.87rem',
                      color: 'rgba(255,255,255,0.72)',
                      padding: '5px 0',
                      borderBottom: i < 2 ? '1px solid rgba(46,204,141,0.1)' : 'none',
                    }}
                  >
                    <span style={{ color: 'var(--emerald)' }}>→</span> {item}
                  </div>
                ))}
              </div>
            </article>
          </FadeIn>
        </div>

        {/* Stats Row */}
        <FadeIn delay={0.3}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2,
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {achievements.map((ach, i) => (
              <div
                key={i}
                id={`stat-${i}`}
                style={{
                  padding: 'var(--space-lg)',
                  textAlign: 'center',
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    color: ach.color,
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {ach.num}
                </div>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.5,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {ach.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
