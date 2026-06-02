import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useContactForm } from '../hooks/useContactForm';

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
      transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const contactInfo = [
  {
    id: 'contact-address',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Dirección',
    value: 'Carretera Internacional s/n, Barrio Agua Blanca, San Pablo Huitzo, Etla, Oaxaca',
    link: 'https://www.google.com/maps/place/COBAO+plantel+42+Huitzo/',
    linkLabel: 'Ver en Google Maps',
  },
  {
    id: 'contact-email',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Correo electrónico',
    value: 'pl42huitzo@cobao.edu.mx',
    link: 'mailto:pl42huitzo@cobao.edu.mx',
    linkLabel: 'Enviar correo',
  },
  {
    id: 'contact-phone',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 8a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Teléfono',
    value: '951 528 4142',
    link: 'tel:9515284142',
    linkLabel: 'Llamar ahora',
  },
  {
    id: 'contact-hours',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Horario de oficinas',
    value: 'Lunes a viernes · 7:00 a.m. – 3:00 p.m.',
    link: null,
    linkLabel: null,
  },
];

export default function Contacto() {
  const {
    form,
    errors,
    loading,
    sent,
    cooldownLeft,
    handleChange,
    handleSubmit,
    resetForm
  } = useContactForm();


  return (
    <section
      id="contacto"
      style={{
        background: 'var(--cream)',
        padding: 'var(--space-3xl) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 450,
          height: 450,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Header */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Contáctanos</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Estamos aquí para{' '}
              <span className="text-gradient">orientarte</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ textAlign: 'center', margin: '0 auto' }}
            >
              ¿Tienes preguntas sobre el proceso de inscripción, las capacitaciones o la vida escolar? Con gusto te atendemos.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'var(--space-md)',
            alignItems: 'start',
          }}
        >
          {/* Contact Info Panel */}
          <FadeIn delay={0.1} direction="left">
            <div
              style={{
                background: 'var(--navy)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-xl)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--white)',
                  marginBottom: 8,
                }}
              >
                Información de contacto
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginBottom: 32 }}>
                Visítanos, escríbenos o llámanos. Nuestro equipo administrativo te atenderá con gusto.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {contactInfo.map((item) => (
                  <div
                    key={item.id}
                    id={item.id}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(201,168,76,0.15)',
                        border: '1px solid rgba(201,168,76,0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--gold)',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--gold)',
                          marginBottom: 4,
                        }}
                      >
                        {item.label}
                      </p>
                      <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        {item.value}
                      </p>
                      {item.link && (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            fontSize: '0.8rem',
                            color: 'var(--emerald)',
                            textDecoration: 'none',
                            marginTop: 4,
                            fontWeight: 500,
                          }}
                        >
                          {item.linkLabel}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CCT */}
              <div
                style={{
                  marginTop: 32,
                  padding: '14px 20px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem' }}>CCT Oficial</span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--gold-light)',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                  }}
                >
                  20ECB0042D
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.2} direction="right">
            <div
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-xl)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border)',
              }}
            >
              {!sent ? (
                <>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      marginBottom: 8,
                    }}
                  >
                    Envíanos un mensaje
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 28 }}>
                    Responderemos a tu correo en un plazo máximo de 24 horas en días hábiles.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
                    noValidate
                  >
                    {/* Honeypot Input - Invisible para humanos */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-5000px',
                        top: 'auto',
                        width: '1px',
                        height: '1px',
                        overflow: 'hidden',
                        opacity: 0
                      }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="botfield"
                        value={form.botfield}
                        onChange={handleChange}
                        tabIndex="-1"
                        autoComplete="off"
                        placeholder="Ignore this field"
                      />
                    </div>

                    {/* Global Error Banner */}
                    {errors.global && (
                      <div
                        style={{
                          padding: '12px 16px',
                          background: 'rgba(239, 68, 68, 0.08)',
                          border: '1px solid rgba(239, 68, 68, 0.2)',
                          borderRadius: 'var(--radius-md)',
                          color: '#ef4444',
                          fontSize: '0.85rem',
                          fontWeight: 500
                        }}
                      >
                        {errors.global}
                      </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-nombre">Nombre completo</label>
                        <input
                          id="contact-nombre"
                          name="nombre"
                          type="text"
                          className="form-input"
                          placeholder="Tu nombre"
                          value={form.nombre}
                          onChange={handleChange}
                          maxLength={60}
                          style={{
                            borderColor: errors.nombre ? '#ef4444' : 'var(--border)',
                          }}
                          required
                        />
                        {errors.nombre && (
                          <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: 4, display: 'block' }}>
                            {errors.nombre}
                          </span>
                        )}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-correo">Correo electrónico</label>
                        <input
                          id="contact-correo"
                          name="correo"
                          type="email"
                          className="form-input"
                          placeholder="tu@correo.com"
                          value={form.correo}
                          onChange={handleChange}
                          maxLength={100}
                          style={{
                            borderColor: errors.correo ? '#ef4444' : 'var(--border)',
                          }}
                          required
                        />
                        {errors.correo && (
                          <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: 4, display: 'block' }}>
                            {errors.correo}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-asunto">Asunto</label>
                      <select
                        id="contact-asunto"
                        name="asunto"
                        className="form-input"
                        value={form.asunto}
                        onChange={handleChange}
                        style={{
                          borderColor: errors.asunto ? '#ef4444' : 'var(--border)',
                        }}
                        required
                      >
                        <option value="">Selecciona un tema</option>
                        <option value="inscripcion">Proceso de inscripción</option>
                        <option value="capacitaciones">Información sobre capacitaciones</option>
                        <option value="documentos">Trámite de documentos</option>
                        <option value="otros">Otros</option>
                      </select>
                      {errors.asunto && (
                        <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: 4, display: 'block' }}>
                          {errors.asunto}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-mensaje">Mensaje</label>
                      <textarea
                        id="contact-mensaje"
                        name="mensaje"
                        className="form-input"
                        placeholder="Escribe aquí tu consulta..."
                        value={form.mensaje}
                        onChange={handleChange}
                        maxLength={1000}
                        style={{
                          borderColor: errors.mensaje ? '#ef4444' : 'var(--border)',
                          resize: 'vertical'
                        }}
                        required
                        rows={5}
                      />
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                        {errors.mensaje ? (
                          <span style={{ color: '#ef4444', fontSize: '0.78rem' }}>
                            {errors.mensaje}
                          </span>
                        ) : (
                          <span />
                        )}
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                          {form.mensaje.length}/1000 caract.
                        </span>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      id="contact-submit"
                      className="btn btn-navy"
                      whileHover={cooldownLeft > 0 || loading ? {} : { scale: 1.02 }}
                      whileTap={cooldownLeft > 0 || loading ? {} : { scale: 0.98 }}
                      disabled={loading || cooldownLeft > 0}
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        opacity: loading || cooldownLeft > 0 ? 0.6 : 1,
                        fontSize: '1rem',
                        padding: '16px',
                        cursor: loading || cooldownLeft > 0 ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {loading ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
                            style={{ display: 'inline-block', marginRight: 8 }}
                          >
                            ⟳
                          </motion.span>
                          Enviando...
                        </>
                      ) : cooldownLeft > 0 ? (
                        `Espera ${cooldownLeft}s para volver a enviar`
                      ) : (
                        <>
                          Enviar mensaje
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ textAlign: 'center', padding: 'var(--space-lg) 0' }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      background: 'rgba(46,204,141,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      marginBottom: 12,
                    }}
                  >
                    ¡Mensaje enviado!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá a la brevedad posible.
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: 24 }}
                    onClick={resetForm}
                    id="contact-send-another"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Map */}
        <FadeIn delay={0.3}>
          <div
            id="mapa-ubicacion"
            style={{
              marginTop: 'var(--space-lg)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border)',
              position: 'relative',
              height: 380,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 20,
                left: 20,
                zIndex: 5,
                background: 'rgba(10,25,47,0.92)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--emerald)', animation: 'pulse-ring 2s ease-in-out infinite' }} />
              <span style={{ color: 'var(--white)', fontSize: '0.82rem', fontWeight: 600 }}>
                COBAO Plantel 42 Huitzo
              </span>
            </div>
            <iframe
              title="Ubicación COBAO Plantel 42 Huitzo en Google Maps"
              src={`https://maps.google.com/maps?q=COBAO+plantel+42+Huitzo&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
