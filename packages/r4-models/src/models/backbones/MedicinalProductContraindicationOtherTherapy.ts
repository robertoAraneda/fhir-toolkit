import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicinalProductContraindicationOtherTherapy,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductContraindicationOtherTherapy */
const MEDICINAL_PRODUCT_CONTRAINDICATION_OTHER_THERAPY_PROPERTIES = [
  'therapyRelationshipType',
  'medicationCodeableConcept',
  'medicationReference',
] as const;

/**
 * MedicinalProductContraindicationOtherTherapy - Information about the use of the medicinal product in relation to other therapies described as part of the indication
 *
 * @see https://hl7.org/fhir/R4/medicinalproductcontraindicationothertherapy.html
 *
 * @example
 * const medicinalProductContraindicationOtherTherapy = new MedicinalProductContraindicationOtherTherapy({
 *   // ... properties
 * });
 */
export class MedicinalProductContraindicationOtherTherapy extends BackboneElement implements IMedicinalProductContraindicationOtherTherapy {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of relationship between the medicinal product indication or contraindication and another therapy */
  therapyRelationshipType: ICodeableConcept;

  /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication */
  medicationCodeableConcept?: ICodeableConcept;

  /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication */
  medicationReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductContraindicationOtherTherapy>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_CONTRAINDICATION_OTHER_THERAPY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductContraindicationOtherTherapy from a JSON object
   */
  static fromJSON(json: IMedicinalProductContraindicationOtherTherapy): MedicinalProductContraindicationOtherTherapy {
    return new MedicinalProductContraindicationOtherTherapy(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductContraindicationOtherTherapy with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductContraindicationOtherTherapy>): MedicinalProductContraindicationOtherTherapy {
    return new MedicinalProductContraindicationOtherTherapy({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductContraindicationOtherTherapy by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductContraindicationOtherTherapy) => Partial<IMedicinalProductContraindicationOtherTherapy>): MedicinalProductContraindicationOtherTherapy {
    const currentData = this.toJSON();
    return new MedicinalProductContraindicationOtherTherapy({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductContraindicationOtherTherapy)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductContraindicationOtherTherapy {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_CONTRAINDICATION_OTHER_THERAPY_PROPERTIES);
    return result as IMedicinalProductContraindicationOtherTherapy;
  }

  /**
   * Create a deep clone of this MedicinalProductContraindicationOtherTherapy
   */
  clone(): MedicinalProductContraindicationOtherTherapy {
    return new MedicinalProductContraindicationOtherTherapy(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductContraindicationOtherTherapy
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductContraindicationOtherTherapy'];
    return parts.join(', ');
  }
}
