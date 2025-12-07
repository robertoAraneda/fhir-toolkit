import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  IManufacturedItemDefinitionProperty,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ManufacturedItemDefinitionProperty */
const MANUFACTURED_ITEM_DEFINITION_PROPERTY_PROPERTIES = [
  'type',
  'valueCodeableConcept',
  'valueQuantity',
  'valueDate',
  '_valueDate',
  'valueBoolean',
  '_valueBoolean',
  'valueAttachment',
] as const;

/**
 * ManufacturedItemDefinitionProperty - General characteristics of this item
 *
 * @see https://hl7.org/fhir/R4/manufactureditemdefinitionproperty.html
 *
 * @example
 * const manufacturedItemDefinitionProperty = new ManufacturedItemDefinitionProperty({
 *   // ... properties
 * });
 */
export class ManufacturedItemDefinitionProperty extends BackboneElement implements IManufacturedItemDefinitionProperty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A code expressing the type of characteristic */
  type: ICodeableConcept;

  /** A value for the characteristic */
  valueCodeableConcept?: ICodeableConcept;

  /** A value for the characteristic */
  valueQuantity?: IQuantity;

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

  constructor(data?: Partial<IManufacturedItemDefinitionProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, MANUFACTURED_ITEM_DEFINITION_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ManufacturedItemDefinitionProperty from a JSON object
   */
  static fromJSON(json: IManufacturedItemDefinitionProperty): ManufacturedItemDefinitionProperty {
    return new ManufacturedItemDefinitionProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ManufacturedItemDefinitionProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IManufacturedItemDefinitionProperty>): ManufacturedItemDefinitionProperty {
    return new ManufacturedItemDefinitionProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ManufacturedItemDefinitionProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IManufacturedItemDefinitionProperty) => Partial<IManufacturedItemDefinitionProperty>): ManufacturedItemDefinitionProperty {
    const currentData = this.toJSON();
    return new ManufacturedItemDefinitionProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IManufacturedItemDefinitionProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IManufacturedItemDefinitionProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MANUFACTURED_ITEM_DEFINITION_PROPERTY_PROPERTIES);
    return result as IManufacturedItemDefinitionProperty;
  }

  /**
   * Create a deep clone of this ManufacturedItemDefinitionProperty
   */
  clone(): ManufacturedItemDefinitionProperty {
    return new ManufacturedItemDefinitionProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ManufacturedItemDefinitionProperty
   */
  toString(): string {
    const parts: string[] = ['ManufacturedItemDefinitionProperty'];
    return parts.join(', ');
  }
}
