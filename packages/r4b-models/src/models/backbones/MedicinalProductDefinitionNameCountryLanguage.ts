import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicinalProductDefinitionNameCountryLanguage,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicinalProductDefinitionNameCountryLanguage */
const MEDICINAL_PRODUCT_DEFINITION_NAME_COUNTRY_LANGUAGE_PROPERTIES = [
  'country',
  'jurisdiction',
  'language',
] as const;

/**
 * MedicinalProductDefinitionNameCountryLanguage - Country and jurisdiction where the name applies
 *
 * @see https://hl7.org/fhir/R4/medicinalproductdefinitionnamecountrylanguage.html
 *
 * @example
 * const medicinalProductDefinitionNameCountryLanguage = new MedicinalProductDefinitionNameCountryLanguage({
 *   // ... properties
 * });
 */
export class MedicinalProductDefinitionNameCountryLanguage extends BackboneElement implements IMedicinalProductDefinitionNameCountryLanguage {

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

  constructor(data?: Partial<IMedicinalProductDefinitionNameCountryLanguage>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_DEFINITION_NAME_COUNTRY_LANGUAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductDefinitionNameCountryLanguage from a JSON object
   */
  static fromJSON(json: IMedicinalProductDefinitionNameCountryLanguage): MedicinalProductDefinitionNameCountryLanguage {
    return new MedicinalProductDefinitionNameCountryLanguage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductDefinitionNameCountryLanguage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductDefinitionNameCountryLanguage>): MedicinalProductDefinitionNameCountryLanguage {
    return new MedicinalProductDefinitionNameCountryLanguage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductDefinitionNameCountryLanguage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductDefinitionNameCountryLanguage) => Partial<IMedicinalProductDefinitionNameCountryLanguage>): MedicinalProductDefinitionNameCountryLanguage {
    const currentData = this.toJSON();
    return new MedicinalProductDefinitionNameCountryLanguage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductDefinitionNameCountryLanguage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductDefinitionNameCountryLanguage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_DEFINITION_NAME_COUNTRY_LANGUAGE_PROPERTIES);
    return result as IMedicinalProductDefinitionNameCountryLanguage;
  }

  /**
   * Create a deep clone of this MedicinalProductDefinitionNameCountryLanguage
   */
  clone(): MedicinalProductDefinitionNameCountryLanguage {
    return new MedicinalProductDefinitionNameCountryLanguage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductDefinitionNameCountryLanguage
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductDefinitionNameCountryLanguage'];
    return parts.join(', ');
  }
}
