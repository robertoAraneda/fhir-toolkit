import type { IBackboneElement, ICoding, IElement, IReference } from '../../base/index.js';
import type { IImagingStudySeriesInstance } from './IImagingStudySeriesInstance.js';
import type { IImagingStudySeriesPerformer } from './IImagingStudySeriesPerformer.js';

/**
 * ImagingStudySeries Interface
 * 
 * Each study has one or more series of instances
 * 
 *
 * @see https://hl7.org/fhir/R4/imagingstudyseries.html
 */
export interface IImagingStudySeries extends IBackboneElement {
  /**
   * DICOM Series Instance UID for the series
   */
  uid: string;
  /**
   * Extension for uid
   */
  _uid?: IElement;

  /**
   * Numeric identifier of this series
   */
  number?: number;
  /**
   * Extension for number
   */
  _number?: IElement;

  /**
   * The modality of the instances in the series
   */
  modality: ICoding;

  /**
   * A short human readable summary of the series
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Number of Series Related Instances
   */
  numberOfInstances?: number;
  /**
   * Extension for numberOfInstances
   */
  _numberOfInstances?: IElement;

  /**
   * Series access endpoint
   */
  endpoint?: IReference<'Endpoint'>[];

  /**
   * Body part examined
   */
  bodySite?: ICoding;

  /**
   * Body part laterality
   */
  laterality?: ICoding;

  /**
   * Specimen imaged
   */
  specimen?: IReference<'Specimen'>[];

  /**
   * When the series started
   */
  started?: string;
  /**
   * Extension for started
   */
  _started?: IElement;

  /**
   * Who performed the series
   */
  performer?: IImagingStudySeriesPerformer[];

  /**
   * A single SOP instance from the series
   */
  instance?: IImagingStudySeriesInstance[];

}
