import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicinalProductUndesirableEffect } from '../../models/resources/MedicinalProductUndesirableEffect.js';
import type {
  ICodeableConcept,
  IMedicinalProductUndesirableEffect,
  IPopulation,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductUndesirableEffectBuilder - Fluent builder for MedicinalProductUndesirableEffect resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductUndesirableEffect = new MedicinalProductUndesirableEffectBuilder()
 *   .setId('123')
 *   .setSymptomConditionEffect(value)
 *   .addSubject({ ... })
 *   .build();
 */
export class MedicinalProductUndesirableEffectBuilder extends DomainResourceBuilder<MedicinalProductUndesirableEffect, IMedicinalProductUndesirableEffect> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set symptomConditionEffect
   * The symptom, condition or undesirable effect
   */
  setSymptomConditionEffect(symptomConditionEffect: ICodeableConcept): this {
    this.data.symptomConditionEffect = symptomConditionEffect;
    return this;
  }

  /**
   * Set classification
   * Classification of the effect
   */
  setClassification(classification: ICodeableConcept): this {
    this.data.classification = classification;
    return this;
  }

  /**
   * Set frequencyOfOccurrence
   * The frequency of occurrence of the effect
   */
  setFrequencyOfOccurrence(frequencyOfOccurrence: ICodeableConcept): this {
    this.data.frequencyOfOccurrence = frequencyOfOccurrence;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add subject
   * The medication for which this is an indication
   */
  addSubject(subject: IReference<'MedicinalProduct' | 'Medication'>): this {
    return this.addToArray('subject', subject);
  }

  /**
   * Add population
   * The population group to which this applies
   */
  addPopulation(population: IPopulation): this {
    return this.addToArray('population', population);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductUndesirableEffect instance
   */
  build(): MedicinalProductUndesirableEffect {
    return new MedicinalProductUndesirableEffect(this.data);
  }

  /**
   * Build and validate the MedicinalProductUndesirableEffect instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductUndesirableEffect> {
    const medicinalProductUndesirableEffect = this.build();
    await medicinalProductUndesirableEffect.validateOrThrow();
    return medicinalProductUndesirableEffect;
  }
}
