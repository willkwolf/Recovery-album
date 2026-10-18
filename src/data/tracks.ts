import type { Track, SongSection, TrackVariation } from './schema';

export const SONG_SECTIONS: SongSection[] = [
  {
    id: 'sec-01',
    tag: '[SECCIÓN 01 // RAVE DE RECICLAJE & COMBATE TECHNO (INTRO IN MEDIA RES)]',
    name: 'Rave de Reciclaje — Estado del Arte 2026 (0:00 - 1:15)',
    startTime: '00:00',
    endTime: '01:15',
    startSec: 0,
    endSec: 75,
    bpm: 138,
    keyCenter: 'D menor Acid 303 // 138 BPM',
    instruments: ['Roland TR-909 Kick 4/4', 'Syncopated Claps & Snares', 'Acid 303 Resonant Saw', 'Distorted Rock Stabs'],
    description: 'CHAMPION REBASE: La pista arranca in media res en el estado del arte de 2026. Una pista de baile clandestina de 138 BPM donde la civilización en colapso recicla sus datos y combate el totalitarismo con ritmos implacables.',
    strudelCode: `// SECCIÓN 01 (00:00 - 01:15): Rave de Reciclaje & Combate Techno (138 BPM)
// Estado del arte 2026: Catarsis rave y resistencia
stack(
  s("bd*4").bank("RolandTR909").gain(1.0),
  s("~ [cp,sd:2] ~ [cp,sd:2]").gain(0.85),
  s("hh*16").gain("<0.3 0.7 0.5 0.9>*4").hpf(4000),
  note("d2 [d2 f2] g2 [bb1 c2] cs2 d2")
    .s("sawtooth").lpf(sine.range(400, 3400).slow(2)).resonance(18).gain(0.85),
  note("<[d5,a4,f4] [c5,g4,e4]>").s("sawtooth").distort(0.6).gain(0.5)
)`
  },
  {
    id: 'sec-02',
    tag: '[SECCIÓN 02 // TRANSICIÓN INTELIGENTE DE TRANSPORTE (138 -> 110 BPM)]',
    name: 'Cápsula de Transporte & Disonancia F# (1:15 - 1:50)',
    startTime: '01:15',
    endTime: '01:50',
    startSec: 75,
    endSec: 110,
    bpm: 124,
    keyCenter: 'Modulación D menor -> C menor (Pivote Tritono F#)',
    instruments: ['Decelerating 909 Kick', 'Bandpass Dither Sweep', 'Tritone F# Drone', 'Incoming 5-tuplet Rimshot'],
    description: 'TRANSICIÓN INTELIGENTE: La catarsis del rave se comprime y desacelera mediante modulación métrica (138 BPM -> 110 BPM). El bombo entra en filtro paso-altos mientras el tritono F# (92.5 Hz) sirve de puente armónico hacia la cápsula del Fork C.',
    strudelCode: `// SECCIÓN 02 (01:15 - 01:50): Transición Inteligente de Transporte (138 -> 110 BPM)
// Desaceleración métrica y modulación D menor -> C menor
stack(
  // Bombo del Rave filtrándose y espaciándose
  s("bd [~ bd] ~ [bd ~]").bank("RolandTR909").lpf(sine.range(800, 180).slow(4)).gain(0.75),
  // Barrido de ruido y artefacto de compresión dither
  s("crackle*16").gain(perlin.range(0.1, 0.45)).hpf(3000),
  // Nota puente pivote armónico: Tritono F# (92.50 Hz / 369.99 Hz)
  note("<[fs2,c3] [fs2,c3,fs3]>").s("sawtooth").lpf(950).gain(0.7).decay(1.2),
  // Entrada lateral del rimshot 5-tuplet anticipando Fork C
  s("rim*5").gain(sine.range(0.1, 0.65).slow(2)).pan(sine.range(0.1, 0.9).slow(2))
)`
  },
  {
    id: 'sec-03',
    tag: '[SECCIÓN 03 // FORK MUTANTE ALFA APROBADO (LÍNEA BASE CHAMPION)]',
    name: 'Bucle Fork C Mutante — Memoria en Fuga (1:50 - 3:05)',
    startTime: '01:50',
    endTime: '03:05',
    startSec: 110,
    endSec: 185,
    bpm: 110,
    keyCenter: 'C menor (Disonancia F# persistente // 110 BPM)',
    instruments: ['Sawtooth Chords LFO', 'Fast 1.75 Melody Delay', 'TR-909 Kick Groove', 'Rimshot 5-tuplet', 'Polyrhythmic 3v7 Hats'],
    description: 'CHAMPION FORK: La cápsula aterriza en el sandbox. Acordes dyad Sawtooth con filtro LFO, melodía rápida a 1.75 en delay ping-pong, Roland TR-909 y polirritmia hi-hat 3 contra 7. Este es el ADN inmutable preservado y transportado.',
    strudelCode: `// SECCIÓN 03 (01:50 - 03:05): Fork Mutante Alfa (Línea Base Champion)
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
    id: 'sec-04',
    tag: '[SECCIÓN 04 // TROJAN SANDBOX & FLATLINE 90s]',
    name: 'Chimes Cristalinos & Tono Modem/Fax (3:05 - 4:10)',
    startTime: '03:05',
    endTime: '04:10',
    startSec: 185,
    endSec: 250,
    bpm: 110,
    keyCenter: 'C menor a C6 estático (1046 Hz)',
    instruments: ['Crystalline Triangle Arp', 'Zero Sub-Bass Flatline', '56k Modem Chirp', 'Glitch Bursts'],
    description: 'El falso optimismo cristalino (Caballo de Troya) entra en cuarentena: el bajo desaparece de golpe dejando el pulso de signos vitales (beep monótono C6) y el guiño de handshake analógico a 56k.',
    strudelCode: `// SECCIÓN 04 (03:05 - 04:10): Trojan Sandbox & Flatline 90s
stack(
  note("<[c5,e5,g5,b5] [d5,fs5,a5,cs6]>").s("triangle").fast(2).delay(0.3).gain(0.4),
  note("c6*8").s("sine").gain(0.7).decay(0.04),
  note("<fs6 cs7 b6 e7>").s("square").fast(8).gain(0.35).lpf(3500)
)`
  },
  {
    id: 'sec-05',
    tag: '[SECCIÓN 05 // SOLO FUZZ OVERDRIVE INVERTIDO & FUGA FINAL]',
    name: 'Fuzz Invertido en D menor & Disolución (4:10 - 5:15)',
    startTime: '04:10',
    endTime: '05:15',
    startSec: 250,
    endSec: 315,
    bpm: 110,
    keyCenter: 'D menor blues invertido',
    instruments: ['Overdrive Guitar Inverted', 'Ping-Pong Delay', 'Room Convolution', 'Dither Fade Out'],
    description: 'Solo de guitarra eléctrica saturada interpretando frases modales de blues menor de forma invertida. Sin base rítmica al inicio, desvaneciéndose en el vacío cuántico hacia la línea temporal alternativa (FORK).',
    strudelCode: `// SECCIÓN 05 (04:10 - 05:15): Solo Fuzz Invertido & Fuga Final
stack(
  note("<[d5,a4,f4] [c5,g4,e4] [bb4,f4,d4] [a4,e4,cs4]>")
    .s("sawtooth").distort(0.7).gain(0.85)
    .delay(0.35).delayfeedback(0.6)
)`
  }
];

export const TRACK_VARIATIONS: TrackVariation[] = [
  {
    id: 'countdown-clock',
    name: 'Reloj de Cuenta Regresiva (Patrón Vibe Aprobado)',
    lifecycle: ':Mutacion',
    concept: 'Único patrón exitoso al vibe: pulso implacable de cuenta regresiva de 16avos con paneo estéreo',
    tension: 'urgencia temporal ↔ pulso de memoria',
    runtime: 'strudel',
    bpm: 115,
    description: 'ÚNICA MUTACIÓN CONSERVADA. El pulso de reloj a semicorcheas con micropaneo, subgrave 35Hz y modulación de filtro. Es el ancla rítmica y narrativa definitiva para el vibe coding del single.',
    code: `// :Mutacion — Reloj de Cuenta Regresiva (Patrón Vibe Aprobado)
stack(
  s("rim*16").pan(sine.range(0.2, 0.8).slow(4)).gain("<0.65 0.85 0.7 0.95>*4"),
  note("<c1 g0 eb0 bb0>").s("sawtooth").lpf(160).gain(0.9).slow(2),
  s("hh*16").euclid(11,16).gain("<0.25 0.6 0.4 0.75>*4").hpf(5000),
  note("c4 eb4 g4 f4").s("triangle").fast(2).delay(0.25).gain(0.35)
)`
  }
];

export const SPLINTERNET_SECTIONS: SongSection[] = [
  {
    id: 'sec-sp-01',
    tag: '[SECCIÓN 01 // TICKING CLOCK SPINE & FRENCH TOUCH 4-POLE SWEEP]',
    name: 'Reloj de Cuenta Regresiva & French Sweep (0:00 - 1:05)',
    startTime: '00:00',
    endTime: '01:05',
    startSec: 0,
    endSec: 65,
    bpm: 105,
    keyCenter: 'C menor modal / 105 BPM',
    instruments: ['Ticking Countdown Rimshot', 'Sub-Braam 35Hz', 'Analog 4-Pole LP Resonant Filter Sweep', 'French House 4/4 Kick', 'Off-beat Open Hats', 'Funky Octave Slap Bass'],
    description: 'AUTONOMÍA L1 (80%): El pulso de cuenta regresiva marca los segundos antes del corte de red. Entra un bombo 4/4 francés de pegada analógica, acordes con barrido dinámico LP de 4 polos bombeados por sidechain, hi-hats sincopados en contratiempo y un slap-bassline con rebotes de octava.',
    strudelCode: `// SECCIÓN 01 (00:00 - 01:05): Ticking Clock Spine & French Touch 4-Pole Sweep
// Autonomía Agéntica L1: 80% — Ensamble de 6 canales multicapa studio
stack(
  // Capa 1: Reloj de cuenta regresiva a semicorcheas con micropan y variaciones métricas
  s("rim*16").pan(sine.range(0.2, 0.8).slow(4)).gain("<0.65 0.85 0.7 0.95>*4"),
  // Capa 2: Bombo francés 4/4 con pegada de transitorio y sidechain natural
  s("bd*4").bank("RolandTR909").gain(1.0),
  // Capa 3: Hi-hats franceses con apertura en contratiempo sincopado
  s("~ hh:open ~ hh:open").gain(0.8).decay(0.12).hpf(4800),
  s("hh*16").euclid(11,16).gain("<0.3 0.65 0.45 0.8>*4").hpf(5500),
  // Capa 4: Acordes French House con barrido LPF resonante y ducking
  note("<[c3,eb3,g3,bb3,d4] [ab2,c3,eb3,g3,c4] [f2,ab2,c3,eb3,g3] [g2,b2,d3,f3,b3]>")
    .s("sawtooth")
    .lpf(sine.range(380, 3600).slow(8))
    .resonance(14)
    .gain("<0.25 0.95 0.4 0.95>*4")
    .jux(rev),
  // Capa 5: Slap-bassline funky filtrado con rebotes en octavas
  note("c2 [~ c2] [eb2!2] [~ f2] [fs2!2] g2 [bb1 c2]")
    .s("sawtooth").lpf(1600).resonance(12).gain(0.85),
  // Capa 6: Vocoder analógico y micro-arpegio cristalino
  note("c4 eb4 g4 f4 bb4 c5").fast(2.25).s("triangle").room(0.7).gain(0.38)
)`
  },
  {
    id: 'sec-sp-02',
    tag: '[SECCIÓN 02 // HYBRID BREAKBEAT & DROP-D CRUNCH]',
    name: 'Breakbeat Industrial & Cable Roto (1:05 - 2:00)',
    startTime: '01:05',
    endTime: '02:00',
    startSec: 65,
    endSec: 120,
    bpm: 115,
    keyCenter: 'C menor Drop-D / 115 BPM',
    instruments: ['Hybrid Acoustic-Digital Breakbeat', 'Ghost Snare 16ths', 'Drop-D Industrial Saw Crunch', 'Ride Cymbal Polyrhythm', 'Parallel Distorted Bass'],
    description: 'AUTONOMÍA L1 (80%): Arquitectura híbrida rock-electrónica. La rotura de cables transoceánicos detona un breakbeat sincopado con redobles fantasma de caja, hi-hats polirrítmicos, guitarras industriales cortadas en ping-pong delay y un bajo Drop-D comprimido al límite.',
    strudelCode: `// SECCIÓN 02 (01:05 - 02:00): Hybrid Breakbeat & Industrial Slams
// Autonomía Agéntica L1: 80% — Polirritmia, redobles fantasma y compresión paralela
stack(
  // Capa 1: Bombo híbrido sincopado y caja con capas de clap/acoustic
  s("bd:3 [~ bd:1] [~ sd:2] [bd:3 ~] ~ [bd:2 ~] [sd:2, cp] [~ sd:3*2]").gain(1.05),
  // Capa 2: Ghost snares a semicorcheas con acentos variables
  s("~ sn:1*4 ~ sn:1*2").gain("<0.2 0.5 0.3 0.7>*4").pan(sine.range(0.35, 0.65).slow(2)),
  // Capa 3: Hi-hats industriales cortantes y ride polirrítmico
  s("hh*16").gain("<0.35 0.85 0.4 0.95 0.5 0.8 0.4 1.0>*2").hpf(4200),
  s("ride(5,8)").gain(0.42).decay(0.3),
  // Capa 4: Drop-D Industrial Reese Bass distorsionado con saturación de tubo
  note("c2 c2 [c2 eb2] ~ f2 [fs2 g2] [c2!2] [bb1 c2]")
    .s("sawtooth")
    .distort(0.82)
    .lpf(sine.range(500, 2800).slow(4))
    .resonance(16)
    .gain(0.92),
  // Capa 5: Guitarras industriales procesadas en ping-pong delay y vinyl crackle
  note("<[c4,g4,c5] [eb4,bb4,eb5] [f4,c5,f5] [fs4,c5,fs5]>")
    .s("sawtooth").distort(0.7).chop(8).delay(0.333).delayfeedback(0.5).gain(0.6),
  s("crackle*16").gain(perlin.range(0.15, 0.4)).hpf(3000)
)`
  },
  {
    id: 'sec-sp-03',
    tag: '[SECCIÓN 03 // BRUTALIST DIGITAL DROPOUT & HARSH SILENCE]',
    name: 'Apagón Nacional & Clipping Brutalista (2:00 - 2:50)',
    startTime: '02:00',
    endTime: '02:50',
    startSec: 120,
    endSec: 170,
    bpm: 115,
    keyCenter: 'Disonancia Tritono C-F# / 115 BPM',
    instruments: ['Instant 0ms Dropout', 'Square Wave Clipping', '945 TWh Server Hum', 'Noise Bursts BPF', 'Metal Percussion Clangs'],
    description: 'AUTONOMÍA L1 (80%): Desconexión brutalista y estética noise industrial. La música sufre caídas a cero absoluto (dropout digital puro de 0ms sin reverb tail), emulando apagones y desconexiones de infraestructura. Entre el vacío zumban servidores de IA a 60 Hz antes de estallar en clipping abrasivo y percusiones de chatarra industrial.',
    strudelCode: `// SECCIÓN 03 (02:00 - 02:50): Brutalist Digital Dropout & Harsh Feedback
// Autonomía Agéntica L1: 80% — Caídas a 0ms sin reverb, clipping abrasivo y percusión metálica
stack(
  // Capa 1: Riff brutalista tritono C-F# con cortes estocásticos a silencio puro (0ms)
  note("<[c2,fs2,c3] ~ [eb2,a2,eb3] ~ ~ [fs2,c3,fs3] [~ c2] ~>")
    .s("square")
    .distort(0.96)
    .decay(0.18)
    .gain(1.0)
    .sometimesBy(0.25, silence),
  // Capa 2: Zumbido de servidores H100 (945 TWh) en 60Hz y modulación en anillo
  note("<c1 fs1>").s("sawtooth").lpf(120).gain(0.9).slow(2),
  // Capa 3: Noise bursts y glitch micro-stutters
  s("noise*8").gain(perlin.range(0.2, 0.65)).bpf(sine.range(400, 3200).fast(4), 3),
  s("glitch:2*5").gain(0.75).pan("<0.1 0.9 0.3 0.8 0.5>"),
  // Capa 4: Percusiones industriales metálicas y clangs de chatarra digital
  s("industrial:3*4").gain("<0.8 0 0.9 0>*2").delay(0.15).delayfeedback(0.4)
)`
  },
  {
    id: 'sec-sp-04',
    tag: '[SECCIÓN 04 // SURGICAL FM NEURO GROWL DROP (140 BPM HALF-TIME)]',
    name: 'Extracción de Memoria FM Growl (2:50 - 3:40)',
    startTime: '02:50',
    endTime: '03:40',
    startSec: 170,
    endSec: 220,
    bpm: 140,
    keyCenter: 'C menor Bass Music / 140 BPM (Half-time Stomp)',
    instruments: ['Surgical FM Neuro Growl', 'Sub-Bass 32Hz', 'Off-beat Snare Claps', 'Micro-stutter 32nds', 'Laser Micro-Arps', 'Euclidean Hats'],
    description: 'AUTONOMÍA L1 (80%): Arquitectura de diseño sonoro neurofunk / dubstep de alta modulación. Salto de tempo a 140 BPM en ritmo half-time brutal. El bajo FM neuro utiliza modulación formántica ultrarrápida (resonancia 26) con separación estricta de subgrave puro a 32 Hz, arpegios láser a 32avos y bombos secos con snare reverberado.',
    strudelCode: `// SECCIÓN 04 (02:50 - 03:40): Surgical FM Neuro Growl Drop (140 BPM)
// Autonomía Agéntica L1: 80% — Frecuencia modulada formántica, sub-bass 32Hz y half-time
stack(
  // Capa 1: Bombo de impacto ultra seco + Snare masivo con reverb gate
  s("bd:2 ~ ~ ~ [sd:3, cp:2] ~ ~ ~ bd:2 ~ bd:2 ~ [sd:3, cp:2] ~ [~ sd*2]").gain(1.1),
  // Capa 2: Sub-bass puro a 32 Hz separado de los medios
  note("<c1 eb1 fs1 g1>").s("sine").gain(1.0),
  // Capa 3: Neuro Talking Growl (Sawtooth con filtro de formantes resonante a 26)
  note("c2 [c2 eb2] [fs2 g2] [bb2 c3] [~ c2] [eb2 c2]")
    .s("sawtooth")
    .lpf(perlin.range(350, 4900).fast(6))
    .resonance(26)
    .distort(0.85)
    .gain(0.96),
  // Capa 4: Micro-stutter de agudos y arpegios láser a 32avos
  note("c5 eb5 fs5 g5 bb5 c6").fast(4).s("triangle").decay(0.04).pan(sine.range(0.1, 0.9).fast(3)).gain(0.55),
  // Capa 5: Hi-hats quirúrgicos cerrados y open hats en tresillo
  s("hh*16").euclid(13,16).gain("<0.4 0.9 0.6 1.0>*4").hpf(5500),
  s("~ [hh:open, rim] ~ [hh:open]").gain(0.75).hpf(4800)
)`
  },
  {
    id: 'sec-sp-05',
    tag: '[SECCIÓN 05 // MONUMENTAL 35HZ BRAAM & SIDECHAIN PUMP FADE]',
    name: 'Colapso Monumental & Fork Infinito (3:40 - 4:45)',
    startTime: '03:40',
    endTime: '04:45',
    startSec: 220,
    endSec: 285,
    bpm: 105,
    keyCenter: 'C menor / Eb mayor / 105 BPM',
    instruments: ['Massive Sub-Braam 35Hz', 'French Touch Sidechain Pump Pad', 'Archaeological Ocarina Bells', 'Deep Space Reverb', 'Distant 909 Sub-Kick'],
    description: 'AUTONOMÍA L1 (80%): Síntesis cinemática monumental y bombeo sidechain. Un braam descomunal de 35 Hz con armónicos de metal sostiene la caída de la vieja internet mientras sintetizadores analógicos bombeados por sidechain y campanas místicas de Ocarina of Time reverberan hacia la nueva línea temporal.',
    strudelCode: `// SECCIÓN 05 (03:40 - 04:45): Monumental 35Hz Braam & Sidechain Pump Fade
// Autonomía Agéntica L1: 80% — Braam descomunal 35Hz, bombeo sidechain y melodía arqueológica
stack(
  // Capa 1: Massive Braam a 35Hz con resonancia de bronce
  note("<c0 g-1 eb-1 bb-1>").s("sawtooth").lpf(160).gain(1.15).slow(2),
  // Capa 2: French Touch synth pads bombeados rítmicamente por sidechain
  note("<[c3,g3,c4,eb4] [eb3,bb3,eb4,g4] [f3,c4,f4,ab4] [g3,d4,g4,bb4]>")
    .s("sawtooth")
    .lpf(sine.range(500, 2400).slow(6))
    .gain("<0.15 0.95 0.3 0.95>*4")
    .room(0.85),
  // Capa 3: Campanas ancestrales de Ocarina of Time con ping-pong delay sideral
  note("c5 eb5 g5 fs5 bb5 c6 bb5 g5").slow(2).s("sine").delay(0.5).delayfeedback(0.78).gain(0.42),
  // Capa 4: Pulso de sub-kick distante desvaneciéndose hacia el vacío cuántico
  s("bd*4").bank("RolandTR909").lpf(sine.range(400, 120).slow(8)).gain(0.65),
  // Capa 5: Textura analógica de cinta y dither espacial
  s("crackle*8").gain(perlin.range(0.08, 0.25)).hpf(3500)
)`
  }
];

export const SPLINTERNET_VARIATIONS: TrackVariation[] = [
  {
    id: 'countdown-clock',
    name: 'Reloj de Cuenta Regresiva (Patrón Vibe Aprobado)',
    lifecycle: ':Mutacion',
    concept: 'Único patrón exitoso al vibe: Ticking Clock de cuenta regresiva a 16avos con sub-bass 35Hz',
    tension: 'cuenta regresiva implacable ↔ suspensión temporal',
    runtime: 'strudel',
    bpm: 115,
    description: 'ÚNICA MUTACIÓN CONSERVADA PARA PRODUCCIÓN. El pulso a semicorcheas con micropaneo, subgrave 35Hz y modulación de filtro. Es el ancla rítmica y narrativa definitiva para el vibe coding del single.',
    code: `// :Mutacion — Reloj de Cuenta Regresiva (Vibe Coding Core)
stack(
  s("rim*16").pan(sine.range(0.2, 0.8).slow(4)).gain("<0.65 0.85 0.7 0.95>*4"),
  note("<c1 g0 eb0 bb0>").s("sawtooth").lpf(160).gain(0.9).slow(2),
  s("hh*16").euclid(11,16).gain("<0.25 0.6 0.4 0.75>*4").hpf(5000),
  note("c4 eb4 g4 f4").s("triangle").fast(2).delay(0.25).gain(0.35)
)`
  }
];

export const TRACKS: Track[] = [
  {
    id: 'track-01-backup',
    number: 1,
    title: 'Backup // Champion Rebase',
    medium: 'Música Digital / Electrónica Algorítmica',
    status: 'candidate',
    lifecycle: ':Victory',
    duration: '05:15 (Champion Suite) / 01:15 (Rave Intro)',
    summary: 'CHAMPION REBASE DEFINITIVO. Inicia en el estado del arte de 2026 con el Rave de Reciclaje (138 BPM), transiciona mediante desaceleración métrica y modulación F# a la base Fork C (110 BPM), pasando por el sandbox troyano hasta la fuga del solo invertido.',
    humanApproval: {
      approved: true,
      signoff: 'Human Director General (DG)',
      date: '2026-10-18',
      scope: 'champion-baseline-rebase-rave-to-fork',
      notes: 'Aprobado por el Director General como Champion. Comienza en Rave de Reciclaje (138 BPM) y transiciona al Fork C Mutante como transporte hacia la nueva línea temporal.'
    },
    publicNotes: [
      'Sistema de estados HITL: :Experimentacion -> :Mutacion -> :Challenger -> :Victory.',
      'Champion Activo (:Victory): Rave de Reciclaje (138 BPM) -> Transición Inteligente -> Fork C Mutante (110 BPM).',
      'Mutaciones propuestas en disputa (:Challenger): Neuro-Acid Infusion, Tritone F# Lockdown, Brutalist 0ms Drop-Cut.'
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
    summary: 'Single experimental propuesto por el Crew Multiagente tras asimilar el dossier geopolítico 2016-2026. Hibrida breakbeat industrial, neuro growls FM a 140 BPM, dropouts brutalistas de 0ms, barridos franceses de 4 polos y braams monumentales de 35 Hz en un viaje de 5 actos.',
    humanApproval: {
      approved: false,
      signoff: 'Multi-Agent Crew L3 QA (Pending Human Signoff)',
      date: '2026-10-18',
      scope: '5-act-experimental-suite-proposal',
      notes: 'Crew de 9 agentes completó Ronda 1 con veredicto VERDE. Pendiente de audición y firma del Director General.'
    },
    publicNotes: [
      'Ejes sonoros integrados: Ticking Clock (pulso de cuenta regresiva), Breakbeat híbrido (cables cortados), Brutalist Dropout (silencio 0ms sin reverb), Surgical FM Neuro Growl (half-time 140 BPM) y Monumental Sub-Braam (35 Hz con sidechain pump).',
      'Eje conceptual: La fragmentación de la internet única (RuNet, cortafuegos de Estado, 945 TWh en IA extractiva y retroceso a 1978).',
      'Cumple especificaciones de mezcla técnica: -14.0 LUFS integrados y True Peak < -1.0 dBTP.'
    ],
    sections: SPLINTERNET_SECTIONS,
    variations: SPLINTERNET_VARIATIONS
  }
];

