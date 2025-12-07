import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  IValueSetExpansionContainsProperty,
  IValueSetExpansionContainsPropertySubProperty,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ValueSetExpansionContainsProperty */
const VALUE_SET_EXPANSION_CONTAINS_PROPERTY_PROPERTIES = [
  'code',
  '_code',
  'valueCode',
  '_valueCode',
  'valueCoding',
  'valueString',
  '_valueString',
  'valueInteger',
  '_valueInteger',
  'valueBoolean',
  '_valueBoolean',
  'valueDateTime',
  '_valueDateTime',
  'valueDecimal',
  '_valueDecimal',
  'subProperty',
] as const;

/**
 * ValueSetExpansionContainsProperty - Property value for the concept
 *
 * @see https://hl7.org/fhir/R4/valuesetexpansioncontainsproperty.html
 *
 * @example
 * const valueSetExpansionContainsProperty = new ValueSetExpansionContainsProperty({
 *   // ... properties
 * });
 */
export class ValueSetExpansionContainsProperty extends BackboneElement implements IValueSetExpansionContainsProperty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to ValueSet.expansion.property.code */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Value of the property for this concept */
  valueCode?: string;

  /** Extension for valueCode */
  _valueCode?: IElement;

  /** Value of the property for this concept */
  valueCoding?: ICoding;

  /** Value of the property for this concept */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Value of the property for this concept */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Value of the property for this concept */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Value of the property for this concept */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** Value of the property for this concept */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  /** SubProperty value for the concept */
  subProperty?: IValueSetExpansionContainsPropertySubProperty[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IValueSetExpansionContainsProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, VALUE_SET_EXPANSION_CONTAINS_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ValueSetExpansionContainsProperty from a JSON object
   */
  static fromJSON(json: IValueSetExpansionContainsProperty): ValueSetExpansionContainsProperty {
    return new ValueSetExpansionContainsProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ValueSetExpansionContainsProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IValueSetExpansionContainsProperty>): ValueSetExpansionContainsProperty {
    return new ValueSetExpansionContainsProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ValueSetExpansionContainsProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IValueSetExpansionContainsProperty) => Partial<IValueSetExpansionContainsProperty>): ValueSetExpansionContainsProperty {
    const currentData = this.toJSON();
    return new ValueSetExpansionContainsProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IValueSetExpansionContainsProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IValueSetExpansionContainsProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VALUE_SET_EXPANSION_CONTAINS_PROPERTY_PROPERTIES);
    return result as IValueSetExpansionContainsProperty;
  }

  /**
   * Create a deep clone of this ValueSetExpansionContainsProperty
   */
  clone(): ValueSetExpansionContainsProperty {
    return new ValueSetExpansionContainsProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ValueSetExpansionContainsProperty
   */
  toString(): string {
    const parts: string[] = ['ValueSetExpansionContainsProperty'];
    return parts.join(', ');
  }
}
