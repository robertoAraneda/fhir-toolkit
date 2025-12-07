import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImmunizationRecommendationRecommendationDateCriterion } from '../../models/backbones/ImmunizationRecommendationRecommendationDateCriterion.js';
import type {
  ICodeableConcept,
  IImmunizationRecommendationRecommendationDateCriterion,
} from '@fhir-toolkit/r5-types';

/**
 * ImmunizationRecommendationRecommendationDateCriterionBuilder - Fluent builder for ImmunizationRecommendationRecommendationDateCriterion backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const immunizationRecommendationRecommendationDateCriterion = new ImmunizationRecommendationRecommendationDateCriterionBuilder()
 *   .setCode(value)
 *   .build();
 */
export class ImmunizationRecommendationRecommendationDateCriterionBuilder extends BackboneElementBuilder<ImmunizationRecommendationRecommendationDateCriterion, IImmunizationRecommendationRecommendationDateCriterion> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Type of date
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set value
   * Recommended date
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImmunizationRecommendationRecommendationDateCriterion instance
   */
  build(): ImmunizationRecommendationRecommendationDateCriterion {
    return new ImmunizationRecommendationRecommendationDateCriterion(this.data);
  }

  /**
   * Build and validate the ImmunizationRecommendationRecommendationDateCriterion instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImmunizationRecommendationRecommendationDateCriterion> {
    const immunizationRecommendationRecommendationDateCriterion = this.build();
    await immunizationRecommendationRecommendationDateCriterion.validateOrThrow();
    return immunizationRecommendationRecommendationDateCriterion;
  }
}
