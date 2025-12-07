import { Element } from '../base/Element.js';
import type {
  ICodeableConcept,
  ICoding,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to CodeableConcept */
const CODEABLE_CONCEPT_PROPERTIES = [
  'coding',
  'text',
  '_text',
] as const;

/**
 * CodeableConcept - A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 *
 * @see https://hl7.org/fhir/R4/codeableconcept.html
 *
 * @example
 * const codeableConcept = new CodeableConcept({
 *   // ... properties
 * });
 */
export class CodeableConcept extends Element implements ICodeableConcept {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code defined by a terminology system */
  coding?: ICoding[];

  /** Plain text representation of the concept */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICodeableConcept>) {
    super(data);
    if (data) {
      this.assignProps(data, CODEABLE_CONCEPT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CodeableConcept from a JSON object
   */
  static fromJSON(json: ICodeableConcept): CodeableConcept {
    return new CodeableConcept(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CodeableConcept with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICodeableConcept>): CodeableConcept {
    return new CodeableConcept({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CodeableConcept by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICodeableConcept) => Partial<ICodeableConcept>): CodeableConcept {
    const currentData = this.toJSON();
    return new CodeableConcept({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICodeableConcept)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICodeableConcept {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, CODEABLE_CONCEPT_PROPERTIES);
    return result as ICodeableConcept;
  }

  /**
   * Create a deep clone of this CodeableConcept
   */
  clone(): CodeableConcept {
    return new CodeableConcept(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CodeableConcept
   */
  toString(): string {
    const parts: string[] = ['CodeableConcept'];
    return parts.join(', ');
  }
}
