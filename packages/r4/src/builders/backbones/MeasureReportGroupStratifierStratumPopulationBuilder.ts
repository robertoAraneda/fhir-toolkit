import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureReportGroupStratifierStratumPopulation } from '../../models/backbones/MeasureReportGroupStratifierStratumPopulation.js';
import type {
  ICodeableConcept,
  IMeasureReportGroupStratifierStratumPopulation,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MeasureReportGroupStratifierStratumPopulationBuilder - Fluent builder for MeasureReportGroupStratifierStratumPopulation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureReportGroupStratifierStratumPopulation = new MeasureReportGroupStratifierStratumPopulationBuilder()
 *   .setCode(value)
 *   .build();
 */
export class MeasureReportGroupStratifierStratumPopulationBuilder extends BackboneElementBuilder<MeasureReportGroupStratifierStratumPopulation, IMeasureReportGroupStratifierStratumPopulation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set count
   * Size of the population
   */
  setCount(count: number): this {
    this.data.count = count;
    return this;
  }

  /**
   * Set subjectResults
   * For subject-list reports, the subject results in this population
   */
  setSubjectResults(subjectResults: IReference<'List'>): this {
    this.data.subjectResults = subjectResults;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureReportGroupStratifierStratumPopulation instance
   */
  build(): MeasureReportGroupStratifierStratumPopulation {
    return new MeasureReportGroupStratifierStratumPopulation(this.data);
  }

  /**
   * Build and validate the MeasureReportGroupStratifierStratumPopulation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureReportGroupStratifierStratumPopulation> {
    const measureReportGroupStratifierStratumPopulation = this.build();
    await measureReportGroupStratifierStratumPopulation.validateOrThrow();
    return measureReportGroupStratifierStratumPopulation;
  }
}
