import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ContractTermActionSubject Interface
 * 
 * Entity of the action
 * 
 *
 * @see https://hl7.org/fhir/R4B/contracttermactionsubject.html
 */
export interface IContractTermActionSubject extends IBackboneElement {
  /**
   * Entity of the action
   */
  reference: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'Group' | 'Organization'>[];

  /**
   * Role type of the agent
   */
  role?: ICodeableConcept;

}
