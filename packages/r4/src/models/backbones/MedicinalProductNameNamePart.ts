import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  IMedicinalProductNameNamePart,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductNameNamePart */
const MEDICINAL_PRODUCT_NAME_NAME_PART_PROPERTIES = [
  'part',
  '_part',
  'type',
] as const;

/**
 * MedicinalProductNameNamePart - Coding words or phrases of the name
 *
 * @see https://hl7.org/fhir/R4/medicinalproductnamenamepart.html
 *
 * @example
 * const medicinalProductNameNamePart = new MedicinalProductNameNamePart({
 *   // ... properties
 * });
 */
export class MedicinalProductNameNamePart extends BackboneElement implements IMedicinalProductNameNamePart {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A fragment of a product name */
  part: string;

  /** Extension for part */
  _part?: IElement;

  /** Idenifying type for this part of the name (e.g. strength part) */
  type: ICoding;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductNameNamePart>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_NAME_NAME_PART_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductNameNamePart from a JSON object
   */
  static fromJSON(json: IMedicinalProductNameNamePart): MedicinalProductNameNamePart {
    return new MedicinalProductNameNamePart(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductNameNamePart with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductNameNamePart>): MedicinalProductNameNamePart {
    return new MedicinalProductNameNamePart({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductNameNamePart by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductNameNamePart) => Partial<IMedicinalProductNameNamePart>): MedicinalProductNameNamePart {
    const currentData = this.toJSON();
    return new MedicinalProductNameNamePart({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductNameNamePart)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductNameNamePart {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_NAME_NAME_PART_PROPERTIES);
    return result as IMedicinalProductNameNamePart;
  }

  /**
   * Create a deep clone of this MedicinalProductNameNamePart
   */
  clone(): MedicinalProductNameNamePart {
    return new MedicinalProductNameNamePart(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductNameNamePart
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductNameNamePart'];
    return parts.join(', ');
  }
}
