import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClinicalUseDefinitionUndesirableEffect } from '../../models/backbones/ClinicalUseDefinitionUndesirableEffect.js';
import type {
  IClinicalUseDefinitionUndesirableEffect,
  ICodeableConcept,
  ICodeableReference,
} from '@fhir-toolkit/r5-types';

/**
 * ClinicalUseDefinitionUndesirableEffectBuilder - Fluent builder for ClinicalUseDefinitionUndesirableEffect backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const clinicalUseDefinitionUndesirableEffect = new ClinicalUseDefinitionUndesirableEffectBuilder()
 *   .setSymptomConditionEffect(value)
 *   .build();
 */
export class ClinicalUseDefinitionUndesirableEffectBuilder extends BackboneElementBuilder<ClinicalUseDefinitionUndesirableEffect, IClinicalUseDefinitionUndesirableEffect> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set symptomConditionEffect
   * The situation in which the undesirable effect may manifest
   */
  setSymptomConditionEffect(symptomConditionEffect: ICodeableReference): this {
    this.data.symptomConditionEffect = symptomConditionEffect;
    return this;
  }

  /**
   * Set classification
   * High level classification of the effect
   */
  setClassification(classification: ICodeableConcept): this {
    this.data.classification = classification;
    return this;
  }

  /**
   * Set frequencyOfOccurrence
   * How often the effect is seen
   */
  setFrequencyOfOccurrence(frequencyOfOccurrence: ICodeableConcept): this {
    this.data.frequencyOfOccurrence = frequencyOfOccurrence;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClinicalUseDefinitionUndesirableEffect instance
   */
  build(): ClinicalUseDefinitionUndesirableEffect {
    return new ClinicalUseDefinitionUndesirableEffect(this.data);
  }

  /**
   * Build and validate the ClinicalUseDefinitionUndesirableEffect instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClinicalUseDefinitionUndesirableEffect> {
    const clinicalUseDefinitionUndesirableEffect = this.build();
    await clinicalUseDefinitionUndesirableEffect.validateOrThrow();
    return clinicalUseDefinitionUndesirableEffect;
  }
}
