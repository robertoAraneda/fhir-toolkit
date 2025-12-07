import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation Interface
 * 
 * Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described
 * 
 *
 * @see https://hl7.org/fhir/R4/substancepolymerrepeatrepeatunitdegreeofpolymerisation.html
 */
export interface ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends IBackboneElement {
  /**
   * The type of the degree of polymerisation shall be described, e.g. SRU/Polymer Ratio
   */
  type?: ICodeableConcept;

  /**
   * An average amount of polymerisation
   */
  average?: number;
  /**
   * Extension for average
   */
  _average?: IElement;

  /**
   * A low expected limit of the amount
   */
  low?: number;
  /**
   * Extension for low
   */
  _low?: IElement;

  /**
   * A high expected limit of the amount
   */
  high?: number;
  /**
   * Extension for high
   */
  _high?: IElement;

}
