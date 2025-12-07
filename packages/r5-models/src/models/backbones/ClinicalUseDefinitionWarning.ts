import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClinicalUseDefinitionWarning,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClinicalUseDefinitionWarning */
const CLINICAL_USE_DEFINITION_WARNING_PROPERTIES = [
  'description',
  '_description',
  'code',
] as const;

/**
 * ClinicalUseDefinitionWarning - Critical environmental, health or physical risks or hazards. For example 'Do not operate heavy machinery', 'May cause drowsiness'
 *
 * @see https://hl7.org/fhir/R4/clinicalusedefinitionwarning.html
 *
 * @example
 * const clinicalUseDefinitionWarning = new ClinicalUseDefinitionWarning({
 *   // ... properties
 * });
 */
export class ClinicalUseDefinitionWarning extends BackboneElement implements IClinicalUseDefinitionWarning {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A textual definition of this warning, with formatting */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** A coded or unformatted textual definition of this warning */
  code?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClinicalUseDefinitionWarning>) {
    super(data);
    if (data) {
      this.assignProps(data, CLINICAL_USE_DEFINITION_WARNING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClinicalUseDefinitionWarning from a JSON object
   */
  static fromJSON(json: IClinicalUseDefinitionWarning): ClinicalUseDefinitionWarning {
    return new ClinicalUseDefinitionWarning(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClinicalUseDefinitionWarning with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClinicalUseDefinitionWarning>): ClinicalUseDefinitionWarning {
    return new ClinicalUseDefinitionWarning({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClinicalUseDefinitionWarning by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClinicalUseDefinitionWarning) => Partial<IClinicalUseDefinitionWarning>): ClinicalUseDefinitionWarning {
    const currentData = this.toJSON();
    return new ClinicalUseDefinitionWarning({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClinicalUseDefinitionWarning)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClinicalUseDefinitionWarning {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLINICAL_USE_DEFINITION_WARNING_PROPERTIES);
    return result as IClinicalUseDefinitionWarning;
  }

  /**
   * Create a deep clone of this ClinicalUseDefinitionWarning
   */
  clone(): ClinicalUseDefinitionWarning {
    return new ClinicalUseDefinitionWarning(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClinicalUseDefinitionWarning
   */
  toString(): string {
    const parts: string[] = ['ClinicalUseDefinitionWarning'];
    return parts.join(', ');
  }
}
