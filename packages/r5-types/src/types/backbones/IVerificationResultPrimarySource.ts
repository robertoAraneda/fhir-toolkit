import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * VerificationResultPrimarySource Interface
 * 
 * Information about the primary source(s) involved in validation
 * 
 *
 * @see https://hl7.org/fhir/R5/verificationresultprimarysource.html
 */
export interface IVerificationResultPrimarySource extends IBackboneElement {
  /**
   * Reference to the primary source
   */
  who?: IReference<'Organization' | 'Practitioner' | 'PractitionerRole'>;

  /**
   * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source)
   */
  type?: ICodeableConcept[];

  /**
   * Method for exchanging information with the primary source
   */
  communicationMethod?: ICodeableConcept[];

  /**
   * successful | failed | unknown
   */
  validationStatus?: ICodeableConcept;

  /**
   * When the target was validated against the primary source
   */
  validationDate?: string;
  /**
   * Extension for validationDate
   */
  _validationDate?: IElement;

  /**
   * yes | no | undetermined
   */
  canPushUpdates?: ICodeableConcept;

  /**
   * specific | any | source
   */
  pushTypeAvailable?: ICodeableConcept[];

}
