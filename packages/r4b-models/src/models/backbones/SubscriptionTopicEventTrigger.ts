import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  ISubscriptionTopicEventTrigger,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SubscriptionTopicEventTrigger */
const SUBSCRIPTION_TOPIC_EVENT_TRIGGER_PROPERTIES = [
  'description',
  '_description',
  'event',
  'resource',
  '_resource',
] as const;

/**
 * SubscriptionTopicEventTrigger - Event definitions the SubscriptionTopic
 *
 * @see https://hl7.org/fhir/R4/subscriptiontopiceventtrigger.html
 *
 * @example
 * const subscriptionTopicEventTrigger = new SubscriptionTopicEventTrigger({
 *   // ... properties
 * });
 */
export class SubscriptionTopicEventTrigger extends BackboneElement implements ISubscriptionTopicEventTrigger {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Text representation of the event trigger */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Event which can trigger a notification from the SubscriptionTopic */
  event: ICodeableConcept;

  /** Data Type or Resource (reference to definition) for this trigger definition */
  resource: string;

  /** Extension for resource */
  _resource?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubscriptionTopicEventTrigger>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSCRIPTION_TOPIC_EVENT_TRIGGER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubscriptionTopicEventTrigger from a JSON object
   */
  static fromJSON(json: ISubscriptionTopicEventTrigger): SubscriptionTopicEventTrigger {
    return new SubscriptionTopicEventTrigger(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubscriptionTopicEventTrigger with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubscriptionTopicEventTrigger>): SubscriptionTopicEventTrigger {
    return new SubscriptionTopicEventTrigger({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubscriptionTopicEventTrigger by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubscriptionTopicEventTrigger) => Partial<ISubscriptionTopicEventTrigger>): SubscriptionTopicEventTrigger {
    const currentData = this.toJSON();
    return new SubscriptionTopicEventTrigger({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubscriptionTopicEventTrigger)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubscriptionTopicEventTrigger {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSCRIPTION_TOPIC_EVENT_TRIGGER_PROPERTIES);
    return result as ISubscriptionTopicEventTrigger;
  }

  /**
   * Create a deep clone of this SubscriptionTopicEventTrigger
   */
  clone(): SubscriptionTopicEventTrigger {
    return new SubscriptionTopicEventTrigger(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubscriptionTopicEventTrigger
   */
  toString(): string {
    const parts: string[] = ['SubscriptionTopicEventTrigger'];
    return parts.join(', ');
  }
}
