import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAuditEventOutcome,
  ICodeableConcept,
  ICoding,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AuditEventOutcome */
const AUDIT_EVENT_OUTCOME_PROPERTIES = [
  'code',
  'detail',
] as const;

/**
 * AuditEventOutcome - Whether the event succeeded or failed
 *
 * @see https://hl7.org/fhir/R5/auditeventoutcome.html
 *
 * @example
 * const auditEventOutcome = new AuditEventOutcome({
 *   // ... properties
 * });
 */
export class AuditEventOutcome extends BackboneElement implements IAuditEventOutcome {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Whether the event succeeded or failed */
  code: ICoding;

  /** Additional outcome detail */
  detail?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAuditEventOutcome>) {
    super(data);
    if (data) {
      this.assignProps(data, AUDIT_EVENT_OUTCOME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AuditEventOutcome from a JSON object
   */
  static fromJSON(json: IAuditEventOutcome): AuditEventOutcome {
    return new AuditEventOutcome(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AuditEventOutcome with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAuditEventOutcome>): AuditEventOutcome {
    return new AuditEventOutcome({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AuditEventOutcome by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAuditEventOutcome) => Partial<IAuditEventOutcome>): AuditEventOutcome {
    const currentData = this.toJSON();
    return new AuditEventOutcome({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAuditEventOutcome)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAuditEventOutcome {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, AUDIT_EVENT_OUTCOME_PROPERTIES);
    return result as IAuditEventOutcome;
  }

  /**
   * Create a deep clone of this AuditEventOutcome
   */
  clone(): AuditEventOutcome {
    return new AuditEventOutcome(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AuditEventOutcome
   */
  toString(): string {
    const parts: string[] = ['AuditEventOutcome'];
    return parts.join(', ');
  }
}
