import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IProvenanceAgent,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ProvenanceAgent */
const PROVENANCE_AGENT_PROPERTIES = [
  'type',
  'role',
  'who',
  'onBehalfOf',
] as const;

/**
 * ProvenanceAgent - Actor involved
 *
 * @see https://hl7.org/fhir/R4B/provenanceagent.html
 *
 * @example
 * const provenanceAgent = new ProvenanceAgent({
 *   // ... properties
 * });
 */
export class ProvenanceAgent extends BackboneElement implements IProvenanceAgent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** How the agent participated */
  type?: ICodeableConcept;

  /** What the agents role was */
  role?: ICodeableConcept[];

  /** Who participated */
  who: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Device' | 'Organization'>;

  /** Who the agent is representing */
  onBehalfOf?: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Device' | 'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IProvenanceAgent>) {
    super(data);
    if (data) {
      this.assignProps(data, PROVENANCE_AGENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ProvenanceAgent from a JSON object
   */
  static fromJSON(json: IProvenanceAgent): ProvenanceAgent {
    return new ProvenanceAgent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ProvenanceAgent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IProvenanceAgent>): ProvenanceAgent {
    return new ProvenanceAgent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ProvenanceAgent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IProvenanceAgent) => Partial<IProvenanceAgent>): ProvenanceAgent {
    const currentData = this.toJSON();
    return new ProvenanceAgent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IProvenanceAgent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IProvenanceAgent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PROVENANCE_AGENT_PROPERTIES);
    return result as IProvenanceAgent;
  }

  /**
   * Create a deep clone of this ProvenanceAgent
   */
  clone(): ProvenanceAgent {
    return new ProvenanceAgent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ProvenanceAgent
   */
  toString(): string {
    const parts: string[] = ['ProvenanceAgent'];
    return parts.join(', ');
  }
}
