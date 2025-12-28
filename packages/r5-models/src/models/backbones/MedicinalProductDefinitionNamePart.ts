import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicinalProductDefinitionNamePart,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicinalProductDefinitionNamePart */
const MEDICINAL_PRODUCT_DEFINITION_NAME_PART_PROPERTIES = [
  'part',
  '_part',
  'type',
] as const;

/**
 * MedicinalProductDefinitionNamePart - Coding words or phrases of the name
 *
 * @see https://hl7.org/fhir/R5/medicinalproductdefinitionnamepart.html
 *
 * @example
 * const medicinalProductDefinitionNamePart = new MedicinalProductDefinitionNamePart({
 *   // ... properties
 * });
 */
export class MedicinalProductDefinitionNamePart extends BackboneElement implements IMedicinalProductDefinitionNamePart {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A fragment of a product name */
  part: string;

  /** Extension for part */
  _part?: IElement;

  /** Identifying type for this part of the name (e.g. strength part) */
  type: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductDefinitionNamePart>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_DEFINITION_NAME_PART_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductDefinitionNamePart from a JSON object
   */
  static fromJSON(json: IMedicinalProductDefinitionNamePart): MedicinalProductDefinitionNamePart {
    return new MedicinalProductDefinitionNamePart(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductDefinitionNamePart with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductDefinitionNamePart>): MedicinalProductDefinitionNamePart {
    return new MedicinalProductDefinitionNamePart({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductDefinitionNamePart by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductDefinitionNamePart) => Partial<IMedicinalProductDefinitionNamePart>): MedicinalProductDefinitionNamePart {
    const currentData = this.toJSON();
    return new MedicinalProductDefinitionNamePart({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductDefinitionNamePart)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductDefinitionNamePart {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_DEFINITION_NAME_PART_PROPERTIES);
    return result as IMedicinalProductDefinitionNamePart;
  }

  /**
   * Create a deep clone of this MedicinalProductDefinitionNamePart
   */
  clone(): MedicinalProductDefinitionNamePart {
    return new MedicinalProductDefinitionNamePart(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductDefinitionNamePart
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductDefinitionNamePart'];
    return parts.join(', ');
  }
}
