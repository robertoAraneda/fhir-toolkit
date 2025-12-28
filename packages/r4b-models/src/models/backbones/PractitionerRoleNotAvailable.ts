import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IPeriod,
  IPractitionerRoleNotAvailable,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PractitionerRoleNotAvailable */
const PRACTITIONER_ROLE_NOT_AVAILABLE_PROPERTIES = [
  'description',
  '_description',
  'during',
] as const;

/**
 * PractitionerRoleNotAvailable - Not available during this time due to provided reason
 *
 * @see https://hl7.org/fhir/R4B/practitionerrolenotavailable.html
 *
 * @example
 * const practitionerRoleNotAvailable = new PractitionerRoleNotAvailable({
 *   // ... properties
 * });
 */
export class PractitionerRoleNotAvailable extends BackboneElement implements IPractitionerRoleNotAvailable {

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

  constructor(data?: Partial<IPractitionerRoleNotAvailable>) {
    super(data);
    if (data) {
      this.assignProps(data, PRACTITIONER_ROLE_NOT_AVAILABLE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PractitionerRoleNotAvailable from a JSON object
   */
  static fromJSON(json: IPractitionerRoleNotAvailable): PractitionerRoleNotAvailable {
    return new PractitionerRoleNotAvailable(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PractitionerRoleNotAvailable with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPractitionerRoleNotAvailable>): PractitionerRoleNotAvailable {
    return new PractitionerRoleNotAvailable({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PractitionerRoleNotAvailable by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPractitionerRoleNotAvailable) => Partial<IPractitionerRoleNotAvailable>): PractitionerRoleNotAvailable {
    const currentData = this.toJSON();
    return new PractitionerRoleNotAvailable({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPractitionerRoleNotAvailable)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPractitionerRoleNotAvailable {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PRACTITIONER_ROLE_NOT_AVAILABLE_PROPERTIES);
    return result as IPractitionerRoleNotAvailable;
  }

  /**
   * Create a deep clone of this PractitionerRoleNotAvailable
   */
  clone(): PractitionerRoleNotAvailable {
    return new PractitionerRoleNotAvailable(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PractitionerRoleNotAvailable
   */
  toString(): string {
    const parts: string[] = ['PractitionerRoleNotAvailable'];
    return parts.join(', ');
  }
}
