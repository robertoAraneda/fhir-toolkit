import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IHealthcareServiceEligibility,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to HealthcareServiceEligibility */
const HEALTHCARE_SERVICE_ELIGIBILITY_PROPERTIES = [
  'code',
  'comment',
  '_comment',
] as const;

/**
 * HealthcareServiceEligibility - Specific eligibility requirements required to use the service
 *
 * @see https://hl7.org/fhir/R4/healthcareserviceeligibility.html
 *
 * @example
 * const healthcareServiceEligibility = new HealthcareServiceEligibility({
 *   // ... properties
 * });
 */
export class HealthcareServiceEligibility extends BackboneElement implements IHealthcareServiceEligibility {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Coded value for the eligibility */
  code?: ICodeableConcept;

  /** Describes the eligibility conditions for the service */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IHealthcareServiceEligibility>) {
    super(data);
    if (data) {
      this.assignProps(data, HEALTHCARE_SERVICE_ELIGIBILITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create HealthcareServiceEligibility from a JSON object
   */
  static fromJSON(json: IHealthcareServiceEligibility): HealthcareServiceEligibility {
    return new HealthcareServiceEligibility(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new HealthcareServiceEligibility with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IHealthcareServiceEligibility>): HealthcareServiceEligibility {
    return new HealthcareServiceEligibility({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new HealthcareServiceEligibility by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IHealthcareServiceEligibility) => Partial<IHealthcareServiceEligibility>): HealthcareServiceEligibility {
    const currentData = this.toJSON();
    return new HealthcareServiceEligibility({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IHealthcareServiceEligibility)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IHealthcareServiceEligibility {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, HEALTHCARE_SERVICE_ELIGIBILITY_PROPERTIES);
    return result as IHealthcareServiceEligibility;
  }

  /**
   * Create a deep clone of this HealthcareServiceEligibility
   */
  clone(): HealthcareServiceEligibility {
    return new HealthcareServiceEligibility(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the HealthcareServiceEligibility
   */
  toString(): string {
    const parts: string[] = ['HealthcareServiceEligibility'];
    return parts.join(', ');
  }
}
