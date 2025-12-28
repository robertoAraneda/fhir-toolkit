import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';
import type { IImagingSelectionInstanceImageRegion2D } from './IImagingSelectionInstanceImageRegion2D.js';
import type { IImagingSelectionInstanceImageRegion3D } from './IImagingSelectionInstanceImageRegion3D.js';

/**
 * ImagingSelectionInstance Interface
 * 
 * The selected instances
 * 
 *
 * @see https://hl7.org/fhir/R5/imagingselectioninstance.html
 */
export interface IImagingSelectionInstance extends IBackboneElement {
  /**
   * DICOM SOP Instance UID
   */
  uid: string;
  /**
   * Extension for uid
   */
  _uid?: IElement;

  /**
   * DICOM Instance Number
   */
  number?: number;
  /**
   * Extension for number
   */
  _number?: IElement;

  /**
   * DICOM SOP Class UID
   */
  sopClass?: ICoding;

  /**
   * The selected subset of the SOP Instance
   */
  subset?: string[];
  /**
   * Extension for subset
   */
  _subset?: IElement;

  /**
   * A specific 2D region in a DICOM image / frame
   */
  imageRegion2D?: IImagingSelectionInstanceImageRegion2D[];

  /**
   * A specific 3D region in a DICOM frame of reference
   */
  imageRegion3D?: IImagingSelectionInstanceImageRegion3D[];

}
