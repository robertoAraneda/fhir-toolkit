import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IMessageHeaderDestination,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MessageHeaderDestination */
const MESSAGE_HEADER_DESTINATION_PROPERTIES = [
  'name',
  '_name',
  'target',
  'endpoint',
  '_endpoint',
  'receiver',
] as const;

/**
 * MessageHeaderDestination - Message destination application(s)
 *
 * @see https://hl7.org/fhir/R4/messageheaderdestination.html
 *
 * @example
 * const messageHeaderDestination = new MessageHeaderDestination({
 *   // ... properties
 * });
 */
export class MessageHeaderDestination extends BackboneElement implements IMessageHeaderDestination {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name of system */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Particular delivery destination within the destination */
  target?: IReference<'Device'>;

  /** Actual destination address or id */
  endpoint: string;

  /** Extension for endpoint */
  _endpoint?: IElement;

  /** Intended "real-world" recipient for the data */
  receiver?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMessageHeaderDestination>) {
    super(data);
    if (data) {
      this.assignProps(data, MESSAGE_HEADER_DESTINATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MessageHeaderDestination from a JSON object
   */
  static fromJSON(json: IMessageHeaderDestination): MessageHeaderDestination {
    return new MessageHeaderDestination(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MessageHeaderDestination with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMessageHeaderDestination>): MessageHeaderDestination {
    return new MessageHeaderDestination({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MessageHeaderDestination by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMessageHeaderDestination) => Partial<IMessageHeaderDestination>): MessageHeaderDestination {
    const currentData = this.toJSON();
    return new MessageHeaderDestination({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMessageHeaderDestination)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMessageHeaderDestination {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MESSAGE_HEADER_DESTINATION_PROPERTIES);
    return result as IMessageHeaderDestination;
  }

  /**
   * Create a deep clone of this MessageHeaderDestination
   */
  clone(): MessageHeaderDestination {
    return new MessageHeaderDestination(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MessageHeaderDestination
   */
  toString(): string {
    const parts: string[] = ['MessageHeaderDestination'];
    return parts.join(', ');
  }
}
