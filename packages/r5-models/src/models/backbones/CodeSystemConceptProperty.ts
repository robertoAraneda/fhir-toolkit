import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeSystemConceptProperty,
  ICoding,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CodeSystemConceptProperty */
const CODE_SYSTEM_CONCEPT_PROPERTY_PROPERTIES = [
  'code',
  '_code',
  'valueCode',
  '_valueCode',
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
] as const;

/**
 * CodeSystemConceptProperty - Property value for the concept
 *
 * @see https://hl7.org/fhir/R4/codesystemconceptproperty.html
 *
 * @example
 * const codeSystemConceptProperty = new CodeSystemConceptProperty({
 *   // ... properties
 * });
 */
export class CodeSystemConceptProperty extends BackboneElement implements ICodeSystemConceptProperty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to CodeSystem.property.code */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Value of the property for this concept */
  valueCode?: string;

  /** Extension for valueCode */
  _valueCode?: IElement;

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

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICodeSystemConceptProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, CODE_SYSTEM_CONCEPT_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CodeSystemConceptProperty from a JSON object
   */
  static fromJSON(json: ICodeSystemConceptProperty): CodeSystemConceptProperty {
    return new CodeSystemConceptProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CodeSystemConceptProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICodeSystemConceptProperty>): CodeSystemConceptProperty {
    return new CodeSystemConceptProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CodeSystemConceptProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICodeSystemConceptProperty) => Partial<ICodeSystemConceptProperty>): CodeSystemConceptProperty {
    const currentData = this.toJSON();
    return new CodeSystemConceptProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICodeSystemConceptProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICodeSystemConceptProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CODE_SYSTEM_CONCEPT_PROPERTY_PROPERTIES);
    return result as ICodeSystemConceptProperty;
  }

  /**
   * Create a deep clone of this CodeSystemConceptProperty
   */
  clone(): CodeSystemConceptProperty {
    return new CodeSystemConceptProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CodeSystemConceptProperty
   */
  toString(): string {
    const parts: string[] = ['CodeSystemConceptProperty'];
    return parts.join(', ');
  }
}
