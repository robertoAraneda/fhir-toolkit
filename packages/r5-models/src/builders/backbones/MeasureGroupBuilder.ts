import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureGroup } from '../../models/backbones/MeasureGroup.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMeasureGroup,
  IMeasureGroupPopulation,
  IMeasureGroupStratifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * MeasureGroupBuilder - Fluent builder for MeasureGroup backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureGroup = new MeasureGroupBuilder()
 *   .setLinkId(value)
 *   .addType({ ... })
 *   .build();
 */
export class MeasureGroupBuilder extends BackboneElementBuilder<MeasureGroup, IMeasureGroup> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set linkId
   * Unique id for group in measure
   */
  setLinkId(linkId: string): this {
    this.data.linkId = linkId;
    return this;
  }

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

  /**
   * Set basis
   * Population basis
   */
  setBasis(basis: string): this {
    this.data.basis = basis;
    return this;
  }

  /**
   * Set scoring
   * proportion | ratio | continuous-variable | cohort
   */
  setScoring(scoring: ICodeableConcept): this {
    this.data.scoring = scoring;
    return this;
  }

  /**
   * Set scoringUnit
   * What units?
   */
  setScoringUnit(scoringUnit: ICodeableConcept): this {
    this.data.scoringUnit = scoringUnit;
    return this;
  }

  /**
   * Set rateAggregation
   * How is rate aggregation performed for this measure
   */
  setRateAggregation(rateAggregation: string): this {
    this.data.rateAggregation = rateAggregation;
    return this;
  }

  /**
   * Set improvementNotation
   * increase | decrease
   */
  setImprovementNotation(improvementNotation: ICodeableConcept): this {
    this.data.improvementNotation = improvementNotation;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set subject choice type (subjectCodeableConcept, subjectReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSubject('CodeableConcept', value)
   */
  setSubject<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `subject${type}` as keyof IMeasureGroup;
    const otherKeys: (keyof IMeasureGroup)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('subjectCodeableConcept' as keyof IMeasureGroup);
      otherKeys.push('_subjectCodeableConcept' as keyof IMeasureGroup);
    }
    if (type !== 'Reference') {
      otherKeys.push('subjectReference' as keyof IMeasureGroup);
      otherKeys.push('_subjectReference' as keyof IMeasureGroup);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * process | outcome | structure | patient-reported-outcome | composite
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add library
   * Logic used by the measure group
   */
  addLibrary(library: string): this {
    return this.addToArray('library', library);
  }

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
