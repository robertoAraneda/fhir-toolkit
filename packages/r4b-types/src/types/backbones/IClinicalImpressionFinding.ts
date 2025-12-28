import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * ClinicalImpressionFinding Interface
 * 
 * Possible or likely findings and diagnoses
 * 
 *
 * @see https://hl7.org/fhir/R4B/clinicalimpressionfinding.html
 */
export interface IClinicalImpressionFinding extends IBackboneElement {
  /**
   * What was found
   */
  itemCodeableConcept?: ICodeableConcept;

  /**
   * What was found
   */
  itemReference?: IReference<'Condition' | 'Observation' | 'Media'>;

  /**
   * Which investigations support finding
   */
  basis?: string;
  /**
   * Extension for basis
   */
  _basis?: IElement;

}
