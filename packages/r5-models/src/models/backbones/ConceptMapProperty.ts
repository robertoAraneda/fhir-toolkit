import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ConceptMapPropertyTypeType,
  IConceptMapProperty,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConceptMapProperty */
const CONCEPT_MAP_PROPERTY_PROPERTIES = [
  'code',
  '_code',
  'uri',
  '_uri',
  'description',
  '_description',
  'type',
  '_type',
  'system',
  '_system',
] as const;

/**
 * ConceptMapProperty - Additional properties of the mapping
 *
 * @see https://hl7.org/fhir/R5/conceptmapproperty.html
 *
 * @example
 * const conceptMapProperty = new ConceptMapProperty({
 *   // ... properties
 * });
 */
export class ConceptMapProperty extends BackboneElement implements IConceptMapProperty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifies the property on the mappings, and when referred to in the $translate operation */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Formal identifier for the property */
  uri?: string;

  /** Extension for uri */
  _uri?: IElement;

  /** Why the property is defined, and/or what it conveys */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Coding | string | integer | boolean | dateTime | decimal | code */
  type: ConceptMapPropertyTypeType;

  /** Extension for type */
  _type?: IElement;

  /** The CodeSystem from which code values come */
  system?: string;

  /** Extension for system */
  _system?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConceptMapProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, CONCEPT_MAP_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConceptMapProperty from a JSON object
   */
  static fromJSON(json: IConceptMapProperty): ConceptMapProperty {
    return new ConceptMapProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConceptMapProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConceptMapProperty>): ConceptMapProperty {
    return new ConceptMapProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConceptMapProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConceptMapProperty) => Partial<IConceptMapProperty>): ConceptMapProperty {
    const currentData = this.toJSON();
    return new ConceptMapProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConceptMapProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConceptMapProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONCEPT_MAP_PROPERTY_PROPERTIES);
    return result as IConceptMapProperty;
  }

  /**
   * Create a deep clone of this ConceptMapProperty
   */
  clone(): ConceptMapProperty {
    return new ConceptMapProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConceptMapProperty
   */
  toString(): string {
    const parts: string[] = ['ConceptMapProperty'];
    return parts.join(', ');
  }
}
