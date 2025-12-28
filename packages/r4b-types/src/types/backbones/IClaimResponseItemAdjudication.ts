import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';

/**
 * ClaimResponseItemAdjudication Interface
 * 
 * Adjudication details
 * 
 *
 * @see https://hl7.org/fhir/R4B/claimresponseitemadjudication.html
 */
export interface IClaimResponseItemAdjudication extends IBackboneElement {
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
   * Non-monetary value
   */
  value?: number;
  /**
   * Extension for value
   */
  _value?: IElement;

}
