import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IValueSetExpansionProperty,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ValueSetExpansionProperty */
const VALUE_SET_EXPANSION_PROPERTY_PROPERTIES = [
  'code',
  '_code',
  'uri',
  '_uri',
] as const;

/**
 * ValueSetExpansionProperty - Additional information supplied about each concept
 *
 * @see https://hl7.org/fhir/R4/valuesetexpansionproperty.html
 *
 * @example
 * const valueSetExpansionProperty = new ValueSetExpansionProperty({
 *   // ... properties
 * });
 */
export class ValueSetExpansionProperty extends BackboneElement implements IValueSetExpansionProperty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifies the property on the concepts, and when referred to in operations */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Formal identifier for the property */
  uri?: string;

  /** Extension for uri */
  _uri?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IValueSetExpansionProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, VALUE_SET_EXPANSION_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ValueSetExpansionProperty from a JSON object
   */
  static fromJSON(json: IValueSetExpansionProperty): ValueSetExpansionProperty {
    return new ValueSetExpansionProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ValueSetExpansionProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IValueSetExpansionProperty>): ValueSetExpansionProperty {
    return new ValueSetExpansionProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ValueSetExpansionProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IValueSetExpansionProperty) => Partial<IValueSetExpansionProperty>): ValueSetExpansionProperty {
    const currentData = this.toJSON();
    return new ValueSetExpansionProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IValueSetExpansionProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IValueSetExpansionProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VALUE_SET_EXPANSION_PROPERTY_PROPERTIES);
    return result as IValueSetExpansionProperty;
  }

  /**
   * Create a deep clone of this ValueSetExpansionProperty
   */
  clone(): ValueSetExpansionProperty {
    return new ValueSetExpansionProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ValueSetExpansionProperty
   */
  toString(): string {
    const parts: string[] = ['ValueSetExpansionProperty'];
    return parts.join(', ');
  }
}
