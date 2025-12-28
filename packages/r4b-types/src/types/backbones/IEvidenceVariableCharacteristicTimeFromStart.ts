import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * EvidenceVariableCharacteristicTimeFromStart Interface
 * 
 * Observation time from study start
 * 
 *
 * @see https://hl7.org/fhir/R4B/evidencevariablecharacteristictimefromstart.html
 */
export interface IEvidenceVariableCharacteristicTimeFromStart extends IBackboneElement {
  /**
   * Human readable description
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Used to express the observation at a defined amount of time after the study start
   */
  quantity?: IQuantity;

  /**
   * Used to express the observation within a period after the study start
   */
  range?: IRange;

  /**
   * Used for footnotes or explanatory notes
   */
  note?: IAnnotation[];

}
