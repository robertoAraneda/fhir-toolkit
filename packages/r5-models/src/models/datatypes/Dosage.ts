import { Element } from '../base/Element.js';
import type {
  ICodeableConcept,
  IDosage,
  IDosageDoseAndRate,
  IElement,
  IQuantity,
  IRatio,
  ITiming,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Dosage */
const DOSAGE_PROPERTIES = [
  'sequence',
  '_sequence',
  'text',
  '_text',
  'additionalInstruction',
  'patientInstruction',
  '_patientInstruction',
  'timing',
  'asNeeded',
  '_asNeeded',
  'asNeededFor',
  'site',
  'route',
  'method',
  'doseAndRate',
  'maxDosePerPeriod',
  'maxDosePerAdministration',
  'maxDosePerLifetime',
] as const;

/**
 * Dosage - Indicates how the medication is/was taken or should be taken by the patient.
 *
 * @see https://hl7.org/fhir/R5/dosage.html
 *
 * @example
 * const dosage = new Dosage({
 *   // ... properties
 * });
 */
export class Dosage extends Element implements IDosage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The order of the dosage instructions */
  sequence?: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Free text dosage instructions e.g. SIG */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  /** Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness" */
  additionalInstruction?: ICodeableConcept[];

  /** Patient or consumer oriented instructions */
  patientInstruction?: string;

  /** Extension for patientInstruction */
  _patientInstruction?: IElement;

  /** When medication should be administered */
  timing?: ITiming;

  /** Take "as needed" */
  asNeeded?: boolean;

  /** Extension for asNeeded */
  _asNeeded?: IElement;

  /** Take "as needed" (for x) */
  asNeededFor?: ICodeableConcept[];

  /** Body site to administer to */
  site?: ICodeableConcept;

  /** How drug should enter body */
  route?: ICodeableConcept;

  /** Technique for administering medication */
  method?: ICodeableConcept;

  /** Amount of medication administered, to be administered or typical amount to be administered */
  doseAndRate?: IDosageDoseAndRate[];

  /** Upper limit on medication per unit of time */
  maxDosePerPeriod?: IRatio[];

  /** Upper limit on medication per administration */
  maxDosePerAdministration?: IQuantity;

  /** Upper limit on medication per lifetime of the patient */
  maxDosePerLifetime?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDosage>) {
    super(data);
    if (data) {
      this.assignProps(data, DOSAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Dosage from a JSON object
   */
  static fromJSON(json: IDosage): Dosage {
    return new Dosage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Dosage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDosage>): Dosage {
    return new Dosage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Dosage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDosage) => Partial<IDosage>): Dosage {
    const currentData = this.toJSON();
    return new Dosage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDosage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDosage {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, DOSAGE_PROPERTIES);
    return result as IDosage;
  }

  /**
   * Create a deep clone of this Dosage
   */
  clone(): Dosage {
    return new Dosage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Dosage
   */
  toString(): string {
    const parts: string[] = ['Dosage'];
    return parts.join(', ');
  }
}
