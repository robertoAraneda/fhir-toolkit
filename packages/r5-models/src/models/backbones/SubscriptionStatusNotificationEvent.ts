import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IReference,
  ISubscriptionStatusNotificationEvent,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubscriptionStatusNotificationEvent */
const SUBSCRIPTION_STATUS_NOTIFICATION_EVENT_PROPERTIES = [
  'eventNumber',
  '_eventNumber',
  'timestamp',
  '_timestamp',
  'focus',
  'additionalContext',
] as const;

/**
 * SubscriptionStatusNotificationEvent - Detailed information about any events relevant to this notification
 *
 * @see https://hl7.org/fhir/R5/subscriptionstatusnotificationevent.html
 *
 * @example
 * const subscriptionStatusNotificationEvent = new SubscriptionStatusNotificationEvent({
 *   // ... properties
 * });
 */
export class SubscriptionStatusNotificationEvent extends BackboneElement implements ISubscriptionStatusNotificationEvent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Sequencing index of this event */
  eventNumber: string;

  /** Extension for eventNumber */
  _eventNumber?: IElement;

  /** The instant this event occurred */
  timestamp?: string;

  /** Extension for timestamp */
  _timestamp?: IElement;

  /** Reference to the primary resource or information of this event */
  focus?: IReference<'Resource'>;

  /** References related to the focus resource and/or context of this event */
  additionalContext?: IReference<'Resource'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubscriptionStatusNotificationEvent>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSCRIPTION_STATUS_NOTIFICATION_EVENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubscriptionStatusNotificationEvent from a JSON object
   */
  static fromJSON(json: ISubscriptionStatusNotificationEvent): SubscriptionStatusNotificationEvent {
    return new SubscriptionStatusNotificationEvent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubscriptionStatusNotificationEvent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubscriptionStatusNotificationEvent>): SubscriptionStatusNotificationEvent {
    return new SubscriptionStatusNotificationEvent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubscriptionStatusNotificationEvent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubscriptionStatusNotificationEvent) => Partial<ISubscriptionStatusNotificationEvent>): SubscriptionStatusNotificationEvent {
    const currentData = this.toJSON();
    return new SubscriptionStatusNotificationEvent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubscriptionStatusNotificationEvent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubscriptionStatusNotificationEvent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSCRIPTION_STATUS_NOTIFICATION_EVENT_PROPERTIES);
    return result as ISubscriptionStatusNotificationEvent;
  }

  /**
   * Create a deep clone of this SubscriptionStatusNotificationEvent
   */
  clone(): SubscriptionStatusNotificationEvent {
    return new SubscriptionStatusNotificationEvent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubscriptionStatusNotificationEvent
   */
  toString(): string {
    const parts: string[] = ['SubscriptionStatusNotificationEvent'];
    return parts.join(', ');
  }
}
