import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 0,
    image: '/images/cobaoporfuera.png',
    badge: 'Bienvenidos al Plantel 42',
    title: 'Formando el futuro\nde Huitzo y Oaxaca',
    subtitle:
      'Un bachillerato que une excelencia académica, valores humanos y capacitación para el trabajo en un entorno verde y acogedor.',
    cta: { label: 'Conoce más', target: 'oferta-educativa' },
    ctaSecondary: { label: 'Contáctanos', target: 'contacto' },
    accentColor: 'var(--gold)',
  },
  {
    id: 1,
    image: '/images/aulas.png',
    badge: 'Infraestructura Renovada',
    title: 'Laboratorios modernos\npara el siglo XXI',
    subtitle:
      'Nuestro plantel cuenta con aulas equipadas y laboratorios de cómputo para que desarrolles competencias digitales desde el primer semestre.',
    cta: { label: 'Oferta Educativa', target: 'oferta-educativa' },
    ctaSecondary: null,
    accentColor: 'var(--emerald)',
  },
  {
    id: 2,
    image: '/images/Gemini_Generated_Image_88wpq688wpq688wp.png',
    badge: '🏆 Logro 2025',
    title: 'Primeros certificados\ncomo Escuela Saludable',
    subtitle:
      'Los Servicios de Salud de Oaxaca (SSO) nos distinguieron como el primer CEMS del estado en obtener la Certificación de Escuela Promotora de la Salud.',
    cta: { label: 'Nuestra Comunidad', target: 'comunidad' },
    ctaSecondary: null,
    accentColor: 'var(--gold)',
  },
];

const ProgressBar = ({ duration, progressKey }) => (
  <motion.div
    key={progressKey}
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration, ease: 'linear' }}
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '100%',
      background: 'var(--gold)',
      transformOrigin: 'left center',
      borderRadius: 'var(--radius-full)',
    }}
  />
);

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const DURATION = 6;

  const goTo = useCallback(
    (idx) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
    },
    [current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, DURATION * 1000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const imageVariants = {
    enter: (dir) => ({ opacity: 0, scale: 1.06, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, scale: 0.96, x: dir > 0 ? -60 : 60 }),
  };

  const contentVariants = {
    enter: { opacity: 0, y: 40 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: 600,
        overflow: 'hidden',
        background: 'var(--navy)',
      }}
      aria-label="Carrusel principal COBAO Plantel 42 Huitzo"
    >
      {/* Background Images */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={`slide-${current}`}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
        >
          <img
            src={slide.image}
            alt={slide.title.replace('\n', ' ')}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          {/* Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(105deg, rgba(10,25,47,0.88) 0%, rgba(10,25,47,0.55) 60%, rgba(10,25,47,0.20) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Decorative accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, var(--gold), var(--gold-light), transparent)',
          zIndex: 5,
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 80,
        }}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={`content-${current}`}
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            style={{ maxWidth: 700 }}
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(201,168,76,0.18)',
                border: '1px solid rgba(201,168,76,0.4)',
                borderRadius: 'var(--radius-full)',
                padding: '6px 16px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--gold-light)',
                marginBottom: 20,
                backdropFilter: 'blur(8px)',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
              {slide.badge}
            </motion.span>

            {/* Title */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                fontWeight: 700,
                color: 'var(--white)',
                lineHeight: 1.15,
                marginBottom: 20,
                whiteSpace: 'pre-line',
              }}
            >
              {slide.title.split('\n').map((line, i) => (
                <span key={i} style={{ display: 'block' }}>
                  {i === 1 ? (
                    <span style={{
                      background: `linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      {line}
                    </span>
                  ) : line}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: 'rgba(255,255,255,0.78)',
                lineHeight: 1.8,
                maxWidth: 560,
                marginBottom: 36,
              }}
            >
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary"
                onClick={() => scrollTo(slide.cta.target)}
                id={`hero-cta-${current}-primary`}
              >
                {slide.cta.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              {slide.ctaSecondary && (
                <button
                  className="btn btn-outline"
                  onClick={() => scrollTo(slide.ctaSecondary.target)}
                  id={`hero-cta-${current}-secondary`}
                >
                  {slide.ctaSecondary.label}
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Controls */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          {slides.map((s, i) => (
            <button
              key={s.id}
              id={`slider-dot-${i}`}
              onClick={() => goTo(i)}
              aria-label={`Diapositiva ${i + 1}`}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
              }}
            >
              <div
                style={{
                  width: i === current ? 36 : 10,
                  height: 4,
                  borderRadius: 'var(--radius-full)',
                  background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.35)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s',
                }}
              >
                {i === current && <ProgressBar duration={DURATION} progressKey={`pb-${current}`} />}
              </div>
            </button>
          ))}
        </div>

        {/* Arrow Controls */}
        <div
          style={{
            position: 'absolute',
            right: 32,
            bottom: '50%',
            transform: 'translateY(50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
          className="slider-arrows"
        >
          <button
            id="slider-prev"
            aria-label="Diapositiva anterior"
            onClick={() => goTo((current - 1 + slides.length) % slides.length)}
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.3s',
              color: 'white',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
          <button
            id="slider-next"
            aria-label="Siguiente diapositiva"
            onClick={next}
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.3s',
              color: 'white',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 24,
          left: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          zIndex: 5,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        Desplázate
      </motion.div>
    </section>
  );
}
