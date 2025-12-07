import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  IValueSetComposeIncludeConceptDesignation,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ValueSetComposeIncludeConceptDesignation */
const VALUE_SET_COMPOSE_INCLUDE_CONCEPT_DESIGNATION_PROPERTIES = [
  'language',
  '_language',
  'use',
  'additionalUse',
  'value',
  '_value',
] as const;

/**
 * ValueSetComposeIncludeConceptDesignation - Additional representations for this concept
 *
 * @see https://hl7.org/fhir/R4/valuesetcomposeincludeconceptdesignation.html
 *
 * @example
 * const valueSetComposeIncludeConceptDesignation = new ValueSetComposeIncludeConceptDesignation({
 *   // ... properties
 * });
 */
export class ValueSetComposeIncludeConceptDesignation extends BackboneElement implements IValueSetComposeIncludeConceptDesignation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Human language of the designation */
  language?: string;

  /** Extension for language */
  _language?: IElement;

  /** Types of uses of designations */
  use?: ICoding;

  /** Additional ways how this designation would be used */
  additionalUse?: ICoding[];

  /** The text value for this designation */
  value: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IValueSetComposeIncludeConceptDesignation>) {
    super(data);
    if (data) {
      this.assignProps(data, VALUE_SET_COMPOSE_INCLUDE_CONCEPT_DESIGNATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ValueSetComposeIncludeConceptDesignation from a JSON object
   */
  static fromJSON(json: IValueSetComposeIncludeConceptDesignation): ValueSetComposeIncludeConceptDesignation {
    return new ValueSetComposeIncludeConceptDesignation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ValueSetComposeIncludeConceptDesignation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IValueSetComposeIncludeConceptDesignation>): ValueSetComposeIncludeConceptDesignation {
    return new ValueSetComposeIncludeConceptDesignation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ValueSetComposeIncludeConceptDesignation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IValueSetComposeIncludeConceptDesignation) => Partial<IValueSetComposeIncludeConceptDesignation>): ValueSetComposeIncludeConceptDesignation {
    const currentData = this.toJSON();
    return new ValueSetComposeIncludeConceptDesignation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IValueSetComposeIncludeConceptDesignation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IValueSetComposeIncludeConceptDesignation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VALUE_SET_COMPOSE_INCLUDE_CONCEPT_DESIGNATION_PROPERTIES);
    return result as IValueSetComposeIncludeConceptDesignation;
  }

  /**
   * Create a deep clone of this ValueSetComposeIncludeConceptDesignation
   */
  clone(): ValueSetComposeIncludeConceptDesignation {
    return new ValueSetComposeIncludeConceptDesignation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ValueSetComposeIncludeConceptDesignation
   */
  toString(): string {
    const parts: string[] = ['ValueSetComposeIncludeConceptDesignation'];
    return parts.join(', ');
  }
}
