import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ImagingSelection2DGraphicTypeType } from '../../valuesets/index.js';

/**
 * ImagingSelectionInstanceImageRegion2D Interface
 * 
 * A specific 2D region in a DICOM image / frame
 * 
 *
 * @see https://hl7.org/fhir/R4/imagingselectioninstanceimageregion2d.html
 */
export interface IImagingSelectionInstanceImageRegion2D extends IBackboneElement {
  /**
   * point | polyline | interpolated | circle | ellipse
   */
  regionType: ImagingSelection2DGraphicTypeType;
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
