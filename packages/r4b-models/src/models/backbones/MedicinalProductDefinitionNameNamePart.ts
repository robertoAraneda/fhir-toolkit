import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicinalProductDefinitionNameNamePart,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicinalProductDefinitionNameNamePart */
const MEDICINAL_PRODUCT_DEFINITION_NAME_NAME_PART_PROPERTIES = [
  'part',
  '_part',
  'type',
] as const;

/**
 * MedicinalProductDefinitionNameNamePart - Coding words or phrases of the name
 *
 * @see https://hl7.org/fhir/R4/medicinalproductdefinitionnamenamepart.html
 *
 * @example
 * const medicinalProductDefinitionNameNamePart = new MedicinalProductDefinitionNameNamePart({
 *   // ... properties
 * });
 */
export class MedicinalProductDefinitionNameNamePart extends BackboneElement implements IMedicinalProductDefinitionNameNamePart {

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

  constructor(data?: Partial<IMedicinalProductDefinitionNameNamePart>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_DEFINITION_NAME_NAME_PART_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductDefinitionNameNamePart from a JSON object
   */
  static fromJSON(json: IMedicinalProductDefinitionNameNamePart): MedicinalProductDefinitionNameNamePart {
    return new MedicinalProductDefinitionNameNamePart(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductDefinitionNameNamePart with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductDefinitionNameNamePart>): MedicinalProductDefinitionNameNamePart {
    return new MedicinalProductDefinitionNameNamePart({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductDefinitionNameNamePart by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductDefinitionNameNamePart) => Partial<IMedicinalProductDefinitionNameNamePart>): MedicinalProductDefinitionNameNamePart {
    const currentData = this.toJSON();
    return new MedicinalProductDefinitionNameNamePart({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductDefinitionNameNamePart)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductDefinitionNameNamePart {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_DEFINITION_NAME_NAME_PART_PROPERTIES);
    return result as IMedicinalProductDefinitionNameNamePart;
  }

  /**
   * Create a deep clone of this MedicinalProductDefinitionNameNamePart
   */
  clone(): MedicinalProductDefinitionNameNamePart {
    return new MedicinalProductDefinitionNameNamePart(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductDefinitionNameNamePart
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductDefinitionNameNamePart'];
    return parts.join(', ');
  }
}
