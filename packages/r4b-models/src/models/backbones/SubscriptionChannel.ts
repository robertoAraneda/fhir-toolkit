import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ISubscriptionChannel,
  SubscriptionChannelTypeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SubscriptionChannel */
const SUBSCRIPTION_CHANNEL_PROPERTIES = [
  'type',
  '_type',
  'endpoint',
  '_endpoint',
  'payload',
  '_payload',
  'header',
  '_header',
] as const;

/**
 * SubscriptionChannel - The channel on which to report matches to the criteria
 *
 * @see https://hl7.org/fhir/R4/subscriptionchannel.html
 *
 * @example
 * const subscriptionChannel = new SubscriptionChannel({
 *   // ... properties
 * });
 */
export class SubscriptionChannel extends BackboneElement implements ISubscriptionChannel {

  // ============================================================================
  // Properties
  // ============================================================================

  /** rest-hook | websocket | email | sms | message */
  type: SubscriptionChannelTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Where the channel points to */
  endpoint?: string;

  /** Extension for endpoint */
  _endpoint?: IElement;

  /** MIME type to send, or omit for no payload */
  payload?: string;

  /** Extension for payload */
  _payload?: IElement;

  /** Usage depends on the channel type */
  header?: string[];

  /** Extension for header */
  _header?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubscriptionChannel>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSCRIPTION_CHANNEL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubscriptionChannel from a JSON object
   */
  static fromJSON(json: ISubscriptionChannel): SubscriptionChannel {
    return new SubscriptionChannel(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubscriptionChannel with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubscriptionChannel>): SubscriptionChannel {
    return new SubscriptionChannel({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubscriptionChannel by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubscriptionChannel) => Partial<ISubscriptionChannel>): SubscriptionChannel {
    const currentData = this.toJSON();
    return new SubscriptionChannel({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubscriptionChannel)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubscriptionChannel {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSCRIPTION_CHANNEL_PROPERTIES);
    return result as ISubscriptionChannel;
  }

  /**
   * Create a deep clone of this SubscriptionChannel
   */
  clone(): SubscriptionChannel {
    return new SubscriptionChannel(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubscriptionChannel
   */
  toString(): string {
    const parts: string[] = ['SubscriptionChannel'];
    return parts.join(', ');
  }
}
