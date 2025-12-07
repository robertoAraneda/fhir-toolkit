import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  IValueSetExpansionContainsPropertySubProperty,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ValueSetExpansionContainsPropertySubProperty */
const VALUE_SET_EXPANSION_CONTAINS_PROPERTY_SUB_PROPERTY_PROPERTIES = [
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
] as const;

/**
 * ValueSetExpansionContainsPropertySubProperty - SubProperty value for the concept
 *
 * @see https://hl7.org/fhir/R4/valuesetexpansioncontainspropertysubproperty.html
 *
 * @example
 * const valueSetExpansionContainsPropertySubProperty = new ValueSetExpansionContainsPropertySubProperty({
 *   // ... properties
 * });
 */
export class ValueSetExpansionContainsPropertySubProperty extends BackboneElement implements IValueSetExpansionContainsPropertySubProperty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to ValueSet.expansion.property.code */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Value of the subproperty for this concept */
  valueCode?: string;

  /** Extension for valueCode */
  _valueCode?: IElement;

  /** Value of the subproperty for this concept */
  valueCoding?: ICoding;

  /** Value of the subproperty for this concept */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Value of the subproperty for this concept */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Value of the subproperty for this concept */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Value of the subproperty for this concept */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** Value of the subproperty for this concept */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IValueSetExpansionContainsPropertySubProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, VALUE_SET_EXPANSION_CONTAINS_PROPERTY_SUB_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ValueSetExpansionContainsPropertySubProperty from a JSON object
   */
  static fromJSON(json: IValueSetExpansionContainsPropertySubProperty): ValueSetExpansionContainsPropertySubProperty {
    return new ValueSetExpansionContainsPropertySubProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ValueSetExpansionContainsPropertySubProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IValueSetExpansionContainsPropertySubProperty>): ValueSetExpansionContainsPropertySubProperty {
    return new ValueSetExpansionContainsPropertySubProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ValueSetExpansionContainsPropertySubProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IValueSetExpansionContainsPropertySubProperty) => Partial<IValueSetExpansionContainsPropertySubProperty>): ValueSetExpansionContainsPropertySubProperty {
    const currentData = this.toJSON();
    return new ValueSetExpansionContainsPropertySubProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IValueSetExpansionContainsPropertySubProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IValueSetExpansionContainsPropertySubProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VALUE_SET_EXPANSION_CONTAINS_PROPERTY_SUB_PROPERTY_PROPERTIES);
    return result as IValueSetExpansionContainsPropertySubProperty;
  }

  /**
   * Create a deep clone of this ValueSetExpansionContainsPropertySubProperty
   */
  clone(): ValueSetExpansionContainsPropertySubProperty {
    return new ValueSetExpansionContainsPropertySubProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ValueSetExpansionContainsPropertySubProperty
   */
  toString(): string {
    const parts: string[] = ['ValueSetExpansionContainsPropertySubProperty'];
    return parts.join(', ');
  }
}
