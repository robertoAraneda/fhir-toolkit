import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureGroupPopulation } from '../../models/backbones/MeasureGroupPopulation.js';
import type {
  ICodeableConcept,
  IExpression,
  IMeasureGroupPopulation,
} from '@fhir-toolkit/r4b-types';

/**
 * MeasureGroupPopulationBuilder - Fluent builder for MeasureGroupPopulation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureGroupPopulation = new MeasureGroupPopulationBuilder()
 *   .setCode(value)
 *   .build();
 */
export class MeasureGroupPopulationBuilder extends BackboneElementBuilder<MeasureGroupPopulation, IMeasureGroupPopulation> {
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
   * Set description
   * The human readable description of this population criteria
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set criteria
   * The criteria that defines this population
   */
  setCriteria(criteria: IExpression): this {
    this.data.criteria = criteria;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureGroupPopulation instance
   */
  build(): MeasureGroupPopulation {
    return new MeasureGroupPopulation(this.data);
  }

  /**
   * Build and validate the MeasureGroupPopulation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureGroupPopulation> {
    const measureGroupPopulation = this.build();
    await measureGroupPopulation.validateOrThrow();
    return measureGroupPopulation;
  }
}
