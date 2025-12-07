import { BackboneElement } from '../base/BackboneElement.js';
import type {
  EventCapabilityModeType,
  ICapabilityStatementMessagingSupportedMessage,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CapabilityStatementMessagingSupportedMessage */
const CAPABILITY_STATEMENT_MESSAGING_SUPPORTED_MESSAGE_PROPERTIES = [
  'mode',
  '_mode',
  'definition',
  '_definition',
] as const;

/**
 * CapabilityStatementMessagingSupportedMessage - Messages supported by this system
 *
 * @see https://hl7.org/fhir/R4/capabilitystatementmessagingsupportedmessage.html
 *
 * @example
 * const capabilityStatementMessagingSupportedMessage = new CapabilityStatementMessagingSupportedMessage({
 *   // ... properties
 * });
 */
export class CapabilityStatementMessagingSupportedMessage extends BackboneElement implements ICapabilityStatementMessagingSupportedMessage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** sender | receiver */
  mode: EventCapabilityModeType;

  /** Extension for mode */
  _mode?: IElement;

  /** Message supported by this system */
  definition: string;

  /** Extension for definition */
  _definition?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICapabilityStatementMessagingSupportedMessage>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_MESSAGING_SUPPORTED_MESSAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatementMessagingSupportedMessage from a JSON object
   */
  static fromJSON(json: ICapabilityStatementMessagingSupportedMessage): CapabilityStatementMessagingSupportedMessage {
    return new CapabilityStatementMessagingSupportedMessage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatementMessagingSupportedMessage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatementMessagingSupportedMessage>): CapabilityStatementMessagingSupportedMessage {
    return new CapabilityStatementMessagingSupportedMessage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatementMessagingSupportedMessage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatementMessagingSupportedMessage) => Partial<ICapabilityStatementMessagingSupportedMessage>): CapabilityStatementMessagingSupportedMessage {
    const currentData = this.toJSON();
    return new CapabilityStatementMessagingSupportedMessage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatementMessagingSupportedMessage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatementMessagingSupportedMessage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_MESSAGING_SUPPORTED_MESSAGE_PROPERTIES);
    return result as ICapabilityStatementMessagingSupportedMessage;
  }

  /**
   * Create a deep clone of this CapabilityStatementMessagingSupportedMessage
   */
  clone(): CapabilityStatementMessagingSupportedMessage {
    return new CapabilityStatementMessagingSupportedMessage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatementMessagingSupportedMessage
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatementMessagingSupportedMessage'];
    return parts.join(', ');
  }
}
