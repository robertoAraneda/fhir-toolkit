import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ExplanationOfBenefitPayee Interface
 * 
 * Recipient of benefits payable
 * 
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefitpayee.html
 */
export interface IExplanationOfBenefitPayee extends IBackboneElement {
  /**
   * Category of recipient
   */
  type?: ICodeableConcept;

  /**
   * Recipient reference
   */
  party?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson'>;

}
