import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ActionParticipantTypeType } from '../../valuesets/index.js';

/**
 * PlanDefinitionActionParticipant Interface
 * 
 * Who should participate in the action
 * 
 *
 * @see https://hl7.org/fhir/R4/plandefinitionactionparticipant.html
 */
export interface IPlanDefinitionActionParticipant extends IBackboneElement {
  /**
   * patient | practitioner | related-person | device
   */
  type: ActionParticipantTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * E.g. Nurse, Surgeon, Parent
   */
  role?: ICodeableConcept;

}
