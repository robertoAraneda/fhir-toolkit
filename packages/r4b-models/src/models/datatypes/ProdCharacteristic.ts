import { Element } from '../base/Element.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  IProdCharacteristic,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ProdCharacteristic */
const PROD_CHARACTERISTIC_PROPERTIES = [
  'height',
  'width',
  'depth',
  'weight',
  'nominalVolume',
  'externalDiameter',
  'shape',
  '_shape',
  'color',
  '_color',
  'imprint',
  '_imprint',
  'image',
  'scoring',
] as const;

/**
 * ProdCharacteristic - The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 *
 * @see https://hl7.org/fhir/R4B/prodcharacteristic.html
 *
 * @example
 * const prodCharacteristic = new ProdCharacteristic({
 *   // ... properties
 * });
 */
export class ProdCharacteristic extends Element implements IProdCharacteristic {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  height?: IQuantity;

  /** Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  width?: IQuantity;

  /** Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  depth?: IQuantity;

  /** Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  weight?: IQuantity;

  /** Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  nominalVolume?: IQuantity;

  /** Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  externalDiameter?: IQuantity;

  /** Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
  shape?: string;

  /** Extension for shape */
  _shape?: IElement;

  /** Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
  color?: string[];

  /** Extension for color */
  _color?: IElement;

  /** Where applicable, the imprint can be specified as text */
  imprint?: string[];

  /** Extension for imprint */
  _imprint?: IElement;

  /** Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations */
  image?: IAttachment[];

  /** Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
  scoring?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IProdCharacteristic>) {
    super(data);
    if (data) {
      this.assignProps(data, PROD_CHARACTERISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ProdCharacteristic from a JSON object
   */
  static fromJSON(json: IProdCharacteristic): ProdCharacteristic {
    return new ProdCharacteristic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ProdCharacteristic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IProdCharacteristic>): ProdCharacteristic {
    return new ProdCharacteristic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ProdCharacteristic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IProdCharacteristic) => Partial<IProdCharacteristic>): ProdCharacteristic {
    const currentData = this.toJSON();
    return new ProdCharacteristic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IProdCharacteristic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IProdCharacteristic {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, PROD_CHARACTERISTIC_PROPERTIES);
    return result as IProdCharacteristic;
  }

  /**
   * Create a deep clone of this ProdCharacteristic
   */
  clone(): ProdCharacteristic {
    return new ProdCharacteristic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ProdCharacteristic
   */
  toString(): string {
    const parts: string[] = ['ProdCharacteristic'];
    return parts.join(', ');
  }
}
