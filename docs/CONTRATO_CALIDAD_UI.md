# CONTRATO DE CALIDAD BÁSICO // VIBE CODING WORKSTATION
**Marco de Calidad Pragmático para Iteración Rápida HITL**
*Versión: 0.2.0-beta // Fecha: 2026-10-18*

---

## 1. Filosofía del Contrato
Este contrato establece una **red de seguridad básica y flexible** para la interfaz de usuario de RECOVERY.
Dado que el Director General (DG) y el Crew de agentes están en una fase de **Vibe Coding e iteración rápida**, el contrato **no impone reglas duras ni burocracia de testing rígida**. Su único propósito es garantizar que la mesa de trabajo no se rompa visual ni funcionalmente mientras el DG experimenta y refina el álbum.

---

## 2. Los 5 Criterios Esenciales de Calidad

### Criterio 1: Integridad de Márgenes (Zero Margin Breakage)
- **Principio:** Ningún componente debe romper los márgenes de la pantalla ni provocar barras de desplazamiento horizontal inesperadas.
- **Tolerancia:** `document.documentElement.scrollWidth <= window.innerWidth` en:
  - Móvil: 375px × 667px.
  - Tablet: 768px × 1024px.
  - Escritorio: 1280px × 800px.
- **Regla:** El contenedor maestro (`.vibe-workstation`) y las tarjetas de los decks deben ajustarse al 100% del ancho con `box-sizing: border-box`.

### Criterio 2: Soporte Dual de Tema (Modo Claro ☀️ / Modo Oscuro 🌙)
- **Principio:** La interfaz debe ser cómoda tanto en sesiones de producción nocturnas (Modo Oscuro) como diurnas (Modo Claro).
- **Comportamiento:**
  - El botón conmutador `#btn-theme-toggle` alterna entre `data-theme="dark"` y `data-theme="light"`.
  - La preferencia se persiste en `localStorage` respetando la configuración del sistema operativo (`prefers-color-scheme`).
  - El visualizador de forma de onda canvas adapta dinámicamente sus colores de fondo y trazo al conmutar el tema sin necesidad de recargar la página.

### Criterio 3: Jerarquía Moderna de Componentes (A/B Dual Deck)
- **Principio:** Diseño limpio inspirado en patrones modernos de aplicaciones React / Linear / Vercel:
  - **DECK 1 (Arriba):** Línea Base Soberana (`100% Control DG`), acento esmeralda (`#10b981`).
  - **DECK 2 (Abajo):** Challenger AI Single (`80% Autonomía Studio`), acento cian (`#38bdf8`).
  - **Consola Vibe (Inferior):** Área acoplada de co-pilotaje con selector de agentes y botón de copiado rápido.

### Criterio 4: Accesibilidad Esencial (WCAG 2.1 AA Pragmático)
- **Principio:** Respeto por la tipografía, legibilidad y navegación accesible.
- **Pautas:**
  - Estructura semántica con `<main id="main-workstation">`, `<header role="banner">` y `<section aria-labelledby="...">`.
  - Todos los botones interactivos cuentan con texto visible o atributo `aria-label` descriptivo.
  - El foco por teclado es claramente visible (`:focus-visible`).
  - Ratios de contraste suficientes en ambas paletas de color.

### Criterio 5: Flujo de Co-pilotaje (Vibe Coding Loop)
- **Principio:** La interfaz es el vehículo para redactar y exportar prompts estructurados hacia Antigravity.
- **Garantías:**
  - Al hacer clic en cualquier sección o acto, la consola se sincroniza instantáneamente con el tiempo, nombre y código de esa sección.
  - La caja de texto permite al DG verter su visión en lenguaje natural libremente.
  - El botón **[Copiar Prompt]** ofrece retroalimentación visual inmediata (`✅ ¡PROMPT COPIADO!`) al copiar al portapapeles.

### Criterio 6: Vibe Console Intelligence & Despacho XML Multi-Rol (<vibe_dispatch>)
- **Principio:** Innovación de enrutamiento agéntico y separación de instrucciones por nivel de abstracción (L1 Estrategia, L2 Ejecución, L3 Auditoría).
- **Características:**
  - **Inputs Dedicados por Rol:** Entradas de texto individuales para cada agente activo (`DM`, `CP`, `SD`, `AE`, `QA`), permitiendo afinar directivas específicas sin mezclar dominios técnicos.
  - **Estructura de Datos XML Pura:** Generación en tiempo real del bloque `<vibe_dispatch version="1.0">` con tags de metadatos, ancla de reloj a 16avos, directivas agénticas y stack de herramientas de código abierto.
  - **Stack de Audio de Código Abierto Integrado:**
    - DAW: LMMS (proyectos `.mmp` XML) y Ardour.
    - Síntesis: Surge XT (Wavetable + FM, matriz de 12 LFOs) y Cardinal (modular DISTRHO / VCV Rack).
    - DSP y Master: Chowdhury DSP (ChowTapeModel, Chow Centaur) y Airwindows (Slew, Density), con estricto apego a EBU R128 (-14.0 LUFS ± 0.5, True Peak < -1.0 dBTP).
  - **Transiciones Fluidas:**
    - Espina rítmica continua (`playCountdownTick`) sin interrupción a través de los límites de acto.
    - Rampa de automatización con lookahead (redoble accelerando y barrido de filtro).
    - Respiración de tensión de 1 compás (caída limpia a silencio sin colisión de fase antes del drop).
  - **Purga de Inspiraciones Literales:** Eliminación total de nombres comerciales de artistas en interfaz, badges y datos, reemplazados por terminología técnica y funcional de diseño sonoro.

---

## 3. Automatización de Pruebas con Vibium

Para no depender de verificaciones manuales propensas a error, la suite se valida mediante **Vibium** (el framework AI-native de automatización de navegadores basado en WebDriver BiDi):

```bash
# Ejecutar verificación completa de calidad y márgenes
npm run test:quality

# O directamente:
npm run test:vibium
```

La suite evalúa automáticamente los criterios en navegadores reales sin intervención humana, emitiendo un reporte conciso de aprobación o alerta.
