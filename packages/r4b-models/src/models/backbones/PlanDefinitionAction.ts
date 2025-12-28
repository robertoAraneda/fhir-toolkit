import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionCardinalityBehaviorType,
  ActionGroupingBehaviorType,
  ActionPrecheckBehaviorType,
  ActionRequiredBehaviorType,
  ActionSelectionBehaviorType,
  IAge,
  ICodeableConcept,
  IDataRequirement,
  IDuration,
  IElement,
  IPeriod,
  IPlanDefinitionAction,
  IPlanDefinitionActionCondition,
  IPlanDefinitionActionDynamicValue,
  IPlanDefinitionActionParticipant,
  IPlanDefinitionActionRelatedAction,
  IRange,
  IReference,
  IRelatedArtifact,
  ITiming,
  ITriggerDefinition,
  RequestPriorityType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PlanDefinitionAction */
const PLAN_DEFINITION_ACTION_PROPERTIES = [
  'prefix',
  '_prefix',
  'title',
  '_title',
  'description',
  '_description',
  'textEquivalent',
  '_textEquivalent',
  'priority',
  '_priority',
  'code',
  'reason',
  'documentation',
  'goalId',
  '_goalId',
  'subjectCodeableConcept',
  'subjectReference',
  'subjectCanonical',
  '_subjectCanonical',
  'trigger',
  'condition',
  'input',
  'output',
  'relatedAction',
  'timingDateTime',
  '_timingDateTime',
  'timingAge',
  'timingPeriod',
  'timingDuration',
  'timingRange',
  'timingTiming',
  'participant',
  'type',
  'groupingBehavior',
  '_groupingBehavior',
  'selectionBehavior',
  '_selectionBehavior',
  'requiredBehavior',
  '_requiredBehavior',
  'precheckBehavior',
  '_precheckBehavior',
  'cardinalityBehavior',
  '_cardinalityBehavior',
  'definitionCanonical',
  '_definitionCanonical',
  'definitionUri',
  '_definitionUri',
  'transform',
  '_transform',
  'dynamicValue',
  'action',
] as const;

/**
 * PlanDefinitionAction - Action defined by the plan
 *
 * @see https://hl7.org/fhir/R4B/plandefinitionaction.html
 *
 * @example
 * const planDefinitionAction = new PlanDefinitionAction({
 *   // ... properties
 * });
 */
export class PlanDefinitionAction extends BackboneElement implements IPlanDefinitionAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** User-visible prefix for the action (e.g. 1. or A.) */
  prefix?: string;

  /** Extension for prefix */
  _prefix?: IElement;

  /** User-visible title */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Brief description of the action */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system */
  textEquivalent?: string;

  /** Extension for textEquivalent */
  _textEquivalent?: IElement;

  /** routine | urgent | asap | stat */
  priority?: RequestPriorityType;

  /** Extension for priority */
  _priority?: IElement;

  /** Code representing the meaning of the action or sub-actions */
  code?: ICodeableConcept[];

  /** Why the action should be performed */
  reason?: ICodeableConcept[];

  /** Supporting documentation for the intended performer of the action */
  documentation?: IRelatedArtifact[];

  /** What goals this action supports */
  goalId?: string[];

  /** Extension for goalId */
  _goalId?: IElement;

  /** Type of individual the action is focused on */
  subjectCodeableConcept?: ICodeableConcept;

  /** Type of individual the action is focused on */
  subjectReference?: IReference;

  /** Type of individual the action is focused on */
  subjectCanonical?: string;

  /** Extension for subjectCanonical */
  _subjectCanonical?: IElement;

  /** When the action should be triggered */
  trigger?: ITriggerDefinition[];

  /** Whether or not the action is applicable */
  condition?: IPlanDefinitionActionCondition[];

  /** Input data requirements */
  input?: IDataRequirement[];

  /** Output data definition */
  output?: IDataRequirement[];

  /** Relationship to another action */
  relatedAction?: IPlanDefinitionActionRelatedAction[];

  /** When the action should take place */
  timingDateTime?: string;

  /** Extension for timingDateTime */
  _timingDateTime?: IElement;

  /** When the action should take place */
  timingAge?: IAge;

  /** When the action should take place */
  timingPeriod?: IPeriod;

  /** When the action should take place */
  timingDuration?: IDuration;

  /** When the action should take place */
  timingRange?: IRange;

  /** When the action should take place */
  timingTiming?: ITiming;

  /** Who should participate in the action */
  participant?: IPlanDefinitionActionParticipant[];

  /** create | update | remove | fire-event */
  type?: ICodeableConcept;

  /** visual-group | logical-group | sentence-group */
  groupingBehavior?: ActionGroupingBehaviorType;

  /** Extension for groupingBehavior */
  _groupingBehavior?: IElement;

  /** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
  selectionBehavior?: ActionSelectionBehaviorType;

  /** Extension for selectionBehavior */
  _selectionBehavior?: IElement;

  /** must | could | must-unless-documented */
  requiredBehavior?: ActionRequiredBehaviorType;

  /** Extension for requiredBehavior */
  _requiredBehavior?: IElement;

  /** yes | no */
  precheckBehavior?: ActionPrecheckBehaviorType;

  /** Extension for precheckBehavior */
  _precheckBehavior?: IElement;

  /** single | multiple */
  cardinalityBehavior?: ActionCardinalityBehaviorType;

  /** Extension for cardinalityBehavior */
  _cardinalityBehavior?: IElement;

  /** Description of the activity to be performed */
  definitionCanonical?: string;

  /** Extension for definitionCanonical */
  _definitionCanonical?: IElement;

  /** Description of the activity to be performed */
  definitionUri?: string;

  /** Extension for definitionUri */
  _definitionUri?: IElement;

  /** Transform to apply the template */
  transform?: string;

  /** Extension for transform */
  _transform?: IElement;

  /** Dynamic aspects of the definition */
  dynamicValue?: IPlanDefinitionActionDynamicValue[];

  /** A sub-action */
  action?: IPlanDefinitionAction[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPlanDefinitionAction>) {
    super(data);
    if (data) {
      this.assignProps(data, PLAN_DEFINITION_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PlanDefinitionAction from a JSON object
   */
  static fromJSON(json: IPlanDefinitionAction): PlanDefinitionAction {
    return new PlanDefinitionAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PlanDefinitionAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPlanDefinitionAction>): PlanDefinitionAction {
    return new PlanDefinitionAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PlanDefinitionAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPlanDefinitionAction) => Partial<IPlanDefinitionAction>): PlanDefinitionAction {
    const currentData = this.toJSON();
    return new PlanDefinitionAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPlanDefinitionAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPlanDefinitionAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PLAN_DEFINITION_ACTION_PROPERTIES);
    return result as IPlanDefinitionAction;
  }

  /**
   * Create a deep clone of this PlanDefinitionAction
   */
  clone(): PlanDefinitionAction {
    return new PlanDefinitionAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PlanDefinitionAction
   */
  toString(): string {
    const parts: string[] = ['PlanDefinitionAction'];
    return parts.join(', ');
  }
}
