import type { Track } from './schema';

export const TRACKS: Track[] = [
  {
    id: 'track-01-backup',
    number: 1,
    title: 'Backup (Trojan Sandbox Iteration)',
    medium: 'Música Digital / Electrónica Algorítmica',
    status: 'candidate',
    duration: '03:45',
    summary: 'Estudio algorítmico del single "Backup" basado en la bifurcación FORK. La sesión modela un sistema antivirus que escanea en un sandbox aislado a un Caballo de Troya destruyendo memorias, transitando de la marcha totalitaria a la catarsis de un Rave de reciclaje.',
    humanApproval: {
      approved: true,
      signoff: 'Human Creator',
      date: '2026-10-17',
      scope: 'fork-trojan-sandbox-evolution',
      notes: 'Dirección aprobada: desarrollo de Fork con loops de suspenso, arpegios brillantes como Caballo de Troya, marcha imperial glitch, flatline con modem 1990s, solo invertido Santana (Black Magic Woman) y clímax Rave Techno.'
    },
    publicNotes: [
      'Concepto: La lectura de un antivirus analizando copias de un troyano en cuarentena mientras desmantela archivos de memoria.',
      'Arco dramático: Falso optimismo brillante (Caballo de Troya) → Marcha totalitaria uniforme e infectada → Flatline de signos vitales con eco analógico 1990s → Solo de guitarra rock invertido (Santana) → Rave de reciclaje y combate contra el totalitarismo.',
      'Medio sonoro: Instrumentos digitales, síntesis Web Audio y código algorítmico ejecutable en Strudel.'
    ],
    variations: [
      {
        id: 'fork-suite',
        name: 'Suite Completa — Simulación del Troyano',
        concept: 'El ciclo completo: Infección → Marcha → Flatline → Rave',
        tension: 'cuarentena ↔ marcha imperial ↔ catarsis techno',
        runtime: 'strudel',
        bpm: 124,
        description: 'La experiencia continua de la simulación. Encadena el suspenso del sandbox, el colapso de la marcha totalitaria y la explosión del rave liberador.',
        code: `// Suite Completa: Backup — Simulación del Troyano en Sandbox
// Encadenamiento algorítmico continuo de 3 actos
cat(
  // Acto I: Caballo de Troya (Suspenso y falso optimismo)
  stack(
    note("<[c2,g2] [eb2,bb2] [f2,c3] [fs2,c3]>").s("sawtooth").lpf(1300).gain(0.8),
    note("<[c5,e5,g5,b5] [d5,fs5,a5,cs6]>").s("triangle").fast(2).delay(0.4).delayfeedback(0.5).gain(0.4),
    s("bd:3 [~ bd:1] ~ [bd:3 ~]").bank("RolandTR909").gain(0.8),
    s("[hh*4, hh*8]").gain(0.5).hpf(3000)
  ).slow(4),

  // Acto II: Marcha Imperial, Infección Glitch y Flatline 1990s
  stack(
    s("sd*4").bank("RolandTR808").gain(0.9),
    s("bd [~ bd] bd [bd ~]").gain(0.85),
    note("<c3 eb3 g3 c4>*4").s("sawtooth").distort(0.65).lpf(1800),
    note("b6*8").s("sine").gain(0.65).decay(0.04), // Signos vitales / flatline
    note("<fs6 cs7 b6 e7>").s("square").fast(8).gain(0.35).lpf(3500) // Modem handshake
  ).slow(4),

  // Acto III: Solo Rock Invertido (Santana) & Rave de Reciclaje
  stack(
    note("<[d5,a4,f4] [c5,g4,e4] [bb4,f4,d4] [a4,e4,cs4]>") // Inversión Black Magic Woman
      .s("sawtooth").distort(0.7).gain(0.8).delay(0.35).delayfeedback(0.6),
    s("bd*4").bank("RolandTR909").gain(1.0),
    s("~ [cp,sd:2] ~ [cp,sd:2]").gain(0.85),
    s("hh*16").gain("<0.3 0.7 0.5 0.9>*4").hpf(4000),
    note("d2 [d2 f2] g2 [bb1 c2] cs2 d2") // Línea Acid 303
      .s("sawtooth").lpf(sine.range(400, 3400).slow(2)).resonance(18).gain(0.85)
  ).slow(4)
)`
      },
      {
        id: 'fork-sandbox',
        name: 'Acto I — Sandbox & Caballo de Troya',
        concept: 'La memoria como infección encubierta',
        tension: 'suspenso ↔ falso optimismo brillante',
        runtime: 'strudel',
        bpm: 110,
        description: 'Bucles extendidos en el sandbox aislado. Arpegios cristalinos que simulan un tono positivo pero operan como máscara del troyano destruyendo archivos en segundo plano.',
        code: `// Acto I: Sandbox & Caballo de Troya (Suspenso y brillo engañoso)
stack(
  note("<[c2,g2] [eb2,bb2] [f2,c3] [fs2,c3]>".slow(2))
    .s("sawtooth")
    .lpf(1200)
    .gain(0.8),
  // Arpegio brillante engañoso (Caballo de Troya)
  note("<[c5,e5,g5,b5] [d5,fs5,a5,cs6] [eb5,g5,bb5,d6]>")
    .s("triangle")
    .fast(2)
    .delay(0.4)
    .delaytime(0.125)
    .delayfeedback(0.55)
    .gain(0.45),
  s("bd:3 [~ bd:1] ~ [bd:3 ~]")
    .bank("RolandTR909")
    .gain(0.8),
  s("rim*5")
    .gain(0.6)
    .pan(sine.range(0.2, 0.8).slow(3)),
  s("[hh*4, hh*8]")
    .gain(perlin.range(0.2, 0.65))
    .hpf(3000)
)`
      },
      {
        id: 'fork-march',
        name: 'Acto II — Marcha Totalitaria & Flatline',
        concept: 'Disciplina imperial, dither destructivo y modem 56k',
        tension: 'uniformidad militar ↔ glitch ↔ signos vitales',
        runtime: 'strudel',
        bpm: 120,
        description: 'Una marcha imperial uniforme y clara sin distorsión que es progresivamente desarticulada por ráfagas glitch. El bajo desaparece por completo dejando solo un beep de signos vitales y un guiño analógico al tono de conexión de internet de los 90s.',
        code: `// Acto II: Marcha Imperial, Glitch y Flatline 1990s
stack(
  // Marcha militar uniforme y disciplinada
  s("sd*4")
    .bank("RolandTR808")
    .gain(0.9),
  s("bd [~ bd] bd [bd ~]")
    .gain(0.85),
  // Bloque armónico uniforme desintegrado por distorsión
  note("<c3 eb3 g3 c4>*4")
    .s("sawtooth")
    .distort(sine.range(0.1, 0.85).slow(4))
    .lpf(2000),
  // Monótono beep vital (flatline sin bajo)
  note("b6*8")
    .s("sine")
    .gain("<0 0 0.75 0.75>")
    .decay(0.04),
  // Guiño de conexión dial-up 1990s / fax
  note("<fs6 cs7 b6 e7>")
    .s("square")
    .fast(8)
    .gain("<0 0 0.35 0.5>")
    .lpf(4000)
)`
      },
      {
        id: 'fork-rave',
        name: 'Acto III — Inversión Santana & Rave de Reciclaje',
        concept: 'Solo de rock invertido y catarsis Techno',
        tension: 'blues-rock al revés ↔ ritmo rave demoledor',
        runtime: 'strudel',
        bpm: 138,
        description: 'La guitarra eléctrica entra sin acompañamiento ejecutando las frases de Black Magic Woman de Santana de forma invertida (al revés). De inmediato, una base de batería rave caótica toma el control: el proceso de reciclaje del troyano despidiendo el totalitarismo a golpes de Techno.',
        code: `// Acto III: Inversión Santana (Black Magic Woman al revés) & Rave de Reciclaje
stack(
  // Guitarra rock invertida (Santana al revés sobre Dm)
  note("<[d5,a4,f4] [c5,g4,e4] [bb4,f4,d4] [a4,e4,cs4]>")
    .s("sawtooth")
    .distort(0.7)
    .gain(0.8)
    .delay(0.35)
    .delayfeedback(0.6),
  // Motor Rave Techno implacable
  s("bd*4")
    .bank("RolandTR909")
    .gain(1.0),
  s("~ [cp,sd:2] ~ [cp,sd:2]")
    .gain(0.85),
  s("hh*16")
    .gain("<0.3 0.7 0.5 0.9>*4")
    .hpf(4000),
  // Bajo Acid 303 en combate abierto contra la marcha
  note("d2 [d2 f2] g2 [bb1 c2] cs2 d2")
    .s("sawtooth")
    .lpf(sine.range(400, 3400).slow(2))
    .resonance(18)
    .gain(0.85)
)`
      }
    ]
  }
];
