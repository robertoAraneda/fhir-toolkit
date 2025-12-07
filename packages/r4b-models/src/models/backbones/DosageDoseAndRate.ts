import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDosageDoseAndRate,
  IQuantity,
  IRange,
  IRatio,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DosageDoseAndRate */
const DOSAGE_DOSE_AND_RATE_PROPERTIES = [
  'type',
  'doseRange',
  'doseQuantity',
  'rateRatio',
  'rateRange',
  'rateQuantity',
] as const;

/**
 * DosageDoseAndRate - Amount of medication administered
 *
 * @see https://hl7.org/fhir/R4/dosagedoseandrate.html
 *
 * @example
 * const dosageDoseAndRate = new DosageDoseAndRate({
 *   // ... properties
 * });
 */
export class DosageDoseAndRate extends BackboneElement implements IDosageDoseAndRate {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The kind of dose or rate specified */
  type?: ICodeableConcept;

  /** Amount of medication per dose */
  doseRange?: IRange;

  /** Amount of medication per dose */
  doseQuantity?: IQuantity;

  /** Amount of medication per unit of time */
  rateRatio?: IRatio;

  /** Amount of medication per unit of time */
  rateRange?: IRange;

  /** Amount of medication per unit of time */
  rateQuantity?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDosageDoseAndRate>) {
    super(data);
    if (data) {
      this.assignProps(data, DOSAGE_DOSE_AND_RATE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DosageDoseAndRate from a JSON object
   */
  static fromJSON(json: IDosageDoseAndRate): DosageDoseAndRate {
    return new DosageDoseAndRate(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DosageDoseAndRate with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDosageDoseAndRate>): DosageDoseAndRate {
    return new DosageDoseAndRate({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DosageDoseAndRate by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDosageDoseAndRate) => Partial<IDosageDoseAndRate>): DosageDoseAndRate {
    const currentData = this.toJSON();
    return new DosageDoseAndRate({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDosageDoseAndRate)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDosageDoseAndRate {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DOSAGE_DOSE_AND_RATE_PROPERTIES);
    return result as IDosageDoseAndRate;
  }

  /**
   * Create a deep clone of this DosageDoseAndRate
   */
  clone(): DosageDoseAndRate {
    return new DosageDoseAndRate(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DosageDoseAndRate
   */
  toString(): string {
    const parts: string[] = ['DosageDoseAndRate'];
    return parts.join(', ');
  }
}
