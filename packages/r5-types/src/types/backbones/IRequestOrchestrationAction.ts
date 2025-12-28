import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAge } from '../datatypes/IAge.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IRequestOrchestrationActionCondition } from './IRequestOrchestrationActionCondition.js';
import type { IRequestOrchestrationActionDynamicValue } from './IRequestOrchestrationActionDynamicValue.js';
import type { IRequestOrchestrationActionInput } from './IRequestOrchestrationActionInput.js';
import type { IRequestOrchestrationActionOutput } from './IRequestOrchestrationActionOutput.js';
import type { IRequestOrchestrationActionParticipant } from './IRequestOrchestrationActionParticipant.js';
import type { IRequestOrchestrationActionRelatedAction } from './IRequestOrchestrationActionRelatedAction.js';
import type { ActionCardinalityBehaviorType, ActionGroupingBehaviorType, ActionPrecheckBehaviorType, ActionRequiredBehaviorType, ActionSelectionBehaviorType, RequestPriorityType } from '../../valuesets/index.js';

/**
 * RequestOrchestrationAction Interface
 * 
 * Proposed actions, if any
 * 
 *
 * @see https://hl7.org/fhir/R5/requestorchestrationaction.html
 */
export interface IRequestOrchestrationAction extends IBackboneElement {
  /**
   * Pointer to specific item from the PlanDefinition
   */
  linkId?: string;
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

  /**
   * User-visible prefix for the action (e.g. 1. or A.)
   */
  prefix?: string;
  /**
   * Extension for prefix
   */
  _prefix?: IElement;

  /**
   * User-visible title
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Short description of the action
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system
   */
  textEquivalent?: string;
  /**
   * Extension for textEquivalent
   */
  _textEquivalent?: IElement;

  /**
   * routine | urgent | asap | stat
   */
  priority?: RequestPriorityType;
  /**
   * Extension for priority
   */
  _priority?: IElement;

  /**
   * Code representing the meaning of the action or sub-actions
   */
  code?: ICodeableConcept[];

  /**
   * Supporting documentation for the intended performer of the action
   */
  documentation?: IRelatedArtifact[];

  /**
   * What goals
   */
  goal?: IReference<'Goal'>[];

  /**
   * Whether or not the action is applicable
   */
  condition?: IRequestOrchestrationActionCondition[];

  /**
   * Input data requirements
   */
  input?: IRequestOrchestrationActionInput[];

  /**
   * Output data definition
   */
  output?: IRequestOrchestrationActionOutput[];

  /**
   * Relationship to another action
   */
  relatedAction?: IRequestOrchestrationActionRelatedAction[];

  /**
   * When the action should take place
   */
  timingDateTime?: string;
  /**
   * Extension for timingDateTime
   */
  _timingDateTime?: IElement;

  /**
   * When the action should take place
   */
  timingAge?: IAge;

  /**
   * When the action should take place
   */
  timingPeriod?: IPeriod;

  /**
   * When the action should take place
   */
  timingDuration?: IDuration;

  /**
   * When the action should take place
   */
  timingRange?: IRange;

  /**
   * When the action should take place
   */
  timingTiming?: ITiming;

  /**
   * Where it should happen
   */
  location?: ICodeableReference;

  /**
   * Who should perform the action
   */
  participant?: IRequestOrchestrationActionParticipant[];

  /**
   * create | update | remove | fire-event
   */
  type?: ICodeableConcept;

  /**
   * visual-group | logical-group | sentence-group
   */
  groupingBehavior?: ActionGroupingBehaviorType;
  /**
   * Extension for groupingBehavior
   */
  _groupingBehavior?: IElement;

  /**
   * any | all | all-or-none | exactly-one | at-most-one | one-or-more
   */
  selectionBehavior?: ActionSelectionBehaviorType;
  /**
   * Extension for selectionBehavior
   */
  _selectionBehavior?: IElement;

  /**
   * must | could | must-unless-documented
   */
  requiredBehavior?: ActionRequiredBehaviorType;
  /**
   * Extension for requiredBehavior
   */
  _requiredBehavior?: IElement;

  /**
   * yes | no
   */
  precheckBehavior?: ActionPrecheckBehaviorType;
  /**
   * Extension for precheckBehavior
   */
  _precheckBehavior?: IElement;

  /**
   * single | multiple
   */
  cardinalityBehavior?: ActionCardinalityBehaviorType;
  /**
   * Extension for cardinalityBehavior
   */
  _cardinalityBehavior?: IElement;

  /**
   * The target of the action
   */
  resource?: IReference<'Resource'>;

  /**
   * Description of the activity to be performed
   */
  definitionCanonical?: string;
  /**
   * Extension for definitionCanonical
   */
  _definitionCanonical?: IElement;

  /**
   * Description of the activity to be performed
   */
  definitionUri?: string;
  /**
   * Extension for definitionUri
   */
  _definitionUri?: IElement;

  /**
   * Transform to apply the template
   */
  transform?: string;
  /**
   * Extension for transform
   */
  _transform?: IElement;

  /**
   * Dynamic aspects of the definition
   */
  dynamicValue?: IRequestOrchestrationActionDynamicValue[];

  /**
   * Sub action
   */
  action?: IRequestOrchestrationAction[];

}
