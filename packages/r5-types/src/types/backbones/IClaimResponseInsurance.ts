import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * ClaimResponseInsurance Interface
 * 
 * Patient insurance information
 * 
 *
 * @see https://hl7.org/fhir/R5/claimresponseinsurance.html
 */
export interface IClaimResponseInsurance extends IBackboneElement {
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
   * Adjudication results
   */
  claimResponse?: IReference<'ClaimResponse'>;

}
