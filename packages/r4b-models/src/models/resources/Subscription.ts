import { DomainResource } from '../base/DomainResource.js';
import type {
  IContactPoint,
  IElement,
  ISubscription,
  ISubscriptionChannel,
  SubscriptionStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Subscription */
const SUBSCRIPTION_PROPERTIES = [
  'status',
  '_status',
  'contact',
  'end',
  '_end',
  'reason',
  '_reason',
  'criteria',
  '_criteria',
  'error',
  '_error',
  'channel',
] as const;

/**
 * Subscription - The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 *
 * @see https://hl7.org/fhir/R4/subscription.html
 *
 * @example
 * const subscription = new Subscription({
 *   resourceType: 'Subscription',
 *   // ... properties
 * });
 */
export class Subscription extends DomainResource implements ISubscription {
  readonly resourceType = 'Subscription' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** requested | active | error | off */
  status: SubscriptionStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Contact details for source (e.g. troubleshooting) */
  contact?: IContactPoint[];

  /** When to automatically delete the subscription */
  end?: string;

  /** Extension for end */
  _end?: IElement;

  /** Description of why this subscription was created */
  reason: string;

  /** Extension for reason */
  _reason?: IElement;

  /** Rule for server push */
  criteria: string;

  /** Extension for criteria */
  _criteria?: IElement;

  /** Latest error note */
  error?: string;

  /** Extension for error */
  _error?: IElement;

  /** The channel on which to report matches to the criteria */
  channel: ISubscriptionChannel;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubscription>) {
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
