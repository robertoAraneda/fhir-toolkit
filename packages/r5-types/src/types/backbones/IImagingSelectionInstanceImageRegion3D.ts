import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ImagingSelection3DGraphicTypeType } from '../../valuesets/index.js';

/**
 * ImagingSelectionInstanceImageRegion3D Interface
 * 
 * A specific 3D region in a DICOM frame of reference
 * 
 *
 * @see https://hl7.org/fhir/R5/imagingselectioninstanceimageregion3d.html
 */
export interface IImagingSelectionInstanceImageRegion3D extends IBackboneElement {
  /**
   * point | multipoint | polyline | polygon | ellipse | ellipsoid
   */
  regionType: ImagingSelection3DGraphicTypeType;
  /**
   * Extension for regionType
   */
  _regionType?: IElement;

  /**
   * Specifies the coordinates that define the image region
   */
  coordinate: number[];
  /**
   * Extension for coordinate
   */
  _coordinate?: IElement;

}
