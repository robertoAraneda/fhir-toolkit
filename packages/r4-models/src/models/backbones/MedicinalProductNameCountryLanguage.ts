import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicinalProductNameCountryLanguage,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductNameCountryLanguage */
const MEDICINAL_PRODUCT_NAME_COUNTRY_LANGUAGE_PROPERTIES = [
  'country',
  'jurisdiction',
  'language',
] as const;

/**
 * MedicinalProductNameCountryLanguage - Country where the name applies
 *
 * @see https://hl7.org/fhir/R4/medicinalproductnamecountrylanguage.html
 *
 * @example
 * const medicinalProductNameCountryLanguage = new MedicinalProductNameCountryLanguage({
 *   // ... properties
 * });
 */
export class MedicinalProductNameCountryLanguage extends BackboneElement implements IMedicinalProductNameCountryLanguage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Country code for where this name applies */
  country: ICodeableConcept;

  /** Jurisdiction code for where this name applies */
  jurisdiction?: ICodeableConcept;

  /** Language code for this name */
  language: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductNameCountryLanguage>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_NAME_COUNTRY_LANGUAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductNameCountryLanguage from a JSON object
   */
  static fromJSON(json: IMedicinalProductNameCountryLanguage): MedicinalProductNameCountryLanguage {
    return new MedicinalProductNameCountryLanguage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductNameCountryLanguage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductNameCountryLanguage>): MedicinalProductNameCountryLanguage {
    return new MedicinalProductNameCountryLanguage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductNameCountryLanguage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductNameCountryLanguage) => Partial<IMedicinalProductNameCountryLanguage>): MedicinalProductNameCountryLanguage {
    const currentData = this.toJSON();
    return new MedicinalProductNameCountryLanguage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductNameCountryLanguage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductNameCountryLanguage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_NAME_COUNTRY_LANGUAGE_PROPERTIES);
    return result as IMedicinalProductNameCountryLanguage;
  }

  /**
   * Create a deep clone of this MedicinalProductNameCountryLanguage
   */
  clone(): MedicinalProductNameCountryLanguage {
    return new MedicinalProductNameCountryLanguage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductNameCountryLanguage
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductNameCountryLanguage'];
    return parts.join(', ');
  }
}
