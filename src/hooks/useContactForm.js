import { useState, useEffect } from 'react';
import { sanitizeString, validateEmail, checkThrottle, recordSubmit } from '../utils/security';

const THROTTLE_KEY = 'cobao42_contact_cooldown';
const COOLDOWN_MS = 60000; // 1 minuto de cooldown

export function useContactForm() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
    botfield: '' // Campo Honeypot para capturar spam de robots
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cooldownLeft, setCooldownLeft] = useState(() => {
    const throttleStatus = checkThrottle(THROTTLE_KEY, COOLDOWN_MS);
    return throttleStatus.throttled ? Math.ceil(throttleStatus.remainingMs / 1000) : 0;
  });

  // Efecto para gestionar el contador de cooldown en tiempo real si existe
  useEffect(() => {
    const interval = setInterval(() => {
      const status = checkThrottle(THROTTLE_KEY, COOLDOWN_MS);
      if (status.throttled) {
        setCooldownLeft(Math.ceil(status.remainingMs / 1000));
      } else {
        setCooldownLeft(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Limpieza y límites de caracteres en tiempo real
    let processedValue = value;
    if (name === 'nombre') {
      processedValue = value.slice(0, 60); // Máximo 60 caracteres
    } else if (name === 'correo') {
      processedValue = value.slice(0, 100).replace(/\s/g, ''); // Máximo 100 y sin espacios
    } else if (name === 'mensaje') {
      processedValue = value.slice(0, 1000); // Máximo 1000 caracteres
    }

    setForm((prev) => ({
      ...prev,
      [name]: processedValue
    }));

    // Limpiar error del campo modificado
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    const sanitizedNombre = sanitizeString(form.nombre.trim());
    const sanitizedCorreo = form.correo.trim();
    const sanitizedAsunto = sanitizeString(form.asunto);
    const sanitizedMensaje = sanitizeString(form.mensaje.trim());

    if (!sanitizedNombre) {
      tempErrors.nombre = 'El nombre completo es requerido.';
    } else if (sanitizedNombre.length < 3) {
      tempErrors.nombre = 'El nombre debe tener al menos 3 caracteres.';
    }

    if (!sanitizedCorreo) {
      tempErrors.correo = 'El correo electrónico es requerido.';
    } else if (!validateEmail(sanitizedCorreo)) {
      tempErrors.correo = 'El formato del correo electrónico no es válido.';
    }

    if (!sanitizedAsunto) {
      tempErrors.asunto = 'Por favor, selecciona un asunto.';
    }

    if (!sanitizedMensaje) {
      tempErrors.mensaje = 'El mensaje no puede estar vacío.';
    } else if (sanitizedMensaje.length < 10) {
      tempErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e, callback) => {
    e.preventDefault();

    // 1. Detección Honeypot: Si un robot llenó el campo oculto
    if (form.botfield) {
      console.warn('Honeypot activado. Intento de spam detectado.');
      setLoading(true);
      // Simulamos que el envío fue exitoso para engañar al robot, sin hacer nada
      setTimeout(() => {
        setLoading(false);
        setSent(true);
        setForm({ nombre: '', correo: '', asunto: '', mensaje: '', botfield: '' });
      }, 1000);
      return;
    }

    // 2. Verificar Cooldown / Rate Limit
    const throttleStatus = checkThrottle(THROTTLE_KEY, COOLDOWN_MS);
    if (throttleStatus.throttled) {
      setErrors({ global: `Has enviado demasiados mensajes. Por favor, espera ${Math.ceil(throttleStatus.remainingMs / 1000)} segundos.` });
      return;
    }

    // 3. Validar formulario
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({});

    // Simulamos la llamada a una API o servicio de correos
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      
      // Registrar el envío exitoso para el throttling
      recordSubmit(THROTTLE_KEY);
      setCooldownLeft(Math.ceil(COOLDOWN_MS / 1000));

      // Limpiamos los campos del formulario
      setForm({
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: '',
        botfield: ''
      });

      if (callback) callback();
    }, 1500);
  };

  const resetForm = () => {
    setSent(false);
    setErrors({});
  };

  return {
    form,
    errors,
    loading,
    sent,
    cooldownLeft,
    handleChange,
    handleSubmit,
    resetForm
  };
}
