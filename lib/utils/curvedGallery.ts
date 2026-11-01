/**
 * Mathematical geometry for the Curved Morphing Infinite Hero Slider.
 * Computes symmetrical wave contours based on distance from the active center image.
 */

export interface ContourPoints {
  yTL: number; // top-left (0 to 100%)
  yTC: number; // top-center
  yTR: number; // top-right
  yBR: number; // bottom-right
  yBC: number; // bottom-center
  yBL: number; // bottom-left
}

/**
 * Height bounds:
 * Center image sits vertically centered between 14% and 86% of container height.
 * Outer images expand upward toward 0% and downward toward 100%.
 */
export function getContourForRelativePosition(pos: number): ContourPoints {
  // Helper to calculate top/bottom boundary at any global offset x (-2.5 to +2.5)
  const getTopAtX = (x: number) => {
    const absX = Math.abs(x);
    if (absX <= 0.5) return 14.0; // Flat horizontal center
    const t = Math.min(1, Math.max(0, (absX - 0.5) / 2.0));
    // Smooth quadratic ease towards outer edge
    return 14.0 * (1 - Math.pow(t, 1.25));
  };

  const getBottomAtX = (x: number) => {
    const absX = Math.abs(x);
    if (absX <= 0.5) return 86.0; // Flat horizontal center
    const t = Math.min(1, Math.max(0, (absX - 0.5) / 2.0));
    return 86.0 + 14.0 * Math.pow(t, 1.25);
  };

  const xL = pos - 0.5;
  const xC = pos;
  const xR = pos + 0.5;

  const yTL = Number(getTopAtX(xL).toFixed(2));
  const yTC = Number(getTopAtX(xC).toFixed(2));
  const yTR = Number(getTopAtX(xR).toFixed(2));

  const yBR = Number(getBottomAtX(xR).toFixed(2));
  const yBC = Number(getBottomAtX(xC).toFixed(2));
  const yBL = Number(getBottomAtX(xL).toFixed(2));

  return { yTL, yTC, yTR, yBR, yBC, yBL };
}

/**
 * Returns a CSS clip-path polygon string for the given relative position
 */
export function getClipPathPolygon(pos: number): string {
  const { yTL, yTC, yTR, yBR, yBC, yBL } = getContourForRelativePosition(pos);
  return `polygon(
    0% ${yTL}%,
    50% ${yTC}%,
    100% ${yTR}%,
    100% ${yBR}%,
    50% ${yBC}%,
    0% ${yBL}%
  )`.replace(/\s+/g, ' ');
}

/**
 * Returns an SVG path string in objectBoundingBox coordinates (0 to 1)
 * with quadratic Bézier curves for perfectly smooth organic arcs.
 */
export function getSvgClipPathD(pos: number): string {
  const { yTL, yTC, yTR, yBR, yBC, yBL } = getContourForRelativePosition(pos);
  const nTL = yTL / 100;
  const nTC = yTC / 100;
  const nTR = yTR / 100;
  const nBR = yBR / 100;
  const nBC = yBC / 100;
  const nBL = yBL / 100;

  return `M 0 ${nTL} Q 0.5 ${nTC} 1 ${nTR} L 1 ${nBR} Q 0.5 ${nBC} 0 ${nBL} Z`;
}
