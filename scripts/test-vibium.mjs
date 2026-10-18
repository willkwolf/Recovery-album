#!/usr/bin/env node
/**
 * scripts/test-vibium.mjs
 * 
 * Suite de Verificación E2E con Vibium (WebDriver BiDi / Chrome for Testing).
 * Valida:
 * 1. Márgenes e integridad de desbordamiento horizontal en mobile, tablet y desktop.
 * 2. Alternancia de temas (Modo Claro ☀️ / Modo Oscuro 🌙) y variables CSS.
 * 3. Jerarquía moderna de componentes (Decks A/B + Consola Vibe Coding).
 * 4. Árbol de accesibilidad (a11y-tree) y semántica WCAG AA.
 * 5. Flujo interactivo de co-pilotaje y generación de prompt.
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { browser } = require('vibium');

const ROOT_DIR = process.cwd();
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Simple static server for dist/
function startStaticServer(port = 43210) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let reqPath = req.url.split('?')[0];
      if (reqPath.startsWith('/Recovery-album')) {
        reqPath = reqPath.replace(/^\/Recovery-album/, '');
      }
      if (reqPath === '' || reqPath === '/') {
        reqPath = '/index.html';
      }

      let filePath = path.join(DIST_DIR, reqPath);
      if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
        filePath += '.html';
      } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
        filePath = path.join(filePath, 'index.html');
      }

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const mimeTypes = {
        '.html': 'text/html; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.js': 'application/javascript; charset=utf-8',
        '.json': 'application/json; charset=utf-8',
        '.svg': 'image/svg+xml'
      };

      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    });

    server.listen(port, () => resolve(server));
    server.on('error', reject);
  });
}

// Helper to evaluate JS function in page via Vibium
async function evalInPage(page, fn) {
  const code = `(${fn.toString()})()`;
  return await page.evaluate(code);
}

async function runVibiumTests() {
  console.log('========================================================');
  console.log('🚀 RECOVERY // VIBIUM E2E VERIFICATION SUITE');
  console.log('========================================================');

  const PORT = 43210;
  let server = null;
  let b = null;
  let passedTests = 0;
  let failedTests = 0;

  function assert(condition, testName) {
    if (condition) {
      console.log(`  [PASS] ${testName}`);
      passedTests++;
    } else {
      console.error(`  [FAIL] ${testName}`);
      failedTests++;
    }
  }

  try {
    console.log('📦 1. Iniciando servidor estático local para dist/...');
    server = await startStaticServer(PORT);
    console.log(`✅ Servidor activo en http://localhost:${PORT}`);

    console.log('🌐 2. Inicializando navegador Vibium (WebDriver BiDi)...');
    b = await browser.start({ headless: true });
    const page = await b.page();
    console.log('✅ Navegador Vibium listo.');

    const targetUrl = `http://localhost:${PORT}/`;
    console.log(`📍 3. Navegando a ${targetUrl}...`);
    await page.go(targetUrl);
    await page.wait(500);

    // TEST SUITE 1: Verificación de Márgenes e Integridad Responsive
    console.log('\n--- [SUITE 1] INTEGRIDAD DE MÁRGENES Y PROTECCIÓN DE OVERFLOW ---');
    const viewports = [
      { name: 'Mobile (375x667)', width: 375, height: 667 },
      { name: 'Tablet (768x1024)', width: 768, height: 1024 },
      { name: 'Desktop (1280x800)', width: 1280, height: 800 }
    ];

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.wait(150);

      const overflowData = await evalInPage(page, () => {
        const docWidth = document.documentElement.clientWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const mainWorkstation = document.getElementById('main-workstation');
        const containerScrollWidth = mainWorkstation ? mainWorkstation.scrollWidth : 0;
        const containerClientWidth = mainWorkstation ? mainWorkstation.clientWidth : 0;
        return {
          docWidth,
          scrollWidth,
          hasWindowOverflow: scrollWidth > docWidth + 2,
          containerHasOverflow: containerScrollWidth > containerClientWidth + 2
        };
      });

      assert(overflowData && !overflowData.hasWindowOverflow, `${vp.name}: Sin desbordamiento horizontal global (scrollWidth <= docWidth)`);
      assert(overflowData && !overflowData.containerHasOverflow, `${vp.name}: Contenedor de componentes no rompe márgenes`);
    }

    // Reset viewport to desktop
    await page.setViewport({ width: 1200, height: 800 });
    await page.wait(150);

    // TEST SUITE 2: Modo Claro / Modo Oscuro (Theme Switching)
    console.log('\n--- [SUITE 2] SOPORTE Y ALTERNANCIA DE MODO CLARO / OSCURO ---');
    const initialTheme = await evalInPage(page, () => document.documentElement.getAttribute('data-theme'));
    assert(initialTheme === 'dark' || initialTheme === 'light', `Tema inicial detectado: '${initialTheme}'`);

    // Toggle theme to light
    const themeBtn = await page.find('#btn-theme-toggle');
    assert(themeBtn !== null, 'Botón de cambio de tema (#btn-theme-toggle) encontrado en el header');
    await themeBtn.click();
    await page.wait(200);

    const themeAfterFirstClick = await evalInPage(page, () => {
      const themeAttr = document.documentElement.getAttribute('data-theme');
      const bg = window.getComputedStyle(document.body).backgroundColor;
      const themeText = document.getElementById('theme-label')?.textContent?.trim();
      return { themeAttr, bg, themeText };
    });

    assert(themeAfterFirstClick.themeAttr === 'light', "Conmutación exitosa a 'light' mode");
    assert(themeAfterFirstClick.themeText === 'Claro', "Etiqueta visual del botón actualizada a 'Claro'");

    // Toggle theme back to dark
    await themeBtn.click();
    await page.wait(200);

    const themeAfterSecondClick = await evalInPage(page, () => {
      const themeAttr = document.documentElement.getAttribute('data-theme');
      const themeText = document.getElementById('theme-label')?.textContent?.trim();
      return { themeAttr, themeText };
    });

    assert(themeAfterSecondClick.themeAttr === 'dark', "Conmutación exitosa de retorno a 'dark' mode");
    assert(themeAfterSecondClick.themeText === 'Oscuro', "Etiqueta visual del botón actualizada a 'Oscuro'");

    // TEST SUITE 3: Jerarquía Moderna de Componentes
    console.log('\n--- [SUITE 3] JERARQUÍA DE COMPONENTES MODERNOS TIPO REACT ---');
    const componentsPresence = await evalInPage(page, () => {
      const deck0 = document.getElementById('deck-baseline-card');
      const deck1 = document.getElementById('deck-challenger-card');
      const consoleCard = document.querySelector('.vibe-console-card');
      const baselinePlayBtn = document.getElementById('btn-play-0');
      const challengerPlayBtn = document.getElementById('btn-play-1');
      const baselineSections = document.querySelectorAll('#sections-strip-0 .sec-btn').length;
      const challengerSections = document.querySelectorAll('#sections-strip-1 .sec-btn').length;
      const crewChipsCount = document.querySelectorAll('.chip-crew').length;

      return {
        hasDeck0: !!deck0,
        hasDeck1: !!deck1,
        hasConsole: !!consoleCard,
        hasBaselinePlay: !!baselinePlayBtn,
        hasChallengerPlay: !!challengerPlayBtn,
        baselineSections,
        challengerSections,
        crewChipsCount
      };
    });

    assert(componentsPresence.hasDeck0, 'Deck 1 (Baseline // 100% DG Ground Truth) presente');
    assert(componentsPresence.hasDeck1, 'Deck 2 (Challenger // 80% AI Crew Single) presente');
    assert(componentsPresence.hasConsole, 'Vibe Console Docked presente');
    assert(componentsPresence.hasBaselinePlay && componentsPresence.hasChallengerPlay, 'Botones de reproducción independientes para ambos Decks');
    assert(componentsPresence.baselineSections === 5, 'Deck 1 contiene exactamente sus 5 secciones');
    assert(componentsPresence.challengerSections === 5, 'Deck 2 contiene exactamente sus 5 actos de single');
    assert(componentsPresence.crewChipsCount === 5, 'Selector de enrutamiento con los 5 roles agénticos (DM, CP, SD, AE, QA)');

    // TEST SUITE 4: Accesibilidad (a11y-tree) y Semántica WCAG AA
    console.log('\n--- [SUITE 4] ACCESIBILIDAD Y SEMÁNTICA WCAG AA ---');
    const a11y = await page.a11yTree();
    assert(a11y !== null, 'Árbol de accesibilidad generado correctamente por Vibium');

    const accessibilityChecks = await evalInPage(page, () => {
      const mainEl = document.querySelector('main');
      const headerEl = document.querySelector('header[role="banner"]');
      const buttonsWithoutLabel = Array.from(document.querySelectorAll('button')).filter(
        b => !b.getAttribute('aria-label') && !b.textContent.trim()
      );
      const codeBlocks = document.querySelectorAll('pre');
      return {
        hasMainRole: !!mainEl,
        hasHeaderRole: !!headerEl,
        unlabeledButtonsCount: buttonsWithoutLabel.length,
        hasAccessibleCodeBlocks: codeBlocks.length > 0
      };
    });

    assert(accessibilityChecks.hasMainRole, 'Elemento principal semántico <main> presente');
    assert(accessibilityChecks.hasHeaderRole, 'Encabezado con rol banner presente');
    assert(accessibilityChecks.unlabeledButtonsCount === 0, 'Todos los botones cuentan con texto visible o aria-label accesible');

    // TEST SUITE 5: Flujo Interactivo de Co-Pilotaje y Vibe Prompting
    console.log('\n--- [SUITE 5] FLUJO INTERACTIVO DE CO-PILOTAJE & GENERACIÓN DE PROMPTS ---');

    // Select Act 2 on Challenger (Breakbeat Linkin Park)
    const act2Btn = await page.find('[data-deck="1"][data-sec-idx="1"]');
    assert(act2Btn !== null, 'Botón de Acto 2 en Challenger (#sections-strip-1) encontrado');
    await act2Btn.click();
    await page.wait(150);

    // Type in Director's Note
    const textarea = await page.find('#vibe-director-note');
    assert(textarea !== null, 'Textarea del Director General (#vibe-director-note) accesible');
    await textarea.type('Añadir redoble accelerando antes de la entrada del bajo.');
    await page.wait(150);

    const promptValidation = await evalInPage(page, () => {
      const output = document.getElementById('prompt-preview-output')?.textContent || '';
      const containsDeck2 = output.includes('DECK 2');
      const containsSecName = output.includes('Breakbeat') || output.includes('SECCIÓN 02');
      const containsNote = output.includes('Añadir redoble accelerando');
      const containsAnchor = output.includes('Reloj de Cuenta Regresiva');
      const containsMandate = output.includes('Mandato para el Crew');
      return {
        containsDeck2,
        containsSecName,
        containsNote,
        containsAnchor,
        containsMandate,
        fullOutputLength: output.length
      };
    });

    assert(promptValidation.containsDeck2, 'Prompt sincronizado con DECK 2 (Challenger Single)');
    assert(promptValidation.containsSecName, 'Prompt incluye la sección activa seleccionada');
    assert(promptValidation.containsNote, 'Prompt incluye la instrucción en lenguaje natural del DG');
    assert(promptValidation.containsAnchor, 'Prompt incluye el ancla vibe del Reloj de Cuenta Regresiva');
    assert(promptValidation.containsMandate, 'Prompt incluye el mandato técnico de estudio para el Crew');

    // Click Copy Prompt Button
    const copyBtn = await page.find('#btn-copy-vibe-prompt');
    assert(copyBtn !== null, 'Botón de 1-clic copiar prompt (#btn-copy-vibe-prompt) accesible');
    await copyBtn.click();
    await page.wait(100);

    const copyBtnState = await evalInPage(page, () => {
      const text = document.getElementById('btn-copy-text')?.textContent || '';
      return text.includes('COPIADO') || text.includes('✅');
    });
    assert(copyBtnState, 'Feedback visual instantáneo al copiar prompt al portapapeles');

  } catch (err) {
    console.error('❌ Error durante la ejecución de pruebas Vibium:', err);
    failedTests++;
  } finally {
    if (b) {
      console.log('\n🧹 Cerrando sesión de Vibium...');
      await b.stop();
    }
    if (server) {
      console.log('🧹 Deteniendo servidor estático local...');
      server.close();
    }
  }

  console.log('\n========================================================');
  console.log(`RESUMEN VIBIUM: ${passedTests} PASADOS, ${failedTests} FALLADOS`);
  console.log('========================================================');

  if (failedTests > 0) {
    process.exit(1);
  } else {
    console.log('🎉 TODAS LAS VERIFICACIONES DE VIBIUM PASARON EXITOSAMENTE.');
    process.exit(0);
  }
}

runVibiumTests();
