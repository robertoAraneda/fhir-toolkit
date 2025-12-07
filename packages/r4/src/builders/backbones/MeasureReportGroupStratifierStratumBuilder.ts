import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureReportGroupStratifierStratum } from '../../models/backbones/MeasureReportGroupStratifierStratum.js';
import type {
  ICodeableConcept,
  IMeasureReportGroupStratifierStratum,
  IMeasureReportGroupStratifierStratumComponent,
  IMeasureReportGroupStratifierStratumPopulation,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * MeasureReportGroupStratifierStratumBuilder - Fluent builder for MeasureReportGroupStratifierStratum backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureReportGroupStratifierStratum = new MeasureReportGroupStratifierStratumBuilder()
 *   .setValue(value)
 *   .addComponent({ ... })
 *   .build();
 */
export class MeasureReportGroupStratifierStratumBuilder extends BackboneElementBuilder<MeasureReportGroupStratifierStratum, IMeasureReportGroupStratifierStratum> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set value
   * The stratum value, e.g. male
   */
  setValue(value: ICodeableConcept): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set measureScore
   * What score this stratum achieved
   */
  setMeasureScore(measureScore: IQuantity): this {
    this.data.measureScore = measureScore;
    return this;
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
