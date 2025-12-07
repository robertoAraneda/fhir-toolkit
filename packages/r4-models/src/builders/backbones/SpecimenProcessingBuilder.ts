import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SpecimenProcessing } from '../../models/backbones/SpecimenProcessing.js';
import type {
  ICodeableConcept,
  IPeriod,
  IReference,
  ISpecimenProcessing,
} from '@fhir-toolkit/r4-types';

/**
 * SpecimenProcessingBuilder - Fluent builder for SpecimenProcessing backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const specimenProcessing = new SpecimenProcessingBuilder()
 *   .setDescription(value)
 *   .addAdditive({ ... })
 *   .build();
 */
export class SpecimenProcessingBuilder extends BackboneElementBuilder<SpecimenProcessing, ISpecimenProcessing> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Textual description of procedure
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set procedure
   * Indicates the treatment step  applied to the specimen
   */
  setProcedure(procedure: ICodeableConcept): this {
    this.data.procedure = procedure;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set time choice type
   * @param type - 'DateTime' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTime('DateTime', value)
   */
  setTime<T extends 'DateTime' | 'Period'>(
    type: T,
    value: string
  ): this {
    const key = `time${type}` as keyof ISpecimenProcessing;
    const otherKeys: (keyof ISpecimenProcessing)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('timeDateTime' as keyof ISpecimenProcessing);
      otherKeys.push('_timeDateTime' as keyof ISpecimenProcessing);
    }
    if (type !== 'Period') {
      otherKeys.push('timePeriod' as keyof ISpecimenProcessing);
      otherKeys.push('_timePeriod' as keyof ISpecimenProcessing);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add additive
   * Material used in the processing step
   */
  addAdditive(additive: IReference<'Substance'>): this {
    return this.addToArray('additive', additive);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SpecimenProcessing instance
   */
  build(): SpecimenProcessing {
    return new SpecimenProcessing(this.data);
  }

  /**
   * Build and validate the SpecimenProcessing instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SpecimenProcessing> {
    const specimenProcessing = this.build();
    await specimenProcessing.validateOrThrow();
    return specimenProcessing;
  }
}
