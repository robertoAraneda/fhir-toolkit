import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeSystemProperty,
  IElement,
  PropertyTypeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CodeSystemProperty */
const CODE_SYSTEM_PROPERTY_PROPERTIES = [
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
 * CodeSystemProperty - Additional information supplied about each concept
 *
 * @see https://hl7.org/fhir/R4/codesystemproperty.html
 *
 * @example
 * const codeSystemProperty = new CodeSystemProperty({
 *   // ... properties
 * });
 */
export class CodeSystemProperty extends BackboneElement implements ICodeSystemProperty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifies the property on the concepts, and when referred to in operations */
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

  /** code | Coding | string | integer | boolean | dateTime | decimal */
  type: PropertyTypeType;

  /** Extension for type */
  _type?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICodeSystemProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, CODE_SYSTEM_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CodeSystemProperty from a JSON object
   */
  static fromJSON(json: ICodeSystemProperty): CodeSystemProperty {
    return new CodeSystemProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CodeSystemProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICodeSystemProperty>): CodeSystemProperty {
    return new CodeSystemProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CodeSystemProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICodeSystemProperty) => Partial<ICodeSystemProperty>): CodeSystemProperty {
    const currentData = this.toJSON();
    return new CodeSystemProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICodeSystemProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICodeSystemProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CODE_SYSTEM_PROPERTY_PROPERTIES);
    return result as ICodeSystemProperty;
  }

  /**
   * Create a deep clone of this CodeSystemProperty
   */
  clone(): CodeSystemProperty {
    return new CodeSystemProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CodeSystemProperty
   */
  toString(): string {
    const parts: string[] = ['CodeSystemProperty'];
    return parts.join(', ');
  }
}
