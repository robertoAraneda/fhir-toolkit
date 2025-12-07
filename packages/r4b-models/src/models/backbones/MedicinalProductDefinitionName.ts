import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicinalProductDefinitionName,
  IMedicinalProductDefinitionNameCountryLanguage,
  IMedicinalProductDefinitionNameNamePart,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicinalProductDefinitionName */
const MEDICINAL_PRODUCT_DEFINITION_NAME_PROPERTIES = [
  'productName',
  '_productName',
  'type',
  'namePart',
  'countryLanguage',
] as const;

/**
 * MedicinalProductDefinitionName - The product's name, including full name and possibly coded parts
 *
 * @see https://hl7.org/fhir/R4/medicinalproductdefinitionname.html
 *
 * @example
 * const medicinalProductDefinitionName = new MedicinalProductDefinitionName({
 *   // ... properties
 * });
 */
export class MedicinalProductDefinitionName extends BackboneElement implements IMedicinalProductDefinitionName {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The full product name */
  productName: string;

  /** Extension for productName */
  _productName?: IElement;

  /** Type of product name, such as rINN, BAN, Proprietary, Non-Proprietary */
  type?: ICodeableConcept;

  /** Coding words or phrases of the name */
  namePart?: IMedicinalProductDefinitionNameNamePart[];

  /** Country and jurisdiction where the name applies */
  countryLanguage?: IMedicinalProductDefinitionNameCountryLanguage[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductDefinitionName>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_DEFINITION_NAME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductDefinitionName from a JSON object
   */
  static fromJSON(json: IMedicinalProductDefinitionName): MedicinalProductDefinitionName {
    return new MedicinalProductDefinitionName(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductDefinitionName with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductDefinitionName>): MedicinalProductDefinitionName {
    return new MedicinalProductDefinitionName({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductDefinitionName by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductDefinitionName) => Partial<IMedicinalProductDefinitionName>): MedicinalProductDefinitionName {
    const currentData = this.toJSON();
    return new MedicinalProductDefinitionName({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductDefinitionName)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductDefinitionName {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_DEFINITION_NAME_PROPERTIES);
    return result as IMedicinalProductDefinitionName;
  }

  /**
   * Create a deep clone of this MedicinalProductDefinitionName
   */
  clone(): MedicinalProductDefinitionName {
    return new MedicinalProductDefinitionName(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductDefinitionName
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductDefinitionName'];
    return parts.join(', ');
  }
}
