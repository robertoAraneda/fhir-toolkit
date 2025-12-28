import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IProvenanceAgent,
  IProvenanceEntity,
  IReference,
  ProvenanceEntityRoleType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ProvenanceEntity */
const PROVENANCE_ENTITY_PROPERTIES = [
  'role',
  '_role',
  'what',
  'agent',
] as const;

/**
 * ProvenanceEntity - An entity used in this activity
 *
 * @see https://hl7.org/fhir/R4B/provenanceentity.html
 *
 * @example
 * const provenanceEntity = new ProvenanceEntity({
 *   // ... properties
 * });
 */
export class ProvenanceEntity extends BackboneElement implements IProvenanceEntity {

  // ============================================================================
  // Properties
  // ============================================================================

  /** derivation | revision | quotation | source | removal */
  role: ProvenanceEntityRoleType;

  /** Extension for role */
  _role?: IElement;

  /** Identity of entity */
  what: IReference<'Resource'>;

  /** Entity is attributed to this agent */
  agent?: IProvenanceAgent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IProvenanceEntity>) {
    super(data);
    if (data) {
      this.assignProps(data, PROVENANCE_ENTITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ProvenanceEntity from a JSON object
   */
  static fromJSON(json: IProvenanceEntity): ProvenanceEntity {
    return new ProvenanceEntity(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ProvenanceEntity with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IProvenanceEntity>): ProvenanceEntity {
    return new ProvenanceEntity({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ProvenanceEntity by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IProvenanceEntity) => Partial<IProvenanceEntity>): ProvenanceEntity {
    const currentData = this.toJSON();
    return new ProvenanceEntity({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IProvenanceEntity)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IProvenanceEntity {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PROVENANCE_ENTITY_PROPERTIES);
    return result as IProvenanceEntity;
  }

  /**
   * Create a deep clone of this ProvenanceEntity
   */
  clone(): ProvenanceEntity {
    return new ProvenanceEntity(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ProvenanceEntity
   */
  toString(): string {
    const parts: string[] = ['ProvenanceEntity'];
    return parts.join(', ');
  }
}
