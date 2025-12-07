import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * AccountRelatedAccount Interface
 * 
 * Other associated accounts related to this account
 * 
 *
 * @see https://hl7.org/fhir/R4/accountrelatedaccount.html
 */
export interface IAccountRelatedAccount extends IBackboneElement {
  /**
   * Relationship of the associated Account
   */
  relationship?: ICodeableConcept;

  /**
   * Reference to an associated Account
   */
  account: IReference<'Account'>;

}
