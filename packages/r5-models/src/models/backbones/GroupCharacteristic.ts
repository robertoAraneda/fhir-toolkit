import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IGroupCharacteristic,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to GroupCharacteristic */
const GROUP_CHARACTERISTIC_PROPERTIES = [
  'code',
  'valueCodeableConcept',
  'valueBoolean',
  '_valueBoolean',
  'valueQuantity',
  'valueRange',
  'valueReference',
  'exclude',
  '_exclude',
  'period',
] as const;

/**
 * GroupCharacteristic - Include / Exclude group members by Trait
 *
 * @see https://hl7.org/fhir/R5/groupcharacteristic.html
 *
 * @example
 * const groupCharacteristic = new GroupCharacteristic({
 *   // ... properties
 * });
 */
export class GroupCharacteristic extends BackboneElement implements IGroupCharacteristic {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Kind of characteristic */
  code: ICodeableConcept;

  /** Value held by characteristic */
  valueCodeableConcept?: ICodeableConcept;

  /** Value held by characteristic */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Value held by characteristic */
  valueQuantity?: IQuantity;

  /** Value held by characteristic */
  valueRange?: IRange;

  /** Value held by characteristic */
  valueReference?: IReference;

  /** Group includes or excludes */
  exclude: boolean;

  /** Extension for exclude */
  _exclude?: IElement;

  /** Period over which characteristic is tested */
  period?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGroupCharacteristic>) {
    super(data);
    if (data) {
      this.assignProps(data, GROUP_CHARACTERISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GroupCharacteristic from a JSON object
   */
  static fromJSON(json: IGroupCharacteristic): GroupCharacteristic {
    return new GroupCharacteristic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GroupCharacteristic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGroupCharacteristic>): GroupCharacteristic {
    return new GroupCharacteristic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GroupCharacteristic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGroupCharacteristic) => Partial<IGroupCharacteristic>): GroupCharacteristic {
    const currentData = this.toJSON();
    return new GroupCharacteristic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGroupCharacteristic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGroupCharacteristic {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, GROUP_CHARACTERISTIC_PROPERTIES);
    return result as IGroupCharacteristic;
  }

  /**
   * Create a deep clone of this GroupCharacteristic
   */
  clone(): GroupCharacteristic {
    return new GroupCharacteristic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GroupCharacteristic
   */
  toString(): string {
    const parts: string[] = ['GroupCharacteristic'];
    return parts.join(', ');
  }
}
