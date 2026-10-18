export interface Exponent {
  id: string;
  name: string;
  role: string;
  signatureSound: string;
}

export interface Metacategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  exponents: Exponent[];
}

export const METACATEGORIES: Metacategory[] = [
  {
    id: 'rock-industrial',
    name: 'Rock / Industrial / Hardcore',
    icon: '🎸',
    description: 'Breakbeats pesados, afinaciones Drop-D, guitarras crunch procesadas y silencios brutales.',
    exponents: [
      { id: 'linkin-park', name: 'Linkin Park', role: 'Hybrid Nu-Metal Breakbeat', signatureSound: 'Batería híbrida sincopada + ghost snares + riffs Drop-D' },
      { id: 'nine-inch-nails', name: 'Nine Inch Nails', role: 'Industrial Soundscape', signatureSound: 'Saturación analógica destructiva + texturas mecánicas' },
      { id: 'code-orange', name: 'Code Orange', role: 'Brutalist Digital Hardcore', signatureSound: 'Dropouts instantáneos a 0ms + clipping abrasivo' },
      { id: 'deftones', name: 'Deftones', role: 'Shoegaze Heavy Alt-Metal', signatureSound: 'Muros de sonido densos + modulaciones etéreas' }
    ]
  },
  {
    id: 'bass-dubstep',
    name: 'Bass Music / Dubstep / Neuro',
    icon: '🔊',
    description: 'Síntesis FM quirúrgica, bajos neurofunk con formantes vocales y tresillos de fusa.',
    exponents: [
      { id: 'skrillex', name: 'Skrillex', role: 'Surgical FM Bass / Modern Dubstep', signatureSound: 'Growl bass FM + formantes vocales + micro-stutters a 140 BPM' },
      { id: 'noisia', name: 'Noisia', role: 'Neurofunk Engineering', signatureSound: 'Reese bass hiper-modulado + ingeniería de transientes implacable' },
      { id: 'burial', name: 'Burial', role: 'Future Garage / Dither Artifacts', signatureSound: 'Vinilo crujiente + samples vocales mediados + cajas fuera de rejilla' },
      { id: 'aphex-twin', name: 'Aphex Twin', role: 'Braindance / IDM Algorítmico', signatureSound: 'Micro-edición matemática + polirritmias extremas' }
    ]
  },
  {
    id: 'electronic-french',
    name: 'Electronic / French Touch',
    icon: '🎛',
    description: 'Filtros paso bajo 4-pole resonantes, compresión sidechain extrema y vocoders analógicos.',
    exponents: [
      { id: 'daft-punk', name: 'Daft Punk', role: 'French Touch & Robotic Vocoder', signatureSound: 'Sweeps LP 4-pole con LFO + sidechain pump + acordes disco filtrados' },
      { id: 'justice', name: 'Justice', role: 'Distorted Electro Rock', signatureSound: 'Micro-chops saturados + compresión destructiva en el master' },
      { id: 'gesaffelstein', name: 'Gesaffelstein', role: 'Dark Industrial Techno', signatureSound: 'Bombos secos implacables + sintetizadores monolíticos oscuros' },
      { id: 'chemical-brothers', name: 'The Chemical Brothers', role: 'Big Beat Psychedelia', signatureSound: 'Líneas ácidas desbordadas + percusiones abrasivas' }
    ]
  },
  {
    id: 'cinematic-ambient',
    name: 'Cinematic / Ambient / Soundscape',
    icon: '🎬',
    description: 'Escala monumental, cuentas regresivas implacables, sub-braams a 35Hz y tonos Shepard.',
    exponents: [
      { id: 'hans-zimmer', name: 'Hans Zimmer', role: 'Apocalyptic Cinematic Scale', signatureSound: 'Ticking clock Dunkirk + monumental 35Hz sub-braams' },
      { id: 'vangelis', name: 'Vangelis', role: 'Dystopian CS-80 Synth', signatureSound: 'Bronce electrónico majestuoso + reverberación infinita' },
      { id: 'max-richter', name: 'Max Richter', role: 'Post-Minimalist Repetition', signatureSound: 'Motivos de piano y cuerdas en bucles hipnóticos' },
      { id: 'brian-eno', name: 'Brian Eno', role: 'Generative Ambient Philosophy', signatureSound: 'Texturas de cinta magnética y paisajes no invasivos' }
    ]
  },
  {
    id: 'techno-acid',
    name: 'Techno / Acid Rave',
    icon: '⚡',
    description: 'Pulsos 4/4 implacables a 138+ BPM, resonancia Roland TB-303 y catarsis de combate.',
    exponents: [
      { id: 'the-prodigy', name: 'The Prodigy', role: 'Anarchic Rave Punk', signatureSound: 'Breakbeats demoledores + stabs punzantes de sintetizador' },
      { id: 'underworld', name: 'Underworld', role: 'Progressive Acid Techno', signatureSound: 'Secuencias 303 hipnóticas + poesía hablada fragmentada' },
      { id: 'richie-hawtin', name: 'Richie Hawtin (Plastikman)', role: 'Minimal Acid Surgeon', signatureSound: '303 quirúrgica despojada de todo artificio' },
      { id: 'jeff-mills', name: 'Jeff Mills', role: 'Detroit Sci-Fi Techno', signatureSound: 'TR-909 implacable a altas revoluciones sin concesiones' }
    ]
  }
];
