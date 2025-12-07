import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IRange } from '../datatypes/IRange.js';
import type { ActionRelationshipTypeType } from '../../valuesets/index.js';

/**
 * RequestOrchestrationActionRelatedAction Interface
 * 
 * Relationship to another action
 * 
 *
 * @see https://hl7.org/fhir/R4/requestorchestrationactionrelatedaction.html
 */
export interface IRequestOrchestrationActionRelatedAction extends IBackboneElement {
  /**
   * What action this is related to
   */
  targetId: string;
  /**
   * Extension for targetId
   */
  _targetId?: IElement;

  /**
   * before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end
   */
  relationship: ActionRelationshipTypeType;
  /**
   * Extension for relationship
   */
  _relationship?: IElement;

  /**
   * before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end
   */
  endRelationship?: ActionRelationshipTypeType;
  /**
   * Extension for endRelationship
   */
  _endRelationship?: IElement;

  /**
   * Time offset for the relationship
   */
  offsetDuration?: IDuration;

  /**
   * Time offset for the relationship
   */
  offsetRange?: IRange;

}
