import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeSystemConcept,
  ICodeSystemConceptDesignation,
  ICodeSystemConceptProperty,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to CodeSystemConcept */
const CODE_SYSTEM_CONCEPT_PROPERTIES = [
  'code',
  '_code',
  'display',
  '_display',
  'definition',
  '_definition',
  'designation',
  'property',
  'concept',
] as const;

/**
 * CodeSystemConcept - Concepts in the code system
 *
 * @see https://hl7.org/fhir/R4/codesystemconcept.html
 *
 * @example
 * const codeSystemConcept = new CodeSystemConcept({
 *   // ... properties
 * });
 */
export class CodeSystemConcept extends BackboneElement implements ICodeSystemConcept {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code that identifies concept */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Text to display to the user */
  display?: string;

  /** Extension for display */
  _display?: IElement;

  /** Formal definition */
  definition?: string;

  /** Extension for definition */
  _definition?: IElement;

  /** Additional representations for the concept */
  designation?: ICodeSystemConceptDesignation[];

  /** Property value for the concept */
  property?: ICodeSystemConceptProperty[];

  /** Child Concepts (is-a/contains/categorizes) */
  concept?: ICodeSystemConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICodeSystemConcept>) {
    super(data);
    if (data) {
      this.assignProps(data, CODE_SYSTEM_CONCEPT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CodeSystemConcept from a JSON object
   */
  static fromJSON(json: ICodeSystemConcept): CodeSystemConcept {
    return new CodeSystemConcept(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CodeSystemConcept with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICodeSystemConcept>): CodeSystemConcept {
    return new CodeSystemConcept({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CodeSystemConcept by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICodeSystemConcept) => Partial<ICodeSystemConcept>): CodeSystemConcept {
    const currentData = this.toJSON();
    return new CodeSystemConcept({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICodeSystemConcept)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICodeSystemConcept {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CODE_SYSTEM_CONCEPT_PROPERTIES);
    return result as ICodeSystemConcept;
  }

  /**
   * Create a deep clone of this CodeSystemConcept
   */
  clone(): CodeSystemConcept {
    return new CodeSystemConcept(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CodeSystemConcept
   */
  toString(): string {
    const parts: string[] = ['CodeSystemConcept'];
    return parts.join(', ');
  }
}
