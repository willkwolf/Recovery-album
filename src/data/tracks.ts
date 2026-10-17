import type { Track, SongSection } from './schema';

export const SONG_SECTIONS: SongSection[] = [
  {
    id: 'sec-01',
    tag: '[SECCIÓN 01 // FORK SUSPENSE LOOP (EXTENDED)]',
    name: 'Bucle de Suspenso Fork (0:00 - 1:15)',
    startTime: '00:00',
    endTime: '01:15',
    startSec: 0,
    endSec: 75,
    bpm: 110,
    keyCenter: 'C menor (disonancia F# persistente)',
    instruments: ['Sawtooth Sub-Bass', 'TR-909 Kick', 'Rimshot Panning', 'Polyrhythmic Hi-Hats'],
    description: 'El bucle original de Fork extendido durante más de un minuto completo. Genera una atmósfera hipnótica y tensa de contención en el sandbox sin apresurarse ni saturar.',
    strudelCode: `// SECCIÓN 01 (00:00 - 01:15): Bucle de Suspenso Fork
stack(
  note("<[c2,g2] [eb2,bb2] [f2,c3] [fs2,c3]>".slow(2))
    .s("sawtooth").lpf(1100).gain(0.8),
  note("c4 eb4 g4 fs4 bb4 d5 c5")
    .fast(1.75).s("sine").gain(0.4)
    .delay(0.35).delaytime(0.333).delayfeedback(0.55),
  s("bd:3 [~ bd:1] ~ [bd:3 ~]").bank("RolandTR909").gain(0.8),
  s("rim*5").gain(0.6).pan(sine.range(0.2, 0.8).slow(3)),
  s("[hh*4, hh*8]").gain(perlin.range(0.2, 0.65)).hpf(3000)
)`
  },
  {
    id: 'sec-02',
    tag: '[SECCIÓN 02 // CABALLO DE TROYA (ARPEGIOS BRILLANTES)]',
    name: 'Falso Optimismo Crystalline (1:15 - 2:00)',
    startTime: '01:15',
    endTime: '02:00',
    startSec: 75,
    endSec: 120,
    bpm: 110,
    keyCenter: 'C menor modulando a E/B brillante',
    instruments: ['Fork Bassline', 'Crystalline Triangle Chimes', 'Delay Feedback', 'TR-909 Groove'],
    description: 'Sobre la base del bucle Fork, se introducen gradualmente arpegios cristalinos en registro agudo. Un tono engañosamente positivo que actúa como Caballo de Troya mientras el troyano corrompe sectores de memoria.',
    strudelCode: `// SECCIÓN 02 (01:15 - 02:00): Caballo de Troya (Falso Optimismo)
stack(
  note("<[c2,g2] [eb2,bb2] [f2,c3] [fs2,c3]>".slow(2))
    .s("sawtooth").lpf(1200).gain(0.8),
  // Arpegio brillante engañoso (Caballo de Troya)
  note("<[c5,e5,g5,b5] [d5,fs5,a5,cs6] [eb5,g5,bb5,d6]>")
    .s("triangle").fast(2).delay(0.4).delaytime(0.125).delayfeedback(0.55).gain(0.45),
  s("bd:3 [~ bd:1] ~ [bd:3 ~]").bank("RolandTR909").gain(0.8),
  s("[hh*4, hh*8]").gain(perlin.range(0.25, 0.7)).hpf(3000)
)`
  },
  {
    id: 'sec-03',
    tag: '[SECCIÓN 03 // MARCHA TOTALITARIA & INFECCIÓN GLITCH]',
    name: 'Disciplina Imperial & Dither (2:00 - 2:45)',
    startTime: '02:00',
    endTime: '02:45',
    startSec: 120,
    endSec: 165,
    bpm: 120,
    keyCenter: 'C stabs con modulación marcial',
    instruments: ['TR-808 Snare Roll', 'Imperial Stabs', 'Bitcrush Distortion Bursts'],
    description: 'La cadencia se transforma en una marcha militar uniforme y disciplinada. Bloques armónicos rígidos que comienzan a sufrir micro-desconexiones, ráfagas de dither y degradación glitch al entrar en cuarentena.',
    strudelCode: `// SECCIÓN 03 (02:00 - 02:45): Marcha Totalitaria & Glitch
stack(
  s("sd*4").bank("RolandTR808").gain(0.9),
  s("bd [~ bd] bd [bd ~]").gain(0.85),
  note("<c3 eb3 g3 c4>*4")
    .s("sawtooth").distort(sine.range(0.1, 0.85).slow(4)).lpf(2000)
)`
  },
  {
    id: 'sec-04',
    tag: '[SECCIÓN 04 // FLATLINE & HANDSHAKE 1990s]',
    name: 'Supresión de Graves & Tono Modem/Fax (2:45 - 3:25)',
    startTime: '02:45',
    endTime: '03:25',
    startSec: 165,
    endSec: 205,
    bpm: 110,
    keyCenter: 'C6 estático (1046 Hz)',
    instruments: ['Sine EKG Vital Beep', '56k Modem Carrier Chirp', 'Zero Sub-Bass'],
    description: 'El bajo desaparece de golpe. Queda únicamente un pulso de signos vitales (beep monótono) y un guiño analógico breve a la conexión dial-up / fax de los 90s, indicando que el troyano está incapacitado en el sandbox.',
    strudelCode: `// SECCIÓN 04 (02:45 - 03:25): Flatline & Handshake 1990s
stack(
  // Signos vitales monotono (sin bajo)
  note("c6*8").s("sine").gain(0.7).decay(0.04),
  // Guiño de modem dial-up 1990s
  note("<fs6 cs7 b6 e7>").s("square").fast(8).gain(0.4).lpf(3500)
)`
  },
  {
    id: 'sec-05',
    tag: '[SECCIÓN 05 // SOLO ROCK INVERTIDO (SANTANA)]',
    name: 'Black Magic Woman al Revés (3:25 - 4:05)',
    startTime: '03:25',
    endTime: '04:05',
    startSec: 205,
    endSec: 245,
    bpm: 110,
    keyCenter: 'D menor blues invertido',
    instruments: ['Overdrive Electric Guitar', 'Delay / Room Reverb', 'Sin Base Rítmica'],
    description: 'Entrada solitaria de guitarra eléctrica rock con overdrive y retardo, interpretando las frases de Black Magic Woman de Santana de forma invertida (al revés). Sin base percusiva al inicio, flotando en el vacío del sandbox.',
    strudelCode: `// SECCIÓN 05 (03:25 - 04:05): Solo Santana Invertido (Sin Base)
stack(
  note("<[d5,a4,f4] [c5,g4,e4] [bb4,f4,d4] [a4,e4,cs4]>")
    .s("sawtooth").distort(0.7).gain(0.85)
    .delay(0.35).delayfeedback(0.6)
)`
  },
  {
    id: 'sec-06',
    tag: '[SECCIÓN 06 // RAVE DE RECICLAJE & COMBATE TECHNO]',
    name: 'Catarsis Rave vs. Totalitarismo (4:05 - 5:15)',
    startTime: '04:05',
    endTime: '05:15',
    startSec: 245,
    endSec: 315,
    bpm: 138,
    keyCenter: 'D menor Acid 303',
    instruments: ['Pounding 4/4 Techno Kick', 'Syncopated Off-beat Hats', 'Acid 303 Resonant Bass', 'Distorted Claps'],
    description: 'El proceso de reciclaje del troyano: una base caótica de Techno Rave a 138 BPM desmantela la marcha totalitaria en una lucha sónica liberadora antes del cierre.',
    strudelCode: `// SECCIÓN 06 (04:05 - 05:15): Rave de Reciclaje
stack(
  s("bd*4").bank("RolandTR909").gain(1.0),
  s("~ [cp,sd:2] ~ [cp,sd:2]").gain(0.85),
  s("hh*16").gain("<0.3 0.7 0.5 0.9>*4").hpf(4000),
  note("d2 [d2 f2] g2 [bb1 c2] cs2 d2")
    .s("sawtooth").lpf(sine.range(400, 3400).slow(2)).resonance(18).gain(0.85),
  note("<[d5,a4,f4] [c5,g4,e4]>").s("sawtooth").distort(0.6).gain(0.5)
)`
  }
];

export const TRACKS: Track[] = [
  {
    id: 'track-01-backup',
    number: 1,
    title: 'Backup (Live Timeline Edition)',
    medium: 'Música Digital / Electrónica Algorítmica',
    status: 'candidate',
    duration: '05:15',
    summary: 'Composición continua en vivo de 05:15 minutos estructurada en 6 secciones temporales interactivas. Modelado del Caballo de Troya en sandbox: bucle de suspenso Fork de 1+ minuto, arpegios brillantes, marcha imperial totalitaria, flatline analógico de los 90s, solo invertido de Santana y explosión Techno Rave de reciclaje.',
    humanApproval: {
      approved: true,
      signoff: 'Human Creator',
      date: '2026-10-17',
      scope: 'timeline-song-structure-and-suno-interface',
      notes: 'Aprobada la composición como una canción continua en vivo con línea de tiempo estilo Suno (6 secciones inspeccionables, loop de Fork extendido a más de 1 minuto y transiciones coherentes).'
    },
    publicNotes: [
      'Estructura de canción continua: 6 secciones temporales con duraciones reales y marcadores de edición.',
      'El bucle Fork inicial se desarrolla con calma durante más de 1 minuto completo (00:00 - 01:15).',
      'Línea de tiempo interactiva estilo Suno: haz clic en cualquier sección para saltar, activar bucle de inspección o copiar la referencia exacta para solicitar cambios a Antigravity.'
    ],
    sections: SONG_SECTIONS,
    variations: [
      {
        id: 'full-song-timeline',
        name: 'Canción Completa (Timeline Continuo de 05:15)',
        concept: 'Progresión lineal de 6 secciones sin popurrí',
        tension: 'suspenso ↔ marcha imperial ↔ flatline ↔ solo invertido ↔ techno rave',
        runtime: 'strudel',
        bpm: 110,
        description: 'La canción íntegra en vivo. Cada sección evoluciona en su propio tiempo respetando el minuto completo de Fork.',
        code: `// CANCIÓN COMPLETA: Backup (Live Timeline Edition - 05:15)
// Cadena secuencial de las 6 secciones temporales
cat(
  // 00:00 - 01:15: Fork Suspense Loop (1+ minuto)
  stack(
    note("<[c2,g2] [eb2,bb2] [f2,c3] [fs2,c3]>".slow(2)).s("sawtooth").lpf(1100),
    note("c4 eb4 g4 fs4 bb4 d5 c5").fast(1.75).s("sine").gain(0.4),
    s("bd:3 [~ bd:1] ~ [bd:3 ~]").gain(0.8),
    s("rim*5").gain(0.6),
    s("[hh*4, hh*8]").gain(0.5).hpf(3000)
  ).slow(4),

  // 01:15 - 02:00: Caballo de Troya (Arpegios Brillantes)
  stack(
    note("<[c2,g2] [eb2,bb2] [fs2,c3]>").s("sawtooth").lpf(1200),
    note("<[c5,e5,g5,b5] [d5,fs5,a5,cs6]>").s("triangle").fast(2).gain(0.45),
    s("bd:3 [~ bd:1] ~ bd:3").gain(0.8),
    s("[hh*4, hh*8]").gain(0.5).hpf(3000)
  ).slow(4),

  // 02:00 - 02:45: Marcha Totalitaria
  stack(
    s("sd*4").gain(0.9),
    s("bd [~ bd] bd [bd ~]").gain(0.85),
    note("<c3 eb3 g3 c4>*4").s("sawtooth").distort(0.6).lpf(1900)
  ).slow(4),

  // 02:45 - 03:25: Flatline & Handshake 1990s
  stack(
    note("c6*8").s("sine").gain(0.7).decay(0.04),
    note("<fs6 cs7 b6 e7>").s("square").fast(8).gain(0.4).lpf(3500)
  ).slow(4),

  // 03:25 - 04:05: Solo Rock Invertido (Santana)
  stack(
    note("<[d5,a4,f4] [c5,g4,e4] [bb4,f4,d4] [a4,e4,cs4]>")
      .s("sawtooth").distort(0.7).gain(0.85).delay(0.35)
  ).slow(4),

  // 04:05 - 05:15: Rave de Reciclaje
  stack(
    s("bd*4").gain(1.0),
    s("~ [cp,sd:2] ~ [cp,sd:2]").gain(0.85),
    s("hh*16").gain(0.65).hpf(4000),
    note("d2 [d2 f2] g2 [bb1 c2] cs2 d2").s("sawtooth").lpf(3000).resonance(18)
  ).slow(4)
)`
      }
    ]
  }
];
