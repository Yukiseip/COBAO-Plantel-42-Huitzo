# COBAO Plantel 42 Huitzo - Portal Institucional

Este repositorio contiene el código fuente del sitio web oficial del **Colegio de Bachilleres del Estado de Oaxaca (COBAO) Plantel 42, San Pablo Huitzo**. El portal web está desarrollado con tecnologías frontend modernas y estructurado bajo una arquitectura limpia y segura.

---

## 🚀 Arquitectura por Capas

El proyecto está organizado siguiendo el principio de separación de responsabilidades para garantizar la escalabilidad, la mantenibilidad y un acoplamiento débil entre la lógica y la interfaz gráfica:

```
src/
├── assets/             # Recursos estáticos (imágenes, iconos, vectores)
├── utils/              # Capa de Infraestructura / Utilidades (Seguridad y validación pura)
│   └── security.js     # Sanitizado de inputs, regex de email, control de cooldown (Rate limit)
├── hooks/              # Capa de Negocio / Lógica
│   └── useContactForm.js # Hook personalizado que controla el estado, honeypot y throttling del formulario
├── components/         # Capa de Presentación (UI)
│   ├── Contacto.jsx    # UI del formulario de contacto y mapa
│   ├── OfertaEducativa.jsx # Visualización de capacitaciones del plantel
│   ├── Comunidad.jsx   # Vida escolar, talleres, deportes y redes sociales
│   ├── HeroSlider.jsx  # Carrusel con imágenes reales y texto destacado
│   ├── Navbar.jsx      # Menú de navegación responsivo
│   └── Footer.jsx      # Pie de página interactivo con redes sociales vinculadas
├── App.jsx             # Punto de entrada de componentes React
└── main.jsx            # Inicialización de React y renderizado en DOM
```

- **Capa de Presentación (UI):** Los componentes de React en `src/components` solo manejan la renderización del DOM, animaciones (con `framer-motion`), estilos responsivos e interacción visual básica.
- **Capa de Negocio (Logic):** Custom hooks en `src/hooks` gestionan el estado, las reglas de validación complejas, las respuestas simuladas y las interacciones con utilidades del sistema.
- **Capa de Infraestructura (Utilities):** Funciones puras en `src/utils` dedicadas a la desinfección de texto (anti-XSS), validación de expresiones regulares de correo y almacenamiento del cooldown.

---

## 🛡️ Medidas de Seguridad Implementadas

Para cumplir con estándares profesionales y garantizar la integridad de los datos de los usuarios, se han implementado controles de seguridad en la aplicación:

1. **Sanitización de Entradas (Anti-XSS):**
   - El módulo `security.js` implementa `sanitizeString` para codificar caracteres especiales (`<`, `>`, `&`, `"`, `'`, `/`) en entidades HTML seguras. Esto previene que se introduzcan scripts maliciosos (`Cross-Site Scripting`) en el formulario de contacto.
2. **Validación de Correo Robusta:**
   - Expresión regular RFC 5322 compatible para verificar que la dirección de correo ingresada posea una estructura real previa a cualquier intento de procesamiento.
3. **Control de Abuso y Spam (Honeypot):**
   - Se añadió un campo de formulario (`botfield`) oculto a los humanos mediante posicionamiento CSS absoluto fuera de la pantalla. Los bots de spam rellenan automáticamente este campo; si esto sucede, el sistema bloquea inmediatamente la acción de manera silenciosa para no dar pistas al robot.
4. **Límite de Tasa de Envío (Throttling / Cooldown):**
   - Se limita el envío a **1 mensaje por minuto por usuario** guardando una marca de tiempo encriptada (con marca UNIX local) en el `localStorage`. Si un usuario intenta enviar un segundo mensaje antes de que expire el cooldown de 60 segundos, el botón de envío se desactiva visualmente mostrando un temporizador de cuenta regresiva.
5. **Restricción de Longitud de Datos:**
   - Atributos nativos `maxLength` en todos los inputs (Nombre: 60, Correo: 100, Mensaje: 1000) sincronizados con límites de corte en Javascript para evitar desbordamiento de búfer.
6. **Seguridad de Enlaces Externos:**
   - Todos los hipervínculos hacia el exterior con `target="_blank"` implementan la propiedad `rel="noopener noreferrer"` para mitigar vulnerabilidades de secuestro de pestañas o acceso malicioso a `window.opener`.

---

## 🌐 Configuración para GitHub y Despliegue en Vercel

### Paso 1: Subir el proyecto a GitHub
1. Inicializa el repositorio git en tu terminal:
   ```bash
   git init
   ```
2. Añade todos los archivos:
   ```bash
   git add .
   ```
3. Registra el commit inicial:
   ```bash
   git commit -m "feat: implementar arquitectura por capas y medidas de seguridad"
   ```
4. Crea un repositorio vacío en tu cuenta de GitHub (p. ej., `mi-repositorio-cobao`).
5. Vincula el repositorio local con el remoto e inicia la subida:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git branch -M main
   git push -u origin main
   ```

### Paso 2: Desplegar en Vercel
Este proyecto incluye un archivo `vercel.json` configurado que inyecta automáticamente cabeceras HTTP de seguridad avanzada en el servidor perimetral de Vercel:
- **`Content-Security-Policy` (CSP):** Restringe la carga de recursos solo de orígenes confiables (Google Fonts, Google Maps, y recursos propios), previniendo XSS por inyección externa.
- **`X-Frame-Options: DENY`:** Protege al portal de ataques de clickjacking (previene que el sitio sea incrustado en `iframes` ajenos).
- **`X-Content-Type-Options: nosniff`:** Obliga al navegador a respetar los tipos MIME de los archivos declarados.
- **`Referrer-Policy: strict-origin-when-cross-origin`:** Controla la información de procedencia enviada en peticiones salientes.

**Procedimiento de despliegue:**
1. Inicia sesión en [Vercel](https://vercel.com).
2. Haz clic en **Add New** > **Project**.
3. Importa el repositorio de GitHub que acabas de subir.
4. En la configuración de construcción, Vercel detectará automáticamente que es un proyecto **Vite**; deja los parámetros predeterminados:
   - *Framework Preset:* `Vite`
   - *Build Command:* `npm run build`
   - *Output Directory:* `dist`
5. Presiona **Deploy**. El sitio se construirá en pocos segundos y te entregará una URL HTTPS segura lista para producción.

---

## 🛠️ Ejecución y Desarrollo Local

Para correr el portal en tu entorno de desarrollo local, sigue estos pasos:

1. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Compila el bundle optimizado para producción para verificar su empaquetado:
   ```bash
   npm run build
   ```
4. Previsualiza la build de producción en local:
   ```bash
   npm run preview
   ```
