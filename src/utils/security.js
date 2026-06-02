/**
 * Utilidades de seguridad y validación para la aplicación.
 */

/**
 * Desinfecta una cadena de texto para prevenir inyecciones HTML y ataques XSS básicos.
 * Reemplaza los caracteres especiales por sus respectivas entidades HTML.
 * 
 * @param {string} str - Cadena de texto a desinfectar.
 * @returns {string} - Cadena de texto limpia.
 */
export function sanitizeString(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Valida si un correo electrónico tiene un formato válido y estándar.
 * 
 * @param {string} email - Correo a validar.
 * @returns {boolean} - true si es válido, false en caso contrario.
 */
export function validateEmail(email) {
  if (typeof email !== 'string') return false;
  // Expresión regular estándar para validación de emails
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Verifica si un usuario está bajo restricción de envío masivo (throttling).
 * Guarda la marca de tiempo del último envío exitoso en localStorage.
 * 
 * @param {string} key - Clave única para el rate limiting (ej. 'contact_form_cooldown').
 * @param {number} cooldownMs - Tiempo de espera en milisegundos (ej. 60000 para 1 minuto).
 * @returns {object} - Contiene { throttled: boolean, remainingMs: number }
 */
export function checkThrottle(key, cooldownMs = 60000) {
  try {
    const lastSubmit = localStorage.getItem(key);
    if (!lastSubmit) {
      return { throttled: false, remainingMs: 0 };
    }

    const now = Date.now();
    const elapsed = now - parseInt(lastSubmit, 10);

    if (elapsed < cooldownMs) {
      return { throttled: true, remainingMs: cooldownMs - elapsed };
    }

    return { throttled: false, remainingMs: 0 };
  } catch (error) {
    // Si localStorage no está disponible (ej. cookies desactivadas), no bloqueamos la app, pero tampoco aplicamos throttling.
    console.error('Error al acceder a localStorage para throttling:', error);
    return { throttled: false, remainingMs: 0 };
  }
}

/**
 * Registra un envío exitoso en el control de tasa.
 * 
 * @param {string} key - Clave única para el rate limiting.
 */
export function recordSubmit(key) {
  try {
    localStorage.setItem(key, Date.now().toString());
  } catch (error) {
    console.error('Error al guardar marca de tiempo en localStorage:', error);
  }
}
