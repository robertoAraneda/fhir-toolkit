import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IValueSetComposeIncludeConcept,
  IValueSetComposeIncludeConceptDesignation,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ValueSetComposeIncludeConcept */
const VALUE_SET_COMPOSE_INCLUDE_CONCEPT_PROPERTIES = [
  'code',
  '_code',
  'display',
  '_display',
  'designation',
] as const;

/**
 * ValueSetComposeIncludeConcept - A concept defined in the system
 *
 * @see https://hl7.org/fhir/R4/valuesetcomposeincludeconcept.html
 *
 * @example
 * const valueSetComposeIncludeConcept = new ValueSetComposeIncludeConcept({
 *   // ... properties
 * });
 */
export class ValueSetComposeIncludeConcept extends BackboneElement implements IValueSetComposeIncludeConcept {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code or expression from system */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Text to display for this code for this value set in this valueset */
  display?: string;

  /** Extension for display */
  _display?: IElement;

  /** Additional representations for this concept */
  designation?: IValueSetComposeIncludeConceptDesignation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IValueSetComposeIncludeConcept>) {
    super(data);
    if (data) {
      this.assignProps(data, VALUE_SET_COMPOSE_INCLUDE_CONCEPT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ValueSetComposeIncludeConcept from a JSON object
   */
  static fromJSON(json: IValueSetComposeIncludeConcept): ValueSetComposeIncludeConcept {
    return new ValueSetComposeIncludeConcept(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ValueSetComposeIncludeConcept with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IValueSetComposeIncludeConcept>): ValueSetComposeIncludeConcept {
    return new ValueSetComposeIncludeConcept({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ValueSetComposeIncludeConcept by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IValueSetComposeIncludeConcept) => Partial<IValueSetComposeIncludeConcept>): ValueSetComposeIncludeConcept {
    const currentData = this.toJSON();
    return new ValueSetComposeIncludeConcept({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IValueSetComposeIncludeConcept)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IValueSetComposeIncludeConcept {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VALUE_SET_COMPOSE_INCLUDE_CONCEPT_PROPERTIES);
    return result as IValueSetComposeIncludeConcept;
  }

  /**
   * Create a deep clone of this ValueSetComposeIncludeConcept
   */
  clone(): ValueSetComposeIncludeConcept {
    return new ValueSetComposeIncludeConcept(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ValueSetComposeIncludeConcept
   */
  toString(): string {
    const parts: string[] = ['ValueSetComposeIncludeConcept'];
    return parts.join(', ');
  }
}
