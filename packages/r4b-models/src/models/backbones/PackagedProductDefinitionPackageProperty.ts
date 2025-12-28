import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  IPackagedProductDefinitionPackageProperty,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PackagedProductDefinitionPackageProperty */
const PACKAGED_PRODUCT_DEFINITION_PACKAGE_PROPERTY_PROPERTIES = [
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
 * PackagedProductDefinitionPackageProperty - General characteristics of this item
 *
 * @see https://hl7.org/fhir/R4B/packagedproductdefinitionpackageproperty.html
 *
 * @example
 * const packagedProductDefinitionPackageProperty = new PackagedProductDefinitionPackageProperty({
 *   // ... properties
 * });
 */
export class PackagedProductDefinitionPackageProperty extends BackboneElement implements IPackagedProductDefinitionPackageProperty {

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

  constructor(data?: Partial<IPackagedProductDefinitionPackageProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, PACKAGED_PRODUCT_DEFINITION_PACKAGE_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PackagedProductDefinitionPackageProperty from a JSON object
   */
  static fromJSON(json: IPackagedProductDefinitionPackageProperty): PackagedProductDefinitionPackageProperty {
    return new PackagedProductDefinitionPackageProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PackagedProductDefinitionPackageProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPackagedProductDefinitionPackageProperty>): PackagedProductDefinitionPackageProperty {
    return new PackagedProductDefinitionPackageProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PackagedProductDefinitionPackageProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPackagedProductDefinitionPackageProperty) => Partial<IPackagedProductDefinitionPackageProperty>): PackagedProductDefinitionPackageProperty {
    const currentData = this.toJSON();
    return new PackagedProductDefinitionPackageProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPackagedProductDefinitionPackageProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPackagedProductDefinitionPackageProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PACKAGED_PRODUCT_DEFINITION_PACKAGE_PROPERTY_PROPERTIES);
    return result as IPackagedProductDefinitionPackageProperty;
  }

  /**
   * Create a deep clone of this PackagedProductDefinitionPackageProperty
   */
  clone(): PackagedProductDefinitionPackageProperty {
    return new PackagedProductDefinitionPackageProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PackagedProductDefinitionPackageProperty
   */
  toString(): string {
    const parts: string[] = ['PackagedProductDefinitionPackageProperty'];
    return parts.join(', ');
  }
}
