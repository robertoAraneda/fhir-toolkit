import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IImmunizationProgramEligibility,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ImmunizationProgramEligibility */
const IMMUNIZATION_PROGRAM_ELIGIBILITY_PROPERTIES = [
  'program',
  'programStatus',
] as const;

/**
 * ImmunizationProgramEligibility - Patient eligibility for a specific vaccination program
 *
 * @see https://hl7.org/fhir/R4/immunizationprogrameligibility.html
 *
 * @example
 * const immunizationProgramEligibility = new ImmunizationProgramEligibility({
 *   // ... properties
 * });
 */
export class ImmunizationProgramEligibility extends BackboneElement implements IImmunizationProgramEligibility {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The program that eligibility is declared for */
  program: ICodeableConcept;

  /** The patient's eligibility status for the program */
  programStatus: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImmunizationProgramEligibility>) {
    super(data);
    if (data) {
      this.assignProps(data, IMMUNIZATION_PROGRAM_ELIGIBILITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImmunizationProgramEligibility from a JSON object
   */
  static fromJSON(json: IImmunizationProgramEligibility): ImmunizationProgramEligibility {
    return new ImmunizationProgramEligibility(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImmunizationProgramEligibility with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImmunizationProgramEligibility>): ImmunizationProgramEligibility {
    return new ImmunizationProgramEligibility({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImmunizationProgramEligibility by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImmunizationProgramEligibility) => Partial<IImmunizationProgramEligibility>): ImmunizationProgramEligibility {
    const currentData = this.toJSON();
    return new ImmunizationProgramEligibility({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImmunizationProgramEligibility)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImmunizationProgramEligibility {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMMUNIZATION_PROGRAM_ELIGIBILITY_PROPERTIES);
    return result as IImmunizationProgramEligibility;
  }

  /**
   * Create a deep clone of this ImmunizationProgramEligibility
   */
  clone(): ImmunizationProgramEligibility {
    return new ImmunizationProgramEligibility(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImmunizationProgramEligibility
   */
  toString(): string {
    const parts: string[] = ['ImmunizationProgramEligibility'];
    return parts.join(', ');
  }
}
