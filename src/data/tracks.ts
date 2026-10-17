import type { Track } from './schema';

export const TRACKS: Track[] = [
  {
    id: 'track-01-backup',
    number: 1,
    title: 'Backup',
    medium: 'Música Digital / Electrónica Algorítmica',
    status: 'candidate',
    duration: '01:45',
    summary: 'Primer experimento público del ciclo RECOVERY. Un estudio algorítmico sobre la memoria mediada, la degradación de artefactos y la bifurcación temporal.',
    humanApproval: {
      approved: true,
      signoff: 'Human Creator',
      date: '2026-10-17',
      scope: 'seed-experiment-and-variations',
      notes: 'Aprobado como primer boceto algorítmico y estructura de 3 variaciones para el laboratorio público. Medio definido como música digital/electrónica basada en código e instrumentos digitales.'
    },
    publicNotes: [
      'Medio sonoro: Música Digital / Electrónica creada íntegramente mediante código fuente e instrumentos digitales.',
      'Construido a partir de la semilla conceptual de RECOVERY: la recuperación de la memoria humana en tránsito hacia una línea temporal alternativa.',
      'Cada variación explora un polo del eje: Museo (reliquia), Tránsito (combustible) y Fork (bifurcación irremediable).',
      'Código ejecutable en tiempo real mediante el motor algorítmico Strudel.'
    ],
    variations: [
      {
        id: 'museo',
        name: 'Variación A — Museo',
        concept: 'La memoria como reliquia',
        tension: 'recuerdo ↔ archivo (lo-fi / saturación / caída)',
        runtime: 'strudel',
        bpm: 72,
        description: 'Texturas filtradas y sostenidas en una cadencia lenta. La memoria humana preservada como un objeto en vitrina: degradada por el tiempo y el dither digital.',
        code: `// Variación A: Museo — La memoria como reliquia
// Filtrado paso bajo lento y retardo con realimentación
stack(
  note("<c3 eb3 g3 bb3 d4>".slow(4))
    .s("sine")
    .lpf(sine.range(350, 1100).slow(8))
    .decay(2.5)
    .sustain(0.4)
    .gain(0.7),
  s("bd:2 [~ bd:1] ~ bd:2")
    .gain(0.65)
    .lpf(750),
  s("hh*8")
    .gain(perlin.range(0.15, 0.5))
    .pan(sine.range(0.2, 0.8)),
  note("<g4 bb4 c5 eb5>*2")
    .s("triangle")
    .delay(0.4)
    .delaytime(0.25)
    .delayfeedback(0.5)
    .gain(0.35)
)`
      },
      {
        id: 'transito',
        name: 'Variación B — Tránsito',
        concept: 'La memoria como combustible',
        tension: 'orgánico ↔ procesado (motor rítmico / administración)',
        runtime: 'strudel',
        bpm: 124,
        description: 'Un motor de pulso implacable donde lo digital no es un enemigo, sino el administrador del mundo que acelera el archivo hacia adelante.',
        code: `// Variación B: Tránsito — La memoria como combustible
// Impulso rítmico percusivo y modulación de filtro sincronizada
stack(
  s("bd [~ bd] bd [~ bd]")
    .bank("RolandTR808")
    .gain(0.85),
  s("~ [cp,sd:1] ~ [cp,sd:1]")
    .gain(0.7),
  s("hh*16")
    .gain("<0.3 0.6 0.4 0.8>*4")
    .hpf(2500),
  note("c2 [c2 eb2] g1 [bb1 c2]")
    .s("sawtooth")
    .lpf(1300)
    .resonance(10)
    .gain(0.75),
  note("<c4 eb4 g4 bb4> [c5 eb5]")
    .s("square")
    .lpf(sine.range(600, 3000).slow(4))
    .gain(0.4)
    .pan(sine.range(0.15, 0.85).slow(2))
)`
      },
      {
        id: 'fork',
        name: 'Variación C — Fork',
        concept: 'La memoria ya en otra parte',
        tension: 'restauración ↔ fuga (disonancia persistente / compás abierto)',
        runtime: 'strudel',
        bpm: 110,
        description: 'Bifurcación estructural. Una nota disonante persistente (F# sobre C menor) actúa como la línea temporal alternativa filtrándose hacia el presente sin resolución final.',
        code: `// Variación C: Fork — La memoria ya en otra parte
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
      }
    ]
  }
];
