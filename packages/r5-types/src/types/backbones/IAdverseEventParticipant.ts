import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * AdverseEventParticipant Interface
 * 
 * Who was involved in the adverse event or the potential adverse event and what they did
 * 
 *
 * @see https://hl7.org/fhir/R4/adverseeventparticipant.html
 */
export interface IAdverseEventParticipant extends IBackboneElement {
  /**
   * Type of involvement
   */
  function?: ICodeableConcept;

  /**
   * Who was involved in the adverse event or the potential adverse event
   */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson' | 'ResearchSubject'>;

}
