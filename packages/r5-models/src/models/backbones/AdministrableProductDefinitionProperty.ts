import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAdministrableProductDefinitionProperty,
  IAttachment,
  ICodeableConcept,
  IElement,
  IQuantity,
  IReference,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AdministrableProductDefinitionProperty */
const ADMINISTRABLE_PRODUCT_DEFINITION_PROPERTY_PROPERTIES = [
  'type',
  'valueCodeableConcept',
  'valueQuantity',
  'valueDate',
  '_valueDate',
  'valueBoolean',
  '_valueBoolean',
  'valueMarkdown',
  '_valueMarkdown',
  'valueAttachment',
  'valueReference',
  'status',
] as const;

/**
 * AdministrableProductDefinitionProperty - Characteristics e.g. a product's onset of action
 *
 * @see https://hl7.org/fhir/R5/administrableproductdefinitionproperty.html
 *
 * @example
 * const administrableProductDefinitionProperty = new AdministrableProductDefinitionProperty({
 *   // ... properties
 * });
 */
export class AdministrableProductDefinitionProperty extends BackboneElement implements IAdministrableProductDefinitionProperty {

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
  valueMarkdown?: string;

  /** Extension for valueMarkdown */
  _valueMarkdown?: IElement;

  /** A value for the characteristic */
  valueAttachment?: IAttachment;

  /** A value for the characteristic */
  valueReference?: IReference;

  /** The status of characteristic e.g. assigned or pending */
  status?: ICodeableConcept<PublicationStatusType>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAdministrableProductDefinitionProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, ADMINISTRABLE_PRODUCT_DEFINITION_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AdministrableProductDefinitionProperty from a JSON object
   */
  static fromJSON(json: IAdministrableProductDefinitionProperty): AdministrableProductDefinitionProperty {
    return new AdministrableProductDefinitionProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AdministrableProductDefinitionProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAdministrableProductDefinitionProperty>): AdministrableProductDefinitionProperty {
    return new AdministrableProductDefinitionProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AdministrableProductDefinitionProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAdministrableProductDefinitionProperty) => Partial<IAdministrableProductDefinitionProperty>): AdministrableProductDefinitionProperty {
    const currentData = this.toJSON();
    return new AdministrableProductDefinitionProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAdministrableProductDefinitionProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAdministrableProductDefinitionProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ADMINISTRABLE_PRODUCT_DEFINITION_PROPERTY_PROPERTIES);
    return result as IAdministrableProductDefinitionProperty;
  }

  /**
   * Create a deep clone of this AdministrableProductDefinitionProperty
   */
  clone(): AdministrableProductDefinitionProperty {
    return new AdministrableProductDefinitionProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AdministrableProductDefinitionProperty
   */
  toString(): string {
    const parts: string[] = ['AdministrableProductDefinitionProperty'];
    return parts.join(', ');
  }
}
