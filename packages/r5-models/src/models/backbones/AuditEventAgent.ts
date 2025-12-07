import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAuditEventAgent,
  ICodeableConcept,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AuditEventAgent */
const AUDIT_EVENT_AGENT_PROPERTIES = [
  'type',
  'role',
  'who',
  'requestor',
  '_requestor',
  'location',
  'policy',
  '_policy',
  'networkReference',
  'networkUri',
  '_networkUri',
  'networkString',
  '_networkString',
  'authorization',
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
  who: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>;

  /** Whether user is initiator */
  requestor?: boolean;

  /** Extension for requestor */
  _requestor?: IElement;

  /** The agent location when the event occurred */
  location?: IReference<'Location'>;

  /** Policy that authorized the agent participation in the event */
  policy?: string[];

  /** Extension for policy */
  _policy?: IElement;

  /** This agent network location for the activity */
  networkReference?: IReference;

  /** This agent network location for the activity */
  networkUri?: string;

  /** Extension for networkUri */
  _networkUri?: IElement;

  /** This agent network location for the activity */
  networkString?: string;

  /** Extension for networkString */
  _networkString?: IElement;

  /** Allowable authorization for this agent */
  authorization?: ICodeableConcept[];

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
