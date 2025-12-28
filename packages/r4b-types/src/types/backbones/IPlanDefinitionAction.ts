import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAge } from '../datatypes/IAge.js';
import type { IDataRequirement } from '../datatypes/IDataRequirement.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { ITriggerDefinition } from '../datatypes/ITriggerDefinition.js';
import type { IPlanDefinitionActionCondition } from './IPlanDefinitionActionCondition.js';
import type { IPlanDefinitionActionDynamicValue } from './IPlanDefinitionActionDynamicValue.js';
import type { IPlanDefinitionActionParticipant } from './IPlanDefinitionActionParticipant.js';
import type { IPlanDefinitionActionRelatedAction } from './IPlanDefinitionActionRelatedAction.js';
import type { ActionCardinalityBehaviorType, ActionGroupingBehaviorType, ActionPrecheckBehaviorType, ActionRequiredBehaviorType, ActionSelectionBehaviorType, RequestPriorityType } from '../../valuesets/index.js';

/**
 * PlanDefinitionAction Interface
 * 
 * Action defined by the plan
 * 
 *
 * @see https://hl7.org/fhir/R4B/plandefinitionaction.html
 */
export interface IPlanDefinitionAction extends IBackboneElement {
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
   * Brief description of the action
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
   * Why the action should be performed
   */
  reason?: ICodeableConcept[];

  /**
   * Supporting documentation for the intended performer of the action
   */
  documentation?: IRelatedArtifact[];

  /**
   * What goals this action supports
   */
  goalId?: string[];
  /**
   * Extension for goalId
   */
  _goalId?: IElement;

  /**
   * Type of individual the action is focused on
   */
  subjectCodeableConcept?: ICodeableConcept;

  /**
   * Type of individual the action is focused on
   */
  subjectReference?: IReference;

  /**
   * Type of individual the action is focused on
   */
  subjectCanonical?: string;
  /**
   * Extension for subjectCanonical
   */
  _subjectCanonical?: IElement;

  /**
   * When the action should be triggered
   */
  trigger?: ITriggerDefinition[];

  /**
   * Whether or not the action is applicable
   */
  condition?: IPlanDefinitionActionCondition[];

  /**
   * Input data requirements
   */
  input?: IDataRequirement[];

  /**
   * Output data definition
   */
  output?: IDataRequirement[];

  /**
   * Relationship to another action
   */
  relatedAction?: IPlanDefinitionActionRelatedAction[];

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
   * Who should participate in the action
   */
  participant?: IPlanDefinitionActionParticipant[];

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
  dynamicValue?: IPlanDefinitionActionDynamicValue[];

  /**
   * A sub-action
   */
  action?: IPlanDefinitionAction[];

}
