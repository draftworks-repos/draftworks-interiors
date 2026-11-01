import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getContourForRelativePosition,
  getClipPathPolygon,
  getSvgClipPathD,
} from './curvedGallery';

test('Center image (pos 0) is a symmetric rectangle with horizontal top & bottom', () => {
  const center = getContourForRelativePosition(0);
  // Center image top and bottom should be horizontal and equal
  assert.equal(center.yTL, 14.0);
  assert.equal(center.yTR, 14.0);
  assert.equal(center.yBL, 86.0);
  assert.equal(center.yBR, 86.0);
});

test('Geometry is perfectly mirrored between left and right sides', () => {
  const posNeg1 = getContourForRelativePosition(-1);
  const posPos1 = getContourForRelativePosition(1);

  // Left side outer-left equals right side outer-right
  assert.equal(posNeg1.yTL, posPos1.yTR);
  assert.equal(posNeg1.yBL, posPos1.yBR);

  // Left side inner-right equals right side inner-left (meeting the center)
  assert.equal(posNeg1.yTR, posPos1.yTL);
  assert.equal(posNeg1.yBR, posPos1.yBL);
});

test('Adjacent slide boundaries match continuously without gaps', () => {
  const outerLeft = getContourForRelativePosition(-2);
  const innerLeft = getContourForRelativePosition(-1);
  const center = getContourForRelativePosition(0);
  const innerRight = getContourForRelativePosition(1);
  const outerRight = getContourForRelativePosition(2);

  // Outer-left right edge matches Inner-left left edge
  assert.equal(outerLeft.yTR, innerLeft.yTL);
  assert.equal(outerLeft.yBR, innerLeft.yBL);

  // Inner-left right edge matches Center left edge
  assert.equal(innerLeft.yTR, center.yTL);
  assert.equal(innerLeft.yBR, center.yBL);

  // Center right edge matches Inner-right left edge
  assert.equal(center.yTR, innerRight.yTL);
  assert.equal(center.yBR, innerRight.yBL);

  // Inner-right right edge matches Outer-right left edge
  assert.equal(innerRight.yTR, outerRight.yTL);
  assert.equal(innerRight.yBR, outerRight.yBL);
});

test('Outermost edges expand to full height', () => {
  const outerLeft = getContourForRelativePosition(-2);
  const outerRight = getContourForRelativePosition(2);

  assert.equal(outerLeft.yTL, 0);
  assert.equal(outerLeft.yBL, 100);
  assert.equal(outerRight.yTR, 0);
  assert.equal(outerRight.yBR, 100);
});

test('Polygon and SVG clip path formats are valid strings', () => {
  const poly = getClipPathPolygon(0);
  assert.ok(poly.startsWith('polygon('));
  assert.ok(poly.includes('14%'));

  const svgD = getSvgClipPathD(0);
  assert.ok(svgD.startsWith('M 0 0.14'));
  assert.ok(svgD.endsWith('Z'));
});
