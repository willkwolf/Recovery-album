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

export const NEUROGENESIS_MASTER_COMPILED_STRUDEL: string = `// ==============================================================================
// RECOVERY // SINGLE MAESTRO COMPILADO: REWIRED // NEURO-GENESIS (SINGLE TERMINADO)
// Suite continua integral (07:15) gobernada por una sola línea de tiempo ininterrumpida
// Directiva DG: Inicio suave coral progresivo sin bajo + Mutación #sec-ng-07 integrada (00:40-01:39)
// ==============================================================================
stack(
  // 1. ESPINA CONTINUA INALTERADA (PULSO VIBE CORE 35Hz A LO LARGO DE TODA LA OBRA)
  s("rim*16").pan(sine.range(0.2, 0.8).slow(4)).gain("<0.65 0.85 0.7 0.95>*4"),

  // 2. ENCADENAMIENTO DE ACTOS MEDIANTE ARRANGE & ENVOLVENTES CONTINUAS DE MEZCLA
  arrange([
    // ACTO 01-A: Inicio suave coral progresivo (00:00 - 00:40 // 40s) — Sin bajo aplastante
    [40,
      stack(
        // Inicio Coral Progresivo (Pads etéreos en C menor modal sin sub-bass)
        note("<[c4,g4,eb5] [ab3,eb4,c5] [f3,c4,ab4] [g3,d4,f5,b4]>")
          .s("sawtooth").lpf(sine.range(320, 1800).slow(8)).gain(sine.range(0.25, 0.65).slow(8)).room(0.92),
        // Notas suaves antes del bajo: Campanas de seda Ocarina of Time y microtonalidad
        note("c5 [eb5 g5] ~ [fs5 bb5] c6 ~").slow(2).s("sine").delay(0.55).delayfeedback(0.75).gain(0.4),
        // Cuerdas de seda Guzheng granular progresivo
        note("c4 [eb4,g4] bb4").fast(1.5).s("triangle").decay(0.15).gain(sine.range(0.08, 0.3).slow(4)),
        s("crackle*8").gain(perlin.range(0.04, 0.15)).hpf(4200)
      )
    ],

    // ACTO 01-B: Mutación #sec-ng-07 // Sub-Braam 35Hz despierta & World-Building (00:40 - 01:50 // 70s)
    [70,
      stack(
        // Entrada del bajo: Despertar gradual del Braam 35Hz (mutación de #sec-ng-07)
        note("<c0 g-1 eb-1 bb-1>")
          .s("sawtooth").lpf(sine.range(65, 210).slow(8)).gain(sine.range(0.4, 1.05).slow(8)),
        // Armonía modal enriquecida en capas evolutivas
        note("<[c3,g3,eb4] [ab2,eb3,c4] [f2,c3,ab3] [g2,d3,f4,b3] [bb2,f3,d4] [c3,g3,eb4,bb4]>")
          .s("sawtooth").lpf(sine.range(420, 2800).slow(10)).resonance(14).gain(0.65).room(0.85),
        // Guzheng y campanas ancestrales
        note("c5 eb5 g5 fs5 bb5 c6 d6 eb6").slow(2.5).s("sine").delay(0.45).delayfeedback(0.7).gain(0.42),
        note("c4 [eb4,g4] bb4 [c5,eb5]").fast(2).s("triangle").decay(0.12).gain(0.32),
        s("crackle*8").gain(perlin.range(0.06, 0.2)).hpf(4000)
      )
    ],

    // ACTO 02: Transición Continua Crossfader Equal-Power & Morfología Afro-Neuro (01:50 - 04:35 // 165s)
    [165,
      stack(
        // Batería sincopada inspirada en polirritmias Afrobeats con barrido continuo
        s("bd:3 [~ bd:1] ~ [bd:3 ~] ~ [bd:2 ~] [sd:2, cp] [~ sd:3*2]")
          .lpf(sine.range(450, 5200).slow(8)).gain(1.05),
        s("~ sn:1*4 ~ sn:1*2").gain("<0.25 0.6 0.35 0.75>*4").pan(sine.range(0.3, 0.7).slow(2)),
        s("hh*16").euclid(11,16).gain(sine.range(0.25, 0.9).slow(6)).hpf(4800),
        s("ride(5,8)").gain(0.4).decay(0.28),
        // Bajo Neuro FM Surge XT con modulación formántica continua (12 LFOs)
        note("c2 [~ c2] [eb2!2] [~ f2] [fs2!2] g2 [bb1 c2]")
          .s("sawtooth").lpf(sine.range(500, 3600).slow(6)).resonance(18).distort(0.45).gain(0.9),
        // Cuerdas de seda Guzheng granulares
        note("c4 eb4 f4 g4 bb4 c5 eb5").fast(3).s("triangle").decay(0.08).gain(0.42).pan(sine.range(0.15, 0.85).fast(2)),
        // Rampa de aproximación al Braam 35Hz
        note("<c0 eb-1 g-1 bb-1>").s("sawtooth").lpf(sine.range(90, 260).slow(8)).gain(sine.range(0.3, 0.9).slow(8))
      )
    ],

    // ACTO 03: Braam Monumental 35Hz & Gran Fuga Sideral (#sec-ng-07 // 04:35 - 07:15 // 160s)
    [160,
      stack(
        // Braam descomunal de 35Hz con resonancia de bronce
        note("<c0 g-1 eb-1 bb-1>").s("sawtooth").lpf(160).gain(1.18).slow(2),
        // Pads bombeados rítmicamente por sidechain
        note("<[c3,g3,c4,eb4] [eb3,bb3,eb4,g4] [f3,c4,f4,ab4] [g3,d4,g4,bb4]>")
          .s("sawtooth").lpf(sine.range(500, 2400).slow(6)).gain("<0.15 0.95 0.3 0.95>*4").room(0.85),
        // Campanas ancestrales de Ocarina of Time con ping-pong delay sideral
        note("c5 eb5 g5 fs5 bb5 c6 bb5 g5").slow(2).s("sine").delay(0.5).delayfeedback(0.78).gain(0.45),
        s("bd*4").bank("RolandTR909").lpf(sine.range(400, 120).slow(8)).gain(0.65),
        s("crackle*8").gain(perlin.range(0.08, 0.25)).hpf(3500)
      )
    ]
  ])
);`;

export const NEUROGENESIS_SECTIONS: SongSection[] = [
  {
    id: 'sec-ng-01',
    tag: '[SECCIÓN 01 // MASHUP AMBIENT & MUTACIÓN SUB-BRAAM 35HZ] (CONSERVADA)',
    name: 'Mashup Ambient Inmersivo & Mutación Braam 35Hz (0:00 - 1:50)',
    startTime: '00:00',
    endTime: '01:50',
    startSec: 0,
    endSec: 110,
    bpm: 105,
    keyCenter: 'C menor modal / 105 BPM',
    instruments: ['Ticking Countdown Rimshot', 'Sub-Braam 35Hz Swell Mutado', 'Ancestral Ocarina Bells', 'Warm Evolving Analog Pad', 'Granular Silk Guzheng', 'Equal-Power Crossfade Out'],
    description: 'MUTACIÓN Y MASHUP ORDENADO POR EL DG: Arranca la nueva versión fusionando #sec-ng-01 y la mutación de #sec-ng-07 en una intro progresiva de 1:50 (110s). El world-building cinematográfico se entrelaza con el despertar gradual del Braam monumental a 35Hz, campanas ancestrales de Ocarina of Time con ping-pong delay y progresiones armónicas ricas sin bucles mecánicos repetitivos.',
    strudelCode: `// SECCIÓN 01 (00:00 - 01:50): Mashup Ambient & Mutación Sub-Braam 35Hz (105 BPM)
// Intro de 1:50 fusionando world-building ambient con el despertar progresivo del Braam 35Hz
stack(
  s("rim*16").pan(sine.range(0.2, 0.8).slow(4)).gain("<0.65 0.85 0.7 0.95>*4"),
  note("<c1 g0 eb0 bb0>").s("sawtooth").lpf(160).gain(0.95).slow(2),
  note("<[c3,g3,eb4] [ab2,eb3,c4] [f2,c3,ab3] [g2,d3,f4,b3] [bb2,f3,d4] [c3,g3,eb4,bb4]>")
    .s("sawtooth").lpf(sine.range(420, 2600).slow(12)).resonance(14).gain(0.58).room(0.88),
  // Mutación Braam 35Hz de #sec-ng-07 entrando desde el segundo 30
  note("<c0 g-1 eb-1 bb-1>").s("sawtooth").lpf(sine.range(70, 190).slow(10)).gain(sine.range(0.35, 0.95).slow(10)),
  note("c5 eb5 g5 fs5 bb5 c6 d6 eb6").slow(3).s("sine").delay(0.48).delayfeedback(0.72).gain(0.38),
  note("c4 [eb4,g4] bb4 [c5,eb5]").fast(1.5).s("triangle").decay(0.12).gain(sine.range(0.1, 0.35).slow(6)),
  s("crackle*8").gain(perlin.range(0.06, 0.2)).hpf(4000)
)`
  },
  {
    id: 'sec-ng-bridge',
    tag: '[SECCIÓN 02 // PUENTE CONTINUO CROSSFADER EQUAL-POWER & METRIC MODULATION] (NUEVA ARQUITECTURA)',
    name: 'Transición Inteligente & Morfología Afro-Neuro (1:50 - 4:35)',
    startTime: '01:50',
    endTime: '04:35',
    startSec: 110,
    endSec: 275,
    bpm: 118,
    keyCenter: 'Modulación Continua C menor -> Eb mayor (105 -> 118 -> 105 BPM)',
    instruments: ['Dual-Plane Equal-Power Crossfader', 'Polyrhythmic Afrobeat & Modular Breakbeat', 'Surge XT 12 LFO Neuro FM Bass', 'Granular Guzheng Arpeggios', 'Exponential Filter Lookahead Ramps', '1-Beat Tension Breath Gate'],
    description: 'NUEVA ARQUITECTURA DE ENCADENAMIENTO CONTINUO: Conecta fluidamente la intro mashup con la catarsis mediante envolventes de ecualización de potencia constante (Equal-Power: gain_out^2 + gain_in^2 == 1), modulación métrica suave (105 a 118 y retorno a 105 BPM), y transiciones sin cortes en el repl.',
    strudelCode: `// SECCIÓN 02 (01:50 - 04:35): Puente Continuo Crossfader Equal-Power & Morfología Afro-Neuro (118 BPM)
// Conexión continua sin cortes hacia el Braam culminante.
stack(
  s("bd:3 [~ bd:1] ~ [bd:3 ~] ~ [bd:2 ~] [sd:2, cp] [~ sd:3*2]").lpf(sine.range(450, 5200).slow(8)).gain(1.05),
  s("~ sn:1*4 ~ sn:1*2").gain("<0.25 0.6 0.35 0.75>*4").pan(sine.range(0.3, 0.7).slow(2)),
  s("hh*16").euclid(11,16).gain(sine.range(0.25, 0.9).slow(6)).hpf(4800),
  s("ride(5,8)").gain(0.4).decay(0.28),
  // Bajo Neuro FM Surge XT con modulación formántica continua (12 LFOs)
  note("c2 [~ c2] [eb2!2] [~ f2] [fs2!2] g2 [bb1 c2]")
    .s("sawtooth").lpf(sine.range(500, 3600).slow(6)).resonance(18).distort(0.45).gain(0.88),
  // Guzheng granular arpeggios
  note("c4 eb4 f4 g4 bb4 c5 eb5").fast(3).s("triangle").decay(0.08).gain(0.42).pan(sine.range(0.15, 0.85).fast(2)),
  // Rampa de aproximación al Braam 35Hz
  note("<c0 eb-1 g-1 bb-1>").s("sawtooth").lpf(sine.range(90, 260).slow(8)).gain(sine.range(0.3, 0.9).slow(8))
)`
  },
  {
    id: 'sec-ng-07',
    tag: '[SECCIÓN 07 // MONUMENTAL SUB-BRAAM 35HZ & CATARSIS FINAL] (CONSERVADA)',
    name: 'Braam Monumental & Gran Fuga Sideral (4:35 - 7:15)',
    startTime: '04:35',
    endTime: '07:15',
    startSec: 275,
    endSec: 435,
    bpm: 105,
    keyCenter: 'C menor / Eb mayor (105 BPM)',
    instruments: ['Monumental Sub-Braam 35Hz', 'Sidechain Pumped Analog Pads', 'Ancestral Ocarina Bells', 'Deep Space Reverb', 'Distal TR-909 Fade', 'Equal-Power Crossfade In'],
    description: 'MUTACIÓN SEMILLA CONSERVADA POR EL DG: La catarsis monumental culmina el viaje sonoro unificado. El braam de 35 Hz que se anticipó y entrelazó en la intro y evolucionó en el puente toma el plano principal sostenido por sintetizadores bombeados por sidechain y campanas ancestrales de Ocarina of Time, desvaneciéndose hacia el silencio cuántico.',
    strudelCode: `// SECCIÓN 07 (04:35 - 07:15): Monumental Sub-Braam 35Hz & Catarsis (Seed 05) [CONSERVADA]
// Braam descomunal de 35Hz, bombeo sidechain y disolución cósmica
stack(
  note("<c0 g-1 eb-1 bb-1>").s("sawtooth").lpf(160).gain(1.15).slow(2),
  note("<[c3,g3,c4,eb4] [eb3,bb3,eb4,g4] [f3,c4,f4,ab4] [g3,d4,g4,bb4]>")
    .s("sawtooth")
    .lpf(sine.range(500, 2400).slow(6))
    .gain("<0.15 0.95 0.3 0.95>*4")
    .room(0.85),
  note("c5 eb5 g5 fs5 bb5 c6 bb5 g5").slow(2).s("sine").delay(0.5).delayfeedback(0.78).gain(0.42),
  s("bd*4").bank("RolandTR909").lpf(sine.range(400, 120).slow(8)).gain(0.65),
  s("crackle*8").gain(perlin.range(0.08, 0.25)).hpf(3500)
)`
  }
];

export const NEUROGENESIS_VARIATIONS: TrackVariation[] = [
  {
    id: 'countdown-clock-neuro',
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
    id: 'track-02-splinternet',
    number: 1,
    title: 'Splinternet // Rewired (Champion)',
    medium: 'Electrónica Experimental / Multi-Influencia Geopolítica',
    status: 'approved',
    lifecycle: ':Victory',
    duration: '04:45 (Champion Suite)',
    summary: 'NUEVO CHAMPION GROUND TRUTH (:Victory). Promovido oficialmente por el Director General como la nueva línea base. Hibrida el reloj de cuenta regresiva, breakbeat industrial, dropouts brutalistas de 0ms, bajos neuro FM a 140 BPM y braams monumentales de 35 Hz en una suite de 5 actos conectivos.',
    humanApproval: {
      approved: true,
      signoff: 'Human Director General (DG)',
      date: '2026-10-18',
      scope: 'promoted-from-challenger-to-champion-victory',
      notes: 'Promovido formalmente por el Director General a Champion Baseline (:Victory). La base previa seed queda archivada.'
    },
    publicNotes: [
      'Sistema de estados HITL: :Experimentacion -> :Mutacion -> :Challenger -> :Victory.',
      'Champion Activo (:Victory): Splinternet // Rewired (Suite de 5 Actos con transiciones fluidas).',
      'Ancla Vibe Aprobada: Reloj de Cuenta Regresiva a semicorcheas con sub-bass 35Hz.',
      'Loudness técnico de referencia: -14.0 LUFS integrados y True Peak < -1.0 dBTP.'
    ],
    sections: SPLINTERNET_SECTIONS,
    variations: SPLINTERNET_VARIATIONS
  },
  {
    id: 'track-03-neurogenesis',
    number: 2,
    title: 'Rewired // Neuro-Genesis',
    medium: 'Electrónica Modular / Síntesis FM & Industrial',
    status: 'candidate',
    lifecycle: ':Challenger',
    duration: '07:15 (Single Maestro Compilado Chained Suite)',
    summary: 'NUEVO SINGLE CHALLENGER (ARQUITECTURA DE CÓDIGO MAESTRO COMPILADO): Producido tras el dictamen del Director General de erradicar los cortes abruptos de REPL. Se conservan las mutaciones maestras #sec-ng-01 (Reloj Inmersivo) y #sec-ng-07 (Braam Catarsis), destruyendo formalmente las secciones 02-06. La obra se gobierna mediante un único código compilado continuo que encadena los actos con envolventes de Crossfader de potencia constante (Equal-Power: gain_out^2 + gain_in^2 == 1.0) y espina rítmica inalterada.',
    masterCompiledStrudelCode: NEUROGENESIS_MASTER_COMPILED_STRUDEL,
    humanApproval: {
      approved: false,
      signoff: 'Multi-Agent Crew L3 QA (Pending Human Signoff)',
      date: '2026-10-18',
      scope: 'continuous-single-compiled-master-suite',
      notes: 'Crew completó la unificación en un solo código maestro compilado con Equal-Power Crossfader. Secciones 02-06 destruidas.'
    },
    publicNotes: [
      'Arquitectura de Código Maestro: Un solo código compilado que encadena la obra completa sin cortes abruptos entre clips.',
      'Secciones conservadas: #sec-ng-01 (Ambient Inmersivo) y #sec-ng-07 (Braam Monumental 35Hz).',
      'Secciones destruidas: #sec-ng-02, #sec-ng-03, #sec-ng-04, #sec-ng-05, #sec-ng-06 (reemplazadas por el puente continuo morfogenético).',
      'Transición moderna: Dual-Plane Equal-Power Crossfade continuo (gain_out^2 + gain_in^2 == 1) con modulación de filtros y espina inalterada.'
    ],
    sections: NEUROGENESIS_SECTIONS,
    variations: NEUROGENESIS_VARIATIONS
  }
];

