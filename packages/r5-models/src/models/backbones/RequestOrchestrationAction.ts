import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionCardinalityBehaviorType,
  ActionGroupingBehaviorType,
  ActionPrecheckBehaviorType,
  ActionRequiredBehaviorType,
  ActionSelectionBehaviorType,
  IAge,
  ICodeableConcept,
  ICodeableReference,
  IDuration,
  IElement,
  IPeriod,
  IRange,
  IReference,
  IRelatedArtifact,
  IRequestOrchestrationAction,
  IRequestOrchestrationActionCondition,
  IRequestOrchestrationActionDynamicValue,
  IRequestOrchestrationActionInput,
  IRequestOrchestrationActionOutput,
  IRequestOrchestrationActionParticipant,
  IRequestOrchestrationActionRelatedAction,
  ITiming,
  RequestPriorityType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to RequestOrchestrationAction */
const REQUEST_ORCHESTRATION_ACTION_PROPERTIES = [
  'linkId',
  '_linkId',
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
  'documentation',
  'goal',
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
  'location',
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
  'resource',
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
 * RequestOrchestrationAction - Proposed actions, if any
 *
 * @see https://hl7.org/fhir/R5/requestorchestrationaction.html
 *
 * @example
 * const requestOrchestrationAction = new RequestOrchestrationAction({
 *   // ... properties
 * });
 */
export class RequestOrchestrationAction extends BackboneElement implements IRequestOrchestrationAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Pointer to specific item from the PlanDefinition */
  linkId?: string;

  /** Extension for linkId */
  _linkId?: IElement;

  /** User-visible prefix for the action (e.g. 1. or A.) */
  prefix?: string;

  /** Extension for prefix */
  _prefix?: IElement;

  /** User-visible title */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Short description of the action */
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

  /** Supporting documentation for the intended performer of the action */
  documentation?: IRelatedArtifact[];

  /** What goals */
  goal?: IReference<'Goal'>[];

  /** Whether or not the action is applicable */
  condition?: IRequestOrchestrationActionCondition[];

  /** Input data requirements */
  input?: IRequestOrchestrationActionInput[];

  /** Output data definition */
  output?: IRequestOrchestrationActionOutput[];

  /** Relationship to another action */
  relatedAction?: IRequestOrchestrationActionRelatedAction[];

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

  /** Where it should happen */
  location?: ICodeableReference;

  /** Who should perform the action */
  participant?: IRequestOrchestrationActionParticipant[];

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

  /** The target of the action */
  resource?: IReference<'Resource'>;

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
  dynamicValue?: IRequestOrchestrationActionDynamicValue[];

  /** Sub action */
  action?: IRequestOrchestrationAction[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRequestOrchestrationAction>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUEST_ORCHESTRATION_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RequestOrchestrationAction from a JSON object
   */
  static fromJSON(json: IRequestOrchestrationAction): RequestOrchestrationAction {
    return new RequestOrchestrationAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RequestOrchestrationAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequestOrchestrationAction>): RequestOrchestrationAction {
    return new RequestOrchestrationAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RequestOrchestrationAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequestOrchestrationAction) => Partial<IRequestOrchestrationAction>): RequestOrchestrationAction {
    const currentData = this.toJSON();
    return new RequestOrchestrationAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequestOrchestrationAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequestOrchestrationAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, REQUEST_ORCHESTRATION_ACTION_PROPERTIES);
    return result as IRequestOrchestrationAction;
  }

  /**
   * Create a deep clone of this RequestOrchestrationAction
   */
  clone(): RequestOrchestrationAction {
    return new RequestOrchestrationAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RequestOrchestrationAction
   */
  toString(): string {
    const parts: string[] = ['RequestOrchestrationAction'];
    return parts.join(', ');
  }
}
