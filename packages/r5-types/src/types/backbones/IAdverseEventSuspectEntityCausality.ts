import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * AdverseEventSuspectEntityCausality Interface
 * 
 * Information on the possible cause of the event
 * 
 *
 * @see https://hl7.org/fhir/R4/adverseeventsuspectentitycausality.html
 */
export interface IAdverseEventSuspectEntityCausality extends IBackboneElement {
  /**
   * Method of evaluating the relatedness of the suspected entity to the event
   */
  assessmentMethod?: ICodeableConcept;

  /**
   * Result of the assessment regarding the relatedness of the suspected entity to the event
   */
  entityRelatedness?: ICodeableConcept;

  /**
   * Author of the information on the possible cause of the event
   */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'ResearchSubject'>;

}
