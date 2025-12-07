import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAuditEventEntityDetail,
  ICodeableConcept,
  IElement,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AuditEventEntityDetail */
const AUDIT_EVENT_ENTITY_DETAIL_PROPERTIES = [
  'type',
  'valueQuantity',
  'valueCodeableConcept',
  'valueString',
  '_valueString',
  'valueBoolean',
  '_valueBoolean',
  'valueInteger',
  '_valueInteger',
  'valueRange',
  'valueRatio',
  'valueTime',
  '_valueTime',
  'valueDateTime',
  '_valueDateTime',
  'valuePeriod',
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
  type: ICodeableConcept;

  /** Property value */
  valueQuantity?: IQuantity;

  /** Property value */
  valueCodeableConcept?: ICodeableConcept;

  /** Property value */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Property value */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Property value */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Property value */
  valueRange?: IRange;

  /** Property value */
  valueRatio?: IRatio;

  /** Property value */
  valueTime?: string;

  /** Extension for valueTime */
  _valueTime?: IElement;

  /** Property value */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** Property value */
  valuePeriod?: IPeriod;

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
