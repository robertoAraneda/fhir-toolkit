import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionCardinalityBehaviorType,
  ActionGroupingBehaviorType,
  ActionPrecheckBehaviorType,
  ActionRequiredBehaviorType,
  ActionSelectionBehaviorType,
  IAge,
  ICodeableConcept,
  IDuration,
  IElement,
  IPeriod,
  IRange,
  IReference,
  IRelatedArtifact,
  IRequestGroupAction,
  IRequestGroupActionCondition,
  IRequestGroupActionRelatedAction,
  ITiming,
  RequestPriorityType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to RequestGroupAction */
const REQUEST_GROUP_ACTION_PROPERTIES = [
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
  'condition',
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
  'resource',
  'action',
] as const;

/**
 * RequestGroupAction - Proposed actions, if any
 *
 * @see https://hl7.org/fhir/R4/requestgroupaction.html
 *
 * @example
 * const requestGroupAction = new RequestGroupAction({
 *   // ... properties
 * });
 */
export class RequestGroupAction extends BackboneElement implements IRequestGroupAction {

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

  /** Whether or not the action is applicable */
  condition?: IRequestGroupActionCondition[];

  /** Relationship to another action */
  relatedAction?: IRequestGroupActionRelatedAction[];

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

  /** Who should perform the action */
  participant?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device'>[];

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

  /** Sub action */
  action?: IRequestGroupAction[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRequestGroupAction>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUEST_GROUP_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RequestGroupAction from a JSON object
   */
  static fromJSON(json: IRequestGroupAction): RequestGroupAction {
    return new RequestGroupAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RequestGroupAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequestGroupAction>): RequestGroupAction {
    return new RequestGroupAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RequestGroupAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequestGroupAction) => Partial<IRequestGroupAction>): RequestGroupAction {
    const currentData = this.toJSON();
    return new RequestGroupAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequestGroupAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequestGroupAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, REQUEST_GROUP_ACTION_PROPERTIES);
    return result as IRequestGroupAction;
  }

  /**
   * Create a deep clone of this RequestGroupAction
   */
  clone(): RequestGroupAction {
    return new RequestGroupAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RequestGroupAction
   */
  toString(): string {
    const parts: string[] = ['RequestGroupAction'];
    return parts.join(', ');
  }
}
