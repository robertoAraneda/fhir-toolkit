import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  IBiologicallyDerivedProductProperty,
  ICodeableConcept,
  IElement,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
} from '@fhir-toolkit/r5-types';

/** Properties specific to BiologicallyDerivedProductProperty */
const BIOLOGICALLY_DERIVED_PRODUCT_PROPERTY_PROPERTIES = [
  'type',
  'valueBoolean',
  '_valueBoolean',
  'valueInteger',
  '_valueInteger',
  'valueCodeableConcept',
  'valuePeriod',
  'valueQuantity',
  'valueRange',
  'valueRatio',
  'valueString',
  '_valueString',
  'valueAttachment',
] as const;

/**
 * BiologicallyDerivedProductProperty - A property that is specific to this BiologicallyDerviedProduct instance
 *
 * @see https://hl7.org/fhir/R5/biologicallyderivedproductproperty.html
 *
 * @example
 * const biologicallyDerivedProductProperty = new BiologicallyDerivedProductProperty({
 *   // ... properties
 * });
 */
export class BiologicallyDerivedProductProperty extends BackboneElement implements IBiologicallyDerivedProductProperty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code that specifies the property */
  type: ICodeableConcept;

  /** Property values */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Property values */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Property values */
  valueCodeableConcept?: ICodeableConcept;

  /** Property values */
  valuePeriod?: IPeriod;

  /** Property values */
  valueQuantity?: IQuantity;

  /** Property values */
  valueRange?: IRange;

  /** Property values */
  valueRatio?: IRatio;

  /** Property values */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Property values */
  valueAttachment?: IAttachment;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBiologicallyDerivedProductProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, BIOLOGICALLY_DERIVED_PRODUCT_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BiologicallyDerivedProductProperty from a JSON object
   */
  static fromJSON(json: IBiologicallyDerivedProductProperty): BiologicallyDerivedProductProperty {
    return new BiologicallyDerivedProductProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BiologicallyDerivedProductProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBiologicallyDerivedProductProperty>): BiologicallyDerivedProductProperty {
    return new BiologicallyDerivedProductProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BiologicallyDerivedProductProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBiologicallyDerivedProductProperty) => Partial<IBiologicallyDerivedProductProperty>): BiologicallyDerivedProductProperty {
    const currentData = this.toJSON();
    return new BiologicallyDerivedProductProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBiologicallyDerivedProductProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBiologicallyDerivedProductProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BIOLOGICALLY_DERIVED_PRODUCT_PROPERTY_PROPERTIES);
    return result as IBiologicallyDerivedProductProperty;
  }

  /**
   * Create a deep clone of this BiologicallyDerivedProductProperty
   */
  clone(): BiologicallyDerivedProductProperty {
    return new BiologicallyDerivedProductProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BiologicallyDerivedProductProperty
   */
  toString(): string {
    const parts: string[] = ['BiologicallyDerivedProductProperty'];
    return parts.join(', ');
  }
}
