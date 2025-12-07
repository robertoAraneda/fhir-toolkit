import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ConsentPolicy Interface
 * 
 * Policies covered by this consent
 * 
 *
 * @see https://hl7.org/fhir/R4/consentpolicy.html
 */
export interface IConsentPolicy extends IBackboneElement {
  /**
   * Enforcement source for policy
   */
  authority?: string;
  /**
   * Extension for authority
   */
  _authority?: IElement;

  /**
   * Specific policy covered by this consent
   */
  uri?: string;
  /**
   * Extension for uri
   */
  _uri?: IElement;

}
