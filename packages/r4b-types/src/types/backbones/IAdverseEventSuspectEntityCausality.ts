import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * AdverseEventSuspectEntityCausality Interface
 * 
 * Information on the possible cause of the event
 * 
 *
 * @see https://hl7.org/fhir/R4B/adverseeventsuspectentitycausality.html
 */
export interface IAdverseEventSuspectEntityCausality extends IBackboneElement {
  /**
   * Assessment of if the entity caused the event
   */
  assessment?: ICodeableConcept;

  /**
   * AdverseEvent.suspectEntity.causalityProductRelatedness
   */
  productRelatedness?: string;
  /**
   * Extension for productRelatedness
   */
  _productRelatedness?: IElement;

  /**
   * AdverseEvent.suspectEntity.causalityAuthor
   */
  author?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * ProbabilityScale | Bayesian | Checklist
   */
  method?: ICodeableConcept;

}
