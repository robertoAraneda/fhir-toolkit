import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ClaimPayee Interface
 * 
 * Recipient of benefits payable
 * 
 *
 * @see https://hl7.org/fhir/R4/claimpayee.html
 */
export interface IClaimPayee extends IBackboneElement {
  /**
   * Category of recipient
   */
  type: ICodeableConcept;

  /**
   * Recipient reference
   */
  party?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson'>;

}
