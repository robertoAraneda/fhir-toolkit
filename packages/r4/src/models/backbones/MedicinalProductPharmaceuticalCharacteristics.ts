import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicinalProductPharmaceuticalCharacteristics,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductPharmaceuticalCharacteristics */
const MEDICINAL_PRODUCT_PHARMACEUTICAL_CHARACTERISTICS_PROPERTIES = [
  'code',
  'status',
] as const;

/**
 * MedicinalProductPharmaceuticalCharacteristics - Characteristics e.g. a products onset of action
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpharmaceuticalcharacteristics.html
 *
 * @example
 * const medicinalProductPharmaceuticalCharacteristics = new MedicinalProductPharmaceuticalCharacteristics({
 *   // ... properties
 * });
 */
export class MedicinalProductPharmaceuticalCharacteristics extends BackboneElement implements IMedicinalProductPharmaceuticalCharacteristics {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A coded characteristic */
  code: ICodeableConcept;

  /** The status of characteristic e.g. assigned or pending */
  status?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductPharmaceuticalCharacteristics>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_PHARMACEUTICAL_CHARACTERISTICS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductPharmaceuticalCharacteristics from a JSON object
   */
  static fromJSON(json: IMedicinalProductPharmaceuticalCharacteristics): MedicinalProductPharmaceuticalCharacteristics {
    return new MedicinalProductPharmaceuticalCharacteristics(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductPharmaceuticalCharacteristics with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductPharmaceuticalCharacteristics>): MedicinalProductPharmaceuticalCharacteristics {
    return new MedicinalProductPharmaceuticalCharacteristics({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductPharmaceuticalCharacteristics by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductPharmaceuticalCharacteristics) => Partial<IMedicinalProductPharmaceuticalCharacteristics>): MedicinalProductPharmaceuticalCharacteristics {
    const currentData = this.toJSON();
    return new MedicinalProductPharmaceuticalCharacteristics({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductPharmaceuticalCharacteristics)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductPharmaceuticalCharacteristics {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_PHARMACEUTICAL_CHARACTERISTICS_PROPERTIES);
    return result as IMedicinalProductPharmaceuticalCharacteristics;
  }

  /**
   * Create a deep clone of this MedicinalProductPharmaceuticalCharacteristics
   */
  clone(): MedicinalProductPharmaceuticalCharacteristics {
    return new MedicinalProductPharmaceuticalCharacteristics(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductPharmaceuticalCharacteristics
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductPharmaceuticalCharacteristics'];
    return parts.join(', ');
  }
}
