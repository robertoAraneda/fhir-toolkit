import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ISubstanceAmount } from '../datatypes/ISubstanceAmount.js';

/**
 * SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation Interface
 * 
 * Todo
 * 
 *
 * @see https://hl7.org/fhir/R4/substancepolymerrepeatrepeatunitdegreeofpolymerisation.html
 */
export interface ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends IBackboneElement {
  /**
   * Todo
   */
  degree?: ICodeableConcept;

  /**
   * Todo
   */
  amount?: ISubstanceAmount;

}
