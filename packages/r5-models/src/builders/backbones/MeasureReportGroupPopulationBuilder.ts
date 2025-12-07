import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureReportGroupPopulation } from '../../models/backbones/MeasureReportGroupPopulation.js';
import type {
  ICodeableConcept,
  IMeasureReportGroupPopulation,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * MeasureReportGroupPopulationBuilder - Fluent builder for MeasureReportGroupPopulation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureReportGroupPopulation = new MeasureReportGroupPopulationBuilder()
 *   .setLinkId(value)
 *   .addSubjectReport({ ... })
 *   .build();
 */
export class MeasureReportGroupPopulationBuilder extends BackboneElementBuilder<MeasureReportGroupPopulation, IMeasureReportGroupPopulation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set linkId
   * Pointer to specific population from Measure
   */
  setLinkId(linkId: string): this {
    this.data.linkId = linkId;
    return this;
  }

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

  /**
   * Set subjects
   * What individual(s) in the population
   */
  setSubjects(subjects: IReference<'Group'>): this {
    this.data.subjects = subjects;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add subjectReport
   * For subject-list reports, a subject result in this population
   */
  addSubjectReport(subjectReport: IReference<'MeasureReport'>): this {
    return this.addToArray('subjectReport', subjectReport);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureReportGroupPopulation instance
   */
  build(): MeasureReportGroupPopulation {
    return new MeasureReportGroupPopulation(this.data);
  }

  /**
   * Build and validate the MeasureReportGroupPopulation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureReportGroupPopulation> {
    const measureReportGroupPopulation = this.build();
    await measureReportGroupPopulation.validateOrThrow();
    return measureReportGroupPopulation;
  }
}
