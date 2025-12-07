import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAuditEventAgent,
  IAuditEventEntity,
  IAuditEventEntityDetail,
  ICodeableConcept,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AuditEventEntity */
const AUDIT_EVENT_ENTITY_PROPERTIES = [
  'what',
  'role',
  'securityLabel',
  'query',
  '_query',
  'detail',
  'agent',
] as const;

/**
 * AuditEventEntity - Data or objects used
 *
 * @see https://hl7.org/fhir/R4/auditevententity.html
 *
 * @example
 * const auditEventEntity = new AuditEventEntity({
 *   // ... properties
 * });
 */
export class AuditEventEntity extends BackboneElement implements IAuditEventEntity {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Specific instance of resource */
  what?: IReference<'Resource'>;

  /** What role the entity played */
  role?: ICodeableConcept;

  /** Security labels on the entity */
  securityLabel?: ICodeableConcept[];

  /** Query parameters */
  query?: string;

  /** Extension for query */
  _query?: IElement;

  /** Additional Information about the entity */
  detail?: IAuditEventEntityDetail[];

  /** Entity is attributed to this agent */
  agent?: IAuditEventAgent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAuditEventEntity>) {
    super(data);
    if (data) {
      this.assignProps(data, AUDIT_EVENT_ENTITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AuditEventEntity from a JSON object
   */
  static fromJSON(json: IAuditEventEntity): AuditEventEntity {
    return new AuditEventEntity(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AuditEventEntity with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAuditEventEntity>): AuditEventEntity {
    return new AuditEventEntity({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AuditEventEntity by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAuditEventEntity) => Partial<IAuditEventEntity>): AuditEventEntity {
    const currentData = this.toJSON();
    return new AuditEventEntity({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAuditEventEntity)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAuditEventEntity {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, AUDIT_EVENT_ENTITY_PROPERTIES);
    return result as IAuditEventEntity;
  }

  /**
   * Create a deep clone of this AuditEventEntity
   */
  clone(): AuditEventEntity {
    return new AuditEventEntity(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AuditEventEntity
   */
  toString(): string {
    const parts: string[] = ['AuditEventEntity'];
    return parts.join(', ');
  }
}
