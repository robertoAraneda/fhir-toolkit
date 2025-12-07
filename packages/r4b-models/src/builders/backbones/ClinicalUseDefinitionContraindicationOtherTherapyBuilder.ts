import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClinicalUseDefinitionContraindicationOtherTherapy } from '../../models/backbones/ClinicalUseDefinitionContraindicationOtherTherapy.js';
import type {
  IClinicalUseDefinitionContraindicationOtherTherapy,
  ICodeableConcept,
  ICodeableReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ClinicalUseDefinitionContraindicationOtherTherapyBuilder - Fluent builder for ClinicalUseDefinitionContraindicationOtherTherapy backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const clinicalUseDefinitionContraindicationOtherTherapy = new ClinicalUseDefinitionContraindicationOtherTherapyBuilder()
 *   .setRelationshipType(value)
 *   .build();
 */
export class ClinicalUseDefinitionContraindicationOtherTherapyBuilder extends BackboneElementBuilder<ClinicalUseDefinitionContraindicationOtherTherapy, IClinicalUseDefinitionContraindicationOtherTherapy> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set relationshipType
   * The type of relationship between the product indication/contraindication and another therapy
   */
  setRelationshipType(relationshipType: ICodeableConcept): this {
    this.data.relationshipType = relationshipType;
    return this;
  }

  /**
   * Set therapy
   * Reference to a specific medication as part of an indication or contraindication
   */
  setTherapy(therapy: ICodeableReference): this {
    this.data.therapy = therapy;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClinicalUseDefinitionContraindicationOtherTherapy instance
   */
  build(): ClinicalUseDefinitionContraindicationOtherTherapy {
    return new ClinicalUseDefinitionContraindicationOtherTherapy(this.data);
  }

  /**
   * Build and validate the ClinicalUseDefinitionContraindicationOtherTherapy instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClinicalUseDefinitionContraindicationOtherTherapy> {
    const clinicalUseDefinitionContraindicationOtherTherapy = this.build();
    await clinicalUseDefinitionContraindicationOtherTherapy.validateOrThrow();
    return clinicalUseDefinitionContraindicationOtherTherapy;
  }
}
