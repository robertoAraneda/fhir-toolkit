import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IRange } from '../datatypes/IRange.js';
import type { ActionRelationshipTypeType } from '../../valuesets/index.js';

/**
 * PlanDefinitionActionRelatedAction Interface
 * 
 * Relationship to another action
 * 
 *
 * @see https://hl7.org/fhir/R4/plandefinitionactionrelatedaction.html
 */
export interface IPlanDefinitionActionRelatedAction extends IBackboneElement {
  /**
   * What action is this related to
   */
  actionId: string;
  /**
   * Extension for actionId
   */
  _actionId?: IElement;

  /**
   * before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end
   */
  relationship: ActionRelationshipTypeType;
  /**
   * Extension for relationship
   */
  _relationship?: IElement;

  /**
   * Time offset for the relationship
   */
  offsetDuration?: IDuration;

  /**
   * Time offset for the relationship
   */
  offsetRange?: IRange;

}
