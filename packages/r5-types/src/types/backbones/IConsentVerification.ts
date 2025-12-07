import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * ConsentVerification Interface
 * 
 * Consent Verified by patient or family
 * 
 *
 * @see https://hl7.org/fhir/R4/consentverification.html
 */
export interface IConsentVerification extends IBackboneElement {
  /**
   * Has been verified
   */
  verified: boolean;
  /**
   * Extension for verified
   */
  _verified?: IElement;

  /**
   * Business case of verification
   */
  verificationType?: ICodeableConcept;

  /**
   * Person conducting verification
   */
  verifiedBy?: IReference<'Organization' | 'Practitioner' | 'PractitionerRole'>;

  /**
   * Person who verified
   */
  verifiedWith?: IReference<'Patient' | 'RelatedPerson'>;

  /**
   * When consent verified
   */
  verificationDate?: string[];
  /**
   * Extension for verificationDate
   */
  _verificationDate?: IElement;

}
