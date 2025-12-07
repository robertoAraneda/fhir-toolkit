import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * ClinicalImpressionFinding Interface
 * 
 * Possible or likely findings and diagnoses
 * 
 *
 * @see https://hl7.org/fhir/R4/clinicalimpressionfinding.html
 */
export interface IClinicalImpressionFinding extends IBackboneElement {
  /**
   * What was found
   */
  item?: ICodeableReference;

  /**
   * Which investigations support finding
   */
  basis?: string;
  /**
   * Extension for basis
   */
  _basis?: IElement;

}
