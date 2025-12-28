import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAuditEventSource,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AuditEventSource */
const AUDIT_EVENT_SOURCE_PROPERTIES = [
  'site',
  'observer',
  'type',
] as const;

/**
 * AuditEventSource - Audit Event Reporter
 *
 * @see https://hl7.org/fhir/R5/auditeventsource.html
 *
 * @example
 * const auditEventSource = new AuditEventSource({
 *   // ... properties
 * });
 */
export class AuditEventSource extends BackboneElement implements IAuditEventSource {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Logical source location within the enterprise */
  site?: IReference<'Location'>;

  /** The identity of source detecting the event */
  observer: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>;

  /** The type of source where event originated */
  type?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAuditEventSource>) {
    super(data);
    if (data) {
      this.assignProps(data, AUDIT_EVENT_SOURCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AuditEventSource from a JSON object
   */
  static fromJSON(json: IAuditEventSource): AuditEventSource {
    return new AuditEventSource(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AuditEventSource with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAuditEventSource>): AuditEventSource {
    return new AuditEventSource({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AuditEventSource by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAuditEventSource) => Partial<IAuditEventSource>): AuditEventSource {
    const currentData = this.toJSON();
    return new AuditEventSource({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAuditEventSource)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAuditEventSource {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, AUDIT_EVENT_SOURCE_PROPERTIES);
    return result as IAuditEventSource;
  }

  /**
   * Create a deep clone of this AuditEventSource
   */
  clone(): AuditEventSource {
    return new AuditEventSource(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AuditEventSource
   */
  toString(): string {
    const parts: string[] = ['AuditEventSource'];
    return parts.join(', ');
  }
}
