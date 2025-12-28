import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  IPackagedProductDefinitionPackagingProperty,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PackagedProductDefinitionPackagingProperty */
const PACKAGED_PRODUCT_DEFINITION_PACKAGING_PROPERTY_PROPERTIES = [
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
 * PackagedProductDefinitionPackagingProperty - General characteristics of this item
 *
 * @see https://hl7.org/fhir/R5/packagedproductdefinitionpackagingproperty.html
 *
 * @example
 * const packagedProductDefinitionPackagingProperty = new PackagedProductDefinitionPackagingProperty({
 *   // ... properties
 * });
 */
export class PackagedProductDefinitionPackagingProperty extends BackboneElement implements IPackagedProductDefinitionPackagingProperty {

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

  constructor(data?: Partial<IPackagedProductDefinitionPackagingProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, PACKAGED_PRODUCT_DEFINITION_PACKAGING_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PackagedProductDefinitionPackagingProperty from a JSON object
   */
  static fromJSON(json: IPackagedProductDefinitionPackagingProperty): PackagedProductDefinitionPackagingProperty {
    return new PackagedProductDefinitionPackagingProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PackagedProductDefinitionPackagingProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPackagedProductDefinitionPackagingProperty>): PackagedProductDefinitionPackagingProperty {
    return new PackagedProductDefinitionPackagingProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PackagedProductDefinitionPackagingProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPackagedProductDefinitionPackagingProperty) => Partial<IPackagedProductDefinitionPackagingProperty>): PackagedProductDefinitionPackagingProperty {
    const currentData = this.toJSON();
    return new PackagedProductDefinitionPackagingProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPackagedProductDefinitionPackagingProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPackagedProductDefinitionPackagingProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PACKAGED_PRODUCT_DEFINITION_PACKAGING_PROPERTY_PROPERTIES);
    return result as IPackagedProductDefinitionPackagingProperty;
  }

  /**
   * Create a deep clone of this PackagedProductDefinitionPackagingProperty
   */
  clone(): PackagedProductDefinitionPackagingProperty {
    return new PackagedProductDefinitionPackagingProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PackagedProductDefinitionPackagingProperty
   */
  toString(): string {
    const parts: string[] = ['PackagedProductDefinitionPackagingProperty'];
    return parts.join(', ');
  }
}
