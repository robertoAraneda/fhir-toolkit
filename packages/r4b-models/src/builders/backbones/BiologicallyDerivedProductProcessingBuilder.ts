import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BiologicallyDerivedProductProcessing } from '../../models/backbones/BiologicallyDerivedProductProcessing.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IBiologicallyDerivedProductProcessing,
  ICodeableConcept,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * BiologicallyDerivedProductProcessingBuilder - Fluent builder for BiologicallyDerivedProductProcessing backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const biologicallyDerivedProductProcessing = new BiologicallyDerivedProductProcessingBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class BiologicallyDerivedProductProcessingBuilder extends BackboneElementBuilder<BiologicallyDerivedProductProcessing, IBiologicallyDerivedProductProcessing> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Description of of processing
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set procedure
   * Procesing code
   */
  setProcedure(procedure: ICodeableConcept): this {
    this.data.procedure = procedure;
    return this;
  }

  /**
   * Set additive
   * Substance added during processing
   */
  setAdditive(additive: IReference<'Substance'>): this {
    this.data.additive = additive;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set time choice type (timeDateTime, timePeriod)
   * @param type - 'DateTime' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTime('DateTime', value)
   */
  setTime<T extends 'DateTime' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `time${type}` as keyof IBiologicallyDerivedProductProcessing;
    const otherKeys: (keyof IBiologicallyDerivedProductProcessing)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('timeDateTime' as keyof IBiologicallyDerivedProductProcessing);
      otherKeys.push('_timeDateTime' as keyof IBiologicallyDerivedProductProcessing);
    }
    if (type !== 'Period') {
      otherKeys.push('timePeriod' as keyof IBiologicallyDerivedProductProcessing);
      otherKeys.push('_timePeriod' as keyof IBiologicallyDerivedProductProcessing);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BiologicallyDerivedProductProcessing instance
   */
  build(): BiologicallyDerivedProductProcessing {
    return new BiologicallyDerivedProductProcessing(this.data);
  }

  /**
   * Build and validate the BiologicallyDerivedProductProcessing instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BiologicallyDerivedProductProcessing> {
    const biologicallyDerivedProductProcessing = this.build();
    await biologicallyDerivedProductProcessing.validateOrThrow();
    return biologicallyDerivedProductProcessing;
  }
}
