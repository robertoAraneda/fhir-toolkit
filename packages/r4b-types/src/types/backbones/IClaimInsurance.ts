import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * ClaimInsurance Interface
 * 
 * Patient insurance information
 * 
 *
 * @see https://hl7.org/fhir/R4B/claiminsurance.html
 */
export interface IClaimInsurance extends IBackboneElement {
  /**
   * Insurance instance identifier
   */
  sequence: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * Coverage to be used for adjudication
   */
  focal: boolean;
  /**
   * Extension for focal
   */
  _focal?: IElement;

  /**
   * Pre-assigned Claim number
   */
  identifier?: IIdentifier;

  /**
   * Insurance information
   */
  coverage: IReference<'Coverage'>;

  /**
   * Additional provider contract number
   */
  businessArrangement?: string;
  /**
   * Extension for businessArrangement
   */
  _businessArrangement?: IElement;

  /**
   * Prior authorization reference number
   */
  preAuthRef?: string[];
  /**
   * Extension for preAuthRef
   */
  _preAuthRef?: IElement;

  /**
   * Adjudication results
   */
  claimResponse?: IReference<'ClaimResponse'>;

}
