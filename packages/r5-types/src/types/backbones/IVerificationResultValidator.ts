import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { ISignature } from '../datatypes/ISignature.js';

/**
 * VerificationResultValidator Interface
 * 
 * Information about the entity validating information
 * 
 *
 * @see https://hl7.org/fhir/R5/verificationresultvalidator.html
 */
export interface IVerificationResultValidator extends IBackboneElement {
  /**
   * Reference to the organization validating information
   */
  organization: IReference<'Organization'>;

  /**
   * A digital identity certificate associated with the validator
   */
  identityCertificate?: string;
  /**
   * Extension for identityCertificate
   */
  _identityCertificate?: IElement;

  /**
   * Validator signature (digital or image)
   */
  attestationSignature?: ISignature;

}
