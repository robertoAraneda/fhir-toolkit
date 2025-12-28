import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * ClaimResponseItemAdjudication Interface
 * 
 * Adjudication details
 * 
 *
 * @see https://hl7.org/fhir/R5/claimresponseitemadjudication.html
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
  quantity?: IQuantity;

}
