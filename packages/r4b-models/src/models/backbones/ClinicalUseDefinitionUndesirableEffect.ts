import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClinicalUseDefinitionUndesirableEffect,
  ICodeableConcept,
  ICodeableReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClinicalUseDefinitionUndesirableEffect */
const CLINICAL_USE_DEFINITION_UNDESIRABLE_EFFECT_PROPERTIES = [
  'symptomConditionEffect',
  'classification',
  'frequencyOfOccurrence',
] as const;

/**
 * ClinicalUseDefinitionUndesirableEffect - A possible negative outcome from the use of this treatment
 *
 * @see https://hl7.org/fhir/R4/clinicalusedefinitionundesirableeffect.html
 *
 * @example
 * const clinicalUseDefinitionUndesirableEffect = new ClinicalUseDefinitionUndesirableEffect({
 *   // ... properties
 * });
 */
export class ClinicalUseDefinitionUndesirableEffect extends BackboneElement implements IClinicalUseDefinitionUndesirableEffect {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The situation in which the undesirable effect may manifest */
  symptomConditionEffect?: ICodeableReference;

  /** High level classification of the effect */
  classification?: ICodeableConcept;

  /** How often the effect is seen */
  frequencyOfOccurrence?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClinicalUseDefinitionUndesirableEffect>) {
    super(data);
    if (data) {
      this.assignProps(data, CLINICAL_USE_DEFINITION_UNDESIRABLE_EFFECT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClinicalUseDefinitionUndesirableEffect from a JSON object
   */
  static fromJSON(json: IClinicalUseDefinitionUndesirableEffect): ClinicalUseDefinitionUndesirableEffect {
    return new ClinicalUseDefinitionUndesirableEffect(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClinicalUseDefinitionUndesirableEffect with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClinicalUseDefinitionUndesirableEffect>): ClinicalUseDefinitionUndesirableEffect {
    return new ClinicalUseDefinitionUndesirableEffect({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClinicalUseDefinitionUndesirableEffect by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClinicalUseDefinitionUndesirableEffect) => Partial<IClinicalUseDefinitionUndesirableEffect>): ClinicalUseDefinitionUndesirableEffect {
    const currentData = this.toJSON();
    return new ClinicalUseDefinitionUndesirableEffect({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClinicalUseDefinitionUndesirableEffect)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClinicalUseDefinitionUndesirableEffect {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLINICAL_USE_DEFINITION_UNDESIRABLE_EFFECT_PROPERTIES);
    return result as IClinicalUseDefinitionUndesirableEffect;
  }

  /**
   * Create a deep clone of this ClinicalUseDefinitionUndesirableEffect
   */
  clone(): ClinicalUseDefinitionUndesirableEffect {
    return new ClinicalUseDefinitionUndesirableEffect(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClinicalUseDefinitionUndesirableEffect
   */
  toString(): string {
    const parts: string[] = ['ClinicalUseDefinitionUndesirableEffect'];
    return parts.join(', ');
  }
}
