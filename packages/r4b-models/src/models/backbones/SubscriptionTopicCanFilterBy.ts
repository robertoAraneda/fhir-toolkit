import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ISubscriptionTopicCanFilterBy,
  SubscriptionSearchModifierType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SubscriptionTopicCanFilterBy */
const SUBSCRIPTION_TOPIC_CAN_FILTER_BY_PROPERTIES = [
  'description',
  '_description',
  'resource',
  '_resource',
  'filterParameter',
  '_filterParameter',
  'filterDefinition',
  '_filterDefinition',
  'modifier',
  '_modifier',
] as const;

/**
 * SubscriptionTopicCanFilterBy - Properties by which a Subscription can filter notifications from the SubscriptionTopic
 *
 * @see https://hl7.org/fhir/R4B/subscriptiontopiccanfilterby.html
 *
 * @example
 * const subscriptionTopicCanFilterBy = new SubscriptionTopicCanFilterBy({
 *   // ... properties
 * });
 */
export class SubscriptionTopicCanFilterBy extends BackboneElement implements ISubscriptionTopicCanFilterBy {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Description of this filter parameter */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** URL of the triggering Resource that this filter applies to */
  resource?: string;

  /** Extension for resource */
  _resource?: IElement;

  /** Human-readable and computation-friendly name for a filter parameter usable by subscriptions on this topic, via Subscription.filterBy.filterParameter */
  filterParameter: string;

  /** Extension for filterParameter */
  _filterParameter?: IElement;

  /** Canonical URL for a filterParameter definition */
  filterDefinition?: string;

  /** Extension for filterDefinition */
  _filterDefinition?: IElement;

  /** = | eq | ne | gt | lt | ge | le | sa | eb | ap | above | below | in | not-in | of-type */
  modifier?: SubscriptionSearchModifierType[];

  /** Extension for modifier */
  _modifier?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubscriptionTopicCanFilterBy>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSCRIPTION_TOPIC_CAN_FILTER_BY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubscriptionTopicCanFilterBy from a JSON object
   */
  static fromJSON(json: ISubscriptionTopicCanFilterBy): SubscriptionTopicCanFilterBy {
    return new SubscriptionTopicCanFilterBy(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubscriptionTopicCanFilterBy with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubscriptionTopicCanFilterBy>): SubscriptionTopicCanFilterBy {
    return new SubscriptionTopicCanFilterBy({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubscriptionTopicCanFilterBy by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubscriptionTopicCanFilterBy) => Partial<ISubscriptionTopicCanFilterBy>): SubscriptionTopicCanFilterBy {
    const currentData = this.toJSON();
    return new SubscriptionTopicCanFilterBy({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubscriptionTopicCanFilterBy)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubscriptionTopicCanFilterBy {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSCRIPTION_TOPIC_CAN_FILTER_BY_PROPERTIES);
    return result as ISubscriptionTopicCanFilterBy;
  }

  /**
   * Create a deep clone of this SubscriptionTopicCanFilterBy
   */
  clone(): SubscriptionTopicCanFilterBy {
    return new SubscriptionTopicCanFilterBy(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubscriptionTopicCanFilterBy
   */
  toString(): string {
    const parts: string[] = ['SubscriptionTopicCanFilterBy'];
    return parts.join(', ');
  }
}
