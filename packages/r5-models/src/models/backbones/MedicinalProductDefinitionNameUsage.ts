import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicinalProductDefinitionNameUsage,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicinalProductDefinitionNameUsage */
const MEDICINAL_PRODUCT_DEFINITION_NAME_USAGE_PROPERTIES = [
  'country',
  'jurisdiction',
  'language',
] as const;

/**
 * MedicinalProductDefinitionNameUsage - Country and jurisdiction where the name applies
 *
 * @see https://hl7.org/fhir/R4/medicinalproductdefinitionnameusage.html
 *
 * @example
 * const medicinalProductDefinitionNameUsage = new MedicinalProductDefinitionNameUsage({
 *   // ... properties
 * });
 */
export class MedicinalProductDefinitionNameUsage extends BackboneElement implements IMedicinalProductDefinitionNameUsage {

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

  constructor(data?: Partial<IMedicinalProductDefinitionNameUsage>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_DEFINITION_NAME_USAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductDefinitionNameUsage from a JSON object
   */
  static fromJSON(json: IMedicinalProductDefinitionNameUsage): MedicinalProductDefinitionNameUsage {
    return new MedicinalProductDefinitionNameUsage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductDefinitionNameUsage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductDefinitionNameUsage>): MedicinalProductDefinitionNameUsage {
    return new MedicinalProductDefinitionNameUsage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductDefinitionNameUsage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductDefinitionNameUsage) => Partial<IMedicinalProductDefinitionNameUsage>): MedicinalProductDefinitionNameUsage {
    const currentData = this.toJSON();
    return new MedicinalProductDefinitionNameUsage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductDefinitionNameUsage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductDefinitionNameUsage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_DEFINITION_NAME_USAGE_PROPERTIES);
    return result as IMedicinalProductDefinitionNameUsage;
  }

  /**
   * Create a deep clone of this MedicinalProductDefinitionNameUsage
   */
  clone(): MedicinalProductDefinitionNameUsage {
    return new MedicinalProductDefinitionNameUsage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductDefinitionNameUsage
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductDefinitionNameUsage'];
    return parts.join(', ');
  }
}
