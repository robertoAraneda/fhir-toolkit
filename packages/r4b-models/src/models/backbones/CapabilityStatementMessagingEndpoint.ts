import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICapabilityStatementMessagingEndpoint,
  ICoding,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CapabilityStatementMessagingEndpoint */
const CAPABILITY_STATEMENT_MESSAGING_ENDPOINT_PROPERTIES = [
  'protocol',
  'address',
  '_address',
] as const;

/**
 * CapabilityStatementMessagingEndpoint - Where messages should be sent
 *
 * @see https://hl7.org/fhir/R4/capabilitystatementmessagingendpoint.html
 *
 * @example
 * const capabilityStatementMessagingEndpoint = new CapabilityStatementMessagingEndpoint({
 *   // ... properties
 * });
 */
export class CapabilityStatementMessagingEndpoint extends BackboneElement implements ICapabilityStatementMessagingEndpoint {

  // ============================================================================
  // Properties
  // ============================================================================

  /** http | ftp | mllp + */
  protocol: ICoding;

  /** Network address or identifier of the end-point */
  address: string;

  /** Extension for address */
  _address?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICapabilityStatementMessagingEndpoint>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_MESSAGING_ENDPOINT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatementMessagingEndpoint from a JSON object
   */
  static fromJSON(json: ICapabilityStatementMessagingEndpoint): CapabilityStatementMessagingEndpoint {
    return new CapabilityStatementMessagingEndpoint(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatementMessagingEndpoint with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatementMessagingEndpoint>): CapabilityStatementMessagingEndpoint {
    return new CapabilityStatementMessagingEndpoint({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatementMessagingEndpoint by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatementMessagingEndpoint) => Partial<ICapabilityStatementMessagingEndpoint>): CapabilityStatementMessagingEndpoint {
    const currentData = this.toJSON();
    return new CapabilityStatementMessagingEndpoint({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatementMessagingEndpoint)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatementMessagingEndpoint {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_MESSAGING_ENDPOINT_PROPERTIES);
    return result as ICapabilityStatementMessagingEndpoint;
  }

  /**
   * Create a deep clone of this CapabilityStatementMessagingEndpoint
   */
  clone(): CapabilityStatementMessagingEndpoint {
    return new CapabilityStatementMessagingEndpoint(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatementMessagingEndpoint
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatementMessagingEndpoint'];
    return parts.join(', ');
  }
}
