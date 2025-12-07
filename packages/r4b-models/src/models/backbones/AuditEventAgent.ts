import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAuditEventAgent,
  IAuditEventAgentNetwork,
  ICodeableConcept,
  ICoding,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to AuditEventAgent */
const AUDIT_EVENT_AGENT_PROPERTIES = [
  'type',
  'role',
  'who',
  'altId',
  '_altId',
  'name',
  '_name',
  'requestor',
  '_requestor',
  'location',
  'policy',
  '_policy',
  'media',
  'network',
  'purposeOfUse',
] as const;

/**
 * AuditEventAgent - Actor involved in the event
 *
 * @see https://hl7.org/fhir/R4/auditeventagent.html
 *
 * @example
 * const auditEventAgent = new AuditEventAgent({
 *   // ... properties
 * });
 */
export class AuditEventAgent extends BackboneElement implements IAuditEventAgent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** How agent participated */
  type?: ICodeableConcept;

  /** Agent role in the event */
  role?: ICodeableConcept[];

  /** Identifier of who */
  who?: IReference<'PractitionerRole' | 'Practitioner' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson'>;

  /** Alternative User identity */
  altId?: string;

  /** Extension for altId */
  _altId?: IElement;

  /** Human friendly name for the agent */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Whether user is initiator */
  requestor: boolean;

  /** Extension for requestor */
  _requestor?: IElement;

  /** Where */
  location?: IReference<'Location'>;

  /** Policy that authorized event */
  policy?: string[];

  /** Extension for policy */
  _policy?: IElement;

  /** Type of media */
  media?: ICoding;

  /** Logical network location for application activity */
  network?: IAuditEventAgentNetwork;

  /** Reason given for this user */
  purposeOfUse?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAuditEventAgent>) {
    super(data);
    if (data) {
      this.assignProps(data, AUDIT_EVENT_AGENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AuditEventAgent from a JSON object
   */
  static fromJSON(json: IAuditEventAgent): AuditEventAgent {
    return new AuditEventAgent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AuditEventAgent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAuditEventAgent>): AuditEventAgent {
    return new AuditEventAgent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AuditEventAgent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAuditEventAgent) => Partial<IAuditEventAgent>): AuditEventAgent {
    const currentData = this.toJSON();
    return new AuditEventAgent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAuditEventAgent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAuditEventAgent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, AUDIT_EVENT_AGENT_PROPERTIES);
    return result as IAuditEventAgent;
  }

  /**
   * Create a deep clone of this AuditEventAgent
   */
  clone(): AuditEventAgent {
    return new AuditEventAgent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AuditEventAgent
   */
  toString(): string {
    const parts: string[] = ['AuditEventAgent'];
    return parts.join(', ');
  }
}
