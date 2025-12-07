import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ConceptMapAttributeTypeType,
  IConceptMapAdditionalAttribute,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConceptMapAdditionalAttribute */
const CONCEPT_MAP_ADDITIONAL_ATTRIBUTE_PROPERTIES = [
  'code',
  '_code',
  'uri',
  '_uri',
  'description',
  '_description',
  'type',
  '_type',
] as const;

/**
 * ConceptMapAdditionalAttribute - Definition of an additional attribute to act as a data source or target
 *
 * @see https://hl7.org/fhir/R4/conceptmapadditionalattribute.html
 *
 * @example
 * const conceptMapAdditionalAttribute = new ConceptMapAdditionalAttribute({
 *   // ... properties
 * });
 */
export class ConceptMapAdditionalAttribute extends BackboneElement implements IConceptMapAdditionalAttribute {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifies this additional attribute through this resource */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Formal identifier for the data element referred to in this attribte */
  uri?: string;

  /** Extension for uri */
  _uri?: IElement;

  /** Why the additional attribute is defined, and/or what the data element it refers to is */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** code | Coding | string | boolean | Quantity */
  type: ConceptMapAttributeTypeType;

  /** Extension for type */
  _type?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConceptMapAdditionalAttribute>) {
    super(data);
    if (data) {
      this.assignProps(data, CONCEPT_MAP_ADDITIONAL_ATTRIBUTE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConceptMapAdditionalAttribute from a JSON object
   */
  static fromJSON(json: IConceptMapAdditionalAttribute): ConceptMapAdditionalAttribute {
    return new ConceptMapAdditionalAttribute(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConceptMapAdditionalAttribute with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConceptMapAdditionalAttribute>): ConceptMapAdditionalAttribute {
    return new ConceptMapAdditionalAttribute({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConceptMapAdditionalAttribute by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConceptMapAdditionalAttribute) => Partial<IConceptMapAdditionalAttribute>): ConceptMapAdditionalAttribute {
    const currentData = this.toJSON();
    return new ConceptMapAdditionalAttribute({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConceptMapAdditionalAttribute)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConceptMapAdditionalAttribute {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONCEPT_MAP_ADDITIONAL_ATTRIBUTE_PROPERTIES);
    return result as IConceptMapAdditionalAttribute;
  }

  /**
   * Create a deep clone of this ConceptMapAdditionalAttribute
   */
  clone(): ConceptMapAdditionalAttribute {
    return new ConceptMapAdditionalAttribute(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConceptMapAdditionalAttribute
   */
  toString(): string {
    const parts: string[] = ['ConceptMapAdditionalAttribute'];
    return parts.join(', ');
  }
}
