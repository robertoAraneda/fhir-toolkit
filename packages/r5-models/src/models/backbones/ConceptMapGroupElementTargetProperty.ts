import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IConceptMapGroupElementTargetProperty,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConceptMapGroupElementTargetProperty */
const CONCEPT_MAP_GROUP_ELEMENT_TARGET_PROPERTY_PROPERTIES = [
  'code',
  '_code',
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
  'valueCode',
  '_valueCode',
] as const;

/**
 * ConceptMapGroupElementTargetProperty - Property value for the source -> target mapping
 *
 * @see https://hl7.org/fhir/R5/conceptmapgroupelementtargetproperty.html
 *
 * @example
 * const conceptMapGroupElementTargetProperty = new ConceptMapGroupElementTargetProperty({
 *   // ... properties
 * });
 */
export class ConceptMapGroupElementTargetProperty extends BackboneElement implements IConceptMapGroupElementTargetProperty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to ConceptMap.property.code */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Value of the property for this concept */
  valueCoding?: ICoding;

  /** Value of the property for this concept */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Value of the property for this concept */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Value of the property for this concept */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Value of the property for this concept */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** Value of the property for this concept */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  /** Value of the property for this concept */
  valueCode?: string;

  /** Extension for valueCode */
  _valueCode?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConceptMapGroupElementTargetProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, CONCEPT_MAP_GROUP_ELEMENT_TARGET_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConceptMapGroupElementTargetProperty from a JSON object
   */
  static fromJSON(json: IConceptMapGroupElementTargetProperty): ConceptMapGroupElementTargetProperty {
    return new ConceptMapGroupElementTargetProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConceptMapGroupElementTargetProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConceptMapGroupElementTargetProperty>): ConceptMapGroupElementTargetProperty {
    return new ConceptMapGroupElementTargetProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConceptMapGroupElementTargetProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConceptMapGroupElementTargetProperty) => Partial<IConceptMapGroupElementTargetProperty>): ConceptMapGroupElementTargetProperty {
    const currentData = this.toJSON();
    return new ConceptMapGroupElementTargetProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConceptMapGroupElementTargetProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConceptMapGroupElementTargetProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONCEPT_MAP_GROUP_ELEMENT_TARGET_PROPERTY_PROPERTIES);
    return result as IConceptMapGroupElementTargetProperty;
  }

  /**
   * Create a deep clone of this ConceptMapGroupElementTargetProperty
   */
  clone(): ConceptMapGroupElementTargetProperty {
    return new ConceptMapGroupElementTargetProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConceptMapGroupElementTargetProperty
   */
  toString(): string {
    const parts: string[] = ['ConceptMapGroupElementTargetProperty'];
    return parts.join(', ');
  }
}
