import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureGroup } from '../../models/backbones/MeasureGroup.js';
import type {
  ICodeableConcept,
  IMeasureGroup,
  IMeasureGroupPopulation,
  IMeasureGroupStratifier,
} from '@fhir-toolkit/r4b-types';

/**
 * MeasureGroupBuilder - Fluent builder for MeasureGroup backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureGroup = new MeasureGroupBuilder()
 *   .setCode(value)
 *   .addPopulation({ ... })
 *   .build();
 */
export class MeasureGroupBuilder extends BackboneElementBuilder<MeasureGroup, IMeasureGroup> {
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
   * Set description
   * Summary description
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add population
   * Population criteria
   */
  addPopulation(population: IMeasureGroupPopulation): this {
    return this.addToArray('population', population);
  }

  /**
   * Add stratifier
   * Stratifier criteria for the measure
   */
  addStratifier(stratifier: IMeasureGroupStratifier): this {
    return this.addToArray('stratifier', stratifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureGroup instance
   */
  build(): MeasureGroup {
    return new MeasureGroup(this.data);
  }

  /**
   * Build and validate the MeasureGroup instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureGroup> {
    const measureGroup = this.build();
    await measureGroup.validateOrThrow();
    return measureGroup;
  }
}
