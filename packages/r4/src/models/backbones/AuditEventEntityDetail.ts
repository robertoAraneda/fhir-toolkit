import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAuditEventEntityDetail,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to AuditEventEntityDetail */
const AUDIT_EVENT_ENTITY_DETAIL_PROPERTIES = [
  'type',
  '_type',
  'valueString',
  '_valueString',
  'valueBase64Binary',
  '_valueBase64Binary',
] as const;

/**
 * AuditEventEntityDetail - Additional Information about the entity
 *
 * @see https://hl7.org/fhir/R4/auditevententitydetail.html
 *
 * @example
 * const auditEventEntityDetail = new AuditEventEntityDetail({
 *   // ... properties
 * });
 */
export class AuditEventEntityDetail extends BackboneElement implements IAuditEventEntityDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name of the property */
  type: string;

  /** Extension for type */
  _type?: IElement;

  /** Property value */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Property value */
  valueBase64Binary?: string;

  /** Extension for valueBase64Binary */
  _valueBase64Binary?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAuditEventEntityDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, AUDIT_EVENT_ENTITY_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AuditEventEntityDetail from a JSON object
   */
  static fromJSON(json: IAuditEventEntityDetail): AuditEventEntityDetail {
    return new AuditEventEntityDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AuditEventEntityDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAuditEventEntityDetail>): AuditEventEntityDetail {
    return new AuditEventEntityDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AuditEventEntityDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAuditEventEntityDetail) => Partial<IAuditEventEntityDetail>): AuditEventEntityDetail {
    const currentData = this.toJSON();
    return new AuditEventEntityDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAuditEventEntityDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAuditEventEntityDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, AUDIT_EVENT_ENTITY_DETAIL_PROPERTIES);
    return result as IAuditEventEntityDetail;
  }

  /**
   * Create a deep clone of this AuditEventEntityDetail
   */
  clone(): AuditEventEntityDetail {
    return new AuditEventEntityDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AuditEventEntityDetail
   */
  toString(): string {
    const parts: string[] = ['AuditEventEntityDetail'];
    return parts.join(', ');
  }
}
