import { Element } from '../base/Element.js';
import type {
  ICodeableConcept,
  IDataRequirement,
  IElement,
  IExpression,
  IReference,
  ITiming,
  ITriggerDefinition,
  TriggerTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TriggerDefinition */
const TRIGGER_DEFINITION_PROPERTIES = [
  'type',
  '_type',
  'name',
  '_name',
  'code',
  'subscriptionTopic',
  '_subscriptionTopic',
  'timingTiming',
  'timingReference',
  'timingDate',
  '_timingDate',
  'timingDateTime',
  '_timingDateTime',
  'data',
  'condition',
] as const;

/**
 * TriggerDefinition - A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
 *
 * @see https://hl7.org/fhir/R4/triggerdefinition.html
 *
 * @example
 * const triggerDefinition = new TriggerDefinition({
 *   // ... properties
 * });
 */
export class TriggerDefinition extends Element implements ITriggerDefinition {

  // ============================================================================
  // Properties
  // ============================================================================

  /** named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended */
  type: TriggerTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Name or URI that identifies the event */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Coded definition of the event */
  code?: ICodeableConcept;

  /** What event */
  subscriptionTopic?: string;

  /** Extension for subscriptionTopic */
  _subscriptionTopic?: IElement;

  /** Timing of the event */
  timingTiming?: ITiming;

  /** Timing of the event */
  timingReference?: IReference;

  /** Timing of the event */
  timingDate?: string;

  /** Extension for timingDate */
  _timingDate?: IElement;

  /** Timing of the event */
  timingDateTime?: string;

  /** Extension for timingDateTime */
  _timingDateTime?: IElement;

  /** Triggering data of the event (multiple = 'and') */
  data?: IDataRequirement[];

  /** Whether the event triggers (boolean expression) */
  condition?: IExpression;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITriggerDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, TRIGGER_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TriggerDefinition from a JSON object
   */
  static fromJSON(json: ITriggerDefinition): TriggerDefinition {
    return new TriggerDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TriggerDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITriggerDefinition>): TriggerDefinition {
    return new TriggerDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TriggerDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITriggerDefinition) => Partial<ITriggerDefinition>): TriggerDefinition {
    const currentData = this.toJSON();
    return new TriggerDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITriggerDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITriggerDefinition {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, TRIGGER_DEFINITION_PROPERTIES);
    return result as ITriggerDefinition;
  }

  /**
   * Create a deep clone of this TriggerDefinition
   */
  clone(): TriggerDefinition {
    return new TriggerDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TriggerDefinition
   */
  toString(): string {
    const parts: string[] = ['TriggerDefinition'];
    return parts.join(', ');
  }
}
