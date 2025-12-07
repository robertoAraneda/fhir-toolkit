import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * FamilyMemberHistoryParticipant Interface
 * 
 * Who or what participated in the activities related to the family member history and how they were involved
 * 
 *
 * @see https://hl7.org/fhir/R4/familymemberhistoryparticipant.html
 */
export interface IFamilyMemberHistoryParticipant extends IBackboneElement {
  /**
   * Type of involvement
   */
  function?: ICodeableConcept;

  /**
   * Who or what participated in the activities related to the family member history
   */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Device' | 'Organization' | 'CareTeam'>;

}
