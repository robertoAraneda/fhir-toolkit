import { DomainResource } from '../base/DomainResource.js';
import type {
  ICoding,
  IContactPoint,
  IElement,
  IIdentifier,
  IReference,
  ISubscription,
  ISubscriptionFilterBy,
  ISubscriptionParameter,
  SubscriptionPayloadContentType,
  SubscriptionStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Subscription */
const SUBSCRIPTION_PROPERTIES = [
  'identifier',
  'name',
  '_name',
  'status',
  '_status',
  'topic',
  '_topic',
  'contact',
  'end',
  '_end',
  'managingEntity',
  'reason',
  '_reason',
  'filterBy',
  'channelType',
  'endpoint',
  '_endpoint',
  'parameter',
  'heartbeatPeriod',
  '_heartbeatPeriod',
  'timeout',
  '_timeout',
  'contentType',
  '_contentType',
  'content',
  '_content',
  'maxCount',
  '_maxCount',
] as const;

/**
 * Subscription - The subscription resource describes a particular client's request to be notified about a SubscriptionTopic.
 *
 * @see https://hl7.org/fhir/R4/subscription.html
 *
 * @example
 * const subscription = new Subscription({
 *   // ... properties
 * });
 */
export class Subscription extends DomainResource implements ISubscription {
  readonly resourceType = 'Subscription' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Additional identifiers (business identifier) */
  identifier?: IIdentifier[];

  /** Human readable name for this subscription */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** requested | active | error | off | entered-in-error */
  status: SubscriptionStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reference to the subscription topic being subscribed to */
  topic: string;

  /** Extension for topic */
  _topic?: IElement;

  /** Contact details for source (e.g. troubleshooting) */
  contact?: IContactPoint[];

  /** When to automatically delete the subscription */
  end?: string;

  /** Extension for end */
  _end?: IElement;

  /** Entity responsible for Subscription changes */
  managingEntity?: IReference<'CareTeam' | 'HealthcareService' | 'Organization' | 'RelatedPerson' | 'Patient' | 'Practitioner' | 'PractitionerRole'>;

  /** Description of why this subscription was created */
  reason?: string;

  /** Extension for reason */
  _reason?: IElement;

  /** Criteria for narrowing the subscription topic stream */
  filterBy?: ISubscriptionFilterBy[];

  /** Channel type for notifications */
  channelType: ICoding;

  /** Where the channel points to */
  endpoint?: string;

  /** Extension for endpoint */
  _endpoint?: IElement;

  /** Channel type */
  parameter?: ISubscriptionParameter[];

  /** Interval in seconds to send 'heartbeat' notification */
  heartbeatPeriod?: number;

  /** Extension for heartbeatPeriod */
  _heartbeatPeriod?: IElement;

  /** Timeout in seconds to attempt notification delivery */
  timeout?: number;

  /** Extension for timeout */
  _timeout?: IElement;

  /** MIME type to send, or omit for no payload */
  contentType?: string;

  /** Extension for contentType */
  _contentType?: IElement;

  /** empty | id-only | full-resource */
  content?: SubscriptionPayloadContentType;

  /** Extension for content */
  _content?: IElement;

  /** Maximum number of events that can be combined in a single notification */
  maxCount?: number;

  /** Extension for maxCount */
  _maxCount?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ISubscription>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSCRIPTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Subscription from a JSON object
   */
  static fromJSON(json: ISubscription): Subscription {
    return new Subscription(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Subscription with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubscription>): Subscription {
    return new Subscription({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Subscription by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubscription) => Partial<ISubscription>): Subscription {
    const currentData = this.toJSON();
    return new Subscription({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubscription)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubscription {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SUBSCRIPTION_PROPERTIES);
    return result as ISubscription;
  }

  /**
   * Create a deep clone of this Subscription
   */
  clone(): Subscription {
    return new Subscription(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Subscription
   */
  toString(): string {
    const parts: string[] = ['Subscription'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
