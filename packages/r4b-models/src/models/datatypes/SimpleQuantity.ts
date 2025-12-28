import { Element } from '../base/Element.js';
import type {
  IElement,
  IExtension,
  ISimpleQuantity,
  QuantityComparatorType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SimpleQuantity */
const SIMPLE_QUANTITY_PROPERTIES = [
  'id',
  'extension',
  'value',
  '_value',
  'comparator',
  '_comparator',
  'unit',
  '_unit',
  'system',
  '_system',
  'code',
  '_code',
] as const;

/**
 * SimpleQuantity - The comparator is not used on a SimpleQuantity
 *
 * @see https://hl7.org/fhir/R4B/simplequantity.html
 *
 * @example
 * const simpleQuantity = new SimpleQuantity({
 *   // ... properties
 * });
 */
export class SimpleQuantity extends Element implements ISimpleQuantity {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Numerical value (with implicit precision) */
  value?: number;

  /** Extension for value */
  _value?: IElement;

  /** < | <= | >= | > - how to understand the value */
  comparator?: QuantityComparatorType;

  /** Extension for comparator */
  _comparator?: IElement;

  /** Unit representation */
  unit?: string;

  /** Extension for unit */
  _unit?: IElement;

  /** System that defines coded unit form */
  system?: string;

  /** Extension for system */
  _system?: IElement;

  /** Coded form of the unit */
  code?: string;

  /** Extension for code */
  _code?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISimpleQuantity>) {
    super(data);
    if (data) {
      this.assignProps(data, SIMPLE_QUANTITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SimpleQuantity from a JSON object
   */
  static fromJSON(json: ISimpleQuantity): SimpleQuantity {
    return new SimpleQuantity(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SimpleQuantity with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISimpleQuantity>): SimpleQuantity {
    return new SimpleQuantity({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SimpleQuantity by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISimpleQuantity) => Partial<ISimpleQuantity>): SimpleQuantity {
    const currentData = this.toJSON();
    return new SimpleQuantity({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISimpleQuantity)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISimpleQuantity {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, SIMPLE_QUANTITY_PROPERTIES);
    return result as ISimpleQuantity;
  }

  /**
   * Create a deep clone of this SimpleQuantity
   */
  clone(): SimpleQuantity {
    return new SimpleQuantity(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SimpleQuantity
   */
  toString(): string {
    const parts: string[] = ['SimpleQuantity'];
    return parts.join(', ');
  }
}
