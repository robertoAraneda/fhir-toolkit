import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * MeasureTerm Interface
 * 
 * Defined terms used in the measure documentation
 * 
 *
 * @see https://hl7.org/fhir/R5/measureterm.html
 */
export interface IMeasureTerm extends IBackboneElement {
  /**
   * What term?
   */
  code?: ICodeableConcept;

  /**
   * Meaning of the term
   */
  definition?: string;
  /**
   * Extension for definition
   */
  _definition?: IElement;

}
