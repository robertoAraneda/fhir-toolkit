import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClinicalUseDefinitionContraindicationOtherTherapy,
  ICodeableConcept,
  ICodeableReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClinicalUseDefinitionContraindicationOtherTherapy */
const CLINICAL_USE_DEFINITION_CONTRAINDICATION_OTHER_THERAPY_PROPERTIES = [
  'relationshipType',
  'therapy',
] as const;

/**
 * ClinicalUseDefinitionContraindicationOtherTherapy - Information about use of the product in relation to other therapies described as part of the contraindication
 *
 * @see https://hl7.org/fhir/R4B/clinicalusedefinitioncontraindicationothertherapy.html
 *
 * @example
 * const clinicalUseDefinitionContraindicationOtherTherapy = new ClinicalUseDefinitionContraindicationOtherTherapy({
 *   // ... properties
 * });
 */
export class ClinicalUseDefinitionContraindicationOtherTherapy extends BackboneElement implements IClinicalUseDefinitionContraindicationOtherTherapy {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of relationship between the product indication/contraindication and another therapy */
  relationshipType: ICodeableConcept;

  /** Reference to a specific medication as part of an indication or contraindication */
  therapy: ICodeableReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClinicalUseDefinitionContraindicationOtherTherapy>) {
    super(data);
    if (data) {
      this.assignProps(data, CLINICAL_USE_DEFINITION_CONTRAINDICATION_OTHER_THERAPY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClinicalUseDefinitionContraindicationOtherTherapy from a JSON object
   */
  static fromJSON(json: IClinicalUseDefinitionContraindicationOtherTherapy): ClinicalUseDefinitionContraindicationOtherTherapy {
    return new ClinicalUseDefinitionContraindicationOtherTherapy(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClinicalUseDefinitionContraindicationOtherTherapy with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClinicalUseDefinitionContraindicationOtherTherapy>): ClinicalUseDefinitionContraindicationOtherTherapy {
    return new ClinicalUseDefinitionContraindicationOtherTherapy({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClinicalUseDefinitionContraindicationOtherTherapy by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClinicalUseDefinitionContraindicationOtherTherapy) => Partial<IClinicalUseDefinitionContraindicationOtherTherapy>): ClinicalUseDefinitionContraindicationOtherTherapy {
    const currentData = this.toJSON();
    return new ClinicalUseDefinitionContraindicationOtherTherapy({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClinicalUseDefinitionContraindicationOtherTherapy)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClinicalUseDefinitionContraindicationOtherTherapy {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLINICAL_USE_DEFINITION_CONTRAINDICATION_OTHER_THERAPY_PROPERTIES);
    return result as IClinicalUseDefinitionContraindicationOtherTherapy;
  }

  /**
   * Create a deep clone of this ClinicalUseDefinitionContraindicationOtherTherapy
   */
  clone(): ClinicalUseDefinitionContraindicationOtherTherapy {
    return new ClinicalUseDefinitionContraindicationOtherTherapy(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClinicalUseDefinitionContraindicationOtherTherapy
   */
  toString(): string {
    const parts: string[] = ['ClinicalUseDefinitionContraindicationOtherTherapy'];
    return parts.join(', ');
  }
}
