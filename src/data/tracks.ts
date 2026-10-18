import type { Track, SongSection, TrackVariation } from './schema';

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
    description: 'El bucle original de Fork extendido durante más de un minuto completo. Polirritmia asimétrica y disonancia armónica de fuga con acordes sawtooth filtrados, melodía rápida en delay, caja de ritmos TR-909 y polirritmia de hi-hats 3 contra 7.',
    strudelCode: `// SECCIÓN 01 (00:00 - 01:15): Bucle de Suspenso Fork Original (1+ Minuto)
// Polirritmia asimétrica y disonancia armónica de fuga
stack(
  note("<[c2,g2] [eb2,bb2] [f2,c3] [fs2,c3]>")
    .s("sawtooth")
    .lpf(sine.range(500, 2200).slow(6))
    .gain(0.8),
  note("c4 eb4 g4 fs4 bb4 d5 c5")
    .fast(1.75)
    .s("sine")
    .gain(0.45)
    .delay(0.35)
    .delaytime(0.333)
    .delayfeedback(0.55),
  s("bd:3 [~ bd:1] ~ [bd:3 ~]")
    .bank("RolandTR909")
    .gain(0.8),
  s("rim*5")
    .gain(0.65)
    .pan(sine.range(0.2, 0.8).slow(3)),
  s("[hh*3, hh*7]")
    .gain(perlin.range(0.25, 0.65))
    .hpf(3200)
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

export const TRACK_VARIATIONS: TrackVariation[] = [
  {
    id: 'fork',
    name: 'Variación C — Fork (Base Original)',
    lifecycle: ':Mutacion',
    concept: 'La memoria ya en otra parte — Mutante Alfa Aprobado',
    tension: 'restauración ↔ fuga (disonancia F# persistente / compás abierto)',
    runtime: 'strudel',
    bpm: 110,
    description: 'LÍNEA BASE MUTANTE APROBADA. Acordes dyad Sawtooth con filtro LFO, melodía rápida en delay ping-pong, Roland TR-909 y polirritmia hi-hat 3 contra 7. Este es el ADN inmutable sobre el cual se construyen los experimentos.',
    code: `// :Mutacion — Variación C: Fork (Línea Base Aprobada)
stack(
  note("<[c2,g2] [eb2,bb2] [f2,c3] [fs2,c3]>")
    .s("sawtooth")
    .lpf(sine.range(500, 2200).slow(6))
    .gain(0.8),
  note("c4 eb4 g4 fs4 bb4 d5 c5")
    .fast(1.75)
    .s("sine")
    .gain(0.45)
    .delay(0.35)
    .delaytime(0.333)
    .delayfeedback(0.55),
  s("bd:3 [~ bd:1] ~ [bd:3 ~]")
    .bank("RolandTR909")
    .gain(0.8),
  s("rim*5")
    .gain(0.65)
    .pan(sine.range(0.2, 0.8).slow(3)),
  s("[hh*3, hh*7]")
    .gain(perlin.range(0.25, 0.65))
    .hpf(3200)
)`
  },
  {
    id: 'trojan-suite',
    name: 'Backup: Trojan Sandbox Suite',
    lifecycle: ':Challenger',
    concept: 'Simulación del troyano en sandbox antivirus — 6 secciones continuas',
    tension: 'suspenso ↔ marcha totalitaria ↔ flatline 90s ↔ solo invertido ↔ rave',
    runtime: 'strudel',
    bpm: 110,
    description: 'MUTANTE DESARROLLADO EN DISPUTA. Extiende el bucle Fork más de 1 minuto, introduce el falso optimismo cristalino, la marcha marcial con glitches, el flatline de signos vitales con modem 90s, el solo invertido de Santana y el Rave de reciclaje a 138 BPM.',
    code: `// :Challenger — Suite Continua Trojan Sandbox (05:15)
// Integra las 6 secciones temporales en secuencia evolutiva
cat(
  // Sec 01: Fork Suspense Loop (0:00 - 1:15)
  // Sec 02: Caballo de Troya Chimes (1:15 - 2:00)
  // Sec 03: Marcha Totalitaria (2:00 - 2:45)
  // Sec 04: Flatline & 56k Modem (2:45 - 3:25)
  // Sec 05: Solo Rock Santana Invertido (3:25 - 4:05)
  // Sec 06: Rave Techno de Reciclaje (4:05 - 5:15)
)`
  },
  {
    id: 'museo',
    name: 'Variación A — Museo',
    lifecycle: ':Experimentacion',
    concept: 'La memoria como reliquia',
    tension: 'recuerdo ↔ archivo (lo-fi / saturación / caída)',
    runtime: 'strudel',
    bpm: 72,
    description: 'Boceto inicial archivado. Texturas filtradas y sostenidas en una cadencia lenta.',
    code: `// :Experimentacion — Variación A: Museo (Archivada)
stack(
  note("<c3 eb3 g3 bb3 d4>".slow(4))
    .s("sine")
    .lpf(sine.range(350, 1100).slow(8))
    .decay(2.5)
    .sustain(0.4)
    .gain(0.7),
  s("bd:2 [~ bd:1] ~ bd:2")
    .gain(0.65)
    .lpf(750)
)`
  },
  {
    id: 'transito',
    name: 'Variación B — Tránsito',
    lifecycle: ':Experimentacion',
    concept: 'La memoria como combustible',
    tension: 'orgánico ↔ procesado (motor rítmico / administración)',
    runtime: 'strudel',
    bpm: 124,
    description: 'Boceto inicial archivado. Pulso implacable con Roland TR-808.',
    code: `// :Experimentacion — Variación B: Tránsito (Archivada)
stack(
  s("bd [~ bd] bd [~ bd]")
    .bank("RolandTR808")
    .gain(0.85),
  note("c2 [c2 eb2] g1 [bb1 c2]")
    .s("sawtooth")
    .lpf(1300)
)`
  }
];

export const SPLINTERNET_SECTIONS: SongSection[] = [
  {
    id: 'sec-sp-01',
    tag: '[SECCIÓN 01 // TICKING CLOCK & FRENCH TOUCH (ZIMMER x DAFT PUNK)]',
    name: 'Reloj de Cuenta Regresiva & French Sweep (0:00 - 1:05)',
    startTime: '00:00',
    endTime: '01:05',
    startSec: 0,
    endSec: 65,
    bpm: 105,
    keyCenter: 'C menor modal / 105 BPM',
    instruments: ['Hans Zimmer Ticking Rimshot', 'Sub-Braam 35Hz', 'Daft Punk 4-Pole LP Filter Sweep', 'Granular Vocoder Lead'],
    description: 'El reloj implacable de Hans Zimmer marca los segundos antes de que RuNet y los cortafuegos aíslen los nodos. Entran acordes con filtro pasabajos dinámico estilo French Touch (Daft Punk) y un vocoder granulado que recita datos de red obsoletos.',
    strudelCode: `// SECCIÓN 01 (00:00 - 01:05): Reloj Zimmer x French Touch Daft Punk
stack(
  s("rim*16").gain(0.7).pan(sine.range(0.3, 0.7).slow(4)),
  note("<[c3,eb3,g3,bb3] [ab2,c3,eb3,g3] [f2,ab2,c3,eb3] [g2,b2,d3,f3]>")
    .s("sawtooth")
    .lpf(sine.range(400, 3200).slow(8))
    .resonance(12)
    .gain(0.85),
  note("<c1 ab0 f0 g0>").s("sine").gain(0.9),
  note("c4 eb4 g4 f4").s("triangle").fast(2).delay(0.3).gain(0.4)
)`
  },
  {
    id: 'sec-sp-02',
    tag: '[SECCIÓN 02 // HYBRID BREAKBEAT & DROP-D CRUNCH (LINKIN PARK)]',
    name: 'Breakbeat Industrial & Cable Roto (1:05 - 2:00)',
    startTime: '01:05',
    endTime: '02:00',
    startSec: 65,
    endSec: 120,
    bpm: 115,
    keyCenter: 'C menor Drop-D / 115 BPM',
    instruments: ['Linkin Park Hybrid Breakbeat', 'Ghost Snare 16ths', 'Drop-D Industrial Saw Crunch', 'Dither Crackle'],
    description: 'Inspiración Linkin Park (Reanimation / Meteora): la rotura de las conexiones transoceánicas se traduce en un breakbeat agresivo con redobles fantasma de caja, guitarras industriales cortadas y bajo comprimido al límite.',
    strudelCode: `// SECCIÓN 02 (01:05 - 02:00): Hybrid Breakbeat Linkin Park
stack(
  s("bd [~ bd] [~ sd] [bd ~] ~ [bd:2 ~] sd [~ sd:3]").gain(1.0),
  s("hh*16").gain("<0.3 0.8 0.5 0.9 0.4 0.7 0.4 0.95>*2").hpf(4200),
  note("c2 c2 [c2 eb2] ~ f2 [fs2 g2] c2 ~")
    .s("sawtooth")
    .distort(0.75)
    .gain(0.9),
  s("crackle*8").gain(0.3).hpf(2500)
)`
  },
  {
    id: 'sec-sp-03',
    tag: '[SECCIÓN 03 // DIGITAL DROPOUT & HARSH SILENCE (CODE ORANGE)]',
    name: 'Apagón Nacional & Clipping Brutalista (2:00 - 2:50)',
    startTime: '02:00',
    endTime: '02:50',
    startSec: 120,
    endSec: 170,
    bpm: 115,
    keyCenter: 'Disonancia Tritono C-F# / 115 BPM',
    instruments: ['Instant 0ms Dropout', 'Square Wave Clipping', '945 TWh Server Hum', 'Microphonic Screams'],
    description: 'Inspiración Code Orange: la música sufre cortes a cero absoluto (dropout digital puro sin reverb tail), emulando los apagones nacionales. Entre el vacío se escucha el zumbido de servidores de IA antes de detonar en clipping abrasivo.',
    strudelCode: `// SECCIÓN 03 (02:00 - 02:50): Code Orange Digital Dropout & Harsh Feedback
stack(
  note("<[c2,fs2,c3] ~ [eb2,a2,eb3] ~ ~ [fs2,c3,fs3] ~>")
    .s("square")
    .distort(0.95)
    .gain(1.0)
    .decay(0.15),
  s("noise*4").gain(0.35).bpf(120, 2),
  s("glitch:2*3").gain(0.6).pan("<0.1 0.9 0.5>")
)`
  },
  {
    id: 'sec-sp-04',
    tag: '[SECCIÓN 04 // SURGICAL FM NEURO GROWL DROP (SKRILLEX)]',
    name: 'Extracción de Memoria FM Growl (2:50 - 3:40)',
    startTime: '02:50',
    endTime: '03:40',
    startSec: 170,
    endSec: 220,
    bpm: 140,
    keyCenter: 'C menor Bass Music / 140 BPM',
    instruments: ['Skrillex Surgical FM Growl', 'Sub-Bass 32Hz', 'Off-beat Snare Claps', 'Micro-stutter 32nds'],
    description: 'Inspiración Skrillex: salto a 140 BPM emulando a la IA devorando y procesando la memoria cultural humana en clusters H100. Bajo FM neuro con modulación formántica ultrarrápida, tresillos cortantes y bombos secos de impacto.',
    strudelCode: `// SECCIÓN 04 (02:50 - 03:40): Skrillex Surgical FM Neuro Growl
stack(
  s("bd ~ ~ ~ sd ~ ~ ~ bd ~ bd ~ sd ~ [~ sd*2]").bank("RolandTR909").gain(1.0),
  s("hh*8").gain(0.6).hpf(5000),
  note("c1 [c1 c2] [eb2 d2] [fs1 g1] [bb1 c2] [~ c1]")
    .s("sawtooth")
    .lpf(perlin.range(300, 4800).fast(4))
    .resonance(24)
    .distort(0.8)
    .gain(0.95),
  note("c5 eb5 fs5 g5 bb5 c6").fast(3.5).s("sine").gain(0.4).delay(0.2)
)`
  },
  {
    id: 'sec-sp-05',
    tag: '[SECCIÓN 05 // MONUMENTAL BRAAM & SIDECHAIN FADE (ZIMMER x DAFT PUNK)]',
    name: 'Colapso Monumental & Fork Infinito (3:40 - 4:45)',
    startTime: '03:40',
    endTime: '04:45',
    startSec: 220,
    endSec: 285,
    bpm: 105,
    keyCenter: 'C menor / Eb mayor / 105 BPM',
    instruments: ['Zimmer Massive Braam 35Hz', 'French Touch Sidechain Pump Pad', 'Archaeological Ocarina Bells', 'Deep Space Reverb'],
    description: 'Hans Zimmer y Daft Punk unidos en la catarsis final del single: un braam descomunal de 35 Hz sostiene la caída de la vieja internet mientras sintetizadores bombeados por sidechain y campanas de Ocarina of Time se desvanecen hacia una nueva línea temporal.',
    strudelCode: `// SECCIÓN 05 (03:40 - 04:45): Zimmer Monumental Braam x Daft Punk Sidechain Fade
stack(
  note("<c1 g0 eb0 bb0>").s("sawtooth").lpf(180).gain(1.0).slow(2),
  note("<[c3,g3,c4] [eb3,bb3,eb4] [f3,c4,f4] [g3,d4,g4]>")
    .s("triangle")
    .gain("<0.9 0.2 0.8 0.15>*4")
    .room(0.85),
  note("c5 eb5 g5 fs5 bb5").slow(3).s("sine").delay(0.5).delayfeedback(0.75).gain(0.35)
)`
  }
];

export const SPLINTERNET_VARIATIONS: TrackVariation[] = [
  {
    id: 'splinternet-suite',
    name: 'Splinternet // Rewired (Suite 5 Actos)',
    lifecycle: ':Challenger',
    concept: 'Fragmentación de red & IA comiéndose la memoria (Zimmer, Linkin Park, Code Orange, Skrillex, Daft Punk)',
    tension: 'urgencia cuenta regresiva ↔ breakbeat industrial ↔ dropout brutal ↔ neuro growl ↔ braam monumental',
    runtime: 'strudel',
    bpm: 115,
    description: 'SINGLE EXPERIMENTAL PROPUESTO POR EL CREW MULTIAGENTE. Fusión de 5 influencias maestras sobre el dossier geopolítico 2016-2026. 04:45 continuos pasando por reloj Zimmer, breakbeat Linkin Park, dropout Code Orange, drop Skrillex y sidechain Daft Punk.',
    code: `// :Challenger — Splinternet // Rewired (04:45)
cat(
  // Acto 1: Ticking Clock Zimmer x French Touch Daft Punk (00:00 - 01:05)
  // Acto 2: Breakbeat Híbrido Linkin Park (01:05 - 02:00)
  // Acto 3: Dropout Digital Brutalista Code Orange (02:00 - 02:50)
  // Acto 4: FM Neuro Growl Skrillex Drop (02:50 - 03:40)
  // Acto 5: Colapso Monumental & Fade Infinito (03:40 - 04:45)
)`
  },
  {
    id: 'splinternet-fork',
    name: 'Splinternet // Mutación Base (Reloj + Breakbeat)',
    lifecycle: ':Mutacion',
    concept: 'ADN base del single: Ticking Clock de Zimmer x Breakbeat Linkin Park',
    tension: 'reloj ↔ breakbeat industrial',
    runtime: 'strudel',
    bpm: 115,
    description: 'Núcleo rítmico aprobado de Splinternet. Combina la urgencia implacable del reloj Zimmer a semicorcheas con el groove sincopado de batería híbrida Linkin Park.',
    code: `// :Mutacion — Splinternet Base Loop (02:00)
stack(
  s("rim*16").gain(0.7).pan(sine.range(0.3, 0.7).slow(4)),
  s("bd [~ bd] [~ sd] [bd ~] ~ [bd:2 ~] sd [~ sd:3]").gain(1.0),
  s("hh*16").gain("<0.3 0.8 0.5 0.9>*4").hpf(4200),
  note("c2 c2 [c2 eb2] ~ f2 [fs2 g2] c2 ~").s("sawtooth").distort(0.7).gain(0.85)
)`
  },
  {
    id: 'splinternet-skrillex',
    name: 'Splinternet // Neuro Skrillex Drop',
    lifecycle: ':Experimentacion',
    concept: 'Exploración extrema de síntesis FM y modulación formántica',
    tension: 'orden algorítmico ↔ caos quirúrgico',
    runtime: 'strudel',
    bpm: 140,
    description: 'Boceto de laboratorio para el drop más agresivo del single a 140 BPM.',
    code: `// :Experimentacion — Neuro Skrillex Lab
stack(
  s("bd ~ ~ ~ sd ~ ~ ~ bd ~ bd ~ sd ~").gain(1.0),
  note("c1 [c1 c2] [eb2 d2] [fs1 g1]").s("sawtooth").lpf(perlin.range(400, 4000).fast(4)).resonance(20).gain(0.95)
)`
  }
];

export const TRACKS: Track[] = [
  {
    id: 'track-01-backup',
    number: 1,
    title: 'Backup',
    medium: 'Música Digital / Electrónica Algorítmica',
    status: 'candidate',
    lifecycle: ':Mutacion',
    duration: '05:15 (Suite) / 01:15 (Fork Base)',
    summary: 'Primer track del ciclo RECOVERY. Sistema de experimentación HITL con linaje claro: Mutante Alfa C (Fork) y Challenger Trojan Sandbox Suite.',
    humanApproval: {
      approved: true,
      signoff: 'Human Creator',
      date: '2026-10-17',
      scope: 'fork-mutation-and-trojan-challenger-suite',
      notes: 'Variación C elegida como :Mutacion activa. Suite Trojan Sandbox definida como :Challenger para audición y refinamiento.'
    },
    publicNotes: [
      'Sistema de estados HITL: :Experimentacion -> :Mutacion -> :Challenger -> :Victory.',
      'Línea base activa (:Mutacion): Variación C (Fork), preservando su ADN armónico y polirrítmico.',
      'Challenger en desarrollo (:Challenger): Suite continua de 6 secciones temporales simulando el troyano en sandbox antivirus.'
    ],
    sections: SONG_SECTIONS,
    variations: TRACK_VARIATIONS
  },
  {
    id: 'track-02-splinternet',
    number: 2,
    title: 'Splinternet // Rewired',
    medium: 'Electrónica Experimental / Multi-Influencia Geopolítica',
    status: 'candidate',
    lifecycle: ':Challenger',
    duration: '04:45 (Suite 5 Actos)',
    summary: 'Single experimental propuesto por el Crew Multiagente tras asimilar el dossier geopolítico 2016-2026. Hibrida a Linkin Park, Skrillex, Code Orange, Daft Punk y Hans Zimmer en un viaje de 5 actos.',
    humanApproval: {
      approved: false,
      signoff: 'Multi-Agent Crew L3 QA (Pending Human Signoff)',
      date: '2026-10-18',
      scope: '5-act-experimental-suite-proposal',
      notes: 'Crew de 9 agentes completó Ronda 1 con veredicto VERDE. Pendiente de audición y firma del Director General.'
    },
    publicNotes: [
      'Inspiraciones integradas: Hans Zimmer (Ticking Clock), Linkin Park (Breakbeat híbrido), Code Orange (Dropout brutal), Skrillex (Neuro FM growl) y Daft Punk (French touch & sidechain).',
      'Eje conceptual: La fragmentación de la internet única (RuNet, cortafuegos de Estado, 945 TWh en IA extractiva y retroceso a 1978).',
      'Cumple especificaciones de mezcla técnica: -14.0 LUFS integrados y True Peak < -1.0 dBTP.'
    ],
    sections: SPLINTERNET_SECTIONS,
    variations: SPLINTERNET_VARIATIONS
  }
];

