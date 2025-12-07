import { BackboneElement } from '../base/BackboneElement.js';
import type {
  AuditEventAgentNetworkTypeType,
  IAuditEventAgentNetwork,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to AuditEventAgentNetwork */
const AUDIT_EVENT_AGENT_NETWORK_PROPERTIES = [
  'address',
  '_address',
  'type',
  '_type',
] as const;

/**
 * AuditEventAgentNetwork - Logical network location for application activity
 *
 * @see https://hl7.org/fhir/R4/auditeventagentnetwork.html
 *
 * @example
 * const auditEventAgentNetwork = new AuditEventAgentNetwork({
 *   // ... properties
 * });
 */
export class AuditEventAgentNetwork extends BackboneElement implements IAuditEventAgentNetwork {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifier for the network access point of the user device */
  address?: string;

  /** Extension for address */
  _address?: IElement;

  /** The type of network access point */
  type?: AuditEventAgentNetworkTypeType;

  /** Extension for type */
  _type?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAuditEventAgentNetwork>) {
    super(data);
    if (data) {
      this.assignProps(data, AUDIT_EVENT_AGENT_NETWORK_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AuditEventAgentNetwork from a JSON object
   */
  static fromJSON(json: IAuditEventAgentNetwork): AuditEventAgentNetwork {
    return new AuditEventAgentNetwork(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AuditEventAgentNetwork with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAuditEventAgentNetwork>): AuditEventAgentNetwork {
    return new AuditEventAgentNetwork({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AuditEventAgentNetwork by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAuditEventAgentNetwork) => Partial<IAuditEventAgentNetwork>): AuditEventAgentNetwork {
    const currentData = this.toJSON();
    return new AuditEventAgentNetwork({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAuditEventAgentNetwork)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAuditEventAgentNetwork {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, AUDIT_EVENT_AGENT_NETWORK_PROPERTIES);
    return result as IAuditEventAgentNetwork;
  }

  /**
   * Create a deep clone of this AuditEventAgentNetwork
   */
  clone(): AuditEventAgentNetwork {
    return new AuditEventAgentNetwork(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AuditEventAgentNetwork
   */
  toString(): string {
    const parts: string[] = ['AuditEventAgentNetwork'];
    return parts.join(', ');
  }
}
