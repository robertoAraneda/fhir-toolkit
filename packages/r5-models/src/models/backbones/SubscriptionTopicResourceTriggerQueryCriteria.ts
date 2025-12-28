import { BackboneElement } from '../base/BackboneElement.js';
import type {
  CriteriaNotExistsBehaviorType,
  IElement,
  ISubscriptionTopicResourceTriggerQueryCriteria,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubscriptionTopicResourceTriggerQueryCriteria */
const SUBSCRIPTION_TOPIC_RESOURCE_TRIGGER_QUERY_CRITERIA_PROPERTIES = [
  'previous',
  '_previous',
  'resultForCreate',
  '_resultForCreate',
  'current',
  '_current',
  'resultForDelete',
  '_resultForDelete',
  'requireBoth',
  '_requireBoth',
] as const;

/**
 * SubscriptionTopicResourceTriggerQueryCriteria - Query based trigger rule
 *
 * @see https://hl7.org/fhir/R5/subscriptiontopicresourcetriggerquerycriteria.html
 *
 * @example
 * const subscriptionTopicResourceTriggerQueryCriteria = new SubscriptionTopicResourceTriggerQueryCriteria({
 *   // ... properties
 * });
 */
export class SubscriptionTopicResourceTriggerQueryCriteria extends BackboneElement implements ISubscriptionTopicResourceTriggerQueryCriteria {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Rule applied to previous resource state */
  previous?: string;

  /** Extension for previous */
  _previous?: IElement;

  /** test-passes | test-fails */
  resultForCreate?: CriteriaNotExistsBehaviorType;

  /** Extension for resultForCreate */
  _resultForCreate?: IElement;

  /** Rule applied to current resource state */
  current?: string;

  /** Extension for current */
  _current?: IElement;

  /** test-passes | test-fails */
  resultForDelete?: CriteriaNotExistsBehaviorType;

  /** Extension for resultForDelete */
  _resultForDelete?: IElement;

  /** Both must be true flag */
  requireBoth?: boolean;

  /** Extension for requireBoth */
  _requireBoth?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubscriptionTopicResourceTriggerQueryCriteria>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSCRIPTION_TOPIC_RESOURCE_TRIGGER_QUERY_CRITERIA_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubscriptionTopicResourceTriggerQueryCriteria from a JSON object
   */
  static fromJSON(json: ISubscriptionTopicResourceTriggerQueryCriteria): SubscriptionTopicResourceTriggerQueryCriteria {
    return new SubscriptionTopicResourceTriggerQueryCriteria(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubscriptionTopicResourceTriggerQueryCriteria with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubscriptionTopicResourceTriggerQueryCriteria>): SubscriptionTopicResourceTriggerQueryCriteria {
    return new SubscriptionTopicResourceTriggerQueryCriteria({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubscriptionTopicResourceTriggerQueryCriteria by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubscriptionTopicResourceTriggerQueryCriteria) => Partial<ISubscriptionTopicResourceTriggerQueryCriteria>): SubscriptionTopicResourceTriggerQueryCriteria {
    const currentData = this.toJSON();
    return new SubscriptionTopicResourceTriggerQueryCriteria({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubscriptionTopicResourceTriggerQueryCriteria)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubscriptionTopicResourceTriggerQueryCriteria {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSCRIPTION_TOPIC_RESOURCE_TRIGGER_QUERY_CRITERIA_PROPERTIES);
    return result as ISubscriptionTopicResourceTriggerQueryCriteria;
  }

  /**
   * Create a deep clone of this SubscriptionTopicResourceTriggerQueryCriteria
   */
  clone(): SubscriptionTopicResourceTriggerQueryCriteria {
    return new SubscriptionTopicResourceTriggerQueryCriteria(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubscriptionTopicResourceTriggerQueryCriteria
   */
  toString(): string {
    const parts: string[] = ['SubscriptionTopicResourceTriggerQueryCriteria'];
    return parts.join(', ');
  }
}
