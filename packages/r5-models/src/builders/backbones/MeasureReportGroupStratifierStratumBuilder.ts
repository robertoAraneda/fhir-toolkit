import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureReportGroupStratifierStratum } from '../../models/backbones/MeasureReportGroupStratifierStratum.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IDuration,
  IMeasureReportGroupStratifierStratum,
  IMeasureReportGroupStratifierStratumComponent,
  IMeasureReportGroupStratifierStratumPopulation,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * MeasureReportGroupStratifierStratumBuilder - Fluent builder for MeasureReportGroupStratifierStratum backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureReportGroupStratifierStratum = new MeasureReportGroupStratifierStratumBuilder()
 *   .addComponent({ ... })
 *   .build();
 */
export class MeasureReportGroupStratifierStratumBuilder extends BackboneElementBuilder<MeasureReportGroupStratifierStratum, IMeasureReportGroupStratifierStratum> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCodeableConcept, valueBoolean, valueQuantity, valueRange, valueReference)
   * @param type - 'CodeableConcept' | 'Boolean' | 'Quantity' | 'Range' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'Boolean' | 'Quantity' | 'Range' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IMeasureReportGroupStratifierStratum;
    const otherKeys: (keyof IMeasureReportGroupStratifierStratum)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IMeasureReportGroupStratifierStratum);
      otherKeys.push('_valueCodeableConcept' as keyof IMeasureReportGroupStratifierStratum);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IMeasureReportGroupStratifierStratum);
      otherKeys.push('_valueBoolean' as keyof IMeasureReportGroupStratifierStratum);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IMeasureReportGroupStratifierStratum);
      otherKeys.push('_valueQuantity' as keyof IMeasureReportGroupStratifierStratum);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IMeasureReportGroupStratifierStratum);
      otherKeys.push('_valueRange' as keyof IMeasureReportGroupStratifierStratum);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IMeasureReportGroupStratifierStratum);
      otherKeys.push('_valueReference' as keyof IMeasureReportGroupStratifierStratum);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set measureScore choice type (measureScoreQuantity, measureScoreDateTime, measureScoreCodeableConcept, measureScorePeriod, measureScoreRange, measureScoreDuration)
   * @param type - 'Quantity' | 'DateTime' | 'CodeableConcept' | 'Period' | 'Range' | 'Duration'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setMeasureScore('Quantity', value)
   */
  setMeasureScore<T extends 'Quantity' | 'DateTime' | 'CodeableConcept' | 'Period' | 'Range' | 'Duration'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `measureScore${type}` as keyof IMeasureReportGroupStratifierStratum;
    const otherKeys: (keyof IMeasureReportGroupStratifierStratum)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('measureScoreQuantity' as keyof IMeasureReportGroupStratifierStratum);
      otherKeys.push('_measureScoreQuantity' as keyof IMeasureReportGroupStratifierStratum);
    }
    if (type !== 'DateTime') {
      otherKeys.push('measureScoreDateTime' as keyof IMeasureReportGroupStratifierStratum);
      otherKeys.push('_measureScoreDateTime' as keyof IMeasureReportGroupStratifierStratum);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('measureScoreCodeableConcept' as keyof IMeasureReportGroupStratifierStratum);
      otherKeys.push('_measureScoreCodeableConcept' as keyof IMeasureReportGroupStratifierStratum);
    }
    if (type !== 'Period') {
      otherKeys.push('measureScorePeriod' as keyof IMeasureReportGroupStratifierStratum);
      otherKeys.push('_measureScorePeriod' as keyof IMeasureReportGroupStratifierStratum);
    }
    if (type !== 'Range') {
      otherKeys.push('measureScoreRange' as keyof IMeasureReportGroupStratifierStratum);
      otherKeys.push('_measureScoreRange' as keyof IMeasureReportGroupStratifierStratum);
    }
    if (type !== 'Duration') {
      otherKeys.push('measureScoreDuration' as keyof IMeasureReportGroupStratifierStratum);
      otherKeys.push('_measureScoreDuration' as keyof IMeasureReportGroupStratifierStratum);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add component
   * Stratifier component values
   */
  addComponent(component: IMeasureReportGroupStratifierStratumComponent): this {
    return this.addToArray('component', component);
  }

  /**
   * Add population
   * Population results in this stratum
   */
  addPopulation(population: IMeasureReportGroupStratifierStratumPopulation): this {
    return this.addToArray('population', population);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureReportGroupStratifierStratum instance
   */
  build(): MeasureReportGroupStratifierStratum {
    return new MeasureReportGroupStratifierStratum(this.data);
  }

  /**
   * Build and validate the MeasureReportGroupStratifierStratum instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureReportGroupStratifierStratum> {
    const measureReportGroupStratifierStratum = this.build();
    await measureReportGroupStratifierStratum.validateOrThrow();
    return measureReportGroupStratifierStratum;
  }
}
