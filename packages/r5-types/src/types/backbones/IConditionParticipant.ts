import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ConditionParticipant Interface
 * 
 * Who or what participated in the activities related to the condition and how they were involved
 * 
 *
 * @see https://hl7.org/fhir/R5/conditionparticipant.html
 */
export interface IConditionParticipant extends IBackboneElement {
  /**
   * Type of involvement
   */
  function?: ICodeableConcept;

  /**
   * Who or what participated in the activities related to the condition
   */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Device' | 'Organization' | 'CareTeam'>;

}
