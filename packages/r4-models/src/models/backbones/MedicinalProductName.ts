import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IMedicinalProductName,
  IMedicinalProductNameCountryLanguage,
  IMedicinalProductNameNamePart,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductName */
const MEDICINAL_PRODUCT_NAME_PROPERTIES = [
  'productName',
  '_productName',
  'namePart',
  'countryLanguage',
] as const;

/**
 * MedicinalProductName - The product's name, including full name and possibly coded parts
 *
 * @see https://hl7.org/fhir/R4/medicinalproductname.html
 *
 * @example
 * const medicinalProductName = new MedicinalProductName({
 *   // ... properties
 * });
 */
export class MedicinalProductName extends BackboneElement implements IMedicinalProductName {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The full product name */
  productName: string;

  /** Extension for productName */
  _productName?: IElement;

  /** Coding words or phrases of the name */
  namePart?: IMedicinalProductNameNamePart[];

  /** Country where the name applies */
  countryLanguage?: IMedicinalProductNameCountryLanguage[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductName>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_NAME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductName from a JSON object
   */
  static fromJSON(json: IMedicinalProductName): MedicinalProductName {
    return new MedicinalProductName(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductName with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductName>): MedicinalProductName {
    return new MedicinalProductName({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductName by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductName) => Partial<IMedicinalProductName>): MedicinalProductName {
    const currentData = this.toJSON();
    return new MedicinalProductName({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductName)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductName {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_NAME_PROPERTIES);
    return result as IMedicinalProductName;
  }

  /**
   * Create a deep clone of this MedicinalProductName
   */
  clone(): MedicinalProductName {
    return new MedicinalProductName(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductName
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductName'];
    return parts.join(', ');
  }
}
