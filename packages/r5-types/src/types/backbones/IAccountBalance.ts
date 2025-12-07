import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';

/**
 * AccountBalance Interface
 * 
 * Calculated account balance(s)
 * 
 *
 * @see https://hl7.org/fhir/R4/accountbalance.html
 */
export interface IAccountBalance extends IBackboneElement {
  /**
   * Who is expected to pay this part of the balance
   */
  aggregate?: ICodeableConcept;

  /**
   * current | 30 | 60 | 90 | 120
   */
  term?: ICodeableConcept;

  /**
   * Estimated balance
   */
  estimate?: boolean;
  /**
   * Extension for estimate
   */
  _estimate?: IElement;

  /**
   * Calculated amount
   */
  amount: IMoney;

}
