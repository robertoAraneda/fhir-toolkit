import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureReportGroup } from '../../models/backbones/MeasureReportGroup.js';
import type {
  ICodeableConcept,
  IMeasureReportGroup,
  IMeasureReportGroupPopulation,
  IMeasureReportGroupStratifier,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * MeasureReportGroupBuilder - Fluent builder for MeasureReportGroup backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureReportGroup = new MeasureReportGroupBuilder()
 *   .setCode(value)
 *   .addPopulation({ ... })
 *   .build();
 */
export class MeasureReportGroupBuilder extends BackboneElementBuilder<MeasureReportGroup, IMeasureReportGroup> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Meaning of the group
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set measureScore
   * What score this group achieved
   */
  setMeasureScore(measureScore: IQuantity): this {
    this.data.measureScore = measureScore;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add population
   * The populations in the group
   */
  addPopulation(population: IMeasureReportGroupPopulation): this {
    return this.addToArray('population', population);
  }

  /**
   * Add stratifier
   * Stratification results
   */
  addStratifier(stratifier: IMeasureReportGroupStratifier): this {
    return this.addToArray('stratifier', stratifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureReportGroup instance
   */
  build(): MeasureReportGroup {
    return new MeasureReportGroup(this.data);
  }

  /**
   * Build and validate the MeasureReportGroup instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureReportGroup> {
    const measureReportGroup = this.build();
    await measureReportGroup.validateOrThrow();
    return measureReportGroup;
  }
}
