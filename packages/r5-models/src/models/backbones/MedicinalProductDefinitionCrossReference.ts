import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IMedicinalProductDefinitionCrossReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicinalProductDefinitionCrossReference */
const MEDICINAL_PRODUCT_DEFINITION_CROSS_REFERENCE_PROPERTIES = [
  'product',
  'type',
] as const;

/**
 * MedicinalProductDefinitionCrossReference - Reference to another product, e.g. for linking authorised to investigational product
 *
 * @see https://hl7.org/fhir/R4/medicinalproductdefinitioncrossreference.html
 *
 * @example
 * const medicinalProductDefinitionCrossReference = new MedicinalProductDefinitionCrossReference({
 *   // ... properties
 * });
 */
export class MedicinalProductDefinitionCrossReference extends BackboneElement implements IMedicinalProductDefinitionCrossReference {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to another product, e.g. for linking authorised to investigational product */
  product: ICodeableReference;

  /** The type of relationship, for instance branded to generic or virtual to actual product */
  type?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductDefinitionCrossReference>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_DEFINITION_CROSS_REFERENCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductDefinitionCrossReference from a JSON object
   */
  static fromJSON(json: IMedicinalProductDefinitionCrossReference): MedicinalProductDefinitionCrossReference {
    return new MedicinalProductDefinitionCrossReference(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductDefinitionCrossReference with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductDefinitionCrossReference>): MedicinalProductDefinitionCrossReference {
    return new MedicinalProductDefinitionCrossReference({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductDefinitionCrossReference by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductDefinitionCrossReference) => Partial<IMedicinalProductDefinitionCrossReference>): MedicinalProductDefinitionCrossReference {
    const currentData = this.toJSON();
    return new MedicinalProductDefinitionCrossReference({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductDefinitionCrossReference)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductDefinitionCrossReference {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_DEFINITION_CROSS_REFERENCE_PROPERTIES);
    return result as IMedicinalProductDefinitionCrossReference;
  }

  /**
   * Create a deep clone of this MedicinalProductDefinitionCrossReference
   */
  clone(): MedicinalProductDefinitionCrossReference {
    return new MedicinalProductDefinitionCrossReference(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductDefinitionCrossReference
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductDefinitionCrossReference'];
    return parts.join(', ');
  }
}
