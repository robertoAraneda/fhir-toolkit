import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicinalProductIndicationOtherTherapy,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductIndicationOtherTherapy */
const MEDICINAL_PRODUCT_INDICATION_OTHER_THERAPY_PROPERTIES = [
  'therapyRelationshipType',
  'medicationCodeableConcept',
  'medicationReference',
] as const;

/**
 * MedicinalProductIndicationOtherTherapy - Information about the use of the medicinal product in relation to other therapies described as part of the indication
 *
 * @see https://hl7.org/fhir/R4/medicinalproductindicationothertherapy.html
 *
 * @example
 * const medicinalProductIndicationOtherTherapy = new MedicinalProductIndicationOtherTherapy({
 *   // ... properties
 * });
 */
export class MedicinalProductIndicationOtherTherapy extends BackboneElement implements IMedicinalProductIndicationOtherTherapy {

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

  constructor(data?: Partial<IMedicinalProductIndicationOtherTherapy>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_INDICATION_OTHER_THERAPY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductIndicationOtherTherapy from a JSON object
   */
  static fromJSON(json: IMedicinalProductIndicationOtherTherapy): MedicinalProductIndicationOtherTherapy {
    return new MedicinalProductIndicationOtherTherapy(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductIndicationOtherTherapy with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductIndicationOtherTherapy>): MedicinalProductIndicationOtherTherapy {
    return new MedicinalProductIndicationOtherTherapy({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductIndicationOtherTherapy by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductIndicationOtherTherapy) => Partial<IMedicinalProductIndicationOtherTherapy>): MedicinalProductIndicationOtherTherapy {
    const currentData = this.toJSON();
    return new MedicinalProductIndicationOtherTherapy({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductIndicationOtherTherapy)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductIndicationOtherTherapy {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_INDICATION_OTHER_THERAPY_PROPERTIES);
    return result as IMedicinalProductIndicationOtherTherapy;
  }

  /**
   * Create a deep clone of this MedicinalProductIndicationOtherTherapy
   */
  clone(): MedicinalProductIndicationOtherTherapy {
    return new MedicinalProductIndicationOtherTherapy(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductIndicationOtherTherapy
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductIndicationOtherTherapy'];
    return parts.join(', ');
  }
}
