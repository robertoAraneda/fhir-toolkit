/**
 * Imaging Selection2 D Graphic Type
 * 
 * The type of 2D coordinates describing a 2D image region.
 *
 * @see http://hl7.org/fhir/ValueSet/imagingselection-2dgraphictype
 */

export type ImagingSelection2DGraphicTypeType = 'point' | 'polyline' | 'interpolated' | 'circle' | 'ellipse';

export enum ImagingSelection2DGraphicTypeEnum {
  /** POINT */
  Point = 'point',
  /** POLYLINE */
  Polyline = 'polyline',
  /** INTERPOLATED */
  Interpolated = 'interpolated',
  /** CIRCLE */
  Circle = 'circle',
  /** ELLIPSE */
  Ellipse = 'ellipse',
}

export const ImagingSelection2DGraphicTypeValues = ['point', 'polyline', 'interpolated', 'circle', 'ellipse'] as const;
