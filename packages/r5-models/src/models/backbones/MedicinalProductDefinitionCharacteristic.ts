import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  IMedicinalProductDefinitionCharacteristic,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicinalProductDefinitionCharacteristic */
const MEDICINAL_PRODUCT_DEFINITION_CHARACTERISTIC_PROPERTIES = [
  'type',
  'valueCodeableConcept',
  'valueMarkdown',
  '_valueMarkdown',
  'valueQuantity',
  'valueInteger',
  '_valueInteger',
  'valueDate',
  '_valueDate',
  'valueBoolean',
  '_valueBoolean',
  'valueAttachment',
] as const;

/**
 * MedicinalProductDefinitionCharacteristic - Key product features such as "sugar free", "modified release"
 *
 * @see https://hl7.org/fhir/R4/medicinalproductdefinitioncharacteristic.html
 *
 * @example
 * const medicinalProductDefinitionCharacteristic = new MedicinalProductDefinitionCharacteristic({
 *   // ... properties
 * });
 */
export class MedicinalProductDefinitionCharacteristic extends BackboneElement implements IMedicinalProductDefinitionCharacteristic {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A code expressing the type of characteristic */
  type: ICodeableConcept;

  /** A value for the characteristic */
  valueCodeableConcept?: ICodeableConcept;

  /** A value for the characteristic */
  valueMarkdown?: string;

  /** Extension for valueMarkdown */
  _valueMarkdown?: IElement;

  /** A value for the characteristic */
  valueQuantity?: IQuantity;

  /** A value for the characteristic */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** A value for the characteristic */
  valueDate?: string;

  /** Extension for valueDate */
  _valueDate?: IElement;

  /** A value for the characteristic */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** A value for the characteristic */
  valueAttachment?: IAttachment;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductDefinitionCharacteristic>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_DEFINITION_CHARACTERISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductDefinitionCharacteristic from a JSON object
   */
  static fromJSON(json: IMedicinalProductDefinitionCharacteristic): MedicinalProductDefinitionCharacteristic {
    return new MedicinalProductDefinitionCharacteristic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductDefinitionCharacteristic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductDefinitionCharacteristic>): MedicinalProductDefinitionCharacteristic {
    return new MedicinalProductDefinitionCharacteristic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductDefinitionCharacteristic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductDefinitionCharacteristic) => Partial<IMedicinalProductDefinitionCharacteristic>): MedicinalProductDefinitionCharacteristic {
    const currentData = this.toJSON();
    return new MedicinalProductDefinitionCharacteristic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductDefinitionCharacteristic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductDefinitionCharacteristic {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_DEFINITION_CHARACTERISTIC_PROPERTIES);
    return result as IMedicinalProductDefinitionCharacteristic;
  }

  /**
   * Create a deep clone of this MedicinalProductDefinitionCharacteristic
   */
  clone(): MedicinalProductDefinitionCharacteristic {
    return new MedicinalProductDefinitionCharacteristic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductDefinitionCharacteristic
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductDefinitionCharacteristic'];
    return parts.join(', ');
  }
}
