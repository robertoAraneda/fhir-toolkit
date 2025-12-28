import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICapabilityStatementMessaging,
  ICapabilityStatementMessagingEndpoint,
  ICapabilityStatementMessagingSupportedMessage,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CapabilityStatementMessaging */
const CAPABILITY_STATEMENT_MESSAGING_PROPERTIES = [
  'endpoint',
  'reliableCache',
  '_reliableCache',
  'documentation',
  '_documentation',
  'supportedMessage',
] as const;

/**
 * CapabilityStatementMessaging - If messaging is supported
 *
 * @see https://hl7.org/fhir/R5/capabilitystatementmessaging.html
 *
 * @example
 * const capabilityStatementMessaging = new CapabilityStatementMessaging({
 *   // ... properties
 * });
 */
export class CapabilityStatementMessaging extends BackboneElement implements ICapabilityStatementMessaging {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Where messages should be sent */
  endpoint?: ICapabilityStatementMessagingEndpoint[];

  /** Reliable Message Cache Length (min) */
  reliableCache?: number;

  /** Extension for reliableCache */
  _reliableCache?: IElement;

  /** Messaging interface behavior details */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  /** Messages supported by this system */
  supportedMessage?: ICapabilityStatementMessagingSupportedMessage[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICapabilityStatementMessaging>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_MESSAGING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatementMessaging from a JSON object
   */
  static fromJSON(json: ICapabilityStatementMessaging): CapabilityStatementMessaging {
    return new CapabilityStatementMessaging(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatementMessaging with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatementMessaging>): CapabilityStatementMessaging {
    return new CapabilityStatementMessaging({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatementMessaging by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatementMessaging) => Partial<ICapabilityStatementMessaging>): CapabilityStatementMessaging {
    const currentData = this.toJSON();
    return new CapabilityStatementMessaging({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatementMessaging)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatementMessaging {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_MESSAGING_PROPERTIES);
    return result as ICapabilityStatementMessaging;
  }

  /**
   * Create a deep clone of this CapabilityStatementMessaging
   */
  clone(): CapabilityStatementMessaging {
    return new CapabilityStatementMessaging(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatementMessaging
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatementMessaging'];
    return parts.join(', ');
  }
}
