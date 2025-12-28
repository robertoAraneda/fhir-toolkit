import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IReference,
  ISubscriptionStatus,
  ISubscriptionStatusNotificationEvent,
  SubscriptionNotificationTypeType,
  SubscriptionStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubscriptionStatus */
const SUBSCRIPTION_STATUS_PROPERTIES = [
  'status',
  '_status',
  'type',
  '_type',
  'eventsSinceSubscriptionStart',
  '_eventsSinceSubscriptionStart',
  'notificationEvent',
  'subscription',
  'topic',
  '_topic',
  'error',
] as const;

/**
 * SubscriptionStatus - The SubscriptionStatus resource describes the state of a Subscription during notifications.
 *
 * @see https://hl7.org/fhir/R5/subscriptionstatus.html
 *
 * @example
 * const subscriptionStatus = new SubscriptionStatus({
 *   // ... properties
 * });
 */
export class SubscriptionStatus extends DomainResource implements ISubscriptionStatus {
  readonly resourceType = 'SubscriptionStatus' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** requested | active | error | off | entered-in-error */
  status?: SubscriptionStatusType;

  /** Extension for status */
  _status?: IElement;

  /** handshake | heartbeat | event-notification | query-status | query-event */
  type: SubscriptionNotificationTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Events since the Subscription was created */
  eventsSinceSubscriptionStart?: string;

  /** Extension for eventsSinceSubscriptionStart */
  _eventsSinceSubscriptionStart?: IElement;

  /** Detailed information about any events relevant to this notification */
  notificationEvent?: ISubscriptionStatusNotificationEvent[];

  /** Reference to the Subscription responsible for this notification */
  subscription: IReference<'Subscription'>;

  /** Reference to the SubscriptionTopic this notification relates to */
  topic?: string;

  /** Extension for topic */
  _topic?: IElement;

  /** List of errors on the subscription */
  error?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ISubscriptionStatus>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSCRIPTION_STATUS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubscriptionStatus from a JSON object
   */
  static fromJSON(json: ISubscriptionStatus): SubscriptionStatus {
    return new SubscriptionStatus(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubscriptionStatus with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubscriptionStatus>): SubscriptionStatus {
    return new SubscriptionStatus({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubscriptionStatus by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubscriptionStatus) => Partial<ISubscriptionStatus>): SubscriptionStatus {
    const currentData = this.toJSON();
    return new SubscriptionStatus({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubscriptionStatus)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubscriptionStatus {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SUBSCRIPTION_STATUS_PROPERTIES);
    return result as ISubscriptionStatus;
  }

  /**
   * Create a deep clone of this SubscriptionStatus
   */
  clone(): SubscriptionStatus {
    return new SubscriptionStatus(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubscriptionStatus
   */
  toString(): string {
    const parts: string[] = ['SubscriptionStatus'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
