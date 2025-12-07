import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { ISignature } from '../datatypes/ISignature.js';

/**
 * VerificationResultAttestation Interface
 * 
 * Information about the entity attesting to information
 * 
 *
 * @see https://hl7.org/fhir/R4/verificationresultattestation.html
 */
export interface IVerificationResultAttestation extends IBackboneElement {
  /**
   * The individual or organization attesting to information
   */
  who?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * When the who is asserting on behalf of another (organization or individual)
   */
  onBehalfOf?: IReference<'Organization' | 'Practitioner' | 'PractitionerRole'>;

  /**
   * The method by which attested information was submitted/retrieved
   */
  communicationMethod?: ICodeableConcept;

  /**
   * The date the information was attested to
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * A digital identity certificate associated with the attestation source
   */
  sourceIdentityCertificate?: string;
  /**
   * Extension for sourceIdentityCertificate
   */
  _sourceIdentityCertificate?: IElement;

  /**
   * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source
   */
  proxyIdentityCertificate?: string;
  /**
   * Extension for proxyIdentityCertificate
   */
  _proxyIdentityCertificate?: IElement;

  /**
   * Proxy signature (digital or image)
   */
  proxySignature?: ISignature;

  /**
   * Attester signature (digital or image)
   */
  sourceSignature?: ISignature;

}
