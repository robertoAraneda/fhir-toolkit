import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * TaskPerformer Interface
 * 
 * Who or what performed the task
 * 
 *
 * @see https://hl7.org/fhir/R4/taskperformer.html
 */
export interface ITaskPerformer extends IBackboneElement {
  /**
   * Type of performance
   */
  function?: ICodeableConcept;

  /**
   * Who performed the task
   */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson'>;

}
