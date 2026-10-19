// ==============================================================================
// RECOVERY // MODULAR CANVAS COMPONENT ARCHITECTURE (ESTILO REACT)
// Componentes modulares, desacoplados y puros para la vista multipista DAW
// ==============================================================================

export interface ArrangerProps {
  w: number;
  h: number;
  rulerH: number;
  headerW: number;
  timelineW: number;
  totalDuration: number;
  visibleDur: number;
  scrollOffsetSec: number;
  zoomLevel: number;
  curSec: number;
  isLight: boolean;
  isPlaying: boolean;
  selStart: number;
  selEnd: number;
  selectedTrackIdx: number;
  tracksMuted: boolean[];
  soloTrackIdx: number | null;
  abletonTracks: any[];
  timeToX: (sec: number) => number;
  formatTime: (sec: number) => string;
  hexToRgb: (hex: string) => string;
  isTrackAudible: (idx: number) => boolean;
}

// ------------------------------------------------------------------------------
// <TimelineRuler />
// Componente de Regla Superior: Compases, Marcas de Tiempo y Punteros Loop Brace
// ------------------------------------------------------------------------------
export function renderTimelineRulerComponent(ctx2d: CanvasRenderingContext2D, props: ArrangerProps): void {
  const { w, rulerH, headerW, timelineW, totalDuration, visibleDur, scrollOffsetSec, zoomLevel, isLight, selStart, selEnd, timeToX, formatTime } = props;

  // Fondo y borde inferior del Ruler
  ctx2d.fillStyle = isLight ? '#e2e8f0' : '#0f172a';
  ctx2d.fillRect(0, 0, w, rulerH);
  ctx2d.strokeStyle = isLight ? '#cbd5e1' : '#1e293b';
  ctx2d.lineWidth = 1;
  ctx2d.beginPath();
  ctx2d.moveTo(0, rulerH);
  ctx2d.lineTo(w, rulerH);
  ctx2d.stroke();

  // Etiqueta de columna lateral
  ctx2d.font = 'bold 8.5px monospace';
  ctx2d.fillStyle = isLight ? '#475569' : '#94a3b8';
  ctx2d.fillText('PISTAS (09)', 8, 15);

  // Marcas de compás y tiempo
  const bpmEst = 118;
  const barSec = (60 / bpmEst) * 4;
  const totalBars = Math.ceil(totalDuration / barSec);
  const barStep = zoomLevel >= 2.5 ? 2 : (zoomLevel >= 1.5 ? 4 : 8);

  ctx2d.font = '7.5px monospace';
  for (let b = 1; b <= totalBars; b += barStep) {
    const bSec = (b - 1) * barSec;
    const bx = timeToX(bSec);
    if (bx >= headerW - 5 && bx <= w + 5) {
      ctx2d.strokeStyle = isLight ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.14)';
      ctx2d.beginPath();
      ctx2d.moveTo(bx, 10);
      ctx2d.lineTo(bx, rulerH);
      ctx2d.stroke();

      ctx2d.fillStyle = isLight ? '#475569' : '#64748b';
      ctx2d.fillText(`c.${b}`, bx + 3, 13);
      ctx2d.fillText(formatTime(bSec), bx + 3, 21);
    }
  }

  // Pointers de Selección / Loop Brace en el Ruler (Estilo DAW Suno Studio)
  const selLeftX = timeToX(selStart);
  const selRightX = timeToX(selEnd);
  if (selRightX >= headerW && selLeftX <= w) {
    const clampedLeft = Math.max(headerW, selLeftX);
    const clampedRight = Math.min(w, selRightX);

    ctx2d.fillStyle = 'rgba(56, 189, 248, 0.2)';
    ctx2d.fillRect(clampedLeft, 0, Math.max(2, clampedRight - clampedLeft), rulerH);

    // Puntero izquierdo hacia abajo
    if (selLeftX >= headerW && selLeftX <= w) {
      ctx2d.fillStyle = '#38bdf8';
      ctx2d.beginPath();
      ctx2d.moveTo(selLeftX - 5, 0);
      ctx2d.lineTo(selLeftX + 5, 0);
      ctx2d.lineTo(selLeftX, 8);
      ctx2d.closePath();
      ctx2d.fill();
    }

    // Puntero derecho hacia abajo
    if (selRightX >= headerW && selRightX <= w) {
      ctx2d.fillStyle = '#38bdf8';
      ctx2d.beginPath();
      ctx2d.moveTo(selRightX - 5, 0);
      ctx2d.lineTo(selRightX + 5, 0);
      ctx2d.lineTo(selRightX, 8);
      ctx2d.closePath();
      ctx2d.fill();
    }
  }
}

// ------------------------------------------------------------------------------
// <TrackHeader />
// Componente de Cabecera Lateral Izquierda de Pista (Mute, Solo, VU Meter)
// ------------------------------------------------------------------------------
export function renderTrackHeaderComponent(
  ctx2d: CanvasRenderingContext2D,
  track: any,
  tIdx: number,
  laneY: number,
  laneH: number,
  props: ArrangerProps
): void {
  const { headerW, isLight, isPlaying, curSec, selectedTrackIdx, tracksMuted, soloTrackIdx, isTrackAudible } = props;

  const isMuted = tracksMuted[tIdx];
  const isSolo = (soloTrackIdx === tIdx);

  // Fondo del Header
  ctx2d.fillStyle = isLight ? '#e2e8f0' : '#141b27';
  ctx2d.fillRect(0, laneY, headerW, laneH);

  // Barra de acento de color de pista (4px)
  ctx2d.fillStyle = track.color;
  ctx2d.fillRect(0, laneY, 4, laneH);

  if (isSolo) {
    ctx2d.fillStyle = '#f59e0b';
    ctx2d.fillRect(4, laneY, 2, laneH);
  }

  // Separador vertical derecho de la cabecera
  ctx2d.strokeStyle = isLight ? '#cbd5e1' : '#222d3d';
  ctx2d.beginPath();
  ctx2d.moveTo(headerW, laneY);
  ctx2d.lineTo(headerW, laneY + laneH);
  ctx2d.stroke();

  // Número y Nombre de la pista
  ctx2d.font = 'bold 8.5px monospace';
  ctx2d.fillStyle = isMuted ? (isLight ? '#94a3b8' : '#475569') : track.color;
  ctx2d.fillText(track.num, 7, laneY + 12);

  ctx2d.font = 'bold 8.5px monospace';
  ctx2d.fillStyle = isMuted ? (isLight ? '#94a3b8' : '#64748b') : (isLight ? '#0f172a' : '#f8fafc');
  const maxNameChars = headerW < 100 ? 5 : 8;
  ctx2d.fillText(track.name.slice(0, maxNameChars), 23, laneY + 12);

  // Subtítulo del motor de síntesis
  if (headerW > 85) {
    ctx2d.font = '7px monospace';
    ctx2d.fillStyle = isLight ? '#64748b' : '#64748b';
    ctx2d.fillText(track.sub.slice(0, 14), 7, laneY + 23);
  }

  // Botón interactivo Mute en cabecera [ON] / [M]
  const muteBoxX = headerW - 38;
  const muteBoxY = laneY + 4;
  const muteBoxW = 18;
  const muteBoxH = 13;
  ctx2d.fillStyle = isMuted ? (isLight ? '#ef4444' : '#7f1d1d') : (isLight ? '#10b981' : '#064e3b');
  ctx2d.fillRect(muteBoxX, muteBoxY, muteBoxW, muteBoxH);
  ctx2d.font = 'bold 7px monospace';
  ctx2d.fillStyle = '#ffffff';
  ctx2d.fillText(isMuted ? 'M' : 'ON', muteBoxX + (isMuted ? 6 : 3), muteBoxY + 9.5);

  // Botón interactivo Solo [S]
  const soloBoxX = headerW - 17;
  const soloBoxY = laneY + 4;
  const soloBoxW = 14;
  const soloBoxH = 13;
  ctx2d.fillStyle = isSolo ? '#f59e0b' : (isLight ? '#cbd5e1' : '#1e293b');
  ctx2d.fillRect(soloBoxX, soloBoxY, soloBoxW, soloBoxH);
  ctx2d.fillStyle = isSolo ? '#000000' : (isLight ? '#64748b' : '#94a3b8');
  ctx2d.fillText('S', soloBoxX + 4.5, soloBoxY + 9.5);

  // Indicador LED / VU Meter animado
  const activeClip = track.clips.find((c: any) => curSec >= c.startSec && curSec < c.endSec);
  const isTrackActive = isPlaying && activeClip && activeClip.active && isTrackAudible(tIdx);
  const ledX = headerW - 8;
  const ledY = laneY + 24;
  ctx2d.beginPath();
  ctx2d.arc(ledX, ledY, 2.5, 0, Math.PI * 2);
  ctx2d.fillStyle = isTrackActive ? track.color : (isLight ? '#cbd5e1' : '#1e293b');
  ctx2d.fill();
}

// ------------------------------------------------------------------------------
// <TrackLane />
// Componente de Carril Horizontal de Pista (Fondo, Resaltado de Selección)
// ------------------------------------------------------------------------------
export function renderTrackLaneComponent(
  ctx2d: CanvasRenderingContext2D,
  track: any,
  tIdx: number,
  laneY: number,
  laneH: number,
  props: ArrangerProps
): void {
  const { w, isLight, selectedTrackIdx } = props;
  const isTrackSelected = (selectedTrackIdx === tIdx);

  // Fondo de fila alternado
  ctx2d.fillStyle = isLight
    ? (tIdx % 2 === 0 ? '#f8fafc' : '#f1f5f9')
    : (tIdx % 2 === 0 ? '#0b0f17' : '#0e1420');
  ctx2d.fillRect(0, laneY, w, laneH);

  // Resaltado sutil si es la pista seleccionada
  if (isTrackSelected) {
    ctx2d.fillStyle = isLight ? 'rgba(56, 189, 248, 0.08)' : 'rgba(56, 189, 248, 0.06)';
    ctx2d.fillRect(0, laneY, w, laneH);
  }

  // Separador inferior de pista
  ctx2d.strokeStyle = isLight ? '#e2e8f0' : 'rgba(255, 255, 255, 0.06)';
  ctx2d.lineWidth = 1;
  ctx2d.beginPath();
  ctx2d.moveTo(0, laneY + laneH);
  ctx2d.lineTo(w, laneY + laneH);
  ctx2d.stroke();
}

// ------------------------------------------------------------------------------
// <TrackClip />
// Componente de Clip de Audio en el Arreglo (Envolventes, Onda, Drag Handles)
// ------------------------------------------------------------------------------
export function renderTrackClipComponent(
  ctx2d: CanvasRenderingContext2D,
  clip: any,
  track: any,
  tIdx: number,
  laneY: number,
  laneH: number,
  props: ArrangerProps
): void {
  const { headerW, w, curSec, isLight, isPlaying, selStart, selEnd, selectedTrackIdx, tracksMuted, timeToX, hexToRgb, isTrackAudible } = props;

  const clipStartX = timeToX(clip.startSec);
  const clipEndX = timeToX(clip.endSec);
  const clipW = Math.max(3, clipEndX - clipStartX - 1);
  const clipY = laneY + 2;
  const clipH = laneH - 4;
  const isMuted = tracksMuted[tIdx];
  const isClipCurrent = isPlaying && (curSec >= clip.startSec && curSec < clip.endSec) && isTrackAudible(tIdx);
  const isTrackSelected = (selectedTrackIdx === tIdx);

  if (clipEndX < headerW || clipStartX > w) return;

  const visibleClipStartX = Math.max(headerW, clipStartX);
  const visibleClipW = Math.min(clipW, w - visibleClipStartX);

  if (clip.active && !isMuted) {
    const rgb = hexToRgb(track.color);
    ctx2d.fillStyle = isClipCurrent
      ? `rgba(${rgb}, 0.32)`
      : `rgba(${rgb}, 0.15)`;

    if ((ctx2d as any).roundRect) {
      ctx2d.beginPath();
      (ctx2d as any).roundRect(visibleClipStartX, clipY, visibleClipW, clipH, 3);
      ctx2d.fill();
      ctx2d.strokeStyle = isClipCurrent ? track.color : `rgba(${rgb}, 0.55)`;
      ctx2d.lineWidth = isClipCurrent ? 1.5 : 1;
      ctx2d.stroke();
    } else {
      ctx2d.fillRect(visibleClipStartX, clipY, visibleClipW, clipH);
      ctx2d.strokeStyle = isClipCurrent ? track.color : `rgba(${rgb}, 0.55)`;
      ctx2d.lineWidth = isClipCurrent ? 1.5 : 1;
      ctx2d.strokeRect(visibleClipStartX, clipY, visibleClipW, clipH);
    }

    // Pastilla de encabezado del clip
    if (visibleClipW > 35) {
      ctx2d.fillStyle = isClipCurrent ? track.color : `rgba(${rgb}, 0.8)`;
      ctx2d.fillRect(visibleClipStartX + 1, clipY + 1, Math.min(visibleClipW - 2, 105), 8);
      ctx2d.font = 'bold 7px monospace';
      ctx2d.fillStyle = '#ffffff';
      ctx2d.fillText(clip.label.slice(0, 16), visibleClipStartX + 3, clipY + 7);
    }

    // Formas de onda dinámicas del clip
    ctx2d.strokeStyle = isClipCurrent ? '#ffffff' : `rgba(${rgb}, 0.85)`;
    ctx2d.lineWidth = 1;
    ctx2d.beginPath();

    const waveYMid = clipY + 9 + (clipH - 9) / 2;
    const waveSteps = Math.min(48, Math.floor(visibleClipW / 3));
    const stepW = visibleClipW / Math.max(1, waveSteps);

    for (let ws = 0; ws < waveSteps; ws++) {
      const wx = visibleClipStartX + ws * stepW;
      let amp = 0.5;

      if (clip.type === 'sub') {
        amp = Math.sin(ws * 0.35 + (isClipCurrent ? Date.now() * 0.008 : 0)) * 0.75;
      } else if (clip.type === 'reese') {
        amp = (Math.sin(ws * 0.8) + Math.cos(ws * 1.6)) * 0.45;
      } else if (clip.type === 'breakbeat' || clip.type === 'kick') {
        amp = (ws % 4 === 0) ? 0.9 : ((ws % 2 === 0) ? 0.45 : 0.15);
      } else if (clip.type === 'pulse') {
        amp = (ws % 2 === 0) ? 0.7 : 0.2;
      } else if (clip.type === 'bells' || clip.type === 'melody' || clip.type === 'arp') {
        amp = Math.sin(ws * 0.5) * 0.6;
      } else {
        amp = (Math.sin(ws * 0.4) * 0.4) + 0.2;
      }

      if (isClipCurrent) {
        amp *= (1.0 + Math.sin(Date.now() * 0.01 + ws) * 0.25);
      }

      const maxAmpH = (clipH - 12) / 2;
      const wyTop = waveYMid - amp * maxAmpH;
      const wyBot = waveYMid + amp * maxAmpH;

      ctx2d.moveTo(wx, wyTop);
      ctx2d.lineTo(wx, wyBot);
    }
    ctx2d.stroke();

  } else {
    // Clip silenciado o en Mute
    ctx2d.fillStyle = isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.02)';
    ctx2d.fillRect(visibleClipStartX, clipY, visibleClipW, clipH);
    ctx2d.setLineDash([2, 2]);
    ctx2d.strokeStyle = isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)';
    ctx2d.strokeRect(visibleClipStartX, clipY, visibleClipW, clipH);
    ctx2d.setLineDash([]);
    if (visibleClipW > 30) {
      ctx2d.font = 'italic 7px monospace';
      ctx2d.fillStyle = isLight ? '#94a3b8' : '#64748b';
      ctx2d.fillText(isMuted ? '[MUTED]' : clip.label, visibleClipStartX + 4, clipY + 14);
    }
  }

  // Resaltado de selección activa de clip con drag handles (estilo Suno Studio)
  if (isTrackSelected && selEnd > clip.startSec && selStart < clip.endSec) {
    const hlStartX = Math.max(headerW, timeToX(Math.max(clip.startSec, selStart)));
    const hlEndX = Math.min(w, timeToX(Math.min(clip.endSec, selEnd)));
    const hlW = Math.max(4, hlEndX - hlStartX);
    ctx2d.strokeStyle = '#38bdf8';
    ctx2d.lineWidth = 1.8;
    ctx2d.strokeRect(hlStartX, clipY - 1, hlW, clipH + 2);

    // Tiradores de esquina estilo DAW
    ctx2d.fillStyle = '#38bdf8';
    ctx2d.fillRect(hlStartX - 1, clipY - 2, 4, 4);
    ctx2d.fillRect(hlStartX + hlW - 3, clipY - 2, 4, 4);
  }
}

// ------------------------------------------------------------------------------
// <ActMarkers />
// Componente de Marcadores de Transición entre Actos (00:40, 02:00, 04:35)
// ------------------------------------------------------------------------------
export function renderActMarkersComponent(ctx2d: CanvasRenderingContext2D, props: ArrangerProps): void {
  const { headerW, w, rulerH, h, isLight, timeToX } = props;

  [40, 120, 275].forEach(timeMarker => {
    const mx = timeToX(timeMarker);
    if (mx >= headerW && mx <= w) {
      ctx2d.setLineDash([3, 4]);
      ctx2d.strokeStyle = isLight ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.16)';
      ctx2d.lineWidth = 1;
      ctx2d.beginPath();
      ctx2d.moveTo(mx, rulerH);
      ctx2d.lineTo(mx, h);
      ctx2d.stroke();
      ctx2d.setLineDash([]);
    }
  });
}

// ------------------------------------------------------------------------------
// <Playhead />
// Componente de Cabezal Vertical y Puntero Scrubber
// ------------------------------------------------------------------------------
export function renderPlayheadComponent(ctx2d: CanvasRenderingContext2D, props: ArrangerProps): void {
  const { headerW, w, rulerH, h, curSec, timeToX } = props;
  const playheadX = timeToX(curSec);

  if (playheadX >= headerW && playheadX <= w) {
    ctx2d.strokeStyle = '#38bdf8';
    ctx2d.lineWidth = 2;
    ctx2d.shadowColor = '#0284c7';
    ctx2d.shadowBlur = 6;
    ctx2d.beginPath();
    ctx2d.moveTo(playheadX, rulerH);
    ctx2d.lineTo(playheadX, h);
    ctx2d.stroke();
    ctx2d.shadowBlur = 0;

    // Triángulo Scrubber en el Ruler
    ctx2d.fillStyle = '#38bdf8';
    ctx2d.beginPath();
    ctx2d.moveTo(playheadX - 5, rulerH - 6);
    ctx2d.lineTo(playheadX + 5, rulerH - 6);
    ctx2d.lineTo(playheadX, rulerH);
    ctx2d.closePath();
    ctx2d.fill();
  }
}

// ------------------------------------------------------------------------------
// <ArrangerCanvas />
// Orquestador Principal del Canvas (Modelo de Componente Raíz tipo React)
// ------------------------------------------------------------------------------
export function renderArrangerCanvas(ctx2d: CanvasRenderingContext2D, props: ArrangerProps): void {
  const { w, h, rulerH, isLight, abletonTracks } = props;

  // 1. Limpieza y Fondo Base
  ctx2d.fillStyle = isLight ? '#f8fafc' : '#080c14';
  ctx2d.fillRect(0, 0, w, h);

  // 2. <TimelineRuler />
  renderTimelineRulerComponent(ctx2d, props);

  // 3. Pistas y Carriles
  const numTracks = abletonTracks.length;
  const laneH = (h - rulerH) / numTracks;

  abletonTracks.forEach((track: any, tIdx: number) => {
    const laneY = rulerH + tIdx * laneH;

    // <TrackLane />
    renderTrackLaneComponent(ctx2d, track, tIdx, laneY, laneH, props);

    // <TrackHeader />
    renderTrackHeaderComponent(ctx2d, track, tIdx, laneY, laneH, props);

    // <TrackClip /> por cada clip en el carril
    track.clips.forEach((clip: any) => {
      renderTrackClipComponent(ctx2d, clip, track, tIdx, laneY, laneH, props);
    });
  });

  // 4. <ActMarkers />
  renderActMarkersComponent(ctx2d, props);

  // 5. <Playhead />
  renderPlayheadComponent(ctx2d, props);
}

// ------------------------------------------------------------------------------
// <BaselineCompactCanvas />
// Componente de Visualización Compacta para DECK 1 (Baseline)
// ------------------------------------------------------------------------------
export function renderBaselineCompactCanvas(
  ctx2d: CanvasRenderingContext2D,
  w: number,
  h: number,
  analyser: AnalyserNode | null,
  isPlaying: boolean,
  isLight: boolean
): void {
  const canvasBg = isLight ? '#f8fafc' : '#080c14';
  const gridLineColor = isLight ? '#e2e8f0' : '#1a2230';
  const baselineColor = isLight ? '#059669' : '#10b981';

  ctx2d.fillStyle = canvasBg;
  ctx2d.fillRect(0, 0, w, h);

  if (!isPlaying || !analyser) {
    ctx2d.strokeStyle = gridLineColor;
    ctx2d.lineWidth = 1;
    ctx2d.beginPath();
    ctx2d.moveTo(0, h / 2);
    ctx2d.lineTo(w, h / 2);
    ctx2d.stroke();
    return;
  }

  const bufferLen = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLen);
  analyser.getByteTimeDomainData(dataArray);
  ctx2d.lineWidth = 1.8;
  ctx2d.strokeStyle = baselineColor;
  ctx2d.beginPath();
  const sliceWidth = w / bufferLen;
  let x = 0;
  for (let i = 0; i < bufferLen; i++) {
    const v = dataArray[i] / 128.0;
    const y = (v * h) / 2;
    if (i === 0) ctx2d.moveTo(x, y);
    else ctx2d.lineTo(x, y);
    x += sliceWidth;
  }
  ctx2d.stroke();
}
