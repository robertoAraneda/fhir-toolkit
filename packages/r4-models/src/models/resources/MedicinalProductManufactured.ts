import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IMedicinalProductManufactured,
  IProdCharacteristic,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductManufactured */
const MEDICINAL_PRODUCT_MANUFACTURED_PROPERTIES = [
  'manufacturedDoseForm',
  'unitOfPresentation',
  'quantity',
  'manufacturer',
  'ingredient',
  'physicalCharacteristics',
  'otherCharacteristics',
] as const;

/**
 * MedicinalProductManufactured - The manufactured item as contained in the packaged medicinal product.
 *
 * @see https://hl7.org/fhir/R4/medicinalproductmanufactured.html
 *
 * @example
 * const medicinalProductManufactured = new MedicinalProductManufactured({
 *   resourceType: 'MedicinalProductManufactured',
 *   // ... properties
 * });
 */
export class MedicinalProductManufactured extends DomainResource implements IMedicinalProductManufactured {
  readonly resourceType = 'MedicinalProductManufactured' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Dose form as manufactured and before any transformation into the pharmaceutical product */
  manufacturedDoseForm: ICodeableConcept;

  /** The “real world” units in which the quantity of the manufactured item is described */
  unitOfPresentation?: ICodeableConcept;

  /** The quantity or "count number" of the manufactured item */
  quantity: IQuantity;

  /** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues) */
  manufacturer?: IReference<'Organization'>[];

  /** Ingredient */
  ingredient?: IReference<'MedicinalProductIngredient'>[];

  /** Dimensions, color etc. */
  physicalCharacteristics?: IProdCharacteristic;

  /** Other codeable characteristics */
  otherCharacteristics?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductManufactured>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_MANUFACTURED_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductManufactured from a JSON object
   */
  static fromJSON(json: IMedicinalProductManufactured): MedicinalProductManufactured {
    return new MedicinalProductManufactured(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductManufactured with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductManufactured>): MedicinalProductManufactured {
    return new MedicinalProductManufactured({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductManufactured by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductManufactured) => Partial<IMedicinalProductManufactured>): MedicinalProductManufactured {
    const currentData = this.toJSON();
    return new MedicinalProductManufactured({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductManufactured)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductManufactured {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_MANUFACTURED_PROPERTIES);
    return result as IMedicinalProductManufactured;
  }

  /**
   * Create a deep clone of this MedicinalProductManufactured
   */
  clone(): MedicinalProductManufactured {
    return new MedicinalProductManufactured(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductManufactured
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductManufactured'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
