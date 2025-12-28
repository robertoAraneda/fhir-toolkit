import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeSystemConceptDesignation,
  ICoding,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CodeSystemConceptDesignation */
const CODE_SYSTEM_CONCEPT_DESIGNATION_PROPERTIES = [
  'language',
  '_language',
  'use',
  'value',
  '_value',
] as const;

/**
 * CodeSystemConceptDesignation - Additional representations for the concept
 *
 * @see https://hl7.org/fhir/R4B/codesystemconceptdesignation.html
 *
 * @example
 * const codeSystemConceptDesignation = new CodeSystemConceptDesignation({
 *   // ... properties
 * });
 */
export class CodeSystemConceptDesignation extends BackboneElement implements ICodeSystemConceptDesignation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Human language of the designation */
  language?: string;

  /** Extension for language */
  _language?: IElement;

  /** Details how this designation would be used */
  use?: ICoding;

  /** The text value for this designation */
  value: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICodeSystemConceptDesignation>) {
    super(data);
    if (data) {
      this.assignProps(data, CODE_SYSTEM_CONCEPT_DESIGNATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CodeSystemConceptDesignation from a JSON object
   */
  static fromJSON(json: ICodeSystemConceptDesignation): CodeSystemConceptDesignation {
    return new CodeSystemConceptDesignation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CodeSystemConceptDesignation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICodeSystemConceptDesignation>): CodeSystemConceptDesignation {
    return new CodeSystemConceptDesignation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CodeSystemConceptDesignation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICodeSystemConceptDesignation) => Partial<ICodeSystemConceptDesignation>): CodeSystemConceptDesignation {
    const currentData = this.toJSON();
    return new CodeSystemConceptDesignation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICodeSystemConceptDesignation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICodeSystemConceptDesignation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CODE_SYSTEM_CONCEPT_DESIGNATION_PROPERTIES);
    return result as ICodeSystemConceptDesignation;
  }

  /**
   * Create a deep clone of this CodeSystemConceptDesignation
   */
  clone(): CodeSystemConceptDesignation {
    return new CodeSystemConceptDesignation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CodeSystemConceptDesignation
   */
  toString(): string {
    const parts: string[] = ['CodeSystemConceptDesignation'];
    return parts.join(', ');
  }
}
