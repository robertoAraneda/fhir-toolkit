import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ContractTermOfferParty Interface
 * 
 * Offer Recipient
 * 
 *
 * @see https://hl7.org/fhir/R4B/contracttermofferparty.html
 */
export interface IContractTermOfferParty extends IBackboneElement {
  /**
   * Referenced entity
   */
  reference: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'Group' | 'Organization'>[];

  /**
   * Participant engagement type
   */
  role: ICodeableConcept;

}
