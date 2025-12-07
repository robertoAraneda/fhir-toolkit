import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IHealthcareServiceNotAvailable,
  IPeriod,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to HealthcareServiceNotAvailable */
const HEALTHCARE_SERVICE_NOT_AVAILABLE_PROPERTIES = [
  'description',
  '_description',
  'during',
] as const;

/**
 * HealthcareServiceNotAvailable - Not available during this time due to provided reason
 *
 * @see https://hl7.org/fhir/R4/healthcareservicenotavailable.html
 *
 * @example
 * const healthcareServiceNotAvailable = new HealthcareServiceNotAvailable({
 *   // ... properties
 * });
 */
export class HealthcareServiceNotAvailable extends BackboneElement implements IHealthcareServiceNotAvailable {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reason presented to the user explaining why time not available */
  description: string;

  /** Extension for description */
  _description?: IElement;

  /** Service not available from this date */
  during?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IHealthcareServiceNotAvailable>) {
    super(data);
    if (data) {
      this.assignProps(data, HEALTHCARE_SERVICE_NOT_AVAILABLE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create HealthcareServiceNotAvailable from a JSON object
   */
  static fromJSON(json: IHealthcareServiceNotAvailable): HealthcareServiceNotAvailable {
    return new HealthcareServiceNotAvailable(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new HealthcareServiceNotAvailable with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IHealthcareServiceNotAvailable>): HealthcareServiceNotAvailable {
    return new HealthcareServiceNotAvailable({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new HealthcareServiceNotAvailable by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IHealthcareServiceNotAvailable) => Partial<IHealthcareServiceNotAvailable>): HealthcareServiceNotAvailable {
    const currentData = this.toJSON();
    return new HealthcareServiceNotAvailable({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IHealthcareServiceNotAvailable)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IHealthcareServiceNotAvailable {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, HEALTHCARE_SERVICE_NOT_AVAILABLE_PROPERTIES);
    return result as IHealthcareServiceNotAvailable;
  }

  /**
   * Create a deep clone of this HealthcareServiceNotAvailable
   */
  clone(): HealthcareServiceNotAvailable {
    return new HealthcareServiceNotAvailable(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the HealthcareServiceNotAvailable
   */
  toString(): string {
    const parts: string[] = ['HealthcareServiceNotAvailable'];
    return parts.join(', ');
  }
}
