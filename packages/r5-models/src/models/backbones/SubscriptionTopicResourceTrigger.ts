import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ISubscriptionTopicResourceTrigger,
  ISubscriptionTopicResourceTriggerQueryCriteria,
  InteractionTriggerType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubscriptionTopicResourceTrigger */
const SUBSCRIPTION_TOPIC_RESOURCE_TRIGGER_PROPERTIES = [
  'description',
  '_description',
  'resource',
  '_resource',
  'supportedInteraction',
  '_supportedInteraction',
  'queryCriteria',
  'fhirPathCriteria',
  '_fhirPathCriteria',
] as const;

/**
 * SubscriptionTopicResourceTrigger - Definition of a resource-based trigger for the subscription topic
 *
 * @see https://hl7.org/fhir/R4/subscriptiontopicresourcetrigger.html
 *
 * @example
 * const subscriptionTopicResourceTrigger = new SubscriptionTopicResourceTrigger({
 *   // ... properties
 * });
 */
export class SubscriptionTopicResourceTrigger extends BackboneElement implements ISubscriptionTopicResourceTrigger {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Text representation of the resource trigger */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Data Type or Resource (reference to definition) for this trigger definition */
  resource: string;

  /** Extension for resource */
  _resource?: IElement;

  /** create | update | delete */
  supportedInteraction?: InteractionTriggerType[];

  /** Extension for supportedInteraction */
  _supportedInteraction?: IElement;

  /** Query based trigger rule */
  queryCriteria?: ISubscriptionTopicResourceTriggerQueryCriteria;

  /** FHIRPath based trigger rule */
  fhirPathCriteria?: string;

  /** Extension for fhirPathCriteria */
  _fhirPathCriteria?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubscriptionTopicResourceTrigger>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSCRIPTION_TOPIC_RESOURCE_TRIGGER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubscriptionTopicResourceTrigger from a JSON object
   */
  static fromJSON(json: ISubscriptionTopicResourceTrigger): SubscriptionTopicResourceTrigger {
    return new SubscriptionTopicResourceTrigger(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubscriptionTopicResourceTrigger with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubscriptionTopicResourceTrigger>): SubscriptionTopicResourceTrigger {
    return new SubscriptionTopicResourceTrigger({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubscriptionTopicResourceTrigger by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubscriptionTopicResourceTrigger) => Partial<ISubscriptionTopicResourceTrigger>): SubscriptionTopicResourceTrigger {
    const currentData = this.toJSON();
    return new SubscriptionTopicResourceTrigger({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubscriptionTopicResourceTrigger)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubscriptionTopicResourceTrigger {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSCRIPTION_TOPIC_RESOURCE_TRIGGER_PROPERTIES);
    return result as ISubscriptionTopicResourceTrigger;
  }

  /**
   * Create a deep clone of this SubscriptionTopicResourceTrigger
   */
  clone(): SubscriptionTopicResourceTrigger {
    return new SubscriptionTopicResourceTrigger(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubscriptionTopicResourceTrigger
   */
  toString(): string {
    const parts: string[] = ['SubscriptionTopicResourceTrigger'];
    return parts.join(', ');
  }
}
