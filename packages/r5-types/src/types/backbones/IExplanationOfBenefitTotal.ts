import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';

/**
 * ExplanationOfBenefitTotal Interface
 * 
 * Adjudication totals
 * 
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefittotal.html
 */
export interface IExplanationOfBenefitTotal extends IBackboneElement {
  /**
   * Type of adjudication information
   */
  category: ICodeableConcept;

  /**
   * Financial total for the category
   */
  amount: IMoney;

}
