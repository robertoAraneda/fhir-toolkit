import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  IQuantity,
  ISubstanceDefinitionProperty,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SubstanceDefinitionProperty */
const SUBSTANCE_DEFINITION_PROPERTY_PROPERTIES = [
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
 * SubstanceDefinitionProperty - General specifications for this substance
 *
 * @see https://hl7.org/fhir/R4B/substancedefinitionproperty.html
 *
 * @example
 * const substanceDefinitionProperty = new SubstanceDefinitionProperty({
 *   // ... properties
 * });
 */
export class SubstanceDefinitionProperty extends BackboneElement implements ISubstanceDefinitionProperty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A code expressing the type of property */
  type: ICodeableConcept;

  /** A value for the property */
  valueCodeableConcept?: ICodeableConcept;

  /** A value for the property */
  valueQuantity?: IQuantity;

  /** A value for the property */
  valueDate?: string;

  /** Extension for valueDate */
  _valueDate?: IElement;

  /** A value for the property */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** A value for the property */
  valueAttachment?: IAttachment;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceDefinitionProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_DEFINITION_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceDefinitionProperty from a JSON object
   */
  static fromJSON(json: ISubstanceDefinitionProperty): SubstanceDefinitionProperty {
    return new SubstanceDefinitionProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceDefinitionProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceDefinitionProperty>): SubstanceDefinitionProperty {
    return new SubstanceDefinitionProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceDefinitionProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceDefinitionProperty) => Partial<ISubstanceDefinitionProperty>): SubstanceDefinitionProperty {
    const currentData = this.toJSON();
    return new SubstanceDefinitionProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceDefinitionProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceDefinitionProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_DEFINITION_PROPERTY_PROPERTIES);
    return result as ISubstanceDefinitionProperty;
  }

  /**
   * Create a deep clone of this SubstanceDefinitionProperty
   */
  clone(): SubstanceDefinitionProperty {
    return new SubstanceDefinitionProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceDefinitionProperty
   */
  toString(): string {
    const parts: string[] = ['SubstanceDefinitionProperty'];
    return parts.join(', ');
  }
}
