import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClinicalUseDefinitionInteractionInteractant,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClinicalUseDefinitionInteractionInteractant */
const CLINICAL_USE_DEFINITION_INTERACTION_INTERACTANT_PROPERTIES = [
  'itemReference',
  'itemCodeableConcept',
] as const;

/**
 * ClinicalUseDefinitionInteractionInteractant - The specific medication, food, substance or laboratory test that interacts
 *
 * @see https://hl7.org/fhir/R4/clinicalusedefinitioninteractioninteractant.html
 *
 * @example
 * const clinicalUseDefinitionInteractionInteractant = new ClinicalUseDefinitionInteractionInteractant({
 *   // ... properties
 * });
 */
export class ClinicalUseDefinitionInteractionInteractant extends BackboneElement implements IClinicalUseDefinitionInteractionInteractant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The specific medication, food or laboratory test that interacts */
  itemReference?: IReference;

  /** The specific medication, food or laboratory test that interacts */
  itemCodeableConcept?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClinicalUseDefinitionInteractionInteractant>) {
    super(data);
    if (data) {
      this.assignProps(data, CLINICAL_USE_DEFINITION_INTERACTION_INTERACTANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClinicalUseDefinitionInteractionInteractant from a JSON object
   */
  static fromJSON(json: IClinicalUseDefinitionInteractionInteractant): ClinicalUseDefinitionInteractionInteractant {
    return new ClinicalUseDefinitionInteractionInteractant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClinicalUseDefinitionInteractionInteractant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClinicalUseDefinitionInteractionInteractant>): ClinicalUseDefinitionInteractionInteractant {
    return new ClinicalUseDefinitionInteractionInteractant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClinicalUseDefinitionInteractionInteractant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClinicalUseDefinitionInteractionInteractant) => Partial<IClinicalUseDefinitionInteractionInteractant>): ClinicalUseDefinitionInteractionInteractant {
    const currentData = this.toJSON();
    return new ClinicalUseDefinitionInteractionInteractant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClinicalUseDefinitionInteractionInteractant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClinicalUseDefinitionInteractionInteractant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLINICAL_USE_DEFINITION_INTERACTION_INTERACTANT_PROPERTIES);
    return result as IClinicalUseDefinitionInteractionInteractant;
  }

  /**
   * Create a deep clone of this ClinicalUseDefinitionInteractionInteractant
   */
  clone(): ClinicalUseDefinitionInteractionInteractant {
    return new ClinicalUseDefinitionInteractionInteractant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClinicalUseDefinitionInteractionInteractant
   */
  toString(): string {
    const parts: string[] = ['ClinicalUseDefinitionInteractionInteractant'];
    return parts.join(', ');
  }
}
