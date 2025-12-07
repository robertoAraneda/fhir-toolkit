import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * AccountGuarantor Interface
 * 
 * The parties ultimately responsible for balancing the Account
 * 
 *
 * @see https://hl7.org/fhir/R4/accountguarantor.html
 */
export interface IAccountGuarantor extends IBackboneElement {
  /**
   * Responsible entity
   */
  party: IReference<'Patient' | 'RelatedPerson' | 'Organization'>;

  /**
   * Credit or other hold applied
   */
  onHold?: boolean;
  /**
   * Extension for onHold
   */
  _onHold?: IElement;

  /**
   * Guarantee account during
   */
  period?: IPeriod;

}
