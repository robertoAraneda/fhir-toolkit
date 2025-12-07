import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';

/**
 * ExplanationOfBenefitItemAdjudication Interface
 * 
 * Adjudication details
 * 
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefititemadjudication.html
 */
export interface IExplanationOfBenefitItemAdjudication extends IBackboneElement {
  /**
   * Type of adjudication information
   */
  category: ICodeableConcept;

  /**
   * Explanation of adjudication outcome
   */
  reason?: ICodeableConcept;

  /**
   * Monetary amount
   */
  amount?: IMoney;

  /**
   * Non-monitary value
   */
  value?: number;
  /**
   * Extension for value
   */
  _value?: IElement;

}
