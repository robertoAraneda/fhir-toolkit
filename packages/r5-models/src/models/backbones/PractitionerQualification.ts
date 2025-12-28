import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IPractitionerQualification,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PractitionerQualification */
const PRACTITIONER_QUALIFICATION_PROPERTIES = [
  'identifier',
  'code',
  'period',
  'issuer',
] as const;

/**
 * PractitionerQualification - Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care
 *
 * @see https://hl7.org/fhir/R5/practitionerqualification.html
 *
 * @example
 * const practitionerQualification = new PractitionerQualification({
 *   // ... properties
 * });
 */
export class PractitionerQualification extends BackboneElement implements IPractitionerQualification {

  // ============================================================================
  // Properties
  // ============================================================================

  /** An identifier for this qualification for the practitioner */
  identifier?: IIdentifier[];

  /** Coded representation of the qualification */
  code: ICodeableConcept;

  /** Period during which the qualification is valid */
  period?: IPeriod;

  /** Organization that regulates and issues the qualification */
  issuer?: IReference<'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPractitionerQualification>) {
    super(data);
    if (data) {
      this.assignProps(data, PRACTITIONER_QUALIFICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PractitionerQualification from a JSON object
   */
  static fromJSON(json: IPractitionerQualification): PractitionerQualification {
    return new PractitionerQualification(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PractitionerQualification with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPractitionerQualification>): PractitionerQualification {
    return new PractitionerQualification({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PractitionerQualification by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPractitionerQualification) => Partial<IPractitionerQualification>): PractitionerQualification {
    const currentData = this.toJSON();
    return new PractitionerQualification({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPractitionerQualification)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPractitionerQualification {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PRACTITIONER_QUALIFICATION_PROPERTIES);
    return result as IPractitionerQualification;
  }

  /**
   * Create a deep clone of this PractitionerQualification
   */
  clone(): PractitionerQualification {
    return new PractitionerQualification(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PractitionerQualification
   */
  toString(): string {
    const parts: string[] = ['PractitionerQualification'];
    return parts.join(', ');
  }
}
