import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * AccountCoverage Interface
 * 
 * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
 * 
 *
 * @see https://hl7.org/fhir/R4B/accountcoverage.html
 */
export interface IAccountCoverage extends IBackboneElement {
  /**
   * The party(s), such as insurances, that may contribute to the payment of this account
   */
  coverage: IReference<'Coverage'>;

  /**
   * The priority of the coverage in the context of this account
   */
  priority?: number;
  /**
   * Extension for priority
   */
  _priority?: IElement;

}
