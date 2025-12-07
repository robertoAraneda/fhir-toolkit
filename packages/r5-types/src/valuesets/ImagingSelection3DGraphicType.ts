/**
 * Imaging Selection3 D Graphic Type
 * 
 * The type of coordinates describing a 3D image region.
 *
 * @see http://hl7.org/fhir/ValueSet/imagingselection-3dgraphictype
 */

export type ImagingSelection3DGraphicTypeType = 'point' | 'multipoint' | 'polyline' | 'polygon' | 'ellipse' | 'ellipsoid';

export enum ImagingSelection3DGraphicTypeEnum {
  /** POINT */
  Point = 'point',
  /** MULTIPOINT */
  Multipoint = 'multipoint',
  /** POLYLINE */
  Polyline = 'polyline',
  /** POLYGON */
  Polygon = 'polygon',
  /** ELLIPSE */
  Ellipse = 'ellipse',
  /** ELLIPSOID */
  Ellipsoid = 'ellipsoid',
}

export const ImagingSelection3DGraphicTypeValues = ['point', 'multipoint', 'polyline', 'polygon', 'ellipse', 'ellipsoid'] as const;
