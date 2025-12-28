import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';

/**
 * ImagingStudySeriesInstance Interface
 * 
 * A single SOP instance from the series
 * 
 *
 * @see https://hl7.org/fhir/R4B/imagingstudyseriesinstance.html
 */
export interface IImagingStudySeriesInstance extends IBackboneElement {
  /**
   * DICOM SOP Instance UID
   */
  uid: string;
  /**
   * Extension for uid
   */
  _uid?: IElement;

  /**
   * DICOM class type
   */
  sopClass: ICoding;

  /**
   * The number of this instance in the series
   */
  number?: number;
  /**
   * Extension for number
   */
  _number?: IElement;

  /**
   * Description of instance
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

}
