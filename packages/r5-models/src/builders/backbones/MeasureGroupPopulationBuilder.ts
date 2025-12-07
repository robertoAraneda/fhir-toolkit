import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureGroupPopulation } from '../../models/backbones/MeasureGroupPopulation.js';
import type {
  ICodeableConcept,
  IExpression,
  IMeasureGroupPopulation,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * MeasureGroupPopulationBuilder - Fluent builder for MeasureGroupPopulation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureGroupPopulation = new MeasureGroupPopulationBuilder()
 *   .setLinkId(value)
 *   .build();
 */
export class MeasureGroupPopulationBuilder extends BackboneElementBuilder<MeasureGroupPopulation, IMeasureGroupPopulation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set linkId
   * Unique id for population in measure
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

  /**
   * Set groupDefinition
   * A group resource that defines this population
   */
  setGroupDefinition(groupDefinition: IReference<'Group'>): this {
    this.data.groupDefinition = groupDefinition;
    return this;
  }

  /**
   * Set inputPopulationId
   * Which population
   */
  setInputPopulationId(inputPopulationId: string): this {
    this.data.inputPopulationId = inputPopulationId;
    return this;
  }

  /**
   * Set aggregateMethod
   * Aggregation method for a measure score (e.g. sum, average, median, minimum, maximum, count)
   */
  setAggregateMethod(aggregateMethod: ICodeableConcept): this {
    this.data.aggregateMethod = aggregateMethod;
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
